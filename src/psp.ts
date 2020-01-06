import { Client } from './client';
import {
  PSPListRequest,
  PSPCreateRequest,
  PSPEditRequest,
  PSPDeleteRequest,
} from './types';
import {
  getPSPListRequestToApiRequest,
  getApiResponseToPSPListResponse,
  getPSPCreateRequestToApiRequest,
  getApiResponseToPSPCreateResponse,
  getPSPEditRequestToApiRequest,
  getApiResponseToPSPEditResponse,
  getPSPDeleteRequestToApiRequest,
  getApiResponseToPSPDeleteResponse,
} from './utils/conversion/psp';

export class PSP extends Client {
  /**
   * Returns one or more specified public status pages.
   */
  get = async (
    psps: PSPListRequest['psps'],
    params?: Omit<PSPListRequest, 'psps'>
  ) => {
    const response = await this.post<
      Uptimerobot.PSPListRequest,
      Uptimerobot.PSPListResponse
    >(
      'getPSPs',
      params ? getPSPListRequestToApiRequest({ ...params, psps }) : {}
    );

    return getApiResponseToPSPListResponse(
      response as Uptimerobot.PSPListSuccessResponse
    );
  };

  /**
   * The list of public status pages can be called with this method.
   */
  list = async (params?: Omit<Uptimerobot.PSPListRequest, 'psps'>) => {
    const response = await this.post<
      Uptimerobot.PSPListRequest,
      Uptimerobot.PSPListResponse
    >('getPSPs', params ? getPSPListRequestToApiRequest(params) : {});

    return getApiResponseToPSPListResponse(
      response as Uptimerobot.PSPListSuccessResponse
    );
  };

  /**
   * New public status pages can be created using this method.
   */
  create = async (params: PSPCreateRequest) => {
    const response = await this.post<
      Uptimerobot.PSPCreateRequest,
      Uptimerobot.PSPCreateResponse
    >('newPSP', getPSPCreateRequestToApiRequest(params));

    return getApiResponseToPSPCreateResponse(
      response as Uptimerobot.PSPCreateSuccessResponse
    );
  };

  /**
   * Public status pages can be edited using this method.
   */
  update = async (params: PSPEditRequest) => {
    const response = await this.post<
      Uptimerobot.PSPEditRequest,
      Uptimerobot.PSPEditResponse
    >('editPSP', getPSPEditRequestToApiRequest(params));

    return getApiResponseToPSPEditResponse(
      response as Uptimerobot.PSPEditSuccessResponse
    );
  };

  /**
   * Public status pages can be deleted using this method.
   */
  delete = async (params: PSPDeleteRequest) => {
    const response = await this.post<
      Uptimerobot.PSPDeleteRequest,
      Uptimerobot.PSPDeleteResponse
    >('deletePSP', getPSPDeleteRequestToApiRequest(params));

    return getApiResponseToPSPDeleteResponse(
      response as Uptimerobot.PSPDeleteSuccessResponse
    );
  };
}
