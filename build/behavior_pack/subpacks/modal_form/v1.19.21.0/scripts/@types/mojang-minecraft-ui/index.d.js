export const mojangminecraftui_d_ts='declare namespace mojangminecraftui { \n    export class ActionFormData { body(bodyText: string): ActionFormData; button(text: string, iconPath?: string): ActionFormData; constructor(); show(player: mojangminecraft.Player): Promise<ActionFormResponse>; title(titleText: string): ActionFormData; } \n    export class ActionFormResponse extends FormResponse { readonly "isCanceled": boolean; readonly "selection": number; } \n    export class FormResponse { readonly "isCanceled": boolean; } \n    export class MessageFormData { body(bodyText: string): MessageFormData; button1(text: string): MessageFormData; button2(text: string): MessageFormData; constructor(); show(player: mojangminecraft.Player): Promise<MessageFormResponse>; title(titleText: string): MessageFormData; } \n    export class MessageFormResponse extends FormResponse { readonly "isCanceled": boolean; readonly "selection": number; } \n    export class ModalFormData { constructor(); dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData; icon(iconPath: string): ModalFormData; show(player: mojangminecraft.Player): Promise<ModalFormResponse>; slider(label: string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData; textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData; title(titleText: string): ModalFormData; toggle(label: string, defaultValue?: boolean): ModalFormData; } \n    export class ModalFormResponse extends FormResponse { readonly "formValues": any[]; readonly "isCanceled": boolean; }\n}\ndeclare class ActionFormData {\n    body(bodyText: string): ActionFormData;\n    button(text: string, iconPath?: string): ActionFormData;\n    constructor();\n    show(player: mojangminecraft.Player): Promise<ActionFormResponse>;\n    title(titleText: string): ActionFormData;\n}\ndeclare class ActionFormResponse extends FormResponse {\n    readonly "isCanceled": boolean;\n    readonly "selection": number;\n}\ndeclare class FormResponse {\n    readonly "isCanceled": boolean;\n}\ndeclare class MessageFormData {\n    body(bodyText: string): MessageFormData;\n    button1(text: string): MessageFormData;\n    button2(text: string): MessageFormData;\n    constructor();\n    show(player: mojangminecraft.Player): Promise<MessageFormResponse>;\n    title(titleText: string): MessageFormData;\n}\ndeclare class MessageFormResponse extends FormResponse {\n    readonly "isCanceled": boolean;\n    readonly "selection": number;\n}\ndeclare class ModalFormData {\n    constructor();\n    dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;\n    icon(iconPath: string): ModalFormData;\n    show(player: mojangminecraft.Player): Promise<ModalFormResponse>;\n    slider(label: string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData;\n    textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;\n    title(titleText: string): ModalFormData;\n    toggle(label: string, defaultValue?: boolean): ModalFormData;\n}\ndeclare class ModalFormResponse extends FormResponse {\n    readonly "formValues": any[];\n    readonly "isCanceled": boolean;\n}';