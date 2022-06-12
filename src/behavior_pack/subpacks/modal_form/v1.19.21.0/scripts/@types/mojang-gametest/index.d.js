export default `declare enum FluidType {
    water = 0,
    lava = 1,
    powderSnow = 2,
    potion = 3,
}
declare class FenceConnectivity {
    readonly 'east': boolean;
    readonly 'north': boolean;
    readonly 'south': boolean;
    readonly 'west': boolean;
}
declare class GameTestSequence {
    thenExecute(callback: () => void): GameTestSequence;
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    thenFail(errorMessage: string): void;
    thenIdle(delayTicks: number): GameTestSequence;
    thenSucceed(): void;
    thenWait(callback: () => void): GameTestSequence;
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
}
declare class RegistrationBuilder {
    batch(batchName: 'night' | 'day'): RegistrationBuilder;
    maxAttempts(attemptCount: number): RegistrationBuilder;
    maxTicks(tickCount: number): RegistrationBuilder;
    padding(paddingBlocks: number): RegistrationBuilder;
    required(isRequired: boolean): RegistrationBuilder;
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    rotateTest(rotate: boolean): RegistrationBuilder;
    setupTicks(tickCount: number): RegistrationBuilder;
    structureName(structureName: string): RegistrationBuilder;
    tag(tag: string): RegistrationBuilder;
}
declare class SimulatedPlayer extends Player {
    readonly 'bodyRotation': number;
    readonly 'dimension': Dimension;
    readonly 'headLocation': Location;
    readonly 'headRotation': XYRotation;
    readonly 'id': string;
    'isSneaking': boolean;
    readonly 'location': Location;
    readonly 'name': string;
    'nameTag': string;
    'selectedSlot': number;
    'target': Entity;
    readonly 'velocity': Vector;
    readonly 'viewVector': Vector;
    addEffect(effectType: EffectType, duration: number, amplifier: number): void;
    addTag(tag: string): boolean;
    attack(): boolean;
    attackEntity(entity: Entity): boolean;
    breakBlock(blockLocation: BlockLocation, direction?: number): boolean;
    getBlockFromViewVector(options?: BlockRaycastOptions): Block;
    getComponent: EntityComponents;
    getComponents(): IEntityComponent[];
    getEffect(effectType: EffectType): Effect;
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    getItemCooldown(itemCategory: string): number;
    getTags(): string[];
    giveItem(itemStack: ItemStack, selectSlot?: boolean): boolean;
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    interact(): boolean;
    interactWithBlock(blockLocation: BlockLocation, direction?: number): boolean;
    interactWithEntity(entity: Entity): boolean;
    jump(): boolean;
    kill(): void;
    lookAtBlock(blockLocation: BlockLocation): void;
    lookAtEntity(entity: Entity): void;
    lookAtLocation(location: Location): void;
    move(westEast: number, northSouth: number, speed?: number): void;
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    moveToBlock(blockLocation: BlockLocation, speed?: number): void;
    moveToLocation(location: Location, speed?: number): void;
    navigateToBlock(blockLocation: BlockLocation, speed?: number): NavigationResult;
    navigateToEntity(entity: Entity, speed?: number): NavigationResult;
    navigateToLocation(location: Location, speed?: number): NavigationResult;
    navigateToLocations(locations: Location[], speed?: number): void;
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    removeTag(tag: string): boolean;
    rotateBody(angleInDegrees: number): void;
    runCommand(commandString: string): any;
    setBodyRotation(angleInDegrees: number): void;
    setGameMode(gameMode: GameMode): void;
    setItem(itemStack: ItemStack, slot: number, selectSlot?: boolean): boolean;
    setVelocity(velocity: Vector): void;
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    stopBreakingBlock(): void;
    stopInteracting(): void;
    stopMoving(): void;
    stopUsingItem(): void;
    teleport(
        location: Location,
        dimension: Dimension,
        xRotation: number,
        yRotation: number,
    ): void;
    teleportFacing(
        location: Location,
        dimension: Dimension,
        facingLocation: Location,
    ): void;
    triggerEvent(eventName: string): void;
    useItem(itemStack: ItemStack): boolean;
    useItemInSlot(slot: number): boolean;
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: BlockLocation,
        direction?: number,
        faceLocationX?: number,
        faceLocationY?: number,
    ): boolean;
    useItemOnBlock(
        itemStack: ItemStack,
        blockLocation: BlockLocation,
        direction?: number,
        faceLocationX?: number,
        faceLocationY?: number,
    ): boolean;
}
declare class Tags {
    static readonly 'suiteAll' = 'suite:all';
    static readonly 'suiteDebug' = 'suite:debug';
    static readonly 'suiteDefault' = 'suite:default';
    static readonly 'suiteDisabled' = 'suite:disabled';
}
declare class Test {
    assert(condition: boolean, message: string): void;
    assertBlockPresent(
        blockType: BlockType,
        blockLocation: BlockLocation,
        isPresent?: boolean,
    ): void;
    assertBlockState(
        blockLocation: BlockLocation,
        callback: (arg: Block) => boolean,
    ): void;
    assertCanReachLocation(
        mob: Entity,
        blockLocation: BlockLocation,
        canReach?: boolean,
    ): void;
    assertContainerContains(itemStack: ItemStack, blockLocation: BlockLocation): void;
    assertContainerEmpty(blockLocation: BlockLocation): void;
    assertEntityHasArmor(
        entityTypeIdentifier: string,
        armorSlot: number,
        armorName: string,
        armorData: number,
        blockLocation: BlockLocation,
        hasArmor?: boolean,
    ): void;
    assertEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: BlockLocation,
        hasComponent?: boolean,
    ): void;
    assertEntityInstancePresent(
        entity: Entity,
        blockLocation: BlockLocation,
        isPresent?: boolean,
    ): void;
    assertEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: BlockLocation,
        isPresent?: boolean,
    ): void;
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    assertEntityState(
        blockLocation: BlockLocation,
        entityTypeIdentifier: string,
        callback: (arg: Entity) => boolean,
    ): void;
    assertEntityTouching(entityTypeIdentifier: string, location: Location, isTouching?: boolean): void;
    assertIsWaterlogged(blockLocation: BlockLocation, isWaterlogged?: boolean): void;
    assertItemEntityCountIs(
        itemType: ItemType,
        blockLocation: BlockLocation,
        searchDistance: number,
        count: number,
    ): void;
    assertItemEntityPresent(
        itemType: ItemType,
        blockLocation: BlockLocation,
        searchDistance: number,
        isPresent?: boolean,
    ): void;
    assertRedstonePower(blockLocation: BlockLocation, power: number): void;
    fail(errorMessage: string): void;
    failIf(callback: () => void): void;
    getBlock(blockLocation: BlockLocation): Block;
    getDimension(): Dimension;
    getFenceConnectivity(blockLocation: BlockLocation): FenceConnectivity;
    getTestDirection(): Direction;
    idle(tickDelay: number): Promise<void>;
    killAllEntities(): void;
    pressButton(blockLocation: BlockLocation): void;
    print(text: string): void;
    pullLever(blockLocation: BlockLocation): void;
    pulseRedstone(blockLocation: BlockLocation, duration: number): void;
    relativeBlockLocation(worldBlockLocation: BlockLocation): BlockLocation;
    relativeLocation(worldLocation: Location): Location;
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    rotateDirection(direction: Direction): Direction;
    rotateVector(vector: Vector): Vector;
    runAfterDelay(delayTicks: number, callback: () => void): void;
    runAtTickTime(tick: number, callback: () => void): void;
    setBlockPermutation(
        blockData: BlockPermutation,
        blockLocation: BlockLocation,
    ): void;
    setBlockType(blockType: BlockType, blockLocation: BlockLocation): void;
    setFluidContainer(location: BlockLocation, type: number): void;
    setTntFuse(entity: Entity, fuseLength: number): void;
    spawn(entityTypeIdentifier: string, blockLocation: BlockLocation): Entity;
    spawnAtLocation(entityTypeIdentifier: string, location: Location): Entity;
    spawnItem(itemStack: ItemStack, location: Location): Entity;
    spawnSimulatedPlayer(
        blockLocation: BlockLocation,
        name?: string,
        gameMode?: GameMode,
    ): SimulatedPlayer;
    spawnWithoutBehaviors(
        entityTypeIdentifier: string,
        blockLocation: BlockLocation,
    ): Entity;
    spawnWithoutBehaviorsAtLocation(
        entityTypeIdentifier: string,
        location: Location,
    ): Entity;
    spreadFromFaceTowardDirection(
        blockLocation: BlockLocation,
        fromFace: Direction,
        direction: Direction,
    ): void;
    startSequence(): GameTestSequence;
    succeed(): void;
    succeedIf(callback: () => void): void;
    succeedOnTick(tick: number): void;
    succeedOnTickWhen(tick: number, callback: () => void): void;
    succeedWhen(callback: () => void): void;
    succeedWhenBlockPresent(
        blockType: BlockType,
        blockLocation: BlockLocation,
        isPresent?: boolean,
    ): void;
    succeedWhenEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: BlockLocation,
        hasComponent: boolean,
    ): void;
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: BlockLocation,
        isPresent?: boolean,
    ): void;
    triggerInternalBlockEvent(
        blockLocation: BlockLocation,
        event: string,
        eventParameters?: number[],
    ): void;
    until(callback: () => void): Promise<void>;
    walkTo(mob: Entity, blockLocation: BlockLocation, speedModifier?: number): void;
    walkToLocation(mob: Entity, location: Location, speedModifier?: number): void;
    worldBlockLocation(relativeBlockLocation: BlockLocation): BlockLocation;
    worldLocation(relativeLocation: Location): Location;
}
declare function register(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => void,
): RegistrationBuilder;
declare function registerAsync(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => Promise<void>,
): RegistrationBuilder;`

export const Namespace = `declare namespace mojanggametest {
    export enum FluidType { water = 0, lava = 1, powderSnow = 2, potion = 3, }
    export class FenceConnectivity { readonly 'east': boolean; readonly 'north': boolean; readonly 'south': boolean; readonly 'west': boolean; }
    export class GameTestSequence { thenExecute(callback: () => void): GameTestSequence; thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence; thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence; thenFail(errorMessage: string): void; thenIdle(delayTicks: number): GameTestSequence; thenSucceed(): void; thenWait(callback: () => void): GameTestSequence; thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence; }
    export class RegistrationBuilder { batch(batchName: 'night' | 'day'): RegistrationBuilder; maxAttempts(attemptCount: number): RegistrationBuilder; maxTicks(tickCount: number): RegistrationBuilder; padding(paddingBlocks: number): RegistrationBuilder; required(isRequired: boolean): RegistrationBuilder; requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder; rotateTest(rotate: boolean): RegistrationBuilder; setupTicks(tickCount: number): RegistrationBuilder; structureName(structureName: string): RegistrationBuilder; tag(tag: string): RegistrationBuilder; }
    export class SimulatedPlayer extends mojangminecraft.Player { readonly 'bodyRotation': number; readonly 'dimension': mojangminecraft.Dimension; readonly 'headLocation': mojangminecraft.Location; readonly 'headRotation': mojangminecraft.XYRotation; readonly 'id': string; 'isSneaking': boolean; readonly 'location': mojangminecraft.Location; readonly 'name': string; 'nameTag': string; 'selectedSlot': number; 'target': mojangminecraft.Entity; readonly 'velocity': mojangminecraft.Vector; readonly 'viewVector': mojangminecraft.Vector; addEffect(effectType: mojangminecraft.EffectType, duration: number, amplifier: number): void; addTag(tag: string): boolean; attack(): boolean; attackEntity(entity: mojangminecraft.Entity): boolean; breakBlock(blockLocation: mojangminecraft.BlockLocation, direction?: number): boolean; getBlockFromViewVector(options?: mojangminecraft.BlockRaycastOptions): mojangminecraft.Block; getComponent: EntityComponents; getComponents(): mojangminecraft.IEntityComponent[]; getEffect(effectType: mojangminecraft.EffectType): mojangminecraft.Effect; getEntitiesFromViewVector(options?: mojangminecraft.EntityRaycastOptions): mojangminecraft.Entity[]; getItemCooldown(itemCategory: string): number; getTags(): string[]; giveItem(itemStack: mojangminecraft.ItemStack, selectSlot?: boolean): boolean; hasComponent(componentId: string): boolean; hasTag(tag: string): boolean; interact(): boolean; interactWithBlock(blockLocation: mojangminecraft.BlockLocation, direction?: number): boolean; interactWithEntity(entity: mojangminecraft.Entity): boolean; jump(): boolean; kill(): void; lookAtBlock(blockLocation: mojangminecraft.BlockLocation): void; lookAtEntity(entity: mojangminecraft.Entity): void; lookAtLocation(location: mojangminecraft.Location): void; move(westEast: number, northSouth: number, speed?: number): void; moveRelative(leftRight: number, backwardForward: number, speed?: number): void; moveToBlock(blockLocation: mojangminecraft.BlockLocation, speed?: number): void; moveToLocation(location: mojangminecraft.Location, speed?: number): void; navigateToBlock(blockLocation: mojangminecraft.BlockLocation, speed?: number): mojangminecraft.NavigationResult; navigateToEntity(entity: mojangminecraft.Entity, speed?: number): mojangminecraft.NavigationResult; navigateToLocation(location: mojangminecraft.Location, speed?: number): mojangminecraft.NavigationResult; navigateToLocations(locations: mojangminecraft.Location[], speed?: number): void; playSound(soundID: string, soundOptions?: mojangminecraft.SoundOptions): void; removeTag(tag: string): boolean; rotateBody(angleInDegrees: number): void; runCommand(commandString: string): any; setBodyRotation(angleInDegrees: number): void; setGameMode(gameMode: mojangminecraft.GameMode): void; setItem(itemStack: mojangminecraft.ItemStack, slot: number, selectSlot?: boolean): boolean; setVelocity(velocity: mojangminecraft.Vector): void; startItemCooldown(itemCategory: string, tickDuration: number): void; stopBreakingBlock(): void; stopInteracting(): void; stopMoving(): void; stopUsingItem(): void; teleport(location: mojangminecraft.Location, dimension: mojangminecraft.Dimension, xRotation: number, yRotation: number,): void; teleportFacing(location: mojangminecraft.Location, dimension: mojangminecraft.Dimension, facingLocation: mojangminecraft.Location,): void; triggerEvent(eventName: string): void; useItem(itemStack: mojangminecraft.ItemStack): boolean; useItemInSlot(slot: number): boolean; useItemInSlotOnBlock(slot: number, blockLocation: mojangminecraft.BlockLocation, direction?: number, faceLocationX?: number, faceLocationY?: number,): boolean; useItemOnBlock(itemStack: mojangminecraft.ItemStack, blockLocation: mojangminecraft.BlockLocation, direction?: number, faceLocationX?: number, faceLocationY?: number,): boolean; }
    export class Tags { static readonly 'suiteAll' = 'suite:all'; static readonly 'suiteDebug' = 'suite:debug'; static readonly 'suiteDefault' = 'suite:default'; static readonly 'suiteDisabled' = 'suite:disabled'; }
    export class Test { assert(condition: boolean, message: string): void; assertBlockPresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean,): void; assertBlockState(blockLocation: mojangminecraft.BlockLocation, callback: (arg: mojangminecraft.Block) => boolean,): void; assertCanReachLocation(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, canReach?: boolean,): void; assertContainerContains(itemStack: mojangminecraft.ItemStack, blockLocation: mojangminecraft.BlockLocation): void; assertContainerEmpty(blockLocation: mojangminecraft.BlockLocation): void; assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: mojangminecraft.BlockLocation, hasArmor?: boolean,): void; assertEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojangminecraft.BlockLocation, hasComponent?: boolean,): void; assertEntityInstancePresent(entity: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean,): void; assertEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean,): void; assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void; assertEntityState(blockLocation: mojangminecraft.BlockLocation, entityTypeIdentifier: string, callback: (arg: mojangminecraft.Entity) => boolean,): void; assertEntityTouching(entityTypeIdentifier: string, location: mojangminecraft.Location, isTouching?: boolean): void; assertIsWaterlogged(blockLocation: mojangminecraft.BlockLocation, isWaterlogged?: boolean): void; assertItemEntityCountIs(itemType: mojangminecraft.ItemType, blockLocation: mojangminecraft.BlockLocation, searchDistance: number, count: number,): void; assertItemEntityPresent(itemType: mojangminecraft.ItemType, blockLocation: mojangminecraft.BlockLocation, searchDistance: number, isPresent?: boolean,): void; assertRedstonePower(blockLocation: mojangminecraft.BlockLocation, power: number): void; fail(errorMessage: string): void; failIf(callback: () => void): void; getBlock(blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Block; getDimension(): mojangminecraft.Dimension; getFenceConnectivity(blockLocation: mojangminecraft.BlockLocation): FenceConnectivity; getTestDirection(): mojangminecraft.Direction; idle(tickDelay: number): Promise<void>; killAllEntities(): void; pressButton(blockLocation: mojangminecraft.BlockLocation): void; print(text: string): void; pullLever(blockLocation: mojangminecraft.BlockLocation): void; pulseRedstone(blockLocation: mojangminecraft.BlockLocation, duration: number): void; relativeBlockLocation(worldBlockLocation: mojangminecraft.BlockLocation): mojangminecraft.BlockLocation; relativeLocation(worldLocation: mojangminecraft.Location): mojangminecraft.Location; removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void; rotateDirection(direction: mojangminecraft.Direction): mojangminecraft.Direction; rotateVector(vector: mojangminecraft.Vector): mojangminecraft.Vector; runAfterDelay(delayTicks: number, callback: () => void): void; runAtTickTime(tick: number, callback: () => void): void; setBlockPermutation(blockData: mojangminecraft.BlockPermutation, blockLocation: mojangminecraft.BlockLocation,): void; setBlockType(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation): void; setFluidContainer(location: mojangminecraft.BlockLocation, type: number): void; setTntFuse(entity: mojangminecraft.Entity, fuseLength: number): void; spawn(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Entity; spawnAtLocation(entityTypeIdentifier: string, location: mojangminecraft.Location): mojangminecraft.Entity; spawnItem(itemStack: mojangminecraft.ItemStack, location: mojangminecraft.Location): mojangminecraft.Entity; spawnSimulatedPlayer(blockLocation: mojangminecraft.BlockLocation, name?: string, gameMode?: mojangminecraft.GameMode,): SimulatedPlayer; spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation,): mojangminecraft.Entity; spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: mojangminecraft.Location,): mojangminecraft.Entity; spreadFromFaceTowardDirection(blockLocation: mojangminecraft.BlockLocation, fromFace: mojangminecraft.Direction, direction: mojangminecraft.Direction,): void; startSequence(): GameTestSequence; succeed(): void; succeedIf(callback: () => void): void; succeedOnTick(tick: number): void; succeedOnTickWhen(tick: number, callback: () => void): void; succeedWhen(callback: () => void): void; succeedWhenBlockPresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean,): void; succeedWhenEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojangminecraft.BlockLocation, hasComponent: boolean,): void; succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean,): void; triggerInternalBlockEvent(blockLocation: mojangminecraft.BlockLocation, event: string, eventParameters?: number[],): void; until(callback: () => void): Promise<void>; walkTo(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, speedModifier?: number): void; walkToLocation(mob: mojangminecraft.Entity, location: mojangminecraft.Location, speedModifier?: number): void; worldBlockLocation(relativeBlockLocation: mojangminecraft.BlockLocation): mojangminecraft.BlockLocation; worldLocation(relativeLocation: mojangminecraft.Location): mojangminecraft.Location; }
    export function register(testClassName: string, testName: string, testFunction: (arg: Test) => void,): RegistrationBuilder;
    export function registerAsync(testClassName: string, testName: string, testFunction: (arg: Test) => Promise<void>,): RegistrationBuilder;
}`