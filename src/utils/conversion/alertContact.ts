import { applyArrayConversion } from './values';
import {
  Stat,
  Pagination,
  AlertContact,
  AlertContactState,
  AlertContactType,
  AlertContactListRequest,
  AlertContactListResponse,
  AlertContactCreateRequest,
  AlertContactCreateSuccessResponse,
  AlertContactDeleteRequest,
  AlertContactDeleteSuccessResponse,
  AlertContactEditRequest,
  AlertContactEditSuccessResponse,
} from '../../types';

// Models =================================================================== //

/**
 * Uptimerobot.AlertContact -> AlertContact
 */
export const getApiAlertContactToAlertContact = (
  alertContact: Uptimerobot.AlertContact
): AlertContact => ({
  ...alertContact,
  status: alertContact.status as AlertContactState,
  type: alertContact.type as AlertContactType,
});

/**
 * AlertContact -> Uptimerobot.AlertContact
 */
export const getAlertContactToApiAlertContact = (
  alertContact: AlertContact
): Uptimerobot.AlertContact => ({
  ...alertContact,
  status: alertContact.status as number,
  type: alertContact.type as number,
});

// Responses ================================================================ //

/**
 * Uptimerobot.AlertContactListSuccessResponse -> AlertContactListResponse
 */
export const getApiResponseToAlertContactListResponse = (
  response: Uptimerobot.AlertContactListSuccessResponse
): AlertContactListResponse => ({
  stat: response.stat as Stat,
  pagination: {
    limit: response.limit as Pagination['limit'],
    offset: response.offset as Pagination['offset'],
    total: response.total as Pagination['total'],
  },
  alert_contacts: response.alert_contacts.map(getApiAlertContactToAlertContact),
});

/**
 * Uptimerobot.AlertContactCreateSuccessResponse -> AlertContactCreateSuccessResponse
 */
export const getApiResponseToAlertContactCreateResponse = (
  response: Uptimerobot.AlertContactCreateSuccessResponse
): AlertContactCreateSuccessResponse => ({
  stat: response.stat as Stat,
  alertcontact: {
    ...response.alertcontact,
    status: response.alertcontact.status as AlertContactState,
  },
});

/**
 * Uptimerobot.AlertContactEditSuccessResponse -> AlertContactEditSuccessResponse
 */
export const getApiResponseToAlertContactEditResponse = (
  response: Uptimerobot.AlertContactEditSuccessResponse
): AlertContactEditSuccessResponse => ({
  ...response,
  stat: response.stat as Stat,
});

/**
 * Uptimerobot.AlertContactDeleteSuccessResponse -> AlertContactDeleteSuccessResponse
 */
export const getApiResponseToAlertContactDeleteResponse = (
  response: Uptimerobot.AlertContactDeleteSuccessResponse
): AlertContactDeleteSuccessResponse => ({
  ...response,
  stat: response.stat as Stat,
});

// Requests ================================================================= //

/**
 * AlertContactListRequest -> Uptimerobot.AlertContactListRequest
 */
export const getAlertContactListRequestToApiRequest = (
  request: AlertContactListRequest
): Uptimerobot.AlertContactListRequest =>
  ({
    ...request,
    alert_contacts: applyArrayConversion(request.alert_contacts),
  } as Uptimerobot.AlertContactListRequest);

/**
 * AlertContactCreateRequest -> Uptimerobot.AlertContactCreateRequest
 */
export const getAlertContactCreateRequestToApiRequest = (
  request: AlertContactCreateRequest
): Uptimerobot.AlertContactCreateRequest => ({
  ...request,
});

/**
 * AlertContactEditRequest -> Uptimerobot.AlertContactEditRequest
 */
export const getAlertContactEditRequestToApiRequest = (
  request: AlertContactEditRequest
): Uptimerobot.AlertContactEditRequest => ({
  ...request,
});

/**
 * AlertContactDeleteRequest -> Uptimerobot.AlertContactDeleteRequest
 */
export const getAlertContactDeleteRequestToApiRequest = (
  request: AlertContactDeleteRequest
): Uptimerobot.AlertContactDeleteRequest => ({
  ...request,
});
