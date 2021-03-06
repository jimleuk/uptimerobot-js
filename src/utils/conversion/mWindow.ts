import {
  applyArrayConversion,
  getMWindowStartTimeToApiValue,
  getApiValueForMWindowStartTime,
} from './values';
import {
  Stat,
  Pagination,
  MWindow,
  MWindowState,
  MWindowType,
  MWindowListRequest,
  MWindowListSuccessResponse,
  MWindowCreateRequest,
  MWindowCreateSuccessResponse,
  MWindowDeleteRequest,
  MWindowDeleteSuccessResponse,
  MWindowEditRequest,
  MWindowEditSuccessResponse,
} from '../../types';

// Models =================================================================== //

/**
 * Uptimerobot.MWindow -> MWindow
 */
export const getApiMWindowToMWindow = (
  mWindow: Uptimerobot.MWindow
): MWindow => ({
  ...mWindow,
  status: mWindow.status as MWindowState,
  type: mWindow.type as MWindowType,
  start_time: getApiValueForMWindowStartTime(mWindow.type, mWindow.start_time),
  value: applyArrayConversion(mWindow.value) as number[],
});

/**
 * MWindow -> Uptimerobot.MWindow
 */
export const getMWindowToApiMWindow = (
  mWindow: MWindow
): Uptimerobot.MWindow => ({
  ...mWindow,
  user: mWindow.user || 0,
  start_time: getMWindowStartTimeToApiValue(mWindow.start_time) as string,
  value: applyArrayConversion(mWindow.value) as string,
});

// Responses ================================================================ //

/**
 * Uptimerobot.MWindowListSuccessResponse -> MWindowListSuccessResponse
 */
export const getApiResponseToMWindowListResponse = (
  response: Uptimerobot.MWindowListSuccessResponse
): MWindowListSuccessResponse => ({
  stat: response.stat as Stat,
  pagination: response.pagination as Pagination,
  mwindows: response.mwindows.map(getApiMWindowToMWindow),
});

/**
 * Uptimerobot.MWindowCreateSuccessResponse -> MWindowCreateSuccessResponse
 */
export const getApiResponseToMWindowCreateResponse = (
  response: Uptimerobot.MWindowCreateSuccessResponse
): MWindowCreateSuccessResponse => ({
  stat: response.stat as Stat,
  mwindow: {
    ...response.mwindow,
    status: response.mwindow.status as MWindowState,
  },
});

/**
 * Uptimerobot.MWindowEditSuccessResponse -> MWindowEditSuccessResponse
 */
export const getApiResponseToMWindowEditResponse = (
  response: Uptimerobot.MWindowEditSuccessResponse
): MWindowEditSuccessResponse => ({
  ...response,
  stat: response.stat as Stat,
});

/**
 * Uptimerobot.MWindowDeleteSuccessResponse -> MWindowDeleteSuccessResponse
 */
export const getApiResponseToMWindowDeleteResponse = (
  response: Uptimerobot.MWindowDeleteSuccessResponse
): MWindowDeleteSuccessResponse => ({
  ...response,
  stat: response.stat as Stat,
});

// Requests ================================================================= //

/**
 * MWindowListRequest -> Uptimerobot.MWindowListRequest
 */
export const getMWindowListRequestToApiRequest = (
  request: MWindowListRequest
): Uptimerobot.MWindowListRequest => ({
  ...request,
  mwindows: applyArrayConversion(request.mwindows) as string | undefined,
});

/**
 * MWindowCreateRequest -> Uptimerobot.MWindowCreateRequest
 */
export const getMWindowCreateRequestToApiRequest = (
  request: MWindowCreateRequest
): Uptimerobot.MWindowCreateRequest => ({
  ...request,
  start_time: getMWindowStartTimeToApiValue(request.start_time),
  value: applyArrayConversion(request.value) as string,
});

/**
 * MWindowEditRequest -> Uptimerobot.MWindowEditRequest
 */
export const getMWindowEditRequestToApiRequest = (
  request: MWindowEditRequest
): Uptimerobot.MWindowEditRequest => ({
  ...request,
  start_time: getMWindowStartTimeToApiValue(request.start_time),
});

/**
 * MWindowDeleteRequest -> Uptimerobot.MWindowDeleteRequest
 */
export const getMWindowDeleteRequestToApiRequest = (
  request: MWindowDeleteRequest
): Uptimerobot.MWindowDeleteRequest => ({
  ...request,
});
