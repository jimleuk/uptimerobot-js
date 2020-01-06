/// <reference types="uptimerobot" />
import { PSP, PSPListRequest, PSPListResponse, PSPCreateRequest, PSPCreateSuccessResponse, PSPDeleteRequest, PSPDeleteSuccessResponse, PSPEditRequest, PSPEditSuccessResponse } from '../../types';
/**
 * Uptimerobot.PSP -> PSP
 */
export declare const getApiPSPToPSP: (psp: import("uptimerobot").PSP) => PSP;
/**
 * PSP -> Uptimerobot.PSP
 */
export declare const getPSPToApiPSP: (psp: PSP) => import("uptimerobot").PSP;
/**
 * Uptimerobot.PSPListSuccessResponse -> PSPListResponse
 */
export declare const getApiResponseToPSPListResponse: (response: import("uptimerobot").PSPListSuccessResponse) => PSPListResponse;
/**
 * Uptimerobot.PSPCreateSuccessResponse -> PSPCreateSuccessResponse
 */
export declare const getApiResponseToPSPCreateResponse: (response: import("uptimerobot").PSPCreateSuccessResponse) => PSPCreateSuccessResponse;
/**
 * Uptimerobot.PSPEditSuccessResponse -> PSPEditSuccessResponse
 */
export declare const getApiResponseToPSPEditResponse: (response: import("uptimerobot").PSPEditSuccessResponse) => PSPEditSuccessResponse;
/**
 * Uptimerobot.PSPDeleteSuccessResponse -> PSPDeleteSuccessResponse
 */
export declare const getApiResponseToPSPDeleteResponse: (response: import("uptimerobot").PSPDeleteSuccessResponse) => PSPDeleteSuccessResponse;
/**
 * PSPListRequest -> Uptimerobot.PSPListRequest
 */
export declare const getPSPListRequestToApiRequest: (request: PSPListRequest) => import("uptimerobot").PSPListRequest;
/**
 * PSPCreateRequest -> Uptimerobot.PSPCreateRequest
 */
export declare const getPSPCreateRequestToApiRequest: (request: PSPCreateRequest) => import("uptimerobot").PSPCreateRequest;
/**
 * PSPEditRequest -> Uptimerobot.PSPEditRequest
 */
export declare const getPSPEditRequestToApiRequest: (request: PSPEditRequest) => import("uptimerobot").PSPEditRequest;
/**
 * PSPDeleteRequest -> Uptimerobot.PSPDeleteRequest
 */
export declare const getPSPDeleteRequestToApiRequest: (request: PSPDeleteRequest) => import("uptimerobot").PSPDeleteRequest;
