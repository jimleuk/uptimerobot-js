import { applyArrayConversion, applyBoolConversion } from './values';
import {
  Stat,
  Pagination,
  PSP,
  PSPState,
  PSPSort,
  PSPListRequest,
  PSPListSuccessResponse,
  PSPCreateRequest,
  PSPCreateSuccessResponse,
  PSPDeleteRequest,
  PSPDeleteSuccessResponse,
  PSPEditRequest,
  PSPEditSuccessResponse,
} from '../../types';

// Models =================================================================== //

/**
 * Uptimerobot.PSP -> PSP
 */
export const getApiPSPToPSP = (psp: Uptimerobot.PSP): PSP => ({
  ...psp,
  sort: psp.sort as PSPSort,
  status: psp.status as PSPState,
  monitors: applyArrayConversion(psp.monitors) as number[],
});

/**
 * PSP -> Uptimerobot.PSP
 */
export const getPSPToApiPSP = (psp: PSP): Uptimerobot.PSP => ({
  ...psp,
  monitors: applyArrayConversion(psp.monitors) as string,
});

// Responses ================================================================ //

/**
 * Uptimerobot.PSPListSuccessResponse -> PSPListSuccessResponse
 */
export const getApiResponseToPSPListResponse = (
  response: Uptimerobot.PSPListSuccessResponse
): PSPListSuccessResponse => ({
  stat: response.stat as Stat,
  pagination: {
    limit: response.limit as Pagination['limit'],
    offset: response.offset as Pagination['offset'],
    total: response.total as Pagination['total'],
  },
  psps: response.psps.map(getApiPSPToPSP),
});

/**
 * Uptimerobot.PSPCreateSuccessResponse -> PSPCreateSuccessResponse
 */
export const getApiResponseToPSPCreateResponse = (
  response: Uptimerobot.PSPCreateSuccessResponse
): PSPCreateSuccessResponse => ({
  ...response,
  stat: response.stat as Stat,
});

/**
 * Uptimerobot.PSPEditSuccessResponse -> PSPEditSuccessResponse
 */
export const getApiResponseToPSPEditResponse = (
  response: Uptimerobot.PSPEditSuccessResponse
): PSPEditSuccessResponse => ({
  ...response,
  stat: response.stat as Stat,
});

/**
 * Uptimerobot.PSPDeleteSuccessResponse -> PSPDeleteSuccessResponse
 */
export const getApiResponseToPSPDeleteResponse = (
  response: Uptimerobot.PSPDeleteSuccessResponse
): PSPDeleteSuccessResponse => ({
  ...response,
  stat: response.stat as Stat,
});

// Requests ================================================================= //

/**
 * PSPListRequest -> Uptimerobot.PSPListRequest
 */
export const getPSPListRequestToApiRequest = (
  request: PSPListRequest
): Uptimerobot.PSPListRequest => ({
  ...request,
  psps: applyArrayConversion(request.psps) as string,
});

/**
 * PSPCreateRequest -> Uptimerobot.PSPCreateRequest
 */
export const getPSPCreateRequestToApiRequest = (
  request: PSPCreateRequest
): Uptimerobot.PSPCreateRequest => ({
  ...request,
  monitors: applyArrayConversion(request.monitors) as string,
  hide_url_links: applyBoolConversion(
    request.hide_url_links
  ) as Uptimerobot.PSPCreateRequest['hide_url_links'],
});

/**
 * PSPEditRequest -> Uptimerobot.PSPEditRequest
 */
export const getPSPEditRequestToApiRequest = (
  request: PSPEditRequest
): Uptimerobot.PSPEditRequest => ({
  ...request,
  monitors: applyArrayConversion(request.monitors) as string,
  hide_url_links: applyBoolConversion(
    request.hide_url_links
  ) as Uptimerobot.PSPCreateRequest['hide_url_links'],
});

/**
 * PSPDeleteRequest -> Uptimerobot.PSPDeleteRequest
 */
export const getPSPDeleteRequestToApiRequest = (
  request: PSPDeleteRequest
): Uptimerobot.PSPDeleteRequest => ({
  ...request,
});
