// JavaScript terminal for GameTest Framework (experimental)
// Dependencies: @types/mojang-minecraft@0.1.4 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.4.tgz>
//               @types/mojang-gametest@0.1.4 <https://registry.npmjs.org/@types/mojang-gametest/-/mojang-gametest-0.1.4.tgz>
//               mojang-minecraft-ui
// Created by: https://github.com/JaylyDev

import { world, ItemStack, MinecraftItemTypes } from "mojang-minecraft";
import { players, whitelist, devBuild, addon_prefix as prefix } from "scripts/credentials/access.js";
import { client } from 'scripts/gametests/commands/message.js';
// import * as _Minecraft_old from "Minecraft";
// import * as _GameTest_old from "GameTest";
import * as Minecraft from "mojang-minecraft";
import * as GameTest from "mojang-gametest";
import * as mcui from "mojang-minecraft-ui";
import { viewObj } from 'scripts/viewObj.js';
import { md5 } from 'scripts/blueimp-md5/md5.js';
import { SHA256 as sha256 } from 'scripts/sha256.js';
import { ModalFormData, MessageFormData } from "mojang-minecraft-ui";
import { cloneJSON } from "scripts/clonejson.js";
import { Base64 } from "scripts/base64.js";
import getAttibutions from "scripts/gametests/atrributions.js";

export const formSettings = {
  ModalForm: {
    dropdown: { defaultValueIndex: null },
    slider: { defaultValue: null },
    textField: { defaultValue: null },
    toggle: { defaultValue: null }
  }
}

world.events.beforeChat.subscribe(data => {
  const { message, sender } = data;
  let playerName = sender.name ?? sender.nameTag;
  let hasPermission = false;

  if (whitelist == true && players.includes(playerName)) {
    hasPermission = true;
  } else if (whitelist == false) {
    hasPermission = true;
  } else hasPermission = false;

  if (message == `${prefix}javascript` && hasPermission == true) {
    data.cancel = true;

    let item = new ItemStack(MinecraftItemTypes.enchantedBook, 1);
    item.nameTag = "§r§dJavaScript interpreter";
    item.setLore(["§r§5Use this item to open JavaScript interpreter"]);
    sender.getComponent("minecraft:inventory").container.addItem(item);
    client(playerName, `You have been given a ${item.nameTag}`)
  } else if (message == `${prefix}attributions` && hasPermission == true) {
    data.cancel = true;
    client(playerName, getAttibutions())
  }
});

/**
 * Execute JavaScript code
 * @param {Minecraft.Player} source 
 * @param {string} playerName 
 * @param {formSettings} formSetting 
 */
export function codeExecute (source, playerName, formSetting) {
  let setting = formSetting;
  let ModalForm = new ModalFormData();

  // ModalForm settings
  ModalForm.title("JavaScript Interpreter");
  ModalForm.textField("Text Field", "Type here", setting.ModalForm.textField.defaultValue);
  ModalForm.toggle("Use Mojang Namespace", setting.ModalForm.toggle.defaultValue);

  // ModalForm display (Recommend put below ModalForm settings)
  ModalForm.show(source).then(ModalFormResponse => {
    const { formValues } = ModalFormResponse;

    let [input, toggle] = formValues;
    if (/[a-z]/i.test(input)) client(playerName, `${input}`);
    const startTime = new Date().getTime();

    if (toggle == true) {
      if (devBuild === true) console.warn(`JavaScript: §6Program starts at: ${new Date()}`)
      try {
        const ctx = {
          ...Minecraft, // mojang-minecraft     https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft
          ...GameTest,  // mojang-gametest      https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest
          ...mcui,      // mojang-minecraft-ui  https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui
          viewObj, md5, sha256, cloneJSON, Base64 
        }
        const callback = (new Function(`{${Object.keys(ctx).join(",")}}`, `return (function () { ${input} });`))(ctx); callback()
        if (devBuild === true) console.warn(`JavaScript: §aAll checks have passed. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`)
        setting.ModalForm.toggle.defaultValue = toggle;
        setting.ModalForm.textField.defaultValue = input;
      } catch (error) { ErrorHandiler(error, startTime, source, playerName, setting, toggle, input) }
    } else {
      try {
        const ctx = {
          mojangminecraft: Minecraft,   // mojang-minecraft     https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft
          mojanggametest: GameTest,     // mojang-gametest      https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest
          mojangminecraftui: mcui,      // mojang-minecraft-ui  https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui
          viewObj: viewObj,
          md5: md5,
          sha256: sha256,
          cloneJSON: cloneJSON,
          Base64: Base64
        }
        const callback = (new Function(`{${Object.keys(ctx).join(",")}}`, `return (function () { ${input} });`))(ctx); callback()

        setting.ModalForm.toggle.defaultValue = toggle;
        setting.ModalForm.textField.defaultValue = input;
      } catch (error) { ErrorHandiler(error, startTime, source, playerName, setting, toggle, input) }
    }
  })
};

world.events.beforeItemUse.subscribe(eventData => {
  let { source, item } = eventData; // get player
  let playerName = source.name ?? source.nameTag;

  if (item.id == 'minecraft:enchanted_book' && item.getLore()[0] == "§r§5Use this item to open JavaScript interpreter") {
    let formInput = formSettings;
    if (formInput.ModalForm.toggle.defaultValue == null) formInput.ModalForm.toggle.defaultValue = true;
    codeExecute(source, playerName, formInput)
  }
});

/**
 * Handles error when execute code
 * Created this function to reduce source code size
 * @param {Error} error
 * @param {number} startTime
 * @param {Minecraft.Player} source
 * @param {string} playerName
 * @param {formSettings} setting
 * @param {boolean} toggle
 * @param {string} input
 * @returns {void}
 */
function ErrorHandiler (error, startTime, source, playerName, setting, toggle, input) {
  let MessageForm = new MessageFormData();

  if (devBuild === true) {
    console.warn(`JavaScript: §cSome checks were not successful. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`);
    var stackError = !!error.stack ? `\n${error.stack}` : ""
    client(playerName, `Dev build POV:\n§c${String(error+stackError)}`);
    
    stackError = !!error.stack ? `\n${error.stack.split("\n").slice(0,-2).join("\n")}` : ""
    client(playerName, `Non-dev build POV:\n§c${String(error+stackError)}`);
    
    // MessageForm settings
    MessageForm.title("Scripting Error")
      .body(String(error + stackError))
      .button1("Exit")
      .button2("Fix Your Code");
  
    // MessageForm display (Recommend put below MessageForm settings)
    MessageForm.show(source).then(MessageFormResponse => {
      const { selection } = MessageFormResponse;

      if (selection === 0) {
        setting.ModalForm.toggle.defaultValue = toggle;
        setting.ModalForm.textField.defaultValue = input;
        codeExecute(source, playerName, setting);
      }
    });
  } else {
    var stackError = !!error.stack ? `\n${error.stack.split("\n").slice(0,-2).join("\n")}` : ""
    client(playerName, `§c${String(error+stackError)}`);

    // MessageForm settings
    MessageForm.title("Scripting Error")
    .body(String(error + stackError))
    .button1("Exit")
    .button2("Fix Your Code");
  
    // MessageForm display (Recommend put below MessageForm settings)
    MessageForm.show(source).then(MessageFormResponse => {
      const { selection } = MessageFormResponse;

      if (selection === 0) {
        setting.ModalForm.toggle.defaultValue = toggle;
        setting.ModalForm.textField.defaultValue = input;
        codeExecute(source, playerName, setting)
      }
    });
  }
}
