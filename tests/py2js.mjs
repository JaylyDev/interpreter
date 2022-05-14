import * as rapydscript from "../src/behavior_pack/scripts/rapydscript/lib/rapydscript.js";
// import * as rapydscript from "../build/behavior_pack/scripts/rapydscript/lib/rapydscript.js";

let input = `e`
let JSCode = rapydscript.compile(`${input}`, {}).replace(/\`\{([^]+)\}\`/g, "`${$1}`")

console.log(JSCode)