import { Client } from './client';
import {
  MonitorListRequest,
  MonitorCreateRequest,
  MonitorEditRequest,
  MonitorDeleteRequest,
  MonitorResetRequest,
} from './types';
import {
  getMonitorListRequestToApiRequest,
  getApiResponseToMonitorListResponse,
  getMonitorCreateRequestToApiRequest,
  getApiResponseToMonitorCreateResponse,
  getMonitorEditRequestToApiRequest,
  getApiResponseToMonitorEditResponse,
  getMonitorDeleteRequestToApiRequest,
  getApiResponseToMonitorDeleteResponse,
  getMonitorResetRequestToApiRequest,
  getApiResponseToMonitorResetResponse,
} from './utils/conversion/monitor';

export class Monitor extends Client {
  /**
   * Returns one or more specified Monitors.
   * See Monitor#list method description.
   */
  get = async (
    monitors: MonitorListRequest['monitors'],
    params?: Omit<MonitorListRequest, 'monitors'>
  ) => {
    const response = await this.post<
      Uptimerobot.MonitorListRequest,
      Uptimerobot.MonitorListResponse
    >(
      'getMonitors',
      params ? getMonitorListRequestToApiRequest({ ...params, monitors }) : {}
    );

    return getApiResponseToMonitorListResponse(
      response as Uptimerobot.MonitorListSuccessResponse
    );
  };

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
  list = async (params?: Omit<MonitorListRequest, 'monitors'>) => {
    const response = await this.post<
      Omit<Uptimerobot.MonitorListRequest, 'monitors'>,
      Uptimerobot.MonitorListResponse
    >('getMonitors', params ? getMonitorListRequestToApiRequest(params) : {});

    return getApiResponseToMonitorListResponse(
      response as Uptimerobot.MonitorListSuccessResponse
    );
  };

  /**
   * New monitors of any type can be created using this method.
   */
  create = async (params: MonitorCreateRequest) => {
    const response = await this.post<
      Uptimerobot.MonitorCreateRequest,
      Uptimerobot.MonitorCreateResponse
    >('newMonitor', getMonitorCreateRequestToApiRequest(params));

    return getApiResponseToMonitorCreateResponse(
      response as Uptimerobot.MonitorCreateSuccessResponse
    );
  };

  /**
   * Monitors can be edited using this method.
   * Important: The type of a monitor can not be edited (like changing a HTTP
   * monitor into a Port monitor). For such cases, deleting the monitor and
   * re-creating a new one is advised.
   */
  update = async (params: MonitorEditRequest) => {
    const response = await this.post<
      Uptimerobot.MonitorEditRequest,
      Uptimerobot.MonitorEditResponse
    >('editMonitor', getMonitorEditRequestToApiRequest(params));

    return getApiResponseToMonitorEditResponse(
      response as Uptimerobot.MonitorEditSuccessResponse
    );
  };

  /**
   * Monitors can be deleted using this method.
   */
  delete = async (params: MonitorDeleteRequest) => {
    const response = await this.post<
      Uptimerobot.MonitorDeleteRequest,
      Uptimerobot.MonitorDeleteResponse
    >('deleteMonitor', getMonitorDeleteRequestToApiRequest(params));

    return getApiResponseToMonitorDeleteResponse(
      response as Uptimerobot.MonitorDeleteSuccessResponse
    );
  };

  /**
   * Monitors can be reset (deleting all stats and response time data) using this method.
   */
  reset = async (params: MonitorResetRequest) => {
    const response = await this.post<
      Uptimerobot.MonitorResetRequest,
      Uptimerobot.MonitorResetResponse
    >('resetMonitor', getMonitorResetRequestToApiRequest(params));

    return getApiResponseToMonitorResetResponse(
      response as Uptimerobot.MonitorResetSuccessResponse
    );
  };
}
