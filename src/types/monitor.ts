import {
  Stat,
  MonitorState,
  MonitorType,
  MonitorSubType,
  MonitorHttpMethod,
  MonitorHttpMethodContentType,
  MonitorHttpMethodPostType,
  MonitorKeywordType,
  LogType,
} from './enums';
import { TimeRange, Pagination } from './other';

// Models =================================================================== //

/** A log for a Monitor */
export interface Log
  extends Omit<Uptimerobot.Log, 'type' | 'datetime' | 'reason.code'> {
  /** type of log event */
  type: LogType;
  /** Unix Time. The date and time of the log (inherits the user's timezone
   * setting).
   */
  datetime: Date;
  /** the reason of the downtime (if exists). */
  reason?: {
    /** type of log event */
    code: LogType;
    /** detail of log event */
    detail: string;
  };
}

/** A Monitor is akin to a scheduled task/job */
export interface Monitor
  extends Omit<
    Uptimerobot.Monitor,
    | 'type'
    | 'sub_type'
    | 'keyword_type'
    | 'status'
    | 'create_datetime'
    | 'logs'
    | 'is_group_main'
  > {
  /** The type of monitor */
  type: MonitorType;
  /** used only for "Port monitoring (monitor>type = 4)" and shows which
   * pre-defined port/service is monitored or if a custom port is monitored.
   */
  sub_type?: MonitorSubType;
  /** used only for "Keyword monitoring (monitor>type = 2)" and shows "if the
   * monitor will be flagged as down when the keyword exists or not exists".
   */
  keyword_type?: MonitorKeywordType;
  /** Used only for "Keyword monitoring (monitor>type = 2)" and shows "if the
   * monitor will be flagged as down when the keyword exists or not exists".
   * The value of the keyword.
   */
  /** The status of the monitor */
  status: MonitorState;
  /** creation time of Monitor in unix timestamp format */
  create_datetime: Date;
  /** 0 - false, 1 - true */
  is_group_main?: boolean;
  /** all events logged for this Monitor. Only available if requested
   * (ie. ?logs=1)
   */
  logs?: Log[];
}

/**
 * A custom http status
 */
export interface MonitorHttpCustomStatus {
  /** The http status code ie. 200, 400 */
  code: number;
  status: MonitorState;
}

// Responses ================================================================ //

export interface MonitorListSuccessResponse
  extends Omit<
    Uptimerobot.MonitorListSuccessResponse,
    'stat' | 'pagination' | 'monitors'
  > {
  stat: Stat;
  pagination: Pagination;
  monitors: Monitor[];
}

export interface MonitorCreateSuccessResponse
  extends Omit<Uptimerobot.MonitorCreateSuccessResponse, 'stat' | 'monitor'> {
  stat: Stat;
  monitor: Pick<Monitor, 'id' | 'status'>;
}

export interface MonitorEditSuccessResponse
  extends Omit<Uptimerobot.MonitorEditSuccessResponse, 'stat' | 'monitor'> {
  stat: Stat;
  monitor: Pick<Monitor, 'id'>;
}

export interface MonitorDeleteSuccessResponse
  extends Omit<Uptimerobot.MonitorDeleteSuccessResponse, 'stat' | 'monitor'> {
  stat: Stat;
  monitor: Pick<Monitor, 'id'>;
}

export interface MonitorResetSuccessResponse
  extends Omit<Uptimerobot.MonitorResetSuccessResponse, 'stat' | 'monitor'> {
  stat: Stat;
  monitor: Pick<Monitor, 'id'>;
}

// Requests ================================================================= //

export interface MonitorListRequest
  extends Omit<
    Uptimerobot.MonitorListRequest,
    | 'monitors'
    | 'types'
    | 'statuses'
    | 'custom_uptime_ratios'
    | 'custom_uptime_ranges'
    | 'all_time_uptime_ratio'
    | 'all_time_uptime_durations'
    | 'logs'
    | 'logs_start_date'
    | 'logs_end_date'
    | 'log_types'
    | 'response_times'
    | 'response_times_start_date'
    | 'response_times_end_date'
    | 'alert_contacts'
    | 'mwindows'
    | 'ssl'
    | 'custom_http_headers'
    | 'custom_http_statuses'
    | 'timezone'
  > {
  monitors?: Array<Uptimerobot.Monitor['id']>;
  types?: MonitorType[];
  statuses?: MonitorState[];
  custom_uptime_ratios?: TimeRange[];
  custom_uptime_ranges?: TimeRange[];
  all_time_uptime_ratio?: boolean;
  all_time_uptime_durations?: boolean;
  logs?: boolean;
  logs_start_date?: Date;
  logs_end_date?: Date;
  log_types?: LogType[];
  response_times?: boolean;
  response_times_start_date?: Date;
  response_times_end_date?: Date;
  alert_contacts?: boolean;
  mwindows?: Array<Uptimerobot.MWindow['id']>;
  ssl?: boolean;
  custom_http_headers?: boolean;
  custom_http_statuses?: boolean;
  timezone?: boolean;
}

export interface MonitorCreateRequest
  extends Omit<
    Uptimerobot.MonitorCreateRequest,
    | 'type'
    | 'sub_type'
    | 'keyword_type'
    | 'http_method'
    | 'post_type'
    | 'post_content_type'
    | 'alert_contacts'
    | 'custom_http_statuses'
    | 'ignore_ssl_errors'
  > {
  type: MonitorType;
  sub_type?: MonitorSubType;
  keyword_type?: MonitorKeywordType;
  http_method?: MonitorHttpMethod;
  post_type?: MonitorHttpMethodPostType;
  post_content_type?: MonitorHttpMethodContentType;
  alert_contacts?: number[];
  custom_http_statuses?: MonitorHttpCustomStatus[];
  ignore_ssl_errors?: boolean;
}

export interface MonitorEditRequest
  extends Omit<
    Uptimerobot.MonitorEditRequest,
    | 'sub_type'
    | 'keyword_type'
    | 'http_method'
    | 'post_type'
    | 'post_content_type'
    | 'alert_contacts'
    | 'custom_http_statuses'
    | 'ignore_ssl_errors'
  > {
  sub_type?: MonitorSubType;
  keyword_type?: MonitorKeywordType;
  http_method?: MonitorHttpMethod;
  post_type?: MonitorHttpMethodPostType;
  post_content_type?: MonitorHttpMethodContentType;
  alert_contacts?: number[];
  custom_http_statuses?: MonitorHttpCustomStatus[];
  ignore_ssl_errors?: boolean;
}

export interface MonitorDeleteRequest
  extends Omit<Uptimerobot.MonitorDeleteRequest, 'id'> {
  id: Monitor['id'];
}

export interface MonitorResetRequest
  extends Omit<Uptimerobot.MonitorResetRequest, 'id'> {
  id: Monitor['id'];
}
