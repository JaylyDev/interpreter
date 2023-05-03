import { EntityInventoryComponent, ItemStack, ItemType, MinecraftBlockTypes, MinecraftItemTypes, Player, world } from "@minecraft/server";
import { ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { MinecraftColors } from "code-highlight/highlight";
import { Commands } from "Commands";
import { forceShow } from "forceShow";
import { isNotOp } from "is-not-op";
import { internal, prefix } from "properities";
import { codeExecute } from "runtime-js";

const javascriptItemLore: string = '§r§5Use this item to open JavaScript interpreter';
const typescriptItemLore: string = '§r§5Use this item to open TypeScript interpreter';
const itemType: ItemType = MinecraftItemTypes.enchantedBook;
const internalWarn: string = '[Interpreter] Internal mode has been enabled. These work-in-progress features can be unstable and may not be representative of final version quality.';

function showDeprecatedForm (source: Player) {
  const deprecatedMessage = 'TypeScript interpreter is not support currently.';
  // Show player that typescript interpreter is not supported
  new MessageFormData()
    .title('Deprecated')
    .body(deprecatedMessage)
    .show(source);
  console.log(deprecatedMessage);
};

Commands.register(prefix, 'javascript', ({player}) => {
  let item = new ItemStack(itemType, 1);
  item.nameTag = "§r§dJavaScript interpreter";
  item.setLore([javascriptItemLore]);

  let inventory = player.getComponent("minecraft:inventory") as EntityInventoryComponent;
  inventory.container.addItem(item);

  player.sendMessage(`You have been given a ${item.nameTag}`);
});

Commands.register(prefix, 'typescript', ({player}) => {
  let item = new ItemStack(itemType, 1);
  item.nameTag = "§r§dTypeScript interpreter";
  item.setLore([typescriptItemLore]);

  let inventory = player.getComponent("minecraft:inventory") as EntityInventoryComponent;
  inventory.container.addItem(item);

  player.sendMessage(`You have been given a ${item.nameTag}`);
});

Commands.register(prefix, 'version', ({player}) => {
  const version = '19.80.0';
  const packageName = 'interpreter';
  const license = 'GPL-3.0';
  const description = 'JavaScirpt Interpreter allows players to execute and interpret JavaScript code in Minecraft using a Script Engine in Minecraft Bedrock Script API.';
  const messages = [
    MinecraftColors.gold + packageName + MinecraftColors.reset + '@' + MinecraftColors.gold + version,
    license,
  ];
  player.sendMessage(messages.join(`${MinecraftColors.reset} | `) + `\n${description}`);
});

Commands.register(prefix, 'interpreter', async ({player, argv}) => {
  interface Language {
    name: string;
    function: () => void
  };
  const languages: Language[] = [
    { 
      name: 'JavaScript',
      function() { codeExecute(player) },
    },
    {
      name: 'TypeScript',
      function() { showDeprecatedForm(player) }
    }
  ];
  if (true) languages.push({ 
    name: 'minecraft-extra',
    function() { codeExecute(player) },
  });

  const menu = new ActionFormData();
  menu.title('Interpreter');
  menu.body('Choose programming language');

  for (const language of languages) {
    menu.button(language.name);
  };

  const response = await forceShow(player, menu);
  if (response.canceled) return;
  player.sendMessage(MinecraftColors.gray + 'Please close chat to open form.');
  languages[response.selection].function();
});

// players hold enchanted books to open interpreter
world.events.beforeItemUse.subscribe(eventData => {
  const { source, item } = eventData; // get player

  if (!(source instanceof Player)) return; // return if source is not player
  if (item.typeId !== itemType.id) return; // return if player is not using same item type
  if (isNotOp(source)) {
    // return if player is not op, player must have perms to use terminal
    source.sendMessage(`${MinecraftColors.red}You do not have permission to use this item.`);
    console.log(`Player '${source.name}' does not have permission to use interpreter.`);
    return;
  }; 

  switch (item.getLore()[0]) {
    case javascriptItemLore:
      codeExecute(source);
      break;
    
    case typescriptItemLore:
      showDeprecatedForm(source);
      break;

    default:
      break;
  };
});

// players interacts with script block
world.events.beforeItemUseOn.subscribe((event) => {
  const { source } = event;
  const block = source.dimension.getBlock(event.getBlockLocation());

  if (!(source instanceof Player)) return;
  if (block.type !== MinecraftBlockTypes.get('interpreter:script_block')) return;
  if (isNotOp(source)) {
    // return if player is not op, player must have perms to use terminal
    source.sendMessage(`${MinecraftColors.red}You do not have permission to use this item.`);
    console.log(`Player '${source.name}' does not have permission to use interpreter.`);
    return;
  }; 

  event.cancel = true;
  codeExecute(source);
});

if (internal === true) { 
  console.warn(internalWarn);
};