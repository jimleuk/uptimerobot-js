/// <reference types="uptimerobot" />
import { Stat, AlertContactState, AlertContactType } from './enums';
import { Pagination } from './other';
export interface AlertContact extends Omit<Uptimerobot.AlertContact, 'type' | 'status'> {
    type: AlertContactType;
    status: AlertContactState;
}
export interface AlertContactListResponse extends Omit<Uptimerobot.AlertContactListSuccessResponse, 'stat' | 'limit' | 'offset' | 'total' | 'alert_contacts'> {
    stat: Stat;
    pagination: Pagination;
    alert_contacts: AlertContact[];
}
export interface AlertContactCreateSuccessResponse extends Omit<Uptimerobot.AlertContactCreateSuccessResponse, 'stat' | 'alertcontact'> {
    stat: Stat;
    alertcontact: Pick<AlertContact, 'id' | 'status'>;
}
export interface AlertContactEditSuccessResponse extends Omit<Uptimerobot.AlertContactEditSuccessResponse, 'stat' | 'alertcontact'> {
    stat: Stat;
    alertcontact: Pick<AlertContact, 'id'>;
}
export interface AlertContactDeleteSuccessResponse extends Omit<Uptimerobot.AlertContactDeleteSuccessResponse, 'stat' | 'alertcontact'> {
    stat: Stat;
    alertcontact: Pick<AlertContact, 'id'>;
}
export interface AlertContactListRequest extends Omit<Uptimerobot.AlertContactListRequest, 'alert_contacts' | 'offset' | 'limit'> {
    alert_contacts?: Array<AlertContact['id']>;
    offset?: Pagination['offset'];
    limit?: Pagination['limit'];
}
export interface AlertContactCreateRequest extends Omit<Uptimerobot.AlertContactCreateRequest, 'type'> {
    type: AlertContactType;
}
export interface AlertContactEditRequest extends Omit<Uptimerobot.AlertContactEditRequest, 'id'> {
    id: AlertContact['id'];
}
export interface AlertContactDeleteRequest extends Omit<Uptimerobot.AlertContactDeleteRequest, 'id'> {
    id: AlertContact['id'];
}
