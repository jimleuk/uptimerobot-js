/// <reference types="uptimerobot" />
import { Stat, PSPSort, PSPState, PSPType } from './enums';
import { Monitor } from './monitor';
import { Pagination } from './other';
export interface PSP extends Omit<Uptimerobot.PSP, 'monitors' | 'sort' | 'status'> {
    /** The list of monitorIDs to be displayed in status page */
    monitors: Array<Monitor['id']>;
    /** The sort order of the status page */
    sort: PSPSort;
    /** The status of the status page. */
    status: PSPState;
}
export interface PSPListSuccessResponse extends Omit<Uptimerobot.PSPListSuccessResponse, 'stat' | 'limit' | 'offset' | 'total' | 'psps'> {
    stat: Stat;
    pagination: Pagination;
    psps: PSP[];
}
export interface PSPCreateSuccessResponse extends Omit<Uptimerobot.PSPCreateSuccessResponse, 'stat' | 'psp'> {
    stat: Stat;
    psp: Pick<PSP, 'id'>;
}
export interface PSPEditSuccessResponse extends Omit<Uptimerobot.PSPEditSuccessResponse, 'stat' | 'psp'> {
    stat: Stat;
    psp: Pick<PSP, 'id'>;
}
export interface PSPDeleteSuccessResponse extends Omit<Uptimerobot.PSPDeleteSuccessResponse, 'stat' | 'psp'> {
    stat: Stat;
    psp: Pick<PSP, 'id'>;
}
export interface PSPListRequest extends Omit<Uptimerobot.PSPListRequest, 'psps' | 'offset' | 'limit'> {
    /** If not used, will return all public status pages in an account. Else, it
     * is possible to define any number of public status pages with their IDs
     */
    psps?: Array<PSP['id']>;
    /** Used for Pagination */
    offset?: Pagination['offset'];
    /** Used for Pagination */
    limit?: Pagination['limit'];
}
export interface PSPCreateRequest extends Omit<Uptimerobot.PSPCreateRequest, 'type' | 'monitors' | 'sort' | 'status' | 'hide_url_links'> {
    type: PSPType;
    monitors: Array<Monitor['id']>;
    sort?: PSPSort;
    status?: PSPState;
    hide_url_links?: boolean;
}
export interface PSPEditRequest extends Omit<Uptimerobot.PSPEditRequest, 'id' | 'monitors' | 'sort' | 'status' | 'hide_url_links'> {
    id: PSP['id'];
    monitors?: Array<Monitor['id']>;
    sort?: PSPSort;
    status?: PSPState;
    hide_url_links?: boolean;
}
export interface PSPDeleteRequest extends Omit<Uptimerobot.PSPDeleteRequest, 'id'> {
    id: PSP['id'];
}
