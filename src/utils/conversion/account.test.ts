import {
  Stat,
  Account,
  AccountListResponse
} from '../../types'
import {
  getAccountToApiAccount,
  getApiAccountToAccount,
  getApiResponseToAccountListResponse,
} from './account'

const account: Account = {
  email: 'user@example.com',
  monitor_limit: 50,
  monitor_interval: 5e3,
  down_monitors: 0,
  up_monitors: 5,
  paused_monitors: 0,
}

const apiAccount: Uptimerobot.Account = {
  email: 'user@example.com',
  monitor_limit: 50,
  monitor_interval: 5e3,
  down_monitors: 0,
  up_monitors: 5,
  paused_monitors: 0,
}

describe('conversion/account', () => {
  test('getAccountToApiAccount', () => {
    const result: Uptimerobot.Account = getAccountToApiAccount(account)
    expect(result).toEqual(apiAccount)
  })
  test('getApiAccountToAccount', () => {
    const result: Account = getApiAccountToAccount(apiAccount)
    expect(result).toEqual(account)
  })
  test('getApiResponseToAccountListResponse', () => {
    const result: AccountListResponse = getApiResponseToAccountListResponse({
      stat: 'ok',
      account: apiAccount,
    })
    expect(result).toEqual({
      stat: Stat.ok,
      account,
    })
  })
})