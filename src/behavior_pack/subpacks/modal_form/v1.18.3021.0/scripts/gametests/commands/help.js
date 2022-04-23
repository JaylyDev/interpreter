// Custom commands for GameTest Interpreter (experimental)
// Dependencies: @types/mojang-minecraft@0.1.4 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.4.tgz>
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { world } from 'mojang-minecraft';
import { players, whitelist } from "scripts/credentials/access.js";
import { prefix } from "scripts/credentials/access.js";
import * as message from 'scripts/gametests/commands/message.js';

const definitions = [
  {
    "command": `${prefix}help`,
    "infomation": {
      "definition": "you need help so here we are",
      "usage": [ "" ]
    }
  },
  {
    "command": `${prefix}quickjs`,
    "infomation": {
      "definition": "Give GameTest Interpreter book to the player",
      "usage": [ "" ]
    }
  },
  {
    "command": `${prefix}version`,
    "infomation": {
      "definition": "Displays the version of GameTest interpreter.",
      "usage": [ "" ]
    }
  }
];

world.events.beforeChat.subscribe((data) => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  let hasPermission = false;

  if (whitelist == true && players.includes(playerName)) {
    hasPermission = true;
  } else if (whitelist == false) {
    hasPermission = true;
  } else hasPermission = false;

  if (data.message == `${prefix}help` && hasPermission == true) {
    data.cancel = true;
  
    let text = "§2--- Showing help page (cuz u need it) ---";
    message.client(playerName, text);
    for (let index = 0; index < definitions.length; index++) {
      for (let count = 0; count < definitions[index]['infomation']['usage'].length; count++) {
        text = `${definitions[index]['command']} ${definitions[index]['infomation']['usage'][count]}`;
        message.client(playerName, text);
      }
    };
    text = "§2For more infomation, contact JaylyMC on Discord.";
    message.client(playerName, text);
  }
});