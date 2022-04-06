// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { world } from 'mojang-minecraft';

export function client (target, data) { // target: string, data: string
  data = data.replace(/\\\"/g, "\\\\\"").replace(/\"/g, "\\\"");
  world.getDimension('overworld').runCommand(`tellraw ${target} {"rawtext":[{"text":"§7${data}"}]}`);
};

export function server (sender, data) { // sender: string, data: string
  data = data.replace(/\\\"/g, "\\\\\"").replace(/\"/g, "\\\"");
  for (let player of world.getPlayers()) {
    player.runCommand(`tellraw @s {"rawtext":[{"text":"[${sender}: ${data}]"}]}`);
  }
};