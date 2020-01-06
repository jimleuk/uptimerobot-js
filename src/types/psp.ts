import { Stat, PSPSort, PSPState, PSPType } from './enums';
import { Monitor } from './monitor';
import { Pagination } from './other';

// Models =================================================================== //

export interface PSP
  extends Omit<Uptimerobot.PSP, 'monitors' | 'sort' | 'status'> {
  monitors: Array<Monitor['id']>;
  sort: PSPSort;
  status: PSPState;
}

// Response ================================================================= //

export interface PSPListResponse
  extends Omit<
    Uptimerobot.PSPListSuccessResponse,
    'stat' | 'limit' | 'offset' | 'total' | 'psps'
  > {
  stat: Stat;
  pagination: Pagination;
  psps: PSP[];
}

export interface PSPCreateSuccessResponse
  extends Omit<Uptimerobot.PSPCreateSuccessResponse, 'stat' | 'psp'> {
  stat: Stat;
  psp: Pick<PSP, 'id'>;
}

export interface PSPEditSuccessResponse
  extends Omit<Uptimerobot.PSPEditSuccessResponse, 'stat' | 'psp'> {
  stat: Stat;
  psp: Pick<PSP, 'id'>;
}

export interface PSPDeleteSuccessResponse
  extends Omit<Uptimerobot.PSPDeleteSuccessResponse, 'stat' | 'psp'> {
  stat: Stat;
  psp: Pick<PSP, 'id'>;
}

// Requests ================================================================= //

export interface PSPListRequest
  extends Omit<Uptimerobot.PSPListRequest, 'psps' | 'offset' | 'limit'> {
  psps?: Array<PSP['id']>;
  offset?: Pagination['offset'];
  limit?: Pagination['limit'];
}

export interface PSPCreateRequest
  extends Omit<
    Uptimerobot.PSPCreateRequest,
    'type' | 'monitors' | 'sort' | 'status' | 'hide_url_links'
  > {
  type: PSPType;
  monitors: Array<Monitor['id']>;
  sort?: PSPSort;
  status?: PSPState;
  hide_url_links?: boolean;
}

export interface PSPEditRequest
  extends Omit<
    Uptimerobot.PSPEditRequest,
    'id' | 'monitors' | 'sort' | 'status' | 'hide_url_links'
  > {
  id: PSP['id'];
  monitors?: Array<Monitor['id']>;
  sort?: PSPSort;
  status?: PSPState;
  hide_url_links?: boolean;
}

export interface PSPDeleteRequest
  extends Omit<Uptimerobot.PSPDeleteRequest, 'id'> {
  id: PSP['id'];
}
