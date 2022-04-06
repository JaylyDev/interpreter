import*as t from"mojang-minecraft";export const FluidType={water:0,lava:1,powderSnow:2,potion:3};export class FenceConnectivity{east;north;south;west}export class GameTestSequence{thenExecute(t){}thenExecuteAfter(t,e){}thenExecuteFor(t,e){}thenFail(t){}thenIdle(t){}thenSucceed(){}thenWait(t){}thenWaitAfter(t,e){}}export class RegistrationBuilder{batch(t){}maxAttempts(t){}maxTicks(t){}padding(t){}required(t){}requiredSuccessfulAttempts(t){}rotateTest(t){}setupTicks(t){}structureName(t){}tag(t){}}export class SimulatedPlayer extends t.Player{bodyRotation;headRotation;id;isSneaking;location;name;nameTag;velocity;addEffect(t,e,o){}attack(){}attackEntity(t){}destroyBlock(t,e){}getComponent(t){}getComponents(){}getEffect(t){}hasComponent(t){}interact(){}interactWithBlock(t,e){}interactWithEntity(t){}jump(){}kill(){}lookAtBlock(t){}lookAtEntity(t){}lookAtLocation(t){}move(t,e,o){}moveRelative(t,e,o){}moveToBlock(t,e){}moveToLocation(t,e){}navigateToBlock(t,e){}navigateToEntity(t,e){}navigateToLocation(t,e){}navigateToLocations(t,e){}rotateBody(t){}selectSlot(t){}setBodyRotation(t){}stopDestroyingBlock(){}stopInteracting(){}stopMoving(){}stopUsingItem(){}triggerEvent(t){}useItem(t){}useItemInSlot(t){}useItemInSlotOnBlock(t,e,o,s,n){}useItemOnBlock(t,e,o,s,n){}}export class Tags{static suiteAll="suite:all";static suiteDebug="suite:debug";static suiteDefault="suite:default";static suiteDisabled="suite:disabled"}export class Test{assert(t,e){}assertBlockPresent(t,e,o){}assertBlockState(t,e){}assertCanReachLocation(t,e,o){}assertContainerContains(t,e){}assertContainerEmpty(t){}assertEntityHasArmor(t,e,o,s,n,a){}assertEntityHasComponent(t,e,o,s){}assertEntityInstancePresent(t,e,o){}assertEntityPresent(t,e,o){}assertEntityPresentInArea(t,e){}assertEntityState(t,e,o){}assertEntityTouching(t,e,o){}assertIsWaterlogged(t,e){}assertItemEntityCountIs(t,e,o,s){}assertItemEntityPresent(t,e,o,s){}assertRedstonePower(t,e){}fail(t){}failIf(t){}getBlock(t){}getFenceConnectivity(t){}getTestDirection(){}killAllEntities(){}pressButton(t){}print(t){}pullLever(t){}pulseRedstone(t,e){}relativeBlockLocation(t){}relativeLocation(t){}removeSimulatedPlayer(t){}rotateDirection(t){}runAfterDelay(t,e){}runAtTickTime(t,e){}setBlockPermutation(t,e){}setBlockType(t,e){}setFluidContainer(t,e){}setTntFuse(t,e){}spawn(t,e){}spawnAtLocation(t,e){}spawnItem(t,e){}spawnSimulatedPlayer(t,e){}spawnWithoutBehaviors(t,e){}spawnWithoutBehaviorsAtLocation(t,e){}spreadFromFaceTowardDirection(t,e,o){}startSequence(){}succeed(){}succeedIf(t){}succeedOnTick(t){}succeedOnTickWhen(t,e){}succeedWhen(t){}succeedWhenBlockPresent(t,e,o){}succeedWhenEntityHasComponent(t,e,o,s){}succeedWhenEntityPresent(t,e,o){}walkTo(t,e,o){}walkToLocation(t,e,o){}worldBlockLocation(t){}worldLocation(t){}}export function register(t,e,o){}export function registerAsync(t,e,o){}