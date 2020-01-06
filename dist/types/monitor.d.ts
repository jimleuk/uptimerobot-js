import { Client } from './client';
import { MonitorListRequest, MonitorCreateRequest, MonitorEditRequest, MonitorDeleteRequest, MonitorResetRequest } from './types';
export declare class Monitor extends Client {
    /**
     * Returns one or more specified Monitors.
     * See Monitor#list method description.
     */
    get: (monitors: number[] | undefined, params?: Pick<MonitorListRequest, "search" | "limit" | "offset" | "alert_contacts" | "logs" | "types" | "statuses" | "custom_uptime_ratios" | "custom_uptime_ranges" | "all_time_uptime_ratio" | "all_time_uptime_durations" | "logs_start_date" | "logs_end_date" | "log_types" | "response_times" | "response_times_start_date" | "response_times_end_date" | "mwindows" | "ssl" | "custom_http_headers" | "custom_http_statuses" | "timezone" | "logs_limit" | "response_times_limit" | "response_times_average"> | undefined) => Promise<import("./types").MonitorListSuccessResponse>;
    /**
     * This is a Swiss-Army knife type of a method for getting any information on
     * monitors.
     * By default, it lists all the monitors in a user's account, their
     * friendly names, types (http, keyword, port, etc.), statuses (up, down,
     * etc.) and uptime ratios.
     * There are optional parameters which lets the getMonitors method to output
     * information on any given monitors rather than all of them.
     * And also, parameters exist for getting the notification logs (alerts) for
     * each monitor and even which alert contacts were alerted on each
     * notification.
     */
    list: (params?: Pick<MonitorListRequest, "search" | "limit" | "offset" | "alert_contacts" | "logs" | "types" | "statuses" | "custom_uptime_ratios" | "custom_uptime_ranges" | "all_time_uptime_ratio" | "all_time_uptime_durations" | "logs_start_date" | "logs_end_date" | "log_types" | "response_times" | "response_times_start_date" | "response_times_end_date" | "mwindows" | "ssl" | "custom_http_headers" | "custom_http_statuses" | "timezone" | "logs_limit" | "response_times_limit" | "response_times_average"> | undefined) => Promise<import("./types").MonitorListSuccessResponse>;
    /**
     * New monitors of any type can be created using this method.
     */
    create: (params: MonitorCreateRequest) => Promise<import("./types").MonitorCreateSuccessResponse>;
    /**
     * Monitors can be edited using this method.
     * Important: The type of a monitor can not be edited (like changing a HTTP
     * monitor into a Port monitor). For such cases, deleting the monitor and
     * re-creating a new one is advised.
     */
    update: (params: MonitorEditRequest) => Promise<import("./types").MonitorEditSuccessResponse>;
    /**
     * Monitors can be deleted using this method.
     */
    delete: (params: MonitorDeleteRequest) => Promise<import("./types").MonitorDeleteSuccessResponse>;
    /**
     * Monitors can be reset (deleting all stats and response time data) using this method.
     */
    reset: (params: MonitorResetRequest) => Promise<import("./types").MonitorResetSuccessResponse>;
}
