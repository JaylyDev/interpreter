const e="Attibutions",n="Packages used in GameTest Interpreter add-on",r=[{name:"typescript",author:"Microsoft Corp.",license:"Apache-2.0",version:"4.6.3"},{name:"jsonschema",author:"Tom de Grunt <tom@degrunt.nl>",version:"1.4.0",license:"MIT"},{author:"blueimp",version:"2.19.0",name:"JavaScript MD5",license:"MIT"},{author:null,name:"base64",version:null,license:"SEE LICENSE IN https://creativecommons.org/licenses/by/2.0/uk/legalcode"},{author:null,name:"clonejson",version:null,license:"SEE LICENSE IN https://creativecommons.org/licenses/by-sa/3.0/legalcode"},{author:"Angel Marin, Paul Johnston",name:"SHA256",version:null,license:"SEE LICENSE IN https://creativecommons.org/licenses/by/2.0/uk/legalcode"},{author:"FrostIce482",name:"viewObj",version:null,license:"MIT"},{author:"Jake Shirley, Mike Ammerlaan",name:"@types/mojang-minecraft",version:"0.1.5",license:"MIT"},{author:"Jake Shirley, Mike Ammerlaan",name:"@types/mojang-gametest",version:"0.1.5",license:"MIT"},{author:"Jake Shirley, Mike Ammerlaan",name:"@types/mojang-minecraft-ui",version:null,license:"MIT"},{author:"JaylyMC",name:"interpreter",version:"1.19.0",license:"GPL-3.0-or-later"}];export default function a(){var a=`${e}\n    ${n}\n`;for(let e of r){var{name:o,author:t,version:s,license:i}=e;"string"!=typeof o&&(o=""),"string"!=typeof t&&(t=""),/^[0-9]+\.[0-9]+\.[0-9]+$/i.test(s)||(s="1.0.0"),"string"!=typeof i&&(i="UNLICENSED"),a+=`Package: ${o}\n    Author: ${t}\n    Version: ${s}\n    License: ${i}\n`}return a}