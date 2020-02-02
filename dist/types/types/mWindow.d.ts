/// <reference types="uptimerobot" />
import { Stat, MWindowState, MWindowType } from './enums';
import { Pagination } from './other';
export interface MWindow extends Omit<Uptimerobot.MWindow, 'type' | 'status' | 'start_time' | 'value' | 'user'> {
    /** TODO: the property "user" has no description in official docs */
    user?: number;
    /** The type of the maintenance window */
    type: MWindowType;
    /** The status of the maintenance window */
    status: MWindowState;
    /** Start time of the maintenance windows. */
    start_time: MWindowStartTime;
    /** used only for weekly (index of day) and monthly (index of month) maintenance windows */
    value: number[];
}
/** start time for a MWindow which is fired only once */
export interface MWindowStartTimeOnce {
    type: MWindowType.once;
    date: Date;
}
/** start time for a MWindow which is recurring */
export interface MWindowStartTimeRecurring {
    type: MWindowType.daily | MWindowType.weekly | MWindowType.monthly;
    hour: number;
    minute: number;
}
/** One of MWindowStartTimeOnce or MWindowStartTimeRecurring depending on MWindowType */
export declare type MWindowStartTime = MWindowStartTimeOnce | MWindowStartTimeRecurring;
export interface MWindowListSuccessResponse extends Omit<Uptimerobot.MWindowListSuccessResponse, 'stat' | 'pagination' | 'mwindows'> {
    stat: Stat;
    pagination: Pagination;
    mwindows: MWindow[];
}
export interface MWindowCreateSuccessResponse extends Omit<Uptimerobot.MWindowCreateSuccessResponse, 'stat' | 'mwindow'> {
    stat: Stat;
    mwindow: Pick<MWindow, 'id' | 'status'>;
}
export interface MWindowEditSuccessResponse extends Omit<Uptimerobot.MWindowEditSuccessResponse, 'stat' | 'mwindow'> {
    stat: Stat;
    mwindow: Pick<MWindow, 'id'>;
}
export interface MWindowDeleteSuccessResponse extends Omit<Uptimerobot.MWindowDeleteSuccessResponse, 'stat' | 'mwindow'> {
    stat: Stat;
    mwindow: Pick<MWindow, 'id'>;
}
export interface MWindowListRequest extends Omit<Uptimerobot.MWindowListRequest, 'mwindows' | 'offset' | 'limit'> {
    mwindows?: Array<MWindow['id']>;
    offset?: Pagination['offset'];
    limit?: Pagination['limit'];
}
export interface MWindowCreateRequest extends Omit<Uptimerobot.MWindowCreateRequest, 'type' | 'start_time' | 'value'> {
    /** The type of maintenance window */
    type: MWindowType;
    /** start time of the maintenance windows. */
    start_time?: MWindowStartTime;
    /** Only needed for weekly and monthly maintenance windows and must be sent
     * like 2-4-5 for Tuesday-Thursday-Friday or 10-17-26 for the days of the
     * month
     */
    value?: number[];
}
export interface MWindowEditRequest extends Omit<Uptimerobot.MWindowEditRequest, 'id' | 'start_time'> {
    id: MWindow['id'];
    start_time?: MWindowStartTime;
}
export interface MWindowDeleteRequest extends Omit<Uptimerobot.MWindowDeleteRequest, 'id'> {
    id: MWindow['id'];
}
