/// <reference types="uptimerobot" />
import { Monitor, MonitorListRequest, MonitorListSuccessResponse, MonitorCreateRequest, MonitorCreateSuccessResponse, MonitorEditRequest, MonitorEditSuccessResponse, MonitorDeleteRequest, MonitorDeleteSuccessResponse, MonitorResetRequest, MonitorResetSuccessResponse, Log } from '../../types';
/**
 * Uptimerobot.Log -> Log
 */
export declare const getApiLogToLog: (log: import("uptimerobot").Log) => Log;
/**
 * Uptimerobot.Monitor -> Monitor
 */
export declare const getApiMonitorToMonitor: (monitor: import("uptimerobot").Monitor) => Monitor;
/**
 * Uptimerobot.MonitorListSuccessResponse -> MonitorListSuccessResponse
 */
export declare const getApiResponseToMonitorListResponse: (response: import("uptimerobot").MonitorListSuccessResponse) => MonitorListSuccessResponse;
/**
 * Uptimerobot.MonitorCreateSuccessResponse -> MonitorCreateSuccessResponse
 */
export declare const getApiResponseToMonitorCreateResponse: (response: import("uptimerobot").MonitorCreateSuccessResponse) => MonitorCreateSuccessResponse;
/**
 * Uptimerobot.MonitorEditSuccessResponse -> MonitorEditSuccessResponse
 */
export declare const getApiResponseToMonitorEditResponse: (response: import("uptimerobot").MonitorEditSuccessResponse) => MonitorEditSuccessResponse;
/**
 * Uptimerobot.MonitorDeleteSuccessResponse -> MonitorDeleteSuccessResponse
 */
export declare const getApiResponseToMonitorDeleteResponse: (response: import("uptimerobot").MonitorDeleteSuccessResponse) => MonitorDeleteSuccessResponse;
/**
 * Uptimerobot.MonitorResetSuccessResponse -> MonitorResetSuccessResponse
 */
export declare const getApiResponseToMonitorResetResponse: (response: import("uptimerobot").MonitorResetSuccessResponse) => MonitorResetSuccessResponse;
/**
 * MonitorListRequest -> Uptimerobot.MonitorListRequest
 */
export declare const getMonitorListRequestToApiRequest: (request: MonitorListRequest) => import("uptimerobot").MonitorListRequest;
/**
 * MonitorCreateRequest -> Uptimerobot.MonitorCreateRequest
 */
export declare const getMonitorCreateRequestToApiRequest: (request: MonitorCreateRequest) => import("uptimerobot").MonitorCreateRequest;
/**
 * MonitorEditRequest -> Uptimerobot.MonitorEditRequest
 */
export declare const getMonitorEditRequestToApiRequest: (request: MonitorEditRequest) => import("uptimerobot").MonitorEditRequest;
/**
 * MonitorDeleteRequest -> Uptimerobot.MonitorDeleteRequest
 */
export declare const getMonitorDeleteRequestToApiRequest: (request: MonitorDeleteRequest) => import("uptimerobot").MonitorDeleteRequest;
/**
 * MonitorResetRequest -> Uptimerobot.MonitorResetRequest
 */
export declare const getMonitorResetRequestToApiRequest: (request: MonitorResetRequest) => import("uptimerobot").MonitorResetRequest;
