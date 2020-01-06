/// <reference types="uptimerobot" />
import { Client } from './client';
import { PSPListRequest, PSPCreateRequest, PSPEditRequest, PSPDeleteRequest } from './types';
export declare class PSP extends Client {
    /**
     * Returns one or more specified public status pages.
     */
    get: (psps: number[] | undefined, params?: Pick<PSPListRequest, "limit" | "offset"> | undefined) => Promise<import("./types").PSPListResponse>;
    /**
     * The list of public status pages can be called with this method.
     */
    list: (params?: Pick<import("uptimerobot").PSPListRequest, "limit" | "offset"> | undefined) => Promise<import("./types").PSPListResponse>;
    /**
     * New public status pages can be created using this method.
     */
    create: (params: PSPCreateRequest) => Promise<import("./types").PSPCreateSuccessResponse>;
    /**
     * Public status pages can be edited using this method.
     */
    update: (params: PSPEditRequest) => Promise<import("./types").PSPEditSuccessResponse>;
    /**
     * Public status pages can be deleted using this method.
     */
    delete: (params: PSPDeleteRequest) => Promise<import("./types").PSPDeleteSuccessResponse>;
}
