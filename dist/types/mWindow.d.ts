import { Client } from './client';
import { MWindowListRequest, MWindowCreateRequest, MWindowEditRequest, MWindowDeleteRequest } from './types';
export declare class MWindow extends Client {
    /**
     * Returns one or more specified maintenance windows.
     */
    get: (mwindows: number[] | undefined, params?: Pick<MWindowListRequest, "limit" | "offset"> | undefined) => Promise<import("./types").MWindowListSuccessResponse>;
    /**
     * The list of maintenance windows can be called with this method.
     */
    list: (params?: Pick<MWindowListRequest, "limit" | "offset"> | undefined) => Promise<import("./types").MWindowListSuccessResponse>;
    /**
     * New maintenance windows can be created using this method.
     */
    create: (params: MWindowCreateRequest) => Promise<import("./types").MWindowCreateSuccessResponse>;
    /**
     * Maintenance windows can be edited using this method.
     */
    update: (params: MWindowEditRequest) => Promise<import("./types").MWindowEditSuccessResponse>;
    /**
     * Maintenance windows can be deleted using this method.
     */
    delete: (params: MWindowDeleteRequest) => Promise<import("./types").MWindowDeleteSuccessResponse>;
}
