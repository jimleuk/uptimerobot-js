import { Client } from './client';
import { getApiResponseToAccountListResponse } from './utils/conversion/account';

export class Account extends Client {
  /**
   * Not implemented
   */
  get = () => {
    throw new Error('Not Implemented');
  };

  /**
   * Account details (max number of monitors that can be added and number of
   * up/down/paused monitors) can be grabbed using this method.
   */
  list = async () => {
    const response = await this.post<void, Uptimerobot.AccountListResponse>(
      'getAccountDetails'
    );

    return getApiResponseToAccountListResponse(
      response as Uptimerobot.AccountListSuccessResponse
    );
  };

  /**
   * Not implemented
   */
  create = () => {
    throw new Error('Not Implemented');
  };

  /**
   * Not implemented
   */
  update = () => {
    throw new Error('Not Implemented');
  };

  /**
   * Not implemented
   */
  delete = () => {
    throw new Error('Not Implemented');
  };
}
