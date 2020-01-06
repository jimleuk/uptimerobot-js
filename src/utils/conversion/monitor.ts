import {
  applyBoolConversion,
  applyArrayConversion,
  applyDateConversion,
  applyTimeRangeConversion,
  getMonitorHttpCustomStatusesToApiValue,
} from './values';
import {
  Stat,
  Monitor,
  MonitorType,
  MonitorState,
  MonitorSubType,
  MonitorKeywordType,
  MonitorListRequest,
  MonitorHttpCustomStatus,
  MonitorListSuccessResponse,
  MonitorCreateRequest,
  MonitorCreateSuccessResponse,
  MonitorEditRequest,
  MonitorEditSuccessResponse,
  MonitorDeleteRequest,
  MonitorDeleteSuccessResponse,
  MonitorResetRequest,
  MonitorResetSuccessResponse,
  Log,
  LogType,
  TimeRange,
} from '../../types';

// Models =================================================================== //

/**
 * Uptimerobot.Log -> Log
 */
export const getApiLogToLog = (log: Uptimerobot.Log): Log => ({
  ...log,
  datetime: applyDateConversion(log.datetime) as Date,
  type: log.type as LogType,
  reason: log.reason
    ? {
        ...log.reason,
        code: log.reason.code as LogType,
      }
    : undefined,
});

/**
 * Uptimerobot.Monitor -> Monitor
 */
export const getApiMonitorToMonitor = (
  monitor: Uptimerobot.Monitor
): Monitor => ({
  ...monitor,
  type: monitor.type as MonitorType,
  sub_type: monitor.sub_type as MonitorSubType,
  keyword_type: monitor.keyword_type as MonitorKeywordType,
  status: monitor.status as MonitorState,
  create_datetime: new Date(monitor.create_datetime),
  logs: monitor.logs?.map(getApiLogToLog),
  is_group_main: applyBoolConversion(monitor.type) as boolean,
});

// Responses ================================================================ //

/**
 * Uptimerobot.MonitorListSuccessResponse -> MonitorListSuccessResponse
 */
export const getApiResponseToMonitorListResponse = (
  response: Uptimerobot.MonitorListSuccessResponse
): MonitorListSuccessResponse => ({
  stat: response.stat as Stat,
  pagination: response.pagination,
  monitors: response.monitors.map(getApiMonitorToMonitor),
});

/**
 * Uptimerobot.MonitorCreateSuccessResponse -> MonitorCreateSuccessResponse
 */
export const getApiResponseToMonitorCreateResponse = (
  response: Uptimerobot.MonitorCreateSuccessResponse
): MonitorCreateSuccessResponse => ({
  stat: response.stat as Stat,
  monitor: {
    id: response.monitor.id as Monitor['id'],
    status: response.monitor.status as MonitorState,
  },
});

/**
 * Uptimerobot.MonitorEditSuccessResponse -> MonitorEditSuccessResponse
 */
export const getApiResponseToMonitorEditResponse = (
  response: Uptimerobot.MonitorEditSuccessResponse
): MonitorEditSuccessResponse => ({
  stat: response.stat as Stat,
  monitor: {
    id: response.monitor.id as Monitor['id'],
  },
});

/**
 * Uptimerobot.MonitorDeleteSuccessResponse -> MonitorDeleteSuccessResponse
 */
export const getApiResponseToMonitorDeleteResponse = (
  response: Uptimerobot.MonitorDeleteSuccessResponse
): MonitorDeleteSuccessResponse => ({
  stat: response.stat as Stat,
  monitor: {
    id: response.monitor.id as Monitor['id'],
  },
});

/**
 * Uptimerobot.MonitorResetSuccessResponse -> MonitorResetSuccessResponse
 */
export const getApiResponseToMonitorResetResponse = (
  response: Uptimerobot.MonitorResetSuccessResponse
): MonitorResetSuccessResponse => ({
  stat: response.stat as Stat,
  monitor: {
    id: response.monitor.id as Monitor['id'],
  },
});

// Requests ================================================================= //

/**
 * MonitorListRequest -> Uptimerobot.MonitorListRequest
 */
export const getMonitorListRequestToApiRequest = (
  request: MonitorListRequest
): Uptimerobot.MonitorListRequest => ({
  ...request,
  monitors: applyArrayConversion(request.monitors as number[]) as
    | string
    | undefined,
  types: applyArrayConversion(request.types as number[]) as string | undefined,
  statuses: applyArrayConversion(request.statuses as number[]) as
    | string
    | undefined,
  custom_uptime_ratios: applyTimeRangeConversion(
    request.custom_uptime_ratios as TimeRange[]
  ) as string | undefined,
  custom_uptime_ranges: applyTimeRangeConversion(
    request.custom_uptime_ranges as TimeRange[]
  ) as string | undefined,
  all_time_uptime_ratio: applyBoolConversion(
    request.all_time_uptime_ratio as boolean
  ) as Uptimerobot.MonitorListRequest['all_time_uptime_ratio'],
  all_time_uptime_durations: applyBoolConversion(
    request.all_time_uptime_durations as boolean
  ) as Uptimerobot.MonitorListRequest['all_time_uptime_durations'],
  logs: applyBoolConversion(
    request.logs as boolean
  ) as Uptimerobot.MonitorListRequest['logs'],
  logs_start_date: applyDateConversion(request.logs_start_date as Date) as
    | number
    | undefined,
  logs_end_date: applyDateConversion(request.logs_end_date as Date) as
    | number
    | undefined,
  log_types: applyArrayConversion(request.log_types as number[]) as
    | string
    | undefined,
  response_times: applyBoolConversion(
    request.response_times as boolean
  ) as Uptimerobot.MonitorListRequest['response_times'],
  response_times_start_date: applyDateConversion(
    request.response_times_start_date as Date
  ) as number | undefined,
  response_times_end_date: applyDateConversion(
    request.response_times_end_date as Date
  ) as number | undefined,
  alert_contacts: applyBoolConversion(
    request.alert_contacts as boolean
  ) as Uptimerobot.MonitorListRequest['alert_contacts'],
  mwindows: applyArrayConversion(request.mwindows as number[]) as
    | string
    | undefined,
  ssl: applyBoolConversion(
    request.ssl as boolean
  ) as Uptimerobot.MonitorListRequest['ssl'],
  custom_http_headers: applyBoolConversion(
    request.custom_http_headers as boolean
  ) as Uptimerobot.MonitorListRequest['custom_http_headers'],
  custom_http_statuses: applyBoolConversion(
    request.custom_http_statuses as boolean
  ) as Uptimerobot.MonitorListRequest['custom_http_statuses'],
  timezone: applyBoolConversion(
    request.timezone as boolean
  ) as Uptimerobot.MonitorListRequest['timezone'],
});

/**
 * MonitorCreateRequest -> Uptimerobot.MonitorCreateRequest
 */
export const getMonitorCreateRequestToApiRequest = (
  request: MonitorCreateRequest
): Uptimerobot.MonitorCreateRequest => ({
  ...request,
  alert_contacts: applyArrayConversion(
    request.alert_contacts as number[]
  ) as string,
  custom_http_statuses: getMonitorHttpCustomStatusesToApiValue(
    request.custom_http_statuses as MonitorHttpCustomStatus[]
  ) as string,
  ignore_ssl_errors: applyBoolConversion(
    request.ignore_ssl_errors as boolean
  ) as Uptimerobot.MonitorCreateRequest['ignore_ssl_errors'],
});

/**
 * MonitorEditRequest -> Uptimerobot.MonitorEditRequest
 */
export const getMonitorEditRequestToApiRequest = (
  request: MonitorEditRequest
): Uptimerobot.MonitorEditRequest => ({
  ...request,
  alert_contacts: applyArrayConversion(
    request.alert_contacts as number[]
  ) as string,
  custom_http_statuses: getMonitorHttpCustomStatusesToApiValue(
    request.custom_http_statuses as MonitorHttpCustomStatus[]
  ),
  ignore_ssl_errors: applyBoolConversion(
    request.ignore_ssl_errors as boolean
  ) as Uptimerobot.MonitorCreateRequest['ignore_ssl_errors'],
});

/**
 * MonitorDeleteRequest -> Uptimerobot.MonitorDeleteRequest
 */
export const getMonitorDeleteRequestToApiRequest = (
  request: MonitorDeleteRequest
): Uptimerobot.MonitorDeleteRequest => ({
  ...request,
});

/**
 * MonitorResetRequest -> Uptimerobot.MonitorResetRequest
 */
export const getMonitorResetRequestToApiRequest = (
  request: MonitorResetRequest
): Uptimerobot.MonitorResetRequest => ({
  ...request,
});
