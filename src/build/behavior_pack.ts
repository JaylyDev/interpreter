import * as json from 'json-obfuscator';
import * as fs from 'fs-extra';
import { behaviorPackDir, rootDir } from './paths';
import * as path from 'path';

const bpPath = path.join(rootDir, 'src', 'behavior_pack');
const distPath = path.join(behaviorPackDir);

fs.existsSync(distPath) ? true : fs.mkdirSync(distPath);

for (const file of fs.readdirSync(bpPath)) {
  if (file === 'scripts') continue; // ignoring scripts folder
  
  console.log('Copying', file);
  fs.copySync(path.join(bpPath, file), path.join(distPath, file), { recursive: true, overwrite: true });
  console.log('Copied', file);

  json.obfuscateDir(path.join(distPath, file));
  console.log('Obfuscated', file);
};

console.log('Copied Resource Pack files to dist');