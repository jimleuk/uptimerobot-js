import { Client } from './client';
export declare class Account extends Client {
    /**
     * Not implemented
     */
    get: () => never;
    /**
     * Account details (max number of monitors that can be added and number of
     * up/down/paused monitors) can be grabbed using this method.
     */
    list: () => Promise<import("./types").AccountListResponse>;
    /**
     * Not implemented
     */
    create: () => never;
    /**
     * Not implemented
     */
    update: () => never;
    /**
     * Not implemented
     */
    delete: () => never;
}
