import { Client } from './client';
import {
  MWindowListRequest,
  MWindowCreateRequest,
  MWindowEditRequest,
  MWindowDeleteRequest,
} from './types';
import {
  getMWindowListRequestToApiRequest,
  getApiResponseToMWindowListResponse,
  getMWindowCreateRequestToApiRequest,
  getApiResponseToMWindowCreateResponse,
  getMWindowEditRequestToApiRequest,
  getApiResponseToMWindowEditResponse,
  getMWindowDeleteRequestToApiRequest,
  getApiResponseToMWindowDeleteResponse,
} from './utils/conversion/mWindow';

export class MWindow extends Client {
  /**
   * Returns one or more specified maintenance windows.
   */
  get = async (
    mwindows: MWindowListRequest['mwindows'],
    params?: Omit<MWindowListRequest, 'mwindows'>
  ) => {
    const response = await this.post<
      Uptimerobot.MWindowListRequest,
      Uptimerobot.MWindowListResponse
    >(
      'getMWindows',
      params ? getMWindowListRequestToApiRequest({ ...params, mwindows }) : {}
    );

    return getApiResponseToMWindowListResponse(
      response as Uptimerobot.MWindowListSuccessResponse
    );
  };

  /**
   * The list of maintenance windows can be called with this method.
   */
  list = async (params?: Omit<MWindowListRequest, 'mwindows'>) => {
    const response = await this.post<
      Omit<Uptimerobot.MWindowListRequest, 'mwindows'>,
      Uptimerobot.MWindowListResponse
    >('getMWindows', params ? getMWindowListRequestToApiRequest(params) : {});

    return getApiResponseToMWindowListResponse(
      response as Uptimerobot.MWindowListSuccessResponse
    );
  };

  /**
   * New maintenance windows can be created using this method.
   */
  create = async (params: MWindowCreateRequest) => {
    const response = await this.post<
      Uptimerobot.MWindowCreateRequest,
      Uptimerobot.MWindowCreateResponse
    >('newMWindow', getMWindowCreateRequestToApiRequest(params));

    return getApiResponseToMWindowCreateResponse(
      response as Uptimerobot.MWindowCreateSuccessResponse
    );
  };

  /**
   * Maintenance windows can be edited using this method.
   */
  update = async (params: MWindowEditRequest) => {
    const response = await this.post<
      Uptimerobot.MWindowEditRequest,
      Uptimerobot.MWindowEditResponse
    >('editMWindow', getMWindowEditRequestToApiRequest(params));

    return getApiResponseToMWindowEditResponse(
      response as Uptimerobot.MWindowEditSuccessResponse
    );
  };

  /**
   * Maintenance windows can be deleted using this method.
   */
  delete = async (params: MWindowDeleteRequest) => {
    const response = await this.post<
      Uptimerobot.MWindowDeleteRequest,
      Uptimerobot.MWindowDeleteResponse
    >('deleteMWindow', getMWindowDeleteRequestToApiRequest(params));

    return getApiResponseToMWindowDeleteResponse(
      response as Uptimerobot.MWindowDeleteSuccessResponse
    );
  };
}
