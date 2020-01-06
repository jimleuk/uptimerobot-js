import { Stat } from '../types';

// Models =================================================================== //

export interface Account extends Uptimerobot.Account {}

// Responses ================================================================ //

export interface AccountListResponse
  extends Omit<Uptimerobot.AccountListSuccessResponse, 'stat' | 'account'> {
  stat: Stat;
  account: Account;
}
