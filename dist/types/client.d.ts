/// <reference types="uptimerobot" />
import { AxiosRequestConfig } from 'axios';
export declare const createErrorResponse: (err: Error) => import("uptimerobot").ErrorResponse;
export declare class Client {
    static DEFAULT_HOST: string;
    static DEFAULT_BASE_PATH: string;
    static DEFAULT_VERSION: number;
    /** a valid UptimeRobot api key - can be account or read-only */
    private apiKey;
    /** the axios instance */
    private client;
    constructor(apiKey: string, axiosConfig?: AxiosRequestConfig);
    /** Returns a configured axios client */
    private createClient;
    /**
     * Creates a post request.
     * Note: api failed/badRequest requests are returned as 200. Here we have
     * intercept logic which looks to the Stat value of "fail" then force a
     * reject on the promise.
     */
    post: <T, R extends {
        stat: "ok" | "fail";
    }>(endpoint: string, params?: T | undefined) => Promise<R | undefined>;
}
