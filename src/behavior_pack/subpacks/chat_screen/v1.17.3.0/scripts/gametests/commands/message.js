// Custom commands for Minecraft Terminator script APIs (experimental)
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { World, Commands } from 'Minecraft';

export function client (target, data) { // target: string, data: string
  Commands.run(`tellraw ${target} {"rawtext":[{"text":"§7${data}"}]}`, World.getDimension('overworld'));
};

export function server (sender, data) { // sender: string, data: string
  Commands.run(`tellraw @a {"rawtext":[{"text":"[${sender}: ${data}]"}]}`, World.getDimension('overworld'));
};