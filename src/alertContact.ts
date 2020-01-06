import { Client } from './client';
import {
  AlertContactListRequest,
  AlertContactCreateRequest,
  AlertContactEditRequest,
  AlertContactDeleteRequest,
} from './types';
import {
  getAlertContactListRequestToApiRequest,
  getApiResponseToAlertContactListResponse,
  getAlertContactCreateRequestToApiRequest,
  getApiResponseToAlertContactCreateResponse,
  getAlertContactEditRequestToApiRequest,
  getApiResponseToAlertContactEditResponse,
  getAlertContactDeleteRequestToApiRequest,
  getApiResponseToAlertContactDeleteResponse,
} from './utils/conversion/alertContact';

export class AlertContact extends Client {
  /**
   * Returns one or more specified AlertContacts.
   */
  get = async (
    alertContacts: AlertContactListRequest['alert_contacts'],
    params?: Omit<AlertContactListRequest, 'alert_contacts'>
  ) => {
    const response = await this.post<
      Uptimerobot.AlertContactListRequest,
      Uptimerobot.AlertContactListResponse
    >(
      'getAlertContacts',
      params
        ? getAlertContactListRequestToApiRequest({
            ...params,
            alert_contacts: alertContacts,
          })
        : {}
    );

    return getApiResponseToAlertContactListResponse(
      response as Uptimerobot.AlertContactListSuccessResponse
    );
  };

  /**
   * The list of alert contacts can be called with this method.
   */
  list = async (params?: Omit<AlertContactListRequest, 'alert_contacts'>) => {
    const response = await this.post<
      Omit<Uptimerobot.AlertContactListRequest, 'alert_contacts'>,
      Uptimerobot.AlertContactListResponse
    >(
      'getAlertContacts',
      params ? getAlertContactListRequestToApiRequest(params) : {}
    );

    return getApiResponseToAlertContactListResponse(
      response as Uptimerobot.AlertContactListSuccessResponse
    );
  };

  /**
   * New alert contacts of any type (mobile/SMS alert contacts are not supported
   * yet) can be created using this method.
   * The alert contacts created using the API are validated with the same way as
   * they were created from uptimerobot.com (activation link for e-mails, etc.).
   */
  create = async (params: AlertContactCreateRequest) => {
    const response = await this.post<
      Uptimerobot.AlertContactCreateRequest,
      Uptimerobot.AlertContactCreateResponse
    >('newAlertContact', getAlertContactCreateRequestToApiRequest(params));

    return getApiResponseToAlertContactCreateResponse(
      response as Uptimerobot.AlertContactCreateSuccessResponse
    );
  };

  /**
   * Alert contacts can be edited using this method.
   */
  update = async (params: AlertContactEditRequest) => {
    const response = await this.post<
      Uptimerobot.AlertContactEditRequest,
      Uptimerobot.AlertContactEditResponse
    >('editAlertContact', getAlertContactEditRequestToApiRequest(params));

    return getApiResponseToAlertContactEditResponse(
      response as Uptimerobot.AlertContactEditSuccessResponse
    );
  };

  /**
   * Alert contacts can be deleted using this method.
   */
  delete = async (params: AlertContactDeleteRequest) => {
    const response = await this.post<
      Uptimerobot.AlertContactDeleteRequest,
      Uptimerobot.AlertContactDeleteResponse
    >('deleteAlertContact', getAlertContactDeleteRequestToApiRequest(params));

    return getApiResponseToAlertContactDeleteResponse(
      response as Uptimerobot.AlertContactDeleteSuccessResponse
    );
  };
}
