// Python terminal for GameTest Framework (experimental)
// Dependencies: @types/mojang-minecraft@0.1.4 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.4.tgz>
//               @types/mojang-gametest@0.1.4 <https://registry.npmjs.org/@types/mojang-gametest/-/mojang-gametest-0.1.4.tgz>
//               mojang-minecraft-ui
// Created by: https://github.com/JaylyDev

import { world, ItemStack, MinecraftItemTypes } from "mojang-minecraft";
import { players, whitelist, devBuild, addon_prefix as prefix } from "scripts/credentials/access.js";
import { client } from 'scripts/gametests/commands/message.js';
import * as rapydscript from "scripts/rapydscript/lib/rapydscript.js";
import { ModalFormData, MessageFormData } from "mojang-minecraft-ui";

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

  if (message == `${prefix}python` && hasPermission == true) {
    data.cancel = true;

    let item = new ItemStack(MinecraftItemTypes.enchantedBook, 1);
    item.nameTag = "§r§dPython interpreter";
    item.setLore(["§r§5Use this item to open Python interpreter"]);
    sender.getComponent("minecraft:inventory").container.addItem(item);
    client(playerName, `You have been given a ${item.nameTag}`)
  }
});

/**
 * Execute Python code
 * @param {Minecraft.Player} source 
 * @param {string} playerName 
 * @param {formSettings} formSetting 
 */
export function codeExecute (source, playerName, formSetting) {
  let setting = formSetting;
  let ModalForm = new ModalFormData();

  // ModalForm settings
  ModalForm.title("Python Interpreter [Prototype]");
  ModalForm.textField("Text Field", "Type here", setting.ModalForm.textField.defaultValue);

  // ModalForm display (Recommend put below ModalForm settings)
  ModalForm.show(source).then(ModalFormResponse => {
    const { formValues } = ModalFormResponse;

    let [input] = formValues;
    if (/[a-z]/i.test(input)) client(playerName, `${input}`);
    const startTime = new Date().getTime();
    if (devBuild === true) console.warn(`Python: §6Program starts at: ${new Date()}`)
    var language = "Python"; // testing

    try {
      let JSCode = rapydscript.compile(`${input};`, {}).replace(/\`\{([^]+)\}\`/g, "`${$1}`");
      console.log(JSCode); language = "JavaScript";
      !!globalThis.eval ? eval(JSCode) : new Function(JSCode)()

      if (devBuild === true) console.warn(`Python: §aAll checks have passed. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`)
      setting.ModalForm.textField.defaultValue = input;
    } catch (error) { ErrorHandiler(error, startTime, source, playerName, setting, input, language) }
  })
};

world.events.beforeItemUse.subscribe(eventData => {
  let { source, item } = eventData; // get player
  let playerName = source.name ?? source.nameTag;

  if (item.id == 'minecraft:enchanted_book' && item.getLore()[0] == "§r§5Use this item to open Python interpreter") {
    let formInput = formSettings;
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
 * @param {string} input
 * @returns {void}
 */
function ErrorHandiler (error, startTime, source, playerName, setting, input, language) {
  let MessageForm = new MessageFormData();

  if (devBuild === true) {
    console.warn(`Python: §cSome checks were not successful. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`);
    var stackError = !!error.stack ? `\n${error.stack}` : ""
    client(playerName, `Dev build POV:\n§c${String(error+stackError)}`);
    
    stackError = !!error.stack ? `\n${error.stack.split("\n").slice(0,-2).join("\n")}` : ""
    client(playerName, `Non-dev build POV:\n§c${String(error+stackError)}`);
    
    // MessageForm settings
    MessageForm.title(`Scripting Error [${language}]`)
      .body(String(error + stackError))
      .button1("Exit")
      .button2("Fix Your Code");
  
    // MessageForm display (Recommend put below MessageForm settings)
    MessageForm.show(source).then(MessageFormResponse => {
      const { selection } = MessageFormResponse;

      if (selection === 0) {
        setting.ModalForm.textField.defaultValue = input;
        codeExecute(source, playerName, setting);
      }
    });
  } else {
    var stackError = !!error.stack ? `\n${error.stack.split("\n").slice(0,-2).join("\n")}` : ""
    client(playerName, `§c${String(error+stackError)}`);

    // MessageForm settings
    MessageForm.title(`Scripting Error [${language}]`)
    .body(String(error + stackError))
    .button1("Exit")
    .button2("Fix Your Code");
  
    // MessageForm display (Recommend put below MessageForm settings)
    MessageForm.show(source).then(MessageFormResponse => {
      const { selection } = MessageFormResponse;

      if (selection === 0) {
        setting.ModalForm.textField.defaultValue = input;
        codeExecute(source, playerName, setting)
      }
    });
  }
}
