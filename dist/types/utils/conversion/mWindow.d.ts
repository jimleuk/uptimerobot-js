/// <reference types="uptimerobot" />
import { MWindow, MWindowListRequest, MWindowListSuccessResponse, MWindowCreateRequest, MWindowCreateSuccessResponse, MWindowDeleteRequest, MWindowDeleteSuccessResponse, MWindowEditRequest, MWindowEditSuccessResponse } from '../../types';
/**
 * Uptimerobot.MWindow -> MWindow
 */
export declare const getApiMWindowToMWindow: (mWindow: import("uptimerobot").MWindow) => MWindow;
/**
 * MWindow -> Uptimerobot.MWindow
 */
export declare const getMWindowToApiMWindow: (mWindow: MWindow) => import("uptimerobot").MWindow;
/**
 * Uptimerobot.MWindowListSuccessResponse -> MWindowListSuccessResponse
 */
export declare const getApiResponseToMWindowListResponse: (response: import("uptimerobot").MWindowListSuccessResponse) => MWindowListSuccessResponse;
/**
 * Uptimerobot.MWindowCreateSuccessResponse -> MWindowCreateSuccessResponse
 */
export declare const getApiResponseToMWindowCreateResponse: (response: import("uptimerobot").MWindowCreateSuccessResponse) => MWindowCreateSuccessResponse;
/**
 * Uptimerobot.MWindowEditSuccessResponse -> MWindowEditSuccessResponse
 */
export declare const getApiResponseToMWindowEditResponse: (response: import("uptimerobot").MWindowEditSuccessResponse) => MWindowEditSuccessResponse;
/**
 * Uptimerobot.MWindowDeleteSuccessResponse -> MWindowDeleteSuccessResponse
 */
export declare const getApiResponseToMWindowDeleteResponse: (response: import("uptimerobot").MWindowDeleteSuccessResponse) => MWindowDeleteSuccessResponse;
/**
 * MWindowListRequest -> Uptimerobot.MWindowListRequest
 */
export declare const getMWindowListRequestToApiRequest: (request: MWindowListRequest) => import("uptimerobot").MWindowListRequest;
/**
 * MWindowCreateRequest -> Uptimerobot.MWindowCreateRequest
 */
export declare const getMWindowCreateRequestToApiRequest: (request: MWindowCreateRequest) => import("uptimerobot").MWindowCreateRequest;
/**
 * MWindowEditRequest -> Uptimerobot.MWindowEditRequest
 */
export declare const getMWindowEditRequestToApiRequest: (request: MWindowEditRequest) => import("uptimerobot").MWindowEditRequest;
/**
 * MWindowDeleteRequest -> Uptimerobot.MWindowDeleteRequest
 */
export declare const getMWindowDeleteRequestToApiRequest: (request: MWindowDeleteRequest) => import("uptimerobot").MWindowDeleteRequest;
