// import * as rapydscript from "../src/behavior_pack/scripts/rapydscript/lib/rapydscript.js";
import * as rapydscript from "rapydscript";

let input = `import os`
let JSCode = rapydscript.compile(`${input}`, {}).replace(/\`\{([^]+)\}\`/g, "`${$1}`")

console.log(JSCode)