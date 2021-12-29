export type UndefinedNull = undefined | null;

export interface Config {
    server: string | UndefinedNull;
    apiToken: string | UndefinedNull;
}
