// Type definitions for Minecraft Bedrock Edition script APIs (experimental) 0.1
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
***************************************************************************** */

import * as mojangminecraft from "mojang-minecraft";

export const FluidType = {
  water: 0,
  lava: 1,
  powderSnow: 2,
  potion: 3
}
export class FenceConnectivity {
  "east";
  "north";
  "south";
  "west";
}
export class GameTestSequence {
  thenExecute(callback) {};
  thenExecuteAfter(delayTicks, callback) {};
  thenExecuteFor(tickCount, callback) {};
  thenFail(errorMessage) {};
  thenIdle(delayTicks) {};
  thenSucceed() {};
  thenWait(callback) {};
  thenWaitAfter(delayTicks, callback) {};
}
export class RegistrationBuilder {
  batch(batchName) {};
  maxAttempts(attemptCount) {};
  maxTicks(tickCount) {};
  padding(paddingBlocks) {};
  required(isRequired) {};
  requiredSuccessfulAttempts(attemptCount) {};
  rotateTest(rotate) {};
  setupTicks(tickCount) {};
  structureName(structureName) {};
  tag(tag) {};
}
export class SimulatedPlayer extends mojangminecraft.Player {
  "bodyRotation";
  "headRotation";
  "id";
  "isSneaking";
  "location";
  "name";
  "nameTag";
  "velocity";
  addEffect(effectType, duration, amplifier) {};
  attack() {};
  attackEntity(entity) {};
  destroyBlock(blockLocation, direction) {};
  getComponent(componentId) {};
  getComponents() {};
  getEffect(effectType) {};
  hasComponent(componentId) {};
  interact() {};
  interactWithBlock(blockLocation, direction) {};
  interactWithEntity(entity) {};
  jump() {};
  kill() {};
  lookAtBlock(blockLocation) {};
  lookAtEntity(entity) {};
  lookAtLocation(location) {};
  move(westEast, northSouth, speed) {};
  moveRelative(leftRight, backwardForward, speed) {};
  moveToBlock(blockLocation, speed) {};
  moveToLocation(location, speed) {};
  navigateToBlock(blockLocation, speed) {};
  navigateToEntity(entity, speed) {};
  navigateToLocation(location, speed) {};
  navigateToLocations(locations, speed) {};
  rotateBody(angleInDegrees) {};
  selectSlot(slot) {};
  setBodyRotation(angleInDegrees) {};
  stopDestroyingBlock() {};
  stopInteracting() {};
  stopMoving() {};
  stopUsingItem() {};
  triggerEvent(eventName) {};
  useItem(itemStack) {};
  useItemInSlot(slot) {};
  useItemInSlotOnBlock(slot, blockLocation, direction, faceLocationX, faceLocationY) {};
  useItemOnBlock(itemStack, blockLocation, direction, faceLocationX, faceLocationY) {};
}

export class Tags {
  static "suiteAll" = "suite:all";
  static "suiteDebug" = "suite:debug";
  static "suiteDefault" = "suite:default";
  static "suiteDisabled" = "suite:disabled";
}
export class Test {
  assert(condition, message) {};
  assertBlockPresent(blockType, blockLocation, isPresent) {};
  assertBlockState(blockLocation, callback) {};
  assertCanReachLocation(mob, blockLocation, canReach) {};
  assertContainerContains(itemStack, blockLocation) {};
  assertContainerEmpty(blockLocation) {};
  assertEntityHasArmor(entityTypeIdentifier, armorSlot, armorName, armorData, blockLocation, hasArmor) {};
  assertEntityHasComponent(entityTypeIdentifier, componentIdentifier, blockLocation, hasComponent) {};
  assertEntityInstancePresent(entity, blockLocation, isPresent) {};
  assertEntityPresent(entityTypeIdentifier, blockLocation, isPresent) {};
  assertEntityPresentInArea(entityTypeIdentifier, isPresent) {};
  assertEntityState(blockLocation, entityTypeIdentifier, callback) {};
  assertEntityTouching(entityTypeIdentifier, location, isTouching) {};
  assertIsWaterlogged(blockLocation, isWaterlogged) {};
  assertItemEntityCountIs(itemType, blockLocation, searchDistance, count) {};
  assertItemEntityPresent(itemType, blockLocation, searchDistance, isPresent) {};
  assertRedstonePower(blockLocation, power) {};
  fail(errorMessage) {};
  failIf(callback) {};
  getBlock(blockLocation) {};
  getFenceConnectivity(blockLocation) {};
  getTestDirection() {};
  killAllEntities() {};
  pressButton(blockLocation) {};
  print(text) {};
  pullLever(blockLocation) {};
  pulseRedstone(blockLocation, duration) {};
  relativeBlockLocation(worldBlockLocation) {};
  relativeLocation(worldLocation) {};
  removeSimulatedPlayer(simulatedPlayer) {};
  rotateDirection(direction) {};
  runAfterDelay(delayTicks, callback) {};
  runAtTickTime(tick, callback) {};
  setBlockPermutation(blockDataPermutation, blockLocation) {};
  setBlockType(blockType, blockLocation) {};
  setFluidContainer(location, type) {};
  setTntFuse(entity, fuseLength) {};
  spawn(entityTypeIdentifier, blockLocation) {};
  spawnAtLocation(entityTypeIdentifier, location) {};
  spawnItem(itemStack, location) {};
  spawnSimulatedPlayer(blockLocation, name) {};
  spawnWithoutBehaviors(entityTypeIdentifier, blockLocation) {};
  spawnWithoutBehaviorsAtLocation(entityTypeIdentifier, location) {};
  spreadFromFaceTowardDirection(blockLocation, fromFace, direction) {};
  startSequence() {};
  succeed() {};
  succeedIf(callback) {};
  succeedOnTick(tick) {};
  succeedOnTickWhen(tick, callback) {};
  succeedWhen(callback) {};
  succeedWhenBlockPresent(blockType, blockLocation, isPresent) {};
  succeedWhenEntityHasComponent(entityTypeIdentifier, componentIdentifier, blockLocation, hasComponent) {};
  succeedWhenEntityPresent(entityTypeIdentifier, blockLocation, isPresent) {};
  walkTo(mob, blockLocation, speedModifier) {};
  walkToLocation(mob, location, speedModifier) {};
  worldBlockLocation(relativeBlockLocation) {};
  worldLocation(relativeLocation) {};
}
export function register(testClassName, testName, testFunction) {};
export function registerAsync(
  testClassName,
  testName,
  testFunction,
) {};
