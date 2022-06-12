export default `declare class SecretString {
    constructor(value: string);
    equals(other: SecretString): boolean;
}
declare class ServerSecrets {
    readonly 'names': string[];
    get(name: string): SecretString;
    protected constructor();
}
declare class ServerVariables {
    readonly 'names': string[];
    get(name: string): any;
    protected constructor();
}
declare const secrets: ServerSecrets;
declare const variables: ServerVariables;
`

export const Namespace = `declare namespace mojangminecraftserveradmin {
    export class SecretString {
        constructor(value: string);
        equals(other: SecretString): boolean;
    }
    export class ServerSecrets {
        readonly 'names': string[];
        get(name: string): SecretString;
        protected constructor();
    }
    export class ServerVariables {
        readonly 'names': string[];
        get(name: string): any;
        protected constructor();
    }
    export const secrets: ServerSecrets;
    export const variables: ServerVariables;
}`