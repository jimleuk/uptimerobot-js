/// <reference types="uptimerobot" />
import { Stat } from '../types';
export interface Account extends Uptimerobot.Account {
}
export interface AccountListResponse extends Omit<Uptimerobot.AccountListSuccessResponse, 'stat' | 'account'> {
    stat: Stat;
    account: Account;
}
