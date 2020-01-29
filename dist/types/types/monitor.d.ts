/// <reference types="uptimerobot" />
import { Stat, MonitorState, MonitorType, MonitorSubType, MonitorHttpMethod, MonitorHttpMethodContentType, MonitorHttpMethodPostType, MonitorKeywordType, LogType } from './enums';
import { TimeRange, Pagination } from './other';
/** A log for a Monitor */
export interface Log extends Omit<Uptimerobot.Log, 'type' | 'datetime' | 'reason.code'> {
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
export interface Monitor extends Omit<Uptimerobot.Monitor, 'type' | 'sub_type' | 'keyword_type' | 'status' | 'create_datetime' | 'logs' | 'is_group_main'> {
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
/** The alert contacts to be notified when the monitor goes up/down */
export interface MonitorAlertContactsNotification {
    id: number;
    threshold?: number;
    recurrence?: number;
}
export interface MonitorListSuccessResponse extends Omit<Uptimerobot.MonitorListSuccessResponse, 'stat' | 'pagination' | 'monitors'> {
    stat: Stat;
    pagination: Pagination;
    monitors: Monitor[];
}
export interface MonitorCreateSuccessResponse extends Omit<Uptimerobot.MonitorCreateSuccessResponse, 'stat' | 'monitor'> {
    stat: Stat;
    monitor: Pick<Monitor, 'id' | 'status'>;
}
export interface MonitorEditSuccessResponse extends Omit<Uptimerobot.MonitorEditSuccessResponse, 'stat' | 'monitor'> {
    stat: Stat;
    monitor: Pick<Monitor, 'id'>;
}
export interface MonitorDeleteSuccessResponse extends Omit<Uptimerobot.MonitorDeleteSuccessResponse, 'stat' | 'monitor'> {
    stat: Stat;
    monitor: Pick<Monitor, 'id'>;
}
export interface MonitorResetSuccessResponse extends Omit<Uptimerobot.MonitorResetSuccessResponse, 'stat' | 'monitor'> {
    stat: Stat;
    monitor: Pick<Monitor, 'id'>;
}
export interface MonitorListRequest extends Omit<Uptimerobot.MonitorListRequest, 'monitors' | 'types' | 'statuses' | 'custom_uptime_ratios' | 'custom_uptime_ranges' | 'all_time_uptime_ratio' | 'all_time_uptime_durations' | 'logs' | 'logs_start_date' | 'logs_end_date' | 'log_types' | 'response_times' | 'response_times_start_date' | 'response_times_end_date' | 'alert_contacts' | 'mwindows' | 'ssl' | 'custom_http_headers' | 'custom_http_statuses' | 'timezone'> {
    /** If not used, will return all monitors in an account. Else, it is
     * possible to define any number of monitors with their IDs like:
     * monitors=15830-32696-83920
     */
    monitors?: Array<Uptimerobot.Monitor['id']>;
    /** If not used, will return all monitors types (HTTP, keyword, ping..) in
     * an account. Else, it is possible to define any number of monitor types
     * like: types=1-3-4
     */
    types?: MonitorType[];
    /** If not used, will return all monitors statuses (up, down, paused) in an
     * account. Else, it is possible to define any number of monitor statuses
     * like: statuses=2-9
     */
    statuses?: MonitorState[];
    /** Defines the number of days to calculate the uptime ratio(s) for. Ex:
     * custom_uptime_ratios=7-30-45 to get the uptime ratios for those periods
     */
    custom_uptime_ratios?: TimeRange[];
    /** Defines the ranges to calculate the uptime ratio(s) for. Ex:
     * custom_uptime_ranges=1465440758_1466304758 to get the uptime ratios for
     * those periods. It is possible to send multiple ranges like
     * 1465440758_1466304758-1434682358_1434855158
     */
    custom_uptime_ranges?: TimeRange[];
    /** Returns the "all time uptime ratio". It will slow down the response a
     * bit and, if not really necessary, suggest not using it. Default is 0.
     * 0 - false or 1 - true
     */
    all_time_uptime_ratio?: boolean;
    /** Returns the "all time durations of up-down-paused events". It will slow
     * down the response a bit and, if not really necessary, suggest not using
     * it. Default is 0. 0 - false or 1 - true
     */
    all_time_uptime_durations?: boolean;
    /** Defines if the logs of each monitor will be returned. Should be set to 1
     * for getting the logs. Default is 0. 0 - false or 1 - true
     */
    logs?: boolean;
    /** PRO: works only for the Pro Plan as 24 hour+ logs are kept only in the
     * Pro Plan, formatted as Unix time and must be used with logs_end_date
     */
    logs_start_date?: Date;
    /** PRO: works only for the Pro Plan as 24 hour+ logs are kept only in the
     * Pro Plan, formatted as Unix time and must be used with logs_start_date
     */
    logs_end_date?: Date;
    /** The types of logs to be returned with a usage like: log_types=1-2-98).
     * If  empty, all log types are returned.
     */
    log_types?: LogType[];
    /** Defines if the response time data of each monitor will be returned.
     * Should be set to 1 for getting them. Default is 0. 0 - false or 1 - true
     */
    response_times?: boolean;
    /** Formatted as Unix time and must be used with response_times_end_date)
     * (response_times_end_date - response_times_start_date can't be more than
     * 7 days)
     */
    response_times_start_date?: Date;
    /** Formatted as Unix time and must be used with response_times_start_date
     * (response_times_end_date - response_times_start_date can't be more than
     * 7 days)
     */
    response_times_end_date?: Date;
    /** Defines if the alert contacts set for the monitor to be returned Default
     * is 0. 0 - false or 1 - true
     */
    alert_contacts?: boolean;
    /** The maintenance windows for the monitor which can be mentioned with
     * their IDs like 345-2986-71
     */
    mwindows?: Array<Uptimerobot.MWindow['id']>;
    /** Defines if SSL certificate info for each monitor will be returned.
     * 0 - false or 1 - true
     */
    ssl?: boolean;
    /** Defines if the custom HTTP headers of each monitor will be returned.
     * Should be set to 1 for getting them. Default is 0. 0 - false or 1 - true
     */
    custom_http_headers?: boolean;
    /** Defines if the custom HTTP statuses of each monitor will be returned.
     * Should be set to 1 for getting them. Default is 0. 0 - false or 1 - true
     */
    custom_http_statuses?: boolean;
    /** Defines if the user's timezone should be returned. Should be set to 1
     * for getting it. Default is 0. 0 - false or 1 - true
     */
    timezone?: boolean;
}
export interface MonitorCreateRequest extends Omit<Uptimerobot.MonitorCreateRequest, 'type' | 'sub_type' | 'keyword_type' | 'http_method' | 'post_type' | 'post_content_type' | 'post_value' | 'alert_contacts' | 'custom_http_headers' | 'custom_http_statuses' | 'ignore_ssl_errors'> {
    type: MonitorType;
    sub_type?: MonitorSubType;
    keyword_type?: MonitorKeywordType;
    /** The HTTP method to be used */
    http_method?: MonitorHttpMethod;
    /** The format of data to be sent with POST, PUT, PATCH, DELETE, OPTIONS
     * HTTP methods
     */
    post_type?: MonitorHttpMethodPostType;
    /** sets the Content-Type for POST, PUT, PATCH, DELETE, OPTIONS HTTP methods
     */
    post_content_type?: MonitorHttpMethodContentType;
    /** Must be sent as a JSON object. The data to be sent with POST, PUT, PATCH,
     * DELETE, OPTIONS HTTP methods
     */
    post_value?: {
        [k: string]: string;
    };
    /** The alert contacts to be notified when the monitor goes up/down.
     * Multiple alert_contact>ids can be sent like
     * alert_contacts=457_0_0-373_5_0-8956_2_3 where alert_contact>ids are
     * seperated with - and threshold + recurrence are seperated with _.
     * For ex: alert_contacts=457_5_0 refers to 457 being the
     * alert_contact>id,5 being the threshold and 0 being the recurrence.
     * PRO: As the threshold and recurrence is only available in the Pro Plan,
     * they are always 0 in the Free Plan
     */
    alert_contacts?: MonitorAlertContactsNotification[];
    /** Must be sent as a JSON object. Used for setting custom HTTP headers for
     * the monitor
     */
    custom_http_headers?: {
        [k: string]: string;
    };
    /** Must be sent as a JSON object. Used for setting custom HTTP headers for
     * the monitor
     */
    custom_http_statuses?: MonitorHttpCustomStatus[];
    /** For ignoring SSL certificate related errors. 0 - false or 1 - true. */
    ignore_ssl_errors?: boolean;
}
export interface MonitorEditRequest extends Omit<Uptimerobot.MonitorEditRequest, 'sub_type' | 'keyword_type' | 'http_method' | 'post_type' | 'post_content_type' | 'post_value' | 'alert_contacts' | 'custom_http_headers' | 'custom_http_statuses' | 'ignore_ssl_errors'> {
    sub_type?: MonitorSubType;
    keyword_type?: MonitorKeywordType;
    /** The HTTP method to be used */
    http_method?: MonitorHttpMethod;
    /** The format of data to be sent with POST, PUT, PATCH, DELETE, OPTIONS
     * HTTP methods
     */
    post_type?: MonitorHttpMethodPostType;
    /** sets the Content-Type for POST, PUT, PATCH, DELETE, OPTIONS HTTP methods
     */
    post_content_type?: MonitorHttpMethodContentType;
    /** Must be sent as a JSON object. The data to be sent with POST, PUT, PATCH,
     * DELETE, OPTIONS HTTP methods
     */
    post_value?: {
        [k: string]: string;
    };
    /** The alert contacts to be notified when the monitor goes up/down.
     * Multiple alert_contact>ids can be sent like
     * alert_contacts=457_0_0-373_5_0-8956_2_3 where alert_contact>ids are
     * seperated with - and threshold + recurrence are seperated with _.
     * For ex: alert_contacts=457_5_0 refers to 457 being the
     * alert_contact>id,5 being the threshold and 0 being the recurrence.
     * PRO: As the threshold and recurrence is only available in the Pro Plan,
     * they are always 0 in the Free Plan
     */
    alert_contacts?: MonitorAlertContactsNotification[];
    /** Must be sent as a JSON object. Used for setting custom HTTP headers for
     * the monitor
     */
    custom_http_headers?: {
        [k: string]: string;
    };
    /** Must be sent as 404:0_200:1 to accept 404 as down and 200 as up */
    custom_http_statuses?: MonitorHttpCustomStatus[];
    /** For ignoring SSL certificate related errors. 0 - false or 1 - true. */
    ignore_ssl_errors?: boolean;
}
export interface MonitorDeleteRequest extends Omit<Uptimerobot.MonitorDeleteRequest, 'id'> {
    id: Monitor['id'];
}
export interface MonitorResetRequest extends Omit<Uptimerobot.MonitorResetRequest, 'id'> {
    id: Monitor['id'];
}
