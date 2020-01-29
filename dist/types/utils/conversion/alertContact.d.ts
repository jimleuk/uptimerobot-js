/// <reference types="uptimerobot" />
import { AlertContact, AlertContactListRequest, AlertContactListSuccessResponse, AlertContactCreateRequest, AlertContactCreateSuccessResponse, AlertContactDeleteRequest, AlertContactDeleteSuccessResponse, AlertContactEditRequest, AlertContactEditSuccessResponse } from '../../types';
/**
 * Uptimerobot.AlertContact -> AlertContact
 */
export declare const getApiAlertContactToAlertContact: (alertContact: import("uptimerobot").AlertContact) => AlertContact;
/**
 * AlertContact -> Uptimerobot.AlertContact
 */
export declare const getAlertContactToApiAlertContact: (alertContact: AlertContact) => import("uptimerobot").AlertContact;
/**
 * Uptimerobot.AlertContactListSuccessResponse -> AlertContactListResponse
 */
export declare const getApiResponseToAlertContactListResponse: (response: import("uptimerobot").AlertContactListSuccessResponse) => AlertContactListSuccessResponse;
/**
 * Uptimerobot.AlertContactCreateSuccessResponse -> AlertContactCreateSuccessResponse
 */
export declare const getApiResponseToAlertContactCreateResponse: (response: import("uptimerobot").AlertContactCreateSuccessResponse) => AlertContactCreateSuccessResponse;
/**
 * Uptimerobot.AlertContactEditSuccessResponse -> AlertContactEditSuccessResponse
 */
export declare const getApiResponseToAlertContactEditResponse: (response: import("uptimerobot").AlertContactEditSuccessResponse) => AlertContactEditSuccessResponse;
/**
 * Uptimerobot.AlertContactDeleteSuccessResponse -> AlertContactDeleteSuccessResponse
 */
export declare const getApiResponseToAlertContactDeleteResponse: (response: import("uptimerobot").AlertContactDeleteSuccessResponse) => AlertContactDeleteSuccessResponse;
/**
 * AlertContactListRequest -> Uptimerobot.AlertContactListRequest
 */
export declare const getAlertContactListRequestToApiRequest: (request: AlertContactListRequest) => import("uptimerobot").AlertContactListRequest;
/**
 * AlertContactCreateRequest -> Uptimerobot.AlertContactCreateRequest
 */
export declare const getAlertContactCreateRequestToApiRequest: (request: AlertContactCreateRequest) => import("uptimerobot").AlertContactCreateRequest;
/**
 * AlertContactEditRequest -> Uptimerobot.AlertContactEditRequest
 */
export declare const getAlertContactEditRequestToApiRequest: (request: AlertContactEditRequest) => import("uptimerobot").AlertContactEditRequest;
/**
 * AlertContactDeleteRequest -> Uptimerobot.AlertContactDeleteRequest
 */
export declare const getAlertContactDeleteRequestToApiRequest: (request: AlertContactDeleteRequest) => import("uptimerobot").AlertContactDeleteRequest;
