import { AxiosRequestConfig } from 'axios';
import { Client } from './client';
import { Account } from './account';
import { Monitor } from './monitor';
import { AlertContact } from './alertContact';
import { MWindow } from './mWindow';
import { PSP } from './psp';
export declare class Api extends Client {
    account: Account;
    monitor: Monitor;
    alertContact: AlertContact;
    mWindow: MWindow;
    psp: PSP;
    constructor(apiKey: string, axiosConfig?: AxiosRequestConfig);
}
