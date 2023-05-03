import * as https from "https";
import * as fs from "fs";
import path = require("path");
import { behaviorPackDir, resourcePackDir } from "./paths";
import * as dns from 'dns';

function checkInternet(callback: (hasInternet: boolean) => void) {
  dns.lookup('google.com', (err) => {
    if (err && err.code == "ENOTFOUND") {
      callback(false);
    } else {
      callback(true);
    }
  })
};

const packIconURL = "https://raw.githubusercontent.com/JaylyDev/interpreter/main/src/resource_pack/pack_icon.png";

console.log("Downloading pack icon:", packIconURL);

checkInternet((isConnected) => {
  if (!isConnected) {
    console.warn('Engine is not connected to internet, skipping pack_icon.');
    return;
  };

  const files = [
    fs.createWriteStream(path.join(behaviorPackDir, 'pack_icon.png')),
    fs.createWriteStream(path.join(resourcePackDir, 'pack_icon.png'))
  ];
  
  for (const file of files) {
    https.get(packIconURL, function (response) {
      response.pipe(file);

      // after download completed close filestream
      file.on("finish", () => {
        file.close();
        console.log("Download Completed", file.path);
      });
    });
  }
});