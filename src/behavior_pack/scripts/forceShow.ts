
// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
//         Worldwidebrine#9037 <Bedrock Add-Ons>

import { Player, system } from "@minecraft/server";
import { ActionFormData, FormCancelationReason, MessageFormData, ModalFormData } from "@minecraft/server-ui";

type FormData = ActionFormData | MessageFormData | ModalFormData;
type FormResponse<T extends FormData> = Awaited<ReturnType<T['show']>>;

/**
 * Creates and force the API to show a popup form to player.
 * Returns asynchronously when the player confirms or cancels the dialog.
 * @param player Player to show this dialog to.
 * @param form Dialog to show the player to.
 * @param timeout Amount of time, in ticks, before the request times out and is abandoned.
 * @throws — This function can throw errors.
 */
export async function forceShow<Form extends FormData>(player: Player, form: Form, timeout: number = Infinity): Promise<FormResponse<Form>> {
    const startTick = system.currentTick;
    while ((system.currentTick - startTick) < timeout) {
        const response = await form.show(player);
        if (response.cancelationReason !== FormCancelationReason.userBusy) {
            return response as FormResponse<Form>;
        };
    };
    throw new Error(`Timed out after ${timeout} ticks`);
};