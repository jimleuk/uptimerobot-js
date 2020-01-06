import { Client } from './client';
import { AlertContactListRequest, AlertContactCreateRequest, AlertContactEditRequest, AlertContactDeleteRequest } from './types';
export declare class AlertContact extends Client {
    /**
     * Returns one or more specified AlertContacts.
     */
    get: (alertContacts: number[] | undefined, params?: Pick<AlertContactListRequest, "limit" | "offset"> | undefined) => Promise<import("./types").AlertContactListResponse>;
    /**
     * The list of alert contacts can be called with this method.
     */
    list: (params?: Pick<AlertContactListRequest, "limit" | "offset"> | undefined) => Promise<import("./types").AlertContactListResponse>;
    /**
     * New alert contacts of any type (mobile/SMS alert contacts are not supported
     * yet) can be created using this method.
     * The alert contacts created using the API are validated with the same way as
     * they were created from uptimerobot.com (activation link for e-mails, etc.).
     */
    create: (params: AlertContactCreateRequest) => Promise<import("./types").AlertContactCreateSuccessResponse>;
    /**
     * Alert contacts can be edited using this method.
     */
    update: (params: AlertContactEditRequest) => Promise<import("./types").AlertContactEditSuccessResponse>;
    /**
     * Alert contacts can be deleted using this method.
     */
    delete: (params: AlertContactDeleteRequest) => Promise<import("./types").AlertContactDeleteSuccessResponse>;
}
