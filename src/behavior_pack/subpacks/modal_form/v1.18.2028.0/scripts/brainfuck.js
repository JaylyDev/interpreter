// Brainfuck interpreter
// Author: Harley Jackson - harley@harls.com
// Implemented to Minecraft by: https://github.com/JaylyDev
// Hello you have found the secret programming language, type `$brainfuck` in chat to use it

import { world, ItemStack, MinecraftItemTypes } from "mojang-minecraft";
import { players, whitelist, devBuild, addon_prefix as prefix } from "scripts/credentials/access.js";
import { client } from 'scripts/gametests/commands/message.js';
import { ModalFormData, MessageFormData } from "mojang-minecraft-ui";

"use strict";
function brainfuck(prog) {
  let buf = new Uint8Array(500),
    pIndex = 0,
    iIndex = 0,
    bIndex = 0,
    loops = [],
    output = "";
  for (; pIndex < prog.length; pIndex++) {
    if (prog[pIndex] === "[") loops.push({ start: pIndex });
    else if (prog[pIndex] === "]") {
      for (let j = loops.length - 1; j >= 0; j--) {
        if (!loops[j].end) {
          loops[j].end = pIndex;
          break;
        }
      }
    } else if (prog[pIndex] === "!") {
      iIndex = pIndex + 1;
    }
  }
  pIndex = 0;
  while (pIndex < prog.length && prog[pIndex] !== "!") {
    switch (prog[pIndex]) {
      case "+":
        buf[bIndex]++;
        break;

      case "-":
        buf[bIndex]--;
        break;

      case ">":
        bIndex++;
        break;

      case "<":
        bIndex--;
        break;

      case "[":
        if (buf[bIndex] === 0)
          pIndex = loops.find((l) => pIndex === l.start).end;
        break;

      case "]":
        if (buf[bIndex] !== 0)
          pIndex = loops.find((l) => pIndex === l.end).start;
        break;

      case ".":
        output += String.fromCharCode(buf[bIndex]);
        break;

      case ",":
        buf[bIndex] = prog[iIndex++].charCodeAt(0);
        break;
    }
    pIndex++;
  }
  return output;
}

const formSettings = {
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

  if (message == `${prefix}brainfuck` && hasPermission == true) {
    data.cancel = true;

    let item = new ItemStack(MinecraftItemTypes.enchantedBook, 1);
    item.nameTag = "§r§dBrainFuck interpreter";
    item.setLore(["§r§5Use this item to open BrainFuck interpreter"]);
    sender.getComponent("minecraft:inventory").container.addItem(item);
    client(playerName, `You have been given a ${item.nameTag}`)
  }
});

function codeExecute (source, playerName, formSetting) {
  let setting = formSetting;
  let ModalForm = new ModalFormData();

  // ModalForm settings
  ModalForm.title("BrainFuck Interpreter");
  ModalForm.textField("Text Field", "Type here", setting.ModalForm.textField.defaultValue);

  // ModalForm display (Recommend put below ModalForm settings)
  ModalForm.show(source).then(ModalFormResponse => {
    const { formValues } = ModalFormResponse;

    let [input, toggle] = formValues;

    if (!input) {} else { client(playerName, `${input}\n${brainfuck(input)}`) };
    try {
      let MessageForm = new MessageFormData();
    
      // MessageForm settings
      MessageForm.title("Scripting Output");
      MessageForm.body(brainfuck(input));
      MessageForm.button1("Exit");
      MessageForm.button2("Go Back");
    
      // MessageForm display (Recommend put below MessageForm settings)
      MessageForm.show(source).then(MessageFormResponse => {
        const { selection } = MessageFormResponse;

        if (selection == 0) {
          setting.ModalForm.toggle.defaultValue = toggle;
          setting.ModalForm.textField.defaultValue = input;
          codeExecute(source, playerName, setting)
        }
      });
    } catch (error) {
      if (error.stack && devBuild == true) {
        client(playerName, `§c${String(error)+"\n"+String(error.stack)}`);
        
        let MessageForm = new MessageFormData();
  
        // MessageForm settings
        MessageForm.title("Scripting Error");
        MessageForm.body(String(error)+"\n"+String(error.stack));
        MessageForm.button1("Exit");
        MessageForm.button2("Fix Your Code");
      
        // MessageForm display (Recommend put below MessageForm settings)
        MessageForm.show(source).then(MessageFormResponse => {
          const { selection } = MessageFormResponse;
  
          if (selection == 0) {
            setting.ModalForm.toggle.defaultValue = toggle;
            setting.ModalForm.textField.defaultValue = input;
            codeExecute(source, playerName, setting)
          }
        });
      } else {
        client(playerName, `${error}\n${error.stack.split("\n").slice(0,-2)}`);
  
        let MessageForm = new MessageFormData();
  
        // MessageForm settings
        MessageForm.title("Scripting Error");
        MessageForm.body(`${error}\n${error.stack.split("\n").slice(0,-2)}`);
        MessageForm.button1("Exit");
        MessageForm.button2("Fix Your Code");
      
        // MessageForm display (Recommend put below MessageForm settings)
        MessageForm.show(source).then(MessageFormResponse => {
          const { selection } = MessageFormResponse;
  
          if (selection == 0) {
            setting.ModalForm.toggle.defaultValue = toggle;
            setting.ModalForm.textField.defaultValue = input;
            codeExecute(source, playerName, setting)
          }
        });
      }
    }
  })
};

world.events.beforeItemUse.subscribe(eventData => {
  let { source, item } = eventData; // get player
  let playerName = source.name ?? source.nameTag;

  if (item.id == 'minecraft:enchanted_book' && item.getLore()[0] == "§r§5Use this item to open BrainFuck interpreter") {
    let formInput = formSettings;
    formInput.ModalForm.toggle.defaultValue = true;
    codeExecute(source, playerName, formInput)
  }
});