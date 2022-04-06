const path = require('path');
const fs = require('fs');

function ListFiles(dir, done) {
  var results = [];
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          ListFiles(file, function (err, res) {
            results = results.concat(res);
            next();
          });
        } else { results.push(file); next(); };
      });
    })();
  });
};

/**
 * Escape string to unicode
 * @param {string} value 
 * @returns {string}
 */
 function escapeToUnicode(value) {
  for(var newString = '', i = 0, unicode; !isNaN(unicode = value.charCodeAt(i++));)
      newString += '\\u' + `0000${unicode.toString(16)}`.slice(-4);
  return newString;
};

/**
 * Validate JSON first. Obfuscate a whole json string
 * @param {string} value
 * @returns {string}
 */
 function obfuscateJSON(value) {
  const stringRegex = /"(?:"|.)*?"/gm;
  
  const syntaxArr = value.split(stringRegex), stringArr = `"${value}"`.split(stringRegex).slice(1, -1);
  
  let unicodeArr = [], obfuscated = '';
  stringArr.forEach(str => unicodeArr.push(`"${escapeToUnicode(str).replace(/\\u005c$/g, '\\')}"`));
  syntaxArr.map((value, index) => obfuscated += `${value}${unicodeArr[index] ? unicodeArr[index] : ''}`);
  obfuscated = obfuscated.replace(/\\u005c\\u006e/g, '\\n');
  obfuscated = obfuscated.replace(/\\u0041\\u0072\\u0072\\u0061\\u0079\\u002e\\u0073\\u006b\\u0069\\u006e\\u0073/g, 'Array.skins');
  /* For whatever reason this error occurs if i dont replace array.skins in unicode:

  [Rendering][error]-render_controllers/efa2a22a83688dafef5c8b18e2af2e89.json | render_controllers | controller.render.terminator | arrays | textures | Array.skins | child 'Array.skins' not valid here.

  [Geometry][error]-entity:terminator | entity:terminator | Invalid render controller: controller.render.terminator
  
  */

  return obfuscated;
};

var credit_msg = `/********************************************************\n+*   (c) JaylyMC. All rights reserved.                    *\n+*********************************************************/\n\n`;
var inputDirectoryPaths = [path.join(`${__dirname}\\..\\behavior_pack`), path.join(`${__dirname}\\..\\resource_pack`)];
var outputDirectoryPaths = [path.join(`${__dirname}\\..\\..\\build\\behavior_pack`), path.join(`${__dirname}\\..\\..\\build\\resource_pack`)];
var obfuscate = true;
var minify = true;
var show_credit = true; // Modify credit_msg if show_credit = true

for (const index in inputDirectoryPaths) ListFiles(inputDirectoryPaths[index], function (err, files) {
  if (err) throw err;
  var extention = '.json';
  files.forEach(function (file) {
    var a = file.split('');
    var filename = [a[a.length - 5], a[a.length - 4], a[a.length - 3], a[a.length - 2], a[a.length - 1]].toString().replace(/,/g, '');
    if (filename.toLowerCase() == extention.toLowerCase()) {      
      console.log(`\x1b[32m${extention} file found \x1b[0m- ${file.replace(inputDirectoryPaths[index], '')}`);
      if (minify == true) {  
        try {
          var content = JSON.stringify(JSON.parse(fs.readFileSync(`${file}`).toString().replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m)));
        } catch (err) {
          console.error(`\x1b[31mUnable to minify ${file.replace(inputDirectoryPaths[index], '')}\x1b[0m`);
          console.error(err);
          var content = fs.readFileSync(`${file}`).toString().replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
        };
      } else {
        var content = fs.readFileSync(`${file}`).toString().replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
      };
      var OutputFilepath = file.replace(inputDirectoryPaths[index], outputDirectoryPaths[index]).split('\\');
      var FileOutputDirectoryPath = OutputFilepath.slice(0, -1).toString().replace(/,/g, '/');
      var OutputFilename = OutputFilepath.slice(OutputFilepath.length - 1, OutputFilepath.length - 0).toString().replace(/,/g, '\\');
      fs.mkdirSync(FileOutputDirectoryPath, { recursive: true });
      if (obfuscate == true) { content = obfuscateJSON(content); } else {};
      if (show_credit == true){ content = credit_msg + content; } else {};
      fs.writeFileSync(`${FileOutputDirectoryPath}\\${OutputFilename}`, content, function (err) {
        if (err) { return console.error(err); };
      });
    } else {
      console.log(`\x1b[32mOther type of file found (ignored) \x1b[0m- ${file.replace(inputDirectoryPaths[index], '')}`);
    };
  });
});
