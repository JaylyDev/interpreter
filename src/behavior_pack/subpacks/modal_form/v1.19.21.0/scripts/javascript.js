// JavaScript terminal for GameTest Framework (experimental)
// Dependencies: @types/mojang-minecraft@0.1.4 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.4.tgz>
//               @types/mojang-gametest@0.1.4 <https://registry.npmjs.org/@types/mojang-gametest/-/mojang-gametest-0.1.4.tgz>
//               mojang-minecraft-ui
// Created by: https://github.com/JaylyDev

import { world, ItemStack, MinecraftItemTypes } from "mojang-minecraft";
import { players, whitelist } from "scripts/credentials/access.js";
import { client } from 'scripts/gametests/commands/message.js';
// import * as _Minecraft_old from "Minecraft";
// import * as _GameTest_old from "GameTest";
import * as Minecraft from "mojang-minecraft";
import * as GameTest from "mojang-gametest";
import * as UI from "mojang-minecraft-ui";
import { viewObj } from 'scripts/viewObj.js';
import { md5 } from 'scripts/blueimp-md5/md5.js';
import { SHA256 as sha256 } from 'scripts/sha256.js';
import { ModalFormData, MessageFormData } from "mojang-minecraft-ui";
import { cloneJSON } from "scripts/clonejson.js";
import { Base64 } from "scripts/base64.js";
import getAttibutions from "scripts/gametests/atrributions.js";

export const prefix = "$";

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

export function codeExecute (source, playerName, formSetting) {
  let setting = formSetting;
  let ModalForm = new ModalFormData();

  // ModalForm settings
  ModalForm.title("JavaScript Interpreter");
  ModalForm.textField("Text Field", "Type here", setting.ModalForm.textField.defaultValue);
  ModalForm.toggle("Use Mojang Namespace", setting.ModalForm.toggle.defaultValue);

  // ModalForm display (Recommend put below ModalForm settings)
  ModalForm.show(source).then(ModalFormResponse => {
    const devBuild = false;
    const { formValues } = ModalFormResponse;

    let [input, toggle] = formValues;

    if (/[a-z]/i.test(input)) client(playerName, `${input}`);
    if (toggle == true) {
      const startTime = new Date().getTime();
      if (devBuild === true) console.warn(`JavaScript: §6Program starts at: ${new Date()}`)

      try {
        const callback = (
          new Function(
            /**
             * @module
             * mojang-minecraft
             * References: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft
             */
            // Enumerations
            "Direction",
            "GameMode",
    
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
            "BlockHitInformation",
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
            "DynamicPropertiesDefinition",
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
            "EntityHitInformation",
            "EntityHurtEvent",
            "EntityHurtEventSignal",
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
            "EntityType",
            "EntityTypeIterator",
            "EntityTypes",
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
            "ItemCompleteChargeEvent",
            "ItemCompleteChargeEventSignal",
            "ItemCooldownComponent",
            "ItemDefinitionEventSignal",
            "ItemDefinitionTriggeredEvent",
            "ItemDurabilityComponent",
            "ItemEnchantsComponent",
            "ItemFoodComponent",
            "ItemReleaseChargeEvent",
            "ItemReleaseChargeEventSignal",
            "Items",
            "ItemStack",
            "ItemStartChargeEvent",
            "ItemStartChargeEventSignal",
            "ItemStartUseOnEvent",
            "ItemStartUseOnEventSignal",
            "ItemStopChargeEvent",
            "ItemStopChargeEventSignal",
            "ItemStopUseOnEvent",
            "ItemStopUseOnEventSignal",
            "ItemType",
            "ItemUseEvent",
            "ItemUseEventSignal",
            "ItemUseOnEvent",
            "ItemUseOnEventSignal",
            "LeverActionEvent",
            "LeverActivateEventSignal",
            "Location",
            "MinecraftBlockTypes",
            "MinecraftDimensionTypes",
            "MinecraftEffectTypes",
            "MinecraftEnchantmentTypes",
            "MinecraftEntityTypes",
            "MinecraftItemTypes",
            "MolangVariableMap",
            "MusicOptions",
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
            "ProjectileHitEvent",
            "ProjectileHitEventSignal",
            "PropertyRegistry",
            "ScreenDisplay",
            "SculkSpreader",
            "Seat",
            "SoundOptions",
            "StringBlockProperty",
            "TickEvent",
            "TickEventSignal",
            "TitleDisplayOptions",
            "Trigger",
            "Vector",
            "WeatherChangeEvent",
            "WeatherChangeEventSignal",
            "World",
            "WorldInitializeEvent",
            "WorldInitializeEventSignal",

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
            "viewObj",  "md5",  "sha256", "cloneJSON", "Base64",
    
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
          Minecraft.BlockHitInformation,
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
          Minecraft.DynamicPropertiesDefinition,
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
          Minecraft.EntityHitInformation,
          Minecraft.EntityHurtEvent,
          Minecraft.EntityHurtEventSignal,
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
          Minecraft.EntityType,
          Minecraft.EntityTypeIterator,
          Minecraft.EntityTypes,
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
          Minecraft.ItemCompleteChargeEvent,
          Minecraft.ItemCompleteChargeEventSignal,
          Minecraft.ItemCooldownComponent,
          Minecraft.ItemDefinitionEventSignal,
          Minecraft.ItemDefinitionTriggeredEvent,
          Minecraft.ItemDurabilityComponent,
          Minecraft.ItemEnchantsComponent,
          Minecraft.ItemFoodComponent,
          Minecraft.ItemReleaseChargeEvent,
          Minecraft.ItemReleaseChargeEventSignal,
          Minecraft.Items,
          Minecraft.ItemStack,
          Minecraft.ItemStartChargeEvent,
          Minecraft.ItemStartChargeEventSignal,
          Minecraft.ItemStartUseOnEvent,
          Minecraft.ItemStartUseOnEventSignal,
          Minecraft.ItemStopChargeEvent,
          Minecraft.ItemStopChargeEventSignal,
          Minecraft.ItemStopUseOnEvent,
          Minecraft.ItemStopUseOnEventSignal,
          Minecraft.ItemType,
          Minecraft.ItemUseEvent,
          Minecraft.ItemUseEventSignal,
          Minecraft.ItemUseOnEvent,
          Minecraft.ItemUseOnEventSignal,
          Minecraft.LeverActionEvent,
          Minecraft.LeverActivateEventSignal,
          Minecraft.Location,
          Minecraft.MinecraftBlockTypes,
          Minecraft.MinecraftDimensionTypes,
          Minecraft.MinecraftEffectTypes,
          Minecraft.MinecraftEnchantmentTypes,
          Minecraft.MinecraftEntityTypes,
          Minecraft.MinecraftItemTypes,
          Minecraft.MolangVariableMap,
          Minecraft.MusicOptions,
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
          Minecraft.ProjectileHitEvent,
          Minecraft.ProjectileHitEventSignal,
          Minecraft.PropertyRegistry,
          Minecraft.ScreenDisplay,
          Minecraft.SculkSpreader,
          Minecraft.Seat,
          Minecraft.SoundOptions,
          Minecraft.StringBlockProperty,
          Minecraft.TickEvent,
          Minecraft.TickEventSignal,
          Minecraft.TitleDisplayOptions,
          Minecraft.Trigger,
          Minecraft.Vector,
          Minecraft.WeatherChangeEvent,
          Minecraft.WeatherChangeEventSignal,
          Minecraft.World,
          Minecraft.WorldInitializeEvent,
          Minecraft.WorldInitializeEventSignal,

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
    
          // Additional packages
          viewObj, md5, sha256, cloneJSON, Base64
        );
        try { callback() } catch (error) {
          // This section must be included to display in-game errors
          // The first layer checks if the code is able to execute or not
          // This layer catches errors throw by GameTest API
          // like world.getDimension("overworld").runCommand("execute undefined ~~~ say this player does not exists")
          // This returns {"statusCode": -2147352576, "statusMessage": "No targets matched selector"}
          var stackError = error.stack ? `\n${error.stack}` : ""
          console.warn(`JavaScript: §cSome checks were not successful. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`);
          client(playerName, `§c${String(error + stackError)}`);
          
          let MessageForm = new MessageFormData();
    
          // MessageForm settings
          MessageForm.title("Scripting Error");
          MessageForm.body(String(error + stackError));
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
        };
        if (devBuild === true) console.warn(`JavaScript: §aAll checks have passed. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`)
        setting.ModalForm.toggle.defaultValue = toggle;
        setting.ModalForm.textField.defaultValue = input;
      } catch (error) {
        if (error.stack && devBuild == true) {
          console.warn(`JavaScript: §cSome checks were not successful. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`);
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
          client(playerName, `§c${error}\n${error.stack.split("\n").slice(0,-2)}`);
    
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
    } else {
      try {
        const callback = (
          new Function( "mojangminecraft", "mojanggametest", "mojangminecraftui", "viewObj", "md5", "sha256", "cloneJSON", "Base64",
            `return (function () { ${input} });`
          )
        )(Minecraft, GameTest, UI, viewObj, md5, sha256, cloneJSON, Base64);

        setting.ModalForm.toggle.defaultValue = toggle;
        setting.ModalForm.textField.defaultValue = input;
        try { callback() } catch (error) {
          // This section must be included to display in-game errors
          // The first layer checks if the code is able to execute or not
          // This layer catches errors throw by GameTest API
          // like world.getDimension("overworld").runCommand("execute undefined ~~~ say this player does not exists")
          // This returns {"statusCode": -2147352576, "statusMessage": "No targets matched selector"}
          var stackError = error.stack ? `\n${error.stack}` : ""
          console.warn(`JavaScript: §cSome checks were not successful. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`);
          client(playerName, `§c${String(error + stackError)}`);
          
          let MessageForm = new MessageFormData();
    
          // MessageForm settings
          MessageForm.title("Scripting Error");
          MessageForm.body(String(error + stackError));
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
        };
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
          client(playerName, `§c${error}\n${error.stack.split("\n").slice(0,-2)}`);
    
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
          })
        }
      }
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