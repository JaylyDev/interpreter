// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: Unknown
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import * as Minecraft from "Minecraft";

const world = Minecraft.world ?? Minecraft.World;

/**
 * Escape string to unicode
 * @param {string} value 
 * @returns {string}
 */
 const escapeToUnicode = function (value) {
  for(var newString = '', i = 0, unicode; !isNaN(unicode = value.charCodeAt(i++));)
      newString += '\\u' + `0000${unicode.toString(16)}`.slice(-4);
  return newString;
};

/**
 * Send message to 1 player
 * @param {string} target Player who receives the message
 * @param {string} data Cotent of the message
 * @returns {void}
 */
export function client (target, data) { // target: string, data: string
  data = escapeToUnicode(data);
  world.getDimension('overworld').runCommand(`tellraw ${target} {"rawtext":[{"text":"§7${data}"}]}`);
};

/**
 * Send message to 1 player
 * @param {string} sender The sender of the message
 * @param {string} data The content of the message
 * @returns {void}
 */
export function server (sender, data) { // sender: string, data: string
  data = escapeToUnicode(data);
  for (let player of world.getPlayers()) {
    player.runCommand(`tellraw @s {"rawtext":[{"text":"[${sender}: ${data}]"}]}`);
  }
};