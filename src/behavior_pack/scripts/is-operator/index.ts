import { Player } from "@minecraft/server";

/**
 * returns if player is operator
 * @param {Player} player 
 */
export function isOperator (player: Player) {
  return player.isOp();
};