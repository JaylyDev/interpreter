const Fs = require('fs');
const Path = require('path');
const { minify } = require('terser');

const src = Path.join(__dirname, '../');
const build = Path.join(__dirname, '../../build/');

readDirectory(src); // Start reading with src directory.

function readDirectory(dirPath)
{
    Fs.readdir(dirPath, (err, files) => 
    {
        if(err)
        {
            console.error("Could not list directory.", err);
            process.exit(1);
        }

        files.forEach((file, index) => // loop through every file
        {
            let path = Path.join(dirPath, file);

            Fs.stat(path, (err, stat) => 
            {
                if(err)
                {
                    console.log("error in stating file.", err);
                    return;
                }

                if(stat.isFile())
                {
                    const newPath = path.replace(src, build); // Replace src path with build path.
                    Fs.copyFileSync(path, newPath); // Copy file from old path in src to new path in build.
                    if(newPath.endsWith(".js")) // Check if it is javascript file.
                    {
                        obfuscate(newPath); // Obfuscate copied file in build folder.
                    }
                }
                else if(stat.isDirectory())
                {
                    var newDir = path.replace(src, build); // Replace src path with build path.
                    if (!Fs.existsSync(newDir)) // Check if directory exists or not.
                    {
                        Fs.mkdirSync(newDir); // Create new directory.
                    }
                    readDirectory(path); // Further read the folder.
                }
            });         
        });
    });
}

const compressFile = (filePath) => !filePath.endsWith("scripts\\typescript\\typescript.js") && !filePath.endsWith("scripts\\rapydscript\\lib\\rapydscript.js") && !filePath.includes("interpreter\\build\\compile")

async function obfuscate(filePath)
{
    console.log(filePath);
    const content = Fs.readFileSync(filePath).toString(); // Read the files content.
    var result = {};
    if (compressFile(filePath)) {
        result = await minify(content, {
            module: true,
            compress: {},
            mangle: {},
            output: {},
            parse: {},
            rename: {}
        }); // Generated minified and obfuscated code
    } else result.code = content;

    Fs.writeFileSync(filePath, result.code); // Write obfuscted and minified code generated back to file.
}