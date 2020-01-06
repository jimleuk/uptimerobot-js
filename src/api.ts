import { AxiosRequestConfig } from 'axios';
import { Client } from './client';
import { Account } from './account';
import { Monitor } from './monitor';
import { AlertContact } from './alertContact';
import { MWindow } from './mWindow';
import { PSP } from './psp';

export class Api extends Client {
  account: Account;
  monitor: Monitor;
  alertContact: AlertContact;
  mWindow: MWindow;
  psp: PSP;

  constructor(apiKey: string, axiosConfig?: AxiosRequestConfig) {
    super(apiKey, axiosConfig);
    this.account = new Account(apiKey, axiosConfig);
    this.monitor = new Monitor(apiKey, axiosConfig);
    this.alertContact = new AlertContact(apiKey, axiosConfig);
    this.mWindow = new MWindow(apiKey, axiosConfig);
    this.psp = new PSP(apiKey, axiosConfig);
  }
}
