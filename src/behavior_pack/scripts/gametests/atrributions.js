const attibutions = {
  title: "Attibutions",
  description: "Packages used in GameTest Interpreter add-on",
  Packages: [
    {
      name: "typescript",
      author: "Microsoft Corp.",
      license: "Apache-2.0",
      version: "4.6.3"
    },
    {
      name: "jsonschema",
      author: "Tom de Grunt <tom@degrunt.nl>",
      version: "1.4.0",
      license: "MIT"
    },
    {
      author: "blueimp",
      version: "2.19.0",
      name: "JavaScript MD5",
      license: "MIT"
    },
    {
      author: null,
      name: "base64",
      version: null,
      license: "SEE LICENSE IN https://creativecommons.org/licenses/by/2.0/uk/legalcode"
    },
    {
      author: null,
      name: "clonejson",
      version: null,
      license: "SEE LICENSE IN https://creativecommons.org/licenses/by-sa/3.0/legalcode"
    },
    {
      author: "Angel Marin, Paul Johnston",
      name: "SHA256",
      version: null,
      license: "SEE LICENSE IN https://creativecommons.org/licenses/by/2.0/uk/legalcode"
    },
    {
      author: "FrostIce482",
      name: "viewObj",
      version: null,
      license: "MIT"
    },
    {
      author: "Jake Shirley, Mike Ammerlaan",
      name: "@types/mojang-minecraft",
      version: "0.1.6",
      license: "MIT"
    },
    {
      author: "Jake Shirley, Mike Ammerlaan",
      name: "@types/mojang-gametest",
      version: "0.1.5",
      license: "MIT"
    },
    {
      author: "Jake Shirley, Mike Ammerlaan",
      name: "@types/mojang-minecraft-ui",
      version: "0.1.0",
      license: "MIT"
    },
    {
      author: "Jake Shirley, Mike Ammerlaan",
      name: "@types/mojang-minecraft-server-admin",
      version: "0.1.0",
      license: "MIT"
    },
    {
      author: "Jake Shirley, Mike Ammerlaan",
      name: "@types/mojang-net",
      version: "0.1.0",
      license: "MIT"
    },
    {
      author: "JaylyMC",
      name: "interpreter",
      version: "1.19.10",
      license: "GPL-3.0-or-later"
    }
  ]
}

/**
 * @returns {string} attibution text
 */
export default function getAttibutions () {
  var text = `${attibutions.title}\n    ${attibutions.description}\n`;

  for (let Package of attibutions.Packages) {
    var { name, author, version, license } = Package;

    if (typeof name !== "string") name = "";
    if (typeof author !== "string") author = "";
    if (!/^[0-9]+\.[0-9]+\.[0-9]+$/i.test(version)) version = "1.0.0";
    if (typeof license !== "string") license = "UNLICENSED";
    text += `Package: ${name}\n    Author: ${author}\n    Version: ${version}\n    License: ${license}\n`
  }

  return text;
}