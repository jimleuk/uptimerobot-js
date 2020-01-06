import { Stat, MWindowState, MWindowType } from './enums';
import { Pagination } from './other';

// Models =================================================================== //

export interface MWindow
  extends Omit<Uptimerobot.MWindow, 'type' | 'status' | 'start_time'> {
  type: MWindowType;
  status: MWindowState;
  start_time: MWindowStartTime;
}

export interface MWindowStartTimeOnce {
  type: MWindowType.once;
  date: Date;
}

export interface MWindowStartTimeRecurring {
  type: MWindowType.daily | MWindowType.weekly | MWindowType.monthly;
  hour: number;
  minute: number;
}

export type MWindowStartTime = MWindowStartTimeOnce | MWindowStartTimeRecurring;

// Responses ================================================================ //

export interface MWindowListResponse
  extends Omit<
    Uptimerobot.MWindowListSuccessResponse,
    'stat' | 'pagination' | 'mwindows'
  > {
  stat: Stat;
  pagination: Pagination;
  mwindows: MWindow[];
}

export interface MWindowCreateSuccessResponse
  extends Omit<Uptimerobot.MWindowCreateSuccessResponse, 'stat' | 'mwindow'> {
  stat: Stat;
  mwindow: Pick<MWindow, 'id' | 'status'>;
}

export interface MWindowEditSuccessResponse
  extends Omit<Uptimerobot.MWindowEditSuccessResponse, 'stat' | 'mwindow'> {
  stat: Stat;
  mwindow: Pick<MWindow, 'id'>;
}

export interface MWindowDeleteSuccessResponse
  extends Omit<Uptimerobot.MWindowDeleteSuccessResponse, 'stat' | 'mwindow'> {
  stat: Stat;
  mwindow: Pick<MWindow, 'id'>;
}

// Requests ================================================================= //

export interface MWindowListRequest
  extends Omit<
    Uptimerobot.MWindowListRequest,
    'mwindows' | 'offset' | 'limit'
  > {
  mwindows?: Array<MWindow['id']>;
  offset?: Pagination['offset'];
  limit?: Pagination['limit'];
}

export interface MWindowCreateRequest
  extends Omit<Uptimerobot.MWindowCreateRequest, 'type' | 'start_time'> {
  type: MWindowType;
  start_time?: MWindowStartTime;
}

export interface MWindowEditRequest
  extends Omit<Uptimerobot.MWindowEditRequest, 'id' | 'start_time'> {
  id: MWindow['id'];
  start_time?: MWindowStartTime;
}

export interface MWindowDeleteRequest
  extends Omit<Uptimerobot.MWindowDeleteRequest, 'id'> {
  id: MWindow['id'];
}
