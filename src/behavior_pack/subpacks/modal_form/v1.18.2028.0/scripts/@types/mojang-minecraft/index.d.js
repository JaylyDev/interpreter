export default `// Type definitions for Minecraft Bedrock Edition script APIs (experimental) 0.1
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * Contains information related to changes to a piston
 * expanding or retracting.
 * @example place_bottom_stone_slab.js
 * \`\`\`typescript
 * import { world, MinecraftBlockTypes, BlockProperties, BlockLocation } from "mojang-minecraft";
 *
 * // Create the permutation
 * let bottomStoneSlab = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();
 * bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
 * bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
 *
 * // Fetch the block
 * const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
 *
 * // Set the permutation
 * block.setPermutation(bottomStoneSlab);
 *
 * \`\`\`
 *
 * Manifest Details
 * \`\`\`json
 * {
 *   // mojang-minecraft
 *   "uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
 *   "version": [ 0, 1, 0 ]
 * }
 * \`\`\`
 *
 */
/**
 * Represents a direction for expressing relative position or
 * facing.
 */
declare enum Direction {
    /**
     * Represents an object located or facing in the down (z - 1)
     * direction.
     */
    down = 0,
    /**
     * Represents an object located or facing in the up (z + 1)
     * direction.
     */
    up = 1,
    /**
     * Represents an object located or facing in the north (z - 1)
     * direction.
     */
    north = 2,
    /**
     * Represents an object located or facing in the south (z + 1)
     * direction.
     */
    south = 3,
    /**
     * Represents an object located or facing in the west (x - 1)
     * direction.
     */
    west = 4,
    /**
     * Represents an object located or facing in the east (x + 1)
     * direction.
     */
    east = 5,
}
/**
 * Represents a game mode for the current world experience.
 */
declare enum GameMode {
    /**
     * World is in a survival mode, where players can take damage
     * and entities may not be peaceful. Survival mode is where the
     * player must collect resources, build structures while
     * surviving in their generated world. Activities can, over
     * time, chip away at player health and hunger bar.
     */
    survival = 0,
    /**
     * World is in a full creative mode. In creative mode, the
     * player has all the resources available in the item selection
     * tabs and the survival selection tab. They can also destroy
     * blocks instantly including those which would normally be
     * indestructible. Command and structure blocks can also be
     * used in creative mode. Items also do not lose durability or
     * disappear.
     */
    creative = 1,
    /**
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     */
    adventure = 2,
    spectator = 6,
}
declare enum MessageSourceType {
    serverCommand = 0,
    entityCommand = 1,
    clientScript = 2,
    serverScript = 3,
}
/**
 * An event that fires as players enter chat messages.
 */
declare class BeforeChatEvent {
    /**
     * If set to true in a beforeChat event handler, this message
     * is not broadcast out.
     */
    'cancel': boolean;
    /**
     * Message that is being broadcast. In a beforeChat event
     * handler, _message_ can be updated with edits before the
     * message is displayed to players.
     */
    'message': string;
    /**
     * Player that sent the chat message.
     */
    'sender': Player;
    /**
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     */
    'sendToTargets': boolean;
    /**
     * List of players that will receive this message.
     */
    'targets': Player[];
    protected constructor();
}
/**
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 */
declare class BeforeChatEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called before new chat messages
     * are sent.
     * @param callback
     */
    subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
    protected constructor();
}
/**
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
declare class BeforeDataDrivenEntityTriggerEvent {
    /**
     * If set to true, this entity event is not triggered.
     */
    'cancel': boolean;
    /**
     * Entity that the event triggered on.
     */
    readonly 'entity': Entity;
    /**
     * Name of the data driven event being triggered.
     */
    readonly 'id': string;
    /**
     * An updateable list of modifications to component state that
     * are the effect of this triggered event.
     */
    'modifiers': DefinitionModifier[];
    protected constructor();
}
/**
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
declare class BeforeDataDrivenEntityTriggerEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called before a data driven
     * entity event is triggered.
     * @param callback
     * @param options
     */
    subscribe(
        callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: BeforeDataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called before a data driven
     * entity event is triggered.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void;
    protected constructor();
}
/**
 * Contains information regarding an explosion that has
 * happened.
 */
declare class BeforeExplosionEvent {
    /**
     * If set to true, cancels the explosion event.
     */
    'cancel': boolean;
    /**
     * Dimension where the explosion has occurred.
     */
    readonly 'dimension': Dimension;
    /**
     * A collection of blocks impacted by this explosion event.
     * Note that this property can be updated to change the set of
     * blocks impacted.
     */
    'impactedBlocks': BlockLocation[];
    /**
     * Optional source of the explosion.
     */
    readonly 'source': Entity;
    protected constructor();
}
/**
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
declare class BeforeExplosionEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called from before when an
     * explosion would occur.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void;
    protected constructor();
}
/**
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
declare class BeforeItemDefinitionEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     * @param callback
     */
    subscribe(
        callback: (arg: BeforeItemDefinitionTriggeredEvent) => void,
    ): (arg: BeforeItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): void;
    protected constructor();
}
/**
 * Contains information related to a triggering of a custom
 * item definition change.
 */
declare class BeforeItemDefinitionTriggeredEvent {
    /**
     * If set to true, will cancel the application of this item
     * definition change.
     */
    'cancel': boolean;
    /**
     * Name of the data-driven item event that is triggering this
     * change.
     */
    readonly 'eventName': string;
    /**
     * The impacted item stack that is being used.
     */
    'item': ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly 'source': Entity;
    protected constructor();
}
/**
 * Contains information related to an item being used.
 */
declare class BeforeItemUseEvent {
    /**
     * If set to true, this will cancel the item use behavior.
     */
    'cancel': boolean;
    /**
     * The impacted item stack that is being used.
     */
    'item': ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly 'source': Entity;
    protected constructor();
}
/**
 * Manages callbacks that fire before an item is used.
 */
declare class BeforeItemUseEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     * @param callback
     */
    subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
    protected constructor();
}
/**
 * Contains information related to an item being used on a
 * block.
 */
declare class BeforeItemUseOnEvent {
    /**
     * The face of the block that an item is being used on.
     */
    readonly 'blockFace': Direction;
    /**
     * Location of the block being impacted.
     */
    readonly 'blockLocation': BlockLocation;
    /**
     * If set to true, this will cancel the item use behavior.
     */
    'cancel': boolean;
    /**
     * X coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly 'faceLocationX': number;
    /**
     * Y coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly 'faceLocationY': number;
    /**
     * The impacted item stack that is being used on a block.
     */
    'item': ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly 'source': Entity;
    protected constructor();
}
/**
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
declare class BeforeItemUseOnEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called before an item is used
     * on a block.
     * @param callback
     */
    subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
    protected constructor();
}
/**
 * Contains information related to changes before a piston
 * expands or retracts.
 */
declare class BeforePistonActivateEvent extends BlockEvent {
    /**
     * Block impacted by this event.
     */
    readonly 'block': Block;
    /**
     * If this is set to true within an event handler, the piston
     * activation is canceled.
     */
    'cancel': boolean;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly 'dimension': Dimension;
    /**
     * True if the piston is the process of expanding.
     */
    readonly 'isExpanding': boolean;
    /**
     * Contains additional properties and details of the piston.
     */
    readonly 'piston': BlockPistonComponent;
    protected constructor();
}
/**
 * Manages callbacks that are connected to an event that fires
 * before a piston is activated.
 */
declare class BeforePistonActivateEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called before a piston expands
     * or retracts.
     * @param callback
     */
    subscribe(callback: (arg: BeforePistonActivateEvent) => void): (arg: BeforePistonActivateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a piston expands
     * or retracts.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforePistonActivateEvent) => void): void;
    protected constructor();
}
/**
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
declare class Block {
    /**
     * Returns the dimension that the block is within.
     */
    readonly 'dimension': Dimension;
    /**
     * Identifier of the type of block for this block.
     */
    readonly 'id': string;
    /**
     * Whether this particular block is empty (air).
     */
    readonly 'isEmpty': boolean;
    /**
     * Returns or sets whether this block has a liquid on it.
     */
    'isWaterlogged': boolean;
    /**
     * Coordinates of the specified block.
     */
    readonly 'location': BlockLocation;
    /**
     * Additional block configuration data that describes the
     * block.
     */
    readonly 'permutation': BlockPermutation;
    /**
     * Gets the type of block.
     */
    readonly 'type': BlockType;
    /**
     * X coordinate of the block.
     */
    readonly 'x': number;
    /**
     * Y coordinate of the block.
     */
    readonly 'y': number;
    /**
     * Z coordinate of the block.
     */
    readonly 'z': number;
    /**
     * @remarks
     * Gets additional configuration properties (a component) for
     * specific capabilities of particular blocks - for example, an
     * inventory component of a chest block.
     * @param componentName
     * Identifier of the component. If a namespace is not
     * specified, minecraft: is assumed.
     * @returns
     * Returns the component object if it is present on the
     * particular block.
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): any;
    /**
     * @returns
     * The list of tags that the block has.
     */
    getTags(): string[];
    /**
     * @remarks
     * Checks to see if the permutation of this block has a
     * specific tag.
     * @param tag
     * Tag to check for.
     * @returns
     * Returns \`true\` if the permutation of this block has the tag,
     * else \`false\`.
     * @example check_block_tags.js
     * \`\`\`typescript
     *        import { world, BlockLocation } from "mojang-minecraft";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
     *
     *        console.log(\`Block is dirt: \${block.hasTag("dirt")}\`);
     *        console.log(\`Block is wood: \${block.hasTag("wood")}\`);
     *        console.log(\`Block is stone: \${block.hasTag("stone")}\`);
     *
     * \`\`\`
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Sets the block in the dimension to the state of the
     * permutation.
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @example place_bottom_stone_slab.js
     * \`\`\`typescript
     *        import { world, MinecraftBlockTypes, BlockProperties, BlockLocation } from "mojang-minecraft";
     *
     *        // Create the permutation
     *        let bottomStoneSlab = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();
     *        bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
     *        bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
     *
     *        // Set the permutation
     *        block.setPermutation(bottomStoneSlab);
     *
     * \`\`\`
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @remarks
     * Sets the type of block.
     * @param blockType
     * Identifier of the type of block to apply - for example,
     * minecraft:powered_repeater.
     */
    setType(blockType: BlockType): void;
    protected constructor();
}
/**
 * Holds information for expressing the net size of a volume of
 * blocks.
 */
declare class BlockAreaSize {
    /**
     * X size (west to east) component of this block area.
     */
    'x': number;
    /**
     * Y size (down to up) of this block area size.
     */
    'y': number;
    /**
     * Z size (south to north) of this block area size.
     */
    'z': number;
    /**
     * @remarks
     * Creates a new BlockAreaSize object.
     * @param x
     * @param y
     * @param z
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Tests whether this block area size is equal to another
     * BlockAreaSize object.
     * @param other
     */
    equals(other: BlockAreaSize): boolean;
}
/**
 * Contains information regarding an event where a player
 * breaks a block.
 */
declare class BlockBreakEvent extends BlockEvent {
    /**
     * Block broken in this event. Note that because this event
     * fires right after a block is broken, the block you will
     * receive will likely be of type 'minecraft:air'. See the
     * .brokenBlockPermutation property for information on this
     * block before it was broken.
     */
    readonly 'block': Block;
    /**
     * Returns permutation information about this block before it
     * was broken.
     */
    readonly 'brokenBlockPermutation': BlockPermutation;
    /**
     * Dimension that contains the block that has been broken in
     * this event.
     */
    readonly 'dimension': Dimension;
    /**
     * Player that broke the block for this event.
     */
    readonly 'player': Player;
    protected constructor();
}
/**
 * Manages callbacks that are connected to when a block is
 * broken.
 */
declare class BlockBreakEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     * @param callback
     */
    subscribe(callback: (arg: BlockBreakEvent) => void): (arg: BlockBreakEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is
     * broken.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockBreakEvent) => void): void;
    protected constructor();
}
/**
 * Base type for components associated with blocks.
 */
// tslint:disable-next-line:no-unnecessary-class
declare class BlockComponent {
    protected constructor();
}
/**
 * Contains information regarding an event that impacts a
 * specific block.
 */
declare class BlockEvent {
    /**
     * Block impacted by this event.
     */
    readonly 'block': Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly 'dimension': Dimension;
    protected constructor();
}
/**
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
declare class BlockExplodeEvent extends BlockEvent {
    /**
     * Block impacted by this explosion event.
     */
    readonly 'block': Block;
    /**
     * Dimension that contains the block that is the subject of
     * this explosion event.
     */
    readonly 'dimension': Dimension;
    /**
     * Optional source of the explosion.
     */
    readonly 'source': Entity;
    protected constructor();
}
/**
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
declare class BlockExplodeEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs, as it impacts individual blocks.
     * @param callback
     */
    subscribe(callback: (arg: BlockExplodeEvent) => void): (arg: BlockExplodeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs, as it impacts individual blocks.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockExplodeEvent) => void): void;
    protected constructor();
}
/**
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 */
declare class BlockInventoryComponent {
    /**
     * The container which holds an {@link mojang-minecraft.ItemStack}.
     * @throws This property can throw when used.
     */
    readonly 'container': BlockInventoryComponentContainer;
    /**
     * Coordinates of the specified block.
     */
    readonly 'location': BlockLocation;
    protected constructor();
}
/**
 * Represents the inventory of a {@link mojang-minecraft.Block} in the
 * world. Used with blocks like chests.
 */
declare class BlockInventoryComponentContainer extends Container {
    /**
     * Contains a count of the slots in the container that are
     * empty.
     * @throws This property can throw when used.
     */
    readonly 'emptySlotsCount': number;
    /**
     * Returns the size capacity of the inventory container on this
     * block.
     * @throws This property can throw when used.
     */
    readonly 'size': number;
    /**
     * @remarks
     * Adds an item to the specified container. Item will be placed
     * in the first available empty slot. (use .setItem if you wish
     * to set items in a particular slot.)
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Gets the item stack for the set of items at the specified
     * slot. If the slot is empty, returns undefined. This method
     * does not change or clear the contents of the specified slot.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws This function can throw errors.
     * @example getItem.js
     * \`\`\`typescript
     *        const itemStack = rightChestContainer.getItem(0);
     *        test.assert(itemStack.id === "apple", "Expected apple");
     *        test.assert(itemStack.amount === 10, "Expected 10 apples");
     * \`\`\`
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws This function can throw errors.
     * @example swapItems.js
     * \`\`\`typescript
     *        rightChestContainer.swapItems(1, 0, leftChestContainer); // swap item in slot 1 of rightChestContainer with item in slot 0 of leftChestContainer
     *
     * \`\`\`
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * @param toSlot
     * Zero-based index of the slot to move to.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws This function can throw errors.
     * @example transferItem.js
     * \`\`\`typescript
     *        rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
     *
     * \`\`\`
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
    protected constructor();
}
/**
 * Represents a fluid container block that currently contains
 * lava.
 */
declare class BlockLavaContainerComponent {
    /**
     * Relative level of lava within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    'fillLevel': number;
    /**
     * Source location of the block.
     */
    readonly 'location': BlockLocation;
    protected constructor();
}
/**
 * Contains the integer X, Y, Z coordinates for a block. For
 * decimal locations useful for entities, items, and more, see
 * {@link mojang-minecraft.Location}.
 */
declare class BlockLocation {
    /**
     * The X coordinate.
     */
    'x': number;
    /**
     * The integer-based Y position.
     */
    'y': number;
    /**
     * The integer-based Z position.
     */
    'z': number;
    /**
     * @remarks
     * Returns a BlockLocation for a block above this BlockLocation
     * (that is, y + 1).
     */
    above(): BlockLocation;
    /**
     * @remarks
     * Returns an array of block locations representing all blocks
     * in the volume (cuboid) between this location and another
     * location.
     * @param other
     * Additional BlockLocation used to determine the set of
     * locations in between this location and another point.
     * @returns
     * Array of block locations representing the volume between
     * this location and another, inclusive of the start and end
     * points.
     */
    blocksBetween(other: BlockLocation): BlockLocation[];
    /**
     * @remarks
     * Creates a new instance of an abstract block location.
     * @param x
     * X position of the block location. This number should be an
     * integer.
     * @param y
     * Y position of the block location. This number should be an
     * integer.
     * @param z
     * Z position of the block location. This number should be an
     * integer.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Compares this BlockLocation and another BlockLocation to one
     * another.
     * @param other
     * Other block location to compare this BlockLocation to.
     * @returns
     * True if the two block locations are equal.
     */
    equals(other: BlockLocation): boolean;
    /**
     * @remarks
     * Returns a block location using a position relative to this
     * block location
     * @param x
     * X offset relative to this BlockLocation.
     * @param y
     * Y offset relative to this BlockLocation.
     * @param z
     * Z offset relative to this BlockLocation.
     * @returns
     * BlockLocation that is positioned relative to this
     * BlockLocation.
     */
    offset(x: number, y: number, z: number): BlockLocation;
}
/**
 * Contains the combination of type {@link mojang-minecraft.BlockType}
 * and properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific
 * {@link mojang-minecraft.Block}). This type was introduced as of
 * version 1.17.10.21.
 */
declare class BlockPermutation {
    /**
     * The {@link mojang-minecraft.BlockType} that the permutation has.
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * Creates a copy of this permutation.
     * @returns
     * A copy of the permutation.
     */
    clone(): BlockPermutation;
    /**
     * @returns
     * Returns the list of all of the properties that the
     * permutation has.
     */
    getAllProperties(): IBlockProperty[];
    /**
     * @remarks
     * Gets a property for the permutation.
     * @param propertyName
     * @returns
     * Returns the property if the permutation has it, else \`null\`.
     * @throws This function can throw errors.
     * @example place_bottom_stone_slab.js
     * \`\`\`typescript
     *        import { world, MinecraftBlockTypes, BlockProperties, BlockLocation } from "mojang-minecraft";
     *
     *        // Create the permutation
     *        let bottomStoneSlab = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();
     *        bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
     *        bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
     *
     *        // Set the permutation
     *        block.setPermutation(bottomStoneSlab);
     *
     * \`\`\`
     */
    getProperty(propertyName: string): IBlockProperty;
    /**
     * @remarks
     * Creates a copy of the permutation.
     */
    getTags(): string[];
    /**
     * @remarks
     * Checks to see if the permutation has a specific tag.
     * @param tag
     * @returns
     * Returns \`true\` if the permutation has the tag, else \`false\`.
     * @example check_block_tags.js
     * \`\`\`typescript
     *        import { world, BlockLocation } from "mojang-minecraft";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
     *        const blockPerm = block.getPermutation();
     *
     *        console.log(\`Block is dirt: \${blockPerm.hasTag("dirt")}\`);
     *        console.log(\`Block is wood: \${blockPerm.hasTag("wood")}\`);
     *        console.log(\`Block is stone: \${blockPerm.hasTag("stone")}\`);
     *
     * \`\`\`
     */
    hasTag(tag: string): boolean;
    protected constructor();
}
/**
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 */
declare class BlockPistonComponent {
    /**
     * A set of locations for blocks that are impacted by the
     * activation of this piston.
     * @throws This property can throw when used.
     */
    readonly 'attachedBlocks': BlockLocation[];
    /**
     * Whether the piston is fully expanded.
     * @throws This property can throw when used.
     */
    readonly 'isExpanded': boolean;
    /**
     * Whether the piston is in the process of expanding.
     * @throws This property can throw when used.
     */
    readonly 'isExpanding': boolean;
    /**
     * Whether the piston is in the process of expanding or
     * retracting.
     * @throws This property can throw when used.
     */
    readonly 'isMoving': boolean;
    /**
     * Whether the piston is fully retracted.
     * @throws This property can throw when used.
     */
    readonly 'isRetracted': boolean;
    /**
     * Whether the piston is in the process of retracting.
     * @throws This property can throw when used.
     */
    readonly 'isRetracting': boolean;
    /**
     * Source location of the block.
     */
    readonly 'location': BlockLocation;
    protected constructor();
}
/**
 * Contains information regarding an event where a player
 * places a block.
 */
declare class BlockPlaceEvent extends BlockEvent {
    /**
     * Block placed in this event.
     */
    readonly 'block': Block;
    /**
     * Dimension that contains the block that has been placed in
     * this event.
     */
    readonly 'dimension': Dimension;
    /**
     * Player that placed the block for this event.
     */
    readonly 'player': Player;
    protected constructor();
}
/**
 * Manages callbacks that are connected to when a block is
 * broken.
 */
declare class BlockPlaceEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     * @param callback
     */
    subscribe(callback: (arg: BlockPlaceEvent) => void): (arg: BlockPlaceEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is
     * placed.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockPlaceEvent) => void): void;
    protected constructor();
}
/**
 * Represents a fluid container block that currently contains a
 * potion.
 */
declare class BlockPotionContainerComponent {
    /**
     * Relative level of potion liquid within this block. Valid
     * values are between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    'fillLevel': number;
    /**
     * Source location of the block.
     */
    readonly 'location': BlockLocation;
    /**
     * @remarks
     * Sets the potion type based on an item stack.
     * @param item
     * Potion to use as the type of potion for this potion
     * container.
     * @throws This function can throw errors.
     */
    setPotionType(item: ItemStack): void;
    protected constructor();
}
// tslint:disable-next-line:no-unnecessary-class
declare class BlockProperties {
    static readonly 'active' = 'active';
    /**
     * Integer property that represents the age of the block. Valid
     * values are between 0 and 15 inclusive.
     */
    static readonly 'age' = 'age';
    /**
     * Boolean property that determines if saplings should grow.
     */
    static readonly 'ageBit' = 'age_bit';
    /**
     * Boolean property that determines if an explosion propagates
     * underwater.
     */
    static readonly 'allowUnderwaterBit' = 'allow_underwater_bit';
    /**
     * Boolean property that determines if a tripwire is attached
     * to another tripwire.
     */
    static readonly 'attachedBit' = 'attached_bit';
    /**
     * String property that represents the type of attachment used
     * by a bell or grindstone block. Valid values are 'standing',
     * 'hanging', 'side' and 'multiple'.
     */
    static readonly 'attachment' = 'attachment';
    /**
     * String property that determines the thickness of a bamboo
     * stalk. Valid values are 'thin' and 'thick'.
     */
    static readonly 'bambooLeafSize' = 'bamboo_leaf_size';
    /**
     * String property that determines the size of bamboo leaves.
     * Valid values are 'no_leaves', 'small_leaves', and
     * 'large_leaves'.
     */
    static readonly 'bambooStalkThickness' = 'bamboo_stalk_thickness';
    static readonly 'bigDripleafHead' = 'big_dripleaf_head';
    /**
     * String property that represents the tilt state of big
     * dripleaf block. Valid values are 'none', 'unstable',
     * 'partial_tilt' and 'full_tilt'.
     */
    static readonly 'bigDripleafTilt' = 'big_dripleaf_tilt';
    /**
     * Integer property that tracks how many bites of cake have
     * been taken. Valid values are between 0 and 6 inclusive.
     */
    static readonly 'biteCounter' = 'bite_counter';
    static readonly 'blockLightLevel' = 'block_light_level';
    static readonly 'bloom' = 'bloom';
    /**
     * Boolean property that determines if a bottle is shown in the
     * first slot of the brewing stand.
     */
    static readonly 'brewingStandSlotABit' = 'brewing_stand_slot_a_bit';
    /**
     * Boolean property that determines if a bottle is shown in the
     * second slot of the brewing stand.
     */
    static readonly 'brewingStandSlotBBit' = 'brewing_stand_slot_b_bit';
    /**
     * Boolean property that determines if a bottle is shown in the
     * third slot of the brewing stand.
     */
    static readonly 'brewingStandSlotCBit' = 'brewing_stand_slot_c_bit';
    /**
     * Boolean property that determines if a button is in a pressed
     * state or not.
     */
    static readonly 'buttonPressedBit' = 'button_pressed_bit';
    /**
     * Integer property that describes how many extra candles are
     * in the same block space. Valid values are between 0 and 3
     * inclusive.
     */
    static readonly 'candles' = 'candles';
    /**
     * String property that represents the type of liquid in a
     * cauldron. Valid values are 'water', 'powder_snow', and
     * 'lava'.
     */
    static readonly 'cauldronLiquid' = 'cauldron_liquid';
    /**
     * String property that represents the type of work benches
     * that are within Minecraft Education experiences. Valid
     * values are 'compound_creator', 'material_reducer',
     * 'element_constructor' and 'lab_table'.
     */
    static readonly 'chemistryTableType' = 'chemistry_table_type';
    /**
     * String property determines the pattern of quartz and purpur
     * blocks. Valid values are 'default', 'chiseled', 'lines',
     * 'smooth'.
     */
    static readonly 'chiselType' = 'chisel_type';
    /**
     * Integer property that describes how many sea pickles are in
     * a cluster. Valid values are between 0 and 3 inclusive.
     */
    static readonly 'clusterCount' = 'cluster_count';
    /**
     * String property that represents the color of a block, like
     * wool. Valid values are 'white', 'orange', 'magenta',
     * 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'silver',
     * 'cyan', 'purple', 'blue', 'brown', 'green', 'red' and
     * 'black'.
     */
    static readonly 'color' = 'color';
    /**
     * Boolean property that determines if a torch has a particular
     * color.
     */
    static readonly 'colorBit' = 'color_bit';
    static readonly 'composterFillLevel' = 'composter_fill_level';
    /**
     * Boolean property that determines if a command block is
     * conditional or not.
     */
    static readonly 'conditionalBit' = 'conditional_bit';
    /**
     * String property that represents the color of a coral block.
     * Valid values are 'blue', 'pink', 'purple', 'red', 'yellow',
     * 'blue dead', 'pink dead', 'red dead', and 'yellow dead'.
     */
    static readonly 'coralColor' = 'coral_color';
    /**
     * Integer property that describes the rotation of coral fans.
     * Valid values are between 0 and 3 inclusive.
     */
    static readonly 'coralDirection' = 'coral_direction';
    static readonly 'coralFanDirection' = 'coral_fan_direction';
    /**
     * Boolean property that represents the type of hanging for
     * coral fan.
     */
    static readonly 'coralHangTypeBit' = 'coral_hang_type_bit';
    /**
     * Boolean property that describes if a top snow block is
     * covering another block.
     */
    static readonly 'coveredBit' = 'covered_bit';
    /**
     * String property that determines the cracked state of turtle
     * eggs. Valid values are 'no_cracks', 'cracked', and
     * 'max_cracked'.
     */
    static readonly 'crackedState' = 'cracked_state';
    /**
     * String property that determines the damage state of an
     * anvil. Valid values are 'undamaged', 'slightly_damaged',
     * 'very_damaged', and 'broken'
     */
    static readonly 'damage' = 'damage';
    /**
     * Boolean property that determines if coral, coral fans, or
     * sea pickles are dead.
     */
    static readonly 'deadBit' = 'dead_bit';
    static readonly 'deprecated' = 'deprecated';
    /**
     * Integer property determines the north, south, east, or west
     * direction of a block. Valid values include are south = 0,
     * west = 1, north = 2, east = 3.
     */
    static readonly 'direction' = 'direction';
    /**
     * String property that determines the dirt type of a block.
     * Valid values are 'normal' and 'coarse'.
     */
    static readonly 'dirtType' = 'dirt_type';
    /**
     * Boolean property that determines if a tripwire is disarmed
     * or not.
     */
    static readonly 'disarmedBit' = 'disarmed_bit';
    /**
     * Boolean property that determines if a door's hinge is
     * mirrored or not.
     */
    static readonly 'doorHingeBit' = 'door_hinge_bit';
    /**
     * String property that represents the type of a double plant
     * block. Valid values are 'sunflower', 'syringa', 'grass',
     * 'fern', 'rose', and 'paeonia'.
     */
    static readonly 'doublePlantType' = 'double_plant_type';
    /**
     * Boolean property that describes if bubble columns drag
     * entities down or push them up.
     */
    static readonly 'dragDown' = 'drag_down';
    /**
     * String property that represents the type of a pointed
     * dripstone block. Valid values are 'tip', 'frustum', 'base',
     * 'middle' and 'merge'.
     */
    static readonly 'dripstoneThickness' = 'dripstone_thickness';
    /**
     * Boolean property that determines if an end portal block has
     * an Eye of Ender in it.
     */
    static readonly 'endPortalEyeBit' = 'end_portal_eye_bit';
    /**
     * Boolean property that determines if a TNT block should start
     * its explode sequence.
     */
    static readonly 'explodeBit' = 'explode_bit';
    static readonly 'extinguished' = 'extinguished';
    /**
     * Integer property that determines the facing direction of
     * some types of blocks. Valid values include down = 0, up = 1,
     * north = 2, south = 3, west = 4, east = 5.
     */
    static readonly 'facingDirection' = 'facing_direction';
    /**
     * Integer property that determines the fill level of a
     * cauldron block. Valid values are between 0 and 6 inclusive.
     */
    static readonly 'fillLevel' = 'fill_level';
    /**
     * String property that represents the type of flow. Valid
     * values are 'poppy', 'orchid', 'allium', 'houstonia',
     * 'tulip_red', 'tulip_orange', 'tulip_white', 'tulip_pink',
     * 'oxeye', 'cornflower' and 'lily_of_the_valley'.
     */
    static readonly 'flowerType' = 'flower_type';
    /**
     * Integer property that represents the rotation of signs and
     * standing banners. Valid values are between 0 and 15
     * inclusive.
     */
    static readonly 'groundSignDirection' = 'ground_sign_direction';
    static readonly 'growingPlantAge' = 'growing_plant_age';
    /**
     * Integer property that determines the growth level of crops.
     * Valid values are between 0 and 7 inclusive.
     */
    static readonly 'growth' = 'growth';
    /**
     * Boolean property that represents if a lantern block is
     * hanging or not.
     */
    static readonly 'hanging' = 'hanging';
    /**
     * Boolean property that determines if a block is the pillow
     * side of a bed.
     */
    static readonly 'headPieceBit' = 'head_piece_bit';
    /**
     * Integer property that determines the height of a top snow
     * block. Valid values are between 0 and 7 inclusive.
     */
    static readonly 'height' = 'height';
    static readonly 'honeyLevel' = 'honey_level';
    /**
     * Integer property that determines which huge mushroom block
     * should be displayed. Valid values are between 0 and 15
     * inclusive.
     */
    static readonly 'hugeMushroomBits' = 'huge_mushroom_bits';
    /**
     * Boolean property that determines if a block should burn
     * infinitely.
     */
    static readonly 'infiniburnBit' = 'infiniburn_bit';
    /**
     * Boolean property that determines if a fence block is
     * connected to a wall block.
     */
    static readonly 'inWallBit' = 'in_wall_bit';
    /**
     * Boolean property that describes if an item frame block has a
     * map in it.
     */
    static readonly 'itemFrameMapBit' = 'item_frame_map_bit';
    static readonly 'itemFramePhotoBit' = 'item_frame_photo_bit';
    static readonly 'kelpAge' = 'kelp_age';
    static readonly 'leverDirection' = 'lever_direction';
    /**
     * Integer property that represents the level of liquid blocks.
     * Valid values are between 0 and 15 inclusive.
     */
    static readonly 'liquidDepth' = 'liquid_depth';
    /**
     * Boolean property that determines if a block is lit or not.
     */
    static readonly 'lit' = 'lit';
    /**
     * Integer property that represents the moisture level of crop.
     * Valid values are between 0 and 7 inclusive.
     */
    static readonly 'moisturizedAmount' = 'moisturized_amount';
    /**
     * String property that represents the stone type of an
     * Infested Stone block. Valid values are 'stone',
     * 'cobblestone', 'stone_brick', 'mossy_stone_brick',
     * 'cracked_stone_brick' and 'chiseled_stone_brick'.
     */
    static readonly 'monsterEggStoneType' = 'monster_egg_stone_type';
    static readonly 'multiFaceDirectionBits' = 'multi_face_direction_bits';
    /**
     * String property that represents the leaf type of some block
     * types. Valid values are 'acacia' and 'dark_oak'.
     */
    static readonly 'newLeafType' = 'new_leaf_type';
    /**
     * String property that represents the wood type of certain
     * types of blocks. Valid values are 'acacia' and 'dark_oak'.
     */
    static readonly 'newLogType' = 'new_log_type';
    /**
     * Boolean property that determines if a skull block should
     * drop loot.
     */
    static readonly 'noDropBit' = 'no_drop_bit';
    /**
     * Boolean property that determines if a bed block is occupied.
     */
    static readonly 'occupiedBit' = 'occupied_bit';
    /**
     * String property that represents the leaf type of some block
     * types. Valid values are 'oak', 'spruce', 'birch', and
     * 'jungle'.
     */
    static readonly 'oldLeafType' = 'old_leaf_type';
    /**
     * String property that determines the wood type of certain
     * types of blocks. Valid values are 'oak', 'spruce', 'birch'
     * and 'jungle'.
     */
    static readonly 'oldLogType' = 'old_log_type';
    /**
     * Boolean property that determines if a door, gate, or
     * trapdoor is open.
     */
    static readonly 'openBit' = 'open_bit';
    /**
     * Boolean property that determines if a comparator's output is
     * lit.
     */
    static readonly 'outputLitBit' = 'output_lit_bit';
    /**
     * Boolean property that determines if a comparator is set to
     * subtract output.
     */
    static readonly 'outputSubtractBit' = 'output_subtract_bit';
    /**
     * Boolean property that determines if a leaf block is
     * persistent.
     */
    static readonly 'persistentBit' = 'persistent_bit';
    static readonly 'pillarAxis' = 'pillar_axis';
    /**
     * String property that determines the orientation of portal
     * blocks. Valid values include 'unknown', 'x', and 'z'.
     */
    static readonly 'portalAxis' = 'portal_axis';
    /**
     * Boolean property that is true when an observer or tripwire
     * sends a redstone signal.
     */
    static readonly 'poweredBit' = 'powered_bit';
    static readonly 'prismarineBlockType' = 'prismarine_block_type';
    /**
     * Boolean property that returns true if a rail has a redstone
     * signal.
     */
    static readonly 'railDataBit' = 'rail_data_bit';
    /**
     * Integer property determines the orientation of a placed rail
     * block. Valid values are between 0 and 8 inclusive.
     */
    static readonly 'railDirection' = 'rail_direction';
    /**
     * Integer property that determines the signal strength of a
     * redstone signal. Valid values are between 0 and 15
     * inclusive.
     */
    static readonly 'redstoneSignal' = 'redstone_signal';
    /**
     * Integer property that represents the amount of delay of a
     * repeater. Valid values are between 0 and 3 inclusive.
     */
    static readonly 'repeaterDelay' = 'repeater_delay';
    static readonly 'respawnAnchorCharge' = 'respawn_anchor_charge';
    static readonly 'rotation' = 'rotation';
    /**
     * String property that represents the pattern of a sandstone
     * block. Valid values are 'default', 'heiroglyphs', 'cut', and
     * 'smooth'.
     */
    static readonly 'sandStoneType' = 'sand_stone_type';
    /**
     * String property that represents the sand type of a block.
     * Valid values are 'normal' and 'red'.
     */
    static readonly 'sandType' = 'sand_type';
    /**
     * String property that determines the type of the sapling
     * block. Valid values are 'evergreen', 'birch', 'jungle',
     * 'acacia', and 'roofed_oak'.
     */
    static readonly 'saplingType' = 'sapling_type';
    /**
     * String property that determines the type of a sea grass
     * block. Valid values are 'default', 'double_top' and
     * 'double_bot'.
     */
    static readonly 'seaGrassType' = 'sea_grass_type';
    /**
     * String property that represents the type of a sponge block.
     * Valid values are 'dry' and 'wet'.
     */
    static readonly 'spongeType' = 'sponge_type';
    /**
     * Integer property that determines the stability of a
     * scaffolding block. Valid values are between 0 and 5
     * inclusive.
     */
    static readonly 'stability' = 'stability';
    /**
     * Boolean property that describes if a scaffolding block has
     * been checked for stability.
     */
    static readonly 'stabilityCheck' = 'stability_check';
    /**
     * String property that determines the type of a stone brick
     * block. Valid values are 'default', 'mossy', 'cracked',
     * 'chiseled' and 'smooth'.
     */
    static readonly 'stoneBrickType' = 'stone_brick_type';
    /**
     * String property that represents the type of certain types of
     * stone slab blocks. Valid values are 'smooth_stone',
     * 'sandstone', 'wood', 'cobblestone', 'brick', 'stone_brick',
     * 'quartz' and 'nether_brick'.
     */
    static readonly 'stoneSlabType' = 'stone_slab_type';
    /**
     * String property that represents the type of certain types of
     * stone slab blocks. Valid values are 'red_sandstone',
     * 'purpur', 'prismarine_rough', 'prismarine_dark',
     * 'prismarine_brick', 'mossy_cobblestone', 'smooth_sandstone'
     * and 'red_nether_brick'.
     */
    static readonly 'stoneSlabType2' = 'stone_slab_type_2';
    /**
     * String property that represents the type of certain types of
     * stone slab blocks. Valid values are 'end_stone_brick',
     * 'smooth_red_sandstone', 'polished_andesite', 'andesite',
     * 'diorite', 'polished_diorite', 'granite', and
     * 'polished_granite'.
     */
    static readonly 'stoneSlabType3' = 'stone_slab_type_3';
    /**
     * String property that represents the type of certain types of
     * stone slab blocks. Valid values are 'mossy_stone_brick',
     * 'smooth_quartz', 'stone', 'cut_sandstone', and
     * 'cut_red_sandstone'.
     */
    static readonly 'stoneSlabType4' = 'stone_slab_type_4';
    /**
     * String property that determines the type of a stone block.
     * Valid values are 'stone', 'granite', 'granite_smooth',
     * 'diorite', 'diorite_smooth', 'andesite', and
     * 'andesite_smooth'.
     */
    static readonly 'stoneType' = 'stone_type';
    /**
     * Boolean property that represents if a wood log has been
     * stripped of bark.
     */
    static readonly 'strippedBit' = 'stripped_bit';
    /**
     * String property that represents the state of a structure
     * block. Valid values are 'data', 'save', 'load', 'corner',
     * 'invalid' and 'declare'.
     */
    static readonly 'structureBlockType' = 'structure_block_type';
    /**
     * String property that determines which void mode to draw for
     * structure blocks. Valid values are 'void' and 'air'.
     */
    static readonly 'structureVoidType' = 'structure_void_type';
    /**
     * Boolean property that indicates if a tripwire block is
     * suspended.
     */
    static readonly 'suspendedBit' = 'suspended_bit';
    /**
     * String property that represents the type of a tall grass
     * block. Valid values are 'default', 'tall', 'fern', and
     * 'snow'.
     */
    static readonly 'tallGrassType' = 'tall_grass_type';
    /**
     * Boolean property that determines if a hopper block is active
     * or not.
     */
    static readonly 'toggleBit' = 'toggle_bit';
    /**
     * Boolean property that determines if a slab is the top half
     * of the block or not
     */
    static readonly 'topSlotBit' = 'top_slot_bit';
    /**
     * String property that determines the direction of a torch in
     * relation to the block it is attached to. Valid values are
     * 'unknown', 'west', 'east', 'north', 'south', 'top'.
     */
    static readonly 'torchFacingDirection' = 'torch_facing_direction';
    /**
     * Boolean property that determines if a dispenser is
     * triggered.
     */
    static readonly 'triggeredBit' = 'triggered_bit';
    /**
     * String property that represents the amount of turtle eggs in
     * an egg block. Valid values are 'one_egg', 'two_egg',
     * 'three_egg' and 'four_egg'.
     */
    static readonly 'turtleEggCount' = 'turtle_egg_count';
    static readonly 'twistingVinesAge' = 'twisting_vines_age';
    /**
     * Boolean property that determines if a leaf block or flower
     * block should be updated.
     */
    static readonly 'updateBit' = 'update_bit';
    /**
     * Boolean property that determines if a block is the upper
     * half of an object like a door or a tall plant.
     */
    static readonly 'upperBlockBit' = 'upper_block_bit';
    /**
     * Boolean property that determines if a stair block or
     * trapdoor block is upside-down.
     */
    static readonly 'upsideDownBit' = 'upside_down_bit';
    /**
     * Integer property that represents the facing direction for
     * vines. Valid values are between 0 and 15 inclusive.
     */
    static readonly 'vineDirectionBits' = 'vine_direction_bits';
    /**
     * String property that represents the type of stone used in a
     * wall block. Valid values are 'cobblestone',
     * 'mossy_cobblestone', 'granite', 'diorite', 'andesite',
     * 'sandstone', 'brick', 'stone_brick', 'mossy_stone_brick',
     * 'nether_brick', 'end_brick', 'prismarine', 'red_sandstone'
     * and 'red_nether_brick'.
     */
    static readonly 'wallBlockType' = 'wall_block_type';
    /**
     * String property that determines what kind of connection a
     * wall has to the east. Valid values are 'none', 'short' and
     * 'tall'.
     */
    static readonly 'wallConnectionTypeEast' = 'wall_connection_type_east';
    /**
     * String property that determines what kind of connection a
     * wall has to the north. Valid values are 'none', 'short' and
     * 'tall'.
     */
    static readonly 'wallConnectionTypeNorth' = 'wall_connection_type_north';
    /**
     * String property that determines what kind of connection a
     * wall has to the south. Valid values are 'none', 'short' and
     * 'tall'.
     */
    static readonly 'wallConnectionTypeSouth' = 'wall_connection_type_south';
    /**
     * String property that determines what kind of connection a
     * wall has to the west. Valid values are 'none', 'short' and
     * 'tall'.
     */
    static readonly 'wallConnectionTypeWest' = 'wall_connection_type_west';
    /**
     * Boolean property that determines if a wall should contain a
     * post.
     */
    static readonly 'wallPostBit' = 'wall_post_bit';
    static readonly 'weepingVinesAge' = 'weeping_vines_age';
    /**
     * Integer property that represents the rotation of stairs.
     * Valid values are between 0 and 3 inclusive.
     */
    static readonly 'weirdoDirection' = 'weirdo_direction';
    /**
     * String property that determines the wood type of a block.
     * Valid values are 'oak', 'spruce', 'birch', 'jungle',
     * 'acacia', and 'dark_oak'.
     */
    static readonly 'woodType' = 'wood_type';
    protected constructor();
}
/**
 * Contains additional options for configuring a block raycast
 * query.
 */
declare class BlockRaycastOptions {
    /**
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     */
    'includeLiquidBlocks': boolean;
    /**
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     */
    'includePassableBlocks': boolean;
    /**
     * Maximum distance, in blocks, to process the raycast.
     */
    'maxDistance': number;
    /**
     * @remarks
     * Creates a new BlockRaycastOptions object, for use in a block
     * vector query.
     */
    constructor();
}
/**
 * Represents a block that can play a record.
 */
declare class BlockRecordPlayerComponent {
    /**
     * @remarks
     * Clears the currently playing record of this record-playing
     * block.
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /**
     * @remarks
     * Returns true if the record-playing block is currently
     * playing a record.
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * Sets and plays a record based on an item type.
     * @param recordItemType
     * @throws This function can throw errors.
     */
    setRecord(recordItemType: ItemType): void;
    protected constructor();
}
/**
 * Represents a fluid container block that currently contains
 * snow.
 */
declare class BlockSnowContainerComponent {
    /**
     * Relative level of snow within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    'fillLevel': number;
    /**
     * Source location of the block.
     */
    readonly 'location': BlockLocation;
    protected constructor();
}
/**
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
declare class BlockType {
    /**
     * Represents whether this type of block can be waterlogged.
     */
    readonly 'canBeWaterlogged': boolean;
    /**
     * Block type name - for example, \`minecraft:acacia_stairs\`.
     */
    readonly 'id': string;
    /**
     * @remarks
     * Creates the default {@link mojang-minecraft.BlockPermutation} for
     * this type which uses the default values for all properties.
     * @returns
     * Returns created permutation.
     * @throws This function can throw errors.
     * @example place_bottom_stone_slab.js
     * \`\`\`typescript
     *        import { world, MinecraftBlockTypes, BlockProperties, BlockLocation } from "mojang-minecraft";
     *
     *        // Create the permutation
     *        let bottomStoneSlab = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();
     *        bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
     *        bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
     *
     *        // Set the permutation
     *        block.setPermutation(bottomStoneSlab);
     *
     * \`\`\`
     */
    createDefaultBlockPermutation(): BlockPermutation;
    protected constructor();
}
/**
 * Represents a fluid container block that currently contains
 * water.
 */
declare class BlockWaterContainerComponent {
    /**
     * Represents a color facet of the water.
     */
    'customColor': Color;
    /**
     * Relative level of water within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    'fillLevel': number;
    /**
     * Source location of the block.
     */
    readonly 'location': BlockLocation;
    /**
     * @remarks
     * Adds an item and colors the water based on a dye item type.
     * @param itemType
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
    protected constructor();
}
/**
 * Contains the state of a boolean-based property for a
 * {@link mojang-minecraft.BlockPermutation}.
 */
declare class BoolBlockProperty extends IBlockProperty {
    /**
     * The name of this property.
     */
    readonly 'name': string;
    /**
     * A list of valid values for this property.
     */
    readonly 'validValues': boolean[];
    /**
     * The current value of this property.
     * @throws
     * Setting this property can throw if the value passed is not
     * valid for the property. Use
     * {@link mojang-minecraft.BoolBlockProperty.validValues} to check
     * allowed values.
     */
    'value': boolean;
    protected constructor();
}
/**
 * An event that fires as players enter chat messages.
 */
declare class ChatEvent {
    /**
     * Message that is being broadcast. In a beforeChat event
     * handler, _message_ can be updated with edits before the
     * message is displayed to players.
     */
    'message': string;
    /**
     * Player that sent the chat message.
     */
    'sender': Player;
    /**
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     */
    'sendToTargets': boolean;
    /**
     * List of players that will receive this message.
     */
    'targets': Player[];
    protected constructor();
}
/**
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
declare class ChatEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when new chat messages
     * are sent.
     * @param callback
     * @example custom_command.js
     * \`\`\`typescript
     *        const chatCallback = World.events.beforeChat.subscribe((eventData) => {
     *          if (eventData.message.includes("cancel")) {
     *            // Cancel event if the message contains "cancel"
     *            eventData.canceled = true;
     *          } else {
     *            // Modify chat message being sent
     *            eventData.message = \`Modified '\${eventData.message}'\`;
     *          }
     *        });
     *
     * \`\`\`
     */
    subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when new chat messages
     * are sent.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatEvent) => void): void;
    protected constructor();
}
/**
 * Represents a fully customizable color within Minecraft.
 */
declare class Color {
    /**
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     */
    'alpha': number;
    /**
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     */
    'blue': number;
    /**
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     */
    'green': number;
    /**
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     */
    'red': number;
    /**
     * @remarks
     * Creates a new color using the specified color values.
     * @param red
     * @param green
     * @param blue
     * @param alpha
     */
    constructor(red: number, green: number, blue: number, alpha: number);
}
/**
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 */
declare class Container {
    /**
     * Contains a count of the slots in the container that are
     * empty.
     * @throws This property can throw when used.
     */
    readonly 'emptySlotsCount': number;
    /**
     * Represents the size of the container. For example, a
     * standard single-block chest has a size of 27, for the 27
     * slots in their inventory.
     * @throws This property can throw when used.
     */
    readonly 'size': number;
    /**
     * @remarks
     * Adds an item to the specified container. Item will be placed
     * in the first available empty slot. (use .setItem if you wish
     * to set items in a particular slot.)
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Gets the item stack for the set of items at the specified
     * slot. If the slot is empty, returns undefined. This method
     * does not change or clear the contents of the specified slot.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws This function can throw errors.
     * @example getItem.js
     * \`\`\`typescript
     *        const rightInventoryComp = rightChestCart.getComponent("inventory");
     *        const rightChestContainer = rightInventoryComp.container;
     *
     *        const itemStack = rightChestContainer.getItem(0);
     *
     *        test.assert(itemStack.id === "apple", "Expected apple");
     *        test.assert(itemStack.amount === 10, "Expected 10 apples");
     * \`\`\`
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws This function can throw errors.
     * @example swapItems.js
     * \`\`\`typescript
     *        rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
     *
     * \`\`\`
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * @param toSlot
     * Zero-based index of the slot to move to.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws This function can throw errors.
     * @example transferItem.js
     * \`\`\`typescript
     *        rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
     *
     * \`\`\`
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
    protected constructor();
}
/**
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
declare class DataDrivenEntityTriggerEvent {
    /**
     * Entity that the event triggered on.
     */
    readonly 'entity': Entity;
    /**
     * Name of the data driven event being triggered.
     */
    readonly 'id': string;
    /**
     * A list of modifications to component state that are the
     * effect of this triggered event.
     */
    readonly 'modifiers': DefinitionModifier[];
    protected constructor();
}
/**
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 */
declare class DataDrivenEntityTriggerEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called after a data driven
     * entity event is triggered.
     * @param callback
     * @param options
     */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called after a data driven
     * entity event is triggered.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void;
    protected constructor();
}
/**
 * Contains a set of updates to the component definition state
 * of an entity.
 */
declare class DefinitionModifier {
    /**
     * A list of components that will be added via this definition
     * modification.
     */
    readonly 'componentGroupsToAdd': string[];
    /**
     * A list of components that will be removed via this
     * definition modification.
     */
    readonly 'componentGroupsToRemove': string[];
    /**
     * A list of entity definition events that will be fired via
     * this update.
     */
    'triggers': Trigger[];
    constructor();
}
/**
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
declare class Dimension {
    /**
     * Identifier of the dimension.
     * @throws This property can throw when used.
     */
    readonly 'id': string;
    /**
     * @remarks
     * Creates an explosion at the specified location.
     * @param location
     * The location of the explosion.
     * @param radius
     * Radius, in blocks, of the explosion to create.
     * @param explosionOptions
     * Additional configurable options for the explosion.
     * @throws This function can throw errors.
     */
    createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void;
    /**
     * @remarks
     * Returns a block instance at the given location. This method
     * was introduced as of version 1.17.10.21.
     * @param location
     * The location at which to return a block.
     * @returns
     * Block at the specified location.
     */
    getBlock(location: BlockLocation): Block;
    /**
     * @remarks
     * Gets the first block that intersects with a vector emanating
     * from a location.
     * @param location
     * @param direction
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block;
    /**
     * @remarks
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     * @param getEntities
     * @returns
     * An entity iterator that can be used to loop over the
     * returned entities.
     * @throws This function can throw errors.
     */
    getEntities(getEntities?: EntityQueryOptions): EntityIterator;
    /**
     * @remarks
     * Returns a set of entities at a particular location.
     * @param location
     * The location at which to return entities.
     * @returns
     * Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: BlockLocation): Entity[];
    /**
     * @remarks
     * Gets entities that intersect with a specified vector
     * emanating from a location.
     * @param location
     * @param direction
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[];
    /**
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     * @param getPlayers
     * @returns
     * An entity iterator that can be used to loop over the
     * returned players.
     * @throws This function can throw errors.
     */
    getPlayers(getPlayers?: EntityQueryOptions): PlayerIterator;
    /**
     * @remarks
     * Tests whether a particular location contains an Air (empty)
     * block.
     * @param location
     * The location at which to check for emptiness
     * @returns
     * True if the block at the location is air (empty)
     */
    isEmpty(location: BlockLocation): boolean;
    /**
     * @remarks
     * Runs a particular command from the context of this entity.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     * @example commands.js
     * \`\`\`typescript
     *        world.getDimension("overworld").runCommand("say You got a new high score!");
     *        world.getDimension("overworld").runCommand("scoreboard players set @p score 10");
     *
     * \`\`\`
     */
    runCommand(commandString: string): any;
    /**
     * @remarks
     * Creates a new entity (e.g., a mob) at the specified
     * location.
     * @param identifier
     * Identifier of the type of entity to spawn. If no namespace
     * is specified, 'minecraft:' is assumed.
     * @param location
     * The location at which to create the entity.
     * @returns
     * Newly created entity at the specified location.
     * @throws This function can throw errors.
     */
    spawnEntity(identifier: string, location: BlockLocation | Location): Entity;
    /**
     * @remarks
     * Creates a new item stack as an entity at the specified
     * location.
     * @param item
     * @param location
     * The location at which to create the item stack.
     * @returns
     * Newly created item stack entity at the specified location.
     * @throws This function can throw errors.
     */
    spawnItem(item: ItemStack, location: BlockLocation | Location): Entity;
    /**
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world.
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     * @param molangVariables
     * A set of additional, customizable variables that can be
     * adjusted for this particle emitter.
     * @returns
     * Newly created entity at the specified location.
     */
    spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void;
    protected constructor();
}
/**
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
declare class Effect {
    /**
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     */
    readonly 'amplifier': number;
    /**
     * Gets the player-friendly name of this effect.
     */
    readonly 'displayName': string;
    /**
     * Gets the entire specified duration, in ticks, of this
     * effect.
     */
    readonly 'duration': number;
    protected constructor();
}
/**
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
declare class EffectAddEvent {
    /**
     * Additional properties and details of the effect.
     */
    'effect': Effect;
    /**
     * Additional variant number for the effect.
     */
    'effectState': number;
    /**
     * Entity that the effect is being added to.
     */
    'entity': Entity;
    protected constructor();
}
/**
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
declare class EffectAddEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an effect is added
     * to an entity.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EffectAddEvent) => void, options?: EntityEventOptions): (arg: EffectAddEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddEvent) => void): void;
    protected constructor();
}
/**
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
declare class EffectType {
    /**
     * @remarks
     * Identifier name of this effect type.
     * @returns
     * Identifier of the effect type.
     */
    getName(): string;
    protected constructor();
}
/**
 * This class represents a specific leveled enchantment that is
 * applied to an item.
 */
declare class Enchantment {
    /**
     * The level of this enchantment instance.
     */
    'level': number;
    /**
     * The enchantment type of this instance.
     */
    readonly 'type': EnchantmentType;
    constructor(enchantmentType: EnchantmentType, level?: number);
}
/**
 * This class represents a collection of enchantments that can
 * be applied to an item.
 */
declare class EnchantmentList implements Iterable<Enchantment> {
    /**
     * The item slot/type that this collection is applied to.
     */
    readonly 'slot': number;
    [Symbol.iterator](): Iterator<Enchantment>;
    /**
     * @remarks
     * Attempts to add the enchantment to this collection. Returns
     * true if successful.
     * @param enchantment
     */
    addEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns whether or not the provided EnchantmentInstance can
     * be added to this collection.
     * @param enchantment
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    constructor(enchantmentSlot: number);
    /**
     * @remarks
     * Returns an enchantment associated with a type.
     * @param enchantmentType
     */
    getEnchantment(enchantmentType: EnchantmentType): Enchantment;
    /**
     * @remarks
     * If this collection has an EnchantmentInstance with type,
     * returns the level of the enchantment. Returns 0 if not
     * present.
     * @param enchantmentType
     */
    hasEnchantment(enchantmentType: EnchantmentType): number;
    next(): IteratorResult<Enchantment>;
    /**
     * @remarks
     * Removes an EnchantmentInstance with type from this
     * collection if present.
     * @param enchantmentType
     */
    removeEnchantment(enchantmentType: EnchantmentType): void;
}
/**
 * This enum represents the item slot or type that an
 * enchantment can be applied to.
 */
// tslint:disable-next-line:no-unnecessary-class
declare class EnchantmentSlot {
    static readonly 'all' = -1;
    static readonly 'armorFeet' = 4;
    static readonly 'armorHead' = 1;
    static readonly 'armorLegs' = 8;
    static readonly 'armorTorso' = 2;
    static readonly 'axe' = 512;
    static readonly 'bow' = 32;
    static readonly 'carrotStick' = 8192;
    static readonly 'cosmeticHead' = 262144;
    static readonly 'crossbow' = 65536;
    static readonly 'elytra' = 16384;
    static readonly 'fishingRod' = 4096;
    static readonly 'flintsteel' = 256;
    static readonly 'gArmor' = 15;
    static readonly 'gDigging' = 3648;
    static readonly 'gTool' = 131520;
    static readonly 'hoe' = 64;
    static readonly 'none' = 0;
    static readonly 'pickaxe' = 1024;
    static readonly 'shears' = 128;
    static readonly 'shield' = 131072;
    static readonly 'shovel' = 2048;
    static readonly 'spear' = 32768;
    static readonly 'sword' = 16;
    protected constructor();
}
/**
 * Contains information on a type of enchantment.
 */
declare class EnchantmentType {
    /**
     * The name of the enchantment type.
     */
    readonly 'id': string;
    /**
     * The maximum level this type of enchantment can have.
     */
    readonly 'maxLevel': number;
    protected constructor();
}
/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
declare class Entity {
    /**
     * Rotation of the body component of the entity.
     * @throws This property can throw when used.
     */
    readonly 'bodyRotation': number;
    /**
     * Dimension that the entity is currently within.
     * @throws This property can throw when used.
     */
    readonly 'dimension': Dimension;
    /**
     * Location of the center of the head component of the entity.
     * @throws This property can throw when used.
     */
    readonly 'headLocation': Location;
    /**
     * Unique identifier of the entity.
     * @throws This property can throw when used.
     */
    readonly 'id': string;
    /**
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     */
    'isSneaking': boolean;
    /**
     * Current location of the entity.
     * @throws This property can throw when used.
     */
    readonly 'location': Location;
    /**
     * Given name of the entity.
     */
    'nameTag': string;
    /**
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking.
     */
    'target': Entity;
    /**
     * Velocity of the entity.
     * @throws This property can throw when used.
     */
    readonly 'velocity': Vector;
    /**
     * Vector of the current view of the entity.
     * @throws This property can throw when used.
     */
    readonly 'viewVector': Vector;
    /**
     * @remarks
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in seconds, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @param showParticles
     * @throws This function can throw errors.
     * @example addEffect.js
     * \`\`\`typescript
     *        const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
     *        const villagerLoc = new BlockLocation(1, 2, 1);
     *        const villager = test.spawn(villagerId, villagerLoc);
     *        const duration = 20;
     *
     *        villager.addEffect(MinecraftEffectTypes.poison, duration, 1);
     *
     * \`\`\`
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * @remarks
     * Adds a specified tag to an entity.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * Gets the first block that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromViewVector(options?: BlockRaycastOptions): Block;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): IEntityComponent;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): IEntityComponent[];
    /**
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     * @param effectType
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType): Effect;
    /**
     * @remarks
     * Gets the first entity that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    /**
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    kill(): void;
    /**
     * @remarks
     * Removes a specified tag from an entity.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Runs a particular command from the context of this entity.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     * @example commands.js
     * \`\`\`typescript
     *        entity.runCommand("say You got a new high score!");
     *        entity.runCommand("scoreboard players set @p score 10");
     *
     * \`\`\`
     */
    runCommand(commandString: string): any;
    /**
     * @remarks
     * Sets a velocity for the entity to move with.
     * @param velocity
     * X/Y/Z components of the velocity.
     * @throws This function can throw errors.
     */
    setVelocity(velocity: Vector): void;
    /**
     * @remarks
     * Teleports the selected entity to a new location
     * @param location
     * New location for the entity.
     * @param dimension
     * Dimension to move the selected entity to.
     * @param xRotation
     * X rotation of the entity after teleportation.
     * @param yRotation
     * Y rotation of the entity after teleportation.
     * @throws This function can throw errors.
     */
    teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number): void;
    /**
     * @remarks
     * Teleports the selected entity to a new location, and will
     * have the entity facing a specified location.
     * @param location
     * New location for the entity.
     * @param dimension
     * Dimension to move the selected entity to.
     * @param facingLocation
     * Location that this entity will be facing.
     * @throws This function can throw errors.
     */
    teleportFacing(location: Location, dimension: Dimension, facingLocation: Location): void;
    /**
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
    protected constructor();
}
/**
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
declare class EntityAddRiderComponent extends IEntityComponent {
    /**
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     * @throws This property can throw when used.
     */
    readonly 'entityType': string;
    /**
     * Identifier of this component. Should always be
     * minecraft:addrider.
     */
    readonly 'id': string;
    /**
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     * @throws This property can throw when used.
     */
    readonly 'spawnEvent': string;
    protected constructor();
}
/**
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
declare class EntityAgeableComponent extends IEntityComponent {
    /**
     * List of items that the entity drops when it grows up.
     * @throws This property can throw when used.
     */
    readonly 'dropItems': string[];
    /**
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     * @throws This property can throw when used.
     */
    readonly 'duration': number;
    /**
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     * @throws This property can throw when used.
     */
    readonly 'feedItems': EntityDefinitionFeedItem[];
    /**
     * Event to run when this entity grows up.
     * @throws This property can throw when used.
     */
    readonly 'growUp': Trigger;
    /**
     * Identifier of this component. Should always be
     * minecraft:ageable.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
declare class EntityBreathableComponent extends IEntityComponent {
    /**
     * List of blocks this entity can breathe in, in addition to
     * the separate properties for classes of blocks.
     * @throws This property can throw when used.
     */
    readonly 'breatheBlocks': BlockPermutation[];
    /**
     * If true, this entity can breathe in air.
     * @throws This property can throw when used.
     */
    readonly 'breathesAir': boolean;
    /**
     * If true, this entity can breathe in lava.
     * @throws This property can throw when used.
     */
    readonly 'breathesLava': boolean;
    /**
     * If true, this entity can breathe in solid blocks.
     * @throws This property can throw when used.
     */
    readonly 'breathesSolids': boolean;
    /**
     * If true, this entity can breathe in water.
     * @throws This property can throw when used.
     */
    readonly 'breathesWater': boolean;
    /**
     * If true, this entity will have visible bubbles while in
     * water.
     * @throws This property can throw when used.
     */
    readonly 'generatesBubbles': boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:breathable.
     */
    readonly 'id': string;
    /**
     * Time in seconds to recover breath to maximum.
     * @throws This property can throw when used.
     */
    readonly 'inhaleTime': number;
    /**
     * List of blocks this entity can't breathe in.
     * @throws This property can throw when used.
     */
    readonly 'nonBreatheBlocks': BlockPermutation[];
    /**
     * Time in seconds between suffocation damage.
     * @throws This property can throw when used.
     */
    readonly 'suffocateTime': number;
    /**
     * Time in seconds the entity can hold its breath.
     * @throws This property can throw when used.
     */
    readonly 'totalSupply': number;
    /**
     * @remarks
     * Sets the current air supply of the entity.
     * @param value
     * New air supply for the entity.
     * @throws This function can throw errors.
     */
    setAirSupply(value: number): void;
    protected constructor();
}
/**
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
declare class EntityCanClimbComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:can_climb.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
declare class EntityCanFlyComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:can_fly.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
declare class EntityCanPowerJumpComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:can_power_jump.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (sheep, llama, shulker).
 */
declare class EntityColorComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:color.
     */
    readonly 'id': string;
    /**
     * The palette color value of the entity.
     */
    'value': number;
    protected constructor();
}
/**
 * Contains information related to the creation of a new
 * entity.
 */
declare class EntityCreateEvent {
    /**
     * New entity that was created.
     */
    'entity': Entity;
    protected constructor();
}
/**
 * Manages callbacks that are connected to when a new entity is
 * created.
 */
declare class EntityCreateEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a new entity is
     * created.
     * @param callback
     */
    subscribe(callback: (arg: EntityCreateEvent) => void): (arg: EntityCreateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a new entity is
     * created.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityCreateEvent) => void): void;
    protected constructor();
}
/**
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
declare class EntityDataDrivenTriggerEventOptions {
    /**
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     */
    'entities': Entity[];
    /**
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     */
    'entityTypes': string[];
    /**
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     */
    'eventTypes': string[];
    constructor();
}
/**
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
declare class EntityDefinitionFeedItem {
    /**
     * The amount by which an entity's age will increase when fed
     * this item. Values usually range between 0 and 1.
     */
    readonly 'growth': number;
    /**
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     */
    readonly 'item': string;
    protected constructor();
}
/**
 * Contains optional parameters for registering an entity
 * event.
 */
declare class EntityEventOptions {
    /**
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     */
    'entities': Entity[];
    /**
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     */
    'entityTypes': string[];
    constructor();
}
/**
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
declare class EntityFireImmuneComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:fire_immune.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
declare class EntityFloatsInLiquidComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:floats_in_liquid.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * Represents the flying speed of an entity.
 */
declare class EntityFlyingSpeedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:flying_speed.
     */
    readonly 'id': string;
    /**
     * Speed while flying value of the entity.
     */
    'value': number;
    protected constructor();
}
/**
 * Defines how much friction affects this entity.
 */
declare class EntityFrictionModifierComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:friction_modifier.
     */
    readonly 'id': string;
    /**
     * The higher the number, the more the friction affects this
     * entity. A value of 1.0 means regular friction, while 2.0
     * means twice as much.
     */
    'value': number;
    protected constructor();
}
/**
 * Sets the offset from the ground that the entity is actually
 * at.
 */
declare class EntityGroundOffsetComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:ground_offset.
     */
    readonly 'id': string;
    /**
     * The value of the entity's offset from the terrain, in
     * blocks.
     */
    'value': number;
    protected constructor();
}
/**
 * Defines the interactions with this entity for healing it.
 */
declare class EntityHealableComponent extends IEntityComponent {
    /**
     * A set of filters for when these Healable items would apply.
     * @throws This property can throw when used.
     */
    readonly 'filters': FilterGroup;
    /**
     * Determines if an item can be used regardless of the entity
     * being at full health.
     * @throws This property can throw when used.
     */
    readonly 'forceUse': boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:healable.
     */
    readonly 'id': string;
    /**
     * A set of items that can specifically heal this entity.
     * @throws This property can throw when used.
     */
    readonly 'items': FeedItem[];
    protected constructor();
}
/**
 * Defines the health properties of an entity.
 */
declare class EntityHealthComponent extends IEntityComponent {
    /**
     * Read-only. Returns the current value of health for the
     * entity.
     * @throws This property can throw when used.
     */
    readonly 'current': number;
    /**
     * Identifier of this component. Should always be
     * minecraft:health.
     */
    readonly 'id': string;
    /**
     * Value for health as defined through entity components.
     * @throws This property can throw when used.
     */
    readonly 'value': number;
    /**
     * @remarks
     * Resets the current health value of the entity to its default
     * value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the current health of the entity to its maximum
     * value.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the current health to the minimum value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current health of the entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): void;
    protected constructor();
}
/**
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 */
declare class EntityHitEvent {
    /**
     * Entity that made a hit/melee attack.
     */
    readonly 'entity': Entity;
    /**
     * Block that was hit by the attack, or undefined if the hit
     * attack did not hit a block. If both hitEntity and hitBlock
     * are undefined, then the entity basically swiped into the
     * air.
     */
    readonly 'hitBlock': Block;
    /**
     * Entity that was hit by the attack, or undefined if the hit
     * attack did not hit an entity. If both hitEntity and hitBlock
     * are undefined, then the entity basically swiped into the
     * air.
     */
    readonly 'hitEntity': Entity;
    protected constructor();
}
/**
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 */
declare class EntityHitEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits
     * another entity.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity makes a
     * melee attack on another entity.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEvent) => void): void;
    protected constructor();
}
/**
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 */
declare class EntityHurtEvent {
    /**
     * A summary of the reason that damage was caused.
     */
    readonly 'cause': string;
    /**
     * Describes the amount of damage caused.
     */
    readonly 'damage': number;
    /**
     * Optional entity that caused the damaging attack, or
     * undefined if the hurt reason was not because of another
     * entity.
     */
    readonly 'damagingEntity': Entity;
    /**
     * Entity that was hurt.
     */
    readonly 'hurtEntity': Entity;
    /**
     * Optional entity for a projectile that potentially hurt an
     * entity.
     */
    readonly 'projectile': Entity;
    protected constructor();
}
/**
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
declare class EntityHurtEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an entity is hurt.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is hurt.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
    protected constructor();
}
/**
 * Defines this entity's inventory properties.
 */
declare class EntityInventoryComponent extends IEntityComponent {
    /**
     * Number of slots that this entity can gain per extra
     * strength.
     * @throws This property can throw when used.
     */
    readonly 'additionalSlotsPerStrength': number;
    /**
     * If true, the contents of this inventory can be removed by a
     * hopper.
     * @throws This property can throw when used.
     */
    readonly 'canBeSiphonedFrom': boolean;
    /**
     * Defines the interactions with this entity for healing it.
     * @throws This property can throw when used.
     */
    readonly 'container': InventoryComponentContainer;
    /**
     * Type of container this entity has.
     * @throws This property can throw when used.
     */
    readonly 'containerType': string;
    /**
     * Identifier of this component. Should always be
     * minecraft:healable.
     */
    readonly 'id': string;
    /**
     * Number of slots the container has.
     * @throws This property can throw when used.
     */
    readonly 'inventorySize': number;
    /**
     * If true, the entity will not drop it's inventory on death.
     * @throws This property can throw when used.
     */
    readonly 'private': boolean;
    /**
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     * @throws This property can throw when used.
     */
    readonly 'restrictToOwner': boolean;
    protected constructor();
}
/**
 * When added, this component signifies that this entity is a
 * baby.
 */
declare class EntityIsBabyComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_baby.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity is
 * charged.
 */
declare class EntityIsChargedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_charged.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 */
declare class EntityIsChestedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_chested.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 */
declare class EntityIsDyableComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_dyeable.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
declare class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_hidden_when_invisible.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity this
 * currently on fire.
 */
declare class EntityIsIgnitedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_ignited.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity is an
 * illager captain.
 */
declare class EntityIsIllagerCaptainComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_illager_captain.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity is
 * currently saddled.
 */
declare class EntityIsSaddledComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_saddled.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity is
 * currently shaking.
 */
declare class EntityIsShakingComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_shaking.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity is
 * currently sheared.
 */
declare class EntityIsShearedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_sheared.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity can be
 * stacked.
 */
declare class EntityIsStackableComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stackable.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity is
 * currently stunned.
 */
declare class EntityIsStunnedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stunned.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * When added, this component signifies that this entity is
 * currently tamed.
 */
declare class EntityIsTamedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_tamed.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 */
declare class EntityItemComponent {
    /**
     * Item stack represented by this entity in the world.
     * @throws This property can throw when used.
     */
    readonly 'itemStack': ItemStack;
    protected constructor();
}
/**
 * This type is usable for iterating over a set of entities.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
declare class EntityIterator implements Iterable<Entity> {
    [Symbol.iterator](): Iterator<Entity>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Entity in the iteration.
     */
    next(): IteratorResult<Entity>;
    protected constructor();
}
/**
 * Defines the base movement speed in lava of this entity.
 */
declare class EntityLavaMovementComponent extends IEntityComponent {
    /**
     * Read-only. Returns the current value of movement speed on
     * lava for the entity.
     * @throws This property can throw when used.
     */
    readonly 'current': number;
    /**
     * Identifier of this component. Should always be
     * minecraft:lava_movement.
     */
    readonly 'id': string;
    /**
     * Value for movement speed on lava as defined through entity
     * components.
     * @throws This property can throw when used.
     */
    readonly 'value': number;
    /**
     * @remarks
     * Resets the current movement speed on lava for the entity to
     * its default value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the movement speed on lava to the maximum value for
     * the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the movement speed on lava speed to the minimum
     * value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of movement speed on lava for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): void;
    protected constructor();
}
/**
 * Allows this entity to be leashed and defines the conditions
 * and events for this entity when is leashed.
 */
declare class EntityLeashableComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:leashable.
     */
    readonly 'id': string;
    /**
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     * @throws This property can throw when used.
     */
    readonly 'softDistance': number;
    /**
     * @remarks
     * Leashes this entity to another entity.
     * @param leashHolder
     * The entity to leash this entity to.
     * @throws This function can throw errors.
     */
    leash(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     * @throws This function can throw errors.
     */
    unleash(): void;
    protected constructor();
}
/**
 * Additional variant value. Can be used to further
 * differentiate variants.
 */
declare class EntityMarkVariantComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:mark_variant.
     */
    readonly 'id': string;
    /**
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     */
    'value': number;
    protected constructor();
}
/**
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
declare class EntityMountTamingComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:mount_taming.
     */
    readonly 'id': string;
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    setTamed(showParticles: boolean): void;
    protected constructor();
}
/**
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 */
declare class EntityMovementAmphibiousComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.amphibious.
     */
    readonly 'id': string;
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly 'maxTurn': number;
    protected constructor();
}
/**
 * This component accents the movement of an entity.
 */
declare class EntityMovementBasicComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.basic.
     */
    readonly 'id': string;
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly 'maxTurn': number;
    protected constructor();
}
/**
 * Defines the general movement speed of this entity.
 */
declare class EntityMovementComponent extends IEntityComponent {
    /**
     * Read-only. Returns the current value of default movement
     * speed for the entity.
     * @throws This property can throw when used.
     */
    readonly 'current': number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.
     */
    readonly 'id': string;
    /**
     * Value for default movement speed as defined through entity
     * components.
     * @throws This property can throw when used.
     */
    readonly 'value': number;
    /**
     * @remarks
     * Resets the current default movement speed value for the
     * entity to the default value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the default movement speed to the maximum value for
     * the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the default movement speed to the minimum value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of default movement speed for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): void;
    protected constructor();
}
/**
 * When added, this move control causes the mob to fly.
 */
declare class EntityMovementFlyComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.fly.
     */
    readonly 'id': string;
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly 'maxTurn': number;
    protected constructor();
}
/**
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 */
declare class EntityMovementGenericComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.generic.
     */
    readonly 'id': string;
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly 'maxTurn': number;
    protected constructor();
}
/**
 * When added, this movement control allows the mob to glide.
 */
declare class EntityMovementGlideComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.glide.
     */
    readonly 'id': string;
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly 'maxTurn': number;
    /**
     * Speed in effect when the entity is turning.
     * @throws This property can throw when used.
     */
    readonly 'speedWhenTurning': number;
    /**
     * Start speed during a glide.
     * @throws This property can throw when used.
     */
    readonly 'startSpeed': number;
    protected constructor();
}
/**
 * When added, this move control causes the mob to hover.
 */
declare class EntityMovementHoverComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.hover.
     */
    readonly 'id': string;
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly 'maxTurn': number;
    protected constructor();
}
/**
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 */
declare class EntityMovementJumpComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.jump.
     */
    readonly 'id': string;
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly 'maxTurn': number;
    protected constructor();
}
/**
 * When added, this move control causes the mob to hop as it
 * moves.
 */
declare class EntityMovementSkipComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.skip.
     */
    readonly 'id': string;
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly 'maxTurn': number;
    protected constructor();
}
/**
 * When added, this move control causes the mob to sway side to
 * side giving the impression it is swimming.
 */
declare class EntityMovementSwayComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.sway.
     */
    readonly 'id': string;
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly 'maxTurn': number;
    /**
     * Amplitude of the sway motion.
     * @throws This property can throw when used.
     */
    readonly 'swayAmplitude': number;
    /**
     * Amount of sway frequency.
     * @throws This property can throw when used.
     */
    readonly 'swayFrequency': number;
    protected constructor();
}
/**
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 */
declare class EntityNavigationClimbComponent extends IEntityComponent {
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidDamageBlocks': boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidPortals': boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly 'avoidSun': boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidWater': boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly 'canBreach': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly 'canBreakDoors': boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly 'canFloat': boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly 'canJump': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenDoors': boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenIronDoors': boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly 'canPassDoors': boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly 'canPathFromAir': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverLava': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverWater': boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly 'canSink': boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly 'canSwim': boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly 'canWalk': boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly 'canWalkInLava': boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.climb.
     */
    readonly 'id': string;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly 'isAmphibious': boolean;
    protected constructor();
}
/**
 * Allows this entity to generate paths by flying around the
 * air like the regular Ghast.
 */
declare class EntityNavigationFloatComponent extends IEntityComponent {
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidDamageBlocks': boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidPortals': boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly 'avoidSun': boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidWater': boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly 'canBreach': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly 'canBreakDoors': boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly 'canFloat': boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly 'canJump': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenDoors': boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenIronDoors': boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly 'canPassDoors': boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly 'canPathFromAir': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverLava': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverWater': boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly 'canSink': boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly 'canSwim': boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly 'canWalk': boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly 'canWalkInLava': boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.float.
     */
    readonly 'id': string;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly 'isAmphibious': boolean;
    protected constructor();
}
/**
 * Allows this entity to generate paths in the air (for
 * example, like Minecraft parrots do.)
 */
declare class EntityNavigationFlyComponent extends IEntityComponent {
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidDamageBlocks': boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidPortals': boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly 'avoidSun': boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidWater': boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly 'canBreach': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly 'canBreakDoors': boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly 'canFloat': boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly 'canJump': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenDoors': boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenIronDoors': boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly 'canPassDoors': boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly 'canPathFromAir': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverLava': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverWater': boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly 'canSink': boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly 'canSwim': boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly 'canWalk': boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly 'canWalkInLava': boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.fly.
     */
    readonly 'id': string;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly 'isAmphibious': boolean;
    protected constructor();
}
/**
 * Allows this entity to generate paths by walking, swimming,
 * flying and/or climbing around and jumping up and down a
 * block.
 */
declare class EntityNavigationGenericComponent extends IEntityComponent {
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidDamageBlocks': boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidPortals': boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly 'avoidSun': boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidWater': boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly 'canBreach': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly 'canBreakDoors': boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly 'canFloat': boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly 'canJump': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenDoors': boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenIronDoors': boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly 'canPassDoors': boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly 'canPathFromAir': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverLava': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverWater': boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly 'canSink': boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly 'canSwim': boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly 'canWalk': boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly 'canWalkInLava': boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.generic.
     */
    readonly 'id': string;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly 'isAmphibious': boolean;
    protected constructor();
}
/**
 * Allows this entity to generate paths in the air (for
 * example, like the Minecraft Bees do.) Keeps them from
 * falling out of the skies and doing predictive movement.
 */
declare class EntityNavigationHoverComponent extends IEntityComponent {
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidDamageBlocks': boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidPortals': boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly 'avoidSun': boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidWater': boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly 'canBreach': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly 'canBreakDoors': boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly 'canFloat': boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly 'canJump': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenDoors': boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenIronDoors': boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly 'canPassDoors': boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly 'canPathFromAir': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverLava': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverWater': boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly 'canSink': boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly 'canSwim': boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly 'canWalk': boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly 'canWalkInLava': boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.hover.
     */
    readonly 'id': string;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly 'isAmphibious': boolean;
    protected constructor();
}
/**
 * Allows this entity to generate paths by walking around and
 * jumping up and down a block like regular mobs.
 */
declare class EntityNavigationWalkComponent extends IEntityComponent {
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidDamageBlocks': boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidPortals': boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly 'avoidSun': boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly 'avoidWater': boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly 'canBreach': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly 'canBreakDoors': boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly 'canFloat': boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly 'canJump': boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenDoors': boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly 'canOpenIronDoors': boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly 'canPassDoors': boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly 'canPathFromAir': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverLava': boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly 'canPathOverWater': boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly 'canSink': boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly 'canSwim': boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly 'canWalk': boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly 'canWalkInLava': boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.swim.
     */
    readonly 'id': string;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly 'isAmphibious': boolean;
    protected constructor();
}
/**
 * Sets the distance through which the entity can push through.
 */
declare class EntityPushThroughComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:push_through.
     */
    readonly 'id': string;
    /**
     * The value of the entity's push-through, in blocks.
     */
    'value': number;
    protected constructor();
}
/**
 * Contains options for selecting entities within an area.
 */
declare class EntityQueryOptions {
    /**
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     */
    'closest': number;
    /**
     * Excludes entities that match one or more of the specified
     * families.
     */
    'excludeFamilies': string[];
    /**
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     */
    'excludeGameModes': GameMode[];
    /**
     * Excludes entities that have a name that match one of the
     * specified values.
     */
    'excludeNames': string[];
    /**
     * Excludes entities with a tag that matches one of the
     * specified values.
     */
    'excludeTags': string[];
    /**
     * Excludes entities if they are one of the specified types.
     */
    'excludeTypes': string[];
    /**
     * If specified, includes entities that match all of the
     * specified families.
     */
    'families': string[];
    /**
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     */
    'farthest': number;
    /**
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     */
    'gameMode': GameMode;
    /**
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     */
    'location': Location;
    /**
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     */
    'maxDistance': number;
    /**
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     */
    'maxHorizontalRotation': number;
    /**
     * If defined, only players that have at most this level are
     * returned.
     */
    'maxLevel': number;
    /**
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     */
    'maxVerticalRotation': number;
    /**
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     */
    'minDistance': number;
    /**
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     */
    'minHorizontalRotation': number;
    /**
     * If defined, only players that have at least this level are
     * returned.
     */
    'minLevel': number;
    /**
     * If specified, will only include entities that have at least
     * this vertical rotation.
     */
    'minVerticalRotation': number;
    /**
     * Includes entities with the specified name.
     */
    'name': string;
    /**
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     */
    'scoreOptions': EntityQueryScoreOptions[];
    /**
     * Includes entities that match all of the specified tags.
     */
    'tags': string[];
    /**
     * If defined, entities that match this type are included.
     */
    'type': string;
    /**
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     */
    'volume': BlockAreaSize;
    /**
     * @remarks
     * Creates a new EntityQueryOptions query object, for use in
     * getEntities/getPlayers methods.
     */
    constructor();
}
/**
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
declare class EntityQueryScoreOptions {
    /**
     * If set to true, entities and players within this score range
     * are excluded from query results.
     */
    'exclude': boolean;
    /**
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     */
    'maxScore': number;
    /**
     * If defined, only players that have a score equal to or over
     * minScore are included.
     */
    'minScore': number;
    /**
     * Identifier of the scoreboard objective to filter on.
     */
    'objective': string;
    /**
     * @remarks
     * Creates a new EntityQueryScoreOptions query object, for use
     * in an entity query.
     */
    constructor();
}
/**
 * Contains additional options for an entity raycast operation.
 */
declare class EntityRaycastOptions {
    /**
     * Maximum distance, in blocks, to process the raycast.
     */
    'maxDistance': number;
    /**
     * @remarks
     * Creates a new EntityRaycastOptions object, for use in an
     * entity vector query.
     */
    constructor();
}
/**
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 */
declare class EntityRideableComponent extends IEntityComponent {
    /**
     * Zero-based index of the seat that can used to control this
     * entity.
     * @throws This property can throw when used.
     */
    readonly 'controllingSeat': number;
    /**
     * Determines whether interactions are not supported if the
     * entity is crouching.
     * @throws This property can throw when used.
     */
    readonly 'crouchingSkipInteract': boolean;
    /**
     * A string-list of entity types that this entity can support
     * as riders.
     * @throws This property can throw when used.
     */
    readonly 'familyTypes': string[];
    /**
     * Identifier of this component. Should always be
     * minecraft:rideable.
     */
    readonly 'id': string;
    /**
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     * @throws This property can throw when used.
     */
    readonly 'interactText': string;
    /**
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     * @throws This property can throw when used.
     */
    readonly 'pullInEntities': boolean;
    /**
     * If true, this entity will be picked when looked at by the
     * rider.
     * @throws This property can throw when used.
     */
    readonly 'riderCanInteract': boolean;
    /**
     * Number of seats for riders defined for this entity.
     * @throws This property can throw when used.
     */
    readonly 'seatCount': number;
    /**
     * The list of positions and number of riders for each position
     * for entities riding this entity.
     * @throws This property can throw when used.
     */
    readonly 'seats': Seat[];
    /**
     * @remarks
     * Adds an entity to this entity as a rider.
     * @param rider
     * Entity that will become the rider of this entity.
     * @returns
     * True if the rider entity was successfully added.
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * Ejects the specified rider of this entity.
     * @param rider
     * Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * Ejects all riders of this entity.
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    protected constructor();
}
/**
 * Sets the entity's visual size.
 */
declare class EntityScaleComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:scale.
     */
    readonly 'id': string;
    /**
     * The value of the scale. 1.0 means the entity will appear at
     * the scale they are defined in their model. Higher numbers
     * make the entity bigger.
     */
    'value': number;
    protected constructor();
}
/**
 * Skin Id value. Can be used to differentiate skins, such as
 * base skins for villagers.
 */
declare class EntitySkinIdComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:skin_id.
     */
    readonly 'id': string;
    /**
     * The identifier of the skin. By convention, 0 is the
     * identifier of the base skin.
     */
    'value': number;
    protected constructor();
}
/**
 * Defines the entity's strength to carry items.
 */
declare class EntityStrengthComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:strength.
     */
    readonly 'id': string;
    /**
     * Maximum strength of this entity, as defined in the entity
     * type definition.
     * @throws This property can throw when used.
     */
    readonly 'max': number;
    /**
     * Current strength value of this entity, after any effects or
     * component updates are applied.
     * @throws This property can throw when used.
     */
    readonly 'value': number;
    protected constructor();
}
/**
 * Defines the rules for a mob to be tamed by the player.
 */
declare class EntityTameableComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:tameable.
     */
    readonly 'id': string;
    /**
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     * @throws This property can throw when used.
     */
    readonly 'probability': number;
    /**
     * Event to run when this entity becomes tamed.
     * @throws This property can throw when used.
     */
    readonly 'tameEvent': Trigger;
    /**
     * The list of items that can be used to tame this entity.
     * @throws This property can throw when used.
     */
    readonly 'tameItems': string[];
    /**
     * @remarks
     * Tames this entity.
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(): boolean;
    protected constructor();
}
declare class EntityType {
    readonly 'id': string;
    protected constructor();
}
declare class EntityTypeIterator implements Iterable<EntityType> {
    [Symbol.iterator](): Iterator<EntityType>;
    next(): IteratorResult<EntityType>;
    protected constructor();
}
// tslint:disable-next-line:no-unnecessary-class
declare class EntityTypes {
    static get(identifier: string): EntityType;
    static getAll(): EntityTypeIterator;
    protected constructor();
}
/**
 * Defines the general movement speed underwater of this
 * entity.
 */
declare class EntityUnderwaterMovementComponent extends IEntityComponent {
    /**
     * Read-only. Returns the current value of movement speed
     * underwater for the entity.
     * @throws This property can throw when used.
     */
    readonly 'current': number;
    /**
     * Identifier of this component. Should always be
     * minecraft:underwater_movement.
     */
    readonly 'id': string;
    /**
     * Value for movement speed underwater as defined through
     * entity components.
     * @throws This property can throw when used.
     */
    readonly 'value': number;
    /**
     * @remarks
     * Resets the current movement speed underwater for the entity
     * to the default value implied by the current component state
     * of the entity.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the movement speed underwater to the maximum value
     * for the entity, as determined by the set of components that
     * are on the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the movement speed underwater to the minimum value as
     * defined by the component state of this entity.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of movement speed underwater for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): void;
    protected constructor();
}
/**
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 */
declare class EntityVariantComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:variant.
     */
    readonly 'id': string;
    /**
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     * @throws This property can throw when used.
     */
    readonly 'value': number;
    protected constructor();
}
/**
 * When added, this component signifies that this entity wants
 * to become a jockey.
 */
declare class EntityWantsJockeyComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:wants_jockey.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * Contains a set of events that are available across the scope
 * of the World.
 */
declare class Events {
    /**
     * This event fires before a chat message is broadcast or
     * delivered. The event can be canceled, and the message can
     * also be updated.
     */
    readonly 'beforeChat': BeforeChatEventSignal;
    /**
     * This event is fired before the triggering of an entity event
     * that updates the component definition state of an entity.
     * Within this event, you can cancel or shape the impacted
     * components and event triggers.
     */
    readonly 'beforeDataDrivenEntityTriggerEvent': BeforeDataDrivenEntityTriggerEventSignal;
    /**
     * This event is fired before an explosion occurs.
     */
    readonly 'beforeExplosion': BeforeExplosionEventSignal;
    /**
     * For custom items, this event is triggered before the set of
     * defined components for the item change in response to a
     * triggered event. Note that this event is only fired for
     * custom data-driven items.
     */
    readonly 'beforeItemDefinitionEvent': BeforeItemDefinitionEventSignal;
    /**
     * This event fires before an item is used by an entity or
     * player.
     */
    readonly 'beforeItemUse': BeforeItemUseEventSignal;
    /**
     * This event fires before an item is used on a block by an
     * entity or player.
     */
    readonly 'beforeItemUseOn': BeforeItemUseOnEventSignal;
    /**
     * Fires before a piston is activated.
     */
    readonly 'beforePistonActivate': BeforePistonActivateEventSignal;
    /**
     * This event fires for a block that is broken by a player.
     */
    readonly 'blockBreak': BlockBreakEventSignal;
    /**
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     */
    readonly 'blockExplode': BlockExplodeEventSignal;
    /**
     * This event fires for a block that is placed by a player.
     */
    readonly 'blockPlace': BlockPlaceEventSignal;
    /**
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     */
    readonly 'chat': ChatEventSignal;
    /**
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     */
    readonly 'dataDrivenEntityTriggerEvent': DataDrivenEntityTriggerEventSignal;
    /**
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     */
    readonly 'effectAdd': EffectAddEventSignal;
    /**
     * This event fires when a new entity is created.
     */
    readonly 'entityCreate': EntityCreateEventSignal;
    /**
     * This event fires when an entity hits (makes a melee attack)
     * and potentially impacts another entity or block.
     */
    readonly 'entityHit': EntityHitEventSignal;
    /**
     * This event fires when an entity is hurt (takes damage).
     */
    readonly 'entityHurt': EntityHurtEventSignal;
    /**
     * This event is fired after an explosion occurs.
     */
    readonly 'explosion': ExplosionEventSignal;
    /**
     * For custom items, this event is triggered when the
     * fundamental set of defined components for the item change.
     * Note that this event is only fired for custom data-driven
     * items.
     */
    readonly 'itemDefinitionEvent': ItemDefinitionEventSignal;
    /**
     * This event fires when any particular item is used by an
     * entity or player.
     */
    readonly 'itemUse': ItemUseEventSignal;
    /**
     * This event fires when any particular item is used on a block
     * by an entity or player.
     */
    readonly 'itemUseOn': ItemUseOnEventSignal;
    /**
     * This event fires when a lever activates or is deactivated.
     */
    readonly 'leverActivate': LeverActivateEventSignal;
    readonly 'messageReceive': ServerMessageSignal;
    /**
     * This event fires when a piston expands or retracts.
     */
    readonly 'pistonActivate': PistonActivateEventSignal;
    /**
     * This event fires when a player joins a world.
     */
    readonly 'playerJoin': PlayerJoinEventSignal;
    /**
     * This event fires when a player leaves a world.
     */
    readonly 'playerLeave': PlayerLeaveEventSignal;
    /**
     * This event fires every tick - which is 20 times per second.
     */
    readonly 'tick': TickEventSignal;
    /**
     * This event will be triggered when the weather changes within
     * Minecraft.
     */
    readonly 'weatherChange': WeatherChangeEventSignal;
    protected constructor();
}
/**
 * Contains information regarding an explosion that has
 * happened.
 */
declare class ExplosionEvent {
    /**
     * Dimension where the explosion has occurred.
     */
    readonly 'dimension': Dimension;
    /**
     * A collection of blocks impacted by this explosion event.
     */
    readonly 'impactedBlocks': BlockLocation[];
    /**
     * Optional source of the explosion.
     */
    readonly 'source': Entity;
    protected constructor();
}
/**
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
declare class ExplosionEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs.
     * @param callback
     */
    subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionEvent) => void): void;
    protected constructor();
}
/**
 * Additional configuration options for the
 * {@link mojang-minecraft.Dimension.createExplosion} method.
 */
declare class ExplosionOptions {
    /**
     * Whether parts of the explosion also impact underwater.
     */
    'allowUnderwater': boolean;
    /**
     * Whether the explosion will break blocks within the blast
     * radius.
     */
    'breaksBlocks': boolean;
    /**
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     */
    'causesFire': boolean;
    /**
     * Optional source of the explosion.
     */
    'source': Entity;
    /**
     * @remarks
     * Creates a new instance of the ExplosionOptions object, for
     * use in the {@link mojang-minecraft.Dimension.createExplosion}
     * method.
     */
    constructor();
}
/**
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
declare class FeedItem {
    /**
     * As part of the Healable component, an optional collection of
     * side effects that can occur from being fed an item.
     */
    readonly 'effects': FeedItemEffect[];
    /**
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     */
    readonly 'healAmount': number;
    /**
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     */
    readonly 'item': string;
    protected constructor();
}
/**
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
declare class FeedItemEffect {
    /**
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     */
    readonly 'amplifier': number;
    /**
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     */
    readonly 'chance': number;
    /**
     * Gets the duration, in ticks, of this effect.
     */
    readonly 'duration': number;
    /**
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     */
    readonly 'name': string;
    protected constructor();
}
/**
 * Represents a set of filters for when an event should occur.
 */
// tslint:disable-next-line:no-unnecessary-class
declare class FilterGroup {
    protected constructor();
}
/**
 * Represents constants related to fluid containers.
 */
// tslint:disable-next-line:no-unnecessary-class
declare class FluidContainer {
    /**
     * Constant that represents the maximum fill level of a fluid
     * container.
     */
    static readonly 'maxFillLevel' = 6;
    /**
     * Constant that represents the minimum fill level of a fluid
     * container.
     */
    static readonly 'minFillLevel' = 0;
    protected constructor();
}
/**
 * Contains an interface for defining the state of a property
 * for a {@link mojang-minecraft.BlockPermutation}.
 */
declare class IBlockProperty {
    /**
     * The name of this property.
     */
    readonly 'name': string;
    protected constructor();
}
/**
 * Base interface that defines components associated with an
 * entity.
 */
declare class IEntityComponent {
    /**
     * Identifier of this component.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * Contains the state of an integer-based property for a
 * {@link mojang-minecraft.BlockPermutation}.
 */
declare class IntBlockProperty extends IBlockProperty {
    /**
     * The name of this property.
     */
    readonly 'name': string;
    /**
     * A list of valid values for this particular property.
     */
    readonly 'validValues': number[];
    /**
     * The current value of this property.
     * @throws
     * Setting this property can throw if the value passed is not
     * valid for the property. Use
     * {@link mojang-minecraft.IntBlockProperty.validValues} to check
     * allowed values.
     */
    'value': number;
    protected constructor();
}
/**
 * Represents a container that can hold stacks of items. Used
 * for entities like players, chest minecarts, llamas, and
 * more.
 */
declare class InventoryComponentContainer extends Container {
    /**
     * The number of empty slots in the container.
     * @throws This property can throw when used.
     */
    readonly 'emptySlotsCount': number;
    /**
     * Represents the size of the container. For example, a
     * standard single-block chest has a size of 27, for the 27
     * slots in their inventory.
     * @throws This property can throw when used.
     */
    readonly 'size': number;
    /**
     * @remarks
     * Adds an item to the specified container. Items will be
     * placed in the first available empty slot. (Use
     * {@link mojang-minecraft.InventoryComponentContainer.setItem} if you
     * wish to set items in a particular slot.)
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Gets the item stack for the set of items at the specified
     * slot. If the slot is empty, returns undefined. This method
     * does not change or clear the contents of the specified slot.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws This function can throw errors.
     * @example getItem.js
     * \`\`\`typescript
     *        const itemStack = rightChestContainer.getItem(0);
     *        test.assert(itemStack.id === "apple", "Expected apple");
     *        test.assert(itemStack.amount === 10, "Expected 10 apples");
     * \`\`\`
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws This function can throw errors.
     * @example swapItems.js
     * \`\`\`typescript
     *        rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
     *
     * \`\`\`
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * @param toSlot
     * Zero-based index of the slot to move to.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws This function can throw errors.
     * @example transferItem.js
     * \`\`\`typescript
     *        rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
     *
     * \`\`\`
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
    protected constructor();
}
/**
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
declare class ItemCooldownComponent {
    /**
     * Represents the cooldown category that this item is
     * associated with.
     * @throws This property can throw when used.
     */
    readonly 'cooldownCategory': string;
    /**
     * Amount of time, in ticks, that remain for this item
     * cooldown.
     * @throws This property can throw when used.
     */
    readonly 'cooldownTicks': number;
    /**
     * Identifier of this component. Should always be
     * 'minecraft:cooldown'.
     */
    readonly 'id': string;
    /**
     * @remarks
     * Starts a new cooldown period for this item.
     * @param player
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
    protected constructor();
}
/**
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
declare class ItemDefinitionEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     * @param callback
     */
    subscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): (arg: ItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): void;
    protected constructor();
}
/**
 * Contains information related to a custom item having a data
 * definition change being triggered.
 */
declare class ItemDefinitionTriggeredEvent {
    /**
     * Name of the data-driven item event that is triggering this
     * change.
     */
    readonly 'eventName': string;
    /**
     * The impacted item stack that is being used.
     */
    'item': ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly 'source': Entity;
    protected constructor();
}
/**
 * When present on an item, this item can take damage in the
 * process of being used.
 */
declare class ItemDurabilityComponent {
    /**
     * Returns the current damage level of this particular item.
     */
    'damage': number;
    /**
     * A range of numbers that describes the chance of the item
     * losing durability.
     * @throws This property can throw when used.
     */
    readonly 'damageRange': NumberRange;
    /**
     * Identifier of this component. Should always be
     * 'minecraft:durability'.
     */
    readonly 'id': string;
    /**
     * Represents the amount of damage that this item can take
     * before breaking.
     * @throws This property can throw when used.
     */
    readonly 'maxDurability': number;
    /**
     * @remarks
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking level.
     * @param unbreaking
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be greater than
     * 0.
     * @throws This function can throw errors.
     */
    getDamageChance(unbreaking?: number): number;
    protected constructor();
}
/**
 * When present on an item, this item has applied enchantment
 * effects.
 */
declare class ItemEnchantsComponent {
    /**
     * Returns a collection of the enchantments applied to this
     * item stack.
     */
    'enchantments': EnchantmentList;
    /**
     * Identifier of this component.
     */
    readonly 'id': string;
    /**
     * @remarks
     * Removes all enchantments applied to this item stack.
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    protected constructor();
}
/**
 * When present on an item, this item is consumable by
 * entities.
 */
declare class ItemFoodComponent {
    /**
     * If true, the player can always eat this item (even when not
     * hungry).
     * @throws This property can throw when used.
     */
    readonly 'canAlwaysEat': boolean;
    /**
     * Identifier of this component. Should always be
     * 'minecraft:food'.
     */
    readonly 'id': string;
    /**
     * Represents how much nutrition this food item will give an
     * entity when eaten.
     * @throws This property can throw when used.
     */
    readonly 'nutrition': number;
    /**
     * When an item is eaten, this value is used according to this
     * formula (nutrition * saturation_modifier * 2) to apply a
     * saturation buff.
     * @throws This property can throw when used.
     */
    readonly 'saturationModifier': number;
    /**
     * When specified, converts the active item to the one
     * specified by this property.
     * @throws This property can throw when used.
     */
    readonly 'usingConvertsTo': string;
    protected constructor();
}
/**
 * Represents a collection of all of the available item types
 * in Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
declare class Items {
    /**
     * @remarks
     * Returns an item type given an item type identifier.
     * @param itemId
     * Type of the item to return.
     */
    static get(itemId: string): ItemType;
    protected constructor();
}
/**
 * Defines a collection of items.
 */
declare class ItemStack {
    /**
     * Number of the items in the stack. Valid values range between
     * 0 and 64.
     */
    'amount': number;
    /**
     * A data value used to configure alternate states of the item.
     */
    'data': number;
    /**
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     */
    readonly 'id': string;
    /**
     * Given name of this stack of items.
     */
    'nameTag': string;
    /**
     * @remarks
     * Creates a new instance of a stack of items for use in the
     * world.
     * @param itemType
     * Type of item to create. See the
     * {@link mojang-minecraft.MinecraftItemTypes} enumeration for a list
     * of standard item types in Minecraft experiences.
     * @param amount
     * Number of items to place in the stack, between 1 and 64.
     * Note that certain items can only have one item in the stack.
     * @param data
     * Optional data value used for creating the item, or 0 if no
     * data value is specified.
     */
    constructor(itemType: ItemType, amount?: number, data?: number);
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed. If the component is not present on the item
     * stack, undefined is returned.
     */
    getComponent(componentId: string): any;
    /**
     * @remarks
     * Returns all components that are both present on this item
     * stack and supported by the API.
     */
    getComponents(): any[];
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * item stack.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     * @param loreList
     */
    setLore(loreList: string[]): void;
    /**
     * @remarks
     * Triggers an item type event. For custom items, a number of
     * events are defined in an items' definition for key item
     * behaviors.
     * @param eventName
     * Name of the item type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     */
    triggerEvent(eventName: string): void;
}
/**
 * Represents the type of an item - for example, Wool.
 */
declare class ItemType {
    /**
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     */
    readonly 'id': string;
    protected constructor();
}
/**
 * Contains information related to an item being used.
 */
declare class ItemUseEvent {
    /**
     * The impacted item stack that is being used.
     */
    'item': ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly 'source': Entity;
    protected constructor();
}
/**
 * Manages callbacks that are connected to an item use event.
 */
declare class ItemUseEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     * @param callback
     */
    subscribe(callback: (arg: ItemUseEvent) => void): (arg: ItemUseEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseEvent) => void): void;
    protected constructor();
}
/**
 * Contains information related to an item being used on a
 * block.
 */
declare class ItemUseOnEvent {
    /**
     * The face of the block that an item is being used on.
     */
    readonly 'blockFace': Direction;
    /**
     * Location of the block being impacted.
     */
    readonly 'blockLocation': BlockLocation;
    /**
     * X coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly 'faceLocationX': number;
    /**
     * Y coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly 'faceLocationY': number;
    /**
     * The impacted item stack that is being used on a block.
     */
    'item': ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly 'source': Entity;
    protected constructor();
}
/**
 * Manages callbacks that are connected to an item being used
 * on a block event.
 */
declare class ItemUseOnEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
    protected constructor();
}
/**
 * Contains information related to changes to a lever
 * activating or deactivating.
 */
declare class LeverActionEvent extends BlockEvent {
    /**
     * Block impacted by this event.
     */
    readonly 'block': Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly 'dimension': Dimension;
    /**
     * True if the lever is activated (that is, transmitting
     * power).
     */
    readonly 'isPowered': boolean;
    protected constructor();
}
/**
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 */
declare class LeverActivateEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a lever is moved
     * (activates or deactivates).
     * @param callback
     */
    subscribe(callback: (arg: LeverActionEvent) => void): (arg: LeverActionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a lever is moved
     * (activates or deactivates).
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: LeverActionEvent) => void): void;
    protected constructor();
}
/**
 * Contains a location description that is useful for entities
 * and other items. X, Y, and Z can contain decimal fractions.
 * For integer-based locations useful for blocks, see
 * {@link mojang-minecraft.BlockLocation}.
 */
declare class Location {
    /**
     * X component of this location.
     */
    'x': number;
    /**
     * Y component of this location.
     */
    'y': number;
    /**
     * Z component of this location.
     */
    'z': number;
    /**
     * @remarks
     * Creates a new instance of an abstract location.
     * @param x
     * X position of the location.
     * @param y
     * Y position of the location.
     * @param z
     * Z position of the location.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Compares this Location and another Location to one another.
     * @param other
     * Other location to compare this Location to.
     * @returns
     * True if the two locations are equal.
     */
    equals(other: Location): boolean;
    /**
     * @remarks
     * Determines whether or not two Locations are considered to be
     * near each other.
     * @param other
     * Other Location to compare this Location to.
     * @param epsilon
     * Maximum distance that the Locations can be from each other
     * to be considered nearby.
     * @returns
     * True if the two Locations are within epsilon distance of
     * each other.
     */
    isNear(other: Location, epsilon: number): boolean;
}
declare class MessageReceiveEvent {
    readonly 'id': string;
    readonly 'message': string;
    readonly 'sourceType': MessageSourceType;
    protected constructor();
}
/**
 * Contains definitions of standard Minecraft and Minecraft
 * Education Edition block types.
 */
// tslint:disable-next-line:no-unnecessary-class
declare class MinecraftBlockTypes {
    /**
     * Represents an acacia button within Minecraft.
     */
    static readonly 'acaciaButton': BlockType;
    /**
     * Represents an acacia door within Minecraft.
     */
    static readonly 'acaciaDoor': BlockType;
    /**
     * Represents an acacia fence gate within Minecraft.
     */
    static readonly 'acaciaFenceGate': BlockType;
    /**
     * Represents an acacia pressure plate within Minecraft.
     */
    static readonly 'acaciaPressurePlate': BlockType;
    /**
     * Represents a set of acacia stairs within Minecraft.
     */
    static readonly 'acaciaStairs': BlockType;
    /**
     * Represents an acacia standing sign within Minecraft.
     */
    static readonly 'acaciaStandingSign': BlockType;
    /**
     * Represents an acacia trapdoor within Minecraft.
     */
    static readonly 'acaciaTrapdoor': BlockType;
    /**
     * Represents an acacia wall sign within Minecraft.
     */
    static readonly 'acaciaWallSign': BlockType;
    /**
     * Represents an activator rail within Minecraft.
     */
    static readonly 'activatorRail': BlockType;
    /**
     * Represents an empty space (air) within Minecraft.
     */
    static readonly 'air': BlockType;
    /**
     * Represents an allow block within Minecraft.
     */
    static readonly 'allow': BlockType;
    /**
     * Represents an amethyst block within Minecraft.
     */
    static readonly 'amethystBlock': BlockType;
    /**
     * Represents a cluster of amethyst within Minecraft.
     */
    static readonly 'amethystCluster': BlockType;
    /**
     * Represents ancient debris within Minecraft.
     */
    static readonly 'ancientDebris': BlockType;
    /**
     * Represents andesite stairs within Minecraft.
     */
    static readonly 'andesiteStairs': BlockType;
    /**
     * Represents an anvil within Minecraft.
     */
    static readonly 'anvil': BlockType;
    /**
     * Represents an azalea flowering plant within Minecraft.
     */
    static readonly 'azalea': BlockType;
    /**
     * Represents azalea leaves within Minecraft.
     */
    static readonly 'azaleaLeaves': BlockType;
    /**
     * Represents flowered azalea leaves within Minecraft.
     */
    static readonly 'azaleaLeavesFlowered': BlockType;
    /**
     * Represents a bamboo tree within Minecraft.
     */
    static readonly 'bamboo': BlockType;
    /**
     * Represents a bamboo sapling within Minecraft.
     */
    static readonly 'bambooSapling': BlockType;
    /**
     * Represents a barrel within Minecraft.
     */
    static readonly 'barrel': BlockType;
    /**
     * Represents an invisible but logical barrier within
     * Minecraft.
     */
    static readonly 'barrier': BlockType;
    /**
     * Represents a basalt block within Minecraft.
     */
    static readonly 'basalt': BlockType;
    /**
     * Represents a beacon within Minecraft.
     */
    static readonly 'beacon': BlockType;
    /**
     * Represents a bed within Minecraft.
     */
    static readonly 'bed': BlockType;
    /**
     * Represents a bedrock block within Minecraft.
     */
    static readonly 'bedrock': BlockType;
    /**
     * Represents a beehive within Minecraft.
     */
    static readonly 'beehive': BlockType;
    /**
     * Represents a bee nest within Minecraft.
     */
    static readonly 'beeNest': BlockType;
    /**
     * Represents a beetroot vegetable within Minecraft.
     */
    static readonly 'beetroot': BlockType;
    /**
     * Represents a bell within Minecraft.
     */
    static readonly 'bell': BlockType;
    /**
     * Represents a big dripleaf plant within Minecraft.
     */
    static readonly 'bigDripleaf': BlockType;
    /**
     * Represents a birch button within Minecraft.
     */
    static readonly 'birchButton': BlockType;
    /**
     * Represents a birch door within Minecraft.
     */
    static readonly 'birchDoor': BlockType;
    /**
     * Represents a birch fence gate within Minecraft.
     */
    static readonly 'birchFenceGate': BlockType;
    /**
     * Represents a birch pressure plate within Minecraft.
     */
    static readonly 'birchPressurePlate': BlockType;
    /**
     * Represents a birch stairs block within Minecraft.
     */
    static readonly 'birchStairs': BlockType;
    /**
     * Represents a birch standing sign within Minecraft.
     */
    static readonly 'birchStandingSign': BlockType;
    /**
     * Represents a birch trapdoor within Minecraft.
     */
    static readonly 'birchTrapdoor': BlockType;
    /**
     * Represents a birch wall sign within Minecraft.
     */
    static readonly 'birchWallSign': BlockType;
    /**
     * Represents a black candle within Minecraft.
     */
    static readonly 'blackCandle': BlockType;
    /**
     * Represents a black candle cake within Minecraft.
     */
    static readonly 'blackCandleCake': BlockType;
    /**
     * Represents a black glazed terracotta block within Minecraft.
     */
    static readonly 'blackGlazedTerracotta': BlockType;
    /**
     * Represents a blackstone block within Minecraft.
     */
    static readonly 'blackstone': BlockType;
    /**
     * Represents a blackstone double slab within Minecraft.
     */
    static readonly 'blackstoneDoubleSlab': BlockType;
    /**
     * Represents a blackstone slab within Minecraft.
     */
    static readonly 'blackstoneSlab': BlockType;
    /**
     * Represents blackstone stairs within Minecraft.
     */
    static readonly 'blackstoneStairs': BlockType;
    /**
     * Represents a blackstone wall within Minecraft.
     */
    static readonly 'blackstoneWall': BlockType;
    /**
     * Represents a blast furnace within Minecraft.
     */
    static readonly 'blastFurnace': BlockType;
    /**
     * Represents a blue candle within Minecraft.
     */
    static readonly 'blueCandle': BlockType;
    /**
     * Represents a blue candle cake within Minecraft.
     */
    static readonly 'blueCandleCake': BlockType;
    /**
     * Represents a blue glazed terracotta block within Minecraft.
     */
    static readonly 'blueGlazedTerracotta': BlockType;
    /**
     * Represents a blue ice block within Minecraft.
     */
    static readonly 'blueIce': BlockType;
    /**
     * Represents a bone block within Minecraft.
     */
    static readonly 'boneBlock': BlockType;
    /**
     * Represents an unbreakable border block within Minecraft.
     */
    static readonly 'bookshelf': BlockType;
    /**
     * Represents a border block within Minecraft.
     */
    static readonly 'borderBlock': BlockType;
    /**
     * Represents a brewing stand within Minecraft.
     */
    static readonly 'brewingStand': BlockType;
    /**
     * Represents a block of brick within Minecraft.
     */
    static readonly 'brickBlock': BlockType;
    /**
     * Represents brick stairs within Minecraft.
     */
    static readonly 'brickStairs': BlockType;
    /**
     * Represents a brown candle within Minecraft.
     */
    static readonly 'brownCandle': BlockType;
    /**
     * Represents a brown candle cake within Minecraft.
     */
    static readonly 'brownCandleCake': BlockType;
    /**
     * Represents a brown glazed terracotta block within Minecraft.
     */
    static readonly 'brownGlazedTerracotta': BlockType;
    /**
     * Represents a brown mushroom within Minecraft.
     */
    static readonly 'brownMushroom': BlockType;
    /**
     * Represents a block of brown mushroom within Minecraft.
     */
    static readonly 'brownMushroomBlock': BlockType;
    /**
     * Represents a column of bubbles within Minecraft.
     */
    static readonly 'bubbleColumn': BlockType;
    /**
     * Represents a block of budding amethyst within Minecraft.
     */
    static readonly 'buddingAmethyst': BlockType;
    /**
     * Represents a cactus within Minecraft.
     */
    static readonly 'cactus': BlockType;
    /**
     * Represents a cake within Minecraft.
     */
    static readonly 'cake': BlockType;
    /**
     * Represents a calcite block within Minecraft.
     */
    static readonly 'calcite': BlockType;
    /**
     * Represents a camera within Minecraft Education Edition. It
     * is not available in Minecraft Bedrock Edition.
     */
    static readonly 'camera': BlockType;
    /**
     * Represents a campfire within Minecraft.
     */
    static readonly 'campfire': BlockType;
    /**
     * Represents a candle within Minecraft.
     */
    static readonly 'candle': BlockType;
    /**
     * Represents a cake with candles within Minecraft.
     */
    static readonly 'candleCake': BlockType;
    /**
     * Represents a carpet within Minecraft.
     */
    static readonly 'carpet': BlockType;
    /**
     * Represents carrots within Minecraft.
     */
    static readonly 'carrots': BlockType;
    /**
     * Represents a cartography table block within Minecraft.
     */
    static readonly 'cartographyTable': BlockType;
    /**
     * Represents a carved pumpkin within Minecraft.
     */
    static readonly 'carvedPumpkin': BlockType;
    /**
     * Represents a cauldron within Minecraft.
     */
    static readonly 'cauldron': BlockType;
    /**
     * Represents a set of cave vines within Minecraft.
     */
    static readonly 'caveVines': BlockType;
    /**
     * Represents the body of a set of cave vines with berries
     * within Minecraft.
     */
    static readonly 'caveVinesBodyWithBerries': BlockType;
    /**
     * Represents the head of a set of cave vines with berries
     * within Minecraft.
     */
    static readonly 'caveVinesHeadWithBerries': BlockType;
    /**
     * Represents a metallic chain within Minecraft.
     */
    static readonly 'chain': BlockType;
    /**
     * Represents a block that gives off heat but not light, within
     * Minecraft Education Edition or Bedrock Edition with
     * Education features.
     */
    static readonly 'chainCommandBlock': BlockType;
    /**
     * Represents a chemical heat block within Minecraft.
     */
    static readonly 'chemicalHeat': BlockType;
    /**
     * Represents a chemistry table within Minecraft Education
     * experiences.
     */
    static readonly 'chemistryTable': BlockType;
    /**
     * Represents a chest within Minecraft.
     */
    static readonly 'chest': BlockType;
    /**
     * Represents a set of chiseled deepslate within Minecraft.
     */
    static readonly 'chiseledDeepslate': BlockType;
    /**
     * Represents a block of chiseled nether bricks within
     * Minecraft.
     */
    static readonly 'chiseledNetherBricks': BlockType;
    /**
     * Represents a block of chiseled polished blackstone within
     * Minecraft.
     */
    static readonly 'chiseledPolishedBlackstone': BlockType;
    /**
     * Represents a chorus flower within Minecraft.
     */
    static readonly 'chorusFlower': BlockType;
    /**
     * Represents a chorus plant within Minecraft.
     */
    static readonly 'chorusPlant': BlockType;
    /**
     * Represents a block of clay within Minecraft.
     */
    static readonly 'clay': BlockType;
    static readonly 'clientRequestPlaceholderBlock': BlockType;
    /**
     * Represents a block of solid coal within Minecraft.
     */
    static readonly 'coalBlock': BlockType;
    /**
     * Represents a block with embedded coal ore within Minecraft.
     */
    static readonly 'coalOre': BlockType;
    /**
     * Represents a block of cobbled deepslate within Minecraft.
     */
    static readonly 'cobbledDeepslate': BlockType;
    /**
     * Represents a double slab of cobbled deepslate within
     * Minecraft.
     */
    static readonly 'cobbledDeepslateDoubleSlab': BlockType;
    /**
     * Represents a slab of deepslate within Minecraft.
     */
    static readonly 'cobbledDeepslateSlab': BlockType;
    /**
     * Represents cobbled deepslate stairs within Minecraft.
     */
    static readonly 'cobbledDeepslateStairs': BlockType;
    /**
     * Represents a cobbled deepslate wall within Minecraft.
     */
    static readonly 'cobbledDeepslateWall': BlockType;
    /**
     * Represents a block of cobblestone within Minecraft.
     */
    static readonly 'cobblestone': BlockType;
    /**
     * Represents a wall of cobblestone within Minecraft.
     */
    static readonly 'cobblestoneWall': BlockType;
    /**
     * Represents a set of cocoa beans (typically on a tree) within
     * Minecraft.
     */
    static readonly 'cocoa': BlockType;
    /**
     * Represents blue/purple torches within Minecraft.
     */
    static readonly 'coloredTorchBp': BlockType;
    /**
     * Represents red/green torches within Minecraft.
     */
    static readonly 'coloredTorchRg': BlockType;
    /**
     * Represents a block that can run commands within Minecraft.
     */
    static readonly 'commandBlock': BlockType;
    /**
     * Represents a composter block within Minecraft.
     */
    static readonly 'composter': BlockType;
    /**
     * Represents a block of concrete powder within Minecraft.
     */
    static readonly 'concrete': BlockType;
    /**
     * Represents a block of concrete powder within Minecraft.
     */
    static readonly 'concretePowder': BlockType;
    /**
     * Represents a conduit block within Minecraft.
     */
    static readonly 'conduit': BlockType;
    /**
     * Represents a solid block of copper within Minecraft.
     */
    static readonly 'copperBlock': BlockType;
    /**
     * Represents a block with embedded copper ore within
     * Minecraft.
     */
    static readonly 'copperOre': BlockType;
    /**
     * Represents coral within Minecraft.
     */
    static readonly 'coral': BlockType;
    /**
     * Represents a solid block of coral within Minecraft.
     */
    static readonly 'coralBlock': BlockType;
    /**
     * Represents a fan formation of coral within Minecraft.
     */
    static readonly 'coralFan': BlockType;
    /**
     * Represents a fan formation of dead coral within Minecraft.
     */
    static readonly 'coralFanDead': BlockType;
    /**
     * Represents a hanging fan formation of coral within
     * Minecraft.
     */
    static readonly 'coralFanHang': BlockType;
    /**
     * Represents an alternate hanging fan formation of coral (#2)
     * within Minecraft.
     */
    static readonly 'coralFanHang2': BlockType;
    /**
     * Represents an alternate hanging fan formation of coral (#3)
     * within Minecraft.
     */
    static readonly 'coralFanHang3': BlockType;
    /**
     * Represents a block of cracked deepslate bricks within
     * Minecraft.
     */
    static readonly 'crackedDeepslateBricks': BlockType;
    /**
     * Represents tiles of cracked deepslate within Minecraft.
     */
    static readonly 'crackedDeepslateTiles': BlockType;
    /**
     * Represents a block of cracked nether bricks within
     * Minecraft.
     */
    static readonly 'crackedNetherBricks': BlockType;
    /**
     * Represents a block of cracked and polished blackstone bricks
     * within Minecraft.
     */
    static readonly 'crackedPolishedBlackstoneBricks': BlockType;
    /**
     * Represents a crafting table within Minecraft.
     */
    static readonly 'craftingTable': BlockType;
    /**
     * Represents a crimson button within Minecraft.
     */
    static readonly 'crimsonButton': BlockType;
    /**
     * Represents a crimson door within Minecraft.
     */
    static readonly 'crimsonDoor': BlockType;
    /**
     * Represents a crimson double slab within Minecraft.
     */
    static readonly 'crimsonDoubleSlab': BlockType;
    /**
     * Represents a crimson fence within Minecraft.
     */
    static readonly 'crimsonFence': BlockType;
    /**
     * Represents a crimson fence gate within Minecraft.
     */
    static readonly 'crimsonFenceGate': BlockType;
    /**
     * Represents a crimson fungus within Minecraft.
     */
    static readonly 'crimsonFungus': BlockType;
    /**
     * Represents crimson hyphae within Minecraft.
     */
    static readonly 'crimsonHyphae': BlockType;
    /**
     * Represents crimson nylium within Minecraft.
     */
    static readonly 'crimsonNylium': BlockType;
    /**
     * Represents a set of crimson planks within Minecraft.
     */
    static readonly 'crimsonPlanks': BlockType;
    /**
     * Represents a crimson pressure plate within Minecraft.
     */
    static readonly 'crimsonPressurePlate': BlockType;
    /**
     * Represents a set of crimson roots within Minecraft.
     */
    static readonly 'crimsonRoots': BlockType;
    /**
     * Represents a crimson slab within Minecraft.
     */
    static readonly 'crimsonSlab': BlockType;
    /**
     * Represents a set of crimson stairs within Minecraft.
     */
    static readonly 'crimsonStairs': BlockType;
    /**
     * Represents a crimson standing sign within Minecraft.
     */
    static readonly 'crimsonStandingSign': BlockType;
    /**
     * Represents a crimson stem within Minecraft.
     */
    static readonly 'crimsonStem': BlockType;
    /**
     * Represents a crimson trapdoor within Minecraft.
     */
    static readonly 'crimsonTrapdoor': BlockType;
    /**
     * Represents a crimson wall sign within Minecraft.
     */
    static readonly 'crimsonWallSign': BlockType;
    /**
     * Represents crying obsidian within Minecraft.
     */
    static readonly 'cryingObsidian': BlockType;
    /**
     * Represents a cut copper block within Minecraft.
     */
    static readonly 'cutCopper': BlockType;
    /**
     * Represents a cut copper slab within Minecraft.
     */
    static readonly 'cutCopperSlab': BlockType;
    /**
     * Represents a set of cut copper stairs within Minecraft.
     */
    static readonly 'cutCopperStairs': BlockType;
    /**
     * Represents a cyan-colored candle within Minecraft.
     */
    static readonly 'cyanCandle': BlockType;
    /**
     * Represents a cake with a cyan-colored candle within
     * Minecraft.
     */
    static readonly 'cyanCandleCake': BlockType;
    /**
     * Represents a block of cyan-colored glazed terracotta within
     * Minecraft.
     */
    static readonly 'cyanGlazedTerracotta': BlockType;
    /**
     * Represents a dark oak button within Minecraft.
     */
    static readonly 'darkOakButton': BlockType;
    /**
     * Represents a dark oak door within Minecraft.
     */
    static readonly 'darkOakDoor': BlockType;
    /**
     * Represents a dark oak fence gate within Minecraft.
     */
    static readonly 'darkOakFenceGate': BlockType;
    /**
     * Represents a dark oak pressure plate within Minecraft.
     */
    static readonly 'darkOakPressurePlate': BlockType;
    /**
     * Represents a set of dark oak stairs within Minecraft.
     */
    static readonly 'darkOakStairs': BlockType;
    /**
     * Represents a dark oak standing sign within Minecraft.
     */
    static readonly 'darkoakStandingSign': BlockType;
    /**
     * Represents a dark oak trapdoor within Minecraft.
     */
    static readonly 'darkOakTrapdoor': BlockType;
    /**
     * Represents a dark oak wall sign within Minecraft.
     */
    static readonly 'darkoakWallSign': BlockType;
    /**
     * Represents a set of dark prismarine stairs within Minecraft.
     */
    static readonly 'darkPrismarineStairs': BlockType;
    /**
     * Represents a daylight detector within Minecraft.
     */
    static readonly 'daylightDetector': BlockType;
    /**
     * Represents an inverted daylight detector within Minecraft.
     */
    static readonly 'daylightDetectorInverted': BlockType;
    /**
     * Represents a dead bush within Minecraft.
     */
    static readonly 'deadbush': BlockType;
    /**
     * Represents a block of deepslate within Minecraft.
     */
    static readonly 'deepslate': BlockType;
    /**
     * Represents a double slab of deepslate brick within
     * Minecraft.
     */
    static readonly 'deepslateBrickDoubleSlab': BlockType;
    /**
     * Represents a block of deepslate bricks within Minecraft.
     */
    static readonly 'deepslateBricks': BlockType;
    /**
     * Represents a slab of deepslate brick within Minecraft.
     */
    static readonly 'deepslateBrickSlab': BlockType;
    /**
     * Represents a set of deepslate brick stairs within Minecraft.
     */
    static readonly 'deepslateBrickStairs': BlockType;
    /**
     * Represents a deepslate brick wall within Minecraft.
     */
    static readonly 'deepslateBrickWall': BlockType;
    /**
     * Represents a block of deepslate with embedded coal ore
     * within Minecraft.
     */
    static readonly 'deepslateCoalOre': BlockType;
    /**
     * Represents a block of deepslate with embedded copper ore
     * within Minecraft.
     */
    static readonly 'deepslateCopperOre': BlockType;
    /**
     * Represents a block of deepslate with embedded diamond ore
     * within Minecraft.
     */
    static readonly 'deepslateDiamondOre': BlockType;
    /**
     * Represents a block of deepslate with embedded emerald ore
     * within Minecraft.
     */
    static readonly 'deepslateEmeraldOre': BlockType;
    /**
     * Represents a block of deepslate with embedded gold ore
     * within Minecraft.
     */
    static readonly 'deepslateGoldOre': BlockType;
    /**
     * Represents a block of deepslate with embedded iron ore
     * within Minecraft.
     */
    static readonly 'deepslateIronOre': BlockType;
    /**
     * Represents a block of deepslate with embedded lapis lazuli
     * ore within Minecraft.
     */
    static readonly 'deepslateLapisOre': BlockType;
    /**
     * Represents a block of deepslate with embedded redstone ore
     * within Minecraft.
     */
    static readonly 'deepslateRedstoneOre': BlockType;
    /**
     * Represents a double slab of tiled deepslate within
     * Minecraft.
     */
    static readonly 'deepslateTileDoubleSlab': BlockType;
    /**
     * Represents a set of deepslate tiles within Minecraft.
     */
    static readonly 'deepslateTiles': BlockType;
    /**
     * Represents a slab of deepslate tiles within Minecraft.
     */
    static readonly 'deepslateTileSlab': BlockType;
    /**
     * Represents a set of deepslate tile stairs within Minecraft.
     */
    static readonly 'deepslateTileStairs': BlockType;
    /**
     * Represents a wall of deepslate tile within Minecraft.
     */
    static readonly 'deepslateTileWall': BlockType;
    /**
     * Represents a logical but generally invisible Deny logic
     * block within Minecraft.
     */
    static readonly 'deny': BlockType;
    /**
     * Represents a detector rail within Minecraft.
     */
    static readonly 'detectorRail': BlockType;
    /**
     * Represents a block of diamond within Minecraft.
     */
    static readonly 'diamondBlock': BlockType;
    /**
     * Represents a block with embedded diamond ore within
     * Minecraft.
     */
    static readonly 'diamondOre': BlockType;
    /**
     * Represents a set of diorite stairs within Minecraft.
     */
    static readonly 'dioriteStairs': BlockType;
    /**
     * Represents a block of dirt within Minecraft.
     */
    static readonly 'dirt': BlockType;
    /**
     * Represents a block of dirt with roots within Minecraft.
     */
    static readonly 'dirtWithRoots': BlockType;
    /**
     * Represents a dispenser within Minecraft.
     */
    static readonly 'dispenser': BlockType;
    /**
     * Represents a slab of double cut copper within Minecraft.
     */
    static readonly 'doubleCutCopperSlab': BlockType;
    /**
     * Represents a double plant within Minecraft.
     */
    static readonly 'doublePlant': BlockType;
    /**
     * Represents a double slab of stone within Minecraft.
     */
    static readonly 'doubleStoneSlab': BlockType;
    /**
     * Represents an alternate double slab of stone (#2) within
     * Minecraft.
     */
    static readonly 'doubleStoneSlab2': BlockType;
    /**
     * Represents an alternate double slab of stone (#3) within
     * Minecraft.
     */
    static readonly 'doubleStoneSlab3': BlockType;
    /**
     * Represents an alternate double slab of stone (#4) within
     * Minecraft.
     */
    static readonly 'doubleStoneSlab4': BlockType;
    /**
     * Represents a double slab of wood within Minecraft.
     */
    static readonly 'doubleWoodenSlab': BlockType;
    /**
     * Represents a dragon egg within Minecraft.
     */
    static readonly 'dragonEgg': BlockType;
    /**
     * Represents a block of dried kelp within Minecraft.
     */
    static readonly 'driedKelpBlock': BlockType;
    /**
     * Represents a block of dripstone within Minecraft.
     */
    static readonly 'dripstoneBlock': BlockType;
    /**
     * Represents a dropper within Minecraft.
     */
    static readonly 'dropper': BlockType;
    /**
     * Represents an element in Minecraft Education experiences.
     */
    static readonly 'element0': BlockType;
    /**
     * Represents the hydrogen element in Minecraft Education
     * experiences.
     */
    static readonly 'element1': BlockType;
    /**
     * Represents the neon element in Minecraft Education
     * experiences.
     */
    static readonly 'element10': BlockType;
    /**
     * Represents the fermium element in Minecraft Education
     * experiences.
     */
    static readonly 'element100': BlockType;
    /**
     * Represents the mendelevium element in Minecraft Education
     * experiences.
     */
    static readonly 'element101': BlockType;
    /**
     * Represents the nobelium element in Minecraft Education
     * experiences.
     */
    static readonly 'element102': BlockType;
    /**
     * Represents the lawrencium element in Minecraft Education
     * experiences.
     */
    static readonly 'element103': BlockType;
    /**
     * Represents the rutherfordium element in Minecraft Education
     * experiences.
     */
    static readonly 'element104': BlockType;
    /**
     * Represents the dubnium element in Minecraft Education
     * experiences.
     */
    static readonly 'element105': BlockType;
    /**
     * Represents the seaborgium element in Minecraft Education
     * experiences.
     */
    static readonly 'element106': BlockType;
    /**
     * Represents the bohrium element in Minecraft Education
     * experiences.
     */
    static readonly 'element107': BlockType;
    /**
     * Represents the hassium element in Minecraft Education
     * experiences.
     */
    static readonly 'element108': BlockType;
    /**
     * Represents the meitnerium element in Minecraft Education
     * experiences.
     */
    static readonly 'element109': BlockType;
    /**
     * Represents the sodium element in Minecraft Education
     * experiences.
     */
    static readonly 'element11': BlockType;
    /**
     * Represents the darmstadtium element in Minecraft Education
     * experiences.
     */
    static readonly 'element110': BlockType;
    /**
     * Represents the roentgenium element in Minecraft Education
     * experiences.
     */
    static readonly 'element111': BlockType;
    /**
     * Represents the copernicium element in Minecraft Education
     * experiences.
     */
    static readonly 'element112': BlockType;
    /**
     * Represents the nihonium element in Minecraft Education
     * experiences.
     */
    static readonly 'element113': BlockType;
    /**
     * Represents the flerovium element in Minecraft Education
     * experiences.
     */
    static readonly 'element114': BlockType;
    /**
     * Represents the moscovium element in Minecraft Education
     * experiences.
     */
    static readonly 'element115': BlockType;
    /**
     * Represents the livermorium element in Minecraft Education
     * experiences.
     */
    static readonly 'element116': BlockType;
    /**
     * Represents the tennessine element in Minecraft Education
     * experiences.
     */
    static readonly 'element117': BlockType;
    /**
     * Represents the oganesson element in Minecraft Education
     * experiences.
     */
    static readonly 'element118': BlockType;
    /**
     * Represents the magnesium element in Minecraft Education
     * experiences.
     */
    static readonly 'element12': BlockType;
    /**
     * Represents the aluminum element in Minecraft Education
     * experiences.
     */
    static readonly 'element13': BlockType;
    /**
     * Represents the silicon element in Minecraft Education
     * experiences.
     */
    static readonly 'element14': BlockType;
    /**
     * Represents the phosphorus element in Minecraft Education
     * experiences.
     */
    static readonly 'element15': BlockType;
    /**
     * Represents the sulfur element in Minecraft Education
     * experiences.
     */
    static readonly 'element16': BlockType;
    /**
     * Represents the chlorine element in Minecraft Education
     * experiences.
     */
    static readonly 'element17': BlockType;
    /**
     * Represents the argon element in Minecraft Education
     * experiences.
     */
    static readonly 'element18': BlockType;
    /**
     * Represents the potassium element in Minecraft Education
     * experiences.
     */
    static readonly 'element19': BlockType;
    /**
     * Represents the helium element in Minecraft Education
     * experiences.
     */
    static readonly 'element2': BlockType;
    /**
     * Represents the calcium element in Minecraft Education
     * experiences.
     */
    static readonly 'element20': BlockType;
    /**
     * Represents the scandium element in Minecraft Education
     * experiences.
     */
    static readonly 'element21': BlockType;
    /**
     * Represents the titanium element in Minecraft Education
     * experiences.
     */
    static readonly 'element22': BlockType;
    /**
     * Represents the vanadium element in Minecraft Education
     * experiences.
     */
    static readonly 'element23': BlockType;
    /**
     * Represents the chromium element in Minecraft Education
     * experiences.
     */
    static readonly 'element24': BlockType;
    /**
     * Represents the manganese element in Minecraft Education
     * experiences.
     */
    static readonly 'element25': BlockType;
    /**
     * Represents the iron element in Minecraft Education
     * experiences.
     */
    static readonly 'element26': BlockType;
    /**
     * Represents the cobalt element in Minecraft Education
     * experiences.
     */
    static readonly 'element27': BlockType;
    /**
     * Represents the nickel element in Minecraft Education
     * experiences.
     */
    static readonly 'element28': BlockType;
    /**
     * Represents the copper element in Minecraft Education
     * experiences.
     */
    static readonly 'element29': BlockType;
    /**
     * Represents a lithium element in Minecraft Education
     * experiences.
     */
    static readonly 'element3': BlockType;
    /**
     * Represents the zinc element in Minecraft Education
     * experiences.
     */
    static readonly 'element30': BlockType;
    /**
     * Represents the gallium element in Minecraft Education
     * experiences.
     */
    static readonly 'element31': BlockType;
    /**
     * Represents a germanium element in Minecraft Education
     * experiences.
     */
    static readonly 'element32': BlockType;
    /**
     * Represents the arsenic element in Minecraft Education
     * experiences.
     */
    static readonly 'element33': BlockType;
    /**
     * Represents the selenium element in Minecraft Education
     * experiences.
     */
    static readonly 'element34': BlockType;
    /**
     * Represents the bromine element in Minecraft Education
     * experiences.
     */
    static readonly 'element35': BlockType;
    /**
     * Represents the krypton element in Minecraft Education
     * experiences.
     */
    static readonly 'element36': BlockType;
    /**
     * Represents the rubidium element in Minecraft Education
     * experiences.
     */
    static readonly 'element37': BlockType;
    /**
     * Represents the strontium element in Minecraft Education
     * experiences.
     */
    static readonly 'element38': BlockType;
    /**
     * Represents the yttrium element in Minecraft Education
     * experiences.
     */
    static readonly 'element39': BlockType;
    /**
     * Represents a beryllium element in Minecraft Education
     * experiences.
     */
    static readonly 'element4': BlockType;
    /**
     * Represents the zirconium element in Minecraft Education
     * experiences.
     */
    static readonly 'element40': BlockType;
    /**
     * Represents the niobium element in Minecraft Education
     * experiences.
     */
    static readonly 'element41': BlockType;
    /**
     * Represents the molybdenum element in Minecraft Education
     * experiences.
     */
    static readonly 'element42': BlockType;
    /**
     * Represents the technetium element in Minecraft Education
     * experiences.
     */
    static readonly 'element43': BlockType;
    /**
     * Represents the ruthenium element in Minecraft Education
     * experiences.
     */
    static readonly 'element44': BlockType;
    /**
     * Represents the rhodium element in Minecraft Education
     * experiences.
     */
    static readonly 'element45': BlockType;
    /**
     * Represents the palladium element in Minecraft Education
     * experiences.
     */
    static readonly 'element46': BlockType;
    /**
     * Represents the silver element in Minecraft Education
     * experiences.
     */
    static readonly 'element47': BlockType;
    /**
     * Represents the cadmium element in Minecraft Education
     * experiences.
     */
    static readonly 'element48': BlockType;
    /**
     * Represents the indium element in Minecraft Education
     * experiences.
     */
    static readonly 'element49': BlockType;
    /**
     * Represents the boron element in Minecraft Education
     * experiences.
     */
    static readonly 'element5': BlockType;
    /**
     * Represents the tin element in Minecraft Education
     * experiences.
     */
    static readonly 'element50': BlockType;
    /**
     * Represents the antimony element in Minecraft Education
     * experiences.
     */
    static readonly 'element51': BlockType;
    /**
     * Represents the tellurium element in Minecraft Education
     * experiences.
     */
    static readonly 'element52': BlockType;
    /**
     * Represents the iodine element in Minecraft Education
     * experiences.
     */
    static readonly 'element53': BlockType;
    /**
     * Represents the xenon element in Minecraft Education
     * experiences.
     */
    static readonly 'element54': BlockType;
    /**
     * Represents the cesium element in Minecraft Education
     * experiences.
     */
    static readonly 'element55': BlockType;
    /**
     * Represents the barium element in Minecraft Education
     * experiences.
     */
    static readonly 'element56': BlockType;
    /**
     * Represents the lanthanum element in Minecraft Education
     * experiences.
     */
    static readonly 'element57': BlockType;
    /**
     * Represents the cerium element in Minecraft Education
     * experiences.
     */
    static readonly 'element58': BlockType;
    /**
     * Represents the praseodymium element in Minecraft Education
     * experiences.
     */
    static readonly 'element59': BlockType;
    /**
     * Represents the carbon element in Minecraft Education
     * experiences.
     */
    static readonly 'element6': BlockType;
    /**
     * Represents the neodymium element in Minecraft Education
     * experiences.
     */
    static readonly 'element60': BlockType;
    /**
     * Represents the promethium element in Minecraft Education
     * experiences.
     */
    static readonly 'element61': BlockType;
    /**
     * Represents the samarium element in Minecraft Education
     * experiences.
     */
    static readonly 'element62': BlockType;
    /**
     * Represents the europium element in Minecraft Education
     * experiences.
     */
    static readonly 'element63': BlockType;
    /**
     * Represents the gadolinium element in Minecraft Education
     * experiences.
     */
    static readonly 'element64': BlockType;
    /**
     * Represents a terbium element in Minecraft Education
     * experiences.
     */
    static readonly 'element65': BlockType;
    /**
     * Represents the dysprosium element in Minecraft Education
     * experiences.
     */
    static readonly 'element66': BlockType;
    /**
     * Represents the holmium element in Minecraft Education
     * experiences.
     */
    static readonly 'element67': BlockType;
    /**
     * Represents the erbium element in Minecraft Education
     * experiences.
     */
    static readonly 'element68': BlockType;
    /**
     * Represents the thulium element in Minecraft Education
     * experiences.
     */
    static readonly 'element69': BlockType;
    /**
     * Represents the nitrogen element in Minecraft Education
     * experiences.
     */
    static readonly 'element7': BlockType;
    /**
     * Represents the ytterbium element in Minecraft Education
     * experiences.
     */
    static readonly 'element70': BlockType;
    /**
     * Represents the lutetium element in Minecraft Education
     * experiences.
     */
    static readonly 'element71': BlockType;
    /**
     * Represents a hafnium element in Minecraft Education
     * experiences.
     */
    static readonly 'element72': BlockType;
    /**
     * Represents the tantalum element in Minecraft Education
     * experiences.
     */
    static readonly 'element73': BlockType;
    /**
     * Represents the tungsten element in Minecraft Education
     * experiences.
     */
    static readonly 'element74': BlockType;
    /**
     * Represents the rhenium element in Minecraft Education
     * experiences.
     */
    static readonly 'element75': BlockType;
    /**
     * Represents the osmium element in Minecraft Education
     * experiences.
     */
    static readonly 'element76': BlockType;
    /**
     * Represents the iridium element in Minecraft Education
     * experiences.
     */
    static readonly 'element77': BlockType;
    /**
     * Represents the platinum element in Minecraft Education
     * experiences.
     */
    static readonly 'element78': BlockType;
    /**
     * Represents the gold element in Minecraft Education
     * experiences.
     */
    static readonly 'element79': BlockType;
    /**
     * Represents the oxygen element in Minecraft Education
     * experiences.
     */
    static readonly 'element8': BlockType;
    /**
     * Represents the mercury element in Minecraft Education
     * experiences.
     */
    static readonly 'element80': BlockType;
    /**
     * Represents the thallium element in Minecraft Education
     * experiences.
     */
    static readonly 'element81': BlockType;
    /**
     * Represents the lead element in Minecraft Education
     * experiences.
     */
    static readonly 'element82': BlockType;
    /**
     * Represents the bismuth element in Minecraft Education
     * experiences.
     */
    static readonly 'element83': BlockType;
    /**
     * Represents the polonium element in Minecraft Education
     * experiences.
     */
    static readonly 'element84': BlockType;
    /**
     * Represents the astatine element in Minecraft Education
     * experiences.
     */
    static readonly 'element85': BlockType;
    /**
     * Represents the radon element in Minecraft Education
     * experiences.
     */
    static readonly 'element86': BlockType;
    /**
     * Represents the francium element in Minecraft Education
     * experiences.
     */
    static readonly 'element87': BlockType;
    /**
     * Represents the radium element in Minecraft Education
     * experiences.
     */
    static readonly 'element88': BlockType;
    /**
     * Represents the actinium element in Minecraft Education
     * experiences.
     */
    static readonly 'element89': BlockType;
    /**
     * Represents the fluorine element in Minecraft Education
     * experiences.
     */
    static readonly 'element9': BlockType;
    /**
     * Represents the thorium element in Minecraft Education
     * experiences.
     */
    static readonly 'element90': BlockType;
    /**
     * Represents the protactinium element in Minecraft Education
     * experiences.
     */
    static readonly 'element91': BlockType;
    /**
     * Represents the uranium element in Minecraft Education
     * experiences.
     */
    static readonly 'element92': BlockType;
    /**
     * Represents the neptunium element in Minecraft Education
     * experiences.
     */
    static readonly 'element93': BlockType;
    /**
     * Represents the plutonium element in Minecraft Education
     * experiences.
     */
    static readonly 'element94': BlockType;
    /**
     * Represents the americium element in Minecraft Education
     * experiences.
     */
    static readonly 'element95': BlockType;
    /**
     * Represents the curium element in Minecraft Education
     * experiences.
     */
    static readonly 'element96': BlockType;
    /**
     * Represents the berkelium element in Minecraft Education
     * experiences.
     */
    static readonly 'element97': BlockType;
    /**
     * Represents the californium element in Minecraft Education
     * experiences.
     */
    static readonly 'element98': BlockType;
    /**
     * Represents the einsteinium element in Minecraft Education
     * experiences.
     */
    static readonly 'element99': BlockType;
    /**
     * Represents a block of emerald within Minecraft.
     */
    static readonly 'emeraldBlock': BlockType;
    /**
     * Represents a block with embedded emerald ore within
     * Minecraft.
     */
    static readonly 'emeraldOre': BlockType;
    /**
     * Represents an enchanting table within Minecraft.
     */
    static readonly 'enchantingTable': BlockType;
    /**
     * Represents an end bricks block within Minecraft.
     */
    static readonly 'endBricks': BlockType;
    /**
     * Represents a set of end brick stairs within Minecraft.
     */
    static readonly 'endBrickStairs': BlockType;
    /**
     * Represents an ender chest within Minecraft.
     */
    static readonly 'enderChest': BlockType;
    /**
     * Represents an end gateway within Minecraft.
     */
    static readonly 'endGateway': BlockType;
    /**
     * Represents an end portal block within Minecraft.
     */
    static readonly 'endPortal': BlockType;
    /**
     * Represents an end portal frame within Minecraft.
     */
    static readonly 'endPortalFrame': BlockType;
    /**
     * Represents an end rod within Minecraft.
     */
    static readonly 'endRod': BlockType;
    /**
     * Represents an end stone block within Minecraft.
     */
    static readonly 'endStone': BlockType;
    /**
     * Represents a block of exposed copper within Minecraft.
     */
    static readonly 'exposedCopper': BlockType;
    /**
     * Represents a block of exposed cut copper within Minecraft.
     */
    static readonly 'exposedCutCopper': BlockType;
    /**
     * Represents a slab of exposed cut copper within Minecraft.
     */
    static readonly 'exposedCutCopperSlab': BlockType;
    /**
     * Represents a set of exposed cut copper stairs within
     * Minecraft.
     */
    static readonly 'exposedCutCopperStairs': BlockType;
    /**
     * Represents a double slab of exposed cut copper within
     * Minecraft.
     */
    static readonly 'exposedDoubleCutCopperSlab': BlockType;
    /**
     * Represents a farmland block within Minecraft.
     */
    static readonly 'farmland': BlockType;
    /**
     * Represents a fence within Minecraft.
     */
    static readonly 'fence': BlockType;
    /**
     * Represents a fence gate within Minecraft.
     */
    static readonly 'fenceGate': BlockType;
    /**
     * Represents a fire within Minecraft.
     */
    static readonly 'fire': BlockType;
    /**
     * Represents a fletching table within Minecraft.
     */
    static readonly 'fletchingTable': BlockType;
    /**
     * Represents a flowering azalea plant within Minecraft.
     */
    static readonly 'floweringAzalea': BlockType;
    /**
     * Represents a flower pot within Minecraft.
     */
    static readonly 'flowerPot': BlockType;
    /**
     * Represents flowing lava within Minecraft.
     */
    static readonly 'flowingLava': BlockType;
    /**
     * Represents flowing water within Minecraft.
     */
    static readonly 'flowingWater': BlockType;
    /**
     * Represents a frame within Minecraft.
     */
    static readonly 'frame': BlockType;
    static readonly 'frogSpawn': BlockType;
    /**
     * Represents a frosted ice block within Minecraft.
     */
    static readonly 'frostedIce': BlockType;
    /**
     * Represents a furnace within Minecraft.
     */
    static readonly 'furnace': BlockType;
    /**
     * Represents a block of gilded blackstone within Minecraft.
     */
    static readonly 'gildedBlackstone': BlockType;
    /**
     * Represents a glass block within Minecraft.
     */
    static readonly 'glass': BlockType;
    /**
     * Represents a pane of glass within Minecraft.
     */
    static readonly 'glassPane': BlockType;
    /**
     * Represents a glowing frame within Minecraft.
     */
    static readonly 'glowFrame': BlockType;
    /**
     * Represents a glowing obsidian block within Minecraft.
     */
    static readonly 'glowingobsidian': BlockType;
    /**
     * Represents glow lichen within Minecraft.
     */
    static readonly 'glowLichen': BlockType;
    /**
     * Represents a block of glowstone within Minecraft.
     */
    static readonly 'glowstone': BlockType;
    /**
     * Represents a gold block within Minecraft.
     */
    static readonly 'goldBlock': BlockType;
    /**
     * Represents a golden rail element within Minecraft.
     */
    static readonly 'goldenRail': BlockType;
    /**
     * Represents a block with embedded gold ore within Minecraft.
     */
    static readonly 'goldOre': BlockType;
    /**
     * Represents a set of granite stairs within Minecraft.
     */
    static readonly 'graniteStairs': BlockType;
    /**
     * Represents a block of dirt and grass within Minecraft.
     */
    static readonly 'grass': BlockType;
    /**
     * Represents a block of dirt and grass with a path within
     * Minecraft.
     */
    static readonly 'grassPath': BlockType;
    /**
     * Represents a block of gravel within Minecraft.
     */
    static readonly 'gravel': BlockType;
    /**
     * Represents a gray-colored candle within Minecraft.
     */
    static readonly 'grayCandle': BlockType;
    /**
     * Represents a cake with gray-colored candle within Minecraft.
     */
    static readonly 'grayCandleCake': BlockType;
    /**
     * Represents a gray-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly 'grayGlazedTerracotta': BlockType;
    /**
     * Represents a green-colored candle within Minecraft.
     */
    static readonly 'greenCandle': BlockType;
    /**
     * Represents a green-colored candle cake within Minecraft.
     */
    static readonly 'greenCandleCake': BlockType;
    /**
     * Represents a green block of glazed terracotta within
     * Minecraft.
     */
    static readonly 'greenGlazedTerracotta': BlockType;
    /**
     * Represents a grindstone within Minecraft.
     */
    static readonly 'grindstone': BlockType;
    /**
     * Represents a set of hanging roots within Minecraft.
     */
    static readonly 'hangingRoots': BlockType;
    /**
     * Represents a block of hardened clay within Minecraft.
     */
    static readonly 'hardenedClay': BlockType;
    /**
     * Represents a block of hard glass within Minecraft.
     */
    static readonly 'hardGlass': BlockType;
    /**
     * Represents a pane of hard glass within Minecraft.
     */
    static readonly 'hardGlassPane': BlockType;
    /**
     * Represents a stained hard glass block within Minecraft.
     */
    static readonly 'hardStainedGlass': BlockType;
    /**
     * Represents a stained pane of hard glass within Minecraft.
     */
    static readonly 'hardStainedGlassPane': BlockType;
    /**
     * Represents a block of hay within Minecraft.
     */
    static readonly 'hayBlock': BlockType;
    /**
     * Represents a heavy weighted pressure plate within Minecraft.
     */
    static readonly 'heavyWeightedPressurePlate': BlockType;
    /**
     * Represents a block of honey within Minecraft.
     */
    static readonly 'honeyBlock': BlockType;
    /**
     * Represents a honeycomb block within Minecraft.
     */
    static readonly 'honeycombBlock': BlockType;
    /**
     * Represents a hopper within Minecraft.
     */
    static readonly 'hopper': BlockType;
    /**
     * Represents a block of ice within Minecraft.
     */
    static readonly 'ice': BlockType;
    /**
     * Represents an infested block of deepslate within Minecraft.
     */
    static readonly 'infestedDeepslate': BlockType;
    /**
     * Represents an information update block within Minecraft.
     */
    static readonly 'infoUpdate': BlockType;
    /**
     * Represents an information update block within Minecraft.
     */
    static readonly 'infoUpdate2': BlockType;
    /**
     * Represents an invisible boundary bedrock block within
     * Minecraft.
     */
    static readonly 'invisibleBedrock': BlockType;
    /**
     * Represents iron bars within Minecraft.
     */
    static readonly 'ironBars': BlockType;
    /**
     * Represents a block of iron within Minecraft.
     */
    static readonly 'ironBlock': BlockType;
    /**
     * Represents an iron door within Minecraft.
     */
    static readonly 'ironDoor': BlockType;
    /**
     * Represents a block with embedded iron ore within Minecraft.
     */
    static readonly 'ironOre': BlockType;
    /**
     * Represents an iron trapdoor within Minecraft.
     */
    static readonly 'ironTrapdoor': BlockType;
    /**
     * Represents a jigsaw within Minecraft.
     */
    static readonly 'jigsaw': BlockType;
    /**
     * Represents a jukebox within Minecraft.
     */
    static readonly 'jukebox': BlockType;
    /**
     * Represents jungle wood button within Minecraft.
     */
    static readonly 'jungleButton': BlockType;
    /**
     * Represents a jungle wood door within Minecraft.
     */
    static readonly 'jungleDoor': BlockType;
    /**
     * Represents a jungle wood fence gate within Minecraft.
     */
    static readonly 'jungleFenceGate': BlockType;
    /**
     * Represents a jungle wood pressure plate within Minecraft.
     */
    static readonly 'junglePressurePlate': BlockType;
    /**
     * Represents a set of jungle wood stairs within Minecraft.
     */
    static readonly 'jungleStairs': BlockType;
    /**
     * Represents a jungle wood standing sign within Minecraft.
     */
    static readonly 'jungleStandingSign': BlockType;
    /**
     * Represents a jungle wood trapdoor within Minecraft.
     */
    static readonly 'jungleTrapdoor': BlockType;
    /**
     * Represents a jungle wood wall sign within Minecraft.
     */
    static readonly 'jungleWallSign': BlockType;
    /**
     * Represents a set of kelp within Minecraft.
     */
    static readonly 'kelp': BlockType;
    /**
     * Represents a ladder within Minecraft.
     */
    static readonly 'ladder': BlockType;
    /**
     * Represents a lantern within Minecraft.
     */
    static readonly 'lantern': BlockType;
    /**
     * Represents a block of lapis lazuli within Minecraft.
     */
    static readonly 'lapisBlock': BlockType;
    /**
     * Represents a block with embedded lapis lazuli within
     * Minecraft.
     */
    static readonly 'lapisOre': BlockType;
    /**
     * Represents a bud of large amethyst within Minecraft.
     */
    static readonly 'largeAmethystBud': BlockType;
    /**
     * Represents lava within Minecraft.
     */
    static readonly 'lava': BlockType;
    /**
     * Represents a cauldron filled with lava within Minecraft.
     */
    static readonly 'lavaCauldron': BlockType;
    /**
     * Represents a set of leaves within Minecraft.
     */
    static readonly 'leaves': BlockType;
    /**
     * Represents an updated set of leaves within Minecraft.
     */
    static readonly 'leaves2': BlockType;
    /**
     * Represents a lectern within Minecraft.
     */
    static readonly 'lectern': BlockType;
    /**
     * Represents a lever within Minecraft.
     */
    static readonly 'lever': BlockType;
    /**
     * Represents a block of light within Minecraft.
     */
    static readonly 'lightBlock': BlockType;
    /**
     * Represents a light blue candle within Minecraft.
     */
    static readonly 'lightBlueCandle': BlockType;
    /**
     * Represents a light blue candle cake within Minecraft.
     */
    static readonly 'lightBlueCandleCake': BlockType;
    /**
     * Represents a light blue block of glazed terracotta within
     * Minecraft.
     */
    static readonly 'lightBlueGlazedTerracotta': BlockType;
    /**
     * Represents a light gray candle within Minecraft.
     */
    static readonly 'lightGrayCandle': BlockType;
    /**
     * Represents a light gray candle cake within Minecraft.
     */
    static readonly 'lightGrayCandleCake': BlockType;
    /**
     * Represents a lightning rod within Minecraft.
     */
    static readonly 'lightningRod': BlockType;
    /**
     * Represents a light weighted pressure plate within Minecraft.
     */
    static readonly 'lightWeightedPressurePlate': BlockType;
    /**
     * Represents a lime candle within Minecraft.
     */
    static readonly 'limeCandle': BlockType;
    /**
     * Represents a lime-colored candle cake within Minecraft.
     */
    static readonly 'limeCandleCake': BlockType;
    /**
     * Represents a lime-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly 'limeGlazedTerracotta': BlockType;
    /**
     * Represents a lit blast furnace within Minecraft.
     */
    static readonly 'litBlastFurnace': BlockType;
    /**
     * Represents lit deepslate redstone ore within Minecraft.
     */
    static readonly 'litDeepslateRedstoneOre': BlockType;
    /**
     * Represents a lit furnace within Minecraft.
     */
    static readonly 'litFurnace': BlockType;
    /**
     * Represents a lit pumpkin within Minecraft.
     */
    static readonly 'litPumpkin': BlockType;
    /**
     * Represents a lit redstone lamp within Minecraft.
     */
    static readonly 'litRedstoneLamp': BlockType;
    /**
     * Represents lit redstone ore within Minecraft.
     */
    static readonly 'litRedstoneOre': BlockType;
    /**
     * Represents a lit smoker within Minecraft.
     */
    static readonly 'litSmoker': BlockType;
    /**
     * Represents a lodestone within Minecraft.
     */
    static readonly 'lodestone': BlockType;
    /**
     * Represents a log within Minecraft.
     */
    static readonly 'log': BlockType;
    /**
     * Represents a more updated, customizable log within
     * Minecraft.
     */
    static readonly 'log2': BlockType;
    /**
     * Represents a loom within Minecraft.
     */
    static readonly 'loom': BlockType;
    /**
     * Represents a magenta candle within Minecraft.
     */
    static readonly 'magentaCandle': BlockType;
    /**
     * Represents a magenta candle cake within Minecraft.
     */
    static readonly 'magentaCandleCake': BlockType;
    /**
     * Represents a block of magenta-colored glazed terracotta
     * within Minecraft.
     */
    static readonly 'magentaGlazedTerracotta': BlockType;
    /**
     * Represents magma within Minecraft.
     */
    static readonly 'magma': BlockType;
    static readonly 'mangroveLeaves': BlockType;
    static readonly 'mangrovePropagule': BlockType;
    static readonly 'mangrovePropaguleHanging': BlockType;
    /**
     * Represents a medium-sized bud of amethyst within Minecraft.
     */
    static readonly 'mediumAmethystBud': BlockType;
    /**
     * Represents a block of melon within Minecraft.
     */
    static readonly 'melonBlock': BlockType;
    /**
     * Represents a stem of melon within Minecraft.
     */
    static readonly 'melonStem': BlockType;
    /**
     * Represents a mob spawner within Minecraft.
     */
    static readonly 'mobSpawner': BlockType;
    /**
     * Represents a monster egg within Minecraft.
     */
    static readonly 'monsterEgg': BlockType;
    /**
     * Represents a block of moss within Minecraft.
     */
    static readonly 'mossBlock': BlockType;
    /**
     * Represents a carpet of moss within Minecraft.
     */
    static readonly 'mossCarpet': BlockType;
    /**
     * Represents a block of cobblestone with moss within
     * Minecraft.
     */
    static readonly 'mossyCobblestone': BlockType;
    /**
     * Represents a set of mossy cobblestone stairs within
     * Minecraft.
     */
    static readonly 'mossyCobblestoneStairs': BlockType;
    /**
     * Represents a set of mossy stone brick stairs within
     * Minecraft.
     */
    static readonly 'mossyStoneBrickStairs': BlockType;
    /**
     * Represents a moving block within Minecraft.
     */
    static readonly 'movingBlock': BlockType;
    static readonly 'mud': BlockType;
    static readonly 'mudBrickDoubleSlab': BlockType;
    static readonly 'mudBricks': BlockType;
    static readonly 'mudBrickSlab': BlockType;
    static readonly 'mudBrickStairs': BlockType;
    static readonly 'mudBrickWall': BlockType;
    /**
     * Represents a mycelium plant within Minecraft.
     */
    static readonly 'mycelium': BlockType;
    /**
     * Represents a nether brick block within Minecraft.
     */
    static readonly 'netherBrick': BlockType;
    /**
     * Represents a nether brick fence within Minecraft.
     */
    static readonly 'netherBrickFence': BlockType;
    /**
     * Represents a set of nether brick stairs within Minecraft.
     */
    static readonly 'netherBrickStairs': BlockType;
    /**
     * Represents a block of nether with embedded gold ore within
     * Minecraft.
     */
    static readonly 'netherGoldOre': BlockType;
    /**
     * Represents a block of netherite within Minecraft.
     */
    static readonly 'netheriteBlock': BlockType;
    /**
     * Represents a block of netherrack within Minecraft.
     */
    static readonly 'netherrack': BlockType;
    /**
     * Represents a nether rock within Minecraft.
     */
    static readonly 'netherreactor': BlockType;
    /**
     * Represents nether sprouts within Minecraft.
     */
    static readonly 'netherSprouts': BlockType;
    /**
     * Represents nether wart within Minecraft.
     */
    static readonly 'netherWart': BlockType;
    /**
     * Represents a block of nether wart within Minecraft.
     */
    static readonly 'netherWartBlock': BlockType;
    /**
     * Represents a standard set of stone stairs within Minecraft.
     */
    static readonly 'normalStoneStairs': BlockType;
    /**
     * Represents a note block within Minecraft.
     */
    static readonly 'noteblock': BlockType;
    /**
     * Represents a set of oak stairs within Minecraft.
     */
    static readonly 'oakStairs': BlockType;
    /**
     * Represents an observer within Minecraft.
     */
    static readonly 'observer': BlockType;
    /**
     * Represents an obsidian block within Minecraft.
     */
    static readonly 'obsidian': BlockType;
    static readonly 'ochreFroglight': BlockType;
    /**
     * Represents an orange candle within Minecraft.
     */
    static readonly 'orangeCandle': BlockType;
    /**
     * Represents an orange candle cake within Minecraft.
     */
    static readonly 'orangeCandleCake': BlockType;
    /**
     * Represents a block of orange-colored glazed terracotta
     * within Minecraft.
     */
    static readonly 'orangeGlazedTerracotta': BlockType;
    /**
     * Represents a block of oxidized copper within Minecraft.
     */
    static readonly 'oxidizedCopper': BlockType;
    /**
     * Represents a block of oxidized cut copper within Minecraft.
     */
    static readonly 'oxidizedCutCopper': BlockType;
    /**
     * Represents a slab of oxidized cut copper within Minecraft.
     */
    static readonly 'oxidizedCutCopperSlab': BlockType;
    /**
     * Represents a set of oxidized cut copper stairs within
     * Minecraft.
     */
    static readonly 'oxidizedCutCopperStairs': BlockType;
    /**
     * Represents a double slab of oxidized cut copper within
     * Minecraft.
     */
    static readonly 'oxidizedDoubleCutCopperSlab': BlockType;
    /**
     * Represents a block of packed ice within Minecraft.
     */
    static readonly 'packedIce': BlockType;
    static readonly 'packedMud': BlockType;
    static readonly 'pearlescentFroglight': BlockType;
    /**
     * Represents a pink candle within Minecraft.
     */
    static readonly 'pinkCandle': BlockType;
    /**
     * Represents a pink candle cake within Minecraft.
     */
    static readonly 'pinkCandleCake': BlockType;
    /**
     * Represents a pink-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly 'pinkGlazedTerracotta': BlockType;
    /**
     * Represents a piston within Minecraft.
     */
    static readonly 'piston': BlockType;
    /**
     * Represents a piston arm within Minecraft.
     */
    static readonly 'pistonArmCollision': BlockType;
    /**
     * Represents a set of planks within Minecraft.
     */
    static readonly 'planks': BlockType;
    /**
     * Represents podzol within Minecraft.
     */
    static readonly 'podzol': BlockType;
    /**
     * Represents pointed dripstone within Minecraft.
     */
    static readonly 'pointedDripstone': BlockType;
    /**
     * Represents a set of polished andesite stairs within
     * Minecraft.
     */
    static readonly 'polishedAndesiteStairs': BlockType;
    /**
     * Represents a block of polished basalt within Minecraft.
     */
    static readonly 'polishedBasalt': BlockType;
    /**
     * Represents a block of polished blackstone within Minecraft.
     */
    static readonly 'polishedBlackstone': BlockType;
    /**
     * Represents a double slab of polished blackstone brick within
     * Minecraft.
     */
    static readonly 'polishedBlackstoneBrickDoubleSlab': BlockType;
    /**
     * Represents a block of polished blackstone bricks within
     * Minecraft.
     */
    static readonly 'polishedBlackstoneBricks': BlockType;
    /**
     * Represents a slab of polished blackstone within Minecraft.
     */
    static readonly 'polishedBlackstoneBrickSlab': BlockType;
    /**
     * Represents a set of polished blackstone brick stairs within
     * Minecraft.
     */
    static readonly 'polishedBlackstoneBrickStairs': BlockType;
    /**
     * Represents a polished blackstone brick wall within
     * Minecraft.
     */
    static readonly 'polishedBlackstoneBrickWall': BlockType;
    /**
     * Represents a polished blackstone button within Minecraft.
     */
    static readonly 'polishedBlackstoneButton': BlockType;
    /**
     * Represents a double slab of polished blackstone within
     * Minecraft.
     */
    static readonly 'polishedBlackstoneDoubleSlab': BlockType;
    /**
     * Represents a polished blackstone pressure plate within
     * Minecraft.
     */
    static readonly 'polishedBlackstonePressurePlate': BlockType;
    /**
     * Represents a slab of polished blackstone within Minecraft.
     */
    static readonly 'polishedBlackstoneSlab': BlockType;
    /**
     * Represents a set of polished blackstone stairs within
     * Minecraft.
     */
    static readonly 'polishedBlackstoneStairs': BlockType;
    /**
     * Represents a polished blackstone wall within Minecraft.
     */
    static readonly 'polishedBlackstoneWall': BlockType;
    /**
     * Represents a block of polished deepslate within Minecraft.
     */
    static readonly 'polishedDeepslate': BlockType;
    /**
     * Represents a double slab of polished deepslate within
     * Minecraft.
     */
    static readonly 'polishedDeepslateDoubleSlab': BlockType;
    /**
     * Represents a slab of polished deepslate within Minecraft.
     */
    static readonly 'polishedDeepslateSlab': BlockType;
    /**
     * Represents a set of polished deepslate stairs within
     * Minecraft.
     */
    static readonly 'polishedDeepslateStairs': BlockType;
    /**
     * Represents a wall of polished deepslate within Minecraft.
     */
    static readonly 'polishedDeepslateWall': BlockType;
    /**
     * Represents a block of polished diorite within Minecraft.
     */
    static readonly 'polishedDioriteStairs': BlockType;
    /**
     * Represents a set of polished granite stairs within
     * Minecraft.
     */
    static readonly 'polishedGraniteStairs': BlockType;
    /**
     * Represents a portal within Minecraft.
     */
    static readonly 'portal': BlockType;
    /**
     * Represents a set of potatoes within Minecraft.
     */
    static readonly 'potatoes': BlockType;
    /**
     * Represents a block of powder snow within Minecraft.
     */
    static readonly 'powderSnow': BlockType;
    /**
     * Represents a powered comparator within Minecraft.
     */
    static readonly 'poweredComparator': BlockType;
    /**
     * Represents a powered repeater within Minecraft.
     */
    static readonly 'poweredRepeater': BlockType;
    /**
     * Represents a block of prismarine within Minecraft.
     */
    static readonly 'prismarine': BlockType;
    /**
     * Represents a set of prismarine brick stairs within
     * Minecraft.
     */
    static readonly 'prismarineBricksStairs': BlockType;
    /**
     * Represents a set of prismarine stairs within Minecraft.
     */
    static readonly 'prismarineStairs': BlockType;
    /**
     * Represents a pumpkin within Minecraft.
     */
    static readonly 'pumpkin': BlockType;
    /**
     * Represents a pumpkin stem within Minecraft.
     */
    static readonly 'pumpkinStem': BlockType;
    /**
     * Represents a purple candle within Minecraft.
     */
    static readonly 'purpleCandle': BlockType;
    /**
     * Represents a purple colored candle cake within Minecraft.
     */
    static readonly 'purpleCandleCake': BlockType;
    /**
     * Represents a purple-colored block of glazed terracotta
     * within Minecraft.
     */
    static readonly 'purpleGlazedTerracotta': BlockType;
    /**
     * Represents a purpur block within Minecraft.
     */
    static readonly 'purpurBlock': BlockType;
    /**
     * Represents a set of purpur stairs within Minecraft.
     */
    static readonly 'purpurStairs': BlockType;
    /**
     * Represents a block of solid quartz within Minecraft.
     */
    static readonly 'quartzBlock': BlockType;
    /**
     * Represents a block of solid quartz bricks within Minecraft.
     */
    static readonly 'quartzBricks': BlockType;
    /**
     * Represents a block with embedded quartz ore within
     * Minecraft.
     */
    static readonly 'quartzOre': BlockType;
    /**
     * Represents a set of quartz stairs within Minecraft.
     */
    static readonly 'quartzStairs': BlockType;
    /**
     * Represents a set of rails within Minecraft.
     */
    static readonly 'rail': BlockType;
    /**
     * Represents a block of raw copper within Minecraft.
     */
    static readonly 'rawCopperBlock': BlockType;
    /**
     * Represents a block of raw gold within Minecraft.
     */
    static readonly 'rawGoldBlock': BlockType;
    /**
     * Represents a block of raw iron within Minecraft.
     */
    static readonly 'rawIronBlock': BlockType;
    /**
     * Represents a red candle within Minecraft.
     */
    static readonly 'redCandle': BlockType;
    /**
     * Represents a red candle cake within Minecraft.
     */
    static readonly 'redCandleCake': BlockType;
    /**
     * Represents a red flower within Minecraft.
     */
    static readonly 'redFlower': BlockType;
    /**
     * Represents a red-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly 'redGlazedTerracotta': BlockType;
    /**
     * Represents a red mushroom within Minecraft.
     */
    static readonly 'redMushroom': BlockType;
    /**
     * Represents a block of red mushroom within Minecraft.
     */
    static readonly 'redMushroomBlock': BlockType;
    /**
     * Represents a block of red nether brick within Minecraft.
     */
    static readonly 'redNetherBrick': BlockType;
    /**
     * Represents a set of red nether brick stairs within
     * Minecraft.
     */
    static readonly 'redNetherBrickStairs': BlockType;
    /**
     * Represents a block of red sandstone within Minecraft.
     */
    static readonly 'redSandstone': BlockType;
    /**
     * Represents a set of red sandstone stairs within Minecraft.
     */
    static readonly 'redSandstoneStairs': BlockType;
    /**
     * Represents a block of redstone within Minecraft.
     */
    static readonly 'redstoneBlock': BlockType;
    /**
     * Represents a redstone lamp within Minecraft.
     */
    static readonly 'redstoneLamp': BlockType;
    /**
     * Represents a block with embedded redstone ore within
     * Minecraft.
     */
    static readonly 'redstoneOre': BlockType;
    /**
     * Represents a redstone torch within Minecraft.
     */
    static readonly 'redstoneTorch': BlockType;
    /**
     * Represents a redstone wire within Minecraft.
     */
    static readonly 'redstoneWire': BlockType;
    /**
     * Represents reeds within Minecraft.
     */
    static readonly 'reeds': BlockType;
    static readonly 'reinforcedDeepslate': BlockType;
    /**
     * Represents a repeating command block within Minecraft.
     */
    static readonly 'repeatingCommandBlock': BlockType;
    /**
     * Represents a reserved block within Minecraft.
     */
    static readonly 'reserved6': BlockType;
    /**
     * Represents a respawn anchor within Minecraft.
     */
    static readonly 'respawnAnchor': BlockType;
    /**
     * Represents a block of sand within Minecraft.
     */
    static readonly 'sand': BlockType;
    /**
     * Represents a block of sandstone within Minecraft.
     */
    static readonly 'sandstone': BlockType;
    /**
     * Represents a set of sandstone stairs within Minecraft.
     */
    static readonly 'sandstoneStairs': BlockType;
    /**
     * Represents a sapling within Minecraft.
     */
    static readonly 'sapling': BlockType;
    /**
     * Represents a set of scaffolding within Minecraft.
     */
    static readonly 'scaffolding': BlockType;
    static readonly 'sculk': BlockType;
    static readonly 'sculkCatalyst': BlockType;
    /**
     * Represents a sculk sensor within Minecraft.
     */
    static readonly 'sculkSensor': BlockType;
    static readonly 'sculkShrieker': BlockType;
    static readonly 'sculkVein': BlockType;
    /**
     * Represents seagrass within Minecraft.
     */
    static readonly 'seagrass': BlockType;
    /**
     * Represents a sealantern within Minecraft.
     */
    static readonly 'seaLantern': BlockType;
    /**
     * Represents a seapickle within Minecraft.
     */
    static readonly 'seaPickle': BlockType;
    /**
     * Represents a shroom light within Minecraft.
     */
    static readonly 'shroomlight': BlockType;
    /**
     * Represents a shulker box within Minecraft.
     */
    static readonly 'shulkerBox': BlockType;
    /**
     * Represents a silver-colored block of glazed terracotta
     * within Minecraft.
     */
    static readonly 'silverGlazedTerracotta': BlockType;
    /**
     * Represents a skull within Minecraft.
     */
    static readonly 'skull': BlockType;
    /**
     * Represents slime within Minecraft.
     */
    static readonly 'slime': BlockType;
    /**
     * Represents a small bud of amethyst within Minecraft.
     */
    static readonly 'smallAmethystBud': BlockType;
    /**
     * Represents a small dripleaf block within Minecraft.
     */
    static readonly 'smallDripleafBlock': BlockType;
    /**
     * Represents a smithing table within Minecraft.
     */
    static readonly 'smithingTable': BlockType;
    /**
     * Represents a smoker within Minecraft.
     */
    static readonly 'smoker': BlockType;
    /**
     * Represents a block of smooth basalt within Minecraft.
     */
    static readonly 'smoothBasalt': BlockType;
    /**
     * Represents a set of smooth quartz stairs within Minecraft.
     */
    static readonly 'smoothQuartzStairs': BlockType;
    /**
     * Represents a set of smooth red sandstone stairs within
     * Minecraft.
     */
    static readonly 'smoothRedSandstoneStairs': BlockType;
    /**
     * Represents a set of smooth redstone stairs within Minecraft.
     */
    static readonly 'smoothSandstoneStairs': BlockType;
    /**
     * Represents a smooth stone block within Minecraft.
     */
    static readonly 'smoothStone': BlockType;
    /**
     * Represents snow within Minecraft.
     */
    static readonly 'snow': BlockType;
    /**
     * Represents a layer of snow within Minecraft.
     */
    static readonly 'snowLayer': BlockType;
    /**
     * Represents a soul campfire within Minecraft.
     */
    static readonly 'soulCampfire': BlockType;
    /**
     * Represents soul fire within Minecraft.
     */
    static readonly 'soulFire': BlockType;
    /**
     * Represents a soul lantern within Minecraft.
     */
    static readonly 'soulLantern': BlockType;
    /**
     * Represents a block of soul sand within Minecraft.
     */
    static readonly 'soulSand': BlockType;
    /**
     * Represents soul soil within Minecraft.
     */
    static readonly 'soulSoil': BlockType;
    /**
     * Represents a soul torch within Minecraft.
     */
    static readonly 'soulTorch': BlockType;
    /**
     * Represents a sponge within Minecraft.
     */
    static readonly 'sponge': BlockType;
    /**
     * Represents a spore blossom within Minecraft.
     */
    static readonly 'sporeBlossom': BlockType;
    /**
     * Represents a spruce wood button within Minecraft.
     */
    static readonly 'spruceButton': BlockType;
    /**
     * Represents a spruce wood door within Minecraft.
     */
    static readonly 'spruceDoor': BlockType;
    /**
     * Represents a spruce wood fence gate within Minecraft.
     */
    static readonly 'spruceFenceGate': BlockType;
    /**
     * Represents a spruce wood pressure plate within Minecraft.
     */
    static readonly 'sprucePressurePlate': BlockType;
    /**
     * Represents a set of spruce wood stairs within Minecraft.
     */
    static readonly 'spruceStairs': BlockType;
    /**
     * Represents a spruce wood standing sign within Minecraft.
     */
    static readonly 'spruceStandingSign': BlockType;
    /**
     * Represents a spruce wood trapdoor within Minecraft.
     */
    static readonly 'spruceTrapdoor': BlockType;
    /**
     * Represents a spruce wood wall sign within Minecraft.
     */
    static readonly 'spruceWallSign': BlockType;
    /**
     * Represents stained glass within Minecraft.
     */
    static readonly 'stainedGlass': BlockType;
    /**
     * Represents a pane of stained glass within Minecraft.
     */
    static readonly 'stainedGlassPane': BlockType;
    /**
     * Represents a block of stained hardened clay within
     * Minecraft.
     */
    static readonly 'stainedHardenedClay': BlockType;
    /**
     * Represents a standing banner within Minecraft.
     */
    static readonly 'standingBanner': BlockType;
    /**
     * Represents a standing sign within Minecraft.
     */
    static readonly 'standingSign': BlockType;
    /**
     * Represents a piston block with a sticky arm within
     * Minecraft.
     */
    static readonly 'stickyPiston': BlockType;
    /**
     * Represents a sticky piston arm within Minecraft.
     */
    static readonly 'stickyPistonArmCollision': BlockType;
    /**
     * Represents a block of stone within Minecraft.
     */
    static readonly 'stone': BlockType;
    /**
     * Represents a block of stone brick within Minecraft.
     */
    static readonly 'stonebrick': BlockType;
    /**
     * Represents a set of stone brick stairs within Minecraft.
     */
    static readonly 'stoneBrickStairs': BlockType;
    /**
     * Represents a stone button within Minecraft.
     */
    static readonly 'stoneButton': BlockType;
    /**
     * Represents a stonecutter within Minecraft.
     */
    static readonly 'stonecutter': BlockType;
    /**
     * Represents a stonecutter block within Minecraft.
     */
    static readonly 'stonecutterBlock': BlockType;
    /**
     * Represents a stone pressure plate within Minecraft.
     */
    static readonly 'stonePressurePlate': BlockType;
    /**
     * Represents a slab of stone within Minecraft.
     */
    static readonly 'stoneSlab': BlockType;
    /**
     * Represents a variant of a slab of stone (#2) within
     * Minecraft.
     */
    static readonly 'stoneSlab2': BlockType;
    /**
     * Represents a slab of stone (variant #3) within Minecraft.
     */
    static readonly 'stoneSlab3': BlockType;
    /**
     * Represents a slab of stone (variant #4) within Minecraft.
     */
    static readonly 'stoneSlab4': BlockType;
    /**
     * Represents a set of stone stairs within Minecraft.
     */
    static readonly 'stoneStairs': BlockType;
    /**
     * Represents a stripped acacia log within Minecraft.
     */
    static readonly 'strippedAcaciaLog': BlockType;
    /**
     * Represents a stripped birch log within Minecraft.
     */
    static readonly 'strippedBirchLog': BlockType;
    /**
     * Represents stripped crimson hyphae within Minecraft.
     */
    static readonly 'strippedCrimsonHyphae': BlockType;
    /**
     * Represents a stripped crimson stem within Minecraft.
     */
    static readonly 'strippedCrimsonStem': BlockType;
    /**
     * Represents a stripped dark oak log within Minecraft.
     */
    static readonly 'strippedDarkOakLog': BlockType;
    /**
     * Represents a stripped jungle log within Minecraft.
     */
    static readonly 'strippedJungleLog': BlockType;
    /**
     * Represents a stripped oak log within Minecraft.
     */
    static readonly 'strippedOakLog': BlockType;
    /**
     * Represents a stripped spruce log within Minecraft.
     */
    static readonly 'strippedSpruceLog': BlockType;
    /**
     * Represents stripped warped hyphae within Minecraft.
     */
    static readonly 'strippedWarpedHyphae': BlockType;
    /**
     * Represents stripped warped stem within Minecraft.
     */
    static readonly 'strippedWarpedStem': BlockType;
    /**
     * Represents a structure block, which provides for the saving
     * and loading of block structures, within Minecraft.
     */
    static readonly 'structureBlock': BlockType;
    /**
     * Represents a structure void within Minecraft.
     */
    static readonly 'structureVoid': BlockType;
    /**
     * Represents a sweet berry bush within Minecraft.
     */
    static readonly 'sweetBerryBush': BlockType;
    /**
     * Represents tall grass within Minecraft.
     */
    static readonly 'tallgrass': BlockType;
    /**
     * Represents a target within Minecraft.
     */
    static readonly 'target': BlockType;
    /**
     * Represents tinted glass within Minecraft.
     */
    static readonly 'tintedGlass': BlockType;
    /**
     * Represents a block of TnT within Minecraft.
     */
    static readonly 'tnt': BlockType;
    /**
     * Represents a torch within Minecraft.
     */
    static readonly 'torch': BlockType;
    /**
     * Represents a trapdoor within Minecraft.
     */
    static readonly 'trapdoor': BlockType;
    /**
     * Represents a trapped chest within Minecraft.
     */
    static readonly 'trappedChest': BlockType;
    /**
     * Represents a tripwire within Minecraft.
     */
    static readonly 'tripWire': BlockType;
    /**
     * Represents a tripwire hook within Minecraft.
     */
    static readonly 'tripwireHook': BlockType;
    /**
     * Represents a block of tuff within Minecraft.
     */
    static readonly 'tuff': BlockType;
    /**
     * Represents a turtle egg within Minecraft.
     */
    static readonly 'turtleEgg': BlockType;
    /**
     * Represents a set of twisting vines within Minecraft.
     */
    static readonly 'twistingVines': BlockType;
    /**
     * Represents an underwater torch within Minecraft.
     */
    static readonly 'underwaterTorch': BlockType;
    /**
     * Represents an undyed shulker box within Minecraft.
     */
    static readonly 'undyedShulkerBox': BlockType;
    /**
     * Represents an unknown block within Minecraft.
     */
    static readonly 'unknown': BlockType;
    /**
     * Represents an unlit redstone torch within Minecraft.
     */
    static readonly 'unlitRedstoneTorch': BlockType;
    /**
     * Represents an unpowered comparator within Minecraft.
     */
    static readonly 'unpoweredComparator': BlockType;
    /**
     * Represents an unpowered repeater within Minecraft.
     */
    static readonly 'unpoweredRepeater': BlockType;
    static readonly 'verdantFroglight': BlockType;
    /**
     * Represents a set of vines within Minecraft.
     */
    static readonly 'vine': BlockType;
    /**
     * Represents a wall banner within Minecraft.
     */
    static readonly 'wallBanner': BlockType;
    /**
     * Represents a wall sign within Minecraft.
     */
    static readonly 'wallSign': BlockType;
    /**
     * Represents a warped button within Minecraft.
     */
    static readonly 'warpedButton': BlockType;
    /**
     * Represents a warped door within Minecraft.
     */
    static readonly 'warpedDoor': BlockType;
    /**
     * Represents a double slab of warped within Minecraft.
     */
    static readonly 'warpedDoubleSlab': BlockType;
    /**
     * Represents a warped fence within Minecraft.
     */
    static readonly 'warpedFence': BlockType;
    /**
     * Represents a warped fence gate within Minecraft.
     */
    static readonly 'warpedFenceGate': BlockType;
    /**
     * Represents warped fungus within Minecraft.
     */
    static readonly 'warpedFungus': BlockType;
    /**
     * Represents warped hyphae within Minecraft.
     */
    static readonly 'warpedHyphae': BlockType;
    /**
     * Represents warped nylium within Minecraft.
     */
    static readonly 'warpedNylium': BlockType;
    /**
     * Represents warped planks within Minecraft.
     */
    static readonly 'warpedPlanks': BlockType;
    /**
     * Represents a warped pressure plate within Minecraft.
     */
    static readonly 'warpedPressurePlate': BlockType;
    /**
     * Represents a set of warped roots within Minecraft.
     */
    static readonly 'warpedRoots': BlockType;
    /**
     * Represents a slab of warped material within Minecraft.
     */
    static readonly 'warpedSlab': BlockType;
    /**
     * Represents a set of warped stairs within Minecraft.
     */
    static readonly 'warpedStairs': BlockType;
    /**
     * Represents a warped standing sign within Minecraft.
     */
    static readonly 'warpedStandingSign': BlockType;
    /**
     * Represents a warped stem within Minecraft.
     */
    static readonly 'warpedStem': BlockType;
    /**
     * Represents a warped trapdoor within Minecraft.
     */
    static readonly 'warpedTrapdoor': BlockType;
    /**
     * Represents a warped wall sign within Minecraft.
     */
    static readonly 'warpedWallSign': BlockType;
    /**
     * Represents a warped wart block within Minecraft.
     */
    static readonly 'warpedWartBlock': BlockType;
    /**
     * Represents water within Minecraft.
     */
    static readonly 'water': BlockType;
    /**
     * Represents a water lily within Minecraft.
     */
    static readonly 'waterlily': BlockType;
    /**
     * Represents a block of waxed copper within Minecraft.
     */
    static readonly 'waxedCopper': BlockType;
    /**
     * Represents a block of waxed cut copper within Minecraft.
     */
    static readonly 'waxedCutCopper': BlockType;
    /**
     * Represents a slab of waxed cut copper within Minecraft.
     */
    static readonly 'waxedCutCopperSlab': BlockType;
    /**
     * Represents a set of waxed cut copper stairs within
     * Minecraft.
     */
    static readonly 'waxedCutCopperStairs': BlockType;
    /**
     * Represents a double slab of waxed cut copper within
     * Minecraft.
     */
    static readonly 'waxedDoubleCutCopperSlab': BlockType;
    /**
     * Represents a block of waxed exposed copper within Minecraft.
     */
    static readonly 'waxedExposedCopper': BlockType;
    /**
     * Represents a block of waxed exposed cut copper within
     * Minecraft.
     */
    static readonly 'waxedExposedCutCopper': BlockType;
    /**
     * Represents a slab of waxed exposed cut copper within
     * Minecraft.
     */
    static readonly 'waxedExposedCutCopperSlab': BlockType;
    /**
     * Represents a set of waxed exposed cut copper stairs within
     * Minecraft.
     */
    static readonly 'waxedExposedCutCopperStairs': BlockType;
    /**
     * Represents a double slab of waxed exposed cut copper within
     * Minecraft.
     */
    static readonly 'waxedExposedDoubleCutCopperSlab': BlockType;
    /**
     * Represents a block of waxed oxidized copper within
     * Minecraft.
     */
    static readonly 'waxedOxidizedCopper': BlockType;
    /**
     * Represents a block of waxed oxidized cut copper within
     * Minecraft.
     */
    static readonly 'waxedOxidizedCutCopper': BlockType;
    /**
     * Represents a slab of waxed oxidized cut copper within
     * Minecraft.
     */
    static readonly 'waxedOxidizedCutCopperSlab': BlockType;
    /**
     * Represents a set of waxed oxidized cut copper stairs within
     * Minecraft.
     */
    static readonly 'waxedOxidizedCutCopperStairs': BlockType;
    /**
     * Represents a double slab of waxed oxidized cut copper within
     * Minecraft.
     */
    static readonly 'waxedOxidizedDoubleCutCopperSlab': BlockType;
    /**
     * Represents a block of waxed weathered copper within
     * Minecraft.
     */
    static readonly 'waxedWeatheredCopper': BlockType;
    /**
     * Represents a block of waxed weathered cut copper within
     * Minecraft.
     */
    static readonly 'waxedWeatheredCutCopper': BlockType;
    /**
     * Represents a slab of waxed weathered cut copper within
     * Minecraft.
     */
    static readonly 'waxedWeatheredCutCopperSlab': BlockType;
    /**
     * Represents a set of waxed weathered cut copper stairs within
     * Minecraft.
     */
    static readonly 'waxedWeatheredCutCopperStairs': BlockType;
    /**
     * Represents a double slab of waxed weathered cut copper
     * within Minecraft.
     */
    static readonly 'waxedWeatheredDoubleCutCopperSlab': BlockType;
    /**
     * Represents a block of weathered copper within Minecraft.
     */
    static readonly 'weatheredCopper': BlockType;
    /**
     * Represents a block of weathered cut copper within Minecraft.
     */
    static readonly 'weatheredCutCopper': BlockType;
    /**
     * Represents a slab of weathered cut copper within Minecraft.
     */
    static readonly 'weatheredCutCopperSlab': BlockType;
    /**
     * Represents a set of weathered cut copper stairs within
     * Minecraft.
     */
    static readonly 'weatheredCutCopperStairs': BlockType;
    /**
     * Represents a double slab of weathered cut copper within
     * Minecraft.
     */
    static readonly 'weatheredDoubleCutCopperSlab': BlockType;
    /**
     * Represents a web within Minecraft.
     */
    static readonly 'web': BlockType;
    /**
     * Represents a set of weeping vines within Minecraft.
     */
    static readonly 'weepingVines': BlockType;
    /**
     * Represents wheat within Minecraft.
     */
    static readonly 'wheat': BlockType;
    /**
     * Represents a white candle within Minecraft.
     */
    static readonly 'whiteCandle': BlockType;
    /**
     * Represents a white candle cake within Minecraft.
     */
    static readonly 'whiteCandleCake': BlockType;
    /**
     * Represents a block of white glazed terracotta within
     * Minecraft.
     */
    static readonly 'whiteGlazedTerracotta': BlockType;
    /**
     * Represents a wither rose within Minecraft.
     */
    static readonly 'witherRose': BlockType;
    /**
     * Represents a block of wood within Minecraft.
     */
    static readonly 'wood': BlockType;
    /**
     * Represents a wooden button within Minecraft.
     */
    static readonly 'woodenButton': BlockType;
    /**
     * Represents a wooden door within Minecraft.
     */
    static readonly 'woodenDoor': BlockType;
    /**
     * Represents a wooden pressure plate within Minecraft.
     */
    static readonly 'woodenPressurePlate': BlockType;
    /**
     * Represents a wooden slab within Minecraft.
     */
    static readonly 'woodenSlab': BlockType;
    /**
     * Represents wool within Minecraft.
     */
    static readonly 'wool': BlockType;
    /**
     * Represents a yellow candle within Minecraft.
     */
    static readonly 'yellowCandle': BlockType;
    /**
     * Represents a yellow candle cake within Minecraft.
     */
    static readonly 'yellowCandleCake': BlockType;
    /**
     * Represents a yellow flower within Minecraft.
     */
    static readonly 'yellowFlower': BlockType;
    /**
     * Represents a yellow block of glazed terracotta within
     * Minecraft.
     */
    static readonly 'yellowGlazedTerracotta': BlockType;
    static get(typeName: string): BlockType;
    /**
     * @remarks
     * Returns an array of all block types within Minecraft.
     */
    static getAllBlockTypes(): BlockType[];
    protected constructor();
}
/**
 * A collection of default Minecraft dimension types.
 */
// tslint:disable-next-line:no-unnecessary-class
declare class MinecraftDimensionTypes {
    /**
     * The Nether is a collection of biomes separate from the
     * Overworld, including Soul Sand Valleys and Crimson forests.
     * Nether fortresses contain exclusive resources. Mobs such as
     * Blaze, Hoglins, Piglins, and Ghasts congregate here.
     */
    static readonly 'nether' = 'minecraft:nether';
    /**
     * The overworld is a collection of biomes, including forests,
     * plains, jungles, mountains, deserts, taiga, and more. This
     * is the default starter dimension for Minecraft. Mobs such as
     * Axolotl, Cows, Creepers, and Zombies congregate here.
     */
    static readonly 'overworld' = 'minecraft:overworld';
    /**
     * The End is separate from the Overworld and the Nether and is
     * generated whenever you create an End portal. Here, a giant
     * center island is surrounded by several smaller areas and
     * islands. You can find Endermen here. End midlands are larger
     * areas that transition you from the center to the outer edges
     * of the End. They contain Shulkers, Endermen, End gateway
     * portals, and End cities. End gateway portals are commonly
     * found at the outermost edge of the void. You usually find
     * End barrens toward the edges of the main areas or land in
     * the End.
     */
    static readonly 'theEnd' = 'minecraft:the_end';
    protected constructor();
}
// tslint:disable-next-line:no-unnecessary-class
declare class MinecraftEffectTypes {
    static readonly 'absorption': EffectType;
    static readonly 'badOmen': EffectType;
    static readonly 'blindness': EffectType;
    static readonly 'conduitPower': EffectType;
    static readonly 'empty': EffectType;
    static readonly 'fatalPoison': EffectType;
    static readonly 'fireResistance': EffectType;
    static readonly 'haste': EffectType;
    static readonly 'healthBoost': EffectType;
    static readonly 'hunger': EffectType;
    static readonly 'instantDamage': EffectType;
    static readonly 'instantHealth': EffectType;
    static readonly 'invisibility': EffectType;
    static readonly 'jumpBoost': EffectType;
    static readonly 'levitation': EffectType;
    static readonly 'miningFatigue': EffectType;
    static readonly 'nausea': EffectType;
    static readonly 'nightVision': EffectType;
    static readonly 'poison': EffectType;
    static readonly 'regeneration': EffectType;
    static readonly 'resistance': EffectType;
    static readonly 'saturation': EffectType;
    static readonly 'slowFalling': EffectType;
    static readonly 'slowness': EffectType;
    static readonly 'speed': EffectType;
    static readonly 'strength': EffectType;
    static readonly 'villageHero': EffectType;
    static readonly 'waterBreathing': EffectType;
    static readonly 'weakness': EffectType;
    static readonly 'wither': EffectType;
    protected constructor();
}
// tslint:disable-next-line:no-unnecessary-class
declare class MinecraftEnchantmentTypes {
    static readonly 'aquaAffinity': EnchantmentType;
    static readonly 'baneOfArthropods': EnchantmentType;
    static readonly 'binding': EnchantmentType;
    static readonly 'blastProtection': EnchantmentType;
    static readonly 'channeling': EnchantmentType;
    static readonly 'depthStrider': EnchantmentType;
    static readonly 'efficiency': EnchantmentType;
    static readonly 'featherFalling': EnchantmentType;
    static readonly 'fireAspect': EnchantmentType;
    static readonly 'fireProtection': EnchantmentType;
    static readonly 'flame': EnchantmentType;
    static readonly 'fortune': EnchantmentType;
    static readonly 'frostWalker': EnchantmentType;
    static readonly 'impaling': EnchantmentType;
    static readonly 'infinity': EnchantmentType;
    static readonly 'knockback': EnchantmentType;
    static readonly 'looting': EnchantmentType;
    static readonly 'loyalty': EnchantmentType;
    static readonly 'luckOfTheSea': EnchantmentType;
    static readonly 'lure': EnchantmentType;
    static readonly 'mending': EnchantmentType;
    static readonly 'multishot': EnchantmentType;
    static readonly 'piercing': EnchantmentType;
    static readonly 'power': EnchantmentType;
    static readonly 'projectileProtection': EnchantmentType;
    static readonly 'protection': EnchantmentType;
    static readonly 'punch': EnchantmentType;
    static readonly 'quickCharge': EnchantmentType;
    static readonly 'respiration': EnchantmentType;
    static readonly 'riptide': EnchantmentType;
    static readonly 'sharpness': EnchantmentType;
    static readonly 'silkTouch': EnchantmentType;
    static readonly 'smite': EnchantmentType;
    static readonly 'soulSpeed': EnchantmentType;
    static readonly 'thorns': EnchantmentType;
    static readonly 'unbreaking': EnchantmentType;
    static readonly 'vanishing': EnchantmentType;
    protected constructor();
}
// tslint:disable-next-line:no-unnecessary-class
declare class MinecraftEntityTypes {
    static readonly 'agent': EntityType;
    static readonly 'areaEffectCloud': EntityType;
    static readonly 'armorStand': EntityType;
    static readonly 'arrow': EntityType;
    static readonly 'axolotl': EntityType;
    static readonly 'bat': EntityType;
    static readonly 'bee': EntityType;
    static readonly 'blaze': EntityType;
    static readonly 'boat': EntityType;
    static readonly 'cat': EntityType;
    static readonly 'caveSpider': EntityType;
    static readonly 'chestMinecart': EntityType;
    static readonly 'chicken': EntityType;
    static readonly 'cod': EntityType;
    static readonly 'commandBlockMinecart': EntityType;
    static readonly 'cow': EntityType;
    static readonly 'creeper': EntityType;
    static readonly 'dolphin': EntityType;
    static readonly 'donkey': EntityType;
    static readonly 'dragonFireball': EntityType;
    static readonly 'drowned': EntityType;
    static readonly 'egg': EntityType;
    static readonly 'elderGuardian': EntityType;
    static readonly 'enderCrystal': EntityType;
    static readonly 'enderDragon': EntityType;
    static readonly 'enderman': EntityType;
    static readonly 'endermite': EntityType;
    static readonly 'enderPearl': EntityType;
    static readonly 'evocationIllager': EntityType;
    static readonly 'eyeOfEnderSignal': EntityType;
    static readonly 'fireball': EntityType;
    static readonly 'fireworksRocket': EntityType;
    static readonly 'fishingHook': EntityType;
    static readonly 'fox': EntityType;
    static readonly 'ghast': EntityType;
    static readonly 'glowSquid': EntityType;
    static readonly 'goat': EntityType;
    static readonly 'guardian': EntityType;
    static readonly 'hoglin': EntityType;
    static readonly 'hopperMinecart': EntityType;
    static readonly 'horse': EntityType;
    static readonly 'husk': EntityType;
    static readonly 'ironGolem': EntityType;
    static readonly 'lightningBolt': EntityType;
    static readonly 'lingeringPotion': EntityType;
    static readonly 'llama': EntityType;
    static readonly 'llamaSpit': EntityType;
    static readonly 'magmaCube': EntityType;
    static readonly 'minecart': EntityType;
    static readonly 'mooshroom': EntityType;
    static readonly 'mule': EntityType;
    static readonly 'npc': EntityType;
    static readonly 'ocelot': EntityType;
    static readonly 'panda': EntityType;
    static readonly 'parrot': EntityType;
    static readonly 'phantom': EntityType;
    static readonly 'pig': EntityType;
    static readonly 'piglin': EntityType;
    static readonly 'piglinBrute': EntityType;
    static readonly 'pillager': EntityType;
    static readonly 'player': EntityType;
    static readonly 'polarBear': EntityType;
    static readonly 'pufferfish': EntityType;
    static readonly 'rabbit': EntityType;
    static readonly 'ravager': EntityType;
    static readonly 'salmon': EntityType;
    static readonly 'sheep': EntityType;
    static readonly 'shulker': EntityType;
    static readonly 'shulkerBullet': EntityType;
    static readonly 'silverfish': EntityType;
    static readonly 'skeleton': EntityType;
    static readonly 'skeletonHorse': EntityType;
    static readonly 'slime': EntityType;
    static readonly 'smallFireball': EntityType;
    static readonly 'snowball': EntityType;
    static readonly 'snowGolem': EntityType;
    static readonly 'spider': EntityType;
    static readonly 'splashPotion': EntityType;
    static readonly 'squid': EntityType;
    static readonly 'stray': EntityType;
    static readonly 'strider': EntityType;
    static readonly 'thrownTrident': EntityType;
    static readonly 'tnt': EntityType;
    static readonly 'tntMinecart': EntityType;
    static readonly 'tripodCamera': EntityType;
    static readonly 'tropicalfish': EntityType;
    static readonly 'turtle': EntityType;
    static readonly 'vex': EntityType;
    static readonly 'villager': EntityType;
    static readonly 'villagerV2': EntityType;
    static readonly 'vindicator': EntityType;
    static readonly 'wanderingTrader': EntityType;
    static readonly 'witch': EntityType;
    static readonly 'wither': EntityType;
    static readonly 'witherSkeleton': EntityType;
    static readonly 'witherSkull': EntityType;
    static readonly 'witherSkullDangerous': EntityType;
    static readonly 'wolf': EntityType;
    static readonly 'xpBottle': EntityType;
    static readonly 'xpOrb': EntityType;
    static readonly 'zoglin': EntityType;
    static readonly 'zombie': EntityType;
    static readonly 'zombieHorse': EntityType;
    static readonly 'zombiePigman': EntityType;
    static readonly 'zombieVillager': EntityType;
    static readonly 'zombieVillagerV2': EntityType;
    protected constructor();
}
/**
 * Contains definitions of standard Minecraft and Minecraft
 * Education Edition block types.
 */
// tslint:disable-next-line:no-unnecessary-class
declare class MinecraftItemTypes {
    static readonly 'acaciaBoat': ItemType;
    /**
     * Represents an item that can place an acacia button within
     * Minecraft.
     */
    static readonly 'acaciaButton': ItemType;
    static readonly 'acaciaChestBoat': ItemType;
    /**
     * Represents an item that can place an acacia door within
     * Minecraft.
     */
    static readonly 'acaciaDoor': ItemType;
    /**
     * Represents an item that can place an acacia fence gate
     * within Minecraft.
     */
    static readonly 'acaciaFenceGate': ItemType;
    /**
     * Represents an item that can place an acacia pressure plate
     * within Minecraft.
     */
    static readonly 'acaciaPressurePlate': ItemType;
    /**
     * Represents an item that can place an acacia sign within
     * Minecraft.
     */
    static readonly 'acaciaSign': ItemType;
    /**
     * Represents an item that can place a set of acacia stairs
     * within Minecraft.
     */
    static readonly 'acaciaStairs': ItemType;
    /**
     * Represents an item that can place an acacia standing sign
     * within Minecraft.
     */
    static readonly 'acaciaStandingSign': ItemType;
    /**
     * Represents an item that can place an acacia trapdoor within
     * Minecraft.
     */
    static readonly 'acaciaTrapdoor': ItemType;
    /**
     * Represents an item that can place an acacia wall sign within
     * Minecraft.
     */
    static readonly 'acaciaWallSign': ItemType;
    /**
     * Represents an item that can place an activator rail within
     * Minecraft.
     */
    static readonly 'activatorRail': ItemType;
    static readonly 'agentSpawnEgg': ItemType;
    /**
     * Represents an item that can place an empty space (air)
     * within Minecraft.
     */
    static readonly 'air': ItemType;
    static readonly 'allaySpawnEgg': ItemType;
    /**
     * Represents an item that can place an allow block within
     * Minecraft.
     */
    static readonly 'allow': ItemType;
    /**
     * Represents an item that can place an amethyst block within
     * Minecraft.
     */
    static readonly 'amethystBlock': ItemType;
    /**
     * Represents an item that can place a cluster of amethyst
     * within Minecraft.
     */
    static readonly 'amethystCluster': ItemType;
    static readonly 'amethystShard': ItemType;
    /**
     * Represents an item that can place ancient debris within
     * Minecraft.
     */
    static readonly 'ancientDebris': ItemType;
    /**
     * Represents an item that can place andesite stairs within
     * Minecraft.
     */
    static readonly 'andesiteStairs': ItemType;
    /**
     * Represents an item that can place an anvil within Minecraft.
     */
    static readonly 'anvil': ItemType;
    static readonly 'apple': ItemType;
    static readonly 'armorStand': ItemType;
    static readonly 'arrow': ItemType;
    static readonly 'axolotlBucket': ItemType;
    static readonly 'axolotlSpawnEgg': ItemType;
    /**
     * Represents an item that can place an azalea flowering plant
     * within Minecraft.
     */
    static readonly 'azalea': ItemType;
    /**
     * Represents an item that can place azalea leaves within
     * Minecraft.
     */
    static readonly 'azaleaLeaves': ItemType;
    /**
     * Represents flowered azalea leaves within Minecraft.
     */
    static readonly 'azaleaLeavesFlowered': ItemType;
    static readonly 'bakedPotato': ItemType;
    static readonly 'balloon': ItemType;
    /**
     * Represents an item that can place a bamboo tree within
     * Minecraft.
     */
    static readonly 'bamboo': ItemType;
    /**
     * Represents an item that can place a bamboo sapling within
     * Minecraft.
     */
    static readonly 'bambooSapling': ItemType;
    static readonly 'banner': ItemType;
    static readonly 'bannerPattern': ItemType;
    /**
     * Represents an item that can place a barrel within Minecraft.
     */
    static readonly 'barrel': ItemType;
    /**
     * Represents an item that can place an invisible but logical
     * barrier within Minecraft.
     */
    static readonly 'barrier': ItemType;
    /**
     * Represents an item that can place a basalt block within
     * Minecraft.
     */
    static readonly 'basalt': ItemType;
    static readonly 'batSpawnEgg': ItemType;
    /**
     * Represents an item that can place a beacon within Minecraft.
     */
    static readonly 'beacon': ItemType;
    /**
     * Represents an item that can place a bed within Minecraft.
     */
    static readonly 'bed': ItemType;
    /**
     * Represents an item that can place a bedrock block within
     * Minecraft.
     */
    static readonly 'bedrock': ItemType;
    static readonly 'beef': ItemType;
    /**
     * Represents an item that can place a beehive within
     * Minecraft.
     */
    static readonly 'beehive': ItemType;
    /**
     * Represents an item that can place a bee nest within
     * Minecraft.
     */
    static readonly 'beeNest': ItemType;
    static readonly 'beeSpawnEgg': ItemType;
    /**
     * Represents an item that can place a beetroot vegetable
     * within Minecraft.
     */
    static readonly 'beetroot': ItemType;
    static readonly 'beetrootSeeds': ItemType;
    static readonly 'beetrootSoup': ItemType;
    /**
     * Represents an item that can place a bell within Minecraft.
     */
    static readonly 'bell': ItemType;
    /**
     * Represents an item that can place a big dripleaf plant
     * within Minecraft.
     */
    static readonly 'bigDripleaf': ItemType;
    static readonly 'birchBoat': ItemType;
    /**
     * Represents an item that can place a birch button within
     * Minecraft.
     */
    static readonly 'birchButton': ItemType;
    static readonly 'birchChestBoat': ItemType;
    /**
     * Represents an item that can place a birch door within
     * Minecraft.
     */
    static readonly 'birchDoor': ItemType;
    /**
     * Represents an item that can place a birch fence gate within
     * Minecraft.
     */
    static readonly 'birchFenceGate': ItemType;
    /**
     * Represents an item that can place a birch pressure plate
     * within Minecraft.
     */
    static readonly 'birchPressurePlate': ItemType;
    /**
     * Represents an item that can place a birch sign within
     * Minecraft.
     */
    static readonly 'birchSign': ItemType;
    /**
     * Represents an item that can place a birch stairs block
     * within Minecraft.
     */
    static readonly 'birchStairs': ItemType;
    /**
     * Represents an item that can place a birch standing sign
     * within Minecraft.
     */
    static readonly 'birchStandingSign': ItemType;
    /**
     * Represents an item that can place a birch trapdoor within
     * Minecraft.
     */
    static readonly 'birchTrapdoor': ItemType;
    /**
     * Represents an item that can place a birch wall sign within
     * Minecraft.
     */
    static readonly 'birchWallSign': ItemType;
    /**
     * Represents an item that can place a black candle within
     * Minecraft.
     */
    static readonly 'blackCandle': ItemType;
    /**
     * Represents an item that can place a black candle cake within
     * Minecraft.
     */
    static readonly 'blackCandleCake': ItemType;
    static readonly 'blackDye': ItemType;
    /**
     * Represents an item that can place a black glazed terracotta
     * block within Minecraft.
     */
    static readonly 'blackGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a blackstone block within
     * Minecraft.
     */
    static readonly 'blackstone': ItemType;
    /**
     * Represents an item that can place a blackstone double slab
     * within Minecraft.
     */
    static readonly 'blackstoneDoubleSlab': ItemType;
    /**
     * Represents an item that can place a blackstone slab within
     * Minecraft.
     */
    static readonly 'blackstoneSlab': ItemType;
    /**
     * Represents blackstone stairs within Minecraft.
     */
    static readonly 'blackstoneStairs': ItemType;
    /**
     * Represents an item that can place a blackstone wall within
     * Minecraft.
     */
    static readonly 'blackstoneWall': ItemType;
    /**
     * Represents an item that can place a blast furnace within
     * Minecraft.
     */
    static readonly 'blastFurnace': ItemType;
    static readonly 'blazePowder': ItemType;
    static readonly 'blazeRod': ItemType;
    static readonly 'blazeSpawnEgg': ItemType;
    static readonly 'bleach': ItemType;
    /**
     * Represents an item that can place a blue candle within
     * Minecraft.
     */
    static readonly 'blueCandle': ItemType;
    /**
     * Represents an item that can place a blue candle cake within
     * Minecraft.
     */
    static readonly 'blueCandleCake': ItemType;
    static readonly 'blueDye': ItemType;
    /**
     * Represents an item that can place a blue glazed terracotta
     * block within Minecraft.
     */
    static readonly 'blueGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a blue ice block within
     * Minecraft.
     */
    static readonly 'blueIce': ItemType;
    static readonly 'boat': ItemType;
    static readonly 'bone': ItemType;
    /**
     * Represents an item that can place a bone block within
     * Minecraft.
     */
    static readonly 'boneBlock': ItemType;
    static readonly 'boneMeal': ItemType;
    static readonly 'book': ItemType;
    /**
     * Represents an item that can place an unbreakable border
     * block within Minecraft.
     */
    static readonly 'bookshelf': ItemType;
    /**
     * Represents an item that can place a border block within
     * Minecraft.
     */
    static readonly 'borderBlock': ItemType;
    static readonly 'bordureIndentedBannerPattern': ItemType;
    static readonly 'bow': ItemType;
    static readonly 'bowl': ItemType;
    static readonly 'bread': ItemType;
    /**
     * Represents an item that can place a brewing stand within
     * Minecraft.
     */
    static readonly 'brewingStand': ItemType;
    static readonly 'brick': ItemType;
    /**
     * Represents an item that can place a block of brick within
     * Minecraft.
     */
    static readonly 'brickBlock': ItemType;
    /**
     * Represents brick stairs within Minecraft.
     */
    static readonly 'brickStairs': ItemType;
    /**
     * Represents an item that can place a brown candle within
     * Minecraft.
     */
    static readonly 'brownCandle': ItemType;
    /**
     * Represents an item that can place a brown candle cake within
     * Minecraft.
     */
    static readonly 'brownCandleCake': ItemType;
    static readonly 'brownDye': ItemType;
    /**
     * Represents an item that can place a brown glazed terracotta
     * block within Minecraft.
     */
    static readonly 'brownGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a brown mushroom within
     * Minecraft.
     */
    static readonly 'brownMushroom': ItemType;
    /**
     * Represents an item that can place a block of brown mushroom
     * within Minecraft.
     */
    static readonly 'brownMushroomBlock': ItemType;
    /**
     * Represents an item that can place a column of bubbles within
     * Minecraft.
     */
    static readonly 'bubbleColumn': ItemType;
    static readonly 'bucket': ItemType;
    /**
     * Represents an item that can place a block of budding
     * amethyst within Minecraft.
     */
    static readonly 'buddingAmethyst': ItemType;
    /**
     * Represents an item that can place a cactus within Minecraft.
     */
    static readonly 'cactus': ItemType;
    /**
     * Represents an item that can place a cake within Minecraft.
     */
    static readonly 'cake': ItemType;
    /**
     * Represents an item that can place a calcite block within
     * Minecraft.
     */
    static readonly 'calcite': ItemType;
    /**
     * Represents an item that can place a camera within Minecraft
     * Education Edition. It is not available in Minecraft Bedrock
     * Edition.
     */
    static readonly 'camera': ItemType;
    /**
     * Represents an item that can place a campfire within
     * Minecraft.
     */
    static readonly 'campfire': ItemType;
    /**
     * Represents an item that can place a candle within Minecraft.
     */
    static readonly 'candle': ItemType;
    /**
     * Represents an item that can place a cake with candles within
     * Minecraft.
     */
    static readonly 'candleCake': ItemType;
    /**
     * Represents an item that can place a carpet within Minecraft.
     */
    static readonly 'carpet': ItemType;
    static readonly 'carrot': ItemType;
    static readonly 'carrotOnAStick': ItemType;
    /**
     * Represents carrots within Minecraft.
     */
    static readonly 'carrots': ItemType;
    /**
     * Represents an item that can place a cartography table block
     * within Minecraft.
     */
    static readonly 'cartographyTable': ItemType;
    /**
     * Represents an item that can place a carved pumpkin within
     * Minecraft.
     */
    static readonly 'carvedPumpkin': ItemType;
    static readonly 'catSpawnEgg': ItemType;
    /**
     * Represents an item that can place a cauldron within
     * Minecraft.
     */
    static readonly 'cauldron': ItemType;
    static readonly 'caveSpiderSpawnEgg': ItemType;
    /**
     * Represents an item that can place a set of cave vines within
     * Minecraft.
     */
    static readonly 'caveVines': ItemType;
    /**
     * Represents the body of a set of cave vines with berries
     * within Minecraft.
     */
    static readonly 'caveVinesBodyWithBerries': ItemType;
    /**
     * Represents the head of a set of cave vines with berries
     * within Minecraft.
     */
    static readonly 'caveVinesHeadWithBerries': ItemType;
    /**
     * Represents an item that can place a metallic chain within
     * Minecraft.
     */
    static readonly 'chain': ItemType;
    /**
     * Represents an item that can place a block that gives off
     * heat but not light, within Minecraft Education Edition or
     * Bedrock Edition with Education features.
     */
    static readonly 'chainCommandBlock': ItemType;
    static readonly 'chainmailBoots': ItemType;
    static readonly 'chainmailChestplate': ItemType;
    static readonly 'chainmailHelmet': ItemType;
    static readonly 'chainmailLeggings': ItemType;
    static readonly 'charcoal': ItemType;
    /**
     * Represents an item that can place a chemical heat block
     * within Minecraft.
     */
    static readonly 'chemicalHeat': ItemType;
    /**
     * Represents an item that can place a chemistry table within
     * Minecraft Education experiences.
     */
    static readonly 'chemistryTable': ItemType;
    /**
     * Represents an item that can place a chest within Minecraft.
     */
    static readonly 'chest': ItemType;
    static readonly 'chestBoat': ItemType;
    static readonly 'chestMinecart': ItemType;
    static readonly 'chicken': ItemType;
    static readonly 'chickenSpawnEgg': ItemType;
    /**
     * Represents an item that can place a set of chiseled
     * deepslate within Minecraft.
     */
    static readonly 'chiseledDeepslate': ItemType;
    /**
     * Represents an item that can place a block of chiseled nether
     * bricks within Minecraft.
     */
    static readonly 'chiseledNetherBricks': ItemType;
    /**
     * Represents an item that can place a block of chiseled
     * polished blackstone within Minecraft.
     */
    static readonly 'chiseledPolishedBlackstone': ItemType;
    /**
     * Represents an item that can place a chorus flower within
     * Minecraft.
     */
    static readonly 'chorusFlower': ItemType;
    static readonly 'chorusFruit': ItemType;
    /**
     * Represents an item that can place a chorus plant within
     * Minecraft.
     */
    static readonly 'chorusPlant': ItemType;
    /**
     * Represents an item that can place a block of clay within
     * Minecraft.
     */
    static readonly 'clay': ItemType;
    static readonly 'clayBall': ItemType;
    static readonly 'clientRequestPlaceholderBlock': ItemType;
    static readonly 'clock': ItemType;
    static readonly 'coal': ItemType;
    /**
     * Represents an item that can place a block of solid coal
     * within Minecraft.
     */
    static readonly 'coalBlock': ItemType;
    /**
     * Represents an item that can place a block with embedded coal
     * ore within Minecraft.
     */
    static readonly 'coalOre': ItemType;
    /**
     * Represents an item that can place a block of cobbled
     * deepslate within Minecraft.
     */
    static readonly 'cobbledDeepslate': ItemType;
    /**
     * Represents an item that can place a double slab of cobbled
     * deepslate within Minecraft.
     */
    static readonly 'cobbledDeepslateDoubleSlab': ItemType;
    /**
     * Represents an item that can place a slab of deepslate within
     * Minecraft.
     */
    static readonly 'cobbledDeepslateSlab': ItemType;
    /**
     * Represents cobbled deepslate stairs within Minecraft.
     */
    static readonly 'cobbledDeepslateStairs': ItemType;
    /**
     * Represents an item that can place a cobbled deepslate wall
     * within Minecraft.
     */
    static readonly 'cobbledDeepslateWall': ItemType;
    /**
     * Represents an item that can place a block of cobblestone
     * within Minecraft.
     */
    static readonly 'cobblestone': ItemType;
    /**
     * Represents an item that can place a wall of cobblestone
     * within Minecraft.
     */
    static readonly 'cobblestoneWall': ItemType;
    /**
     * Represents an item that can place a set of cocoa beans
     * (typically on a tree) within Minecraft.
     */
    static readonly 'cocoa': ItemType;
    static readonly 'cocoaBeans': ItemType;
    static readonly 'cod': ItemType;
    static readonly 'codBucket': ItemType;
    static readonly 'codSpawnEgg': ItemType;
    /**
     * Represents blue/purple torches within Minecraft.
     */
    static readonly 'coloredTorchBp': ItemType;
    /**
     * Represents red/green torches within Minecraft.
     */
    static readonly 'coloredTorchRg': ItemType;
    /**
     * Represents an item that can place a block that can run
     * commands within Minecraft.
     */
    static readonly 'commandBlock': ItemType;
    static readonly 'commandBlockMinecart': ItemType;
    static readonly 'comparator': ItemType;
    static readonly 'compass': ItemType;
    /**
     * Represents an item that can place a composter block within
     * Minecraft.
     */
    static readonly 'composter': ItemType;
    static readonly 'compound': ItemType;
    /**
     * Represents an item that can place a block of concrete powder
     * within Minecraft.
     */
    static readonly 'concrete': ItemType;
    static readonly 'concretePowder': ItemType;
    /**
     * Represents an item that can place a conduit block within
     * Minecraft.
     */
    static readonly 'conduit': ItemType;
    static readonly 'cookedBeef': ItemType;
    static readonly 'cookedChicken': ItemType;
    static readonly 'cookedCod': ItemType;
    static readonly 'cookedMutton': ItemType;
    static readonly 'cookedPorkchop': ItemType;
    static readonly 'cookedRabbit': ItemType;
    static readonly 'cookedSalmon': ItemType;
    static readonly 'cookie': ItemType;
    /**
     * Represents an item that can place a solid block of copper
     * within Minecraft.
     */
    static readonly 'copperBlock': ItemType;
    static readonly 'copperIngot': ItemType;
    /**
     * Represents an item that can place a block with embedded
     * copper ore within Minecraft.
     */
    static readonly 'copperOre': ItemType;
    /**
     * Represents coral within Minecraft.
     */
    static readonly 'coral': ItemType;
    /**
     * Represents an item that can place a solid block of coral
     * within Minecraft.
     */
    static readonly 'coralBlock': ItemType;
    /**
     * Represents an item that can place a fan formation of coral
     * within Minecraft.
     */
    static readonly 'coralFan': ItemType;
    /**
     * Represents an item that can place a fan formation of dead
     * coral within Minecraft.
     */
    static readonly 'coralFanDead': ItemType;
    /**
     * Represents an item that can place a hanging fan formation of
     * coral within Minecraft.
     */
    static readonly 'coralFanHang': ItemType;
    /**
     * Represents an item that can place an alternate hanging fan
     * formation of coral (#2) within Minecraft.
     */
    static readonly 'coralFanHang2': ItemType;
    /**
     * Represents an item that can place an alternate hanging fan
     * formation of coral (#3) within Minecraft.
     */
    static readonly 'coralFanHang3': ItemType;
    static readonly 'cowSpawnEgg': ItemType;
    /**
     * Represents an item that can place a block of cracked
     * deepslate bricks within Minecraft.
     */
    static readonly 'crackedDeepslateBricks': ItemType;
    /**
     * Represents tiles of cracked deepslate within Minecraft.
     */
    static readonly 'crackedDeepslateTiles': ItemType;
    /**
     * Represents an item that can place a block of cracked nether
     * bricks within Minecraft.
     */
    static readonly 'crackedNetherBricks': ItemType;
    /**
     * Represents an item that can place a block of cracked and
     * polished blackstone bricks within Minecraft.
     */
    static readonly 'crackedPolishedBlackstoneBricks': ItemType;
    /**
     * Represents an item that can place a crafting table within
     * Minecraft.
     */
    static readonly 'craftingTable': ItemType;
    static readonly 'creeperBannerPattern': ItemType;
    static readonly 'creeperSpawnEgg': ItemType;
    /**
     * Represents an item that can place a crimson button within
     * Minecraft.
     */
    static readonly 'crimsonButton': ItemType;
    /**
     * Represents an item that can place a crimson door within
     * Minecraft.
     */
    static readonly 'crimsonDoor': ItemType;
    /**
     * Represents an item that can place a crimson double slab
     * within Minecraft.
     */
    static readonly 'crimsonDoubleSlab': ItemType;
    /**
     * Represents an item that can place a crimson fence within
     * Minecraft.
     */
    static readonly 'crimsonFence': ItemType;
    /**
     * Represents an item that can place a crimson fence gate
     * within Minecraft.
     */
    static readonly 'crimsonFenceGate': ItemType;
    /**
     * Represents an item that can place a crimson fungus within
     * Minecraft.
     */
    static readonly 'crimsonFungus': ItemType;
    /**
     * Represents crimson hyphae within Minecraft.
     */
    static readonly 'crimsonHyphae': ItemType;
    /**
     * Represents crimson nylium within Minecraft.
     */
    static readonly 'crimsonNylium': ItemType;
    /**
     * Represents an item that can place a set of crimson planks
     * within Minecraft.
     */
    static readonly 'crimsonPlanks': ItemType;
    /**
     * Represents an item that can place a crimson pressure plate
     * within Minecraft.
     */
    static readonly 'crimsonPressurePlate': ItemType;
    /**
     * Represents an item that can place a set of crimson roots
     * within Minecraft.
     */
    static readonly 'crimsonRoots': ItemType;
    static readonly 'crimsonSign': ItemType;
    /**
     * Represents an item that can place a crimson slab within
     * Minecraft.
     */
    static readonly 'crimsonSlab': ItemType;
    /**
     * Represents an item that can place a set of crimson stairs
     * within Minecraft.
     */
    static readonly 'crimsonStairs': ItemType;
    /**
     * Represents an item that can place a crimson standing sign
     * within Minecraft.
     */
    static readonly 'crimsonStandingSign': ItemType;
    /**
     * Represents an item that can place a crimson stem within
     * Minecraft.
     */
    static readonly 'crimsonStem': ItemType;
    /**
     * Represents an item that can place a crimson trapdoor within
     * Minecraft.
     */
    static readonly 'crimsonTrapdoor': ItemType;
    /**
     * Represents an item that can place a crimson wall sign within
     * Minecraft.
     */
    static readonly 'crimsonWallSign': ItemType;
    static readonly 'crossbow': ItemType;
    /**
     * Represents crying obsidian within Minecraft.
     */
    static readonly 'cryingObsidian': ItemType;
    /**
     * Represents an item that can place a cut copper block within
     * Minecraft.
     */
    static readonly 'cutCopper': ItemType;
    /**
     * Represents an item that can place a cut copper slab within
     * Minecraft.
     */
    static readonly 'cutCopperSlab': ItemType;
    /**
     * Represents an item that can place a set of cut copper stairs
     * within Minecraft.
     */
    static readonly 'cutCopperStairs': ItemType;
    /**
     * Represents an item that can place a cyan-colored candle
     * within Minecraft.
     */
    static readonly 'cyanCandle': ItemType;
    /**
     * Represents an item that can place a cake with a cyan-colored
     * candle within Minecraft.
     */
    static readonly 'cyanCandleCake': ItemType;
    static readonly 'cyanDye': ItemType;
    /**
     * Represents an item that can place a block of cyan-colored
     * glazed terracotta within Minecraft.
     */
    static readonly 'cyanGlazedTerracotta': ItemType;
    static readonly 'darkOakBoat': ItemType;
    /**
     * Represents an item that can place a dark oak button within
     * Minecraft.
     */
    static readonly 'darkOakButton': ItemType;
    static readonly 'darkOakChestBoat': ItemType;
    /**
     * Represents an item that can place a dark oak door within
     * Minecraft.
     */
    static readonly 'darkOakDoor': ItemType;
    /**
     * Represents an item that can place a dark oak fence gate
     * within Minecraft.
     */
    static readonly 'darkOakFenceGate': ItemType;
    /**
     * Represents an item that can place a dark oak pressure plate
     * within Minecraft.
     */
    static readonly 'darkOakPressurePlate': ItemType;
    /**
     * Represents an item that can place a dark oak sign within
     * Minecraft.
     */
    static readonly 'darkOakSign': ItemType;
    /**
     * Represents an item that can place a set of dark oak stairs
     * within Minecraft.
     */
    static readonly 'darkOakStairs': ItemType;
    /**
     * Represents an item that can place a dark oak standing sign
     * within Minecraft.
     */
    static readonly 'darkoakStandingSign': ItemType;
    /**
     * Represents an item that can place a dark oak trapdoor within
     * Minecraft.
     */
    static readonly 'darkOakTrapdoor': ItemType;
    /**
     * Represents an item that can place a dark oak wall sign
     * within Minecraft.
     */
    static readonly 'darkoakWallSign': ItemType;
    /**
     * Represents an item that can place a set of dark prismarine
     * stairs within Minecraft.
     */
    static readonly 'darkPrismarineStairs': ItemType;
    /**
     * Represents an item that can place a daylight detector within
     * Minecraft.
     */
    static readonly 'daylightDetector': ItemType;
    /**
     * Represents an item that can place an inverted daylight
     * detector within Minecraft.
     */
    static readonly 'daylightDetectorInverted': ItemType;
    /**
     * Represents an item that can place a dead bush within
     * Minecraft.
     */
    static readonly 'deadbush': ItemType;
    static readonly 'debugStick': ItemType;
    /**
     * Represents an item that can place a block of deepslate
     * within Minecraft.
     */
    static readonly 'deepslate': ItemType;
    /**
     * Represents an item that can place a double slab of deepslate
     * brick within Minecraft.
     */
    static readonly 'deepslateBrickDoubleSlab': ItemType;
    /**
     * Represents an item that can place a block of deepslate
     * bricks within Minecraft.
     */
    static readonly 'deepslateBricks': ItemType;
    /**
     * Represents an item that can place a slab of deepslate brick
     * within Minecraft.
     */
    static readonly 'deepslateBrickSlab': ItemType;
    /**
     * Represents an item that can place a set of deepslate brick
     * stairs within Minecraft.
     */
    static readonly 'deepslateBrickStairs': ItemType;
    /**
     * Represents an item that can place a deepslate brick wall
     * within Minecraft.
     */
    static readonly 'deepslateBrickWall': ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded coal ore within Minecraft.
     */
    static readonly 'deepslateCoalOre': ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded copper ore within Minecraft.
     */
    static readonly 'deepslateCopperOre': ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded diamond ore within Minecraft.
     */
    static readonly 'deepslateDiamondOre': ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded emerald ore within Minecraft.
     */
    static readonly 'deepslateEmeraldOre': ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded gold ore within Minecraft.
     */
    static readonly 'deepslateGoldOre': ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded iron ore within Minecraft.
     */
    static readonly 'deepslateIronOre': ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded lapis lazuli ore within Minecraft.
     */
    static readonly 'deepslateLapisOre': ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded redstone ore within Minecraft.
     */
    static readonly 'deepslateRedstoneOre': ItemType;
    /**
     * Represents an item that can place a double slab of tiled
     * deepslate within Minecraft.
     */
    static readonly 'deepslateTileDoubleSlab': ItemType;
    /**
     * Represents an item that can place a set of deepslate tiles
     * within Minecraft.
     */
    static readonly 'deepslateTiles': ItemType;
    /**
     * Represents an item that can place a slab of deepslate tiles
     * within Minecraft.
     */
    static readonly 'deepslateTileSlab': ItemType;
    /**
     * Represents an item that can place a set of deepslate tile
     * stairs within Minecraft.
     */
    static readonly 'deepslateTileStairs': ItemType;
    /**
     * Represents an item that can place a wall of deepslate tile
     * within Minecraft.
     */
    static readonly 'deepslateTileWall': ItemType;
    /**
     * Represents an item that can place a logical but generally
     * invisible Deny logic block within Minecraft.
     */
    static readonly 'deny': ItemType;
    /**
     * Represents an item that can place a detector rail within
     * Minecraft.
     */
    static readonly 'detectorRail': ItemType;
    static readonly 'diamond': ItemType;
    static readonly 'diamondAxe': ItemType;
    /**
     * Represents an item that can place a block of diamond within
     * Minecraft.
     */
    static readonly 'diamondBlock': ItemType;
    static readonly 'diamondBoots': ItemType;
    static readonly 'diamondChestplate': ItemType;
    static readonly 'diamondHelmet': ItemType;
    static readonly 'diamondHoe': ItemType;
    static readonly 'diamondHorseArmor': ItemType;
    static readonly 'diamondLeggings': ItemType;
    /**
     * Represents an item that can place a block with embedded
     * diamond ore within Minecraft.
     */
    static readonly 'diamondOre': ItemType;
    static readonly 'diamondPickaxe': ItemType;
    static readonly 'diamondShovel': ItemType;
    static readonly 'diamondSword': ItemType;
    /**
     * Represents an item that can place a set of diorite stairs
     * within Minecraft.
     */
    static readonly 'dioriteStairs': ItemType;
    /**
     * Represents an item that can place a block of dirt within
     * Minecraft.
     */
    static readonly 'dirt': ItemType;
    /**
     * Represents an item that can place a block of dirt with roots
     * within Minecraft.
     */
    static readonly 'dirtWithRoots': ItemType;
    /**
     * Represents an item that can place a dispenser within
     * Minecraft.
     */
    static readonly 'dispenser': ItemType;
    static readonly 'dolphinSpawnEgg': ItemType;
    static readonly 'donkeySpawnEgg': ItemType;
    /**
     * Represents an item that can place a slab of double cut
     * copper within Minecraft.
     */
    static readonly 'doubleCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a double plant within
     * Minecraft.
     */
    static readonly 'doublePlant': ItemType;
    /**
     * Represents an item that can place a double slab of stone
     * within Minecraft.
     */
    static readonly 'doubleStoneSlab': ItemType;
    /**
     * Represents an item that can place an alternate double slab
     * of stone (#2) within Minecraft.
     */
    static readonly 'doubleStoneSlab2': ItemType;
    /**
     * Represents an item that can place an alternate double slab
     * of stone (#3) within Minecraft.
     */
    static readonly 'doubleStoneSlab3': ItemType;
    /**
     * Represents an item that can place an alternate double slab
     * of stone (#4) within Minecraft.
     */
    static readonly 'doubleStoneSlab4': ItemType;
    /**
     * Represents an item that can place a double slab of wood
     * within Minecraft.
     */
    static readonly 'doubleWoodenSlab': ItemType;
    static readonly 'dragonBreath': ItemType;
    /**
     * Represents an item that can place a dragon egg within
     * Minecraft.
     */
    static readonly 'dragonEgg': ItemType;
    static readonly 'driedKelp': ItemType;
    /**
     * Represents an item that can place a block of dried kelp
     * within Minecraft.
     */
    static readonly 'driedKelpBlock': ItemType;
    /**
     * Represents an item that can place a block of dripstone
     * within Minecraft.
     */
    static readonly 'dripstoneBlock': ItemType;
    /**
     * Represents an item that can place a dropper within
     * Minecraft.
     */
    static readonly 'dropper': ItemType;
    static readonly 'drownedSpawnEgg': ItemType;
    static readonly 'dye': ItemType;
    static readonly 'egg': ItemType;
    static readonly 'elderGuardianSpawnEgg': ItemType;
    /**
     * Represents an item that can place an element in Minecraft
     * Education experiences.
     */
    static readonly 'element0': ItemType;
    /**
     * Represents the hydrogen element in Minecraft Education
     * experiences.
     */
    static readonly 'element1': ItemType;
    /**
     * Represents the neon element in Minecraft Education
     * experiences.
     */
    static readonly 'element10': ItemType;
    /**
     * Represents the fermium element in Minecraft Education
     * experiences.
     */
    static readonly 'element100': ItemType;
    /**
     * Represents the mendelevium element in Minecraft Education
     * experiences.
     */
    static readonly 'element101': ItemType;
    /**
     * Represents the nobelium element in Minecraft Education
     * experiences.
     */
    static readonly 'element102': ItemType;
    /**
     * Represents the lawrencium element in Minecraft Education
     * experiences.
     */
    static readonly 'element103': ItemType;
    /**
     * Represents the rutherfordium element in Minecraft Education
     * experiences.
     */
    static readonly 'element104': ItemType;
    /**
     * Represents the dubnium element in Minecraft Education
     * experiences.
     */
    static readonly 'element105': ItemType;
    /**
     * Represents the seaborgium element in Minecraft Education
     * experiences.
     */
    static readonly 'element106': ItemType;
    /**
     * Represents the bohrium element in Minecraft Education
     * experiences.
     */
    static readonly 'element107': ItemType;
    /**
     * Represents the hassium element in Minecraft Education
     * experiences.
     */
    static readonly 'element108': ItemType;
    /**
     * Represents the meitnerium element in Minecraft Education
     * experiences.
     */
    static readonly 'element109': ItemType;
    /**
     * Represents the sodium element in Minecraft Education
     * experiences.
     */
    static readonly 'element11': ItemType;
    /**
     * Represents the darmstadtium element in Minecraft Education
     * experiences.
     */
    static readonly 'element110': ItemType;
    /**
     * Represents the roentgenium element in Minecraft Education
     * experiences.
     */
    static readonly 'element111': ItemType;
    /**
     * Represents the copernicium element in Minecraft Education
     * experiences.
     */
    static readonly 'element112': ItemType;
    /**
     * Represents the nihonium element in Minecraft Education
     * experiences.
     */
    static readonly 'element113': ItemType;
    /**
     * Represents the flerovium element in Minecraft Education
     * experiences.
     */
    static readonly 'element114': ItemType;
    /**
     * Represents the moscovium element in Minecraft Education
     * experiences.
     */
    static readonly 'element115': ItemType;
    /**
     * Represents the livermorium element in Minecraft Education
     * experiences.
     */
    static readonly 'element116': ItemType;
    /**
     * Represents the tennessine element in Minecraft Education
     * experiences.
     */
    static readonly 'element117': ItemType;
    /**
     * Represents the oganesson element in Minecraft Education
     * experiences.
     */
    static readonly 'element118': ItemType;
    /**
     * Represents the magnesium element in Minecraft Education
     * experiences.
     */
    static readonly 'element12': ItemType;
    /**
     * Represents the aluminum element in Minecraft Education
     * experiences.
     */
    static readonly 'element13': ItemType;
    /**
     * Represents the silicon element in Minecraft Education
     * experiences.
     */
    static readonly 'element14': ItemType;
    /**
     * Represents the phosphorus element in Minecraft Education
     * experiences.
     */
    static readonly 'element15': ItemType;
    /**
     * Represents the sulfur element in Minecraft Education
     * experiences.
     */
    static readonly 'element16': ItemType;
    /**
     * Represents the chlorine element in Minecraft Education
     * experiences.
     */
    static readonly 'element17': ItemType;
    /**
     * Represents the argon element in Minecraft Education
     * experiences.
     */
    static readonly 'element18': ItemType;
    /**
     * Represents the potassium element in Minecraft Education
     * experiences.
     */
    static readonly 'element19': ItemType;
    /**
     * Represents the helium element in Minecraft Education
     * experiences.
     */
    static readonly 'element2': ItemType;
    /**
     * Represents the calcium element in Minecraft Education
     * experiences.
     */
    static readonly 'element20': ItemType;
    /**
     * Represents the scandium element in Minecraft Education
     * experiences.
     */
    static readonly 'element21': ItemType;
    /**
     * Represents the titanium element in Minecraft Education
     * experiences.
     */
    static readonly 'element22': ItemType;
    /**
     * Represents the vanadium element in Minecraft Education
     * experiences.
     */
    static readonly 'element23': ItemType;
    /**
     * Represents the chromium element in Minecraft Education
     * experiences.
     */
    static readonly 'element24': ItemType;
    /**
     * Represents the manganese element in Minecraft Education
     * experiences.
     */
    static readonly 'element25': ItemType;
    /**
     * Represents the iron element in Minecraft Education
     * experiences.
     */
    static readonly 'element26': ItemType;
    /**
     * Represents the cobalt element in Minecraft Education
     * experiences.
     */
    static readonly 'element27': ItemType;
    /**
     * Represents the nickel element in Minecraft Education
     * experiences.
     */
    static readonly 'element28': ItemType;
    /**
     * Represents the copper element in Minecraft Education
     * experiences.
     */
    static readonly 'element29': ItemType;
    /**
     * Represents an item that can place a lithium element in
     * Minecraft Education experiences.
     */
    static readonly 'element3': ItemType;
    /**
     * Represents the zinc element in Minecraft Education
     * experiences.
     */
    static readonly 'element30': ItemType;
    /**
     * Represents the gallium element in Minecraft Education
     * experiences.
     */
    static readonly 'element31': ItemType;
    /**
     * Represents an item that can place a germanium element in
     * Minecraft Education experiences.
     */
    static readonly 'element32': ItemType;
    /**
     * Represents the arsenic element in Minecraft Education
     * experiences.
     */
    static readonly 'element33': ItemType;
    /**
     * Represents the selenium element in Minecraft Education
     * experiences.
     */
    static readonly 'element34': ItemType;
    /**
     * Represents the bromine element in Minecraft Education
     * experiences.
     */
    static readonly 'element35': ItemType;
    /**
     * Represents the krypton element in Minecraft Education
     * experiences.
     */
    static readonly 'element36': ItemType;
    /**
     * Represents the rubidium element in Minecraft Education
     * experiences.
     */
    static readonly 'element37': ItemType;
    /**
     * Represents the strontium element in Minecraft Education
     * experiences.
     */
    static readonly 'element38': ItemType;
    /**
     * Represents the yttrium element in Minecraft Education
     * experiences.
     */
    static readonly 'element39': ItemType;
    /**
     * Represents an item that can place a beryllium element in
     * Minecraft Education experiences.
     */
    static readonly 'element4': ItemType;
    /**
     * Represents the zirconium element in Minecraft Education
     * experiences.
     */
    static readonly 'element40': ItemType;
    /**
     * Represents the niobium element in Minecraft Education
     * experiences.
     */
    static readonly 'element41': ItemType;
    /**
     * Represents the molybdenum element in Minecraft Education
     * experiences.
     */
    static readonly 'element42': ItemType;
    /**
     * Represents the technetium element in Minecraft Education
     * experiences.
     */
    static readonly 'element43': ItemType;
    /**
     * Represents the ruthenium element in Minecraft Education
     * experiences.
     */
    static readonly 'element44': ItemType;
    /**
     * Represents the rhodium element in Minecraft Education
     * experiences.
     */
    static readonly 'element45': ItemType;
    /**
     * Represents the palladium element in Minecraft Education
     * experiences.
     */
    static readonly 'element46': ItemType;
    /**
     * Represents the silver element in Minecraft Education
     * experiences.
     */
    static readonly 'element47': ItemType;
    /**
     * Represents the cadmium element in Minecraft Education
     * experiences.
     */
    static readonly 'element48': ItemType;
    /**
     * Represents the indium element in Minecraft Education
     * experiences.
     */
    static readonly 'element49': ItemType;
    /**
     * Represents the boron element in Minecraft Education
     * experiences.
     */
    static readonly 'element5': ItemType;
    /**
     * Represents the tin element in Minecraft Education
     * experiences.
     */
    static readonly 'element50': ItemType;
    /**
     * Represents the antimony element in Minecraft Education
     * experiences.
     */
    static readonly 'element51': ItemType;
    /**
     * Represents the tellurium element in Minecraft Education
     * experiences.
     */
    static readonly 'element52': ItemType;
    /**
     * Represents the iodine element in Minecraft Education
     * experiences.
     */
    static readonly 'element53': ItemType;
    /**
     * Represents the xenon element in Minecraft Education
     * experiences.
     */
    static readonly 'element54': ItemType;
    /**
     * Represents the cesium element in Minecraft Education
     * experiences.
     */
    static readonly 'element55': ItemType;
    /**
     * Represents the barium element in Minecraft Education
     * experiences.
     */
    static readonly 'element56': ItemType;
    /**
     * Represents the lanthanum element in Minecraft Education
     * experiences.
     */
    static readonly 'element57': ItemType;
    /**
     * Represents the cerium element in Minecraft Education
     * experiences.
     */
    static readonly 'element58': ItemType;
    /**
     * Represents the praseodymium element in Minecraft Education
     * experiences.
     */
    static readonly 'element59': ItemType;
    /**
     * Represents the carbon element in Minecraft Education
     * experiences.
     */
    static readonly 'element6': ItemType;
    /**
     * Represents the neodymium element in Minecraft Education
     * experiences.
     */
    static readonly 'element60': ItemType;
    /**
     * Represents the promethium element in Minecraft Education
     * experiences.
     */
    static readonly 'element61': ItemType;
    /**
     * Represents the samarium element in Minecraft Education
     * experiences.
     */
    static readonly 'element62': ItemType;
    /**
     * Represents the europium element in Minecraft Education
     * experiences.
     */
    static readonly 'element63': ItemType;
    /**
     * Represents the gadolinium element in Minecraft Education
     * experiences.
     */
    static readonly 'element64': ItemType;
    /**
     * Represents an item that can place a terbium element in
     * Minecraft Education experiences.
     */
    static readonly 'element65': ItemType;
    /**
     * Represents the dysprosium element in Minecraft Education
     * experiences.
     */
    static readonly 'element66': ItemType;
    /**
     * Represents the holmium element in Minecraft Education
     * experiences.
     */
    static readonly 'element67': ItemType;
    /**
     * Represents the erbium element in Minecraft Education
     * experiences.
     */
    static readonly 'element68': ItemType;
    /**
     * Represents the thulium element in Minecraft Education
     * experiences.
     */
    static readonly 'element69': ItemType;
    /**
     * Represents the nitrogen element in Minecraft Education
     * experiences.
     */
    static readonly 'element7': ItemType;
    /**
     * Represents the ytterbium element in Minecraft Education
     * experiences.
     */
    static readonly 'element70': ItemType;
    /**
     * Represents the lutetium element in Minecraft Education
     * experiences.
     */
    static readonly 'element71': ItemType;
    /**
     * Represents an item that can place a hafnium element in
     * Minecraft Education experiences.
     */
    static readonly 'element72': ItemType;
    /**
     * Represents the tantalum element in Minecraft Education
     * experiences.
     */
    static readonly 'element73': ItemType;
    /**
     * Represents the tungsten element in Minecraft Education
     * experiences.
     */
    static readonly 'element74': ItemType;
    /**
     * Represents the rhenium element in Minecraft Education
     * experiences.
     */
    static readonly 'element75': ItemType;
    /**
     * Represents the osmium element in Minecraft Education
     * experiences.
     */
    static readonly 'element76': ItemType;
    /**
     * Represents the iridium element in Minecraft Education
     * experiences.
     */
    static readonly 'element77': ItemType;
    /**
     * Represents the platinum element in Minecraft Education
     * experiences.
     */
    static readonly 'element78': ItemType;
    /**
     * Represents the gold element in Minecraft Education
     * experiences.
     */
    static readonly 'element79': ItemType;
    /**
     * Represents the oxygen element in Minecraft Education
     * experiences.
     */
    static readonly 'element8': ItemType;
    /**
     * Represents the mercury element in Minecraft Education
     * experiences.
     */
    static readonly 'element80': ItemType;
    /**
     * Represents the thallium element in Minecraft Education
     * experiences.
     */
    static readonly 'element81': ItemType;
    /**
     * Represents the lead element in Minecraft Education
     * experiences.
     */
    static readonly 'element82': ItemType;
    /**
     * Represents the bismuth element in Minecraft Education
     * experiences.
     */
    static readonly 'element83': ItemType;
    /**
     * Represents the polonium element in Minecraft Education
     * experiences.
     */
    static readonly 'element84': ItemType;
    /**
     * Represents the astatine element in Minecraft Education
     * experiences.
     */
    static readonly 'element85': ItemType;
    /**
     * Represents the radon element in Minecraft Education
     * experiences.
     */
    static readonly 'element86': ItemType;
    /**
     * Represents the francium element in Minecraft Education
     * experiences.
     */
    static readonly 'element87': ItemType;
    /**
     * Represents the radium element in Minecraft Education
     * experiences.
     */
    static readonly 'element88': ItemType;
    /**
     * Represents the actinium element in Minecraft Education
     * experiences.
     */
    static readonly 'element89': ItemType;
    /**
     * Represents the fluorine element in Minecraft Education
     * experiences.
     */
    static readonly 'element9': ItemType;
    /**
     * Represents the thorium element in Minecraft Education
     * experiences.
     */
    static readonly 'element90': ItemType;
    /**
     * Represents the protactinium element in Minecraft Education
     * experiences.
     */
    static readonly 'element91': ItemType;
    /**
     * Represents the uranium element in Minecraft Education
     * experiences.
     */
    static readonly 'element92': ItemType;
    /**
     * Represents the neptunium element in Minecraft Education
     * experiences.
     */
    static readonly 'element93': ItemType;
    /**
     * Represents the plutonium element in Minecraft Education
     * experiences.
     */
    static readonly 'element94': ItemType;
    /**
     * Represents the americium element in Minecraft Education
     * experiences.
     */
    static readonly 'element95': ItemType;
    /**
     * Represents the curium element in Minecraft Education
     * experiences.
     */
    static readonly 'element96': ItemType;
    /**
     * Represents the berkelium element in Minecraft Education
     * experiences.
     */
    static readonly 'element97': ItemType;
    /**
     * Represents the californium element in Minecraft Education
     * experiences.
     */
    static readonly 'element98': ItemType;
    /**
     * Represents the einsteinium element in Minecraft Education
     * experiences.
     */
    static readonly 'element99': ItemType;
    static readonly 'elytra': ItemType;
    static readonly 'emerald': ItemType;
    /**
     * Represents an item that can place a block of emerald within
     * Minecraft.
     */
    static readonly 'emeraldBlock': ItemType;
    /**
     * Represents an item that can place a block with embedded
     * emerald ore within Minecraft.
     */
    static readonly 'emeraldOre': ItemType;
    static readonly 'emptyMap': ItemType;
    static readonly 'enchantedBook': ItemType;
    static readonly 'enchantedGoldenApple': ItemType;
    /**
     * Represents an item that can place an enchanting table within
     * Minecraft.
     */
    static readonly 'enchantingTable': ItemType;
    /**
     * Represents an item that can place an end bricks block within
     * Minecraft.
     */
    static readonly 'endBricks': ItemType;
    /**
     * Represents an item that can place a set of end brick stairs
     * within Minecraft.
     */
    static readonly 'endBrickStairs': ItemType;
    static readonly 'endCrystal': ItemType;
    /**
     * Represents an item that can place an ender chest within
     * Minecraft.
     */
    static readonly 'enderChest': ItemType;
    static readonly 'enderEye': ItemType;
    static readonly 'endermanSpawnEgg': ItemType;
    static readonly 'endermiteSpawnEgg': ItemType;
    static readonly 'enderPearl': ItemType;
    /**
     * Represents an item that can place an end gateway within
     * Minecraft.
     */
    static readonly 'endGateway': ItemType;
    /**
     * Represents an item that can place an end portal block within
     * Minecraft.
     */
    static readonly 'endPortal': ItemType;
    /**
     * Represents an item that can place an end portal frame within
     * Minecraft.
     */
    static readonly 'endPortalFrame': ItemType;
    /**
     * Represents an item that can place an end rod within
     * Minecraft.
     */
    static readonly 'endRod': ItemType;
    /**
     * Represents an item that can place an end stone block within
     * Minecraft.
     */
    static readonly 'endStone': ItemType;
    static readonly 'evokerSpawnEgg': ItemType;
    static readonly 'experienceBottle': ItemType;
    /**
     * Represents an item that can place a block of exposed copper
     * within Minecraft.
     */
    static readonly 'exposedCopper': ItemType;
    /**
     * Represents an item that can place a block of exposed cut
     * copper within Minecraft.
     */
    static readonly 'exposedCutCopper': ItemType;
    /**
     * Represents an item that can place a slab of exposed cut
     * copper within Minecraft.
     */
    static readonly 'exposedCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a set of exposed cut
     * copper stairs within Minecraft.
     */
    static readonly 'exposedCutCopperStairs': ItemType;
    /**
     * Represents an item that can place a double slab of exposed
     * cut copper within Minecraft.
     */
    static readonly 'exposedDoubleCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a farmland block within
     * Minecraft.
     */
    static readonly 'farmland': ItemType;
    static readonly 'feather': ItemType;
    /**
     * Represents an item that can place a fence within Minecraft.
     */
    static readonly 'fence': ItemType;
    /**
     * Represents an item that can place a fence gate within
     * Minecraft.
     */
    static readonly 'fenceGate': ItemType;
    static readonly 'fermentedSpiderEye': ItemType;
    static readonly 'fieldMasonedBannerPattern': ItemType;
    static readonly 'filledMap': ItemType;
    /**
     * Represents an item that can place a fire within Minecraft.
     */
    static readonly 'fire': ItemType;
    static readonly 'fireCharge': ItemType;
    static readonly 'fireflySpawnEgg': ItemType;
    static readonly 'fireworkRocket': ItemType;
    static readonly 'fireworkStar': ItemType;
    static readonly 'fishingRod': ItemType;
    /**
     * Represents an item that can place a fletching table within
     * Minecraft.
     */
    static readonly 'fletchingTable': ItemType;
    static readonly 'flint': ItemType;
    static readonly 'flintAndSteel': ItemType;
    static readonly 'flowerBannerPattern': ItemType;
    /**
     * Represents an item that can place a flowering azalea plant
     * within Minecraft.
     */
    static readonly 'floweringAzalea': ItemType;
    /**
     * Represents an item that can place a flower pot within
     * Minecraft.
     */
    static readonly 'flowerPot': ItemType;
    /**
     * Represents flowing lava within Minecraft.
     */
    static readonly 'flowingLava': ItemType;
    /**
     * Represents flowing water within Minecraft.
     */
    static readonly 'flowingWater': ItemType;
    static readonly 'foxSpawnEgg': ItemType;
    /**
     * Represents an item that can place a frame within Minecraft.
     */
    static readonly 'frame': ItemType;
    static readonly 'frogSpawn': ItemType;
    static readonly 'frogSpawnEgg': ItemType;
    /**
     * Represents an item that can place a frosted ice block within
     * Minecraft.
     */
    static readonly 'frostedIce': ItemType;
    /**
     * Represents an item that can place a furnace within
     * Minecraft.
     */
    static readonly 'furnace': ItemType;
    static readonly 'ghastSpawnEgg': ItemType;
    static readonly 'ghastTear': ItemType;
    /**
     * Represents an item that can place a block of gilded
     * blackstone within Minecraft.
     */
    static readonly 'gildedBlackstone': ItemType;
    /**
     * Represents an item that can place a glass block within
     * Minecraft.
     */
    static readonly 'glass': ItemType;
    static readonly 'glassBottle': ItemType;
    /**
     * Represents an item that can place a pane of glass within
     * Minecraft.
     */
    static readonly 'glassPane': ItemType;
    static readonly 'glisteringMelonSlice': ItemType;
    static readonly 'globeBannerPattern': ItemType;
    static readonly 'glowBerries': ItemType;
    /**
     * Represents an item that can place a glowing frame within
     * Minecraft.
     */
    static readonly 'glowFrame': ItemType;
    /**
     * Represents an item that can place a glowing obsidian block
     * within Minecraft.
     */
    static readonly 'glowingobsidian': ItemType;
    static readonly 'glowInkSac': ItemType;
    /**
     * Represents glow lichen within Minecraft.
     */
    static readonly 'glowLichen': ItemType;
    static readonly 'glowSquidSpawnEgg': ItemType;
    static readonly 'glowStick': ItemType;
    /**
     * Represents an item that can place a block of glowstone
     * within Minecraft.
     */
    static readonly 'glowstone': ItemType;
    static readonly 'glowstoneDust': ItemType;
    static readonly 'goatSpawnEgg': ItemType;
    /**
     * Represents an item that can place a gold block within
     * Minecraft.
     */
    static readonly 'goldBlock': ItemType;
    static readonly 'goldenApple': ItemType;
    static readonly 'goldenAxe': ItemType;
    static readonly 'goldenBoots': ItemType;
    static readonly 'goldenCarrot': ItemType;
    static readonly 'goldenChestplate': ItemType;
    static readonly 'goldenHelmet': ItemType;
    static readonly 'goldenHoe': ItemType;
    static readonly 'goldenHorseArmor': ItemType;
    static readonly 'goldenLeggings': ItemType;
    static readonly 'goldenPickaxe': ItemType;
    /**
     * Represents an item that can place a golden rail element
     * within Minecraft.
     */
    static readonly 'goldenRail': ItemType;
    static readonly 'goldenShovel': ItemType;
    static readonly 'goldenSword': ItemType;
    static readonly 'goldIngot': ItemType;
    static readonly 'goldNugget': ItemType;
    /**
     * Represents an item that can place a block with embedded gold
     * ore within Minecraft.
     */
    static readonly 'goldOre': ItemType;
    /**
     * Represents an item that can place a set of granite stairs
     * within Minecraft.
     */
    static readonly 'graniteStairs': ItemType;
    /**
     * Represents an item that can place a block of dirt and grass
     * within Minecraft.
     */
    static readonly 'grass': ItemType;
    /**
     * Represents an item that can place a block of dirt and grass
     * with a path within Minecraft.
     */
    static readonly 'grassPath': ItemType;
    /**
     * Represents an item that can place a block of gravel within
     * Minecraft.
     */
    static readonly 'gravel': ItemType;
    /**
     * Represents an item that can place a gray-colored candle
     * within Minecraft.
     */
    static readonly 'grayCandle': ItemType;
    /**
     * Represents an item that can place a cake with gray-colored
     * candle within Minecraft.
     */
    static readonly 'grayCandleCake': ItemType;
    static readonly 'grayDye': ItemType;
    /**
     * Represents an item that can place a gray-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly 'grayGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a green-colored candle
     * within Minecraft.
     */
    static readonly 'greenCandle': ItemType;
    /**
     * Represents an item that can place a green-colored candle
     * cake within Minecraft.
     */
    static readonly 'greenCandleCake': ItemType;
    static readonly 'greenDye': ItemType;
    /**
     * Represents an item that can place a green block of glazed
     * terracotta within Minecraft.
     */
    static readonly 'greenGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a grindstone within
     * Minecraft.
     */
    static readonly 'grindstone': ItemType;
    static readonly 'guardianSpawnEgg': ItemType;
    static readonly 'gunpowder': ItemType;
    /**
     * Represents an item that can place a set of hanging roots
     * within Minecraft.
     */
    static readonly 'hangingRoots': ItemType;
    /**
     * Represents an item that can place a block of hardened clay
     * within Minecraft.
     */
    static readonly 'hardenedClay': ItemType;
    /**
     * Represents an item that can place a block of hard glass
     * within Minecraft.
     */
    static readonly 'hardGlass': ItemType;
    /**
     * Represents an item that can place a pane of hard glass
     * within Minecraft.
     */
    static readonly 'hardGlassPane': ItemType;
    /**
     * Represents an item that can place a stained hard glass block
     * within Minecraft.
     */
    static readonly 'hardStainedGlass': ItemType;
    /**
     * Represents an item that can place a stained pane of hard
     * glass within Minecraft.
     */
    static readonly 'hardStainedGlassPane': ItemType;
    /**
     * Represents an item that can place a block of hay within
     * Minecraft.
     */
    static readonly 'hayBlock': ItemType;
    static readonly 'heartOfTheSea': ItemType;
    /**
     * Represents an item that can place a heavy weighted pressure
     * plate within Minecraft.
     */
    static readonly 'heavyWeightedPressurePlate': ItemType;
    static readonly 'hoglinSpawnEgg': ItemType;
    /**
     * Represents an item that can place a block of honey within
     * Minecraft.
     */
    static readonly 'honeyBlock': ItemType;
    static readonly 'honeyBottle': ItemType;
    static readonly 'honeycomb': ItemType;
    /**
     * Represents an item that can place a honeycomb block within
     * Minecraft.
     */
    static readonly 'honeycombBlock': ItemType;
    /**
     * Represents an item that can place a hopper within Minecraft.
     */
    static readonly 'hopper': ItemType;
    static readonly 'hopperMinecart': ItemType;
    static readonly 'horseSpawnEgg': ItemType;
    static readonly 'huskSpawnEgg': ItemType;
    /**
     * Represents an item that can place a block of ice within
     * Minecraft.
     */
    static readonly 'ice': ItemType;
    static readonly 'iceBomb': ItemType;
    /**
     * Represents an item that can place an infested block of
     * deepslate within Minecraft.
     */
    static readonly 'infestedDeepslate': ItemType;
    /**
     * Represents an item that can place an information update
     * block within Minecraft.
     */
    static readonly 'infoUpdate': ItemType;
    /**
     * Represents an item that can place an information update
     * block within Minecraft.
     */
    static readonly 'infoUpdate2': ItemType;
    static readonly 'inkSac': ItemType;
    /**
     * Represents an item that can place an invisible boundary
     * bedrock block within Minecraft.
     */
    static readonly 'invisibleBedrock': ItemType;
    static readonly 'ironAxe': ItemType;
    /**
     * Represents iron bars within Minecraft.
     */
    static readonly 'ironBars': ItemType;
    /**
     * Represents an item that can place a block of iron within
     * Minecraft.
     */
    static readonly 'ironBlock': ItemType;
    static readonly 'ironBoots': ItemType;
    static readonly 'ironChestplate': ItemType;
    /**
     * Represents an item that can place an iron door within
     * Minecraft.
     */
    static readonly 'ironDoor': ItemType;
    static readonly 'ironHelmet': ItemType;
    static readonly 'ironHoe': ItemType;
    static readonly 'ironHorseArmor': ItemType;
    static readonly 'ironIngot': ItemType;
    static readonly 'ironLeggings': ItemType;
    static readonly 'ironNugget': ItemType;
    /**
     * Represents an item that can place a block with embedded iron
     * ore within Minecraft.
     */
    static readonly 'ironOre': ItemType;
    static readonly 'ironPickaxe': ItemType;
    static readonly 'ironShovel': ItemType;
    static readonly 'ironSword': ItemType;
    /**
     * Represents an item that can place an iron trapdoor within
     * Minecraft.
     */
    static readonly 'ironTrapdoor': ItemType;
    static readonly 'item.acaciaDoor': ItemType;
    static readonly 'item.bed': ItemType;
    static readonly 'item.beetroot': ItemType;
    static readonly 'item.birchDoor': ItemType;
    static readonly 'item.brewingStand': ItemType;
    static readonly 'item.cake': ItemType;
    static readonly 'item.camera': ItemType;
    static readonly 'item.campfire': ItemType;
    static readonly 'item.cauldron': ItemType;
    static readonly 'item.chain': ItemType;
    static readonly 'item.crimsonDoor': ItemType;
    static readonly 'item.darkOakDoor': ItemType;
    static readonly 'item.flowerPot': ItemType;
    static readonly 'item.frame': ItemType;
    static readonly 'item.glowFrame': ItemType;
    static readonly 'item.hopper': ItemType;
    static readonly 'item.ironDoor': ItemType;
    static readonly 'item.jungleDoor': ItemType;
    static readonly 'item.kelp': ItemType;
    static readonly 'item.netherSprouts': ItemType;
    static readonly 'item.netherWart': ItemType;
    static readonly 'item.reeds': ItemType;
    static readonly 'item.skull': ItemType;
    static readonly 'item.soulCampfire': ItemType;
    static readonly 'item.spruceDoor': ItemType;
    static readonly 'item.warpedDoor': ItemType;
    static readonly 'item.wheat': ItemType;
    static readonly 'item.woodenDoor': ItemType;
    /**
     * Represents an item that can place a jigsaw within Minecraft.
     */
    static readonly 'jigsaw': ItemType;
    /**
     * Represents an item that can place a jukebox within
     * Minecraft.
     */
    static readonly 'jukebox': ItemType;
    static readonly 'jungleBoat': ItemType;
    /**
     * Represents jungle wood button within Minecraft.
     */
    static readonly 'jungleButton': ItemType;
    static readonly 'jungleChestBoat': ItemType;
    /**
     * Represents an item that can place a jungle wood door within
     * Minecraft.
     */
    static readonly 'jungleDoor': ItemType;
    /**
     * Represents an item that can place a jungle wood fence gate
     * within Minecraft.
     */
    static readonly 'jungleFenceGate': ItemType;
    /**
     * Represents an item that can place a jungle wood pressure
     * plate within Minecraft.
     */
    static readonly 'junglePressurePlate': ItemType;
    /**
     * Represents an item that can place a jungle sign within
     * Minecraft.
     */
    static readonly 'jungleSign': ItemType;
    /**
     * Represents an item that can place a set of jungle wood
     * stairs within Minecraft.
     */
    static readonly 'jungleStairs': ItemType;
    /**
     * Represents an item that can place a jungle wood standing
     * sign within Minecraft.
     */
    static readonly 'jungleStandingSign': ItemType;
    /**
     * Represents an item that can place a jungle wood trapdoor
     * within Minecraft.
     */
    static readonly 'jungleTrapdoor': ItemType;
    /**
     * Represents an item that can place a jungle wood wall sign
     * within Minecraft.
     */
    static readonly 'jungleWallSign': ItemType;
    /**
     * Represents an item that can place a set of kelp within
     * Minecraft.
     */
    static readonly 'kelp': ItemType;
    /**
     * Represents an item that can place a ladder within Minecraft.
     */
    static readonly 'ladder': ItemType;
    /**
     * Represents an item that can place a lantern within
     * Minecraft.
     */
    static readonly 'lantern': ItemType;
    /**
     * Represents an item that can place a block of lapis lazuli
     * within Minecraft.
     */
    static readonly 'lapisBlock': ItemType;
    static readonly 'lapisLazuli': ItemType;
    /**
     * Represents an item that can place a block with embedded
     * lapis lazuli within Minecraft.
     */
    static readonly 'lapisOre': ItemType;
    /**
     * Represents an item that can place a bud of large amethyst
     * within Minecraft.
     */
    static readonly 'largeAmethystBud': ItemType;
    /**
     * Represents lava within Minecraft.
     */
    static readonly 'lava': ItemType;
    static readonly 'lavaBucket': ItemType;
    /**
     * Represents an item that can place a cauldron filled with
     * lava within Minecraft.
     */
    static readonly 'lavaCauldron': ItemType;
    static readonly 'lead': ItemType;
    static readonly 'leather': ItemType;
    static readonly 'leatherBoots': ItemType;
    static readonly 'leatherChestplate': ItemType;
    static readonly 'leatherHelmet': ItemType;
    static readonly 'leatherHorseArmor': ItemType;
    static readonly 'leatherLeggings': ItemType;
    /**
     * Represents an item that can place a set of leaves within
     * Minecraft.
     */
    static readonly 'leaves': ItemType;
    /**
     * Represents an item that can place an updated set of leaves
     * within Minecraft.
     */
    static readonly 'leaves2': ItemType;
    /**
     * Represents an item that can place a lectern within
     * Minecraft.
     */
    static readonly 'lectern': ItemType;
    /**
     * Represents an item that can place a lever within Minecraft.
     */
    static readonly 'lever': ItemType;
    /**
     * Represents an item that can place a block of light within
     * Minecraft.
     */
    static readonly 'lightBlock': ItemType;
    /**
     * Represents an item that can place a light blue candle within
     * Minecraft.
     */
    static readonly 'lightBlueCandle': ItemType;
    /**
     * Represents an item that can place a light blue candle cake
     * within Minecraft.
     */
    static readonly 'lightBlueCandleCake': ItemType;
    static readonly 'lightBlueDye': ItemType;
    /**
     * Represents an item that can place a light blue block of
     * glazed terracotta within Minecraft.
     */
    static readonly 'lightBlueGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a light gray candle within
     * Minecraft.
     */
    static readonly 'lightGrayCandle': ItemType;
    /**
     * Represents an item that can place a light gray candle cake
     * within Minecraft.
     */
    static readonly 'lightGrayCandleCake': ItemType;
    static readonly 'lightGrayDye': ItemType;
    /**
     * Represents an item that can place a lightning rod within
     * Minecraft.
     */
    static readonly 'lightningRod': ItemType;
    /**
     * Represents an item that can place a light weighted pressure
     * plate within Minecraft.
     */
    static readonly 'lightWeightedPressurePlate': ItemType;
    /**
     * Represents an item that can place a lime candle within
     * Minecraft.
     */
    static readonly 'limeCandle': ItemType;
    /**
     * Represents an item that can place a lime-colored candle cake
     * within Minecraft.
     */
    static readonly 'limeCandleCake': ItemType;
    static readonly 'limeDye': ItemType;
    /**
     * Represents an item that can place a lime-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly 'limeGlazedTerracotta': ItemType;
    static readonly 'lingeringPotion': ItemType;
    /**
     * Represents an item that can place a lit blast furnace within
     * Minecraft.
     */
    static readonly 'litBlastFurnace': ItemType;
    /**
     * Represents lit deepslate redstone ore within Minecraft.
     */
    static readonly 'litDeepslateRedstoneOre': ItemType;
    /**
     * Represents an item that can place a lit furnace within
     * Minecraft.
     */
    static readonly 'litFurnace': ItemType;
    /**
     * Represents an item that can place a lit pumpkin within
     * Minecraft.
     */
    static readonly 'litPumpkin': ItemType;
    /**
     * Represents an item that can place a lit redstone lamp within
     * Minecraft.
     */
    static readonly 'litRedstoneLamp': ItemType;
    /**
     * Represents lit redstone ore within Minecraft.
     */
    static readonly 'litRedstoneOre': ItemType;
    /**
     * Represents an item that can place a lit smoker within
     * Minecraft.
     */
    static readonly 'litSmoker': ItemType;
    static readonly 'llamaSpawnEgg': ItemType;
    /**
     * Represents an item that can place a lodestone within
     * Minecraft.
     */
    static readonly 'lodestone': ItemType;
    static readonly 'lodestoneCompass': ItemType;
    /**
     * Represents an item that can place a log within Minecraft.
     */
    static readonly 'log': ItemType;
    /**
     * Represents an item that can place a more updated,
     * customizable log within Minecraft.
     */
    static readonly 'log2': ItemType;
    /**
     * Represents an item that can place a loom within Minecraft.
     */
    static readonly 'loom': ItemType;
    /**
     * Represents an item that can place a magenta candle within
     * Minecraft.
     */
    static readonly 'magentaCandle': ItemType;
    /**
     * Represents an item that can place a magenta candle cake
     * within Minecraft.
     */
    static readonly 'magentaCandleCake': ItemType;
    static readonly 'magentaDye': ItemType;
    /**
     * Represents an item that can place a block of magenta-colored
     * glazed terracotta within Minecraft.
     */
    static readonly 'magentaGlazedTerracotta': ItemType;
    /**
     * Represents magma within Minecraft.
     */
    static readonly 'magma': ItemType;
    static readonly 'magmaCream': ItemType;
    static readonly 'magmaCubeSpawnEgg': ItemType;
    static readonly 'mangroveLeaves': ItemType;
    static readonly 'mangrovePropagule': ItemType;
    static readonly 'mangrovePropaguleHanging': ItemType;
    static readonly 'medicine': ItemType;
    /**
     * Represents an item that can place a medium-sized bud of
     * amethyst within Minecraft.
     */
    static readonly 'mediumAmethystBud': ItemType;
    /**
     * Represents an item that can place a block of melon within
     * Minecraft.
     */
    static readonly 'melonBlock': ItemType;
    static readonly 'melonSeeds': ItemType;
    static readonly 'melonSlice': ItemType;
    /**
     * Represents an item that can place a stem of melon within
     * Minecraft.
     */
    static readonly 'melonStem': ItemType;
    static readonly 'milkBucket': ItemType;
    static readonly 'minecart': ItemType;
    /**
     * Represents an item that can place a mob spawner within
     * Minecraft.
     */
    static readonly 'mobSpawner': ItemType;
    static readonly 'mojangBannerPattern': ItemType;
    /**
     * Represents an item that can place a monster egg within
     * Minecraft.
     */
    static readonly 'monsterEgg': ItemType;
    static readonly 'mooshroomSpawnEgg': ItemType;
    /**
     * Represents an item that can place a block of moss within
     * Minecraft.
     */
    static readonly 'mossBlock': ItemType;
    /**
     * Represents an item that can place a carpet of moss within
     * Minecraft.
     */
    static readonly 'mossCarpet': ItemType;
    /**
     * Represents an item that can place a block of cobblestone
     * with moss within Minecraft.
     */
    static readonly 'mossyCobblestone': ItemType;
    /**
     * Represents an item that can place a set of mossy cobblestone
     * stairs within Minecraft.
     */
    static readonly 'mossyCobblestoneStairs': ItemType;
    /**
     * Represents an item that can place a set of mossy stone brick
     * stairs within Minecraft.
     */
    static readonly 'mossyStoneBrickStairs': ItemType;
    /**
     * Represents an item that can place a moving block within
     * Minecraft.
     */
    static readonly 'movingBlock': ItemType;
    static readonly 'mud': ItemType;
    static readonly 'mudBrickDoubleSlab': ItemType;
    static readonly 'mudBricks': ItemType;
    static readonly 'mudBrickSlab': ItemType;
    static readonly 'mudBrickStairs': ItemType;
    static readonly 'mudBrickWall': ItemType;
    static readonly 'muleSpawnEgg': ItemType;
    static readonly 'mushroomStew': ItemType;
    static readonly 'musicDisc11': ItemType;
    static readonly 'musicDisc13': ItemType;
    static readonly 'musicDiscBlocks': ItemType;
    static readonly 'musicDiscCat': ItemType;
    static readonly 'musicDiscChirp': ItemType;
    static readonly 'musicDiscFar': ItemType;
    static readonly 'musicDiscMall': ItemType;
    static readonly 'musicDiscMellohi': ItemType;
    static readonly 'musicDiscOtherside': ItemType;
    static readonly 'musicDiscPigstep': ItemType;
    static readonly 'musicDiscStal': ItemType;
    static readonly 'musicDiscStrad': ItemType;
    static readonly 'musicDiscWait': ItemType;
    static readonly 'musicDiscWard': ItemType;
    static readonly 'mutton': ItemType;
    /**
     * Represents an item that can place a mycelium plant within
     * Minecraft.
     */
    static readonly 'mycelium': ItemType;
    static readonly 'nameTag': ItemType;
    static readonly 'nautilusShell': ItemType;
    /**
     * Represents an item that can place a nether brick block
     * within Minecraft.
     */
    static readonly 'netherbrick': ItemType;
    /**
     * Represents an item that can place a nether brick block
     * within Minecraft.
     */
    static readonly 'netherBrick': ItemType;
    /**
     * Represents an item that can place a nether brick fence
     * within Minecraft.
     */
    static readonly 'netherBrickFence': ItemType;
    /**
     * Represents an item that can place a set of nether brick
     * stairs within Minecraft.
     */
    static readonly 'netherBrickStairs': ItemType;
    /**
     * Represents an item that can place a block of nether with
     * embedded gold ore within Minecraft.
     */
    static readonly 'netherGoldOre': ItemType;
    static readonly 'netheriteAxe': ItemType;
    /**
     * Represents an item that can place a block of netherite
     * within Minecraft.
     */
    static readonly 'netheriteBlock': ItemType;
    static readonly 'netheriteBoots': ItemType;
    static readonly 'netheriteChestplate': ItemType;
    static readonly 'netheriteHelmet': ItemType;
    static readonly 'netheriteHoe': ItemType;
    static readonly 'netheriteIngot': ItemType;
    static readonly 'netheriteLeggings': ItemType;
    static readonly 'netheritePickaxe': ItemType;
    static readonly 'netheriteScrap': ItemType;
    static readonly 'netheriteShovel': ItemType;
    static readonly 'netheriteSword': ItemType;
    /**
     * Represents an item that can place a block of netherrack
     * within Minecraft.
     */
    static readonly 'netherrack': ItemType;
    /**
     * Represents an item that can place a nether rock within
     * Minecraft.
     */
    static readonly 'netherreactor': ItemType;
    /**
     * Represents nether sprouts within Minecraft.
     */
    static readonly 'netherSprouts': ItemType;
    static readonly 'netherStar': ItemType;
    /**
     * Represents nether wart within Minecraft.
     */
    static readonly 'netherWart': ItemType;
    /**
     * Represents an item that can place a block of nether wart
     * within Minecraft.
     */
    static readonly 'netherWartBlock': ItemType;
    /**
     * Represents an item that can place a standard set of stone
     * stairs within Minecraft.
     */
    static readonly 'normalStoneStairs': ItemType;
    /**
     * Represents an item that can place a note block within
     * Minecraft.
     */
    static readonly 'noteblock': ItemType;
    static readonly 'npcSpawnEgg': ItemType;
    static readonly 'oakBoat': ItemType;
    static readonly 'oakChestBoat': ItemType;
    static readonly 'oakSign': ItemType;
    /**
     * Represents an item that can place a set of oak stairs within
     * Minecraft.
     */
    static readonly 'oakStairs': ItemType;
    /**
     * Represents an item that can place an observer within
     * Minecraft.
     */
    static readonly 'observer': ItemType;
    /**
     * Represents an item that can place an obsidian block within
     * Minecraft.
     */
    static readonly 'obsidian': ItemType;
    static readonly 'ocelotSpawnEgg': ItemType;
    static readonly 'ochreFroglight': ItemType;
    /**
     * Represents an item that can place an orange candle within
     * Minecraft.
     */
    static readonly 'orangeCandle': ItemType;
    /**
     * Represents an item that can place an orange candle cake
     * within Minecraft.
     */
    static readonly 'orangeCandleCake': ItemType;
    static readonly 'orangeDye': ItemType;
    /**
     * Represents an item that can place a block of orange-colored
     * glazed terracotta within Minecraft.
     */
    static readonly 'orangeGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a block of oxidized copper
     * within Minecraft.
     */
    static readonly 'oxidizedCopper': ItemType;
    /**
     * Represents an item that can place a block of oxidized cut
     * copper within Minecraft.
     */
    static readonly 'oxidizedCutCopper': ItemType;
    /**
     * Represents an item that can place a slab of oxidized cut
     * copper within Minecraft.
     */
    static readonly 'oxidizedCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a set of oxidized cut
     * copper stairs within Minecraft.
     */
    static readonly 'oxidizedCutCopperStairs': ItemType;
    /**
     * Represents an item that can place a double slab of oxidized
     * cut copper within Minecraft.
     */
    static readonly 'oxidizedDoubleCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a block of packed ice
     * within Minecraft.
     */
    static readonly 'packedIce': ItemType;
    static readonly 'packedMud': ItemType;
    static readonly 'painting': ItemType;
    static readonly 'pandaSpawnEgg': ItemType;
    static readonly 'paper': ItemType;
    static readonly 'parrotSpawnEgg': ItemType;
    static readonly 'pearlescentFroglight': ItemType;
    static readonly 'phantomMembrane': ItemType;
    static readonly 'phantomSpawnEgg': ItemType;
    static readonly 'piglinBannerPattern': ItemType;
    static readonly 'piglinBruteSpawnEgg': ItemType;
    static readonly 'piglinSpawnEgg': ItemType;
    static readonly 'pigSpawnEgg': ItemType;
    static readonly 'pillagerSpawnEgg': ItemType;
    /**
     * Represents an item that can place a pink candle within
     * Minecraft.
     */
    static readonly 'pinkCandle': ItemType;
    /**
     * Represents an item that can place a pink candle cake within
     * Minecraft.
     */
    static readonly 'pinkCandleCake': ItemType;
    static readonly 'pinkDye': ItemType;
    /**
     * Represents an item that can place a pink-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly 'pinkGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a piston within Minecraft.
     */
    static readonly 'piston': ItemType;
    /**
     * Represents an item that can place a piston arm within
     * Minecraft.
     */
    static readonly 'pistonArmCollision': ItemType;
    /**
     * Represents an item that can place a set of planks within
     * Minecraft.
     */
    static readonly 'planks': ItemType;
    /**
     * Represents podzol within Minecraft.
     */
    static readonly 'podzol': ItemType;
    /**
     * Represents pointed dripstone within Minecraft.
     */
    static readonly 'pointedDripstone': ItemType;
    static readonly 'poisonousPotato': ItemType;
    static readonly 'polarBearSpawnEgg': ItemType;
    /**
     * Represents an item that can place a set of polished andesite
     * stairs within Minecraft.
     */
    static readonly 'polishedAndesiteStairs': ItemType;
    /**
     * Represents an item that can place a block of polished basalt
     * within Minecraft.
     */
    static readonly 'polishedBasalt': ItemType;
    /**
     * Represents an item that can place a block of polished
     * blackstone within Minecraft.
     */
    static readonly 'polishedBlackstone': ItemType;
    /**
     * Represents an item that can place a double slab of polished
     * blackstone brick within Minecraft.
     */
    static readonly 'polishedBlackstoneBrickDoubleSlab': ItemType;
    /**
     * Represents an item that can place a block of polished
     * blackstone bricks within Minecraft.
     */
    static readonly 'polishedBlackstoneBricks': ItemType;
    /**
     * Represents an item that can place a slab of polished
     * blackstone within Minecraft.
     */
    static readonly 'polishedBlackstoneBrickSlab': ItemType;
    /**
     * Represents an item that can place a set of polished
     * blackstone brick stairs within Minecraft.
     */
    static readonly 'polishedBlackstoneBrickStairs': ItemType;
    /**
     * Represents an item that can place a polished blackstone
     * brick wall within Minecraft.
     */
    static readonly 'polishedBlackstoneBrickWall': ItemType;
    /**
     * Represents an item that can place a polished blackstone
     * button within Minecraft.
     */
    static readonly 'polishedBlackstoneButton': ItemType;
    /**
     * Represents an item that can place a double slab of polished
     * blackstone within Minecraft.
     */
    static readonly 'polishedBlackstoneDoubleSlab': ItemType;
    /**
     * Represents an item that can place a polished blackstone
     * pressure plate within Minecraft.
     */
    static readonly 'polishedBlackstonePressurePlate': ItemType;
    /**
     * Represents an item that can place a slab of polished
     * blackstone within Minecraft.
     */
    static readonly 'polishedBlackstoneSlab': ItemType;
    /**
     * Represents an item that can place a set of polished
     * blackstone stairs within Minecraft.
     */
    static readonly 'polishedBlackstoneStairs': ItemType;
    /**
     * Represents an item that can place a polished blackstone wall
     * within Minecraft.
     */
    static readonly 'polishedBlackstoneWall': ItemType;
    /**
     * Represents an item that can place a block of polished
     * deepslate within Minecraft.
     */
    static readonly 'polishedDeepslate': ItemType;
    /**
     * Represents an item that can place a double slab of polished
     * deepslate within Minecraft.
     */
    static readonly 'polishedDeepslateDoubleSlab': ItemType;
    /**
     * Represents an item that can place a slab of polished
     * deepslate within Minecraft.
     */
    static readonly 'polishedDeepslateSlab': ItemType;
    /**
     * Represents an item that can place a set of polished
     * deepslate stairs within Minecraft.
     */
    static readonly 'polishedDeepslateStairs': ItemType;
    /**
     * Represents an item that can place a wall of polished
     * deepslate within Minecraft.
     */
    static readonly 'polishedDeepslateWall': ItemType;
    /**
     * Represents an item that can place a block of polished
     * diorite within Minecraft.
     */
    static readonly 'polishedDioriteStairs': ItemType;
    /**
     * Represents an item that can place a set of polished granite
     * stairs within Minecraft.
     */
    static readonly 'polishedGraniteStairs': ItemType;
    static readonly 'poppedChorusFruit': ItemType;
    static readonly 'porkchop': ItemType;
    /**
     * Represents an item that can place a portal within Minecraft.
     */
    static readonly 'portal': ItemType;
    static readonly 'potato': ItemType;
    /**
     * Represents an item that can place a set of potatoes within
     * Minecraft.
     */
    static readonly 'potatoes': ItemType;
    static readonly 'potion': ItemType;
    /**
     * Represents an item that can place a block of powder snow
     * within Minecraft.
     */
    static readonly 'powderSnow': ItemType;
    static readonly 'powderSnowBucket': ItemType;
    /**
     * Represents an item that can place a powered comparator
     * within Minecraft.
     */
    static readonly 'poweredComparator': ItemType;
    /**
     * Represents an item that can place a powered repeater within
     * Minecraft.
     */
    static readonly 'poweredRepeater': ItemType;
    /**
     * Represents an item that can place a block of prismarine
     * within Minecraft.
     */
    static readonly 'prismarine': ItemType;
    /**
     * Represents an item that can place a set of prismarine brick
     * stairs within Minecraft.
     */
    static readonly 'prismarineBricksStairs': ItemType;
    static readonly 'prismarineCrystals': ItemType;
    static readonly 'prismarineShard': ItemType;
    /**
     * Represents an item that can place a set of prismarine stairs
     * within Minecraft.
     */
    static readonly 'prismarineStairs': ItemType;
    static readonly 'pufferfish': ItemType;
    static readonly 'pufferfishBucket': ItemType;
    static readonly 'pufferfishSpawnEgg': ItemType;
    /**
     * Represents an item that can place a pumpkin within
     * Minecraft.
     */
    static readonly 'pumpkin': ItemType;
    static readonly 'pumpkinPie': ItemType;
    static readonly 'pumpkinSeeds': ItemType;
    /**
     * Represents an item that can place a pumpkin stem within
     * Minecraft.
     */
    static readonly 'pumpkinStem': ItemType;
    /**
     * Represents an item that can place a purple candle within
     * Minecraft.
     */
    static readonly 'purpleCandle': ItemType;
    /**
     * Represents an item that can place a purple colored candle
     * cake within Minecraft.
     */
    static readonly 'purpleCandleCake': ItemType;
    static readonly 'purpleDye': ItemType;
    /**
     * Represents an item that can place a purple-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly 'purpleGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a purpur block within
     * Minecraft.
     */
    static readonly 'purpurBlock': ItemType;
    /**
     * Represents an item that can place a set of purpur stairs
     * within Minecraft.
     */
    static readonly 'purpurStairs': ItemType;
    static readonly 'quartz': ItemType;
    /**
     * Represents an item that can place a block of solid quartz
     * within Minecraft.
     */
    static readonly 'quartzBlock': ItemType;
    /**
     * Represents an item that can place a block of solid quartz
     * bricks within Minecraft.
     */
    static readonly 'quartzBricks': ItemType;
    /**
     * Represents an item that can place a block with embedded
     * quartz ore within Minecraft.
     */
    static readonly 'quartzOre': ItemType;
    /**
     * Represents an item that can place a set of quartz stairs
     * within Minecraft.
     */
    static readonly 'quartzStairs': ItemType;
    static readonly 'rabbit': ItemType;
    static readonly 'rabbitFoot': ItemType;
    static readonly 'rabbitHide': ItemType;
    static readonly 'rabbitSpawnEgg': ItemType;
    static readonly 'rabbitStew': ItemType;
    /**
     * Represents an item that can place a set of rails within
     * Minecraft.
     */
    static readonly 'rail': ItemType;
    static readonly 'rapidFertilizer': ItemType;
    static readonly 'ravagerSpawnEgg': ItemType;
    static readonly 'rawCopper': ItemType;
    /**
     * Represents an item that can place a block of raw copper
     * within Minecraft.
     */
    static readonly 'rawCopperBlock': ItemType;
    static readonly 'rawGold': ItemType;
    /**
     * Represents an item that can place a block of raw gold within
     * Minecraft.
     */
    static readonly 'rawGoldBlock': ItemType;
    static readonly 'rawIron': ItemType;
    /**
     * Represents an item that can place a block of raw iron within
     * Minecraft.
     */
    static readonly 'rawIronBlock': ItemType;
    static readonly 'realDoubleStoneSlab': ItemType;
    static readonly 'realDoubleStoneSlab2': ItemType;
    static readonly 'realDoubleStoneSlab3': ItemType;
    static readonly 'realDoubleStoneSlab4': ItemType;
    /**
     * Represents an item that can place a red candle within
     * Minecraft.
     */
    static readonly 'redCandle': ItemType;
    /**
     * Represents an item that can place a red candle cake within
     * Minecraft.
     */
    static readonly 'redCandleCake': ItemType;
    static readonly 'redDye': ItemType;
    /**
     * Represents an item that can place a red flower within
     * Minecraft.
     */
    static readonly 'redFlower': ItemType;
    /**
     * Represents an item that can place a red-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly 'redGlazedTerracotta': ItemType;
    /**
     * Represents an item that can place a red mushroom within
     * Minecraft.
     */
    static readonly 'redMushroom': ItemType;
    /**
     * Represents an item that can place a block of red mushroom
     * within Minecraft.
     */
    static readonly 'redMushroomBlock': ItemType;
    /**
     * Represents an item that can place a block of red nether
     * brick within Minecraft.
     */
    static readonly 'redNetherBrick': ItemType;
    /**
     * Represents an item that can place a set of red nether brick
     * stairs within Minecraft.
     */
    static readonly 'redNetherBrickStairs': ItemType;
    /**
     * Represents an item that can place a block of red sandstone
     * within Minecraft.
     */
    static readonly 'redSandstone': ItemType;
    /**
     * Represents an item that can place a set of red sandstone
     * stairs within Minecraft.
     */
    static readonly 'redSandstoneStairs': ItemType;
    static readonly 'redstone': ItemType;
    /**
     * Represents an item that can place a block of redstone within
     * Minecraft.
     */
    static readonly 'redstoneBlock': ItemType;
    /**
     * Represents an item that can place a redstone lamp within
     * Minecraft.
     */
    static readonly 'redstoneLamp': ItemType;
    /**
     * Represents an item that can place a block with embedded
     * redstone ore within Minecraft.
     */
    static readonly 'redstoneOre': ItemType;
    /**
     * Represents an item that can place a redstone torch within
     * Minecraft.
     */
    static readonly 'redstoneTorch': ItemType;
    /**
     * Represents an item that can place a redstone wire within
     * Minecraft.
     */
    static readonly 'redstoneWire': ItemType;
    static readonly 'reinforcedDeepslate': ItemType;
    static readonly 'repeater': ItemType;
    /**
     * Represents an item that can place a repeating command block
     * within Minecraft.
     */
    static readonly 'repeatingCommandBlock': ItemType;
    /**
     * Represents an item that can place a reserved block within
     * Minecraft.
     */
    static readonly 'reserved6': ItemType;
    /**
     * Represents an item that can place a respawn anchor within
     * Minecraft.
     */
    static readonly 'respawnAnchor': ItemType;
    static readonly 'rottenFlesh': ItemType;
    static readonly 'saddle': ItemType;
    static readonly 'salmon': ItemType;
    static readonly 'salmonBucket': ItemType;
    static readonly 'salmonSpawnEgg': ItemType;
    /**
     * Represents an item that can place a block of sand within
     * Minecraft.
     */
    static readonly 'sand': ItemType;
    /**
     * Represents an item that can place a block of sandstone
     * within Minecraft.
     */
    static readonly 'sandstone': ItemType;
    /**
     * Represents an item that can place a set of sandstone stairs
     * within Minecraft.
     */
    static readonly 'sandstoneStairs': ItemType;
    /**
     * Represents an item that can place a sapling within
     * Minecraft.
     */
    static readonly 'sapling': ItemType;
    /**
     * Represents an item that can place a set of scaffolding
     * within Minecraft.
     */
    static readonly 'scaffolding': ItemType;
    static readonly 'sculk': ItemType;
    static readonly 'sculkCatalyst': ItemType;
    /**
     * Represents an item that can place a sculk sensor within
     * Minecraft.
     */
    static readonly 'sculkSensor': ItemType;
    static readonly 'sculkShrieker': ItemType;
    static readonly 'sculkVein': ItemType;
    static readonly 'scute': ItemType;
    /**
     * Represents seagrass within Minecraft.
     */
    static readonly 'seagrass': ItemType;
    /**
     * Represents an item that can place a sealantern within
     * Minecraft.
     */
    static readonly 'seaLantern': ItemType;
    /**
     * Represents an item that can place a seapickle within
     * Minecraft.
     */
    static readonly 'seaPickle': ItemType;
    static readonly 'shears': ItemType;
    static readonly 'sheepSpawnEgg': ItemType;
    static readonly 'shield': ItemType;
    /**
     * Represents an item that can place a shroom light within
     * Minecraft.
     */
    static readonly 'shroomlight': ItemType;
    /**
     * Represents an item that can place a shulker box within
     * Minecraft.
     */
    static readonly 'shulkerBox': ItemType;
    static readonly 'shulkerShell': ItemType;
    static readonly 'shulkerSpawnEgg': ItemType;
    static readonly 'silverfishSpawnEgg': ItemType;
    /**
     * Represents an item that can place a silver-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly 'silverGlazedTerracotta': ItemType;
    static readonly 'skeletonHorseSpawnEgg': ItemType;
    static readonly 'skeletonSpawnEgg': ItemType;
    /**
     * Represents an item that can place a skull within Minecraft.
     */
    static readonly 'skull': ItemType;
    static readonly 'skullBannerPattern': ItemType;
    /**
     * Represents slime within Minecraft.
     */
    static readonly 'slime': ItemType;
    static readonly 'slimeBall': ItemType;
    static readonly 'slimeSpawnEgg': ItemType;
    /**
     * Represents an item that can place a small bud of amethyst
     * within Minecraft.
     */
    static readonly 'smallAmethystBud': ItemType;
    /**
     * Represents an item that can place a small dripleaf block
     * within Minecraft.
     */
    static readonly 'smallDripleafBlock': ItemType;
    /**
     * Represents an item that can place a smithing table within
     * Minecraft.
     */
    static readonly 'smithingTable': ItemType;
    /**
     * Represents an item that can place a smoker within Minecraft.
     */
    static readonly 'smoker': ItemType;
    /**
     * Represents an item that can place a block of smooth basalt
     * within Minecraft.
     */
    static readonly 'smoothBasalt': ItemType;
    /**
     * Represents an item that can place a set of smooth quartz
     * stairs within Minecraft.
     */
    static readonly 'smoothQuartzStairs': ItemType;
    /**
     * Represents an item that can place a set of smooth red
     * sandstone stairs within Minecraft.
     */
    static readonly 'smoothRedSandstoneStairs': ItemType;
    /**
     * Represents an item that can place a set of smooth redstone
     * stairs within Minecraft.
     */
    static readonly 'smoothSandstoneStairs': ItemType;
    /**
     * Represents an item that can place a smooth stone block
     * within Minecraft.
     */
    static readonly 'smoothStone': ItemType;
    /**
     * Represents snow within Minecraft.
     */
    static readonly 'snow': ItemType;
    static readonly 'snowball': ItemType;
    /**
     * Represents an item that can place a layer of snow within
     * Minecraft.
     */
    static readonly 'snowLayer': ItemType;
    /**
     * Represents an item that can place a soul campfire within
     * Minecraft.
     */
    static readonly 'soulCampfire': ItemType;
    /**
     * Represents soul fire within Minecraft.
     */
    static readonly 'soulFire': ItemType;
    /**
     * Represents an item that can place a soul lantern within
     * Minecraft.
     */
    static readonly 'soulLantern': ItemType;
    /**
     * Represents an item that can place a block of soul sand
     * within Minecraft.
     */
    static readonly 'soulSand': ItemType;
    /**
     * Represents soul soil within Minecraft.
     */
    static readonly 'soulSoil': ItemType;
    /**
     * Represents an item that can place a soul torch within
     * Minecraft.
     */
    static readonly 'soulTorch': ItemType;
    static readonly 'sparkler': ItemType;
    static readonly 'spawnEgg': ItemType;
    static readonly 'spiderEye': ItemType;
    static readonly 'spiderSpawnEgg': ItemType;
    static readonly 'splashPotion': ItemType;
    /**
     * Represents an item that can place a sponge within Minecraft.
     */
    static readonly 'sponge': ItemType;
    /**
     * Represents an item that can place a spore blossom within
     * Minecraft.
     */
    static readonly 'sporeBlossom': ItemType;
    static readonly 'spruceBoat': ItemType;
    /**
     * Represents an item that can place a spruce wood button
     * within Minecraft.
     */
    static readonly 'spruceButton': ItemType;
    static readonly 'spruceChestBoat': ItemType;
    /**
     * Represents an item that can place a spruce wood door within
     * Minecraft.
     */
    static readonly 'spruceDoor': ItemType;
    /**
     * Represents an item that can place a spruce wood fence gate
     * within Minecraft.
     */
    static readonly 'spruceFenceGate': ItemType;
    /**
     * Represents an item that can place a spruce wood pressure
     * plate within Minecraft.
     */
    static readonly 'sprucePressurePlate': ItemType;
    /**
     * Represents an item that can place a spruce sign within
     * Minecraft.
     */
    static readonly 'spruceSign': ItemType;
    /**
     * Represents an item that can place a set of spruce wood
     * stairs within Minecraft.
     */
    static readonly 'spruceStairs': ItemType;
    /**
     * Represents an item that can place a spruce wood standing
     * sign within Minecraft.
     */
    static readonly 'spruceStandingSign': ItemType;
    /**
     * Represents an item that can place a spruce wood trapdoor
     * within Minecraft.
     */
    static readonly 'spruceTrapdoor': ItemType;
    /**
     * Represents an item that can place a spruce wood wall sign
     * within Minecraft.
     */
    static readonly 'spruceWallSign': ItemType;
    static readonly 'spyglass': ItemType;
    static readonly 'squidSpawnEgg': ItemType;
    /**
     * Represents stained glass within Minecraft.
     */
    static readonly 'stainedGlass': ItemType;
    /**
     * Represents an item that can place a pane of stained glass
     * within Minecraft.
     */
    static readonly 'stainedGlassPane': ItemType;
    /**
     * Represents an item that can place a block of stained
     * hardened clay within Minecraft.
     */
    static readonly 'stainedHardenedClay': ItemType;
    /**
     * Represents an item that can place a standing banner within
     * Minecraft.
     */
    static readonly 'standingBanner': ItemType;
    /**
     * Represents an item that can place a standing sign within
     * Minecraft.
     */
    static readonly 'standingSign': ItemType;
    static readonly 'stick': ItemType;
    /**
     * Represents an item that can place a piston block with a
     * sticky arm within Minecraft.
     */
    static readonly 'stickyPiston': ItemType;
    /**
     * Represents an item that can place a sticky piston arm within
     * Minecraft.
     */
    static readonly 'stickyPistonArmCollision': ItemType;
    /**
     * Represents an item that can place a block of stone within
     * Minecraft.
     */
    static readonly 'stone': ItemType;
    static readonly 'stoneAxe': ItemType;
    /**
     * Represents an item that can place a block of stone brick
     * within Minecraft.
     */
    static readonly 'stonebrick': ItemType;
    /**
     * Represents an item that can place a set of stone brick
     * stairs within Minecraft.
     */
    static readonly 'stoneBrickStairs': ItemType;
    /**
     * Represents an item that can place a stone button within
     * Minecraft.
     */
    static readonly 'stoneButton': ItemType;
    /**
     * Represents an item that can place a stonecutter within
     * Minecraft.
     */
    static readonly 'stonecutter': ItemType;
    /**
     * Represents an item that can place a stonecutter block within
     * Minecraft.
     */
    static readonly 'stonecutterBlock': ItemType;
    static readonly 'stoneHoe': ItemType;
    static readonly 'stonePickaxe': ItemType;
    /**
     * Represents an item that can place a stone pressure plate
     * within Minecraft.
     */
    static readonly 'stonePressurePlate': ItemType;
    static readonly 'stoneShovel': ItemType;
    /**
     * Represents an item that can place a set of stone stairs
     * within Minecraft.
     */
    static readonly 'stoneStairs': ItemType;
    static readonly 'stoneSword': ItemType;
    static readonly 'straySpawnEgg': ItemType;
    static readonly 'striderSpawnEgg': ItemType;
    static readonly 'string': ItemType;
    /**
     * Represents an item that can place a stripped acacia log
     * within Minecraft.
     */
    static readonly 'strippedAcaciaLog': ItemType;
    /**
     * Represents an item that can place a stripped birch log
     * within Minecraft.
     */
    static readonly 'strippedBirchLog': ItemType;
    /**
     * Represents stripped crimson hyphae within Minecraft.
     */
    static readonly 'strippedCrimsonHyphae': ItemType;
    /**
     * Represents an item that can place a stripped crimson stem
     * within Minecraft.
     */
    static readonly 'strippedCrimsonStem': ItemType;
    /**
     * Represents an item that can place a stripped dark oak log
     * within Minecraft.
     */
    static readonly 'strippedDarkOakLog': ItemType;
    /**
     * Represents an item that can place a stripped jungle log
     * within Minecraft.
     */
    static readonly 'strippedJungleLog': ItemType;
    /**
     * Represents an item that can place a stripped oak log within
     * Minecraft.
     */
    static readonly 'strippedOakLog': ItemType;
    /**
     * Represents an item that can place a stripped spruce log
     * within Minecraft.
     */
    static readonly 'strippedSpruceLog': ItemType;
    /**
     * Represents stripped warped hyphae within Minecraft.
     */
    static readonly 'strippedWarpedHyphae': ItemType;
    /**
     * Represents stripped warped stem within Minecraft.
     */
    static readonly 'strippedWarpedStem': ItemType;
    /**
     * Represents an item that can place a structure block, which
     * provides for the saving and loading of block structures,
     * within Minecraft.
     */
    static readonly 'structureBlock': ItemType;
    /**
     * Represents an item that can place a structure void within
     * Minecraft.
     */
    static readonly 'structureVoid': ItemType;
    static readonly 'sugar': ItemType;
    static readonly 'sugarCane': ItemType;
    static readonly 'suspiciousStew': ItemType;
    static readonly 'sweetBerries': ItemType;
    /**
     * Represents an item that can place a sweet berry bush within
     * Minecraft.
     */
    static readonly 'sweetBerryBush': ItemType;
    static readonly 'tadpoleBucket': ItemType;
    static readonly 'tadpoleSpawnEgg': ItemType;
    /**
     * Represents tall grass within Minecraft.
     */
    static readonly 'tallgrass': ItemType;
    /**
     * Represents an item that can place a target within Minecraft.
     */
    static readonly 'target': ItemType;
    /**
     * Represents tinted glass within Minecraft.
     */
    static readonly 'tintedGlass': ItemType;
    /**
     * Represents an item that can place a block of TnT within
     * Minecraft.
     */
    static readonly 'tnt': ItemType;
    static readonly 'tntMinecart': ItemType;
    /**
     * Represents an item that can place a torch within Minecraft.
     */
    static readonly 'torch': ItemType;
    static readonly 'totemOfUndying': ItemType;
    /**
     * Represents an item that can place a trapdoor within
     * Minecraft.
     */
    static readonly 'trapdoor': ItemType;
    /**
     * Represents an item that can place a trapped chest within
     * Minecraft.
     */
    static readonly 'trappedChest': ItemType;
    static readonly 'trident': ItemType;
    /**
     * Represents an item that can place a tripwire within
     * Minecraft.
     */
    static readonly 'tripWire': ItemType;
    /**
     * Represents an item that can place a tripwire hook within
     * Minecraft.
     */
    static readonly 'tripwireHook': ItemType;
    static readonly 'tropicalFish': ItemType;
    static readonly 'tropicalFishBucket': ItemType;
    static readonly 'tropicalFishSpawnEgg': ItemType;
    /**
     * Represents an item that can place a block of tuff within
     * Minecraft.
     */
    static readonly 'tuff': ItemType;
    /**
     * Represents an item that can place a turtle egg within
     * Minecraft.
     */
    static readonly 'turtleEgg': ItemType;
    static readonly 'turtleHelmet': ItemType;
    static readonly 'turtleSpawnEgg': ItemType;
    /**
     * Represents an item that can place a set of twisting vines
     * within Minecraft.
     */
    static readonly 'twistingVines': ItemType;
    /**
     * Represents an item that can place an underwater torch within
     * Minecraft.
     */
    static readonly 'underwaterTorch': ItemType;
    /**
     * Represents an item that can place an undyed shulker box
     * within Minecraft.
     */
    static readonly 'undyedShulkerBox': ItemType;
    /**
     * Represents an item that can place an unknown block within
     * Minecraft.
     */
    static readonly 'unknown': ItemType;
    /**
     * Represents an item that can place an unlit redstone torch
     * within Minecraft.
     */
    static readonly 'unlitRedstoneTorch': ItemType;
    /**
     * Represents an item that can place an unpowered comparator
     * within Minecraft.
     */
    static readonly 'unpoweredComparator': ItemType;
    /**
     * Represents an item that can place an unpowered repeater
     * within Minecraft.
     */
    static readonly 'unpoweredRepeater': ItemType;
    static readonly 'verdantFroglight': ItemType;
    static readonly 'vexSpawnEgg': ItemType;
    static readonly 'villagerSpawnEgg': ItemType;
    static readonly 'vindicatorSpawnEgg': ItemType;
    /**
     * Represents an item that can place a set of vines within
     * Minecraft.
     */
    static readonly 'vine': ItemType;
    /**
     * Represents an item that can place a wall banner within
     * Minecraft.
     */
    static readonly 'wallBanner': ItemType;
    /**
     * Represents an item that can place a wall sign within
     * Minecraft.
     */
    static readonly 'wallSign': ItemType;
    static readonly 'wanderingTraderSpawnEgg': ItemType;
    static readonly 'wardenSpawnEgg': ItemType;
    /**
     * Represents an item that can place a warped button within
     * Minecraft.
     */
    static readonly 'warpedButton': ItemType;
    /**
     * Represents an item that can place a warped door within
     * Minecraft.
     */
    static readonly 'warpedDoor': ItemType;
    /**
     * Represents an item that can place a double slab of warped
     * within Minecraft.
     */
    static readonly 'warpedDoubleSlab': ItemType;
    /**
     * Represents an item that can place a warped fence within
     * Minecraft.
     */
    static readonly 'warpedFence': ItemType;
    /**
     * Represents an item that can place a warped fence gate within
     * Minecraft.
     */
    static readonly 'warpedFenceGate': ItemType;
    /**
     * Represents warped fungus within Minecraft.
     */
    static readonly 'warpedFungus': ItemType;
    static readonly 'warpedFungusOnAStick': ItemType;
    /**
     * Represents warped hyphae within Minecraft.
     */
    static readonly 'warpedHyphae': ItemType;
    /**
     * Represents warped nylium within Minecraft.
     */
    static readonly 'warpedNylium': ItemType;
    /**
     * Represents warped planks within Minecraft.
     */
    static readonly 'warpedPlanks': ItemType;
    /**
     * Represents an item that can place a warped pressure plate
     * within Minecraft.
     */
    static readonly 'warpedPressurePlate': ItemType;
    /**
     * Represents an item that can place a set of warped roots
     * within Minecraft.
     */
    static readonly 'warpedRoots': ItemType;
    static readonly 'warpedSign': ItemType;
    /**
     * Represents an item that can place a slab of warped material
     * within Minecraft.
     */
    static readonly 'warpedSlab': ItemType;
    /**
     * Represents an item that can place a set of warped stairs
     * within Minecraft.
     */
    static readonly 'warpedStairs': ItemType;
    /**
     * Represents an item that can place a warped standing sign
     * within Minecraft.
     */
    static readonly 'warpedStandingSign': ItemType;
    /**
     * Represents an item that can place a warped stem within
     * Minecraft.
     */
    static readonly 'warpedStem': ItemType;
    /**
     * Represents an item that can place a warped trapdoor within
     * Minecraft.
     */
    static readonly 'warpedTrapdoor': ItemType;
    /**
     * Represents an item that can place a warped wall sign within
     * Minecraft.
     */
    static readonly 'warpedWallSign': ItemType;
    /**
     * Represents an item that can place a warped wart block within
     * Minecraft.
     */
    static readonly 'warpedWartBlock': ItemType;
    /**
     * Represents water within Minecraft.
     */
    static readonly 'water': ItemType;
    static readonly 'waterBucket': ItemType;
    /**
     * Represents an item that can place a water lily within
     * Minecraft.
     */
    static readonly 'waterlily': ItemType;
    /**
     * Represents an item that can place a block of waxed copper
     * within Minecraft.
     */
    static readonly 'waxedCopper': ItemType;
    /**
     * Represents an item that can place a block of waxed cut
     * copper within Minecraft.
     */
    static readonly 'waxedCutCopper': ItemType;
    /**
     * Represents an item that can place a slab of waxed cut copper
     * within Minecraft.
     */
    static readonly 'waxedCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a set of waxed cut copper
     * stairs within Minecraft.
     */
    static readonly 'waxedCutCopperStairs': ItemType;
    /**
     * Represents an item that can place a double slab of waxed cut
     * copper within Minecraft.
     */
    static readonly 'waxedDoubleCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a block of waxed exposed
     * copper within Minecraft.
     */
    static readonly 'waxedExposedCopper': ItemType;
    /**
     * Represents an item that can place a block of waxed exposed
     * cut copper within Minecraft.
     */
    static readonly 'waxedExposedCutCopper': ItemType;
    /**
     * Represents an item that can place a slab of waxed exposed
     * cut copper within Minecraft.
     */
    static readonly 'waxedExposedCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a set of waxed exposed cut
     * copper stairs within Minecraft.
     */
    static readonly 'waxedExposedCutCopperStairs': ItemType;
    /**
     * Represents an item that can place a double slab of waxed
     * exposed cut copper within Minecraft.
     */
    static readonly 'waxedExposedDoubleCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a block of waxed oxidized
     * copper within Minecraft.
     */
    static readonly 'waxedOxidizedCopper': ItemType;
    /**
     * Represents an item that can place a block of waxed oxidized
     * cut copper within Minecraft.
     */
    static readonly 'waxedOxidizedCutCopper': ItemType;
    /**
     * Represents an item that can place a slab of waxed oxidized
     * cut copper within Minecraft.
     */
    static readonly 'waxedOxidizedCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a set of waxed oxidized
     * cut copper stairs within Minecraft.
     */
    static readonly 'waxedOxidizedCutCopperStairs': ItemType;
    /**
     * Represents an item that can place a double slab of waxed
     * oxidized cut copper within Minecraft.
     */
    static readonly 'waxedOxidizedDoubleCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a block of waxed weathered
     * copper within Minecraft.
     */
    static readonly 'waxedWeatheredCopper': ItemType;
    /**
     * Represents an item that can place a block of waxed weathered
     * cut copper within Minecraft.
     */
    static readonly 'waxedWeatheredCutCopper': ItemType;
    /**
     * Represents an item that can place a slab of waxed weathered
     * cut copper within Minecraft.
     */
    static readonly 'waxedWeatheredCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a set of waxed weathered
     * cut copper stairs within Minecraft.
     */
    static readonly 'waxedWeatheredCutCopperStairs': ItemType;
    /**
     * Represents an item that can place a double slab of waxed
     * weathered cut copper within Minecraft.
     */
    static readonly 'waxedWeatheredDoubleCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a block of weathered
     * copper within Minecraft.
     */
    static readonly 'weatheredCopper': ItemType;
    /**
     * Represents an item that can place a block of weathered cut
     * copper within Minecraft.
     */
    static readonly 'weatheredCutCopper': ItemType;
    /**
     * Represents an item that can place a slab of weathered cut
     * copper within Minecraft.
     */
    static readonly 'weatheredCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a set of weathered cut
     * copper stairs within Minecraft.
     */
    static readonly 'weatheredCutCopperStairs': ItemType;
    /**
     * Represents an item that can place a double slab of weathered
     * cut copper within Minecraft.
     */
    static readonly 'weatheredDoubleCutCopperSlab': ItemType;
    /**
     * Represents an item that can place a web within Minecraft.
     */
    static readonly 'web': ItemType;
    /**
     * Represents an item that can place a set of weeping vines
     * within Minecraft.
     */
    static readonly 'weepingVines': ItemType;
    /**
     * Represents wheat within Minecraft.
     */
    static readonly 'wheat': ItemType;
    static readonly 'wheatSeeds': ItemType;
    /**
     * Represents an item that can place a white candle within
     * Minecraft.
     */
    static readonly 'whiteCandle': ItemType;
    /**
     * Represents an item that can place a white candle cake within
     * Minecraft.
     */
    static readonly 'whiteCandleCake': ItemType;
    static readonly 'whiteDye': ItemType;
    /**
     * Represents an item that can place a block of white glazed
     * terracotta within Minecraft.
     */
    static readonly 'whiteGlazedTerracotta': ItemType;
    static readonly 'witchSpawnEgg': ItemType;
    /**
     * Represents an item that can place a wither rose within
     * Minecraft.
     */
    static readonly 'witherRose': ItemType;
    static readonly 'witherSkeletonSpawnEgg': ItemType;
    static readonly 'wolfSpawnEgg': ItemType;
    /**
     * Represents an item that can place a block of wood within
     * Minecraft.
     */
    static readonly 'wood': ItemType;
    static readonly 'woodenAxe': ItemType;
    /**
     * Represents an item that can place a wooden button within
     * Minecraft.
     */
    static readonly 'woodenButton': ItemType;
    /**
     * Represents an item that can place a wooden door within
     * Minecraft.
     */
    static readonly 'woodenDoor': ItemType;
    static readonly 'woodenHoe': ItemType;
    static readonly 'woodenPickaxe': ItemType;
    /**
     * Represents an item that can place a wooden pressure plate
     * within Minecraft.
     */
    static readonly 'woodenPressurePlate': ItemType;
    static readonly 'woodenShovel': ItemType;
    /**
     * Represents an item that can place a wooden slab within
     * Minecraft.
     */
    static readonly 'woodenSlab': ItemType;
    static readonly 'woodenSword': ItemType;
    /**
     * Represents wool within Minecraft.
     */
    static readonly 'wool': ItemType;
    static readonly 'writableBook': ItemType;
    static readonly 'writtenBook': ItemType;
    /**
     * Represents an item that can place a yellow candle within
     * Minecraft.
     */
    static readonly 'yellowCandle': ItemType;
    /**
     * Represents an item that can place a yellow candle cake
     * within Minecraft.
     */
    static readonly 'yellowCandleCake': ItemType;
    static readonly 'yellowDye': ItemType;
    /**
     * Represents an item that can place a yellow flower within
     * Minecraft.
     */
    static readonly 'yellowFlower': ItemType;
    /**
     * Represents an item that can place a yellow block of glazed
     * terracotta within Minecraft.
     */
    static readonly 'yellowGlazedTerracotta': ItemType;
    static readonly 'zoglinSpawnEgg': ItemType;
    static readonly 'zombieHorseSpawnEgg': ItemType;
    static readonly 'zombiePigmanSpawnEgg': ItemType;
    static readonly 'zombieSpawnEgg': ItemType;
    static readonly 'zombieVillagerSpawnEgg': ItemType;
    protected constructor();
}
/**
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 */
declare class MolangVariableMap {
    constructor();
    /**
     * @remarks
     * Sets a Molang rendering/animation variable with the value of
     * a Red/Green/Blue color.
     * @param variableName
     * @param color
     */
    setColorRGB(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Sets a Molang rendering/animation variable with the value of
     * a Red/Green/Blue color + Alpha (transparency) value.
     * @param variableName
     * @param color
     */
    setColorRGBA(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Sets the speed and direction for a Molang (rendering and
     * animation) variable.
     * @param variableName
     * @param speed
     * @param direction
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    /**
     * @remarks
     * Sets a vector value for a Molang (rendering and animation)
     * variable.
     * @param variableName
     * @param vector
     */
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
}
/**
 * Additional configuration options for
 * {@link mojang-minecraft.Player}.playMusic/{@link mojang-minecraft}.Player.queueMusic
 * methods.
 */
declare class MusicOptions {
    /**
     * Specifies a fade overlap for music at the end of play.
     */
    'fade': number;
    /**
     * (to be removed in a future update.)
     */
    'location': Location;
    /**
     * If set to true, this music track will play repeatedly.
     */
    'loop': boolean;
    /**
     * Relative volume level of the music.
     */
    'volume': number;
    /**
     * @remarks
     * Creates a new instance of the SoundOptions object.
     */
    constructor();
}
/**
 * Contains data resulting from a navigation operation,
 * including whether the navigation is possible and the path of
 * navigation.
 */
declare class NavigationResult {
    /**
     * Whether the navigation result contains a full path,
     * including to the requested destination.
     */
    readonly 'isFullPath': boolean;
    /**
     * A set of block locations that comprise the navigation route.
     */
    readonly 'path': BlockLocation[];
    protected constructor();
}
/**
 * Represents a min/max structure for expressing a potential
 * range of numbers.
 */
declare class NumberRange {
    /**
     * Maximum value within a range.
     */
    'max': number;
    /**
     * Minimum value within a range.
     */
    'min': number;
    /**
     * @remarks
     * Returns a random number between the minimum and maximum of
     * the range.
     */
    next(): number;
    protected constructor();
}
/**
 * Contains information related to changes to a piston
 * expanding or retracting.
 */
declare class PistonActivateEvent extends BlockEvent {
    /**
     * Block impacted by this event.
     */
    readonly 'block': Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly 'dimension': Dimension;
    /**
     * True if the piston is the process of expanding.
     */
    readonly 'isExpanding': boolean;
    /**
     * Contains additional properties and details of the piston.
     */
    readonly 'piston': BlockPistonComponent;
    protected constructor();
}
/**
 * Manages callbacks that are connected to piston activations.
 */
declare class PistonActivateEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a piston expands or
     * retracts.
     * @param callback
     */
    subscribe(callback: (arg: PistonActivateEvent) => void): (arg: PistonActivateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateEvent) => void): void;
    protected constructor();
}
/**
 * Represents a rotation structure with pitch and yaw
 * components.
 */
declare class PitchYawRotation {
    /**
     * Pitch (up-and-down) element of this rotation.
     */
    'pitch': number;
    /**
     * Yaw component (left-to-right) of this position.
     */
    'yaw': number;
    protected constructor();
}
/**
 * Represents a player within the world.
 */
declare class Player extends Entity {
    /**
     * Rotation of the body component of the player.
     * @throws This property can throw when used.
     */
    readonly 'bodyRotation': number;
    /**
     * Dimension that the entity is currently within.
     * @throws This property can throw when used.
     */
    readonly 'dimension': Dimension;
    /**
     * Location of the center of the head component of the player.
     * @throws This property can throw when used.
     */
    readonly 'headLocation': Location;
    /**
     * Identifier for the player.
     * @throws This property can throw when used.
     */
    readonly 'id': string;
    /**
     * True if the player is currently using a sneaking movement.
     */
    'isSneaking': boolean;
    /**
     * Current location of the player.
     * @throws This property can throw when used.
     */
    readonly 'location': Location;
    /**
     * Name of the player.
     * @throws This property can throw when used.
     */
    readonly 'name': string;
    /**
     * Optional name tag of the player.
     */
    'nameTag': string;
    /**
     * Manages the selected slot in the player's hotbar.
     */
    'selectedSlot': number;
    /**
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking. For players, which
     * don't use any AI semantics, this property does not do
     * anything.
     */
    'target': Entity;
    /**
     * Current speed of the player across X, Y, and Z dimensions.
     * @throws This property can throw when used.
     */
    readonly 'velocity': Vector;
    /**
     * Vector of the current view of the player.
     * @throws This property can throw when used.
     */
    readonly 'viewVector': Vector;
    /**
     * @remarks
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @param showParticles
     * @throws This function can throw errors.
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * @remarks
     * Adds a specified tag to an entity.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * Gets the first block that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromViewVector(options?: BlockRaycastOptions): Block;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): IEntityComponent;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): IEntityComponent[];
    /**
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     * @param effectType
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType): Effect;
    /**
     * @remarks
     * Gets the first entity that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    /**
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(itemCategory: string): number;
    /**
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    kill(): void;
    /**
     * @remarks
     * Plays a sound that only this particular player can hear.
     * @param soundID
     * Identifier of the sound to play.
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    postClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * Removes a specified tag from an entity.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Runs a particular command from the context of this player.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     * @example commands.js
     * \`\`\`typescript
     *        player.runCommand("say You got a new high score!");
     *        player.runCommand("scoreboard players set @s score 10");
     *
     * \`\`\`
     */
    runCommand(commandString: string): any;
    /**
     * @remarks
     * Sets a velocity for the entity to move with.
     * @param velocity
     * X/Y/Z components of the velocity.
     * @throws This function can throw errors.
     */
    setVelocity(velocity: Vector): void;
    /**
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    /**
     * @remarks
     * Teleports the selected player to a new location
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param xRotation
     * X rotation of the player after teleportation.
     * @param yRotation
     * Y rotation of the player after teleportation.
     * @throws This function can throw errors.
     */
    teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number): void;
    /**
     * @remarks
     * Teleports the selected player to a new location, and will
     * have the player facing a specified location.
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param facingLocation
     * Location that this player will be facing.
     * @throws This function can throw errors.
     */
    teleportFacing(location: Location, dimension: Dimension, facingLocation: Location): void;
    /**
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
    protected constructor();
}
/**
 * Represents the inventory of a {@link mojang-minecraft.Player} in
 * the world.
 */
declare class PlayerInventoryComponentContainer extends InventoryComponentContainer {
    /**
     * Contains a count of the slots in the container that are
     * empty.
     * @throws This property can throw when used.
     */
    readonly 'emptySlotsCount': number;
    /**
     * Returns the size capacity of the inventory container on this
     * block.
     * @throws This property can throw when used.
     */
    readonly 'size': number;
    /**
     * @remarks
     * Adds an item to the specified container. Item will be placed
     * in the first available empty slot. (use .setItem if you wish
     * to set items in a particular slot.)
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Gets the item stack for the set of items at the specified
     * slot. If the slot is empty, returns undefined. This method
     * does not change or clear the contents of the specified slot.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * @param toSlot
     * Zero-based index of the slot to move to.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
    protected constructor();
}
/**
 * This type is usable for iterating over a set of players.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
declare class PlayerIterator implements Iterable<Player> {
    [Symbol.iterator](): Iterator<Player>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Player in the iteration.
     */
    next(): IteratorResult<Player>;
    protected constructor();
}
/**
 * Contains information regarding a player that has joined.
 */
declare class PlayerJoinEvent {
    /**
     * Player that has joined the world.
     */
    'player': Player;
    protected constructor();
}
/**
 * Manages callbacks that are connected to a player joining the
 * world.
 */
declare class PlayerJoinEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player joins the
     * world.
     * @param callback
     */
    subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player joins the
     * world.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
    protected constructor();
}
/**
 * Contains information regarding a player that has left the
 * world.
 */
declare class PlayerLeaveEvent {
    /**
     * Player that has left the world.
     */
    readonly 'playerName': string;
    protected constructor();
}
/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
declare class PlayerLeaveEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     * @param callback
     */
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
    protected constructor();
}
/**
 * Implements a class that can be used for testing sculk
 * spreading behaviors. This sculk spreader class can drive the
 * growth of sculk around a particular block.
 */
declare class SculkSpreader {
    /**
     * @remarks
     * Adds a cursor - which is a notional waypoint that the sculk
     * will spread in the direction of.
     * @param offset
     * @param charge
     */
    addCursorsWithOffset(offset: BlockLocation, charge: number): void;
    /**
     * @remarks
     * Retrieves the current position of the specified cursor.
     * @param index
     * @throws This function can throw errors.
     */
    getCursorPosition(index: number): BlockLocation;
    /**
     * @remarks
     * Gets the maximum charge of a sculk spreader.
     * @throws This function can throw errors.
     */
    getMaxCharge(): number;
    /**
     * @remarks
     * Returns a number of overall cursors for this sculk spreader.
     * @throws This function can throw errors.
     */
    getNumberOfCursors(): number;
    /**
     * @remarks
     * Gets the total current charge of the sculk spreader.
     * @throws This function can throw errors.
     */
    getTotalCharge(): number;
    protected constructor();
}
/**
 * Describes a particular seating position on this rideable
 * entity.
 */
declare class Seat {
    /**
     * If specified, contains a forced rotation that the riders in
     * this seat are facing.
     */
    'lockRiderRotation': number;
    /**
     * A maximum number of riders that this seat can support.
     */
    'maxRiderCount': number;
    /**
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     */
    'minRiderCount': number;
    /**
     * Physical location of this seat, relative to the entity's
     * location.
     */
    'position': Location;
    protected constructor();
}
declare class ServerMessageSignal {
    subscribe(callback: (arg: MessageReceiveEvent) => void): (arg: MessageReceiveEvent) => void;
    unsubscribe(callback: (arg: MessageReceiveEvent) => void): void;
    protected constructor();
}
/**
 * Additional configuration options for the
 * {@link mojang-minecraft.Player.playSound}/{@link mojang-minecraft.World.playSound}
 * method.
 */
declare class SoundOptions {
    /**
     * Specifies a location of where to play a particular sound.
     */
    'location': Location;
    /**
     * Pitch adjustment level for the sound.
     */
    'pitch': number;
    /**
     * Relative volume level of the sound.
     */
    'volume': number;
    /**
     * @remarks
     * Creates a new instance of the SoundOptions object.
     */
    constructor();
}
/**
 * Contains the state of a string-based property for a
 * {@link mojang-minecraft.BlockPermutation}.
 */
declare class StringBlockProperty extends IBlockProperty {
    /**
     * Name of this property.
     */
    readonly 'name': string;
    /**
     * A list of allowed values for this string property.
     */
    readonly 'validValues': string[];
    /**
     * The current value of this property.
     * @throws
     * Setting this property can throw if the value passed is not
     * valid for the property. Use
     * {@link mojang-minecraft.StringBlockProperty.validValues} to check
     * allowed values.
     */
    'value': string;
    protected constructor();
}
/**
 * An event for handling updates, that fires 20 times every
 * second.
 */
declare class TickEvent {
    /**
     * Current tick at the time this event was fired.
     */
    readonly 'currentTick': number;
    /**
     * Time since the last tick was fired.
     */
    readonly 'deltaTime': number;
    protected constructor();
}
/**
 * Manages callbacks that are connected to a tick event.
 */
declare class TickEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called on every tick.
     * @param callback
     */
    subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called every tick.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TickEvent) => void): void;
    protected constructor();
}
/**
 * Represents a trigger for firing an event.
 */
declare class Trigger {
    /**
     * Event name of the trigger.
     */
    'eventName': string;
    constructor(eventName: string);
}
/**
 * Contains a description of a vector.
 */
declare class Vector {
    /**
     * X component of this vector.
     */
    'x': number;
    /**
     * Y component of this vector.
     */
    'y': number;
    /**
     * Z component of this vector.
     */
    'z': number;
    /**
     * A constant vector that represents (0, 0, -1).
     */
    static readonly 'back': Vector;
    /**
     * A constant vector that represents (0, -1, 0).
     */
    static readonly 'down': Vector;
    /**
     * A constant vector that represents (0, 0, 1).
     */
    static readonly 'forward': Vector;
    /**
     * A constant vector that represents (-1, 0, 0).
     */
    static readonly 'left': Vector;
    /**
     * A constant vector that represents (1, 1, 1).
     */
    static readonly 'one': Vector;
    /**
     * A constant vector that represents (1, 0, 0).
     */
    static readonly 'right': Vector;
    /**
     * A constant vector that represents (0, 1, 0).
     */
    static readonly 'up': Vector;
    /**
     * A constant vector that represents (0, 0, 0).
     */
    static readonly 'zero': Vector;
    /**
     * @remarks
     * Returns the addition of these vectors.
     * @param a
     * @param b
     */
    static add(a: Vector, b: Vector): Vector;
    /**
     * @remarks
     * Creates a new instance of an abstract vector.
     * @param x
     * X component of the vector.
     * @param y
     * Y component of the vector.
     * @param z
     * Z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     * @param a
     * @param b
     */
    static cross(a: Vector, b: Vector): Vector;
    /**
     * @remarks
     * Returns the distance between two vectors.
     * @param a
     * @param b
     */
    static distance(a: Vector, b: Vector): number;
    /**
     * @remarks
     * Returns the component-wise division of these vectors.
     * @param a
     * @param b
     */
    static divide(a: Vector, b: number | Vector): Vector;
    /**
     * @remarks
     * Compares this vector and another vector to one another.
     * @param other
     * Other vector to compare this vector to.
     * @returns
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean;
    /**
     * @remarks
     * Returns the length of this vector.
     */
    length(): number;
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     * @param a
     * @param b
     * @param t
     */
    static lerp(a: Vector, b: Vector, t: number): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     * @param a
     * @param b
     */
    static max(a: Vector, b: Vector): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     * @param a
     * @param b
     */
    static min(a: Vector, b: Vector): Vector;
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     * @param a
     * @param b
     */
    static multiply(a: Vector, b: number | Vector): Vector;
    /**
     * @remarks
     * Returns this vector as a normalized vector.
     */
    normalized(): Vector;
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     * @param a
     * @param b
     * @param s
     */
    static slerp(a: Vector, b: Vector, s: number): Vector;
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     * @param a
     * @param b
     */
    static subtract(a: Vector, b: Vector): Vector;
}
/**
 * Contains information related to changes in weather in the
 * environment.
 */
declare class WeatherChangeEvent {
    /**
     * Dimension in which the weather has changed.
     */
    readonly 'dimension': string;
    /**
     * Whether it is lightning after the change in weather.
     */
    readonly 'lightning': boolean;
    /**
     * Whether it is raining after the change in weather.
     */
    readonly 'raining': boolean;
    protected constructor();
}
/**
 * Manages callbacks that are connected to weather changing.
 */
declare class WeatherChangeEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     * @param callback
     */
    subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
    protected constructor();
}
/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
declare class World {
    /**
     * Contains a set of events that are applicable to the entirety
     * of the world.
     */
    readonly 'events': Events;
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @param dimensionId
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @remarks
     * Returns all players currently in the world.
     * @param options
     * @returns
     * All players currently in the world.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    /**
     * @remarks
     * Plays a particular music track for all players.
     * @param trackID
     * @param musicOptions
     */
    playMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Plays a sound for all players.
     * @param soundID
     * @param soundOptions
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @remarks
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     * @param trackID
     * @param musicOptions
     */
    queueMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Stops any music tracks from playing.
     */
    stopMusic(): void;
    protected constructor();
}
/**
 * How many times the server ticks per second of real time.
 */
declare const TicksPerSecond = 20;
/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
declare const world: World;
`

export const Namespace = `
declare namespace mojangminecraft {
  export enum Direction { down = 0, up = 1, north = 2, south = 3, west = 4, east = 5, }
  export enum GameMode { survival = 0, creative = 1, adventure = 2, spectator = 6, }
  export enum MessageSourceType { serverCommand = 0, entityCommand = 1, clientScript = 2, serverScript = 3, }
  export class BeforeChatEvent { 'cancel': boolean; 'message': string; 'sender': Player; 'sendToTargets': boolean; 'targets': Player[]; protected constructor(); }
  export class BeforeChatEventSignal { subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void; unsubscribe(callback: (arg: BeforeChatEvent) => void): void; protected constructor(); }
  export class BeforeDataDrivenEntityTriggerEvent { 'cancel': boolean; readonly 'entity': Entity; readonly 'id': string; 'modifiers': DefinitionModifier[]; protected constructor(); }
  export class BeforeDataDrivenEntityTriggerEventSignal { subscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void, options?: EntityDataDrivenTriggerEventOptions,): (arg: BeforeDataDrivenEntityTriggerEvent) => void; unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void; protected constructor(); }
  export class BeforeExplosionEvent { 'cancel': boolean; readonly 'dimension': Dimension; 'impactedBlocks': BlockLocation[]; readonly 'source': Entity; protected constructor(); }
  export class BeforeExplosionEventSignal { subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void; unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void; protected constructor(); }
  export class BeforeItemDefinitionEventSignal { subscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void,): (arg: BeforeItemDefinitionTriggeredEvent) => void; unsubscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): void; protected constructor(); }
  export class BeforeItemDefinitionTriggeredEvent { 'cancel': boolean; readonly 'eventName': string; 'item': ItemStack; readonly 'source': Entity; protected constructor(); }
  export class BeforeItemUseEvent { 'cancel': boolean; 'item': ItemStack; readonly 'source': Entity; protected constructor(); }
  export class BeforeItemUseEventSignal { subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void; unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void; protected constructor(); }
  export class BeforeItemUseOnEvent { readonly 'blockFace': Direction; readonly 'blockLocation': BlockLocation; 'cancel': boolean; readonly 'faceLocationX': number; readonly 'faceLocationY': number; 'item': ItemStack; readonly 'source': Entity; protected constructor(); }
  export class BeforeItemUseOnEventSignal { subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void; unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void; protected constructor(); }
  export class BeforePistonActivateEvent extends BlockEvent { readonly 'block': Block; 'cancel': boolean; readonly 'dimension': Dimension; readonly 'isExpanding': boolean; readonly 'piston': BlockPistonComponent; protected constructor(); }
  export class BeforePistonActivateEventSignal { subscribe(callback: (arg: BeforePistonActivateEvent) => void): (arg: BeforePistonActivateEvent) => void; unsubscribe(callback: (arg: BeforePistonActivateEvent) => void): void; protected constructor(); }
  export class Block { readonly 'dimension': Dimension; readonly 'id': string; readonly 'isEmpty': boolean; 'isWaterlogged': boolean; readonly 'location': BlockLocation; readonly 'permutation': BlockPermutation; readonly 'type': BlockType; readonly 'x': number; readonly 'y': number; readonly 'z': number; getComponent(componentName: string): any; getTags(): string[]; hasTag(tag: string): boolean; setPermutation(permutation: BlockPermutation): void; setType(blockType: BlockType): void; protected constructor(); }
  export class BlockAreaSize { 'x': number; 'y': number; 'z': number; constructor(x: number, y: number, z: number); equals(other: BlockAreaSize): boolean; }
  export class BlockBreakEvent extends BlockEvent { readonly 'block': Block; readonly 'brokenBlockPermutation': BlockPermutation; readonly 'dimension': Dimension; readonly 'player': Player; protected constructor(); }
  export class BlockBreakEventSignal { subscribe(callback: (arg: BlockBreakEvent) => void): (arg: BlockBreakEvent) => void; unsubscribe(callback: (arg: BlockBreakEvent) => void): void; protected constructor(); }
  export class BlockComponent { protected constructor(); }
  export class BlockEvent { readonly 'block': Block; readonly 'dimension': Dimension; protected constructor(); }
  export class BlockExplodeEvent extends BlockEvent { readonly 'block': Block; readonly 'dimension': Dimension; readonly 'source': Entity; protected constructor(); }
  export class BlockExplodeEventSignal { subscribe(callback: (arg: BlockExplodeEvent) => void): (arg: BlockExplodeEvent) => void; unsubscribe(callback: (arg: BlockExplodeEvent) => void): void; protected constructor(); }
  export class BlockInventoryComponent { readonly 'container': BlockInventoryComponentContainer; readonly 'location': BlockLocation; protected constructor(); }
  export class BlockInventoryComponentContainer extends Container { readonly 'emptySlotsCount': number; readonly 'size': number; addItem(itemStack: ItemStack): void; getItem(slot: number): ItemStack; setItem(slot: number, itemStack: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean; protected constructor(); }
  export class BlockLavaContainerComponent { 'fillLevel': number; readonly 'location': BlockLocation; protected constructor(); }
  export class BlockLocation { 'x': number; 'y': number; 'z': number; above(): BlockLocation; blocksBetween(other: BlockLocation): BlockLocation[]; constructor(x: number, y: number, z: number); equals(other: BlockLocation): boolean; offset(x: number, y: number, z: number): BlockLocation; }
  export class BlockPermutation { readonly 'type': BlockType; clone(): BlockPermutation; getAllProperties(): IBlockProperty[]; getProperty(propertyName: string): IBlockProperty; getTags(): string[]; hasTag(tag: string): boolean; protected constructor(); }
  export class BlockPistonComponent { readonly 'attachedBlocks': BlockLocation[]; readonly 'isExpanded': boolean; readonly 'isExpanding': boolean; readonly 'isMoving': boolean; readonly 'isRetracted': boolean; readonly 'isRetracting': boolean; readonly 'location': BlockLocation; protected constructor(); }
  export class BlockPlaceEvent extends BlockEvent { readonly 'block': Block; readonly 'dimension': Dimension; readonly 'player': Player; protected constructor(); }
  export class BlockPlaceEventSignal { subscribe(callback: (arg: BlockPlaceEvent) => void): (arg: BlockPlaceEvent) => void; unsubscribe(callback: (arg: BlockPlaceEvent) => void): void; protected constructor(); }
  export class BlockPotionContainerComponent { 'fillLevel': number; readonly 'location': BlockLocation; setPotionType(item: ItemStack): void; protected constructor(); }
  export class BlockProperties { static readonly 'active' = 'active'; static readonly 'age' = 'age'; static readonly 'ageBit' = 'age_bit'; static readonly 'allowUnderwaterBit' = 'allow_underwater_bit'; static readonly 'attachedBit' = 'attached_bit'; static readonly 'attachment' = 'attachment'; static readonly 'bambooLeafSize' = 'bamboo_leaf_size'; static readonly 'bambooStalkThickness' = 'bamboo_stalk_thickness'; static readonly 'bigDripleafHead' = 'big_dripleaf_head'; static readonly 'bigDripleafTilt' = 'big_dripleaf_tilt'; static readonly 'biteCounter' = 'bite_counter'; static readonly 'blockLightLevel' = 'block_light_level'; static readonly 'bloom' = 'bloom'; static readonly 'brewingStandSlotABit' = 'brewing_stand_slot_a_bit'; static readonly 'brewingStandSlotBBit' = 'brewing_stand_slot_b_bit'; static readonly 'brewingStandSlotCBit' = 'brewing_stand_slot_c_bit'; static readonly 'buttonPressedBit' = 'button_pressed_bit'; static readonly 'candles' = 'candles'; static readonly 'cauldronLiquid' = 'cauldron_liquid'; static readonly 'chemistryTableType' = 'chemistry_table_type'; static readonly 'chiselType' = 'chisel_type'; static readonly 'clusterCount' = 'cluster_count'; static readonly 'color' = 'color'; static readonly 'colorBit' = 'color_bit'; static readonly 'composterFillLevel' = 'composter_fill_level'; static readonly 'conditionalBit' = 'conditional_bit'; static readonly 'coralColor' = 'coral_color'; static readonly 'coralDirection' = 'coral_direction'; static readonly 'coralFanDirection' = 'coral_fan_direction'; static readonly 'coralHangTypeBit' = 'coral_hang_type_bit'; static readonly 'coveredBit' = 'covered_bit'; static readonly 'crackedState' = 'cracked_state'; static readonly 'damage' = 'damage'; static readonly 'deadBit' = 'dead_bit'; static readonly 'deprecated' = 'deprecated'; static readonly 'direction' = 'direction'; static readonly 'dirtType' = 'dirt_type'; static readonly 'disarmedBit' = 'disarmed_bit'; static readonly 'doorHingeBit' = 'door_hinge_bit'; static readonly 'doublePlantType' = 'double_plant_type'; static readonly 'dragDown' = 'drag_down'; static readonly 'dripstoneThickness' = 'dripstone_thickness'; static readonly 'endPortalEyeBit' = 'end_portal_eye_bit'; static readonly 'explodeBit' = 'explode_bit'; static readonly 'extinguished' = 'extinguished'; static readonly 'facingDirection' = 'facing_direction'; static readonly 'fillLevel' = 'fill_level'; static readonly 'flowerType' = 'flower_type'; static readonly 'groundSignDirection' = 'ground_sign_direction'; static readonly 'growingPlantAge' = 'growing_plant_age'; static readonly 'growth' = 'growth'; static readonly 'hanging' = 'hanging'; static readonly 'headPieceBit' = 'head_piece_bit'; static readonly 'height' = 'height'; static readonly 'honeyLevel' = 'honey_level'; static readonly 'hugeMushroomBits' = 'huge_mushroom_bits'; static readonly 'infiniburnBit' = 'infiniburn_bit'; static readonly 'inWallBit' = 'in_wall_bit'; static readonly 'itemFrameMapBit' = 'item_frame_map_bit'; static readonly 'itemFramePhotoBit' = 'item_frame_photo_bit'; static readonly 'kelpAge' = 'kelp_age'; static readonly 'leverDirection' = 'lever_direction'; static readonly 'liquidDepth' = 'liquid_depth'; static readonly 'lit' = 'lit'; static readonly 'moisturizedAmount' = 'moisturized_amount'; static readonly 'monsterEggStoneType' = 'monster_egg_stone_type'; static readonly 'multiFaceDirectionBits' = 'multi_face_direction_bits'; static readonly 'newLeafType' = 'new_leaf_type'; static readonly 'newLogType' = 'new_log_type'; static readonly 'noDropBit' = 'no_drop_bit'; static readonly 'occupiedBit' = 'occupied_bit'; static readonly 'oldLeafType' = 'old_leaf_type'; static readonly 'oldLogType' = 'old_log_type'; static readonly 'openBit' = 'open_bit'; static readonly 'outputLitBit' = 'output_lit_bit'; static readonly 'outputSubtractBit' = 'output_subtract_bit'; static readonly 'persistentBit' = 'persistent_bit'; static readonly 'pillarAxis' = 'pillar_axis'; static readonly 'portalAxis' = 'portal_axis'; static readonly 'poweredBit' = 'powered_bit'; static readonly 'prismarineBlockType' = 'prismarine_block_type'; static readonly 'railDataBit' = 'rail_data_bit'; static readonly 'railDirection' = 'rail_direction'; static readonly 'redstoneSignal' = 'redstone_signal'; static readonly 'repeaterDelay' = 'repeater_delay'; static readonly 'respawnAnchorCharge' = 'respawn_anchor_charge'; static readonly 'rotation' = 'rotation'; static readonly 'sandStoneType' = 'sand_stone_type'; static readonly 'sandType' = 'sand_type'; static readonly 'saplingType' = 'sapling_type'; static readonly 'seaGrassType' = 'sea_grass_type'; static readonly 'spongeType' = 'sponge_type'; static readonly 'stability' = 'stability'; static readonly 'stabilityCheck' = 'stability_check'; static readonly 'stoneBrickType' = 'stone_brick_type'; static readonly 'stoneSlabType' = 'stone_slab_type'; static readonly 'stoneSlabType2' = 'stone_slab_type_2'; static readonly 'stoneSlabType3' = 'stone_slab_type_3'; static readonly 'stoneSlabType4' = 'stone_slab_type_4'; static readonly 'stoneType' = 'stone_type'; static readonly 'strippedBit' = 'stripped_bit'; static readonly 'structureBlockType' = 'structure_block_type'; static readonly 'structureVoidType' = 'structure_void_type'; static readonly 'suspendedBit' = 'suspended_bit'; static readonly 'tallGrassType' = 'tall_grass_type'; static readonly 'toggleBit' = 'toggle_bit'; static readonly 'topSlotBit' = 'top_slot_bit'; static readonly 'torchFacingDirection' = 'torch_facing_direction'; static readonly 'triggeredBit' = 'triggered_bit'; static readonly 'turtleEggCount' = 'turtle_egg_count'; static readonly 'twistingVinesAge' = 'twisting_vines_age'; static readonly 'updateBit' = 'update_bit'; static readonly 'upperBlockBit' = 'upper_block_bit'; static readonly 'upsideDownBit' = 'upside_down_bit'; static readonly 'vineDirectionBits' = 'vine_direction_bits'; static readonly 'wallBlockType' = 'wall_block_type'; static readonly 'wallConnectionTypeEast' = 'wall_connection_type_east'; static readonly 'wallConnectionTypeNorth' = 'wall_connection_type_north'; static readonly 'wallConnectionTypeSouth' = 'wall_connection_type_south'; static readonly 'wallConnectionTypeWest' = 'wall_connection_type_west'; static readonly 'wallPostBit' = 'wall_post_bit'; static readonly 'weepingVinesAge' = 'weeping_vines_age'; static readonly 'weirdoDirection' = 'weirdo_direction'; static readonly 'woodType' = 'wood_type'; protected constructor(); }
  export class BlockRaycastOptions { 'includeLiquidBlocks': boolean; 'includePassableBlocks': boolean; 'maxDistance': number; constructor(); }
  export class BlockRecordPlayerComponent { clearRecord(): void; isPlaying(): boolean; setRecord(recordItemType: ItemType): void; protected constructor(); }
  export class BlockSnowContainerComponent { 'fillLevel': number; readonly 'location': BlockLocation; protected constructor(); }
  export class BlockType { readonly 'canBeWaterlogged': boolean; readonly 'id': string; createDefaultBlockPermutation(): BlockPermutation; protected constructor(); }
  export class BlockWaterContainerComponent { 'customColor': Color; 'fillLevel': number; readonly 'location': BlockLocation; addDye(itemType: ItemType): void; protected constructor(); }
  export class BoolBlockProperty extends IBlockProperty { readonly 'name': string; readonly 'validValues': boolean[]; 'value': boolean; protected constructor(); }
  export class ChatEvent { 'message': string; 'sender': Player; 'sendToTargets': boolean; 'targets': Player[]; protected constructor(); }
  export class ChatEventSignal { subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void; unsubscribe(callback: (arg: ChatEvent) => void): void; protected constructor(); }
  export class Color { 'alpha': number; 'blue': number; 'green': number; 'red': number; constructor(red: number, green: number, blue: number, alpha: number); }
  export class Container { readonly 'emptySlotsCount': number; readonly 'size': number; addItem(itemStack: ItemStack): void; getItem(slot: number): ItemStack; setItem(slot: number, itemStack: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean; protected constructor(); }
  export class DataDrivenEntityTriggerEvent { readonly 'entity': Entity; readonly 'id': string; readonly 'modifiers': DefinitionModifier[]; protected constructor(); }
  export class DataDrivenEntityTriggerEventSignal { subscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void, options?: EntityDataDrivenTriggerEventOptions,): (arg: DataDrivenEntityTriggerEvent) => void; unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void; protected constructor(); }
  export class DefinitionModifier { readonly 'componentGroupsToAdd': string[]; readonly 'componentGroupsToRemove': string[]; 'triggers': Trigger[]; constructor(); }
  export class Dimension { readonly 'id': string; createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void; getBlock(location: BlockLocation): Block; getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block; getEntities(getEntities?: EntityQueryOptions): EntityIterator; getEntitiesAtBlockLocation(location: BlockLocation): Entity[]; getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[]; getPlayers(getPlayers?: EntityQueryOptions): PlayerIterator; isEmpty(location: BlockLocation): boolean; runCommand(commandString: string): any; spawnEntity(identifier: string, location: BlockLocation | Location): Entity; spawnItem(item: ItemStack, location: BlockLocation | Location): Entity; spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void; protected constructor(); }
  export class Effect { readonly 'amplifier': number; readonly 'displayName': string; readonly 'duration': number; protected constructor(); }
  export class EffectAddEvent { 'effect': Effect; 'effectState': number; 'entity': Entity; protected constructor(); }
  export class EffectAddEventSignal { subscribe(callback: (arg: EffectAddEvent) => void, options?: EntityEventOptions): (arg: EffectAddEvent) => void; unsubscribe(callback: (arg: EffectAddEvent) => void): void; protected constructor(); }
  export class EffectType { getName(): string; protected constructor(); }
  export class Enchantment { 'level': number; readonly 'type': EnchantmentType; constructor(enchantmentType: EnchantmentType, level?: number); }
  export class EnchantmentList implements Iterable<Enchantment> { readonly 'slot': number;[Symbol.iterator](): Iterator<Enchantment>; addEnchantment(enchantment: Enchantment): boolean; canAddEnchantment(enchantment: Enchantment): boolean; constructor(enchantmentSlot: number); getEnchantment(enchantmentType: EnchantmentType): Enchantment; hasEnchantment(enchantmentType: EnchantmentType): number; next(): IteratorResult<Enchantment>; removeEnchantment(enchantmentType: EnchantmentType): void; }
  export class EnchantmentSlot { static readonly 'all' = -1; static readonly 'armorFeet' = 4; static readonly 'armorHead' = 1; static readonly 'armorLegs' = 8; static readonly 'armorTorso' = 2; static readonly 'axe' = 512; static readonly 'bow' = 32; static readonly 'carrotStick' = 8192; static readonly 'cosmeticHead' = 262144; static readonly 'crossbow' = 65536; static readonly 'elytra' = 16384; static readonly 'fishingRod' = 4096; static readonly 'flintsteel' = 256; static readonly 'gArmor' = 15; static readonly 'gDigging' = 3648; static readonly 'gTool' = 131520; static readonly 'hoe' = 64; static readonly 'none' = 0; static readonly 'pickaxe' = 1024; static readonly 'shears' = 128; static readonly 'shield' = 131072; static readonly 'shovel' = 2048; static readonly 'spear' = 32768; static readonly 'sword' = 16; protected constructor(); }
  export class EnchantmentType { readonly 'id': string; readonly 'maxLevel': number; protected constructor(); }
  export class Entity { readonly 'bodyRotation': number; readonly 'dimension': Dimension; readonly 'headLocation': Location; readonly 'id': string; 'isSneaking': boolean; readonly 'location': Location; 'nameTag': string; 'target': Entity; readonly 'velocity': Vector; readonly 'viewVector': Vector; addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void; addTag(tag: string): boolean; getBlockFromViewVector(options?: BlockRaycastOptions): Block; getComponent(componentId: string): IEntityComponent; getComponents(): IEntityComponent[]; getEffect(effectType: EffectType): Effect; getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[]; getTags(): string[]; hasComponent(componentId: string): boolean; hasTag(tag: string): boolean; kill(): void; removeTag(tag: string): boolean; runCommand(commandString: string): any; setVelocity(velocity: Vector): void; teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number): void; teleportFacing(location: Location, dimension: Dimension, facingLocation: Location): void; triggerEvent(eventName: string): void; protected constructor(); }
  export class EntityAddRiderComponent extends IEntityComponent { readonly 'entityType': string; readonly 'id': string; readonly 'spawnEvent': string; protected constructor(); }
  export class EntityAgeableComponent extends IEntityComponent { readonly 'dropItems': string[]; readonly 'duration': number; readonly 'feedItems': EntityDefinitionFeedItem[]; readonly 'growUp': Trigger; readonly 'id': string; protected constructor(); }
  export class EntityBreathableComponent extends IEntityComponent { readonly 'breatheBlocks': BlockPermutation[]; readonly 'breathesAir': boolean; readonly 'breathesLava': boolean; readonly 'breathesSolids': boolean; readonly 'breathesWater': boolean; readonly 'generatesBubbles': boolean; readonly 'id': string; readonly 'inhaleTime': number; readonly 'nonBreatheBlocks': BlockPermutation[]; readonly 'suffocateTime': number; readonly 'totalSupply': number; setAirSupply(value: number): void; protected constructor(); }
  export class EntityCanClimbComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityCanFlyComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityCanPowerJumpComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityColorComponent extends IEntityComponent { readonly 'id': string; 'value': number; protected constructor(); }
  export class EntityCreateEvent { 'entity': Entity; protected constructor(); }
  export class EntityCreateEventSignal { subscribe(callback: (arg: EntityCreateEvent) => void): (arg: EntityCreateEvent) => void; unsubscribe(callback: (arg: EntityCreateEvent) => void): void; protected constructor(); }
  export class EntityDataDrivenTriggerEventOptions { 'entities': Entity[]; 'entityTypes': string[]; 'eventTypes': string[]; constructor(); }
  export class EntityDefinitionFeedItem { readonly 'growth': number; readonly 'item': string; protected constructor(); }
  export class EntityEventOptions { 'entities': Entity[]; 'entityTypes': string[]; constructor(); }
  export class EntityFireImmuneComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityFloatsInLiquidComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityFlyingSpeedComponent extends IEntityComponent { readonly 'id': string; 'value': number; protected constructor(); }
  export class EntityFrictionModifierComponent extends IEntityComponent { readonly 'id': string; 'value': number; protected constructor(); }
  export class EntityGroundOffsetComponent extends IEntityComponent { readonly 'id': string; 'value': number; protected constructor(); }
  export class EntityHealableComponent extends IEntityComponent { readonly 'filters': FilterGroup; readonly 'forceUse': boolean; readonly 'id': string; readonly 'items': FeedItem[]; protected constructor(); }
  export class EntityHealthComponent extends IEntityComponent { readonly 'current': number; readonly 'id': string; readonly 'value': number; resetToDefaultValue(): void; resetToMaxValue(): void; resetToMinValue(): void; setCurrent(value: number): void; protected constructor(); }
  export class EntityHitEvent { readonly 'entity': Entity; readonly 'hitBlock': Block; readonly 'hitEntity': Entity; protected constructor(); }
  export class EntityHitEventSignal { subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void; unsubscribe(callback: (arg: EntityHitEvent) => void): void; protected constructor(); }
  export class EntityHurtEvent { readonly 'cause': string; readonly 'damage': number; readonly 'damagingEntity': Entity; readonly 'hurtEntity': Entity; readonly 'projectile': Entity; protected constructor(); }
  export class EntityHurtEventSignal { subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void; unsubscribe(callback: (arg: EntityHurtEvent) => void): void; protected constructor(); }
  export class EntityInventoryComponent extends IEntityComponent { readonly 'additionalSlotsPerStrength': number; readonly 'canBeSiphonedFrom': boolean; readonly 'container': InventoryComponentContainer; readonly 'containerType': string; readonly 'id': string; readonly 'inventorySize': number; readonly 'private': boolean; readonly 'restrictToOwner': boolean; protected constructor(); }
  export class EntityIsBabyComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsChargedComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsChestedComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsDyableComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsIgnitedComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsIllagerCaptainComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsSaddledComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsShakingComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsShearedComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsStackableComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsStunnedComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityIsTamedComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class EntityItemComponent { readonly 'itemStack': ItemStack; protected constructor(); }
  export class EntityIterator implements Iterable<Entity> { [Symbol.iterator](): Iterator<Entity>; next(): IteratorResult<Entity>; protected constructor(); }
  export class EntityLavaMovementComponent extends IEntityComponent { readonly 'current': number; readonly 'id': string; readonly 'value': number; resetToDefaultValue(): void; resetToMaxValue(): void; resetToMinValue(): void; setCurrent(value: number): void; protected constructor(); }
  export class EntityLeashableComponent extends IEntityComponent { readonly 'id': string; readonly 'softDistance': number; leash(leashHolder: Entity): void; unleash(): void; protected constructor(); }
  export class EntityMarkVariantComponent extends IEntityComponent { readonly 'id': string; 'value': number; protected constructor(); }
  export class EntityMountTamingComponent extends IEntityComponent { readonly 'id': string; setTamed(showParticles: boolean): void; protected constructor(); }
  export class EntityMovementAmphibiousComponent extends IEntityComponent { readonly 'id': string; readonly 'maxTurn': number; protected constructor(); }
  export class EntityMovementBasicComponent extends IEntityComponent { readonly 'id': string; readonly 'maxTurn': number; protected constructor(); }
  export class EntityMovementComponent extends IEntityComponent { readonly 'current': number; readonly 'id': string; readonly 'value': number; resetToDefaultValue(): void; resetToMaxValue(): void; resetToMinValue(): void; setCurrent(value: number): void; protected constructor(); }
  export class EntityMovementFlyComponent extends IEntityComponent { readonly 'id': string; readonly 'maxTurn': number; protected constructor(); }
  export class EntityMovementGenericComponent extends IEntityComponent { readonly 'id': string; readonly 'maxTurn': number; protected constructor(); }
  export class EntityMovementGlideComponent extends IEntityComponent { readonly 'id': string; readonly 'maxTurn': number; readonly 'speedWhenTurning': number; readonly 'startSpeed': number; protected constructor(); }
  export class EntityMovementHoverComponent extends IEntityComponent { readonly 'id': string; readonly 'maxTurn': number; protected constructor(); }
  export class EntityMovementJumpComponent extends IEntityComponent { readonly 'id': string; readonly 'maxTurn': number; protected constructor(); }
  export class EntityMovementSkipComponent extends IEntityComponent { readonly 'id': string; readonly 'maxTurn': number; protected constructor(); }
  export class EntityMovementSwayComponent extends IEntityComponent { readonly 'id': string; readonly 'maxTurn': number; readonly 'swayAmplitude': number; readonly 'swayFrequency': number; protected constructor(); }
  export class EntityNavigationClimbComponent extends IEntityComponent { readonly 'avoidDamageBlocks': boolean; readonly 'avoidPortals': boolean; readonly 'avoidSun': boolean; readonly 'avoidWater': boolean; readonly 'canBreach': boolean; readonly 'canBreakDoors': boolean; readonly 'canFloat': boolean; readonly 'canJump': boolean; readonly 'canOpenDoors': boolean; readonly 'canOpenIronDoors': boolean; readonly 'canPassDoors': boolean; readonly 'canPathFromAir': boolean; readonly 'canPathOverLava': boolean; readonly 'canPathOverWater': boolean; readonly 'canSink': boolean; readonly 'canSwim': boolean; readonly 'canWalk': boolean; readonly 'canWalkInLava': boolean; readonly 'id': string; readonly 'isAmphibious': boolean; protected constructor(); }
  export class EntityNavigationFloatComponent extends IEntityComponent { readonly 'avoidDamageBlocks': boolean; readonly 'avoidPortals': boolean; readonly 'avoidSun': boolean; readonly 'avoidWater': boolean; readonly 'canBreach': boolean; readonly 'canBreakDoors': boolean; readonly 'canFloat': boolean; readonly 'canJump': boolean; readonly 'canOpenDoors': boolean; readonly 'canOpenIronDoors': boolean; readonly 'canPassDoors': boolean; readonly 'canPathFromAir': boolean; readonly 'canPathOverLava': boolean; readonly 'canPathOverWater': boolean; readonly 'canSink': boolean; readonly 'canSwim': boolean; readonly 'canWalk': boolean; readonly 'canWalkInLava': boolean; readonly 'id': string; readonly 'isAmphibious': boolean; protected constructor(); }
  export class EntityNavigationFlyComponent extends IEntityComponent { readonly 'avoidDamageBlocks': boolean; readonly 'avoidPortals': boolean; readonly 'avoidSun': boolean; readonly 'avoidWater': boolean; readonly 'canBreach': boolean; readonly 'canBreakDoors': boolean; readonly 'canFloat': boolean; readonly 'canJump': boolean; readonly 'canOpenDoors': boolean; readonly 'canOpenIronDoors': boolean; readonly 'canPassDoors': boolean; readonly 'canPathFromAir': boolean; readonly 'canPathOverLava': boolean; readonly 'canPathOverWater': boolean; readonly 'canSink': boolean; readonly 'canSwim': boolean; readonly 'canWalk': boolean; readonly 'canWalkInLava': boolean; readonly 'id': string; readonly 'isAmphibious': boolean; protected constructor(); }
  export class EntityNavigationGenericComponent extends IEntityComponent { readonly 'avoidDamageBlocks': boolean; readonly 'avoidPortals': boolean; readonly 'avoidSun': boolean; readonly 'avoidWater': boolean; readonly 'canBreach': boolean; readonly 'canBreakDoors': boolean; readonly 'canFloat': boolean; readonly 'canJump': boolean; readonly 'canOpenDoors': boolean; readonly 'canOpenIronDoors': boolean; readonly 'canPassDoors': boolean; readonly 'canPathFromAir': boolean; readonly 'canPathOverLava': boolean; readonly 'canPathOverWater': boolean; readonly 'canSink': boolean; readonly 'canSwim': boolean; readonly 'canWalk': boolean; readonly 'canWalkInLava': boolean; readonly 'id': string; readonly 'isAmphibious': boolean; protected constructor(); }
  export class EntityNavigationHoverComponent extends IEntityComponent { readonly 'avoidDamageBlocks': boolean; readonly 'avoidPortals': boolean; readonly 'avoidSun': boolean; readonly 'avoidWater': boolean; readonly 'canBreach': boolean; readonly 'canBreakDoors': boolean; readonly 'canFloat': boolean; readonly 'canJump': boolean; readonly 'canOpenDoors': boolean; readonly 'canOpenIronDoors': boolean; readonly 'canPassDoors': boolean; readonly 'canPathFromAir': boolean; readonly 'canPathOverLava': boolean; readonly 'canPathOverWater': boolean; readonly 'canSink': boolean; readonly 'canSwim': boolean; readonly 'canWalk': boolean; readonly 'canWalkInLava': boolean; readonly 'id': string; readonly 'isAmphibious': boolean; protected constructor(); }
  export class EntityNavigationWalkComponent extends IEntityComponent { readonly 'avoidDamageBlocks': boolean; readonly 'avoidPortals': boolean; readonly 'avoidSun': boolean; readonly 'avoidWater': boolean; readonly 'canBreach': boolean; readonly 'canBreakDoors': boolean; readonly 'canFloat': boolean; readonly 'canJump': boolean; readonly 'canOpenDoors': boolean; readonly 'canOpenIronDoors': boolean; readonly 'canPassDoors': boolean; readonly 'canPathFromAir': boolean; readonly 'canPathOverLava': boolean; readonly 'canPathOverWater': boolean; readonly 'canSink': boolean; readonly 'canSwim': boolean; readonly 'canWalk': boolean; readonly 'canWalkInLava': boolean; readonly 'id': string; readonly 'isAmphibious': boolean; protected constructor(); }
  export class EntityPushThroughComponent extends IEntityComponent { readonly 'id': string; 'value': number; protected constructor(); }
  export class EntityQueryOptions { 'closest': number; 'excludeFamilies': string[]; 'excludeGameModes': GameMode[]; 'excludeNames': string[]; 'excludeTags': string[]; 'excludeTypes': string[]; 'families': string[]; 'farthest': number; 'gameMode': GameMode; 'location': Location; 'maxDistance': number; 'maxHorizontalRotation': number; 'maxLevel': number; 'maxVerticalRotation': number; 'minDistance': number; 'minHorizontalRotation': number; 'minLevel': number; 'minVerticalRotation': number; 'name': string; 'scoreOptions': EntityQueryScoreOptions[]; 'tags': string[]; 'type': string; 'volume': BlockAreaSize; constructor(); }
  export class EntityQueryScoreOptions { 'exclude': boolean; 'maxScore': number; 'minScore': number; 'objective': string; constructor(); }
  export class EntityRaycastOptions { 'maxDistance': number; constructor(); }
  export class EntityRideableComponent extends IEntityComponent { readonly 'controllingSeat': number; readonly 'crouchingSkipInteract': boolean; readonly 'familyTypes': string[]; readonly 'id': string; readonly 'interactText': string; readonly 'pullInEntities': boolean; readonly 'riderCanInteract': boolean; readonly 'seatCount': number; readonly 'seats': Seat[]; addRider(rider: Entity): boolean; ejectRider(rider: Entity): void; ejectRiders(): void; protected constructor(); }
  export class EntityScaleComponent extends IEntityComponent { readonly 'id': string; 'value': number; protected constructor(); }
  export class EntitySkinIdComponent extends IEntityComponent { readonly 'id': string; 'value': number; protected constructor(); }
  export class EntityStrengthComponent extends IEntityComponent { readonly 'id': string; readonly 'max': number; readonly 'value': number; protected constructor(); }
  export class EntityTameableComponent extends IEntityComponent { readonly 'id': string; readonly 'probability': number; readonly 'tameEvent': Trigger; readonly 'tameItems': string[]; tame(): boolean; protected constructor(); }
  export class EntityType { readonly 'id': string; protected constructor(); }
  export class EntityTypeIterator implements Iterable<EntityType> { [Symbol.iterator](): Iterator<EntityType>; next(): IteratorResult<EntityType>; protected constructor(); }
  export class EntityTypes { static get(identifier: string): EntityType; static getAll(): EntityTypeIterator; protected constructor(); }
  export class EntityUnderwaterMovementComponent extends IEntityComponent { readonly 'current': number; readonly 'id': string; readonly 'value': number; resetToDefaultValue(): void; resetToMaxValue(): void; resetToMinValue(): void; setCurrent(value: number): void; protected constructor(); }
  export class EntityVariantComponent extends IEntityComponent { readonly 'id': string; readonly 'value': number; protected constructor(); }
  export class EntityWantsJockeyComponent extends IEntityComponent { readonly 'id': string; protected constructor(); }
  export class Events { readonly 'beforeChat': BeforeChatEventSignal; readonly 'beforeDataDrivenEntityTriggerEvent': BeforeDataDrivenEntityTriggerEventSignal; readonly 'beforeExplosion': BeforeExplosionEventSignal; readonly 'beforeItemDefinitionEvent': BeforeItemDefinitionEventSignal; readonly 'beforeItemUse': BeforeItemUseEventSignal; readonly 'beforeItemUseOn': BeforeItemUseOnEventSignal; readonly 'beforePistonActivate': BeforePistonActivateEventSignal; readonly 'blockBreak': BlockBreakEventSignal; readonly 'blockExplode': BlockExplodeEventSignal; readonly 'blockPlace': BlockPlaceEventSignal; readonly 'chat': ChatEventSignal; readonly 'dataDrivenEntityTriggerEvent': DataDrivenEntityTriggerEventSignal; readonly 'effectAdd': EffectAddEventSignal; readonly 'entityCreate': EntityCreateEventSignal; readonly 'entityHit': EntityHitEventSignal; readonly 'entityHurt': EntityHurtEventSignal; readonly 'explosion': ExplosionEventSignal; readonly 'itemDefinitionEvent': ItemDefinitionEventSignal; readonly 'itemUse': ItemUseEventSignal; readonly 'itemUseOn': ItemUseOnEventSignal; readonly 'leverActivate': LeverActivateEventSignal; readonly 'messageReceive': ServerMessageSignal; readonly 'pistonActivate': PistonActivateEventSignal; readonly 'playerJoin': PlayerJoinEventSignal; readonly 'playerLeave': PlayerLeaveEventSignal; readonly 'tick': TickEventSignal; readonly 'weatherChange': WeatherChangeEventSignal; protected constructor(); }
  export class ExplosionEvent { readonly 'dimension': Dimension; readonly 'impactedBlocks': BlockLocation[]; readonly 'source': Entity; protected constructor(); }
  export class ExplosionEventSignal { subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void; unsubscribe(callback: (arg: ExplosionEvent) => void): void; protected constructor(); }
  export class ExplosionOptions { 'allowUnderwater': boolean; 'breaksBlocks': boolean; 'causesFire': boolean; 'source': Entity; constructor(); }
  export class FeedItem { readonly 'effects': FeedItemEffect[]; readonly 'healAmount': number; readonly 'item': string; protected constructor(); }
  export class FeedItemEffect { readonly 'amplifier': number; readonly 'chance': number; readonly 'duration': number; readonly 'name': string; protected constructor(); }
  export class FilterGroup { protected constructor(); }
  export class FluidContainer { static readonly 'maxFillLevel' = 6; static readonly 'minFillLevel' = 0; protected constructor(); }
  export class IBlockProperty { readonly 'name': string; protected constructor(); }
  export class IEntityComponent { readonly 'id': string; protected constructor(); }
  export class IntBlockProperty extends IBlockProperty { readonly 'name': string; readonly 'validValues': number[]; 'value': number; protected constructor(); }
  export class InventoryComponentContainer extends Container { readonly 'emptySlotsCount': number; readonly 'size': number; addItem(itemStack: ItemStack): void; getItem(slot: number): ItemStack; setItem(slot: number, itemStack: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean; protected constructor(); }
  export class ItemCooldownComponent { readonly 'cooldownCategory': string; readonly 'cooldownTicks': number; readonly 'id': string; startCooldown(player: Player): void; protected constructor(); }
  export class ItemDefinitionEventSignal { subscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): (arg: ItemDefinitionTriggeredEvent) => void; unsubscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): void; protected constructor(); }
  export class ItemDefinitionTriggeredEvent { readonly 'eventName': string; 'item': ItemStack; readonly 'source': Entity; protected constructor(); }
  export class ItemDurabilityComponent { 'damage': number; readonly 'damageRange': NumberRange; readonly 'id': string; readonly 'maxDurability': number; getDamageChance(unbreaking?: number): number; protected constructor(); }
  export class ItemEnchantsComponent { 'enchantments': EnchantmentList; readonly 'id': string; removeAllEnchantments(): void; protected constructor(); }
  export class ItemFoodComponent { readonly 'canAlwaysEat': boolean; readonly 'id': string; readonly 'nutrition': number; readonly 'saturationModifier': number; readonly 'usingConvertsTo': string; protected constructor(); }
  export class Items { static get(itemId: string): ItemType; protected constructor(); }
  export class ItemStack { 'amount': number; 'data': number; readonly 'id': string; 'nameTag': string; constructor(itemType: ItemType, amount?: number, data?: number); getComponent(componentId: string): any; getComponents(): any[]; getLore(): string[]; hasComponent(componentId: string): boolean; setLore(loreList: string[]): void; triggerEvent(eventName: string): void; }
  export class ItemType { readonly 'id': string; protected constructor(); }
  export class ItemUseEvent { 'item': ItemStack; readonly 'source': Entity; protected constructor(); }
  export class ItemUseEventSignal { subscribe(callback: (arg: ItemUseEvent) => void): (arg: ItemUseEvent) => void; unsubscribe(callback: (arg: ItemUseEvent) => void): void; protected constructor(); }
  export class ItemUseOnEvent { readonly 'blockFace': Direction; readonly 'blockLocation': BlockLocation; readonly 'faceLocationX': number; readonly 'faceLocationY': number; 'item': ItemStack; readonly 'source': Entity; protected constructor(); }
  export class ItemUseOnEventSignal { subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void; unsubscribe(callback: (arg: ItemUseOnEvent) => void): void; protected constructor(); }
  export class LeverActionEvent extends BlockEvent { readonly 'block': Block; readonly 'dimension': Dimension; readonly 'isPowered': boolean; protected constructor(); }
  export class LeverActivateEventSignal { subscribe(callback: (arg: LeverActionEvent) => void): (arg: LeverActionEvent) => void; unsubscribe(callback: (arg: LeverActionEvent) => void): void; protected constructor(); }
  export class Location { 'x': number; 'y': number; 'z': number; constructor(x: number, y: number, z: number); equals(other: Location): boolean; isNear(other: Location, epsilon: number): boolean; }
  export class MessageReceiveEvent { readonly 'id': string; readonly 'message': string; readonly 'sourceType': MessageSourceType; protected constructor(); }
  export class MinecraftBlockTypes { static readonly 'acaciaButton': BlockType; static readonly 'acaciaDoor': BlockType; static readonly 'acaciaFenceGate': BlockType; static readonly 'acaciaPressurePlate': BlockType; static readonly 'acaciaStairs': BlockType; static readonly 'acaciaStandingSign': BlockType; static readonly 'acaciaTrapdoor': BlockType; static readonly 'acaciaWallSign': BlockType; static readonly 'activatorRail': BlockType; static readonly 'air': BlockType; static readonly 'allow': BlockType; static readonly 'amethystBlock': BlockType; static readonly 'amethystCluster': BlockType; static readonly 'ancientDebris': BlockType; static readonly 'andesiteStairs': BlockType; static readonly 'anvil': BlockType; static readonly 'azalea': BlockType; static readonly 'azaleaLeaves': BlockType; static readonly 'azaleaLeavesFlowered': BlockType; static readonly 'bamboo': BlockType; static readonly 'bambooSapling': BlockType; static readonly 'barrel': BlockType; static readonly 'barrier': BlockType; static readonly 'basalt': BlockType; static readonly 'beacon': BlockType; static readonly 'bed': BlockType; static readonly 'bedrock': BlockType; static readonly 'beehive': BlockType; static readonly 'beeNest': BlockType; static readonly 'beetroot': BlockType; static readonly 'bell': BlockType; static readonly 'bigDripleaf': BlockType; static readonly 'birchButton': BlockType; static readonly 'birchDoor': BlockType; static readonly 'birchFenceGate': BlockType; static readonly 'birchPressurePlate': BlockType; static readonly 'birchStairs': BlockType; static readonly 'birchStandingSign': BlockType; static readonly 'birchTrapdoor': BlockType; static readonly 'birchWallSign': BlockType; static readonly 'blackCandle': BlockType; static readonly 'blackCandleCake': BlockType; static readonly 'blackGlazedTerracotta': BlockType; static readonly 'blackstone': BlockType; static readonly 'blackstoneDoubleSlab': BlockType; static readonly 'blackstoneSlab': BlockType; static readonly 'blackstoneStairs': BlockType; static readonly 'blackstoneWall': BlockType; static readonly 'blastFurnace': BlockType; static readonly 'blueCandle': BlockType; static readonly 'blueCandleCake': BlockType; static readonly 'blueGlazedTerracotta': BlockType; static readonly 'blueIce': BlockType; static readonly 'boneBlock': BlockType; static readonly 'bookshelf': BlockType; static readonly 'borderBlock': BlockType; static readonly 'brewingStand': BlockType; static readonly 'brickBlock': BlockType; static readonly 'brickStairs': BlockType; static readonly 'brownCandle': BlockType; static readonly 'brownCandleCake': BlockType; static readonly 'brownGlazedTerracotta': BlockType; static readonly 'brownMushroom': BlockType; static readonly 'brownMushroomBlock': BlockType; static readonly 'bubbleColumn': BlockType; static readonly 'buddingAmethyst': BlockType; static readonly 'cactus': BlockType; static readonly 'cake': BlockType; static readonly 'calcite': BlockType; static readonly 'camera': BlockType; static readonly 'campfire': BlockType; static readonly 'candle': BlockType; static readonly 'candleCake': BlockType; static readonly 'carpet': BlockType; static readonly 'carrots': BlockType; static readonly 'cartographyTable': BlockType; static readonly 'carvedPumpkin': BlockType; static readonly 'cauldron': BlockType; static readonly 'caveVines': BlockType; static readonly 'caveVinesBodyWithBerries': BlockType; static readonly 'caveVinesHeadWithBerries': BlockType; static readonly 'chain': BlockType; static readonly 'chainCommandBlock': BlockType; static readonly 'chemicalHeat': BlockType; static readonly 'chemistryTable': BlockType; static readonly 'chest': BlockType; static readonly 'chiseledDeepslate': BlockType; static readonly 'chiseledNetherBricks': BlockType; static readonly 'chiseledPolishedBlackstone': BlockType; static readonly 'chorusFlower': BlockType; static readonly 'chorusPlant': BlockType; static readonly 'clay': BlockType; static readonly 'clientRequestPlaceholderBlock': BlockType; static readonly 'coalBlock': BlockType; static readonly 'coalOre': BlockType; static readonly 'cobbledDeepslate': BlockType; static readonly 'cobbledDeepslateDoubleSlab': BlockType; static readonly 'cobbledDeepslateSlab': BlockType; static readonly 'cobbledDeepslateStairs': BlockType; static readonly 'cobbledDeepslateWall': BlockType; static readonly 'cobblestone': BlockType; static readonly 'cobblestoneWall': BlockType; static readonly 'cocoa': BlockType; static readonly 'coloredTorchBp': BlockType; static readonly 'coloredTorchRg': BlockType; static readonly 'commandBlock': BlockType; static readonly 'composter': BlockType; static readonly 'concrete': BlockType; static readonly 'concretePowder': BlockType; static readonly 'conduit': BlockType; static readonly 'copperBlock': BlockType; static readonly 'copperOre': BlockType; static readonly 'coral': BlockType; static readonly 'coralBlock': BlockType; static readonly 'coralFan': BlockType; static readonly 'coralFanDead': BlockType; static readonly 'coralFanHang': BlockType; static readonly 'coralFanHang2': BlockType; static readonly 'coralFanHang3': BlockType; static readonly 'crackedDeepslateBricks': BlockType; static readonly 'crackedDeepslateTiles': BlockType; static readonly 'crackedNetherBricks': BlockType; static readonly 'crackedPolishedBlackstoneBricks': BlockType; static readonly 'craftingTable': BlockType; static readonly 'crimsonButton': BlockType; static readonly 'crimsonDoor': BlockType; static readonly 'crimsonDoubleSlab': BlockType; static readonly 'crimsonFence': BlockType; static readonly 'crimsonFenceGate': BlockType; static readonly 'crimsonFungus': BlockType; static readonly 'crimsonHyphae': BlockType; static readonly 'crimsonNylium': BlockType; static readonly 'crimsonPlanks': BlockType; static readonly 'crimsonPressurePlate': BlockType; static readonly 'crimsonRoots': BlockType; static readonly 'crimsonSlab': BlockType; static readonly 'crimsonStairs': BlockType; static readonly 'crimsonStandingSign': BlockType; static readonly 'crimsonStem': BlockType; static readonly 'crimsonTrapdoor': BlockType; static readonly 'crimsonWallSign': BlockType; static readonly 'cryingObsidian': BlockType; static readonly 'cutCopper': BlockType; static readonly 'cutCopperSlab': BlockType; static readonly 'cutCopperStairs': BlockType; static readonly 'cyanCandle': BlockType; static readonly 'cyanCandleCake': BlockType; static readonly 'cyanGlazedTerracotta': BlockType; static readonly 'darkOakButton': BlockType; static readonly 'darkOakDoor': BlockType; static readonly 'darkOakFenceGate': BlockType; static readonly 'darkOakPressurePlate': BlockType; static readonly 'darkOakStairs': BlockType; static readonly 'darkoakStandingSign': BlockType; static readonly 'darkOakTrapdoor': BlockType; static readonly 'darkoakWallSign': BlockType; static readonly 'darkPrismarineStairs': BlockType; static readonly 'daylightDetector': BlockType; static readonly 'daylightDetectorInverted': BlockType; static readonly 'deadbush': BlockType; static readonly 'deepslate': BlockType; static readonly 'deepslateBrickDoubleSlab': BlockType; static readonly 'deepslateBricks': BlockType; static readonly 'deepslateBrickSlab': BlockType; static readonly 'deepslateBrickStairs': BlockType; static readonly 'deepslateBrickWall': BlockType; static readonly 'deepslateCoalOre': BlockType; static readonly 'deepslateCopperOre': BlockType; static readonly 'deepslateDiamondOre': BlockType; static readonly 'deepslateEmeraldOre': BlockType; static readonly 'deepslateGoldOre': BlockType; static readonly 'deepslateIronOre': BlockType; static readonly 'deepslateLapisOre': BlockType; static readonly 'deepslateRedstoneOre': BlockType; static readonly 'deepslateTileDoubleSlab': BlockType; static readonly 'deepslateTiles': BlockType; static readonly 'deepslateTileSlab': BlockType; static readonly 'deepslateTileStairs': BlockType; static readonly 'deepslateTileWall': BlockType; static readonly 'deny': BlockType; static readonly 'detectorRail': BlockType; static readonly 'diamondBlock': BlockType; static readonly 'diamondOre': BlockType; static readonly 'dioriteStairs': BlockType; static readonly 'dirt': BlockType; static readonly 'dirtWithRoots': BlockType; static readonly 'dispenser': BlockType; static readonly 'doubleCutCopperSlab': BlockType; static readonly 'doublePlant': BlockType; static readonly 'doubleStoneSlab': BlockType; static readonly 'doubleStoneSlab2': BlockType; static readonly 'doubleStoneSlab3': BlockType; static readonly 'doubleStoneSlab4': BlockType; static readonly 'doubleWoodenSlab': BlockType; static readonly 'dragonEgg': BlockType; static readonly 'driedKelpBlock': BlockType; static readonly 'dripstoneBlock': BlockType; static readonly 'dropper': BlockType; static readonly 'element0': BlockType; static readonly 'element1': BlockType; static readonly 'element10': BlockType; static readonly 'element100': BlockType; static readonly 'element101': BlockType; static readonly 'element102': BlockType; static readonly 'element103': BlockType; static readonly 'element104': BlockType; static readonly 'element105': BlockType; static readonly 'element106': BlockType; static readonly 'element107': BlockType; static readonly 'element108': BlockType; static readonly 'element109': BlockType; static readonly 'element11': BlockType; static readonly 'element110': BlockType; static readonly 'element111': BlockType; static readonly 'element112': BlockType; static readonly 'element113': BlockType; static readonly 'element114': BlockType; static readonly 'element115': BlockType; static readonly 'element116': BlockType; static readonly 'element117': BlockType; static readonly 'element118': BlockType; static readonly 'element12': BlockType; static readonly 'element13': BlockType; static readonly 'element14': BlockType; static readonly 'element15': BlockType; static readonly 'element16': BlockType; static readonly 'element17': BlockType; static readonly 'element18': BlockType; static readonly 'element19': BlockType; static readonly 'element2': BlockType; static readonly 'element20': BlockType; static readonly 'element21': BlockType; static readonly 'element22': BlockType; static readonly 'element23': BlockType; static readonly 'element24': BlockType; static readonly 'element25': BlockType; static readonly 'element26': BlockType; static readonly 'element27': BlockType; static readonly 'element28': BlockType; static readonly 'element29': BlockType; static readonly 'element3': BlockType; static readonly 'element30': BlockType; static readonly 'element31': BlockType; static readonly 'element32': BlockType; static readonly 'element33': BlockType; static readonly 'element34': BlockType; static readonly 'element35': BlockType; static readonly 'element36': BlockType; static readonly 'element37': BlockType; static readonly 'element38': BlockType; static readonly 'element39': BlockType; static readonly 'element4': BlockType; static readonly 'element40': BlockType; static readonly 'element41': BlockType; static readonly 'element42': BlockType; static readonly 'element43': BlockType; static readonly 'element44': BlockType; static readonly 'element45': BlockType; static readonly 'element46': BlockType; static readonly 'element47': BlockType; static readonly 'element48': BlockType; static readonly 'element49': BlockType; static readonly 'element5': BlockType; static readonly 'element50': BlockType; static readonly 'element51': BlockType; static readonly 'element52': BlockType; static readonly 'element53': BlockType; static readonly 'element54': BlockType; static readonly 'element55': BlockType; static readonly 'element56': BlockType; static readonly 'element57': BlockType; static readonly 'element58': BlockType; static readonly 'element59': BlockType; static readonly 'element6': BlockType; static readonly 'element60': BlockType; static readonly 'element61': BlockType; static readonly 'element62': BlockType; static readonly 'element63': BlockType; static readonly 'element64': BlockType; static readonly 'element65': BlockType; static readonly 'element66': BlockType; static readonly 'element67': BlockType; static readonly 'element68': BlockType; static readonly 'element69': BlockType; static readonly 'element7': BlockType; static readonly 'element70': BlockType; static readonly 'element71': BlockType; static readonly 'element72': BlockType; static readonly 'element73': BlockType; static readonly 'element74': BlockType; static readonly 'element75': BlockType; static readonly 'element76': BlockType; static readonly 'element77': BlockType; static readonly 'element78': BlockType; static readonly 'element79': BlockType; static readonly 'element8': BlockType; static readonly 'element80': BlockType; static readonly 'element81': BlockType; static readonly 'element82': BlockType; static readonly 'element83': BlockType; static readonly 'element84': BlockType; static readonly 'element85': BlockType; static readonly 'element86': BlockType; static readonly 'element87': BlockType; static readonly 'element88': BlockType; static readonly 'element89': BlockType; static readonly 'element9': BlockType; static readonly 'element90': BlockType; static readonly 'element91': BlockType; static readonly 'element92': BlockType; static readonly 'element93': BlockType; static readonly 'element94': BlockType; static readonly 'element95': BlockType; static readonly 'element96': BlockType; static readonly 'element97': BlockType; static readonly 'element98': BlockType; static readonly 'element99': BlockType; static readonly 'emeraldBlock': BlockType; static readonly 'emeraldOre': BlockType; static readonly 'enchantingTable': BlockType; static readonly 'endBricks': BlockType; static readonly 'endBrickStairs': BlockType; static readonly 'enderChest': BlockType; static readonly 'endGateway': BlockType; static readonly 'endPortal': BlockType; static readonly 'endPortalFrame': BlockType; static readonly 'endRod': BlockType; static readonly 'endStone': BlockType; static readonly 'exposedCopper': BlockType; static readonly 'exposedCutCopper': BlockType; static readonly 'exposedCutCopperSlab': BlockType; static readonly 'exposedCutCopperStairs': BlockType; static readonly 'exposedDoubleCutCopperSlab': BlockType; static readonly 'farmland': BlockType; static readonly 'fence': BlockType; static readonly 'fenceGate': BlockType; static readonly 'fire': BlockType; static readonly 'fletchingTable': BlockType; static readonly 'floweringAzalea': BlockType; static readonly 'flowerPot': BlockType; static readonly 'flowingLava': BlockType; static readonly 'flowingWater': BlockType; static readonly 'frame': BlockType; static readonly 'frogSpawn': BlockType; static readonly 'frostedIce': BlockType; static readonly 'furnace': BlockType; static readonly 'gildedBlackstone': BlockType; static readonly 'glass': BlockType; static readonly 'glassPane': BlockType; static readonly 'glowFrame': BlockType; static readonly 'glowingobsidian': BlockType; static readonly 'glowLichen': BlockType; static readonly 'glowstone': BlockType; static readonly 'goldBlock': BlockType; static readonly 'goldenRail': BlockType; static readonly 'goldOre': BlockType; static readonly 'graniteStairs': BlockType; static readonly 'grass': BlockType; static readonly 'grassPath': BlockType; static readonly 'gravel': BlockType; static readonly 'grayCandle': BlockType; static readonly 'grayCandleCake': BlockType; static readonly 'grayGlazedTerracotta': BlockType; static readonly 'greenCandle': BlockType; static readonly 'greenCandleCake': BlockType; static readonly 'greenGlazedTerracotta': BlockType; static readonly 'grindstone': BlockType; static readonly 'hangingRoots': BlockType; static readonly 'hardenedClay': BlockType; static readonly 'hardGlass': BlockType; static readonly 'hardGlassPane': BlockType; static readonly 'hardStainedGlass': BlockType; static readonly 'hardStainedGlassPane': BlockType; static readonly 'hayBlock': BlockType; static readonly 'heavyWeightedPressurePlate': BlockType; static readonly 'honeyBlock': BlockType; static readonly 'honeycombBlock': BlockType; static readonly 'hopper': BlockType; static readonly 'ice': BlockType; static readonly 'infestedDeepslate': BlockType; static readonly 'infoUpdate': BlockType; static readonly 'infoUpdate2': BlockType; static readonly 'invisibleBedrock': BlockType; static readonly 'ironBars': BlockType; static readonly 'ironBlock': BlockType; static readonly 'ironDoor': BlockType; static readonly 'ironOre': BlockType; static readonly 'ironTrapdoor': BlockType; static readonly 'jigsaw': BlockType; static readonly 'jukebox': BlockType; static readonly 'jungleButton': BlockType; static readonly 'jungleDoor': BlockType; static readonly 'jungleFenceGate': BlockType; static readonly 'junglePressurePlate': BlockType; static readonly 'jungleStairs': BlockType; static readonly 'jungleStandingSign': BlockType; static readonly 'jungleTrapdoor': BlockType; static readonly 'jungleWallSign': BlockType; static readonly 'kelp': BlockType; static readonly 'ladder': BlockType; static readonly 'lantern': BlockType; static readonly 'lapisBlock': BlockType; static readonly 'lapisOre': BlockType; static readonly 'largeAmethystBud': BlockType; static readonly 'lava': BlockType; static readonly 'lavaCauldron': BlockType; static readonly 'leaves': BlockType; static readonly 'leaves2': BlockType; static readonly 'lectern': BlockType; static readonly 'lever': BlockType; static readonly 'lightBlock': BlockType; static readonly 'lightBlueCandle': BlockType; static readonly 'lightBlueCandleCake': BlockType; static readonly 'lightBlueGlazedTerracotta': BlockType; static readonly 'lightGrayCandle': BlockType; static readonly 'lightGrayCandleCake': BlockType; static readonly 'lightningRod': BlockType; static readonly 'lightWeightedPressurePlate': BlockType; static readonly 'limeCandle': BlockType; static readonly 'limeCandleCake': BlockType; static readonly 'limeGlazedTerracotta': BlockType; static readonly 'litBlastFurnace': BlockType; static readonly 'litDeepslateRedstoneOre': BlockType; static readonly 'litFurnace': BlockType; static readonly 'litPumpkin': BlockType; static readonly 'litRedstoneLamp': BlockType; static readonly 'litRedstoneOre': BlockType; static readonly 'litSmoker': BlockType; static readonly 'lodestone': BlockType; static readonly 'log': BlockType; static readonly 'log2': BlockType; static readonly 'loom': BlockType; static readonly 'magentaCandle': BlockType; static readonly 'magentaCandleCake': BlockType; static readonly 'magentaGlazedTerracotta': BlockType; static readonly 'magma': BlockType; static readonly 'mangroveLeaves': BlockType; static readonly 'mangrovePropagule': BlockType; static readonly 'mangrovePropaguleHanging': BlockType; static readonly 'mediumAmethystBud': BlockType; static readonly 'melonBlock': BlockType; static readonly 'melonStem': BlockType; static readonly 'mobSpawner': BlockType; static readonly 'monsterEgg': BlockType; static readonly 'mossBlock': BlockType; static readonly 'mossCarpet': BlockType; static readonly 'mossyCobblestone': BlockType; static readonly 'mossyCobblestoneStairs': BlockType; static readonly 'mossyStoneBrickStairs': BlockType; static readonly 'movingBlock': BlockType; static readonly 'mud': BlockType; static readonly 'mudBrickDoubleSlab': BlockType; static readonly 'mudBricks': BlockType; static readonly 'mudBrickSlab': BlockType; static readonly 'mudBrickStairs': BlockType; static readonly 'mudBrickWall': BlockType; static readonly 'mycelium': BlockType; static readonly 'netherBrick': BlockType; static readonly 'netherBrickFence': BlockType; static readonly 'netherBrickStairs': BlockType; static readonly 'netherGoldOre': BlockType; static readonly 'netheriteBlock': BlockType; static readonly 'netherrack': BlockType; static readonly 'netherreactor': BlockType; static readonly 'netherSprouts': BlockType; static readonly 'netherWart': BlockType; static readonly 'netherWartBlock': BlockType; static readonly 'normalStoneStairs': BlockType; static readonly 'noteblock': BlockType; static readonly 'oakStairs': BlockType; static readonly 'observer': BlockType; static readonly 'obsidian': BlockType; static readonly 'ochreFroglight': BlockType; static readonly 'orangeCandle': BlockType; static readonly 'orangeCandleCake': BlockType; static readonly 'orangeGlazedTerracotta': BlockType; static readonly 'oxidizedCopper': BlockType; static readonly 'oxidizedCutCopper': BlockType; static readonly 'oxidizedCutCopperSlab': BlockType; static readonly 'oxidizedCutCopperStairs': BlockType; static readonly 'oxidizedDoubleCutCopperSlab': BlockType; static readonly 'packedIce': BlockType; static readonly 'packedMud': BlockType; static readonly 'pearlescentFroglight': BlockType; static readonly 'pinkCandle': BlockType; static readonly 'pinkCandleCake': BlockType; static readonly 'pinkGlazedTerracotta': BlockType; static readonly 'piston': BlockType; static readonly 'pistonArmCollision': BlockType; static readonly 'planks': BlockType; static readonly 'podzol': BlockType; static readonly 'pointedDripstone': BlockType; static readonly 'polishedAndesiteStairs': BlockType; static readonly 'polishedBasalt': BlockType; static readonly 'polishedBlackstone': BlockType; static readonly 'polishedBlackstoneBrickDoubleSlab': BlockType; static readonly 'polishedBlackstoneBricks': BlockType; static readonly 'polishedBlackstoneBrickSlab': BlockType; static readonly 'polishedBlackstoneBrickStairs': BlockType; static readonly 'polishedBlackstoneBrickWall': BlockType; static readonly 'polishedBlackstoneButton': BlockType; static readonly 'polishedBlackstoneDoubleSlab': BlockType; static readonly 'polishedBlackstonePressurePlate': BlockType; static readonly 'polishedBlackstoneSlab': BlockType; static readonly 'polishedBlackstoneStairs': BlockType; static readonly 'polishedBlackstoneWall': BlockType; static readonly 'polishedDeepslate': BlockType; static readonly 'polishedDeepslateDoubleSlab': BlockType; static readonly 'polishedDeepslateSlab': BlockType; static readonly 'polishedDeepslateStairs': BlockType; static readonly 'polishedDeepslateWall': BlockType; static readonly 'polishedDioriteStairs': BlockType; static readonly 'polishedGraniteStairs': BlockType; static readonly 'portal': BlockType; static readonly 'potatoes': BlockType; static readonly 'powderSnow': BlockType; static readonly 'poweredComparator': BlockType; static readonly 'poweredRepeater': BlockType; static readonly 'prismarine': BlockType; static readonly 'prismarineBricksStairs': BlockType; static readonly 'prismarineStairs': BlockType; static readonly 'pumpkin': BlockType; static readonly 'pumpkinStem': BlockType; static readonly 'purpleCandle': BlockType; static readonly 'purpleCandleCake': BlockType; static readonly 'purpleGlazedTerracotta': BlockType; static readonly 'purpurBlock': BlockType; static readonly 'purpurStairs': BlockType; static readonly 'quartzBlock': BlockType; static readonly 'quartzBricks': BlockType; static readonly 'quartzOre': BlockType; static readonly 'quartzStairs': BlockType; static readonly 'rail': BlockType; static readonly 'rawCopperBlock': BlockType; static readonly 'rawGoldBlock': BlockType; static readonly 'rawIronBlock': BlockType; static readonly 'redCandle': BlockType; static readonly 'redCandleCake': BlockType; static readonly 'redFlower': BlockType; static readonly 'redGlazedTerracotta': BlockType; static readonly 'redMushroom': BlockType; static readonly 'redMushroomBlock': BlockType; static readonly 'redNetherBrick': BlockType; static readonly 'redNetherBrickStairs': BlockType; static readonly 'redSandstone': BlockType; static readonly 'redSandstoneStairs': BlockType; static readonly 'redstoneBlock': BlockType; static readonly 'redstoneLamp': BlockType; static readonly 'redstoneOre': BlockType; static readonly 'redstoneTorch': BlockType; static readonly 'redstoneWire': BlockType; static readonly 'reeds': BlockType; static readonly 'reinforcedDeepslate': BlockType; static readonly 'repeatingCommandBlock': BlockType; static readonly 'reserved6': BlockType; static readonly 'respawnAnchor': BlockType; static readonly 'sand': BlockType; static readonly 'sandstone': BlockType; static readonly 'sandstoneStairs': BlockType; static readonly 'sapling': BlockType; static readonly 'scaffolding': BlockType; static readonly 'sculk': BlockType; static readonly 'sculkCatalyst': BlockType; static readonly 'sculkSensor': BlockType; static readonly 'sculkShrieker': BlockType; static readonly 'sculkVein': BlockType; static readonly 'seagrass': BlockType; static readonly 'seaLantern': BlockType; static readonly 'seaPickle': BlockType; static readonly 'shroomlight': BlockType; static readonly 'shulkerBox': BlockType; static readonly 'silverGlazedTerracotta': BlockType; static readonly 'skull': BlockType; static readonly 'slime': BlockType; static readonly 'smallAmethystBud': BlockType; static readonly 'smallDripleafBlock': BlockType; static readonly 'smithingTable': BlockType; static readonly 'smoker': BlockType; static readonly 'smoothBasalt': BlockType; static readonly 'smoothQuartzStairs': BlockType; static readonly 'smoothRedSandstoneStairs': BlockType; static readonly 'smoothSandstoneStairs': BlockType; static readonly 'smoothStone': BlockType; static readonly 'snow': BlockType; static readonly 'snowLayer': BlockType; static readonly 'soulCampfire': BlockType; static readonly 'soulFire': BlockType; static readonly 'soulLantern': BlockType; static readonly 'soulSand': BlockType; static readonly 'soulSoil': BlockType; static readonly 'soulTorch': BlockType; static readonly 'sponge': BlockType; static readonly 'sporeBlossom': BlockType; static readonly 'spruceButton': BlockType; static readonly 'spruceDoor': BlockType; static readonly 'spruceFenceGate': BlockType; static readonly 'sprucePressurePlate': BlockType; static readonly 'spruceStairs': BlockType; static readonly 'spruceStandingSign': BlockType; static readonly 'spruceTrapdoor': BlockType; static readonly 'spruceWallSign': BlockType; static readonly 'stainedGlass': BlockType; static readonly 'stainedGlassPane': BlockType; static readonly 'stainedHardenedClay': BlockType; static readonly 'standingBanner': BlockType; static readonly 'standingSign': BlockType; static readonly 'stickyPiston': BlockType; static readonly 'stickyPistonArmCollision': BlockType; static readonly 'stone': BlockType; static readonly 'stonebrick': BlockType; static readonly 'stoneBrickStairs': BlockType; static readonly 'stoneButton': BlockType; static readonly 'stonecutter': BlockType; static readonly 'stonecutterBlock': BlockType; static readonly 'stonePressurePlate': BlockType; static readonly 'stoneSlab': BlockType; static readonly 'stoneSlab2': BlockType; static readonly 'stoneSlab3': BlockType; static readonly 'stoneSlab4': BlockType; static readonly 'stoneStairs': BlockType; static readonly 'strippedAcaciaLog': BlockType; static readonly 'strippedBirchLog': BlockType; static readonly 'strippedCrimsonHyphae': BlockType; static readonly 'strippedCrimsonStem': BlockType; static readonly 'strippedDarkOakLog': BlockType; static readonly 'strippedJungleLog': BlockType; static readonly 'strippedOakLog': BlockType; static readonly 'strippedSpruceLog': BlockType; static readonly 'strippedWarpedHyphae': BlockType; static readonly 'strippedWarpedStem': BlockType; static readonly 'structureBlock': BlockType; static readonly 'structureVoid': BlockType; static readonly 'sweetBerryBush': BlockType; static readonly 'tallgrass': BlockType; static readonly 'target': BlockType; static readonly 'tintedGlass': BlockType; static readonly 'tnt': BlockType; static readonly 'torch': BlockType; static readonly 'trapdoor': BlockType; static readonly 'trappedChest': BlockType; static readonly 'tripWire': BlockType; static readonly 'tripwireHook': BlockType; static readonly 'tuff': BlockType; static readonly 'turtleEgg': BlockType; static readonly 'twistingVines': BlockType; static readonly 'underwaterTorch': BlockType; static readonly 'undyedShulkerBox': BlockType; static readonly 'unknown': BlockType; static readonly 'unlitRedstoneTorch': BlockType; static readonly 'unpoweredComparator': BlockType; static readonly 'unpoweredRepeater': BlockType; static readonly 'verdantFroglight': BlockType; static readonly 'vine': BlockType; static readonly 'wallBanner': BlockType; static readonly 'wallSign': BlockType; static readonly 'warpedButton': BlockType; static readonly 'warpedDoor': BlockType; static readonly 'warpedDoubleSlab': BlockType; static readonly 'warpedFence': BlockType; static readonly 'warpedFenceGate': BlockType; static readonly 'warpedFungus': BlockType; static readonly 'warpedHyphae': BlockType; static readonly 'warpedNylium': BlockType; static readonly 'warpedPlanks': BlockType; static readonly 'warpedPressurePlate': BlockType; static readonly 'warpedRoots': BlockType; static readonly 'warpedSlab': BlockType; static readonly 'warpedStairs': BlockType; static readonly 'warpedStandingSign': BlockType; static readonly 'warpedStem': BlockType; static readonly 'warpedTrapdoor': BlockType; static readonly 'warpedWallSign': BlockType; static readonly 'warpedWartBlock': BlockType; static readonly 'water': BlockType; static readonly 'waterlily': BlockType; static readonly 'waxedCopper': BlockType; static readonly 'waxedCutCopper': BlockType; static readonly 'waxedCutCopperSlab': BlockType; static readonly 'waxedCutCopperStairs': BlockType; static readonly 'waxedDoubleCutCopperSlab': BlockType; static readonly 'waxedExposedCopper': BlockType; static readonly 'waxedExposedCutCopper': BlockType; static readonly 'waxedExposedCutCopperSlab': BlockType; static readonly 'waxedExposedCutCopperStairs': BlockType; static readonly 'waxedExposedDoubleCutCopperSlab': BlockType; static readonly 'waxedOxidizedCopper': BlockType; static readonly 'waxedOxidizedCutCopper': BlockType; static readonly 'waxedOxidizedCutCopperSlab': BlockType; static readonly 'waxedOxidizedCutCopperStairs': BlockType; static readonly 'waxedOxidizedDoubleCutCopperSlab': BlockType; static readonly 'waxedWeatheredCopper': BlockType; static readonly 'waxedWeatheredCutCopper': BlockType; static readonly 'waxedWeatheredCutCopperSlab': BlockType; static readonly 'waxedWeatheredCutCopperStairs': BlockType; static readonly 'waxedWeatheredDoubleCutCopperSlab': BlockType; static readonly 'weatheredCopper': BlockType; static readonly 'weatheredCutCopper': BlockType; static readonly 'weatheredCutCopperSlab': BlockType; static readonly 'weatheredCutCopperStairs': BlockType; static readonly 'weatheredDoubleCutCopperSlab': BlockType; static readonly 'web': BlockType; static readonly 'weepingVines': BlockType; static readonly 'wheat': BlockType; static readonly 'whiteCandle': BlockType; static readonly 'whiteCandleCake': BlockType; static readonly 'whiteGlazedTerracotta': BlockType; static readonly 'witherRose': BlockType; static readonly 'wood': BlockType; static readonly 'woodenButton': BlockType; static readonly 'woodenDoor': BlockType; static readonly 'woodenPressurePlate': BlockType; static readonly 'woodenSlab': BlockType; static readonly 'wool': BlockType; static readonly 'yellowCandle': BlockType; static readonly 'yellowCandleCake': BlockType; static readonly 'yellowFlower': BlockType; static readonly 'yellowGlazedTerracotta': BlockType; static get(typeName: string): BlockType; static getAllBlockTypes(): BlockType[]; protected constructor(); }
  export class MinecraftDimensionTypes { static readonly 'nether' = 'minecraft:nether'; static readonly 'overworld' = 'minecraft:overworld'; static readonly 'theEnd' = 'minecraft:the_end'; protected constructor(); }
  export class MinecraftEffectTypes { static readonly 'absorption': EffectType; static readonly 'badOmen': EffectType; static readonly 'blindness': EffectType; static readonly 'conduitPower': EffectType; static readonly 'empty': EffectType; static readonly 'fatalPoison': EffectType; static readonly 'fireResistance': EffectType; static readonly 'haste': EffectType; static readonly 'healthBoost': EffectType; static readonly 'hunger': EffectType; static readonly 'instantDamage': EffectType; static readonly 'instantHealth': EffectType; static readonly 'invisibility': EffectType; static readonly 'jumpBoost': EffectType; static readonly 'levitation': EffectType; static readonly 'miningFatigue': EffectType; static readonly 'nausea': EffectType; static readonly 'nightVision': EffectType; static readonly 'poison': EffectType; static readonly 'regeneration': EffectType; static readonly 'resistance': EffectType; static readonly 'saturation': EffectType; static readonly 'slowFalling': EffectType; static readonly 'slowness': EffectType; static readonly 'speed': EffectType; static readonly 'strength': EffectType; static readonly 'villageHero': EffectType; static readonly 'waterBreathing': EffectType; static readonly 'weakness': EffectType; static readonly 'wither': EffectType; protected constructor(); }
  export class MinecraftEnchantmentTypes { static readonly 'aquaAffinity': EnchantmentType; static readonly 'baneOfArthropods': EnchantmentType; static readonly 'binding': EnchantmentType; static readonly 'blastProtection': EnchantmentType; static readonly 'channeling': EnchantmentType; static readonly 'depthStrider': EnchantmentType; static readonly 'efficiency': EnchantmentType; static readonly 'featherFalling': EnchantmentType; static readonly 'fireAspect': EnchantmentType; static readonly 'fireProtection': EnchantmentType; static readonly 'flame': EnchantmentType; static readonly 'fortune': EnchantmentType; static readonly 'frostWalker': EnchantmentType; static readonly 'impaling': EnchantmentType; static readonly 'infinity': EnchantmentType; static readonly 'knockback': EnchantmentType; static readonly 'looting': EnchantmentType; static readonly 'loyalty': EnchantmentType; static readonly 'luckOfTheSea': EnchantmentType; static readonly 'lure': EnchantmentType; static readonly 'mending': EnchantmentType; static readonly 'multishot': EnchantmentType; static readonly 'piercing': EnchantmentType; static readonly 'power': EnchantmentType; static readonly 'projectileProtection': EnchantmentType; static readonly 'protection': EnchantmentType; static readonly 'punch': EnchantmentType; static readonly 'quickCharge': EnchantmentType; static readonly 'respiration': EnchantmentType; static readonly 'riptide': EnchantmentType; static readonly 'sharpness': EnchantmentType; static readonly 'silkTouch': EnchantmentType; static readonly 'smite': EnchantmentType; static readonly 'soulSpeed': EnchantmentType; static readonly 'thorns': EnchantmentType; static readonly 'unbreaking': EnchantmentType; static readonly 'vanishing': EnchantmentType; protected constructor(); }
  export class MinecraftEntityTypes { static readonly 'agent': EntityType; static readonly 'areaEffectCloud': EntityType; static readonly 'armorStand': EntityType; static readonly 'arrow': EntityType; static readonly 'axolotl': EntityType; static readonly 'bat': EntityType; static readonly 'bee': EntityType; static readonly 'blaze': EntityType; static readonly 'boat': EntityType; static readonly 'cat': EntityType; static readonly 'caveSpider': EntityType; static readonly 'chestMinecart': EntityType; static readonly 'chicken': EntityType; static readonly 'cod': EntityType; static readonly 'commandBlockMinecart': EntityType; static readonly 'cow': EntityType; static readonly 'creeper': EntityType; static readonly 'dolphin': EntityType; static readonly 'donkey': EntityType; static readonly 'dragonFireball': EntityType; static readonly 'drowned': EntityType; static readonly 'egg': EntityType; static readonly 'elderGuardian': EntityType; static readonly 'enderCrystal': EntityType; static readonly 'enderDragon': EntityType; static readonly 'enderman': EntityType; static readonly 'endermite': EntityType; static readonly 'enderPearl': EntityType; static readonly 'evocationIllager': EntityType; static readonly 'eyeOfEnderSignal': EntityType; static readonly 'fireball': EntityType; static readonly 'fireworksRocket': EntityType; static readonly 'fishingHook': EntityType; static readonly 'fox': EntityType; static readonly 'ghast': EntityType; static readonly 'glowSquid': EntityType; static readonly 'goat': EntityType; static readonly 'guardian': EntityType; static readonly 'hoglin': EntityType; static readonly 'hopperMinecart': EntityType; static readonly 'horse': EntityType; static readonly 'husk': EntityType; static readonly 'ironGolem': EntityType; static readonly 'lightningBolt': EntityType; static readonly 'lingeringPotion': EntityType; static readonly 'llama': EntityType; static readonly 'llamaSpit': EntityType; static readonly 'magmaCube': EntityType; static readonly 'minecart': EntityType; static readonly 'mooshroom': EntityType; static readonly 'mule': EntityType; static readonly 'npc': EntityType; static readonly 'ocelot': EntityType; static readonly 'panda': EntityType; static readonly 'parrot': EntityType; static readonly 'phantom': EntityType; static readonly 'pig': EntityType; static readonly 'piglin': EntityType; static readonly 'piglinBrute': EntityType; static readonly 'pillager': EntityType; static readonly 'player': EntityType; static readonly 'polarBear': EntityType; static readonly 'pufferfish': EntityType; static readonly 'rabbit': EntityType; static readonly 'ravager': EntityType; static readonly 'salmon': EntityType; static readonly 'sheep': EntityType; static readonly 'shulker': EntityType; static readonly 'shulkerBullet': EntityType; static readonly 'silverfish': EntityType; static readonly 'skeleton': EntityType; static readonly 'skeletonHorse': EntityType; static readonly 'slime': EntityType; static readonly 'smallFireball': EntityType; static readonly 'snowball': EntityType; static readonly 'snowGolem': EntityType; static readonly 'spider': EntityType; static readonly 'splashPotion': EntityType; static readonly 'squid': EntityType; static readonly 'stray': EntityType; static readonly 'strider': EntityType; static readonly 'thrownTrident': EntityType; static readonly 'tnt': EntityType; static readonly 'tntMinecart': EntityType; static readonly 'tripodCamera': EntityType; static readonly 'tropicalfish': EntityType; static readonly 'turtle': EntityType; static readonly 'vex': EntityType; static readonly 'villager': EntityType; static readonly 'villagerV2': EntityType; static readonly 'vindicator': EntityType; static readonly 'wanderingTrader': EntityType; static readonly 'witch': EntityType; static readonly 'wither': EntityType; static readonly 'witherSkeleton': EntityType; static readonly 'witherSkull': EntityType; static readonly 'witherSkullDangerous': EntityType; static readonly 'wolf': EntityType; static readonly 'xpBottle': EntityType; static readonly 'xpOrb': EntityType; static readonly 'zoglin': EntityType; static readonly 'zombie': EntityType; static readonly 'zombieHorse': EntityType; static readonly 'zombiePigman': EntityType; static readonly 'zombieVillager': EntityType; static readonly 'zombieVillagerV2': EntityType; protected constructor(); }
  export class MinecraftItemTypes { static readonly 'acaciaBoat': ItemType; static readonly 'acaciaButton': ItemType; static readonly 'acaciaChestBoat': ItemType; static readonly 'acaciaDoor': ItemType; static readonly 'acaciaFenceGate': ItemType; static readonly 'acaciaPressurePlate': ItemType; static readonly 'acaciaSign': ItemType; static readonly 'acaciaStairs': ItemType; static readonly 'acaciaStandingSign': ItemType; static readonly 'acaciaTrapdoor': ItemType; static readonly 'acaciaWallSign': ItemType; static readonly 'activatorRail': ItemType; static readonly 'agentSpawnEgg': ItemType; static readonly 'air': ItemType; static readonly 'allaySpawnEgg': ItemType; static readonly 'allow': ItemType; static readonly 'amethystBlock': ItemType; static readonly 'amethystCluster': ItemType; static readonly 'amethystShard': ItemType; static readonly 'ancientDebris': ItemType; static readonly 'andesiteStairs': ItemType; static readonly 'anvil': ItemType; static readonly 'apple': ItemType; static readonly 'armorStand': ItemType; static readonly 'arrow': ItemType; static readonly 'axolotlBucket': ItemType; static readonly 'axolotlSpawnEgg': ItemType; static readonly 'azalea': ItemType; static readonly 'azaleaLeaves': ItemType; static readonly 'azaleaLeavesFlowered': ItemType; static readonly 'bakedPotato': ItemType; static readonly 'balloon': ItemType; static readonly 'bamboo': ItemType; static readonly 'bambooSapling': ItemType; static readonly 'banner': ItemType; static readonly 'bannerPattern': ItemType; static readonly 'barrel': ItemType; static readonly 'barrier': ItemType; static readonly 'basalt': ItemType; static readonly 'batSpawnEgg': ItemType; static readonly 'beacon': ItemType; static readonly 'bed': ItemType; static readonly 'bedrock': ItemType; static readonly 'beef': ItemType; static readonly 'beehive': ItemType; static readonly 'beeNest': ItemType; static readonly 'beeSpawnEgg': ItemType; static readonly 'beetroot': ItemType; static readonly 'beetrootSeeds': ItemType; static readonly 'beetrootSoup': ItemType; static readonly 'bell': ItemType; static readonly 'bigDripleaf': ItemType; static readonly 'birchBoat': ItemType; static readonly 'birchButton': ItemType; static readonly 'birchChestBoat': ItemType; static readonly 'birchDoor': ItemType; static readonly 'birchFenceGate': ItemType; static readonly 'birchPressurePlate': ItemType; static readonly 'birchSign': ItemType; static readonly 'birchStairs': ItemType; static readonly 'birchStandingSign': ItemType; static readonly 'birchTrapdoor': ItemType; static readonly 'birchWallSign': ItemType; static readonly 'blackCandle': ItemType; static readonly 'blackCandleCake': ItemType; static readonly 'blackDye': ItemType; static readonly 'blackGlazedTerracotta': ItemType; static readonly 'blackstone': ItemType; static readonly 'blackstoneDoubleSlab': ItemType; static readonly 'blackstoneSlab': ItemType; static readonly 'blackstoneStairs': ItemType; static readonly 'blackstoneWall': ItemType; static readonly 'blastFurnace': ItemType; static readonly 'blazePowder': ItemType; static readonly 'blazeRod': ItemType; static readonly 'blazeSpawnEgg': ItemType; static readonly 'bleach': ItemType; static readonly 'blueCandle': ItemType; static readonly 'blueCandleCake': ItemType; static readonly 'blueDye': ItemType; static readonly 'blueGlazedTerracotta': ItemType; static readonly 'blueIce': ItemType; static readonly 'boat': ItemType; static readonly 'bone': ItemType; static readonly 'boneBlock': ItemType; static readonly 'boneMeal': ItemType; static readonly 'book': ItemType; static readonly 'bookshelf': ItemType; static readonly 'borderBlock': ItemType; static readonly 'bordureIndentedBannerPattern': ItemType; static readonly 'bow': ItemType; static readonly 'bowl': ItemType; static readonly 'bread': ItemType; static readonly 'brewingStand': ItemType; static readonly 'brick': ItemType; static readonly 'brickBlock': ItemType; static readonly 'brickStairs': ItemType; static readonly 'brownCandle': ItemType; static readonly 'brownCandleCake': ItemType; static readonly 'brownDye': ItemType; static readonly 'brownGlazedTerracotta': ItemType; static readonly 'brownMushroom': ItemType; static readonly 'brownMushroomBlock': ItemType; static readonly 'bubbleColumn': ItemType; static readonly 'bucket': ItemType; static readonly 'buddingAmethyst': ItemType; static readonly 'cactus': ItemType; static readonly 'cake': ItemType; static readonly 'calcite': ItemType; static readonly 'camera': ItemType; static readonly 'campfire': ItemType; static readonly 'candle': ItemType; static readonly 'candleCake': ItemType; static readonly 'carpet': ItemType; static readonly 'carrot': ItemType; static readonly 'carrotOnAStick': ItemType; static readonly 'carrots': ItemType; static readonly 'cartographyTable': ItemType; static readonly 'carvedPumpkin': ItemType; static readonly 'catSpawnEgg': ItemType; static readonly 'cauldron': ItemType; static readonly 'caveSpiderSpawnEgg': ItemType; static readonly 'caveVines': ItemType; static readonly 'caveVinesBodyWithBerries': ItemType; static readonly 'caveVinesHeadWithBerries': ItemType; static readonly 'chain': ItemType; static readonly 'chainCommandBlock': ItemType; static readonly 'chainmailBoots': ItemType; static readonly 'chainmailChestplate': ItemType; static readonly 'chainmailHelmet': ItemType; static readonly 'chainmailLeggings': ItemType; static readonly 'charcoal': ItemType; static readonly 'chemicalHeat': ItemType; static readonly 'chemistryTable': ItemType; static readonly 'chest': ItemType; static readonly 'chestBoat': ItemType; static readonly 'chestMinecart': ItemType; static readonly 'chicken': ItemType; static readonly 'chickenSpawnEgg': ItemType; static readonly 'chiseledDeepslate': ItemType; static readonly 'chiseledNetherBricks': ItemType; static readonly 'chiseledPolishedBlackstone': ItemType; static readonly 'chorusFlower': ItemType; static readonly 'chorusFruit': ItemType; static readonly 'chorusPlant': ItemType; static readonly 'clay': ItemType; static readonly 'clayBall': ItemType; static readonly 'clientRequestPlaceholderBlock': ItemType; static readonly 'clock': ItemType; static readonly 'coal': ItemType; static readonly 'coalBlock': ItemType; static readonly 'coalOre': ItemType; static readonly 'cobbledDeepslate': ItemType; static readonly 'cobbledDeepslateDoubleSlab': ItemType; static readonly 'cobbledDeepslateSlab': ItemType; static readonly 'cobbledDeepslateStairs': ItemType; static readonly 'cobbledDeepslateWall': ItemType; static readonly 'cobblestone': ItemType; static readonly 'cobblestoneWall': ItemType; static readonly 'cocoa': ItemType; static readonly 'cocoaBeans': ItemType; static readonly 'cod': ItemType; static readonly 'codBucket': ItemType; static readonly 'codSpawnEgg': ItemType; static readonly 'coloredTorchBp': ItemType; static readonly 'coloredTorchRg': ItemType; static readonly 'commandBlock': ItemType; static readonly 'commandBlockMinecart': ItemType; static readonly 'comparator': ItemType; static readonly 'compass': ItemType; static readonly 'composter': ItemType; static readonly 'compound': ItemType; static readonly 'concrete': ItemType; static readonly 'concretePowder': ItemType; static readonly 'conduit': ItemType; static readonly 'cookedBeef': ItemType; static readonly 'cookedChicken': ItemType; static readonly 'cookedCod': ItemType; static readonly 'cookedMutton': ItemType; static readonly 'cookedPorkchop': ItemType; static readonly 'cookedRabbit': ItemType; static readonly 'cookedSalmon': ItemType; static readonly 'cookie': ItemType; static readonly 'copperBlock': ItemType; static readonly 'copperIngot': ItemType; static readonly 'copperOre': ItemType; static readonly 'coral': ItemType; static readonly 'coralBlock': ItemType; static readonly 'coralFan': ItemType; static readonly 'coralFanDead': ItemType; static readonly 'coralFanHang': ItemType; static readonly 'coralFanHang2': ItemType; static readonly 'coralFanHang3': ItemType; static readonly 'cowSpawnEgg': ItemType; static readonly 'crackedDeepslateBricks': ItemType; static readonly 'crackedDeepslateTiles': ItemType; static readonly 'crackedNetherBricks': ItemType; static readonly 'crackedPolishedBlackstoneBricks': ItemType; static readonly 'craftingTable': ItemType; static readonly 'creeperBannerPattern': ItemType; static readonly 'creeperSpawnEgg': ItemType; static readonly 'crimsonButton': ItemType; static readonly 'crimsonDoor': ItemType; static readonly 'crimsonDoubleSlab': ItemType; static readonly 'crimsonFence': ItemType; static readonly 'crimsonFenceGate': ItemType; static readonly 'crimsonFungus': ItemType; static readonly 'crimsonHyphae': ItemType; static readonly 'crimsonNylium': ItemType; static readonly 'crimsonPlanks': ItemType; static readonly 'crimsonPressurePlate': ItemType; static readonly 'crimsonRoots': ItemType; static readonly 'crimsonSign': ItemType; static readonly 'crimsonSlab': ItemType; static readonly 'crimsonStairs': ItemType; static readonly 'crimsonStandingSign': ItemType; static readonly 'crimsonStem': ItemType; static readonly 'crimsonTrapdoor': ItemType; static readonly 'crimsonWallSign': ItemType; static readonly 'crossbow': ItemType; static readonly 'cryingObsidian': ItemType; static readonly 'cutCopper': ItemType; static readonly 'cutCopperSlab': ItemType; static readonly 'cutCopperStairs': ItemType; static readonly 'cyanCandle': ItemType; static readonly 'cyanCandleCake': ItemType; static readonly 'cyanDye': ItemType; static readonly 'cyanGlazedTerracotta': ItemType; static readonly 'darkOakBoat': ItemType; static readonly 'darkOakButton': ItemType; static readonly 'darkOakChestBoat': ItemType; static readonly 'darkOakDoor': ItemType; static readonly 'darkOakFenceGate': ItemType; static readonly 'darkOakPressurePlate': ItemType; static readonly 'darkOakSign': ItemType; static readonly 'darkOakStairs': ItemType; static readonly 'darkoakStandingSign': ItemType; static readonly 'darkOakTrapdoor': ItemType; static readonly 'darkoakWallSign': ItemType; static readonly 'darkPrismarineStairs': ItemType; static readonly 'daylightDetector': ItemType; static readonly 'daylightDetectorInverted': ItemType; static readonly 'deadbush': ItemType; static readonly 'debugStick': ItemType; static readonly 'deepslate': ItemType; static readonly 'deepslateBrickDoubleSlab': ItemType; static readonly 'deepslateBricks': ItemType; static readonly 'deepslateBrickSlab': ItemType; static readonly 'deepslateBrickStairs': ItemType; static readonly 'deepslateBrickWall': ItemType; static readonly 'deepslateCoalOre': ItemType; static readonly 'deepslateCopperOre': ItemType; static readonly 'deepslateDiamondOre': ItemType; static readonly 'deepslateEmeraldOre': ItemType; static readonly 'deepslateGoldOre': ItemType; static readonly 'deepslateIronOre': ItemType; static readonly 'deepslateLapisOre': ItemType; static readonly 'deepslateRedstoneOre': ItemType; static readonly 'deepslateTileDoubleSlab': ItemType; static readonly 'deepslateTiles': ItemType; static readonly 'deepslateTileSlab': ItemType; static readonly 'deepslateTileStairs': ItemType; static readonly 'deepslateTileWall': ItemType; static readonly 'deny': ItemType; static readonly 'detectorRail': ItemType; static readonly 'diamond': ItemType; static readonly 'diamondAxe': ItemType; static readonly 'diamondBlock': ItemType; static readonly 'diamondBoots': ItemType; static readonly 'diamondChestplate': ItemType; static readonly 'diamondHelmet': ItemType; static readonly 'diamondHoe': ItemType; static readonly 'diamondHorseArmor': ItemType; static readonly 'diamondLeggings': ItemType; static readonly 'diamondOre': ItemType; static readonly 'diamondPickaxe': ItemType; static readonly 'diamondShovel': ItemType; static readonly 'diamondSword': ItemType; static readonly 'dioriteStairs': ItemType; static readonly 'dirt': ItemType; static readonly 'dirtWithRoots': ItemType; static readonly 'dispenser': ItemType; static readonly 'dolphinSpawnEgg': ItemType; static readonly 'donkeySpawnEgg': ItemType; static readonly 'doubleCutCopperSlab': ItemType; static readonly 'doublePlant': ItemType; static readonly 'doubleStoneSlab': ItemType; static readonly 'doubleStoneSlab2': ItemType; static readonly 'doubleStoneSlab3': ItemType; static readonly 'doubleStoneSlab4': ItemType; static readonly 'doubleWoodenSlab': ItemType; static readonly 'dragonBreath': ItemType; static readonly 'dragonEgg': ItemType; static readonly 'driedKelp': ItemType; static readonly 'driedKelpBlock': ItemType; static readonly 'dripstoneBlock': ItemType; static readonly 'dropper': ItemType; static readonly 'drownedSpawnEgg': ItemType; static readonly 'dye': ItemType; static readonly 'egg': ItemType; static readonly 'elderGuardianSpawnEgg': ItemType; static readonly 'element0': ItemType; static readonly 'element1': ItemType; static readonly 'element10': ItemType; static readonly 'element100': ItemType; static readonly 'element101': ItemType; static readonly 'element102': ItemType; static readonly 'element103': ItemType; static readonly 'element104': ItemType; static readonly 'element105': ItemType; static readonly 'element106': ItemType; static readonly 'element107': ItemType; static readonly 'element108': ItemType; static readonly 'element109': ItemType; static readonly 'element11': ItemType; static readonly 'element110': ItemType; static readonly 'element111': ItemType; static readonly 'element112': ItemType; static readonly 'element113': ItemType; static readonly 'element114': ItemType; static readonly 'element115': ItemType; static readonly 'element116': ItemType; static readonly 'element117': ItemType; static readonly 'element118': ItemType; static readonly 'element12': ItemType; static readonly 'element13': ItemType; static readonly 'element14': ItemType; static readonly 'element15': ItemType; static readonly 'element16': ItemType; static readonly 'element17': ItemType; static readonly 'element18': ItemType; static readonly 'element19': ItemType; static readonly 'element2': ItemType; static readonly 'element20': ItemType; static readonly 'element21': ItemType; static readonly 'element22': ItemType; static readonly 'element23': ItemType; static readonly 'element24': ItemType; static readonly 'element25': ItemType; static readonly 'element26': ItemType; static readonly 'element27': ItemType; static readonly 'element28': ItemType; static readonly 'element29': ItemType; static readonly 'element3': ItemType; static readonly 'element30': ItemType; static readonly 'element31': ItemType; static readonly 'element32': ItemType; static readonly 'element33': ItemType; static readonly 'element34': ItemType; static readonly 'element35': ItemType; static readonly 'element36': ItemType; static readonly 'element37': ItemType; static readonly 'element38': ItemType; static readonly 'element39': ItemType; static readonly 'element4': ItemType; static readonly 'element40': ItemType; static readonly 'element41': ItemType; static readonly 'element42': ItemType; static readonly 'element43': ItemType; static readonly 'element44': ItemType; static readonly 'element45': ItemType; static readonly 'element46': ItemType; static readonly 'element47': ItemType; static readonly 'element48': ItemType; static readonly 'element49': ItemType; static readonly 'element5': ItemType; static readonly 'element50': ItemType; static readonly 'element51': ItemType; static readonly 'element52': ItemType; static readonly 'element53': ItemType; static readonly 'element54': ItemType; static readonly 'element55': ItemType; static readonly 'element56': ItemType; static readonly 'element57': ItemType; static readonly 'element58': ItemType; static readonly 'element59': ItemType; static readonly 'element6': ItemType; static readonly 'element60': ItemType; static readonly 'element61': ItemType; static readonly 'element62': ItemType; static readonly 'element63': ItemType; static readonly 'element64': ItemType; static readonly 'element65': ItemType; static readonly 'element66': ItemType; static readonly 'element67': ItemType; static readonly 'element68': ItemType; static readonly 'element69': ItemType; static readonly 'element7': ItemType; static readonly 'element70': ItemType; static readonly 'element71': ItemType; static readonly 'element72': ItemType; static readonly 'element73': ItemType; static readonly 'element74': ItemType; static readonly 'element75': ItemType; static readonly 'element76': ItemType; static readonly 'element77': ItemType; static readonly 'element78': ItemType; static readonly 'element79': ItemType; static readonly 'element8': ItemType; static readonly 'element80': ItemType; static readonly 'element81': ItemType; static readonly 'element82': ItemType; static readonly 'element83': ItemType; static readonly 'element84': ItemType; static readonly 'element85': ItemType; static readonly 'element86': ItemType; static readonly 'element87': ItemType; static readonly 'element88': ItemType; static readonly 'element89': ItemType; static readonly 'element9': ItemType; static readonly 'element90': ItemType; static readonly 'element91': ItemType; static readonly 'element92': ItemType; static readonly 'element93': ItemType; static readonly 'element94': ItemType; static readonly 'element95': ItemType; static readonly 'element96': ItemType; static readonly 'element97': ItemType; static readonly 'element98': ItemType; static readonly 'element99': ItemType; static readonly 'elytra': ItemType; static readonly 'emerald': ItemType; static readonly 'emeraldBlock': ItemType; static readonly 'emeraldOre': ItemType; static readonly 'emptyMap': ItemType; static readonly 'enchantedBook': ItemType; static readonly 'enchantedGoldenApple': ItemType; static readonly 'enchantingTable': ItemType; static readonly 'endBricks': ItemType; static readonly 'endBrickStairs': ItemType; static readonly 'endCrystal': ItemType; static readonly 'enderChest': ItemType; static readonly 'enderEye': ItemType; static readonly 'endermanSpawnEgg': ItemType; static readonly 'endermiteSpawnEgg': ItemType; static readonly 'enderPearl': ItemType; static readonly 'endGateway': ItemType; static readonly 'endPortal': ItemType; static readonly 'endPortalFrame': ItemType; static readonly 'endRod': ItemType; static readonly 'endStone': ItemType; static readonly 'evokerSpawnEgg': ItemType; static readonly 'experienceBottle': ItemType; static readonly 'exposedCopper': ItemType; static readonly 'exposedCutCopper': ItemType; static readonly 'exposedCutCopperSlab': ItemType; static readonly 'exposedCutCopperStairs': ItemType; static readonly 'exposedDoubleCutCopperSlab': ItemType; static readonly 'farmland': ItemType; static readonly 'feather': ItemType; static readonly 'fence': ItemType; static readonly 'fenceGate': ItemType; static readonly 'fermentedSpiderEye': ItemType; static readonly 'fieldMasonedBannerPattern': ItemType; static readonly 'filledMap': ItemType; static readonly 'fire': ItemType; static readonly 'fireCharge': ItemType; static readonly 'fireflySpawnEgg': ItemType; static readonly 'fireworkRocket': ItemType; static readonly 'fireworkStar': ItemType; static readonly 'fishingRod': ItemType; static readonly 'fletchingTable': ItemType; static readonly 'flint': ItemType; static readonly 'flintAndSteel': ItemType; static readonly 'flowerBannerPattern': ItemType; static readonly 'floweringAzalea': ItemType; static readonly 'flowerPot': ItemType; static readonly 'flowingLava': ItemType; static readonly 'flowingWater': ItemType; static readonly 'foxSpawnEgg': ItemType; static readonly 'frame': ItemType; static readonly 'frogSpawn': ItemType; static readonly 'frogSpawnEgg': ItemType; static readonly 'frostedIce': ItemType; static readonly 'furnace': ItemType; static readonly 'ghastSpawnEgg': ItemType; static readonly 'ghastTear': ItemType; static readonly 'gildedBlackstone': ItemType; static readonly 'glass': ItemType; static readonly 'glassBottle': ItemType; static readonly 'glassPane': ItemType; static readonly 'glisteringMelonSlice': ItemType; static readonly 'globeBannerPattern': ItemType; static readonly 'glowBerries': ItemType; static readonly 'glowFrame': ItemType; static readonly 'glowingobsidian': ItemType; static readonly 'glowInkSac': ItemType; static readonly 'glowLichen': ItemType; static readonly 'glowSquidSpawnEgg': ItemType; static readonly 'glowStick': ItemType; static readonly 'glowstone': ItemType; static readonly 'glowstoneDust': ItemType; static readonly 'goatSpawnEgg': ItemType; static readonly 'goldBlock': ItemType; static readonly 'goldenApple': ItemType; static readonly 'goldenAxe': ItemType; static readonly 'goldenBoots': ItemType; static readonly 'goldenCarrot': ItemType; static readonly 'goldenChestplate': ItemType; static readonly 'goldenHelmet': ItemType; static readonly 'goldenHoe': ItemType; static readonly 'goldenHorseArmor': ItemType; static readonly 'goldenLeggings': ItemType; static readonly 'goldenPickaxe': ItemType; static readonly 'goldenRail': ItemType; static readonly 'goldenShovel': ItemType; static readonly 'goldenSword': ItemType; static readonly 'goldIngot': ItemType; static readonly 'goldNugget': ItemType; static readonly 'goldOre': ItemType; static readonly 'graniteStairs': ItemType; static readonly 'grass': ItemType; static readonly 'grassPath': ItemType; static readonly 'gravel': ItemType; static readonly 'grayCandle': ItemType; static readonly 'grayCandleCake': ItemType; static readonly 'grayDye': ItemType; static readonly 'grayGlazedTerracotta': ItemType; static readonly 'greenCandle': ItemType; static readonly 'greenCandleCake': ItemType; static readonly 'greenDye': ItemType; static readonly 'greenGlazedTerracotta': ItemType; static readonly 'grindstone': ItemType; static readonly 'guardianSpawnEgg': ItemType; static readonly 'gunpowder': ItemType; static readonly 'hangingRoots': ItemType; static readonly 'hardenedClay': ItemType; static readonly 'hardGlass': ItemType; static readonly 'hardGlassPane': ItemType; static readonly 'hardStainedGlass': ItemType; static readonly 'hardStainedGlassPane': ItemType; static readonly 'hayBlock': ItemType; static readonly 'heartOfTheSea': ItemType; static readonly 'heavyWeightedPressurePlate': ItemType; static readonly 'hoglinSpawnEgg': ItemType; static readonly 'honeyBlock': ItemType; static readonly 'honeyBottle': ItemType; static readonly 'honeycomb': ItemType; static readonly 'honeycombBlock': ItemType; static readonly 'hopper': ItemType; static readonly 'hopperMinecart': ItemType; static readonly 'horseSpawnEgg': ItemType; static readonly 'huskSpawnEgg': ItemType; static readonly 'ice': ItemType; static readonly 'iceBomb': ItemType; static readonly 'infestedDeepslate': ItemType; static readonly 'infoUpdate': ItemType; static readonly 'infoUpdate2': ItemType; static readonly 'inkSac': ItemType; static readonly 'invisibleBedrock': ItemType; static readonly 'ironAxe': ItemType; static readonly 'ironBars': ItemType; static readonly 'ironBlock': ItemType; static readonly 'ironBoots': ItemType; static readonly 'ironChestplate': ItemType; static readonly 'ironDoor': ItemType; static readonly 'ironHelmet': ItemType; static readonly 'ironHoe': ItemType; static readonly 'ironHorseArmor': ItemType; static readonly 'ironIngot': ItemType; static readonly 'ironLeggings': ItemType; static readonly 'ironNugget': ItemType; static readonly 'ironOre': ItemType; static readonly 'ironPickaxe': ItemType; static readonly 'ironShovel': ItemType; static readonly 'ironSword': ItemType; static readonly 'ironTrapdoor': ItemType; static readonly 'item.acaciaDoor': ItemType; static readonly 'item.bed': ItemType; static readonly 'item.beetroot': ItemType; static readonly 'item.birchDoor': ItemType; static readonly 'item.brewingStand': ItemType; static readonly 'item.cake': ItemType; static readonly 'item.camera': ItemType; static readonly 'item.campfire': ItemType; static readonly 'item.cauldron': ItemType; static readonly 'item.chain': ItemType; static readonly 'item.crimsonDoor': ItemType; static readonly 'item.darkOakDoor': ItemType; static readonly 'item.flowerPot': ItemType; static readonly 'item.frame': ItemType; static readonly 'item.glowFrame': ItemType; static readonly 'item.hopper': ItemType; static readonly 'item.ironDoor': ItemType; static readonly 'item.jungleDoor': ItemType; static readonly 'item.kelp': ItemType; static readonly 'item.netherSprouts': ItemType; static readonly 'item.netherWart': ItemType; static readonly 'item.reeds': ItemType; static readonly 'item.skull': ItemType; static readonly 'item.soulCampfire': ItemType; static readonly 'item.spruceDoor': ItemType; static readonly 'item.warpedDoor': ItemType; static readonly 'item.wheat': ItemType; static readonly 'item.woodenDoor': ItemType; static readonly 'jigsaw': ItemType; static readonly 'jukebox': ItemType; static readonly 'jungleBoat': ItemType; static readonly 'jungleButton': ItemType; static readonly 'jungleChestBoat': ItemType; static readonly 'jungleDoor': ItemType; static readonly 'jungleFenceGate': ItemType; static readonly 'junglePressurePlate': ItemType; static readonly 'jungleSign': ItemType; static readonly 'jungleStairs': ItemType; static readonly 'jungleStandingSign': ItemType; static readonly 'jungleTrapdoor': ItemType; static readonly 'jungleWallSign': ItemType; static readonly 'kelp': ItemType; static readonly 'ladder': ItemType; static readonly 'lantern': ItemType; static readonly 'lapisBlock': ItemType; static readonly 'lapisLazuli': ItemType; static readonly 'lapisOre': ItemType; static readonly 'largeAmethystBud': ItemType; static readonly 'lava': ItemType; static readonly 'lavaBucket': ItemType; static readonly 'lavaCauldron': ItemType; static readonly 'lead': ItemType; static readonly 'leather': ItemType; static readonly 'leatherBoots': ItemType; static readonly 'leatherChestplate': ItemType; static readonly 'leatherHelmet': ItemType; static readonly 'leatherHorseArmor': ItemType; static readonly 'leatherLeggings': ItemType; static readonly 'leaves': ItemType; static readonly 'leaves2': ItemType; static readonly 'lectern': ItemType; static readonly 'lever': ItemType; static readonly 'lightBlock': ItemType; static readonly 'lightBlueCandle': ItemType; static readonly 'lightBlueCandleCake': ItemType; static readonly 'lightBlueDye': ItemType; static readonly 'lightBlueGlazedTerracotta': ItemType; static readonly 'lightGrayCandle': ItemType; static readonly 'lightGrayCandleCake': ItemType; static readonly 'lightGrayDye': ItemType; static readonly 'lightningRod': ItemType; static readonly 'lightWeightedPressurePlate': ItemType; static readonly 'limeCandle': ItemType; static readonly 'limeCandleCake': ItemType; static readonly 'limeDye': ItemType; static readonly 'limeGlazedTerracotta': ItemType; static readonly 'lingeringPotion': ItemType; static readonly 'litBlastFurnace': ItemType; static readonly 'litDeepslateRedstoneOre': ItemType; static readonly 'litFurnace': ItemType; static readonly 'litPumpkin': ItemType; static readonly 'litRedstoneLamp': ItemType; static readonly 'litRedstoneOre': ItemType; static readonly 'litSmoker': ItemType; static readonly 'llamaSpawnEgg': ItemType; static readonly 'lodestone': ItemType; static readonly 'lodestoneCompass': ItemType; static readonly 'log': ItemType; static readonly 'log2': ItemType; static readonly 'loom': ItemType; static readonly 'magentaCandle': ItemType; static readonly 'magentaCandleCake': ItemType; static readonly 'magentaDye': ItemType; static readonly 'magentaGlazedTerracotta': ItemType; static readonly 'magma': ItemType; static readonly 'magmaCream': ItemType; static readonly 'magmaCubeSpawnEgg': ItemType; static readonly 'mangroveLeaves': ItemType; static readonly 'mangrovePropagule': ItemType; static readonly 'mangrovePropaguleHanging': ItemType; static readonly 'medicine': ItemType; static readonly 'mediumAmethystBud': ItemType; static readonly 'melonBlock': ItemType; static readonly 'melonSeeds': ItemType; static readonly 'melonSlice': ItemType; static readonly 'melonStem': ItemType; static readonly 'milkBucket': ItemType; static readonly 'minecart': ItemType; static readonly 'mobSpawner': ItemType; static readonly 'mojangBannerPattern': ItemType; static readonly 'monsterEgg': ItemType; static readonly 'mooshroomSpawnEgg': ItemType; static readonly 'mossBlock': ItemType; static readonly 'mossCarpet': ItemType; static readonly 'mossyCobblestone': ItemType; static readonly 'mossyCobblestoneStairs': ItemType; static readonly 'mossyStoneBrickStairs': ItemType; static readonly 'movingBlock': ItemType; static readonly 'mud': ItemType; static readonly 'mudBrickDoubleSlab': ItemType; static readonly 'mudBricks': ItemType; static readonly 'mudBrickSlab': ItemType; static readonly 'mudBrickStairs': ItemType; static readonly 'mudBrickWall': ItemType; static readonly 'muleSpawnEgg': ItemType; static readonly 'mushroomStew': ItemType; static readonly 'musicDisc11': ItemType; static readonly 'musicDisc13': ItemType; static readonly 'musicDiscBlocks': ItemType; static readonly 'musicDiscCat': ItemType; static readonly 'musicDiscChirp': ItemType; static readonly 'musicDiscFar': ItemType; static readonly 'musicDiscMall': ItemType; static readonly 'musicDiscMellohi': ItemType; static readonly 'musicDiscOtherside': ItemType; static readonly 'musicDiscPigstep': ItemType; static readonly 'musicDiscStal': ItemType; static readonly 'musicDiscStrad': ItemType; static readonly 'musicDiscWait': ItemType; static readonly 'musicDiscWard': ItemType; static readonly 'mutton': ItemType; static readonly 'mycelium': ItemType; static readonly 'nameTag': ItemType; static readonly 'nautilusShell': ItemType; static readonly 'netherbrick': ItemType; static readonly 'netherBrick': ItemType; static readonly 'netherBrickFence': ItemType; static readonly 'netherBrickStairs': ItemType; static readonly 'netherGoldOre': ItemType; static readonly 'netheriteAxe': ItemType; static readonly 'netheriteBlock': ItemType; static readonly 'netheriteBoots': ItemType; static readonly 'netheriteChestplate': ItemType; static readonly 'netheriteHelmet': ItemType; static readonly 'netheriteHoe': ItemType; static readonly 'netheriteIngot': ItemType; static readonly 'netheriteLeggings': ItemType; static readonly 'netheritePickaxe': ItemType; static readonly 'netheriteScrap': ItemType; static readonly 'netheriteShovel': ItemType; static readonly 'netheriteSword': ItemType; static readonly 'netherrack': ItemType; static readonly 'netherreactor': ItemType; static readonly 'netherSprouts': ItemType; static readonly 'netherStar': ItemType; static readonly 'netherWart': ItemType; static readonly 'netherWartBlock': ItemType; static readonly 'normalStoneStairs': ItemType; static readonly 'noteblock': ItemType; static readonly 'npcSpawnEgg': ItemType; static readonly 'oakBoat': ItemType; static readonly 'oakChestBoat': ItemType; static readonly 'oakSign': ItemType; static readonly 'oakStairs': ItemType; static readonly 'observer': ItemType; static readonly 'obsidian': ItemType; static readonly 'ocelotSpawnEgg': ItemType; static readonly 'ochreFroglight': ItemType; static readonly 'orangeCandle': ItemType; static readonly 'orangeCandleCake': ItemType; static readonly 'orangeDye': ItemType; static readonly 'orangeGlazedTerracotta': ItemType; static readonly 'oxidizedCopper': ItemType; static readonly 'oxidizedCutCopper': ItemType; static readonly 'oxidizedCutCopperSlab': ItemType; static readonly 'oxidizedCutCopperStairs': ItemType; static readonly 'oxidizedDoubleCutCopperSlab': ItemType; static readonly 'packedIce': ItemType; static readonly 'packedMud': ItemType; static readonly 'painting': ItemType; static readonly 'pandaSpawnEgg': ItemType; static readonly 'paper': ItemType; static readonly 'parrotSpawnEgg': ItemType; static readonly 'pearlescentFroglight': ItemType; static readonly 'phantomMembrane': ItemType; static readonly 'phantomSpawnEgg': ItemType; static readonly 'piglinBannerPattern': ItemType; static readonly 'piglinBruteSpawnEgg': ItemType; static readonly 'piglinSpawnEgg': ItemType; static readonly 'pigSpawnEgg': ItemType; static readonly 'pillagerSpawnEgg': ItemType; static readonly 'pinkCandle': ItemType; static readonly 'pinkCandleCake': ItemType; static readonly 'pinkDye': ItemType; static readonly 'pinkGlazedTerracotta': ItemType; static readonly 'piston': ItemType; static readonly 'pistonArmCollision': ItemType; static readonly 'planks': ItemType; static readonly 'podzol': ItemType; static readonly 'pointedDripstone': ItemType; static readonly 'poisonousPotato': ItemType; static readonly 'polarBearSpawnEgg': ItemType; static readonly 'polishedAndesiteStairs': ItemType; static readonly 'polishedBasalt': ItemType; static readonly 'polishedBlackstone': ItemType; static readonly 'polishedBlackstoneBrickDoubleSlab': ItemType; static readonly 'polishedBlackstoneBricks': ItemType; static readonly 'polishedBlackstoneBrickSlab': ItemType; static readonly 'polishedBlackstoneBrickStairs': ItemType; static readonly 'polishedBlackstoneBrickWall': ItemType; static readonly 'polishedBlackstoneButton': ItemType; static readonly 'polishedBlackstoneDoubleSlab': ItemType; static readonly 'polishedBlackstonePressurePlate': ItemType; static readonly 'polishedBlackstoneSlab': ItemType; static readonly 'polishedBlackstoneStairs': ItemType; static readonly 'polishedBlackstoneWall': ItemType; static readonly 'polishedDeepslate': ItemType; static readonly 'polishedDeepslateDoubleSlab': ItemType; static readonly 'polishedDeepslateSlab': ItemType; static readonly 'polishedDeepslateStairs': ItemType; static readonly 'polishedDeepslateWall': ItemType; static readonly 'polishedDioriteStairs': ItemType; static readonly 'polishedGraniteStairs': ItemType; static readonly 'poppedChorusFruit': ItemType; static readonly 'porkchop': ItemType; static readonly 'portal': ItemType; static readonly 'potato': ItemType; static readonly 'potatoes': ItemType; static readonly 'potion': ItemType; static readonly 'powderSnow': ItemType; static readonly 'powderSnowBucket': ItemType; static readonly 'poweredComparator': ItemType; static readonly 'poweredRepeater': ItemType; static readonly 'prismarine': ItemType; static readonly 'prismarineBricksStairs': ItemType; static readonly 'prismarineCrystals': ItemType; static readonly 'prismarineShard': ItemType; static readonly 'prismarineStairs': ItemType; static readonly 'pufferfish': ItemType; static readonly 'pufferfishBucket': ItemType; static readonly 'pufferfishSpawnEgg': ItemType; static readonly 'pumpkin': ItemType; static readonly 'pumpkinPie': ItemType; static readonly 'pumpkinSeeds': ItemType; static readonly 'pumpkinStem': ItemType; static readonly 'purpleCandle': ItemType; static readonly 'purpleCandleCake': ItemType; static readonly 'purpleDye': ItemType; static readonly 'purpleGlazedTerracotta': ItemType; static readonly 'purpurBlock': ItemType; static readonly 'purpurStairs': ItemType; static readonly 'quartz': ItemType; static readonly 'quartzBlock': ItemType; static readonly 'quartzBricks': ItemType; static readonly 'quartzOre': ItemType; static readonly 'quartzStairs': ItemType; static readonly 'rabbit': ItemType; static readonly 'rabbitFoot': ItemType; static readonly 'rabbitHide': ItemType; static readonly 'rabbitSpawnEgg': ItemType; static readonly 'rabbitStew': ItemType; static readonly 'rail': ItemType; static readonly 'rapidFertilizer': ItemType; static readonly 'ravagerSpawnEgg': ItemType; static readonly 'rawCopper': ItemType; static readonly 'rawCopperBlock': ItemType; static readonly 'rawGold': ItemType; static readonly 'rawGoldBlock': ItemType; static readonly 'rawIron': ItemType; static readonly 'rawIronBlock': ItemType; static readonly 'realDoubleStoneSlab': ItemType; static readonly 'realDoubleStoneSlab2': ItemType; static readonly 'realDoubleStoneSlab3': ItemType; static readonly 'realDoubleStoneSlab4': ItemType; static readonly 'redCandle': ItemType; static readonly 'redCandleCake': ItemType; static readonly 'redDye': ItemType; static readonly 'redFlower': ItemType; static readonly 'redGlazedTerracotta': ItemType; static readonly 'redMushroom': ItemType; static readonly 'redMushroomBlock': ItemType; static readonly 'redNetherBrick': ItemType; static readonly 'redNetherBrickStairs': ItemType; static readonly 'redSandstone': ItemType; static readonly 'redSandstoneStairs': ItemType; static readonly 'redstone': ItemType; static readonly 'redstoneBlock': ItemType; static readonly 'redstoneLamp': ItemType; static readonly 'redstoneOre': ItemType; static readonly 'redstoneTorch': ItemType; static readonly 'redstoneWire': ItemType; static readonly 'reinforcedDeepslate': ItemType; static readonly 'repeater': ItemType; static readonly 'repeatingCommandBlock': ItemType; static readonly 'reserved6': ItemType; static readonly 'respawnAnchor': ItemType; static readonly 'rottenFlesh': ItemType; static readonly 'saddle': ItemType; static readonly 'salmon': ItemType; static readonly 'salmonBucket': ItemType; static readonly 'salmonSpawnEgg': ItemType; static readonly 'sand': ItemType; static readonly 'sandstone': ItemType; static readonly 'sandstoneStairs': ItemType; static readonly 'sapling': ItemType; static readonly 'scaffolding': ItemType; static readonly 'sculk': ItemType; static readonly 'sculkCatalyst': ItemType; static readonly 'sculkSensor': ItemType; static readonly 'sculkShrieker': ItemType; static readonly 'sculkVein': ItemType; static readonly 'scute': ItemType; static readonly 'seagrass': ItemType; static readonly 'seaLantern': ItemType; static readonly 'seaPickle': ItemType; static readonly 'shears': ItemType; static readonly 'sheepSpawnEgg': ItemType; static readonly 'shield': ItemType; static readonly 'shroomlight': ItemType; static readonly 'shulkerBox': ItemType; static readonly 'shulkerShell': ItemType; static readonly 'shulkerSpawnEgg': ItemType; static readonly 'silverfishSpawnEgg': ItemType; static readonly 'silverGlazedTerracotta': ItemType; static readonly 'skeletonHorseSpawnEgg': ItemType; static readonly 'skeletonSpawnEgg': ItemType; static readonly 'skull': ItemType; static readonly 'skullBannerPattern': ItemType; static readonly 'slime': ItemType; static readonly 'slimeBall': ItemType; static readonly 'slimeSpawnEgg': ItemType; static readonly 'smallAmethystBud': ItemType; static readonly 'smallDripleafBlock': ItemType; static readonly 'smithingTable': ItemType; static readonly 'smoker': ItemType; static readonly 'smoothBasalt': ItemType; static readonly 'smoothQuartzStairs': ItemType; static readonly 'smoothRedSandstoneStairs': ItemType; static readonly 'smoothSandstoneStairs': ItemType; static readonly 'smoothStone': ItemType; static readonly 'snow': ItemType; static readonly 'snowball': ItemType; static readonly 'snowLayer': ItemType; static readonly 'soulCampfire': ItemType; static readonly 'soulFire': ItemType; static readonly 'soulLantern': ItemType; static readonly 'soulSand': ItemType; static readonly 'soulSoil': ItemType; static readonly 'soulTorch': ItemType; static readonly 'sparkler': ItemType; static readonly 'spawnEgg': ItemType; static readonly 'spiderEye': ItemType; static readonly 'spiderSpawnEgg': ItemType; static readonly 'splashPotion': ItemType; static readonly 'sponge': ItemType; static readonly 'sporeBlossom': ItemType; static readonly 'spruceBoat': ItemType; static readonly 'spruceButton': ItemType; static readonly 'spruceChestBoat': ItemType; static readonly 'spruceDoor': ItemType; static readonly 'spruceFenceGate': ItemType; static readonly 'sprucePressurePlate': ItemType; static readonly 'spruceSign': ItemType; static readonly 'spruceStairs': ItemType; static readonly 'spruceStandingSign': ItemType; static readonly 'spruceTrapdoor': ItemType; static readonly 'spruceWallSign': ItemType; static readonly 'spyglass': ItemType; static readonly 'squidSpawnEgg': ItemType; static readonly 'stainedGlass': ItemType; static readonly 'stainedGlassPane': ItemType; static readonly 'stainedHardenedClay': ItemType; static readonly 'standingBanner': ItemType; static readonly 'standingSign': ItemType; static readonly 'stick': ItemType; static readonly 'stickyPiston': ItemType; static readonly 'stickyPistonArmCollision': ItemType; static readonly 'stone': ItemType; static readonly 'stoneAxe': ItemType; static readonly 'stonebrick': ItemType; static readonly 'stoneBrickStairs': ItemType; static readonly 'stoneButton': ItemType; static readonly 'stonecutter': ItemType; static readonly 'stonecutterBlock': ItemType; static readonly 'stoneHoe': ItemType; static readonly 'stonePickaxe': ItemType; static readonly 'stonePressurePlate': ItemType; static readonly 'stoneShovel': ItemType; static readonly 'stoneStairs': ItemType; static readonly 'stoneSword': ItemType; static readonly 'straySpawnEgg': ItemType; static readonly 'striderSpawnEgg': ItemType; static readonly 'string': ItemType; static readonly 'strippedAcaciaLog': ItemType; static readonly 'strippedBirchLog': ItemType; static readonly 'strippedCrimsonHyphae': ItemType; static readonly 'strippedCrimsonStem': ItemType; static readonly 'strippedDarkOakLog': ItemType; static readonly 'strippedJungleLog': ItemType; static readonly 'strippedOakLog': ItemType; static readonly 'strippedSpruceLog': ItemType; static readonly 'strippedWarpedHyphae': ItemType; static readonly 'strippedWarpedStem': ItemType; static readonly 'structureBlock': ItemType; static readonly 'structureVoid': ItemType; static readonly 'sugar': ItemType; static readonly 'sugarCane': ItemType; static readonly 'suspiciousStew': ItemType; static readonly 'sweetBerries': ItemType; static readonly 'sweetBerryBush': ItemType; static readonly 'tadpoleBucket': ItemType; static readonly 'tadpoleSpawnEgg': ItemType; static readonly 'tallgrass': ItemType; static readonly 'target': ItemType; static readonly 'tintedGlass': ItemType; static readonly 'tnt': ItemType; static readonly 'tntMinecart': ItemType; static readonly 'torch': ItemType; static readonly 'totemOfUndying': ItemType; static readonly 'trapdoor': ItemType; static readonly 'trappedChest': ItemType; static readonly 'trident': ItemType; static readonly 'tripWire': ItemType; static readonly 'tripwireHook': ItemType; static readonly 'tropicalFish': ItemType; static readonly 'tropicalFishBucket': ItemType; static readonly 'tropicalFishSpawnEgg': ItemType; static readonly 'tuff': ItemType; static readonly 'turtleEgg': ItemType; static readonly 'turtleHelmet': ItemType; static readonly 'turtleSpawnEgg': ItemType; static readonly 'twistingVines': ItemType; static readonly 'underwaterTorch': ItemType; static readonly 'undyedShulkerBox': ItemType; static readonly 'unknown': ItemType; static readonly 'unlitRedstoneTorch': ItemType; static readonly 'unpoweredComparator': ItemType; static readonly 'unpoweredRepeater': ItemType; static readonly 'verdantFroglight': ItemType; static readonly 'vexSpawnEgg': ItemType; static readonly 'villagerSpawnEgg': ItemType; static readonly 'vindicatorSpawnEgg': ItemType; static readonly 'vine': ItemType; static readonly 'wallBanner': ItemType; static readonly 'wallSign': ItemType; static readonly 'wanderingTraderSpawnEgg': ItemType; static readonly 'wardenSpawnEgg': ItemType; static readonly 'warpedButton': ItemType; static readonly 'warpedDoor': ItemType; static readonly 'warpedDoubleSlab': ItemType; static readonly 'warpedFence': ItemType; static readonly 'warpedFenceGate': ItemType; static readonly 'warpedFungus': ItemType; static readonly 'warpedFungusOnAStick': ItemType; static readonly 'warpedHyphae': ItemType; static readonly 'warpedNylium': ItemType; static readonly 'warpedPlanks': ItemType; static readonly 'warpedPressurePlate': ItemType; static readonly 'warpedRoots': ItemType; static readonly 'warpedSign': ItemType; static readonly 'warpedSlab': ItemType; static readonly 'warpedStairs': ItemType; static readonly 'warpedStandingSign': ItemType; static readonly 'warpedStem': ItemType; static readonly 'warpedTrapdoor': ItemType; static readonly 'warpedWallSign': ItemType; static readonly 'warpedWartBlock': ItemType; static readonly 'water': ItemType; static readonly 'waterBucket': ItemType; static readonly 'waterlily': ItemType; static readonly 'waxedCopper': ItemType; static readonly 'waxedCutCopper': ItemType; static readonly 'waxedCutCopperSlab': ItemType; static readonly 'waxedCutCopperStairs': ItemType; static readonly 'waxedDoubleCutCopperSlab': ItemType; static readonly 'waxedExposedCopper': ItemType; static readonly 'waxedExposedCutCopper': ItemType; static readonly 'waxedExposedCutCopperSlab': ItemType; static readonly 'waxedExposedCutCopperStairs': ItemType; static readonly 'waxedExposedDoubleCutCopperSlab': ItemType; static readonly 'waxedOxidizedCopper': ItemType; static readonly 'waxedOxidizedCutCopper': ItemType; static readonly 'waxedOxidizedCutCopperSlab': ItemType; static readonly 'waxedOxidizedCutCopperStairs': ItemType; static readonly 'waxedOxidizedDoubleCutCopperSlab': ItemType; static readonly 'waxedWeatheredCopper': ItemType; static readonly 'waxedWeatheredCutCopper': ItemType; static readonly 'waxedWeatheredCutCopperSlab': ItemType; static readonly 'waxedWeatheredCutCopperStairs': ItemType; static readonly 'waxedWeatheredDoubleCutCopperSlab': ItemType; static readonly 'weatheredCopper': ItemType; static readonly 'weatheredCutCopper': ItemType; static readonly 'weatheredCutCopperSlab': ItemType; static readonly 'weatheredCutCopperStairs': ItemType; static readonly 'weatheredDoubleCutCopperSlab': ItemType; static readonly 'web': ItemType; static readonly 'weepingVines': ItemType; static readonly 'wheat': ItemType; static readonly 'wheatSeeds': ItemType; static readonly 'whiteCandle': ItemType; static readonly 'whiteCandleCake': ItemType; static readonly 'whiteDye': ItemType; static readonly 'whiteGlazedTerracotta': ItemType; static readonly 'witchSpawnEgg': ItemType; static readonly 'witherRose': ItemType; static readonly 'witherSkeletonSpawnEgg': ItemType; static readonly 'wolfSpawnEgg': ItemType; static readonly 'wood': ItemType; static readonly 'woodenAxe': ItemType; static readonly 'woodenButton': ItemType; static readonly 'woodenDoor': ItemType; static readonly 'woodenHoe': ItemType; static readonly 'woodenPickaxe': ItemType; static readonly 'woodenPressurePlate': ItemType; static readonly 'woodenShovel': ItemType; static readonly 'woodenSlab': ItemType; static readonly 'woodenSword': ItemType; static readonly 'wool': ItemType; static readonly 'writableBook': ItemType; static readonly 'writtenBook': ItemType; static readonly 'yellowCandle': ItemType; static readonly 'yellowCandleCake': ItemType; static readonly 'yellowDye': ItemType; static readonly 'yellowFlower': ItemType; static readonly 'yellowGlazedTerracotta': ItemType; static readonly 'zoglinSpawnEgg': ItemType; static readonly 'zombieHorseSpawnEgg': ItemType; static readonly 'zombiePigmanSpawnEgg': ItemType; static readonly 'zombieSpawnEgg': ItemType; static readonly 'zombieVillagerSpawnEgg': ItemType; protected constructor(); }
  export class MolangVariableMap { constructor(); setColorRGB(variableName: string, color: Color): MolangVariableMap; setColorRGBA(variableName: string, color: Color): MolangVariableMap; setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap; setVector3(variableName: string, vector: Vector): MolangVariableMap; }
  export class MusicOptions { 'fade': number; 'location': Location; 'loop': boolean; 'volume': number; constructor(); }
  export class NavigationResult { readonly 'isFullPath': boolean; readonly 'path': BlockLocation[]; protected constructor(); }
  export class NumberRange { 'max': number; 'min': number; next(): number; protected constructor(); }
  export class PistonActivateEvent extends BlockEvent { readonly 'block': Block; readonly 'dimension': Dimension; readonly 'isExpanding': boolean; readonly 'piston': BlockPistonComponent; protected constructor(); }
  export class PistonActivateEventSignal { subscribe(callback: (arg: PistonActivateEvent) => void): (arg: PistonActivateEvent) => void; unsubscribe(callback: (arg: PistonActivateEvent) => void): void; protected constructor(); }
  export class PitchYawRotation { 'pitch': number; 'yaw': number; protected constructor(); }
  export class Player extends Entity { readonly 'bodyRotation': number; readonly 'dimension': Dimension; readonly 'headLocation': Location; readonly 'id': string; 'isSneaking': boolean; readonly 'location': Location; readonly 'name': string; 'nameTag': string; 'selectedSlot': number; 'target': Entity; readonly 'velocity': Vector; readonly 'viewVector': Vector; addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void; addTag(tag: string): boolean; getBlockFromViewVector(options?: BlockRaycastOptions): Block; getComponent(componentId: string): IEntityComponent; getComponents(): IEntityComponent[]; getEffect(effectType: EffectType): Effect; getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[]; getItemCooldown(itemCategory: string): number; getTags(): string[]; hasComponent(componentId: string): boolean; hasTag(tag: string): boolean; kill(): void; playSound(soundID: string, soundOptions?: SoundOptions): void; postClientMessage(id: string, value: string): void; removeTag(tag: string): boolean; runCommand(commandString: string): any; setVelocity(velocity: Vector): void; startItemCooldown(itemCategory: string, tickDuration: number): void; teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number): void; teleportFacing(location: Location, dimension: Dimension, facingLocation: Location): void; triggerEvent(eventName: string): void; protected constructor(); }
  export class PlayerInventoryComponentContainer extends InventoryComponentContainer { readonly 'emptySlotsCount': number; readonly 'size': number; addItem(itemStack: ItemStack): void; getItem(slot: number): ItemStack; setItem(slot: number, itemStack: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean; protected constructor(); }
  export class PlayerIterator implements Iterable<Player> { [Symbol.iterator](): Iterator<Player>; next(): IteratorResult<Player>; protected constructor(); }
  export class PlayerJoinEvent { 'player': Player; protected constructor(); }
  export class PlayerJoinEventSignal { subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void; unsubscribe(callback: (arg: PlayerJoinEvent) => void): void; protected constructor(); }
  export class PlayerLeaveEvent { readonly 'playerName': string; protected constructor(); }
  export class PlayerLeaveEventSignal { subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void; unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void; protected constructor(); }
  export class SculkSpreader { addCursorsWithOffset(offset: BlockLocation, charge: number): void; getCursorPosition(index: number): BlockLocation; getMaxCharge(): number; getNumberOfCursors(): number; getTotalCharge(): number; protected constructor(); }
  export class Seat { 'lockRiderRotation': number; 'maxRiderCount': number; 'minRiderCount': number; 'position': Location; protected constructor(); }
  export class ServerMessageSignal { subscribe(callback: (arg: MessageReceiveEvent) => void): (arg: MessageReceiveEvent) => void; unsubscribe(callback: (arg: MessageReceiveEvent) => void): void; protected constructor(); }
  export class SoundOptions { 'location': Location; 'pitch': number; 'volume': number; constructor(); }
  export class StringBlockProperty extends IBlockProperty { readonly 'name': string; readonly 'validValues': string[]; 'value': string; protected constructor(); }
  export class TickEvent { readonly 'currentTick': number; readonly 'deltaTime': number; protected constructor(); }
  export class TickEventSignal { subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void; unsubscribe(callback: (arg: TickEvent) => void): void; protected constructor(); }
  export class Trigger { 'eventName': string; constructor(eventName: string); }
  export class Vector { 'x': number; 'y': number; 'z': number; static readonly 'back': Vector; static readonly 'down': Vector; static readonly 'forward': Vector; static readonly 'left': Vector; static readonly 'one': Vector; static readonly 'right': Vector; static readonly 'up': Vector; static readonly 'zero': Vector; static add(a: Vector, b: Vector): Vector; constructor(x: number, y: number, z: number); static cross(a: Vector, b: Vector): Vector; static distance(a: Vector, b: Vector): number; static divide(a: Vector, b: number | Vector): Vector; equals(other: Vector): boolean; length(): number; static lerp(a: Vector, b: Vector, t: number): Vector; static max(a: Vector, b: Vector): Vector; static min(a: Vector, b: Vector): Vector; static multiply(a: Vector, b: number | Vector): Vector; normalized(): Vector; static slerp(a: Vector, b: Vector, s: number): Vector; static subtract(a: Vector, b: Vector): Vector; }
  export class WeatherChangeEvent { readonly 'dimension': string; readonly 'lightning': boolean; readonly 'raining': boolean; protected constructor(); }
  export class WeatherChangeEventSignal { subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void; unsubscribe(callback: (arg: WeatherChangeEvent) => void): void; protected constructor(); }
  export class World { readonly 'events': Events; broadcastClientMessage(id: string, value: string): void; getDimension(dimensionId: string): Dimension; getPlayers(options?: EntityQueryOptions): PlayerIterator; playMusic(trackID: string, musicOptions?: MusicOptions): void; playSound(soundID: string, soundOptions?: SoundOptions): void; queueMusic(trackID: string, musicOptions?: MusicOptions): void; stopMusic(): void; protected constructor(); }
  export const TicksPerSecond = 20; export const world: World;
}`