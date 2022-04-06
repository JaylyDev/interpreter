// JavaScript terminal for GameTest Framework (experimental)
// Dependencies: @types/mojang-minecraft@0.1.4 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.4.tgz>
//               @types/mojang-gametest@0.1.4 <https://registry.npmjs.org/@types/mojang-gametest/-/mojang-gametest-0.1.4.tgz>
//               mojang-minecraft-ui
// Created by: https://github.com/JaylyDev

import { world, ItemStack, MinecraftItemTypes } from "mojang-minecraft";
import { players, whitelist } from "scripts/credentials/access.js";
import { client } from 'scripts/gametests/commands/message.js';
import * as Minecraft from "mojang-minecraft";
import * as GameTest from "mojang-gametest";
import * as UI from "mojang-minecraft-ui";
import { viewObj } from 'scripts/viewObj.js';
import { md5 } from 'scripts/blueimp-md5/md5.js';
import { SHA256 as sha256 } from 'scripts/sha256.js';
import * as mojangminecraft from "scripts/@types/mojang-minecraft/index.js";
import * as mojanggametest from "scripts/@types/mojang-gametest/index.js";
import * as mojangminecraftui from "scripts/@types/mojang-minecraft-ui/index.js";
import { ModalFormData, MessageFormData } from "mojang-minecraft-ui";

let prefix = "$";

const formSettings = {
  ModalForm: {
    dropdown: { defaultValueIndex: null },
    slider: { defaultValue: null },
    textField: { defaultValue: null },
    toggle: { defaultValue: null }
  }
}

function getIndex(param) {
  if (param == "mojang-minecraft") {
    return mojangminecraft;
  } else if (param == "mojang-gametest") {
    return mojanggametest;
  } else if (param == "mojang-minecraft-ui") {
    return mojangminecraftui;
  }
};

world.events.beforeChat.subscribe((data) => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  let hasPermission = false;

  if (whitelist == true && players.includes(playerName)) {
    hasPermission = true;
  } else if (whitelist == false) {
    hasPermission = true;
  } else hasPermission = false;

  if (data.message == `${prefix}quickjs` && hasPermission == true) {
    data.cancel = true;

    let item = new ItemStack(MinecraftItemTypes.enchantedBook, 1);
    item.nameTag = "§r§dGameTest interpreter";
    item.setLore(["§r§5Use this item to open GameTest interpreter"]);
    data.sender.getComponent("minecraft:inventory").container.addItem(item);
    client(playerName, `You have been given a ${item.nameTag}`)
  }
});

function codeExecute (source, playerName, formSetting) {
  let setting = formSetting;
  let ModalForm = new ModalFormData();

  // ModalForm settings
  ModalForm.title("GameTest Interpreter");
  ModalForm.textField("Text Field", "Type here", setting.ModalForm.textField.defaultValue);
  ModalForm.toggle("Use Mojang Namespace", setting.ModalForm.toggle.defaultValue);

  // ModalForm display (Recommend put below ModalForm settings)
  ModalForm.show(source).then(ModalFormResponse => {
    const devBuild = false;
    const { formValues } = ModalFormResponse;

    let [input, toggle] = formValues;

    if (!input) {} else client(playerName, `${input}`);
    if (toggle == true) {
      try {
        const callback = (
          new Function(
            /**
             * @module
             * mojang-minecraft
             * References: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft
             */
            // Enumerations
            "Direction", "GameMode",

            // Classes (in alphabetical order)
            "BeforeChatEvent",
            "BeforeChatEventSignal",
            "BeforeDataDrivenEntityTriggerEvent",
            "BeforeDataDrivenEntityTriggerEventSignal",
            "BeforeExplosionEvent",
            "BeforeExplosionEventSignal",
            "BeforeItemDefinitionEventSignal",
            "BeforeItemDefinitionTriggeredEvent",
            "BeforeItemUseEvent",
            "BeforeItemUseEventSignal",
            "BeforeItemUseOnEvent",
            "BeforeItemUseOnEventSignal",
            "BeforePistonActivateEvent",
            "BeforePistonActivateEventSignal",
            "Block",
            "BlockAreaSize",
            "BlockBreakEvent",
            "BlockBreakEventSignal",
            "BlockComponent",
            "BlockEvent",
            "BlockExplodeEvent",
            "BlockExplodeEventSignal",
            "BlockInventoryComponent",
            "BlockInventoryComponentContainer",
            "BlockLavaContainerComponent",
            "BlockLocation",
            "BlockPermutation",
            "BlockPistonComponent",
            "BlockPlaceEvent",
            "BlockPlaceEventSignal",
            "BlockPotionContainerComponent",
            "BlockProperties",
            "BlockRaycastOptions",
            "BlockRecordPlayerComponent",
            "BlockSnowContainerComponent",
            "BlockType",
            "BlockWaterContainerComponent",
            "BoolBlockProperty",
            "ChatEvent",
            "ChatEventSignal",
            "Color",
            "Container",
            "DataDrivenEntityTriggerEvent",
            "DataDrivenEntityTriggerEventSignal",
            "DefinitionModifier",
            "Dimension",
            "Effect",
            "EffectAddEvent",
            "EffectAddEventSignal",
            "EffectType",
            "Enchantment",
            "EnchantmentList",
            "EnchantmentSlot",
            "EnchantmentType",
            "Entity",
            "EntityAddRiderComponent",
            "EntityAgeableComponent",
            "EntityBreathableComponent",
            "EntityCanClimbComponent",
            "EntityCanFlyComponent",
            "EntityCanPowerJumpComponent",
            "EntityColorComponent",
            "EntityCreateEvent",
            "EntityCreateEventSignal",
            "EntityDataDrivenTriggerEventOptions",
            "EntityDefinitionFeedItem",
            "EntityEventOptions",
            "EntityFireImmuneComponent",
            "EntityFloatsInLiquidComponent",
            "EntityFlyingSpeedComponent",
            "EntityFrictionModifierComponent",
            "EntityGroundOffsetComponent",
            "EntityHealableComponent",
            "EntityHealthComponent",
            "EntityHitEvent",
            "EntityHitEventSignal",
            "EntityInventoryComponent",
            "EntityIsBabyComponent",
            "EntityIsChargedComponent",
            "EntityIsChestedComponent",
            "EntityIsDyableComponent",
            "EntityIsHiddenWhenInvisibleComponent",
            "EntityIsIgnitedComponent",
            "EntityIsIllagerCaptainComponent",
            "EntityIsSaddledComponent",
            "EntityIsShakingComponent",
            "EntityIsShearedComponent",
            "EntityIsStackableComponent",
            "EntityIsStunnedComponent",
            "EntityIsTamedComponent",
            "EntityItemComponent",
            "EntityIterator",
            "EntityLavaMovementComponent",
            "EntityLeashableComponent",
            "EntityMarkVariantComponent",
            "EntityMountTamingComponent",
            "EntityMovementAmphibiousComponent",
            "EntityMovementBasicComponent",
            "EntityMovementComponent",
            "EntityMovementFlyComponent",
            "EntityMovementGenericComponent",
            "EntityMovementGlideComponent",
            "EntityMovementHoverComponent",
            "EntityMovementJumpComponent",
            "EntityMovementSkipComponent",
            "EntityMovementSwayComponent",
            "EntityNavigationClimbComponent",
            "EntityNavigationFloatComponent",
            "EntityNavigationFlyComponent",
            "EntityNavigationGenericComponent",
            "EntityNavigationHoverComponent",
            "EntityNavigationWalkComponent",
            "EntityPushThroughComponent",
            "EntityQueryOptions",
            "EntityQueryScoreOptions",
            "EntityRaycastOptions",
            "EntityRideableComponent",
            "EntityScaleComponent",
            "EntitySkinIdComponent",
            "EntityStrengthComponent",
            "EntityTameableComponent",
            "EntityUnderwaterMovementComponent",
            "EntityVariantComponent",
            "EntityWantsJockeyComponent",
            "Events",
            "ExplosionEvent",
            "ExplosionEventSignal",
            "ExplosionOptions",
            "FeedItem",
            "FeedItemEffect",
            "FilterGroup",
            "FluidContainer",
            "IBlockProperty",
            "IEntityComponent",
            "IntBlockProperty",
            "InventoryComponentContainer",
            "ItemCooldownComponent",
            "ItemDefinitionEventSignal",
            "ItemDefinitionTriggeredEvent",
            "ItemDurabilityComponent",
            "ItemEnchantsComponent",
            "ItemFoodComponent",
            "Items",
            "ItemStack",
            "ItemType",
            "ItemUseEvent",
            "ItemUseEventSignal",
            "ItemUseOnEvent",
            "ItemUseOnEventSignal",
            "Location",
            "MinecraftBlockTypes",
            "MinecraftDimensionTypes",
            "MinecraftEffectTypes",
            "MinecraftEnchantmentTypes",
            "MinecraftItemTypes",
            "MolangVariableMap",
            "NavigationResult",
            "NumberRange",
            "PistonActivateEvent",
            "PistonActivateEventSignal",
            "PitchYawRotation",
            "Player",
            "PlayerInventoryComponentContainer",
            "PlayerIterator",
            "PlayerJoinEvent",
            "PlayerJoinEventSignal",
            "PlayerLeaveEvent",
            "PlayerLeaveEventSignal",
            "Seat",
            "SoundOptions",
            "StringBlockProperty",
            "TickEvent",
            "TickEventSignal",
            "Trigger",
            "Vector",
            "WeatherChangeEvent",
            "WeatherChangeEventSignal",
            "World",

            // Constants
            "TicksPerSecond",
            "world",

            /**
             * @module
             * mojang-gametest
             * References: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest
             */
            "FluidType", "FenceConnectivity", "GameTestSequence", "RegistrationBuilder", "SimulatedPlayer", "Tags", "Test", "register",

            /**
             * @module
             * mojang-minecraft-ui
             * References: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui
             */
            "ActionFormData", "ActionFormResponse", "FormResponse", "MessageFormData", "MessageFormResponse", "ModalFormData", "ModalFormResponse",

            // Additional variables
            "viewObj",  "md5",  "sha256",  "getIndex", 

            // Response
            `return (function () { ${input} });`
          )
        )(
          /**
           * @module
           * mojang-minecraft
           * References: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft
           */
          // Enumerations
          Minecraft.Direction,
          Minecraft.GameMode,
          
          // Classes (in alphabetical order)
          Minecraft.BeforeChatEvent,
          Minecraft.BeforeChatEventSignal,
          Minecraft.BeforeDataDrivenEntityTriggerEvent,
          Minecraft.BeforeDataDrivenEntityTriggerEventSignal,
          Minecraft.BeforeExplosionEvent,
          Minecraft.BeforeExplosionEventSignal,
          Minecraft.BeforeItemDefinitionEventSignal,
          Minecraft.BeforeItemDefinitionTriggeredEvent,
          Minecraft.BeforeItemUseEvent,
          Minecraft.BeforeItemUseEventSignal,
          Minecraft.BeforeItemUseOnEvent,
          Minecraft.BeforeItemUseOnEventSignal,
          Minecraft.BeforePistonActivateEvent,
          Minecraft.BeforePistonActivateEventSignal,
          Minecraft.Block,
          Minecraft.BlockAreaSize,
          Minecraft.BlockBreakEvent,
          Minecraft.BlockBreakEventSignal,
          Minecraft.BlockComponent,
          Minecraft.BlockEvent,
          Minecraft.BlockExplodeEvent,
          Minecraft.BlockExplodeEventSignal,
          Minecraft.BlockInventoryComponent,
          Minecraft.BlockInventoryComponentContainer,
          Minecraft.BlockLavaContainerComponent,
          Minecraft.BlockLocation,
          Minecraft.BlockPermutation,
          Minecraft.BlockPistonComponent,
          Minecraft.BlockPlaceEvent,
          Minecraft.BlockPlaceEventSignal,
          Minecraft.BlockPotionContainerComponent,
          Minecraft.BlockProperties,
          Minecraft.BlockRaycastOptions,
          Minecraft.BlockRecordPlayerComponent,
          Minecraft.BlockSnowContainerComponent,
          Minecraft.BlockType,
          Minecraft.BlockWaterContainerComponent,
          Minecraft.BoolBlockProperty,
          Minecraft.ChatEvent,
          Minecraft.ChatEventSignal,
          Minecraft.Color,
          Minecraft.Container,
          Minecraft.DataDrivenEntityTriggerEvent,
          Minecraft.DataDrivenEntityTriggerEventSignal,
          Minecraft.DefinitionModifier,
          Minecraft.Dimension,
          Minecraft.Effect,
          Minecraft.EffectAddEvent,
          Minecraft.EffectAddEventSignal,
          Minecraft.EffectType,
          Minecraft.Enchantment,
          Minecraft.EnchantmentList,
          Minecraft.EnchantmentSlot,
          Minecraft.EnchantmentType,
          Minecraft.Entity,
          Minecraft.EntityAddRiderComponent,
          Minecraft.EntityAgeableComponent,
          Minecraft.EntityBreathableComponent,
          Minecraft.EntityCanClimbComponent,
          Minecraft.EntityCanFlyComponent,
          Minecraft.EntityCanPowerJumpComponent,
          Minecraft.EntityColorComponent,
          Minecraft.EntityCreateEvent,
          Minecraft.EntityCreateEventSignal,
          Minecraft.EntityDataDrivenTriggerEventOptions,
          Minecraft.EntityDefinitionFeedItem,
          Minecraft.EntityEventOptions,
          Minecraft.EntityFireImmuneComponent,
          Minecraft.EntityFloatsInLiquidComponent,
          Minecraft.EntityFlyingSpeedComponent,
          Minecraft.EntityFrictionModifierComponent,
          Minecraft.EntityGroundOffsetComponent,
          Minecraft.EntityHealableComponent,
          Minecraft.EntityHealthComponent,
          Minecraft.EntityHitEvent,
          Minecraft.EntityHitEventSignal,
          Minecraft.EntityInventoryComponent,
          Minecraft.EntityIsBabyComponent,
          Minecraft.EntityIsChargedComponent,
          Minecraft.EntityIsChestedComponent,
          Minecraft.EntityIsDyableComponent,
          Minecraft.EntityIsHiddenWhenInvisibleComponent,
          Minecraft.EntityIsIgnitedComponent,
          Minecraft.EntityIsIllagerCaptainComponent,
          Minecraft.EntityIsSaddledComponent,
          Minecraft.EntityIsShakingComponent,
          Minecraft.EntityIsShearedComponent,
          Minecraft.EntityIsStackableComponent,
          Minecraft.EntityIsStunnedComponent,
          Minecraft.EntityIsTamedComponent,
          Minecraft.EntityItemComponent,
          Minecraft.EntityIterator,
          Minecraft.EntityLavaMovementComponent,
          Minecraft.EntityLeashableComponent,
          Minecraft.EntityMarkVariantComponent,
          Minecraft.EntityMountTamingComponent,
          Minecraft.EntityMovementAmphibiousComponent,
          Minecraft.EntityMovementBasicComponent,
          Minecraft.EntityMovementComponent,
          Minecraft.EntityMovementFlyComponent,
          Minecraft.EntityMovementGenericComponent,
          Minecraft.EntityMovementGlideComponent,
          Minecraft.EntityMovementHoverComponent,
          Minecraft.EntityMovementJumpComponent,
          Minecraft.EntityMovementSkipComponent,
          Minecraft.EntityMovementSwayComponent,
          Minecraft.EntityNavigationClimbComponent,
          Minecraft.EntityNavigationFloatComponent,
          Minecraft.EntityNavigationFlyComponent,
          Minecraft.EntityNavigationGenericComponent,
          Minecraft.EntityNavigationHoverComponent,
          Minecraft.EntityNavigationWalkComponent,
          Minecraft.EntityPushThroughComponent,
          Minecraft.EntityQueryOptions,
          Minecraft.EntityQueryScoreOptions,
          Minecraft.EntityRaycastOptions,
          Minecraft.EntityRideableComponent,
          Minecraft.EntityScaleComponent,
          Minecraft.EntitySkinIdComponent,
          Minecraft.EntityStrengthComponent,
          Minecraft.EntityTameableComponent,
          Minecraft.EntityUnderwaterMovementComponent,
          Minecraft.EntityVariantComponent,
          Minecraft.EntityWantsJockeyComponent,
          Minecraft.Events,
          Minecraft.ExplosionEvent,
          Minecraft.ExplosionEventSignal,
          Minecraft.ExplosionOptions,
          Minecraft.FeedItem,
          Minecraft.FeedItemEffect,
          Minecraft.FilterGroup,
          Minecraft.FluidContainer,
          Minecraft.IBlockProperty,
          Minecraft.IEntityComponent,
          Minecraft.IntBlockProperty,
          Minecraft.InventoryComponentContainer,
          Minecraft.ItemCooldownComponent,
          Minecraft.ItemDefinitionEventSignal,
          Minecraft.ItemDefinitionTriggeredEvent,
          Minecraft.ItemDurabilityComponent,
          Minecraft.ItemEnchantsComponent,
          Minecraft.ItemFoodComponent,
          Minecraft.Items,
          Minecraft.ItemStack,
          Minecraft.ItemType,
          Minecraft.ItemUseEvent,
          Minecraft.ItemUseEventSignal,
          Minecraft.ItemUseOnEvent,
          Minecraft.ItemUseOnEventSignal,
          Minecraft.Location,
          Minecraft.MinecraftBlockTypes,
          Minecraft.MinecraftDimensionTypes,
          Minecraft.MinecraftEffectTypes,
          Minecraft.MinecraftEnchantmentTypes,
          Minecraft.MinecraftItemTypes,
          Minecraft.MolangVariableMap,
          Minecraft.NavigationResult,
          Minecraft.NumberRange,
          Minecraft.PistonActivateEvent,
          Minecraft.PistonActivateEventSignal,
          Minecraft.PitchYawRotation,
          Minecraft.Player,
          Minecraft.PlayerInventoryComponentContainer,
          Minecraft.PlayerIterator,
          Minecraft.PlayerJoinEvent,
          Minecraft.PlayerJoinEventSignal,
          Minecraft.PlayerLeaveEvent,
          Minecraft.PlayerLeaveEventSignal,
          Minecraft.Seat,
          Minecraft.SoundOptions,
          Minecraft.StringBlockProperty,
          Minecraft.TickEvent,
          Minecraft.TickEventSignal,
          Minecraft.Trigger,
          Minecraft.Vector,
          Minecraft.WeatherChangeEvent,
          Minecraft.WeatherChangeEventSignal,
          Minecraft.World,

          // Constants
          Minecraft.TicksPerSecond,
          Minecraft.world,
          
          /**
           * @module
           * mojang-gametest
           * References: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest
           */
          GameTest.FluidType,
          GameTest.FenceConnectivity,
          GameTest.GameTestSequence,
          GameTest.RegistrationBuilder,
          GameTest.SimulatedPlayer,
          GameTest.Tags,
          GameTest.Test,
          GameTest.register,

          /**
           * @module
           * mojang-minecraft-ui
           * References: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui
           */
          UI.ActionFormData,
          UI.ActionFormResponse,
          UI.FormResponse,
          UI.MessageFormData,
          UI.MessageFormResponse,
          UI.ModalFormData,
          UI.ModalFormResponse,  

          // Additional variables      
          viewObj, md5, sha256, getIndex
        );
        callback();
        setting.ModalForm.textField.defaultValue = input;
      } catch (error) {
        if (error.stack && devBuild == true) {
          client(playerName, `§c${String(error + error.stack)}`);
          
          let MessageForm = new MessageFormData();

          // MessageForm settings
          MessageForm.title("Scripting Error");
          MessageForm.body(String(error + error.stack));
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
          client(playerName, `§c${String(error)}`);

          let MessageForm = new MessageFormData();

          // MessageForm settings
          MessageForm.title("Scripting Error");
          MessageForm.body(String(error));
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
    } else {
      try {
        const callback = (
          new Function( "Minecraft", "GameTest", "UI", "viewObj", "md5", "sha256",  "getIndex",
            `return (function () { ${input} });`
          )
        )(Minecraft, GameTest, UI, viewObj, md5, sha256, getIndex);
        callback();
        setting.ModalForm.textField.defaultValue = input;
      } catch (error) {
        if (error.stack && devBuild == true) {
          client(playerName, `§c${String(error + error.stack)}`);
          
          let MessageForm = new MessageFormData();

          // MessageForm settings
          MessageForm.title("Scripting Error");
          MessageForm.body(String(error + error.stack));
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
          client(playerName, `§c${String(error)}`);

          let MessageForm = new MessageFormData();

          // MessageForm settings
          MessageForm.title("Scripting Error");
          MessageForm.body(String(error));
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
    }
  })
};

world.events.beforeItemUse.subscribe(eventData => {
  let { source, item } = eventData; // get player
  let playerName = source.name ?? source.nameTag;

  if (item.id == 'minecraft:enchanted_book' && item.getLore()[0] == "§r§5Use this item to open GameTest interpreter") {
    let formInput = formSettings;
    formInput.ModalForm.toggle.defaultValue = true;
    codeExecute(source, playerName, formInput)
  }
});