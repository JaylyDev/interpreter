// Type definitions for Minecraft Bedrock Edition script APIs (experimental) 0.1
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */

import * as mojangminecraft from "mojang-minecraft";
export class ActionFormData {
    body(bodyText) {};
    button(text, iconPath) {};
    constructor() {};
    show(player) {};
    title(titleText) {};
}
export class ActionFormResponse {
    "isCanceled";
    "selection";
}
export class FormResponse {
    "isCanceled";
}
export class MessageFormData {
    body(bodyText) {};
    button1(text) {};
    button2(text) {};
    constructor() {};
    show(player) {};
    title(titleText) {};
}
export class MessageFormResponse {
    "isCanceled";
    "selection";
}
export class ModalFormData {
    constructor() {};
    dropdown(label, options, defaultValueIndex) {};
    icon(iconPath) {};
    show(player) {};
    slider(label, minimumValue, maximumValue, valueStep, defaultValue) {};
    textField(label, placeholderText, defaultValue) {};
    title(titleText) {};
    toggle(label, defaultValue) {};
}
export class ModalFormResponse {
    "formValues";
    "isCanceled";
}