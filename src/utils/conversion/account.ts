import { Stat, Account, AccountListResponse } from '../../types';

// Models =================================================================== //

/**
 * Uptimerobot.Account -> Account
 */
export const getApiAccountToAccount = (
  account: Uptimerobot.Account
): Account => ({
  ...account,
});

/**
 * Account -> Uptimerobot.Account
 */
export const getAccountToApiAccount = (
  account: Account
): Uptimerobot.Account => ({
  ...account,
});

// Responses ================================================================ //

/**
 * Uptimerobot.AccountListSuccessResponse -> AccountListResponse
 */
export const getApiResponseToAccountListResponse = (
  response: Uptimerobot.AccountListSuccessResponse
): AccountListResponse => ({
  stat: response.stat as Stat,
  account: getApiAccountToAccount(response.account) as Account,
});
