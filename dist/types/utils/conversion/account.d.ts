/// <reference types="uptimerobot" />
import { Account, AccountListResponse } from '../../types';
/**
 * Uptimerobot.Account -> Account
 */
export declare const getApiAccountToAccount: (account: import("uptimerobot").Account) => Account;
/**
 * Account -> Uptimerobot.Account
 */
export declare const getAccountToApiAccount: (account: Account) => import("uptimerobot").Account;
/**
 * Uptimerobot.AccountListSuccessResponse -> AccountListResponse
 */
export declare const getApiResponseToAccountListResponse: (response: import("uptimerobot").AccountListSuccessResponse) => AccountListResponse;
