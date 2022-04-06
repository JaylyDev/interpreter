const fs = require("fs");
const path = require("path");

const libFolder = fs.readdirSync(path.join(`${__dirname}/typescript/lib`))

try { fs.rmSync(path.join(`${__dirname}/bin`), { recursive: true }) } catch {}
fs.mkdirSync(path.join(`${__dirname}/bin/lib`), { recursive: true });
// fs.rmSync(path.join(`${__dirname}/dtsExport.js`));
fs.writeFileSync(path.join(`${__dirname}/dtsExport.js`), "");

for (var file of libFolder) if (file.endsWith(".d.ts")) {
  fs.writeFileSync(
    path.join(`${__dirname}/bin/lib/${file.replace(/.d.ts/g, '.d.js')}`),
    `export const ${file.replace(/\./g, '_')} = \`${fs.readFileSync(path.join(`${__dirname}/typescript/lib/${file}`)).toString().replace(/`/g, '\\`').replace(/${/, '\\${')}\``
  );
  fs.appendFileSync(path.join(`${__dirname}/bin/dtsExport.js`), `import { ${file.replace(/\./g, '_')} } from "./bin/${file.replace(/.d.ts/g, '.d.js')}"\nexport const ${file.replace(/.d.ts/g, '').replace(/\./g, '_')} = ${file.replace(/\./g, '_')}\n`)
}