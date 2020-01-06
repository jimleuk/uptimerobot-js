import { Stat, AlertContactState, AlertContactType } from './enums';
import { Pagination } from './other';

// Models =================================================================== //

export interface AlertContact
  extends Omit<Uptimerobot.AlertContact, 'type' | 'status'> {
  type: AlertContactType;
  status: AlertContactState;
}

// Responses ================================================================ //

export interface AlertContactListResponse
  extends Omit<
    Uptimerobot.AlertContactListSuccessResponse,
    'stat' | 'limit' | 'offset' | 'total' | 'alert_contacts'
  > {
  stat: Stat;
  pagination: Pagination;
  alert_contacts: AlertContact[];
}

export interface AlertContactCreateSuccessResponse
  extends Omit<
    Uptimerobot.AlertContactCreateSuccessResponse,
    'stat' | 'alertcontact'
  > {
  stat: Stat;
  alertcontact: Pick<AlertContact, 'id' | 'status'>;
}

export interface AlertContactEditSuccessResponse
  extends Omit<
    Uptimerobot.AlertContactEditSuccessResponse,
    'stat' | 'alertcontact'
  > {
  stat: Stat;
  alertcontact: Pick<AlertContact, 'id'>;
}

export interface AlertContactDeleteSuccessResponse
  extends Omit<
    Uptimerobot.AlertContactDeleteSuccessResponse,
    'stat' | 'alertcontact'
  > {
  stat: Stat;
  alertcontact: Pick<AlertContact, 'id'>;
}

// Requests ================================================================= //

// AlertContactListRequest -> Uptimerobot.AlertContactListRequest
export interface AlertContactListRequest
  extends Omit<
    Uptimerobot.AlertContactListRequest,
    'alert_contacts' | 'offset' | 'limit'
  > {
  alert_contacts?: Array<AlertContact['id']>;
  offset?: Pagination['offset'];
  limit?: Pagination['limit'];
}

// AlertContactCreateRequest -> Uptimerobot.AlertContactCreateRequest
export interface AlertContactCreateRequest
  extends Omit<Uptimerobot.AlertContactCreateRequest, 'type'> {
  type: AlertContactType;
}

// AlertContactEditRequest -> Uptimerobot.AlertContactEditRequest
export interface AlertContactEditRequest
  extends Omit<Uptimerobot.AlertContactEditRequest, 'id'> {
  id: AlertContact['id'];
}

// AlertContactDeleteRequest -> Uptimerobot.AlertContactDeleteRequest
export interface AlertContactDeleteRequest
  extends Omit<Uptimerobot.AlertContactDeleteRequest, 'id'> {
  id: AlertContact['id'];
}
