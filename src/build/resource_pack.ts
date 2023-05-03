import * as json from 'json-obfuscator';
import * as fs from 'fs-extra';
import { resourcePackDir, rootDir } from './paths';
import * as path from 'path';

const rpPath = path.join(rootDir, 'src', 'resource_pack');
const distPath = path.join(resourcePackDir);

fs.existsSync(distPath) ? true : fs.mkdirSync(distPath);

for (const file of fs.readdirSync(rpPath)) {
  console.log('Copying', file);
  const dist = path.join(distPath, file);
  fs.copySync(path.join(rpPath, file), dist, { recursive: true, overwrite: true });
  console.log('Copied', file);

  if (fs.statSync(dist).isDirectory()) json.obfuscateDir(dist);
  else json.obfuscateFile(dist);
  
  console.log('Obfuscated', file);
};

console.log('Copied Resource Pack files to dist');