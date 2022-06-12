export default `declare class ActionFormData {
    body(bodyText: string): ActionFormData;
    button(text: string, iconPath?: string): ActionFormData;
    show(player: Player): Promise<ActionFormResponse>;
    title(titleText: string): ActionFormData;
}
declare class ActionFormResponse extends FormResponse {
    readonly 'isCanceled': boolean;
    readonly 'selection': number;
    protected constructor();
}
declare class FormResponse {
    readonly 'isCanceled': boolean;
    protected constructor();
}
declare class MessageFormData {
    body(bodyText: string): MessageFormData;
    button1(text: string): MessageFormData;
    button2(text: string): MessageFormData;
    show(player: Player): Promise<MessageFormResponse>;
    title(titleText: string): MessageFormData;
}
declare class MessageFormResponse extends FormResponse {
    readonly 'isCanceled': boolean;
    readonly 'selection': number;
    protected constructor();
}
declare class ModalFormData {
    dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;
    icon(iconPath: string): ModalFormData;
    show(player: Player): Promise<ModalFormResponse>;
    slider(
        label: string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;
    title(titleText: string): ModalFormData;
    toggle(label: string, defaultValue?: boolean): ModalFormData;
}
declare class ModalFormResponse extends FormResponse {
    readonly 'formValues': any[];
    readonly 'isCanceled': boolean;
    protected constructor();
}
`

export const Namespace = `declare namespace mojangminecraftui {
    export class ActionFormData {
        body(bodyText: string): ActionFormData;
        button(text: string, iconPath?: string): ActionFormData;
        show(player: mojangminecraft.Player): Promise<ActionFormResponse>;
        title(titleText: string): ActionFormData;
    }
    export class ActionFormResponse extends FormResponse {
        readonly 'isCanceled': boolean;
        readonly 'selection': number;
        protected constructor();
    }
    export class FormResponse {
        readonly 'isCanceled': boolean;
        protected constructor();
    }
    export class MessageFormData {
        body(bodyText: string): MessageFormData;
        button1(text: string): MessageFormData;
        button2(text: string): MessageFormData;
        show(player: mojangminecraft.Player): Promise<MessageFormResponse>;
        title(titleText: string): MessageFormData;
    }
    export class MessageFormResponse extends FormResponse {
        readonly 'isCanceled': boolean;
        readonly 'selection': number;
        protected constructor();
    }
    export class ModalFormData {
        dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;
        icon(iconPath: string): ModalFormData;
        show(player: mojangminecraft.Player): Promise<ModalFormResponse>;
        slider(
            label: string,
            minimumValue: number,
            maximumValue: number,
            valueStep: number,
            defaultValue?: number,
        ): ModalFormData;
        textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;
        title(titleText: string): ModalFormData;
        toggle(label: string, defaultValue?: boolean): ModalFormData;
    }
    export class ModalFormResponse extends FormResponse {
        readonly 'formValues': any[];
        readonly 'isCanceled': boolean;
        protected constructor();
    }
}`