export default `declare enum HttpRequestMethod {
    POST = 0,
    PUT = 1,
    GET = 2,
    DELETE = 3,
    HEAD = 4,
}
declare class HttpClient {
    cancelAll(reason: string): void;
    get(uri: string): Promise<HttpResponse>;
    request(config: HttpRequest): Promise<HttpResponse>;
    protected constructor();
}
declare class HttpHeader {
    'key': string;
    'value': string;
    constructor(key: string, value: SecretString | string);
}
declare class HttpRequest {
    'body': string;
    'headers': HttpHeader[];
    'method': HttpRequestMethod;
    'timeout': number;
    'uri': string;
    addHeader(key: string, value: string): HttpRequest;
    constructor(uri: string);
    setBody(body: string): HttpRequest;
    setHeaders(headers: HttpHeader[]): HttpRequest;
    setMethod(method: HttpRequestMethod): HttpRequest;
    setTimeout(timeout: number): HttpRequest;
}
declare class HttpResponse {
    readonly 'body': string;
    readonly 'headers': HttpHeader[];
    readonly 'request': HttpRequest;
    readonly 'status': number;
    protected constructor();
}
declare const http: HttpClient;
`;

export const Namespace = `
declare namespace mojangnet {
    export enum HttpRequestMethod {
        POST = 0,
        PUT = 1,
        GET = 2,
        DELETE = 3,
        HEAD = 4,
    }
    export class HttpClient {
        cancelAll(reason: string): void;
        get(uri: string): Promise<HttpResponse>;
        request(config: HttpRequest): Promise<HttpResponse>;
        protected constructor();
    }
    export class HttpHeader {
        'key': string;
        'value': string;
        constructor(key: string, value: mojangminecraftserveradmin.SecretString | string);
    }
    export class HttpRequest {
        'body': string;
        'headers': HttpHeader[];
        'method': HttpRequestMethod;
        'timeout': number;
        'uri': string;
        addHeader(key: string, value: string): HttpRequest;
        constructor(uri: string);
        setBody(body: string): HttpRequest;
        setHeaders(headers: HttpHeader[]): HttpRequest;
        setMethod(method: HttpRequestMethod): HttpRequest;
        setTimeout(timeout: number): HttpRequest;
    }
    export class HttpResponse {
        readonly 'body': string;
        readonly 'headers': HttpHeader[];
        readonly 'request': HttpRequest;
        readonly 'status': number;
        protected constructor();
    }
    export const http: HttpClient;
}`