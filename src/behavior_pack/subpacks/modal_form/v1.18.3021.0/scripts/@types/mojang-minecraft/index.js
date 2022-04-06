// Type definitions for Minecraft Bedrock Edition script APIs (experimental) 0.1
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */

export const Direction = {
    down: 0,
    up: 1,
    north: 2,
    south: 3,
    west: 4,
    east: 5,
}
export const GameMode = {
    survival: 0,
    creative: 1,
    adventure: 2,
}
export class BeforeChatEvent {
    'cancel';
    'message';
    'sender';
    'sendToTargets';
    'targets';
}
export class BeforeChatEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class BeforeDataDrivenEntityTriggerEvent {
    'cancel';
    'entity';
    'id';
    'modifiers'
}
export class BeforeDataDrivenEntityTriggerEventSignal {
    subscribe(
        callback,
        options,
    ) {};
    unsubscribe(callback) {};
}
export class BeforeExplosionEvent {
    'cancel';
    'dimension';
    'impactedBlocks';
    'source';
}
export class BeforeExplosionEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class BeforeItemDefinitionEventSignal {
    subscribe(
        callback,
    ) {};
    unsubscribe(callback) {};
}
export class BeforeItemDefinitionTriggeredEvent {
    'cancel';
    'eventName';
    'item';
    'source';
}
export class BeforeItemUseEvent {
    'cancel';
    'item';
    'source';
}
export class BeforeItemUseEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class BeforeItemUseOnEvent {
    'blockFace';
    'blockLocation';
    'cancel';
    'faceLocationX';
    'faceLocationY';
    'item';
    'source';
}
export class BeforeItemUseOnEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class BlockEvent {
    'block';
    'dimension';
}
export class BeforePistonActivateEvent extends BlockEvent {
    'block';
    'cancel';
    'dimension';
    'isExpanding';
    'piston';
}
export class BeforePistonActivateEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class Block {
    'dimension';
    'id';
    'isEmpty';
    'isWaterlogged';
    'location';
    'permutation';
    'type';
    'x';
    'y';
    'z';
    getComponent(componentName) {};
    getTags() {};
    hasTag(tag) {};
    setPermutation(permutation) {};
    setType(blockType) {};
}
export class BlockAreaSize {
    'x';
    'y';
    'z';
    constructor(x, y, z) {};
    equals(other) {};
}
export class BlockBreakEvent extends BlockEvent {
    'block';
    'dimension';
    'player';
}
export class BlockBreakEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class BlockComponent {}
export class BlockExplodeEvent extends BlockEvent {
    'block';
    'destroyedBlockPermutation';
    'dimension';
    'source';
}
export class BlockExplodeEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class BlockInventoryComponent {
    'container';
    'location';
}
export class Container {
    'emptySlotsCount';
    'size';
    addItem(itemStack) {};
    getItem(slot) {};
    setItem(slot, itemStack) {};
    swapItems(slot, otherSlot, otherContainer) {};
    transferItem(fromSlot, toSlot, toContainer) {};
}
export class BlockInventoryComponentContainer extends Container {
    'emptySlotsCount';
    'size';
    addItem(itemStack) {};
    getItem(slot) {};
    setItem(slot, itemStack) {};
    swapItems(slot, otherSlot, otherContainer) {};
    transferItem(fromSlot, toSlot, toContainer) {};
}
export class BlockLavaContainerComponent {
    'fillLevel';
    'location';
}
export class BlockLocation {
    'x';
    'y';
    'z';
    above() {};
    blocksBetween(other) {};
    constructor(x, y, z) {};
    equals(other) {};
    offset(x, y, z) {};
}
export class BlockPermutation {
    'type';
    clone() {};
    getAllProperties() {};
    getProperty(propertyName) {};
    getTags() {};
    hasTag(tag) {};
}
export class BlockPistonComponent {
    'attachedBlocks';
    'isExpanded';
    'isExpanding';
    'isMoving';
    'isRetracted';
    'isRetracting';
    'location';
}
export class BlockPlaceEvent extends BlockEvent {
    'block';
    'dimension';
    'player';
}
export class BlockPlaceEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class BlockPotionContainerComponent {
    'fillLevel';
    'location';
    setPotionType(item) {};
}
export class BlockProperties {
    static 'active' = 'active';
    static 'age' = 'age';
    static 'ageBit' = 'age_bit';
    static 'allowUnderwaterBit' = 'allow_underwater_bit';
    static 'attachedBit' = 'attached_bit';
    static 'attachment' = 'attachment';
    static 'bambooLeafSize' = 'bamboo_leaf_size';
    static 'bambooStalkThickness' = 'bamboo_stalk_thickness';
    static 'bigDripleafHead' = 'big_dripleaf_head';
    static 'bigDripleafTilt' = 'big_dripleaf_tilt';
    static 'biteCounter' = 'bite_counter';
    static 'blockLightLevel' = 'block_light_level';
    static 'bloom' = 'bloom';
    static 'brewingStandSlotABit' = 'brewing_stand_slot_a_bit';
    static 'brewingStandSlotBBit' = 'brewing_stand_slot_b_bit';
    static 'brewingStandSlotCBit' = 'brewing_stand_slot_c_bit';
    static 'buttonPressedBit' = 'button_pressed_bit';
    static 'candles' = 'candles';
    static 'cauldronLiquid' = 'cauldron_liquid';
    static 'chemistryTableType' = 'chemistry_table_type';
    static 'chiselType' = 'chisel_type';
    static 'clusterCount' = 'cluster_count';
    static 'color' = 'color';
    static 'colorBit' = 'color_bit';
    static 'composterFillLevel' = 'composter_fill_level';
    static 'conditionalBit' = 'conditional_bit';
    static 'coralColor' = 'coral_color';
    static 'coralDirection' = 'coral_direction';
    static 'coralFanDirection' = 'coral_fan_direction';
    static 'coralHangTypeBit' = 'coral_hang_type_bit';
    static 'coveredBit' = 'covered_bit';
    static 'crackedState' = 'cracked_state';
    static 'damage' = 'damage';
    static 'deadBit' = 'dead_bit';
    static 'deprecated' = 'deprecated';
    static 'direction' = 'direction';
    static 'dirtType' = 'dirt_type';
    static 'disarmedBit' = 'disarmed_bit';
    static 'doorHingeBit' = 'door_hinge_bit';
    static 'doublePlantType' = 'double_plant_type';
    static 'dragDown' = 'drag_down';
    static 'dripstoneThickness' = 'dripstone_thickness';
    static 'endPortalEyeBit' = 'end_portal_eye_bit';
    static 'explodeBit' = 'explode_bit';
    static 'extinguished' = 'extinguished';
    static 'facingDirection' = 'facing_direction';
    static 'fillLevel' = 'fill_level';
    static 'flowerType' = 'flower_type';
    static 'groundSignDirection' = 'ground_sign_direction';
    static 'growingPlantAge' = 'growing_plant_age';
    static 'growth' = 'growth';
    static 'hanging' = 'hanging';
    static 'headPieceBit' = 'head_piece_bit';
    static 'height' = 'height';
    static 'honeyLevel' = 'honey_level';
    static 'hugeMushroomBits' = 'huge_mushroom_bits';
    static 'infiniburnBit' = 'infiniburn_bit';
    static 'inWallBit' = 'in_wall_bit';
    static 'itemFrameMapBit' = 'item_frame_map_bit';
    static 'itemFramePhotoBit' = 'item_frame_photo_bit';
    static 'kelpAge' = 'kelp_age';
    static 'leverDirection' = 'lever_direction';
    static 'liquidDepth' = 'liquid_depth';
    static 'lit' = 'lit';
    static 'moisturizedAmount' = 'moisturized_amount';
    static 'monsterEggStoneType' = 'monster_egg_stone_type';
    static 'multiFaceDirectionBits' = 'multi_face_direction_bits';
    static 'newLeafType' = 'new_leaf_type';
    static 'newLogType' = 'new_log_type';
    static 'noDropBit' = 'no_drop_bit';
    static 'occupiedBit' = 'occupied_bit';
    static 'oldLeafType' = 'old_leaf_type';
    static 'oldLogType' = 'old_log_type';
    static 'openBit' = 'open_bit';
    static 'outputLitBit' = 'output_lit_bit';
    static 'outputSubtractBit' = 'output_subtract_bit';
    static 'persistentBit' = 'persistent_bit';
    static 'pillarAxis' = 'pillar_axis';
    static 'portalAxis' = 'portal_axis';
    static 'poweredBit' = 'powered_bit';
    static 'prismarineBlockType' = 'prismarine_block_type';
    static 'railDataBit' = 'rail_data_bit';
    static 'railDirection' = 'rail_direction';
    static 'redstoneSignal' = 'redstone_signal';
    static 'repeaterDelay' = 'repeater_delay';
    static 'respawnAnchorCharge' = 'respawn_anchor_charge';
    static 'rotation' = 'rotation';
    static 'sandStoneType' = 'sand_stone_type';
    static 'sandType' = 'sand_type';
    static 'saplingType' = 'sapling_type';
    static 'seaGrassType' = 'sea_grass_type';
    static 'spongeType' = 'sponge_type';
    static 'stability' = 'stability';
    static 'stabilityCheck' = 'stability_check';
    static 'stoneBrickType' = 'stone_brick_type';
    static 'stoneSlabType' = 'stone_slab_type';
    static 'stoneSlabType2' = 'stone_slab_type_2';
    static 'stoneSlabType3' = 'stone_slab_type_3';
    static 'stoneSlabType4' = 'stone_slab_type_4';
    static 'stoneType' = 'stone_type';
    static 'strippedBit' = 'stripped_bit';
    static 'structureBlockType' = 'structure_block_type';
    static 'structureVoidType' = 'structure_void_type';
    static 'suspendedBit' = 'suspended_bit';
    static 'tallGrassType' = 'tall_grass_type';
    static 'toggleBit' = 'toggle_bit';
    static 'topSlotBit' = 'top_slot_bit';
    static 'torchFacingDirection' = 'torch_facing_direction';
    static 'triggeredBit' = 'triggered_bit';
    static 'turtleEggCount' = 'turtle_egg_count';
    static 'twistingVinesAge' = 'twisting_vines_age';
    static 'updateBit' = 'update_bit';
    static 'upperBlockBit' = 'upper_block_bit';
    static 'upsideDownBit' = 'upside_down_bit';
    static 'vineDirectionBits' = 'vine_direction_bits';
    static 'wallBlockType' = 'wall_block_type';
    static 'wallConnectionTypeEast' = 'wall_connection_type_east';
    static 'wallConnectionTypeNorth' = 'wall_connection_type_north';
    static 'wallConnectionTypeSouth' = 'wall_connection_type_south';
    static 'wallConnectionTypeWest' = 'wall_connection_type_west';
    static 'wallPostBit' = 'wall_post_bit';
    static 'weepingVinesAge' = 'weeping_vines_age';
    static 'weirdoDirection' = 'weirdo_direction';
    static 'woodType' = 'wood_type';
}
export class BlockRaycastOptions {
    'includeLiquidBlocks';
    'includePassableBlocks';
    'maxDistance';
    constructor() {};
}
export class BlockRecordPlayerComponent {
    clearRecord() {};
    isPlaying() {};
    setRecord(recordItemType) {};
}
export class BlockSnowContainerComponent {
    'fillLevel';
    'location';
}
export class BlockType {
    'canBeWaterlogged';
    'id';
    createDefaultBlockPermutation() {};
}
export class BlockWaterContainerComponent {
    'customColor';
    'fillLevel';
    'location';
    addDye(itemType) {};
}
export class IBlockProperty {
    'name';
}
export class BoolBlockProperty extends IBlockProperty {
    'name';
    'validValues';
    'value';
}
export class ChatEvent {
    'message';
    'sender';
    'sendToTargets';
    'targets';
}
export class ChatEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class Color {
    'alpha';
    'blue';
    'green';
    'red';
    constructor(red, green, blue, alpha) {};
}
export class DataDrivenEntityTriggerEvent {
    'entity';
    'id';
    'modifiers'
}
export class DataDrivenEntityTriggerEventSignal {
    subscribe(
        callback,
        options,
    ) {};
    unsubscribe(callback) {};
}
export class DefinitionModifier {
    'componentGroupsToAdd';
    'componentGroupsToRemove';
    'triggers';
    constructor() {};
}
export class Dimension {
    'id';
    createExplosion(location, radius, explosionOptions) {};
    getBlock(location) {};
    getBlockFromRay(location, direction, options) {};
    getEntities(getEntities) {};
    getEntitiesAtBlockLocation(location) {};
    getEntitiesFromRay(location, direction, options) {};
    getPlayers(getPlayers) {};
    isEmpty(location) {};
    runCommand(commandString) {};
    spawnEntity(identifier, location) {};
    spawnItem(item, location) {};
    spawnParticle(effectName, location, molangVariables) {};
}
export class Effect {
    'amplifier';
    'displayName';
    'duration';
}
export class EffectAddEvent {
    'effect';
    'effectState';
    'entity';
}
export class EffectAddEventSignal {
    subscribe(callback, options) {};
    unsubscribe(callback) {};
}
export class EffectType {
    getName() {};
}
export class Enchantment {
    'level';
    'type';
    constructor(enchantmentType, level) {};
}
export class EnchantmentList {
    'slot';
    [Symbol.iterator]() {};
    addEnchantment(enchantment) {};
    canAddEnchantment(enchantment) {};
    constructor(enchantmentSlot) {};
    getEnchantment(enchantmentType) {};
    hasEnchantment(enchantmentType) {};
    next() {};
    removeEnchantment(enchantmentType) {};
}
export class EnchantmentSlot {
    static 'all' = -1;
    static 'armorFeet' = 4;
    static 'armorHead' = 1;
    static 'armorLegs' = 8;
    static 'armorTorso' = 2;
    static 'axe' = 512;
    static 'bow' = 32;
    static 'carrotStick' = 8192;
    static 'cosmeticHead' = 262144;
    static 'crossbow' = 65536;
    static 'elytra' = 16384;
    static 'fishingRod' = 4096;
    static 'flintsteel' = 256;
    static 'gArmor' = 15;
    static 'gDigging' = 3648;
    static 'gTool' = 131520;
    static 'hoe' = 64;
    static 'none' = 0;
    static 'pickaxe' = 1024;
    static 'shears' = 128;
    static 'shield' = 131072;
    static 'shovel' = 2048;
    static 'spear' = 32768;
    static 'sword' = 16;
}
export class EnchantmentType {
    'id';
    'maxLevel';
}
export class EntityType {
    'id';
}
export class EntityTypes {
    get(identifier) {};
    getAll() {};
}
export class MinecraftEntityTypes {
    'splashPotion';
    'vindicator';
    'villagerV2';
    'husk';
    'hoglin';
    'skeletonHorse';
    'smallFireball';
    'shulker';
    'villager';
    'ravager';
    'witch';
    'skeleton';
    'zoglin';
    'fishingHook';
    'wolf';
    'rabbit';
    'tropicalfish';
    'turtle';
    'player';
    'spider';
    'piglinBrute';
    'blaze';
    'ocelot';
    'goat';
    'magmaCube';
    'llamaSpit';
    'cat';
    'bee';
    'enderPearl';
    'strider';
    'pufferfish';
    'squid';
    'slime';
    'pillager';
    'panda';
    'polarBear';
    'parrot';
    'pig';
    'dragonFireball';
    'ghast';
    'ironGolem';
    'enderDragon';
    'glowSquid';
    'enderman';
    'dolphin';
    'boat';
    'axolotl';
    'xpBottle';
    'tnt';
    'snowball';
    'creeper';
    'salmon';
    'llama';
    'arrow';
    'evocationIllager';
    'fireball';
    'lingeringPotion';
    'cod';
    'zombieVillagerV2';
    'zombieVillager';
    'zombie';
    'witherSkullDangerous';
    'witherSkull';
    'thrownTrident';
    'shulkerBullet';
    'egg';
    'drowned';
    'enderCrystal';
    'silverfish';
    'wither';
    'guardian';
    'fox';
    'endermite';
    'elderGuardian';
    'zombiePigman';
    'zombieHorse';
    'witherSkeleton';
    'wanderingTrader';
    'vex';
    'agent';
    'stray';
    'snowGolem';
    'sheep';
    'piglin';
    'phantom';
    'mule';
    'mooshroom';
    'horse';
    'donkey';
    'cow';
    'chicken';
    'caveSpider';
    'bat';
    'lightningBolt';
    'armorStand';
    'xpOrb';
    'tripodCamera';
    'tntMinecart';
    'minecart';
    'hopperMinecart';
    'fireworksRocket';
    'eyeOfEnderSignal';
    'commandBlockMinecart';
    'chestMinecart';
    'areaEffectCloud';
    'npc';
}
export class Entity {
    'bodyRotation';
    'dimension';
    'headLocation';
    'id';
    'isSneaking';
    'location';
    'nameTag';
    'target';
    'velocity';
    'viewVector';
    addEffect(effectType, duration, amplifier) {};
    addTag(tag) {};
    getBlockFromViewVector(options) {};
    getComponent(componentId) {};
    getComponents() {};
    getEffect(effectType) {};
    getEntitiesFromViewVector(options) {};
    getTags() {};
    hasComponent(componentId) {};
    hasTag(tag) {};
    kill() {};
    removeTag(tag) {};
    runCommand(commandString) {};
    setVelocity(velocity) {};
    teleport(location, dimension, xRotation, yRotation) {};
    teleportFacing(location, dimension, facingLocation) {};
    triggerEvent(eventName) {};
}
export class IEntityComponent {
    'id';
}
export class EntityAddRiderComponent extends IEntityComponent {
    'entityType';
    'id';
    'spawnEvent';
}
export class EntityAgeableComponent extends IEntityComponent {
    'dropItems';
    'duration';
    'feedItems';
    'growUp';
    'id';
}
export class EntityBreathableComponent extends IEntityComponent {
    'breatheBlocks';
    'breathesAir';
    'breathesLava';
    'breathesSolids';
    'breathesWater';
    'generatesBubbles';
    'id';
    'inhaleTime';
    'nonBreatheBlocks';
    'suffocateTime';
    'totalSupply';
    setAirSupply(value) {};
}
export class EntityCanClimbComponent extends IEntityComponent {
    'id';
}
export class EntityCanFlyComponent extends IEntityComponent {
    'id';
}
export class EntityCanPowerJumpComponent extends IEntityComponent {
    'id';
}
export class EntityColorComponent extends IEntityComponent {
    'id';
    'value';
}
export class EntityCreateEvent {
    'entity';
}
export class EntityCreateEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class EntityDataDrivenTriggerEventOptions {
    'entities';
    'entityTypes';
    'eventTypes';
    constructor() {};
}
export class EntityDefinitionFeedItem {
    'growth';
    'item';
}
export class EntityEventOptions {
    'entities';
    'entityTypes';
    constructor() {};
}
export class EntityFireImmuneComponent extends IEntityComponent {
    'id';
}
export class EntityFloatsInLiquidComponent extends IEntityComponent {
    'id';
}
export class EntityFlyingSpeedComponent extends IEntityComponent {
    'id';
    'value';
}
export class EntityFrictionModifierComponent extends IEntityComponent {
    'id';
    'value';
}
export class EntityGroundOffsetComponent extends IEntityComponent {
    'id';
    'value';
}
export class EntityHealableComponent extends IEntityComponent {
    'filters';
    'forceUse';
    'id';
    'items';
}
export class EntityHealthComponent extends IEntityComponent {
    'current';
    'id';
    'value';
    resetToDefaultValue() {};
    resetToMaxValue() {};
    resetToMinValue() {};
    setCurrent(value) {};
}
export class EntityHitEvent {
    'entity';
    'hitBlock';
    'hitEntity';
}
export class EntityHitEventSignal {
    subscribe(callback, options) {};
    unsubscribe(callback) {};
}
export class EntityHurtEvent {
    'hurtEntity';
    'damagingEntity';
    'projectile';
    'damage';
    'cause';
}
export class EntityHurtEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class EntityInventoryComponent extends IEntityComponent {
    'additionalSlotsPerStrength';
    'canBeSiphonedFrom';
    'container';
    'containerType';
    'id';
    'inventorySize';
    'private';
    'restrictToOwner';
}
export class EntityIsBabyComponent extends IEntityComponent {
    'id';
}
export class EntityIsChargedComponent extends IEntityComponent {
    'id';
}
export class EntityIsChestedComponent extends IEntityComponent {
    'id';
}
export class EntityIsDyableComponent extends IEntityComponent {
    'id';
}
export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent {
    'id';
}
export class EntityIsIgnitedComponent extends IEntityComponent {
    'id';
}
export class EntityIsIllagerCaptainComponent extends IEntityComponent {
    'id';
}
export class EntityIsSaddledComponent extends IEntityComponent {
    'id';
}
export class EntityIsShakingComponent extends IEntityComponent {
    'id';
}
export class EntityIsShearedComponent extends IEntityComponent {
    'id';
}
export class EntityIsStackableComponent extends IEntityComponent {
    'id';
}
export class EntityIsStunnedComponent extends IEntityComponent {
    'id';
}
export class EntityIsTamedComponent extends IEntityComponent {
    'id';
}
export class EntityItemComponent {
    'itemStack';
}
export class EntityIterator extends Entity {
    [Symbol.iterator]() {};
    next() {};
}
export class EntityLavaMovementComponent extends IEntityComponent {
    'current';
    'id';
    'value';
    resetToDefaultValue() {};
    resetToMaxValue() {};
    resetToMinValue() {};
    setCurrent(value) {};
}
export class EntityLeashableComponent extends IEntityComponent {
    'id';
    'softDistance';
    leash(leashHolder) {};
    unleash() {};
}
export class EntityMarkVariantComponent extends IEntityComponent {
    'id';
    'value';
}
export class EntityMountTamingComponent extends IEntityComponent {
    'id';
    setTamed(showParticles) {};
}
export class EntityMovementAmphibiousComponent extends IEntityComponent {
    'id';
    'maxTurn';
}
export class EntityMovementBasicComponent extends IEntityComponent {
    'id';
    'maxTurn';
}
export class EntityMovementComponent extends IEntityComponent {
    'current';
    'id';
    'value';
    resetToDefaultValue() {};
    resetToMaxValue() {};
    resetToMinValue() {};
    setCurrent(value) {};
}
export class EntityMovementFlyComponent extends IEntityComponent {
    'id';
    'maxTurn';
}
export class EntityMovementGenericComponent extends IEntityComponent {
    'id';
    'maxTurn';
}
export class EntityMovementGlideComponent extends IEntityComponent {
    'id';
    'maxTurn';
    'speedWhenTurning';
    'startSpeed';
}
export class EntityMovementHoverComponent extends IEntityComponent {
    'id';
    'maxTurn';
}
export class EntityMovementJumpComponent extends IEntityComponent {
    'id';
    'maxTurn';
}
export class EntityMovementSkipComponent extends IEntityComponent {
    'id';
    'maxTurn';
}
export class EntityMovementSwayComponent extends IEntityComponent {
    'id';
    'maxTurn';
    'swayAmplitude';
    'swayFrequency';
}
export class EntityNavigationClimbComponent extends IEntityComponent {
    'avoidDamageBlocks';
    'avoidPortals';
    'avoidSun';
    'avoidWater';
    'canBreach';
    'canBreakDoors';
    'canFloat';
    'canJump';
    'canOpenDoors';
    'canOpenIronDoors';
    'canPassDoors';
    'canPathFromAir';
    'canPathOverLava';
    'canPathOverWater';
    'canSink';
    'canSwim';
    'canWalk';
    'canWalkInLava';
    'id';
    'isAmphibious';
}
export class EntityNavigationFloatComponent extends IEntityComponent {
    'avoidDamageBlocks';
    'avoidPortals';
    'avoidSun';
    'avoidWater';
    'canBreach';
    'canBreakDoors';
    'canFloat';
    'canJump';
    'canOpenDoors';
    'canOpenIronDoors';
    'canPassDoors';
    'canPathFromAir';
    'canPathOverLava';
    'canPathOverWater';
    'canSink';
    'canSwim';
    'canWalk';
    'canWalkInLava';
    'id';
    'isAmphibious';
}
export class EntityNavigationFlyComponent extends IEntityComponent {
    'avoidDamageBlocks';
    'avoidPortals';
    'avoidSun';
    'avoidWater';
    'canBreach';
    'canBreakDoors';
    'canFloat';
    'canJump';
    'canOpenDoors';
    'canOpenIronDoors';
    'canPassDoors';
    'canPathFromAir';
    'canPathOverLava';
    'canPathOverWater';
    'canSink';
    'canSwim';
    'canWalk';
    'canWalkInLava';
    'id';
    'isAmphibious';
}
export class EntityNavigationGenericComponent extends IEntityComponent {
    'avoidDamageBlocks';
    'avoidPortals';
    'avoidSun';
    'avoidWater';
    'canBreach';
    'canBreakDoors';
    'canFloat';
    'canJump';
    'canOpenDoors';
    'canOpenIronDoors';
    'canPassDoors';
    'canPathFromAir';
    'canPathOverLava';
    'canPathOverWater';
    'canSink';
    'canSwim';
    'canWalk';
    'canWalkInLava';
    'id';
    'isAmphibious';
}
export class EntityNavigationHoverComponent extends IEntityComponent {
    'avoidDamageBlocks';
    'avoidPortals';
    'avoidSun';
    'avoidWater';
    'canBreach';
    'canBreakDoors';
    'canFloat';
    'canJump';
    'canOpenDoors';
    'canOpenIronDoors';
    'canPassDoors';
    'canPathFromAir';
    'canPathOverLava';
    'canPathOverWater';
    'canSink';
    'canSwim';
    'canWalk';
    'canWalkInLava';
    'id';
    'isAmphibious';
}
export class EntityNavigationWalkComponent extends IEntityComponent {
    'avoidDamageBlocks';
    'avoidPortals';
    'avoidSun';
    'avoidWater';
    'canBreach';
    'canBreakDoors';
    'canFloat';
    'canJump';
    'canOpenDoors';
    'canOpenIronDoors';
    'canPassDoors';
    'canPathFromAir';
    'canPathOverLava';
    'canPathOverWater';
    'canSink';
    'canSwim';
    'canWalk';
    'canWalkInLava';
    'id';
    'isAmphibious';
}
export class EntityPushThroughComponent extends IEntityComponent {
    'id';
    'value';
}
export class EntityQueryOptions {
    'closest';
    'excludeFamilies';
    'excludeGameModes';
    'excludeNames';
    'excludeTags';
    'excludeTypes';
    'families';
    'farthest';
    'gameMode';
    'location';
    'maxDistance';
    'maxHorizontalRotation';
    'maxLevel';
    'maxVerticalRotation';
    'minDistance';
    'minHorizontalRotation';
    'minLevel';
    'minVerticalRotation';
    'name';
    'scoreOptions';
    'tags';
    'type';
    'volume';
    constructor() {};
}
export class EntityQueryScoreOptions {
    'exclude';
    'maxScore';
    'minScore';
    'objective';
    constructor() {};
}
export class EntityRaycastOptions {
    'maxDistance';
    constructor() {};
}
export class EntityRideableComponent extends IEntityComponent {
    'controllingSeat';
    'crouchingSkipInteract';
    'familyTypes';
    'id';
    'interactText';
    'pullInEntities';
    'riderCanInteract';
    'seatCount';
    'seats';
    addRider(rider) {};
    ejectRider(rider) {};
    ejectRiders() {};
}
export class EntityScaleComponent extends IEntityComponent {
    'id';
    'value';
}
export class EntitySkinIdComponent extends IEntityComponent {
    'id';
    'value';
}
export class EntityStrengthComponent extends IEntityComponent {
    'id';
    'max';
    'value';
}
export class EntityTameableComponent extends IEntityComponent {
    'id';
    'probability';
    'tameEvent';
    'tameItems';
    tame() {};
}
export class EntityUnderwaterMovementComponent extends IEntityComponent {
    'current';
    'id';
    'value';
    resetToDefaultValue() {};
    resetToMaxValue() {};
    resetToMinValue() {};
    setCurrent(value) {};
}
export class EntityVariantComponent extends IEntityComponent {
    'id';
    'value';
}
export class EntityWantsJockeyComponent extends IEntityComponent {
    'id';
}
export class Events {
    'beforeChat';
    'beforeDataDrivenEntityTriggerEvent';
    'beforeExplosion';
    'beforeItemDefinitionEvent';
    'beforeItemUse';
    'beforeItemUseOn';
    'beforePistonActivate';
    'blockBreak';
    'blockExplode';
    'blockPlace';
    'chat';
    'dataDrivenEntityTriggerEvent';
    'effectAdd';
    'entityCreate';
    'entityHit';
    'entityHurt';
    'explosion';
    'itemDefinitionEvent';
    'itemUse';
    'itemUseOn';
    'leverActivate';
    'pistonActivate';
    'playerJoin';
    'playerLeave';
    'tick';
    'weatherChange';
}
export class ExplosionEvent {
    'dimension';
    'impactedBlocks';
    'source';
}
export class ExplosionEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class ExplosionOptions {
    'allowUnderwater';
    'breaksBlocks';
    'causesFire';
    'source';
    constructor() {};
}
export class FeedItem {
    'effects';
    'healAmount';
    'item';
}
export class FeedItemEffect {
    'amplifier';
    'chance';
    'duration';
    'name';
}
export class FilterGroup {}
export class FluidContainer {
    static 'maxFillLevel' = 6;
    static 'minFillLevel' = 0;
}
export class IntBlockProperty extends IBlockProperty {
    'name';
    'validValues';
    'value';
}
export class InventoryComponentContainer extends Container {
    'emptySlotsCount';
    'size';
    addItem(itemStack) {};
    getItem(slot) {};
    setItem(slot, itemStack) {};
    swapItems(slot, otherSlot, otherContainer) {};
    transferItem(fromSlot, toSlot, toContainer) {};
}
export class ItemCooldownComponent {
    'cooldownCategory';
    'cooldownTicks';
    'id';
    startCooldown(player) {};
}
export class ItemDefinitionEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class ItemDefinitionTriggeredEvent {
    'eventName';
    'item';
    'source';
}
export class ItemDurabilityComponent {
    'damage';
    'damageRange';
    'id';
    'maxDurability';
    getDamageChance(unbreaking) {};
}
export class ItemEnchantsComponent {
    'enchantments';
    'id';
    removeAllEnchantments() {};
}
export class ItemFoodComponent {
    'canAlwaysEat';
    'id';
    'nutrition';
    'saturationModifier';
    'usingConvertsTo';
}
export class Items {
    static get(itemId) {};
}
export class ItemStack {
    'amount';
    'data';
    'id';
    'nameTag';
    constructor(itemType, amount, data) {};
    getComponent(componentId) {};
    getComponents() {};
    getLore() {};
    hasComponent(componentId) {};
    setLore(loreList) {};
    triggerEvent(eventName) {};
}
export class ItemType {
    'id';
}
export class ItemUseEvent {
    'item';
    'source';
}
export class ItemUseEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class ItemUseOnEvent {
    'blockFace';
    'blockLocation';
    'faceLocationX';
    'faceLocationY';
    'item';
    'source';
}
export class ItemUseOnEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class LeverActivateEvent {
    'dimension';
    'block';
    'isPowered';
}
export class LeverActivateEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class Location {
    'x';
    'y';
    'z';
    constructor(x, y, z) {};
    equals(other) {};
    isNear(other, epsilon) {};
}
export class MinecraftBlockTypes {
    static 'acaciaButton';
    static 'acaciaDoor';
    static 'acaciaFenceGate';
    static 'acaciaPressurePlate';
    static 'acaciaStairs';
    static 'acaciaStandingSign';
    static 'acaciaTrapdoor';
    static 'acaciaWallSign';
    static 'activatorRail';
    static 'air';
    static 'allow';
    static 'amethystBlock';
    static 'amethystCluster';
    static 'ancientDebris';
    static 'andesiteStairs';
    static 'anvil';
    static 'azalea';
    static 'azaleaLeaves';
    static 'azaleaLeavesFlowered';
    static 'bamboo';
    static 'bambooSapling';
    static 'barrel';
    static 'barrier';
    static 'basalt';
    static 'beacon';
    static 'bed';
    static 'bedrock';
    static 'beehive';
    static 'beeNest';
    static 'beetroot';
    static 'bell';
    static 'bigDripleaf';
    static 'birchButton';
    static 'birchDoor';
    static 'birchFenceGate';
    static 'birchPressurePlate';
    static 'birchStairs';
    static 'birchStandingSign';
    static 'birchTrapdoor';
    static 'birchWallSign';
    static 'blackCandle';
    static 'blackCandleCake';
    static 'blackGlazedTerracotta';
    static 'blackstone';
    static 'blackstoneDoubleSlab';
    static 'blackstoneSlab';
    static 'blackstoneStairs';
    static 'blackstoneWall';
    static 'blastFurnace';
    static 'blueCandle';
    static 'blueCandleCake';
    static 'blueGlazedTerracotta';
    static 'blueIce';
    static 'boneBlock';
    static 'bookshelf';
    static 'borderBlock';
    static 'brewingStand';
    static 'brickBlock';
    static 'brickStairs';
    static 'brownCandle';
    static 'brownCandleCake';
    static 'brownGlazedTerracotta';
    static 'brownMushroom';
    static 'brownMushroomBlock';
    static 'bubbleColumn';
    static 'buddingAmethyst';
    static 'cactus';
    static 'cake';
    static 'calcite';
    static 'camera';
    static 'campfire';
    static 'candle';
    static 'candleCake';
    static 'carpet';
    static 'carrots';
    static 'cartographyTable';
    static 'carvedPumpkin';
    static 'cauldron';
    static 'caveVines';
    static 'caveVinesBodyWithBerries';
    static 'caveVinesHeadWithBerries';
    static 'chain';
    static 'chainCommandBlock';
    static 'chemicalHeat';
    static 'chemistryTable';
    static 'chest';
    static 'chiseledDeepslate';
    static 'chiseledNetherBricks';
    static 'chiseledPolishedBlackstone';
    static 'chorusFlower';
    static 'chorusPlant';
    static 'clay';
    static 'clientRequestPlaceholderBlock';
    static 'coalBlock';
    static 'coalOre';
    static 'cobbledDeepslate';
    static 'cobbledDeepslateDoubleSlab';
    static 'cobbledDeepslateSlab';
    static 'cobbledDeepslateStairs';
    static 'cobbledDeepslateWall';
    static 'cobblestone';
    static 'cobblestoneWall';
    static 'cocoa';
    static 'coloredTorchBp';
    static 'coloredTorchRg';
    static 'commandBlock';
    static 'composter';
    static 'concrete';
    static 'concretepowder';
    static 'conduit';
    static 'copperBlock';
    static 'copperOre';
    static 'coral';
    static 'coralBlock';
    static 'coralFan';
    static 'coralFanDead';
    static 'coralFanHang';
    static 'coralFanHang2';
    static 'coralFanHang3';
    static 'crackedDeepslateBricks';
    static 'crackedDeepslateTiles';
    static 'crackedNetherBricks';
    static 'crackedPolishedBlackstoneBricks';
    static 'craftingTable';
    static 'crimsonButton';
    static 'crimsonDoor';
    static 'crimsonDoubleSlab';
    static 'crimsonFence';
    static 'crimsonFenceGate';
    static 'crimsonFungus';
    static 'crimsonHyphae';
    static 'crimsonNylium';
    static 'crimsonPlanks';
    static 'crimsonPressurePlate';
    static 'crimsonRoots';
    static 'crimsonSlab';
    static 'crimsonStairs';
    static 'crimsonStandingSign';
    static 'crimsonStem';
    static 'crimsonTrapdoor';
    static 'crimsonWallSign';
    static 'cryingObsidian';
    static 'cutCopper';
    static 'cutCopperSlab';
    static 'cutCopperStairs';
    static 'cyanCandle';
    static 'cyanCandleCake';
    static 'cyanGlazedTerracotta';
    static 'darkOakButton';
    static 'darkOakDoor';
    static 'darkOakFenceGate';
    static 'darkOakPressurePlate';
    static 'darkOakStairs';
    static 'darkoakStandingSign';
    static 'darkOakTrapdoor';
    static 'darkoakWallSign';
    static 'darkPrismarineStairs';
    static 'daylightDetector';
    static 'daylightDetectorInverted';
    static 'deadbush';
    static 'deepslate';
    static 'deepslateBrickDoubleSlab';
    static 'deepslateBricks';
    static 'deepslateBrickSlab';
    static 'deepslateBrickStairs';
    static 'deepslateBrickWall';
    static 'deepslateCoalOre';
    static 'deepslateCopperOre';
    static 'deepslateDiamondOre';
    static 'deepslateEmeraldOre';
    static 'deepslateGoldOre';
    static 'deepslateIronOre';
    static 'deepslateLapisOre';
    static 'deepslateRedstoneOre';
    static 'deepslateTileDoubleSlab';
    static 'deepslateTiles';
    static 'deepslateTileSlab';
    static 'deepslateTileStairs';
    static 'deepslateTileWall';
    static 'deny';
    static 'detectorRail';
    static 'diamondBlock';
    static 'diamondOre';
    static 'dioriteStairs';
    static 'dirt';
    static 'dirtWithRoots';
    static 'dispenser';
    static 'doubleCutCopperSlab';
    static 'doublePlant';
    static 'doubleStoneSlab';
    static 'doubleStoneSlab2';
    static 'doubleStoneSlab3';
    static 'doubleStoneSlab4';
    static 'doubleWoodenSlab';
    static 'dragonEgg';
    static 'driedKelpBlock';
    static 'dripstoneBlock';
    static 'dropper';
    static 'element0';
    static 'element1';
    static 'element10';
    static 'element100';
    static 'element101';
    static 'element102';
    static 'element103';
    static 'element104';
    static 'element105';
    static 'element106';
    static 'element107';
    static 'element108';
    static 'element109';
    static 'element11';
    static 'element110';
    static 'element111';
    static 'element112';
    static 'element113';
    static 'element114';
    static 'element115';
    static 'element116';
    static 'element117';
    static 'element118';
    static 'element12';
    static 'element13';
    static 'element14';
    static 'element15';
    static 'element16';
    static 'element17';
    static 'element18';
    static 'element19';
    static 'element2';
    static 'element20';
    static 'element21';
    static 'element22';
    static 'element23';
    static 'element24';
    static 'element25';
    static 'element26';
    static 'element27';
    static 'element28';
    static 'element29';
    static 'element3';
    static 'element30';
    static 'element31';
    static 'element32';
    static 'element33';
    static 'element34';
    static 'element35';
    static 'element36';
    static 'element37';
    static 'element38';
    static 'element39';
    static 'element4';
    static 'element40';
    static 'element41';
    static 'element42';
    static 'element43';
    static 'element44';
    static 'element45';
    static 'element46';
    static 'element47';
    static 'element48';
    static 'element49';
    static 'element5';
    static 'element50';
    static 'element51';
    static 'element52';
    static 'element53';
    static 'element54';
    static 'element55';
    static 'element56';
    static 'element57';
    static 'element58';
    static 'element59';
    static 'element6';
    static 'element60';
    static 'element61';
    static 'element62';
    static 'element63';
    static 'element64';
    static 'element65';
    static 'element66';
    static 'element67';
    static 'element68';
    static 'element69';
    static 'element7';
    static 'element70';
    static 'element71';
    static 'element72';
    static 'element73';
    static 'element74';
    static 'element75';
    static 'element76';
    static 'element77';
    static 'element78';
    static 'element79';
    static 'element8';
    static 'element80';
    static 'element81';
    static 'element82';
    static 'element83';
    static 'element84';
    static 'element85';
    static 'element86';
    static 'element87';
    static 'element88';
    static 'element89';
    static 'element9';
    static 'element90';
    static 'element91';
    static 'element92';
    static 'element93';
    static 'element94';
    static 'element95';
    static 'element96';
    static 'element97';
    static 'element98';
    static 'element99';
    static 'emeraldBlock';
    static 'emeraldOre';
    static 'enchantingTable';
    static 'endBricks';
    static 'endBrickStairs';
    static 'enderChest';
    static 'endGateway';
    static 'endPortal';
    static 'endPortalFrame';
    static 'endRod';
    static 'endStone';
    static 'exposedCopper';
    static 'exposedCutCopper';
    static 'exposedCutCopperSlab';
    static 'exposedCutCopperStairs';
    static 'exposedDoubleCutCopperSlab';
    static 'farmland';
    static 'fence';
    static 'fenceGate';
    static 'fire';
    static 'fletchingTable';
    static 'floweringAzalea';
    static 'flowerPot';
    static 'flowingLava';
    static 'flowingWater';
    static 'frame';
    static 'frogSpawn';
    static 'frostedIce';
    static 'furnace';
    static 'gildedBlackstone';
    static 'glass';
    static 'glassPane';
    static 'glowFrame';
    static 'glowingobsidian';
    static 'glowLichen';
    static 'glowstone';
    static 'goldBlock';
    static 'goldenRail';
    static 'goldOre';
    static 'graniteStairs';
    static 'grass';
    static 'grassPath';
    static 'gravel';
    static 'grayCandle';
    static 'grayCandleCake';
    static 'grayGlazedTerracotta';
    static 'greenCandle';
    static 'greenCandleCake';
    static 'greenGlazedTerracotta';
    static 'grindstone';
    static 'hangingRoots';
    static 'hardenedClay';
    static 'hardGlass';
    static 'hardGlassPane';
    static 'hardStainedGlass';
    static 'hardStainedGlassPane';
    static 'hayBlock';
    static 'heavyWeightedPressurePlate';
    static 'honeyBlock';
    static 'honeycombBlock';
    static 'hopper';
    static 'ice';
    static 'infestedDeepslate';
    static 'infoUpdate';
    static 'infoUpdate2';
    static 'invisiblebedrock';
    static 'ironBars';
    static 'ironBlock';
    static 'ironDoor';
    static 'ironOre';
    static 'ironTrapdoor';
    static 'jigsaw';
    static 'jukebox';
    static 'jungleButton';
    static 'jungleDoor';
    static 'jungleFenceGate';
    static 'junglePressurePlate';
    static 'jungleStairs';
    static 'jungleStandingSign';
    static 'jungleTrapdoor';
    static 'jungleWallSign';
    static 'kelp';
    static 'ladder';
    static 'lantern';
    static 'lapisBlock';
    static 'lapisOre';
    static 'largeAmethystBud';
    static 'lava';
    static 'lavaCauldron';
    static 'leaves';
    static 'leaves2';
    static 'lectern';
    static 'lever';
    static 'lightBlock';
    static 'lightBlueCandle';
    static 'lightBlueCandleCake';
    static 'lightBlueGlazedTerracotta';
    static 'lightGrayCandle';
    static 'lightGrayCandleCake';
    static 'lightningRod';
    static 'lightWeightedPressurePlate';
    static 'limeCandle';
    static 'limeCandleCake';
    static 'limeGlazedTerracotta';
    static 'litBlastFurnace';
    static 'litDeepslateRedstoneOre';
    static 'litFurnace';
    static 'litPumpkin';
    static 'litRedstoneLamp';
    static 'litRedstoneOre';
    static 'litSmoker';
    static 'lodestone';
    static 'log';
    static 'log2';
    static 'loom';
    static 'magentaCandle';
    static 'magentaCandleCake';
    static 'magentaGlazedTerracotta';
    static 'magma';
    static 'mediumAmethystBud';
    static 'melonBlock';
    static 'melonStem';
    static 'mobSpawner';
    static 'monsterEgg';
    static 'mossBlock';
    static 'mossCarpet';
    static 'mossyCobblestone';
    static 'mossyCobblestoneStairs';
    static 'mossyStoneBrickStairs';
    static 'movingblock';
    static 'mycelium';
    static 'mysteriousFrame';
    static 'mysteriousFrameSlot';
    static 'netherBrick';
    static 'netherBrickFence';
    static 'netherBrickStairs';
    static 'netherGoldOre';
    static 'netheriteBlock';
    static 'netherrack';
    static 'netherreactor';
    static 'netherSprouts';
    static 'netherWart';
    static 'netherWartBlock';
    static 'normalStoneStairs';
    static 'noteblock';
    static 'oakStairs';
    static 'observer';
    static 'obsidian';
    static 'ochreFroglight';
    static 'orangeCandle';
    static 'orangeCandleCake';
    static 'orangeGlazedTerracotta';
    static 'oxidizedCopper';
    static 'oxidizedCutCopper';
    static 'oxidizedCutCopperSlab';
    static 'oxidizedCutCopperStairs';
    static 'oxidizedDoubleCutCopperSlab';
    static 'packedIce';
    static 'pearlescentFroglight';
    static 'pinkCandle';
    static 'pinkCandleCake';
    static 'pinkGlazedTerracotta';
    static 'piston';
    static 'pistonarmcollision';
    static 'planks';
    static 'podzol';
    static 'pointedDripstone';
    static 'polishedAndesiteStairs';
    static 'polishedBasalt';
    static 'polishedBlackstone';
    static 'polishedBlackstoneBrickDoubleSlab';
    static 'polishedBlackstoneBricks';
    static 'polishedBlackstoneBrickSlab';
    static 'polishedBlackstoneBrickStairs';
    static 'polishedBlackstoneBrickWall';
    static 'polishedBlackstoneButton';
    static 'polishedBlackstoneDoubleSlab';
    static 'polishedBlackstonePressurePlate';
    static 'polishedBlackstoneSlab';
    static 'polishedBlackstoneStairs';
    static 'polishedBlackstoneWall';
    static 'polishedDeepslate';
    static 'polishedDeepslateDoubleSlab';
    static 'polishedDeepslateSlab';
    static 'polishedDeepslateStairs';
    static 'polishedDeepslateWall';
    static 'polishedDioriteStairs';
    static 'polishedGraniteStairs';
    static 'portal';
    static 'potatoes';
    static 'powderSnow';
    static 'poweredComparator';
    static 'poweredRepeater';
    static 'prismarine';
    static 'prismarineBricksStairs';
    static 'prismarineStairs';
    static 'pumpkin';
    static 'pumpkinStem';
    static 'purpleCandle';
    static 'purpleCandleCake';
    static 'purpleGlazedTerracotta';
    static 'purpurBlock';
    static 'purpurStairs';
    static 'quartzBlock';
    static 'quartzBricks';
    static 'quartzOre';
    static 'quartzStairs';
    static 'rail';
    static 'rawCopperBlock';
    static 'rawGoldBlock';
    static 'rawIronBlock';
    static 'redCandle';
    static 'redCandleCake';
    static 'redFlower';
    static 'redGlazedTerracotta';
    static 'redMushroom';
    static 'redMushroomBlock';
    static 'redNetherBrick';
    static 'redNetherBrickStairs';
    static 'redSandstone';
    static 'redSandstoneStairs';
    static 'redstoneBlock';
    static 'redstoneLamp';
    static 'redstoneOre';
    static 'redstoneTorch';
    static 'redstoneWire';
    static 'reeds';
    static 'repeatingCommandBlock';
    static 'reserved6';
    static 'respawnAnchor';
    static 'sand';
    static 'sandstone';
    static 'sandstoneStairs';
    static 'sapling';
    static 'scaffolding';
    static 'sculk';
    static 'sculkCatalyst';
    static 'sculkSensor';
    static 'sculkShrieker';
    static 'sculkVein';
    static 'seagrass';
    static 'sealantern';
    static 'seaPickle';
    static 'shroomlight';
    static 'shulkerBox';
    static 'silverGlazedTerracotta';
    static 'skull';
    static 'slime';
    static 'smallAmethystBud';
    static 'smallDripleafBlock';
    static 'smithingTable';
    static 'smoker';
    static 'smoothBasalt';
    static 'smoothQuartzStairs';
    static 'smoothRedSandstoneStairs';
    static 'smoothSandstoneStairs';
    static 'smoothStone';
    static 'snow';
    static 'snowLayer';
    static 'soulCampfire';
    static 'soulFire';
    static 'soulLantern';
    static 'soulSand';
    static 'soulSoil';
    static 'soulTorch';
    static 'sponge';
    static 'sporeBlossom';
    static 'spruceButton';
    static 'spruceDoor';
    static 'spruceFenceGate';
    static 'sprucePressurePlate';
    static 'spruceStairs';
    static 'spruceStandingSign';
    static 'spruceTrapdoor';
    static 'spruceWallSign';
    static 'stainedGlass';
    static 'stainedGlassPane';
    static 'stainedHardenedClay';
    static 'standingBanner';
    static 'standingSign';
    static 'stickyPiston';
    static 'stickypistonarmcollision';
    static 'stone';
    static 'stonebrick';
    static 'stoneBrickStairs';
    static 'stoneButton';
    static 'stonecutter';
    static 'stonecutterBlock';
    static 'stonePressurePlate';
    static 'stoneSlab';
    static 'stoneSlab2';
    static 'stoneSlab3';
    static 'stoneSlab4';
    static 'stoneStairs';
    static 'strippedAcaciaLog';
    static 'strippedBirchLog';
    static 'strippedCrimsonHyphae';
    static 'strippedCrimsonStem';
    static 'strippedDarkOakLog';
    static 'strippedJungleLog';
    static 'strippedOakLog';
    static 'strippedSpruceLog';
    static 'strippedWarpedHyphae';
    static 'strippedWarpedStem';
    static 'structureBlock';
    static 'structureVoid';
    static 'sweetBerryBush';
    static 'tallgrass';
    static 'target';
    static 'tintedGlass';
    static 'tnt';
    static 'torch';
    static 'trapdoor';
    static 'trappedChest';
    static 'tripwire';
    static 'tripwireHook';
    static 'tuff';
    static 'turtleEgg';
    static 'twistingVines';
    static 'underwaterTorch';
    static 'undyedShulkerBox';
    static 'unknown';
    static 'unlitRedstoneTorch';
    static 'unpoweredComparator';
    static 'unpoweredRepeater';
    static 'verdantFroglight';
    static 'vine';
    static 'wallBanner';
    static 'wallSign';
    static 'warpedButton';
    static 'warpedDoor';
    static 'warpedDoubleSlab';
    static 'warpedFence';
    static 'warpedFenceGate';
    static 'warpedFungus';
    static 'warpedHyphae';
    static 'warpedNylium';
    static 'warpedPlanks';
    static 'warpedPressurePlate';
    static 'warpedRoots';
    static 'warpedSlab';
    static 'warpedStairs';
    static 'warpedStandingSign';
    static 'warpedStem';
    static 'warpedTrapdoor';
    static 'warpedWallSign';
    static 'warpedWartBlock';
    static 'water';
    static 'waterlily';
    static 'waxedCopper';
    static 'waxedCutCopper';
    static 'waxedCutCopperSlab';
    static 'waxedCutCopperStairs';
    static 'waxedDoubleCutCopperSlab';
    static 'waxedExposedCopper';
    static 'waxedExposedCutCopper';
    static 'waxedExposedCutCopperSlab';
    static 'waxedExposedCutCopperStairs';
    static 'waxedExposedDoubleCutCopperSlab';
    static 'waxedOxidizedCopper';
    static 'waxedOxidizedCutCopper';
    static 'waxedOxidizedCutCopperSlab';
    static 'waxedOxidizedCutCopperStairs';
    static 'waxedOxidizedDoubleCutCopperSlab';
    static 'waxedWeatheredCopper';
    static 'waxedWeatheredCutCopper';
    static 'waxedWeatheredCutCopperSlab';
    static 'waxedWeatheredCutCopperStairs';
    static 'waxedWeatheredDoubleCutCopperSlab';
    static 'weatheredCopper';
    static 'weatheredCutCopper';
    static 'weatheredCutCopperSlab';
    static 'weatheredCutCopperStairs';
    static 'weatheredDoubleCutCopperSlab';
    static 'web';
    static 'weepingVines';
    static 'wheat';
    static 'whiteCandle';
    static 'whiteCandleCake';
    static 'whiteGlazedTerracotta';
    static 'witherRose';
    static 'wood';
    static 'woodenButton';
    static 'woodenDoor';
    static 'woodenPressurePlate';
    static 'woodenSlab';
    static 'wool';
    static 'yellowCandle';
    static 'yellowCandleCake';
    static 'yellowFlower';
    static 'yellowGlazedTerracotta';
    static get(typeName) {};
    static getAllBlockTypes() {};
}
export class MinecraftDimensionTypes {
    static 'nether' = 'minecraft:nether';
    static 'overworld' = 'minecraft:overworld';
    static 'theEnd' = 'minecraft:the_end';
}
export class MinecraftEffectTypes {
    static 'absorption';
    static 'badOmen';
    static 'blindness';
    static 'conduitPower';
    static 'empty';
    static 'fatalPoison';
    static 'fireResistance';
    static 'haste';
    static 'healthBoost';
    static 'hunger';
    static 'instantDamage';
    static 'instantHealth';
    static 'invisibility';
    static 'jumpBoost';
    static 'levitation';
    static 'miningFatigue';
    static 'nausea';
    static 'nightVision';
    static 'poison';
    static 'regeneration';
    static 'resistance';
    static 'saturation';
    static 'slowFalling';
    static 'slowness';
    static 'speed';
    static 'strength';
    static 'villageHero';
    static 'waterBreathing';
    static 'weakness';
    static 'wither';
}
export class MinecraftEnchantmentTypes {
    static 'aquaAffinity';
    static 'baneOfArthropods';
    static 'binding';
    static 'blastProtection';
    static 'channeling';
    static 'depthStrider';
    static 'efficiency';
    static 'featherFalling';
    static 'fireAspect';
    static 'fireProtection';
    static 'flame';
    static 'fortune';
    static 'frostWalker';
    static 'impaling';
    static 'infinity';
    static 'knockback';
    static 'looting';
    static 'loyalty';
    static 'luckOfTheSea';
    static 'lure';
    static 'mending';
    static 'multishot';
    static 'piercing';
    static 'power';
    static 'projectileProtection';
    static 'protection';
    static 'punch';
    static 'quickCharge';
    static 'respiration';
    static 'riptide';
    static 'sharpness';
    static 'silkTouch';
    static 'smite';
    static 'soulSpeed';
    static 'thorns';
    static 'unbreaking';
    static 'vanishing';
}
export class MinecraftItemTypes {
    static 'acaciaBoat';
    static 'acaciaButton';
    static 'acaciaDoor';
    static 'acaciaFenceGate';
    static 'acaciaPressurePlate';
    static 'acaciaSign';
    static 'acaciaStairs';
    static 'acaciaStandingSign';
    static 'acaciaTrapdoor';
    static 'acaciaWallSign';
    static 'activatorRail';
    static 'agentSpawnEgg';
    static 'air';
    static 'allaySpawnEgg';
    static 'allow';
    static 'amethystBlock';
    static 'amethystCluster';
    static 'amethystShard';
    static 'ancientDebris';
    static 'andesiteStairs';
    static 'anvil';
    static 'apple';
    static 'armorStand';
    static 'arrow';
    static 'axolotlBucket';
    static 'axolotlSpawnEgg';
    static 'azalea';
    static 'azaleaLeaves';
    static 'azaleaLeavesFlowered';
    static 'bakedPotato';
    static 'balloon';
    static 'bamboo';
    static 'bambooSapling';
    static 'banner';
    static 'bannerPattern';
    static 'barrel';
    static 'barrier';
    static 'basalt';
    static 'batSpawnEgg';
    static 'beacon';
    static 'bed';
    static 'bedrock';
    static 'beef';
    static 'beehive';
    static 'beeNest';
    static 'beeSpawnEgg';
    static 'beetroot';
    static 'beetrootSeeds';
    static 'beetrootSoup';
    static 'bell';
    static 'bigDripleaf';
    static 'birchBoat';
    static 'birchButton';
    static 'birchDoor';
    static 'birchFenceGate';
    static 'birchPressurePlate';
    static 'birchSign';
    static 'birchStairs';
    static 'birchStandingSign';
    static 'birchTrapdoor';
    static 'birchWallSign';
    static 'blackCandle';
    static 'blackCandleCake';
    static 'blackDye';
    static 'blackGlazedTerracotta';
    static 'blackstone';
    static 'blackstoneDoubleSlab';
    static 'blackstoneSlab';
    static 'blackstoneStairs';
    static 'blackstoneWall';
    static 'blastFurnace';
    static 'blazePowder';
    static 'blazeRod';
    static 'blazeSpawnEgg';
    static 'bleach';
    static 'blueCandle';
    static 'blueCandleCake';
    static 'blueDye';
    static 'blueGlazedTerracotta';
    static 'blueIce';
    static 'boat';
    static 'bone';
    static 'boneBlock';
    static 'boneMeal';
    static 'book';
    static 'bookshelf';
    static 'borderBlock';
    static 'bordureIndentedBannerPattern';
    static 'bow';
    static 'bowl';
    static 'bread';
    static 'brewingStand';
    static 'brewingstandblock';
    static 'brick';
    static 'brickBlock';
    static 'brickStairs';
    static 'brownCandle';
    static 'brownCandleCake';
    static 'brownDye';
    static 'brownGlazedTerracotta';
    static 'brownMushroom';
    static 'brownMushroomBlock';
    static 'bubbleColumn';
    static 'bucket';
    static 'buddingAmethyst';
    static 'cactus';
    static 'cake';
    static 'calcite';
    static 'camera';
    static 'campfire';
    static 'candle';
    static 'candleCake';
    static 'carpet';
    static 'carrot';
    static 'carrotOnAStick';
    static 'carrots';
    static 'cartographyTable';
    static 'carvedPumpkin';
    static 'catSpawnEgg';
    static 'cauldron';
    static 'caveSpiderSpawnEgg';
    static 'caveVines';
    static 'caveVinesBodyWithBerries';
    static 'caveVinesHeadWithBerries';
    static 'chain';
    static 'chainCommandBlock';
    static 'chainmailBoots';
    static 'chainmailChestplate';
    static 'chainmailHelmet';
    static 'chainmailLeggings';
    static 'charcoal';
    static 'chemicalHeat';
    static 'chemistryTable';
    static 'chest';
    static 'chestMinecart';
    static 'chicken';
    static 'chickenSpawnEgg';
    static 'chiseledDeepslate';
    static 'chiseledNetherBricks';
    static 'chiseledPolishedBlackstone';
    static 'chorusFlower';
    static 'chorusFruit';
    static 'chorusPlant';
    static 'clay';
    static 'clayBall';
    static 'clientRequestPlaceholderBlock';
    static 'clock';
    static 'coal';
    static 'coalBlock';
    static 'coalOre';
    static 'cobbledDeepslate';
    static 'cobbledDeepslateDoubleSlab';
    static 'cobbledDeepslateSlab';
    static 'cobbledDeepslateStairs';
    static 'cobbledDeepslateWall';
    static 'cobblestone';
    static 'cobblestoneWall';
    static 'cocoa';
    static 'cocoaBeans';
    static 'cod';
    static 'codBucket';
    static 'codSpawnEgg';
    static 'coloredTorchBp';
    static 'coloredTorchRg';
    static 'commandBlock';
    static 'commandBlockMinecart';
    static 'comparator';
    static 'compass';
    static 'composter';
    static 'compound';
    static 'concrete';
    static 'concretePowder';
    static 'conduit';
    static 'cookedBeef';
    static 'cookedChicken';
    static 'cookedCod';
    static 'cookedMutton';
    static 'cookedPorkchop';
    static 'cookedRabbit';
    static 'cookedSalmon';
    static 'cookie';
    static 'copperBlock';
    static 'copperIngot';
    static 'copperOre';
    static 'coral';
    static 'coralBlock';
    static 'coralFan';
    static 'coralFanDead';
    static 'coralFanHang';
    static 'coralFanHang2';
    static 'coralFanHang3';
    static 'cowSpawnEgg';
    static 'crackedDeepslateBricks';
    static 'crackedDeepslateTiles';
    static 'crackedNetherBricks';
    static 'crackedPolishedBlackstoneBricks';
    static 'craftingTable';
    static 'creeperBannerPattern';
    static 'creeperSpawnEgg';
    static 'crimsonButton';
    static 'crimsonDoor';
    static 'crimsonDoubleSlab';
    static 'crimsonFence';
    static 'crimsonFenceGate';
    static 'crimsonFungus';
    static 'crimsonHyphae';
    static 'crimsonNylium';
    static 'crimsonPlanks';
    static 'crimsonPressurePlate';
    static 'crimsonRoots';
    static 'crimsonSign';
    static 'crimsonSlab';
    static 'crimsonStairs';
    static 'crimsonStandingSign';
    static 'crimsonStem';
    static 'crimsonTrapdoor';
    static 'crimsonWallSign';
    static 'crossbow';
    static 'cryingObsidian';
    static 'cutCopper';
    static 'cutCopperSlab';
    static 'cutCopperStairs';
    static 'cyanCandle';
    static 'cyanCandleCake';
    static 'cyanDye';
    static 'cyanGlazedTerracotta';
    static 'darkOakBoat';
    static 'darkOakButton';
    static 'darkOakDoor';
    static 'darkOakFenceGate';
    static 'darkOakPressurePlate';
    static 'darkOakSign';
    static 'darkOakStairs';
    static 'darkoakStandingSign';
    static 'darkOakTrapdoor';
    static 'darkoakWallSign';
    static 'darkPrismarineStairs';
    static 'daylightDetector';
    static 'daylightDetectorInverted';
    static 'deadbush';
    static 'debugStick';
    static 'deepslate';
    static 'deepslateBrickDoubleSlab';
    static 'deepslateBricks';
    static 'deepslateBrickSlab';
    static 'deepslateBrickStairs';
    static 'deepslateBrickWall';
    static 'deepslateCoalOre';
    static 'deepslateCopperOre';
    static 'deepslateDiamondOre';
    static 'deepslateEmeraldOre';
    static 'deepslateGoldOre';
    static 'deepslateIronOre';
    static 'deepslateLapisOre';
    static 'deepslateRedstoneOre';
    static 'deepslateTileDoubleSlab';
    static 'deepslateTiles';
    static 'deepslateTileSlab';
    static 'deepslateTileStairs';
    static 'deepslateTileWall';
    static 'deny';
    static 'detectorRail';
    static 'diamond';
    static 'diamondAxe';
    static 'diamondBlock';
    static 'diamondBoots';
    static 'diamondChestplate';
    static 'diamondHelmet';
    static 'diamondHoe';
    static 'diamondHorseArmor';
    static 'diamondLeggings';
    static 'diamondOre';
    static 'diamondPickaxe';
    static 'diamondShovel';
    static 'diamondSword';
    static 'dioriteStairs';
    static 'dirt';
    static 'dirtWithRoots';
    static 'dispenser';
    static 'dolphinSpawnEgg';
    static 'donkeySpawnEgg';
    static 'doubleCutCopperSlab';
    static 'doublePlant';
    static 'doubleStoneSlab';
    static 'doubleStoneSlab2';
    static 'doubleStoneSlab3';
    static 'doubleStoneSlab4';
    static 'doubleWoodenSlab';
    static 'dragonBreath';
    static 'dragonEgg';
    static 'driedKelp';
    static 'driedKelpBlock';
    static 'dripstoneBlock';
    static 'dropper';
    static 'drownedSpawnEgg';
    static 'dye';
    static 'egg';
    static 'elderGuardianSpawnEgg';
    static 'element0';
    static 'element1';
    static 'element10';
    static 'element100';
    static 'element101';
    static 'element102';
    static 'element103';
    static 'element104';
    static 'element105';
    static 'element106';
    static 'element107';
    static 'element108';
    static 'element109';
    static 'element11';
    static 'element110';
    static 'element111';
    static 'element112';
    static 'element113';
    static 'element114';
    static 'element115';
    static 'element116';
    static 'element117';
    static 'element118';
    static 'element12';
    static 'element13';
    static 'element14';
    static 'element15';
    static 'element16';
    static 'element17';
    static 'element18';
    static 'element19';
    static 'element2';
    static 'element20';
    static 'element21';
    static 'element22';
    static 'element23';
    static 'element24';
    static 'element25';
    static 'element26';
    static 'element27';
    static 'element28';
    static 'element29';
    static 'element3';
    static 'element30';
    static 'element31';
    static 'element32';
    static 'element33';
    static 'element34';
    static 'element35';
    static 'element36';
    static 'element37';
    static 'element38';
    static 'element39';
    static 'element4';
    static 'element40';
    static 'element41';
    static 'element42';
    static 'element43';
    static 'element44';
    static 'element45';
    static 'element46';
    static 'element47';
    static 'element48';
    static 'element49';
    static 'element5';
    static 'element50';
    static 'element51';
    static 'element52';
    static 'element53';
    static 'element54';
    static 'element55';
    static 'element56';
    static 'element57';
    static 'element58';
    static 'element59';
    static 'element6';
    static 'element60';
    static 'element61';
    static 'element62';
    static 'element63';
    static 'element64';
    static 'element65';
    static 'element66';
    static 'element67';
    static 'element68';
    static 'element69';
    static 'element7';
    static 'element70';
    static 'element71';
    static 'element72';
    static 'element73';
    static 'element74';
    static 'element75';
    static 'element76';
    static 'element77';
    static 'element78';
    static 'element79';
    static 'element8';
    static 'element80';
    static 'element81';
    static 'element82';
    static 'element83';
    static 'element84';
    static 'element85';
    static 'element86';
    static 'element87';
    static 'element88';
    static 'element89';
    static 'element9';
    static 'element90';
    static 'element91';
    static 'element92';
    static 'element93';
    static 'element94';
    static 'element95';
    static 'element96';
    static 'element97';
    static 'element98';
    static 'element99';
    static 'elytra';
    static 'emerald';
    static 'emeraldBlock';
    static 'emeraldOre';
    static 'emptyMap';
    static 'enchantedBook';
    static 'enchantedGoldenApple';
    static 'enchantingTable';
    static 'endBricks';
    static 'endBrickStairs';
    static 'endCrystal';
    static 'enderChest';
    static 'enderEye';
    static 'endermanSpawnEgg';
    static 'endermiteSpawnEgg';
    static 'enderPearl';
    static 'endGateway';
    static 'endPortal';
    static 'endPortalFrame';
    static 'endRod';
    static 'endStone';
    static 'evokerSpawnEgg';
    static 'experienceBottle';
    static 'exposedCopper';
    static 'exposedCutCopper';
    static 'exposedCutCopperSlab';
    static 'exposedCutCopperStairs';
    static 'exposedDoubleCutCopperSlab';
    static 'farmland';
    static 'feather';
    static 'fence';
    static 'fenceGate';
    static 'fermentedSpiderEye';
    static 'fieldMasonedBannerPattern';
    static 'filledMap';
    static 'fire';
    static 'fireCharge';
    static 'fireflySpawnEgg';
    static 'fireworkRocket';
    static 'fireworkStar';
    static 'fishingRod';
    static 'fletchingTable';
    static 'flint';
    static 'flintAndSteel';
    static 'flowerBannerPattern';
    static 'floweringAzalea';
    static 'flowerPot';
    static 'flowingLava';
    static 'flowingWater';
    static 'foxSpawnEgg';
    static 'frame';
    static 'frogSpawn';
    static 'frogSpawnEgg';
    static 'frostedIce';
    static 'furnace';
    static 'ghastSpawnEgg';
    static 'ghastTear';
    static 'gildedBlackstone';
    static 'glass';
    static 'glassBottle';
    static 'glassPane';
    static 'glisteringMelonSlice';
    static 'globeBannerPattern';
    static 'glowBerries';
    static 'glowFrame';
    static 'glowingobsidian';
    static 'glowInkSac';
    static 'glowLichen';
    static 'glowSquidSpawnEgg';
    static 'glowStick';
    static 'glowstone';
    static 'glowstoneDust';
    static 'goatHorn';
    static 'goatSpawnEgg';
    static 'goldBlock';
    static 'goldenApple';
    static 'goldenAxe';
    static 'goldenBoots';
    static 'goldenCarrot';
    static 'goldenChestplate';
    static 'goldenHelmet';
    static 'goldenHoe';
    static 'goldenHorseArmor';
    static 'goldenLeggings';
    static 'goldenPickaxe';
    static 'goldenRail';
    static 'goldenShovel';
    static 'goldenSword';
    static 'goldIngot';
    static 'goldNugget';
    static 'goldOre';
    static 'graniteStairs';
    static 'grass';
    static 'grassPath';
    static 'gravel';
    static 'grayCandle';
    static 'grayCandleCake';
    static 'grayDye';
    static 'grayGlazedTerracotta';
    static 'greenCandle';
    static 'greenCandleCake';
    static 'greenDye';
    static 'greenGlazedTerracotta';
    static 'grindstone';
    static 'guardianSpawnEgg';
    static 'gunpowder';
    static 'hangingRoots';
    static 'hardenedClay';
    static 'hardGlass';
    static 'hardGlassPane';
    static 'hardStainedGlass';
    static 'hardStainedGlassPane';
    static 'hayBlock';
    static 'heartOfTheSea';
    static 'heavyWeightedPressurePlate';
    static 'hoglinSpawnEgg';
    static 'honeyBlock';
    static 'honeyBottle';
    static 'honeycomb';
    static 'honeycombBlock';
    static 'hopper';
    static 'hopperMinecart';
    static 'horseSpawnEgg';
    static 'huskSpawnEgg';
    static 'ice';
    static 'iceBomb';
    static 'infestedDeepslate';
    static 'infoUpdate';
    static 'infoUpdate2';
    static 'inkSac';
    static 'invisiblebedrock';
    static 'ironAxe';
    static 'ironBars';
    static 'ironBlock';
    static 'ironBoots';
    static 'ironChestplate';
    static 'ironDoor';
    static 'ironHelmet';
    static 'ironHoe';
    static 'ironHorseArmor';
    static 'ironIngot';
    static 'ironLeggings';
    static 'ironNugget';
    static 'ironOre';
    static 'ironPickaxe';
    static 'ironShovel';
    static 'ironSword';
    static 'ironTrapdoor';
    static 'item.acaciaDoor';
    static 'item.bed';
    static 'item.beetroot';
    static 'item.birchDoor';
    static 'item.cake';
    static 'item.camera';
    static 'item.campfire';
    static 'item.cauldron';
    static 'item.chain';
    static 'item.crimsonDoor';
    static 'item.darkOakDoor';
    static 'item.flowerPot';
    static 'item.frame';
    static 'item.glowFrame';
    static 'item.hopper';
    static 'item.ironDoor';
    static 'item.jungleDoor';
    static 'item.kelp';
    static 'item.netherSprouts';
    static 'item.netherWart';
    static 'item.reeds';
    static 'item.skull';
    static 'item.soulCampfire';
    static 'item.spruceDoor';
    static 'item.warpedDoor';
    static 'item.wheat';
    static 'item.woodenDoor';
    static 'jigsaw';
    static 'jukebox';
    static 'jungleBoat';
    static 'jungleButton';
    static 'jungleDoor';
    static 'jungleFenceGate';
    static 'junglePressurePlate';
    static 'jungleSign';
    static 'jungleStairs';
    static 'jungleStandingSign';
    static 'jungleTrapdoor';
    static 'jungleWallSign';
    static 'kelp';
    static 'ladder';
    static 'lantern';
    static 'lapisBlock';
    static 'lapisLazuli';
    static 'lapisOre';
    static 'largeAmethystBud';
    static 'lava';
    static 'lavaBucket';
    static 'lavaCauldron';
    static 'lead';
    static 'leather';
    static 'leatherBoots';
    static 'leatherChestplate';
    static 'leatherHelmet';
    static 'leatherHorseArmor';
    static 'leatherLeggings';
    static 'leaves';
    static 'leaves2';
    static 'lectern';
    static 'lever';
    static 'lightBlock';
    static 'lightBlueCandle';
    static 'lightBlueCandleCake';
    static 'lightBlueDye';
    static 'lightBlueGlazedTerracotta';
    static 'lightGrayCandle';
    static 'lightGrayCandleCake';
    static 'lightGrayDye';
    static 'lightningRod';
    static 'lightWeightedPressurePlate';
    static 'limeCandle';
    static 'limeCandleCake';
    static 'limeDye';
    static 'limeGlazedTerracotta';
    static 'lingeringPotion';
    static 'litBlastFurnace';
    static 'litDeepslateRedstoneOre';
    static 'litFurnace';
    static 'litPumpkin';
    static 'litRedstoneLamp';
    static 'litRedstoneOre';
    static 'litSmoker';
    static 'llamaSpawnEgg';
    static 'lodestone';
    static 'lodestoneCompass';
    static 'log';
    static 'log2';
    static 'loom';
    static 'magentaCandle';
    static 'magentaCandleCake';
    static 'magentaDye';
    static 'magentaGlazedTerracotta';
    static 'magma';
    static 'magmaCream';
    static 'magmaCubeSpawnEgg';
    static 'medicine';
    static 'mediumAmethystBud';
    static 'melonBlock';
    static 'melonSeeds';
    static 'melonSlice';
    static 'melonStem';
    static 'milkBucket';
    static 'minecart';
    static 'mobSpawner';
    static 'mojangBannerPattern';
    static 'monsterEgg';
    static 'mooshroomSpawnEgg';
    static 'mossBlock';
    static 'mossCarpet';
    static 'mossyCobblestone';
    static 'mossyCobblestoneStairs';
    static 'mossyStoneBrickStairs';
    static 'movingblock';
    static 'muleSpawnEgg';
    static 'mushroomStew';
    static 'musicDisc11';
    static 'musicDisc13';
    static 'musicDiscBlocks';
    static 'musicDiscCat';
    static 'musicDiscChirp';
    static 'musicDiscFar';
    static 'musicDiscMall';
    static 'musicDiscMellohi';
    static 'musicDiscOtherside';
    static 'musicDiscPigstep';
    static 'musicDiscStal';
    static 'musicDiscStrad';
    static 'musicDiscWait';
    static 'musicDiscWard';
    static 'mutton';
    static 'mycelium';
    static 'mysteriousFrame';
    static 'mysteriousFrameSlot';
    static 'nameTag';
    static 'nautilusShell';
    static 'netherbrick';
    static 'netherBrick';
    static 'netherBrickFence';
    static 'netherBrickStairs';
    static 'netherGoldOre';
    static 'netheriteAxe';
    static 'netheriteBlock';
    static 'netheriteBoots';
    static 'netheriteChestplate';
    static 'netheriteHelmet';
    static 'netheriteHoe';
    static 'netheriteIngot';
    static 'netheriteLeggings';
    static 'netheritePickaxe';
    static 'netheriteScrap';
    static 'netheriteShovel';
    static 'netheriteSword';
    static 'netherrack';
    static 'netherreactor';
    static 'netherSprouts';
    static 'netherStar';
    static 'netherWart';
    static 'netherWartBlock';
    static 'normalStoneStairs';
    static 'noteblock';
    static 'npcSpawnEgg';
    static 'oakBoat';
    static 'oakSign';
    static 'oakStairs';
    static 'observer';
    static 'obsidian';
    static 'ocelotSpawnEgg';
    static 'ochreFroglight';
    static 'orangeCandle';
    static 'orangeCandleCake';
    static 'orangeDye';
    static 'orangeGlazedTerracotta';
    static 'oxidizedCopper';
    static 'oxidizedCutCopper';
    static 'oxidizedCutCopperSlab';
    static 'oxidizedCutCopperStairs';
    static 'oxidizedDoubleCutCopperSlab';
    static 'packedIce';
    static 'painting';
    static 'pandaSpawnEgg';
    static 'paper';
    static 'parrotSpawnEgg';
    static 'pearlescentFroglight';
    static 'phantomMembrane';
    static 'phantomSpawnEgg';
    static 'piglinBannerPattern';
    static 'piglinBruteSpawnEgg';
    static 'piglinSpawnEgg';
    static 'pigSpawnEgg';
    static 'pillagerSpawnEgg';
    static 'pinkCandle';
    static 'pinkCandleCake';
    static 'pinkDye';
    static 'pinkGlazedTerracotta';
    static 'piston';
    static 'pistonarmcollision';
    static 'planks';
    static 'podzol';
    static 'pointedDripstone';
    static 'poisonousPotato';
    static 'polarBearSpawnEgg';
    static 'polishedAndesiteStairs';
    static 'polishedBasalt';
    static 'polishedBlackstone';
    static 'polishedBlackstoneBrickDoubleSlab';
    static 'polishedBlackstoneBricks';
    static 'polishedBlackstoneBrickSlab';
    static 'polishedBlackstoneBrickStairs';
    static 'polishedBlackstoneBrickWall';
    static 'polishedBlackstoneButton';
    static 'polishedBlackstoneDoubleSlab';
    static 'polishedBlackstonePressurePlate';
    static 'polishedBlackstoneSlab';
    static 'polishedBlackstoneStairs';
    static 'polishedBlackstoneWall';
    static 'polishedDeepslate';
    static 'polishedDeepslateDoubleSlab';
    static 'polishedDeepslateSlab';
    static 'polishedDeepslateStairs';
    static 'polishedDeepslateWall';
    static 'polishedDioriteStairs';
    static 'polishedGraniteStairs';
    static 'poppedChorusFruit';
    static 'porkchop';
    static 'portal';
    static 'potato';
    static 'potatoes';
    static 'potion';
    static 'powderSnow';
    static 'powderSnowBucket';
    static 'poweredComparator';
    static 'poweredRepeater';
    static 'prismarine';
    static 'prismarineBricksStairs';
    static 'prismarineCrystals';
    static 'prismarineShard';
    static 'prismarineStairs';
    static 'pufferfish';
    static 'pufferfishBucket';
    static 'pufferfishSpawnEgg';
    static 'pumpkin';
    static 'pumpkinPie';
    static 'pumpkinSeeds';
    static 'pumpkinStem';
    static 'purpleCandle';
    static 'purpleCandleCake';
    static 'purpleDye';
    static 'purpleGlazedTerracotta';
    static 'purpurBlock';
    static 'purpurStairs';
    static 'quartz';
    static 'quartzBlock';
    static 'quartzBricks';
    static 'quartzOre';
    static 'quartzStairs';
    static 'rabbit';
    static 'rabbitFoot';
    static 'rabbitHide';
    static 'rabbitSpawnEgg';
    static 'rabbitStew';
    static 'rail';
    static 'rapidFertilizer';
    static 'ravagerSpawnEgg';
    static 'rawCopper';
    static 'rawCopperBlock';
    static 'rawGold';
    static 'rawGoldBlock';
    static 'rawIron';
    static 'rawIronBlock';
    static 'realDoubleStoneSlab';
    static 'realDoubleStoneSlab2';
    static 'realDoubleStoneSlab3';
    static 'realDoubleStoneSlab4';
    static 'redCandle';
    static 'redCandleCake';
    static 'redDye';
    static 'redFlower';
    static 'redGlazedTerracotta';
    static 'redMushroom';
    static 'redMushroomBlock';
    static 'redNetherBrick';
    static 'redNetherBrickStairs';
    static 'redSandstone';
    static 'redSandstoneStairs';
    static 'redstone';
    static 'redstoneBlock';
    static 'redstoneLamp';
    static 'redstoneOre';
    static 'redstoneTorch';
    static 'redstoneWire';
    static 'repeater';
    static 'repeatingCommandBlock';
    static 'reserved6';
    static 'respawnAnchor';
    static 'rottenFlesh';
    static 'saddle';
    static 'salmon';
    static 'salmonBucket';
    static 'salmonSpawnEgg';
    static 'sand';
    static 'sandstone';
    static 'sandstoneStairs';
    static 'sapling';
    static 'scaffolding';
    static 'sculk';
    static 'sculkCatalyst';
    static 'sculkSensor';
    static 'sculkShrieker';
    static 'sculkVein';
    static 'scute';
    static 'seagrass';
    static 'sealantern';
    static 'seaPickle';
    static 'shears';
    static 'sheepSpawnEgg';
    static 'shield';
    static 'shroomlight';
    static 'shulkerBox';
    static 'shulkerShell';
    static 'shulkerSpawnEgg';
    static 'silverfishSpawnEgg';
    static 'silverGlazedTerracotta';
    static 'skeletonHorseSpawnEgg';
    static 'skeletonSpawnEgg';
    static 'skull';
    static 'skullBannerPattern';
    static 'slime';
    static 'slimeBall';
    static 'slimeSpawnEgg';
    static 'smallAmethystBud';
    static 'smallDripleafBlock';
    static 'smithingTable';
    static 'smoker';
    static 'smoothBasalt';
    static 'smoothQuartzStairs';
    static 'smoothRedSandstoneStairs';
    static 'smoothSandstoneStairs';
    static 'smoothStone';
    static 'snow';
    static 'snowball';
    static 'snowLayer';
    static 'soulCampfire';
    static 'soulFire';
    static 'soulLantern';
    static 'soulSand';
    static 'soulSoil';
    static 'soulTorch';
    static 'sparkler';
    static 'spawnEgg';
    static 'spiderEye';
    static 'spiderSpawnEgg';
    static 'splashPotion';
    static 'sponge';
    static 'sporeBlossom';
    static 'spruceBoat';
    static 'spruceButton';
    static 'spruceDoor';
    static 'spruceFenceGate';
    static 'sprucePressurePlate';
    static 'spruceSign';
    static 'spruceStairs';
    static 'spruceStandingSign';
    static 'spruceTrapdoor';
    static 'spruceWallSign';
    static 'spyglass';
    static 'squidSpawnEgg';
    static 'stainedGlass';
    static 'stainedGlassPane';
    static 'stainedHardenedClay';
    static 'standingBanner';
    static 'standingSign';
    static 'stick';
    static 'stickyPiston';
    static 'stickypistonarmcollision';
    static 'stone';
    static 'stoneAxe';
    static 'stonebrick';
    static 'stoneBrickStairs';
    static 'stoneButton';
    static 'stonecutter';
    static 'stonecutterBlock';
    static 'stoneHoe';
    static 'stonePickaxe';
    static 'stonePressurePlate';
    static 'stoneShovel';
    static 'stoneStairs';
    static 'stoneSword';
    static 'straySpawnEgg';
    static 'striderSpawnEgg';
    static 'string';
    static 'strippedAcaciaLog';
    static 'strippedBirchLog';
    static 'strippedCrimsonHyphae';
    static 'strippedCrimsonStem';
    static 'strippedDarkOakLog';
    static 'strippedJungleLog';
    static 'strippedOakLog';
    static 'strippedSpruceLog';
    static 'strippedWarpedHyphae';
    static 'strippedWarpedStem';
    static 'structureBlock';
    static 'structureVoid';
    static 'sugar';
    static 'sugarCane';
    static 'suspiciousStew';
    static 'sweetBerries';
    static 'sweetBerryBush';
    static 'tadpoleBucket';
    static 'tadpoleSpawnEgg';
    static 'tallgrass';
    static 'target';
    static 'tintedGlass';
    static 'tnt';
    static 'tntMinecart';
    static 'torch';
    static 'totemOfUndying';
    static 'trapdoor';
    static 'trappedChest';
    static 'trident';
    static 'tripwire';
    static 'tripwireHook';
    static 'tropicalFish';
    static 'tropicalFishBucket';
    static 'tropicalFishSpawnEgg';
    static 'tuff';
    static 'turtleEgg';
    static 'turtleHelmet';
    static 'turtleSpawnEgg';
    static 'twistingVines';
    static 'underwaterTorch';
    static 'undyedShulkerBox';
    static 'unknown';
    static 'unlitRedstoneTorch';
    static 'unpoweredComparator';
    static 'unpoweredRepeater';
    static 'verdantFroglight';
    static 'vexSpawnEgg';
    static 'villagerSpawnEgg';
    static 'vindicatorSpawnEgg';
    static 'vine';
    static 'wallBanner';
    static 'wallSign';
    static 'wanderingTraderSpawnEgg';
    static 'warpedButton';
    static 'warpedDoor';
    static 'warpedDoubleSlab';
    static 'warpedFence';
    static 'warpedFenceGate';
    static 'warpedFungus';
    static 'warpedFungusOnAStick';
    static 'warpedHyphae';
    static 'warpedNylium';
    static 'warpedPlanks';
    static 'warpedPressurePlate';
    static 'warpedRoots';
    static 'warpedSign';
    static 'warpedSlab';
    static 'warpedStairs';
    static 'warpedStandingSign';
    static 'warpedStem';
    static 'warpedTrapdoor';
    static 'warpedWallSign';
    static 'warpedWartBlock';
    static 'water';
    static 'waterBucket';
    static 'waterlily';
    static 'waxedCopper';
    static 'waxedCutCopper';
    static 'waxedCutCopperSlab';
    static 'waxedCutCopperStairs';
    static 'waxedDoubleCutCopperSlab';
    static 'waxedExposedCopper';
    static 'waxedExposedCutCopper';
    static 'waxedExposedCutCopperSlab';
    static 'waxedExposedCutCopperStairs';
    static 'waxedExposedDoubleCutCopperSlab';
    static 'waxedOxidizedCopper';
    static 'waxedOxidizedCutCopper';
    static 'waxedOxidizedCutCopperSlab';
    static 'waxedOxidizedCutCopperStairs';
    static 'waxedOxidizedDoubleCutCopperSlab';
    static 'waxedWeatheredCopper';
    static 'waxedWeatheredCutCopper';
    static 'waxedWeatheredCutCopperSlab';
    static 'waxedWeatheredCutCopperStairs';
    static 'waxedWeatheredDoubleCutCopperSlab';
    static 'weatheredCopper';
    static 'weatheredCutCopper';
    static 'weatheredCutCopperSlab';
    static 'weatheredCutCopperStairs';
    static 'weatheredDoubleCutCopperSlab';
    static 'web';
    static 'weepingVines';
    static 'wheat';
    static 'wheatSeeds';
    static 'whiteCandle';
    static 'whiteCandleCake';
    static 'whiteDye';
    static 'whiteGlazedTerracotta';
    static 'witchSpawnEgg';
    static 'witherRose';
    static 'witherSkeletonSpawnEgg';
    static 'wolfSpawnEgg';
    static 'wood';
    static 'woodenAxe';
    static 'woodenButton';
    static 'woodenDoor';
    static 'woodenHoe';
    static 'woodenPickaxe';
    static 'woodenPressurePlate';
    static 'woodenShovel';
    static 'woodenSlab';
    static 'woodenSword';
    static 'wool';
    static 'writableBook';
    static 'writtenBook';
    static 'yellowCandle';
    static 'yellowCandleCake';
    static 'yellowDye';
    static 'yellowFlower';
    static 'yellowGlazedTerracotta';
    static 'zoglinSpawnEgg';
    static 'zombieHorseSpawnEgg';
    static 'zombiePigmanSpawnEgg';
    static 'zombieSpawnEgg';
    static 'zombieVillagerSpawnEgg';
}
export class MolangVariableMap {
    constructor() {};
    setColorRGB(variableName, color) {};
    setColorRGBA(variableName, color) {};
    setSpeedAndDirection(variableName, speed, direction) {};
    setVector3(variableName, vector) {};
}
export class MusicOptions {
    'volume';
    'fadeSeconds';
    'loop';
}
export class NavigationResult {
    'isFullPath';
    'path';
}
export class NumberRange {
    'max';
    'min';
    next() {};
}
export class PistonActivateEvent extends BlockEvent {
    'block';
    'dimension';
    'isExpanding';
    'piston';
}
export class PistonActivateEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class PitchYawRotation {
    'pitch';
    'yaw';
}
export class Player extends Entity {
    'bodyRotation';
    'dimension';
    'headLocation';
    'id';
    'isSneaking';
    'location';
    'name';
    'nameTag';
    'selectedSlot';
    'target';
    'velocity';
    'viewVector';
    addEffect(effectType, duration, amplifier, showParticles) {};
    addTag(tag) {};
    getBlockFromViewVector(options) {};
    getComponent(componentId) {};
    getComponents() {};
    getEffect(effectType) {};
    getEntitiesFromViewVector(options) {};
    getItemCooldown(itemCategory) {};
    getTags() {};
    hasComponent(componentId) {};
    hasTag(tag) {};
    kill() {};
    playSound(soundID, soundOptions) {};
    removeTag(tag) {};
    runCommand(commandString) {};
    setVelocity(velocity) {};
    startItemCooldown(itemCategory, tickDuration) {};
    teleport(location, dimension, xRotation, yRotation) {};
    teleportFacing(location, dimension, facingLocation) {};
    triggerEvent(eventName) {};
}
export class PlayerInventoryComponentContainer extends InventoryComponentContainer {
    'emptySlotsCount';
    'size';
    addItem(itemStack) {};
    getItem(slot) {};
    setItem(slot, itemStack) {};
    swapItems(slot, otherSlot, otherContainer) {};
    transferItem(fromSlot, toSlot, toContainer) {};
}
export class PlayerIterator extends Player {
    [Symbol.iterator]() {};
    next() {};
}
export class PlayerJoinEvent {
    'player';
}
export class PlayerJoinEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class PlayerLeaveEvent {
    'playerName';
}
export class PlayerLeaveEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class Seat {
    'lockRiderRotation';
    'maxRiderCount';
    'minRiderCount';
    'position';
}
export class SoundOptions {
    'location';
    'pitch';
    'volume';
    constructor() {};
}
export class StringBlockProperty extends IBlockProperty {
    'name';
    'validValues';
    'value';
}
export class TickEvent {
    'currentTick';
    'deltaTime';
}
export class TickEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class Trigger {
    'eventName';
    constructor(eventName) {};
}
export class Vector {
    'x';
    'y';
    'z';
    static 'back';
    static 'down';
    static 'forward';
    static 'left';
    static 'one';
    static 'right';
    static 'up';
    static 'zero';
    static add(a, b) {};
    constructor(x, y, z) {};
    static cross(a, b) {};
    static distance(a, b) {};
    static divide(a, b) {};
    equals(other) {};
    length() {};
    static lerp(a, b, t) {};
    static max(a, b) {};
    static min(a, b) {};
    static multiply(a, b) {};
    normalized() {};
    static slerp(a, b, s) {};
    static subtract(a, b) {};
}
export class WeatherChangeEvent {
    'dimension';
    'lightning';
    'raining';
}
export class WeatherChangeEventSignal {
    subscribe(callback) {};
    unsubscribe(callback) {};
}
export class World {
    'events';
    getDimension(dimensionId) {};
    getPlayers(options) {};
    playSound(soundID, soundOptions) {};
    queueMusic(trackName, musicOptions) {};
    playMusic(trackName, musicOptions) {};
    stopMusic() {};
}
export const TicksPerSecond = 20;
export const world = World;
