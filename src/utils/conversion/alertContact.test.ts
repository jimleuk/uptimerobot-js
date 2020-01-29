import {
  Stat,
  AlertContact,
  AlertContactType,
  AlertContactState,
  AlertContactListRequest,
  AlertContactCreateRequest,
  AlertContactEditRequest,
  AlertContactDeleteRequest,
  AlertContactListSuccessResponse,
  AlertContactCreateSuccessResponse,
  AlertContactEditSuccessResponse,
  AlertContactDeleteSuccessResponse,
} from '../../types'
import {
  getApiAlertContactToAlertContact,
  getAlertContactToApiAlertContact,
  getAlertContactListRequestToApiRequest,
  getAlertContactCreateRequestToApiRequest,
  getAlertContactEditRequestToApiRequest,
  getAlertContactDeleteRequestToApiRequest,
  getApiResponseToAlertContactListResponse,
  getApiResponseToAlertContactCreateResponse,
  getApiResponseToAlertContactEditResponse,
  getApiResponseToAlertContactDeleteResponse,
} from './alertContact'

const alertContact: AlertContact = {
    id: 0,
    type: AlertContactType.sms,
    status: AlertContactState.active,
    friendly_name: 'myAlertContact',
    value: '000-000-000',
}

const apiAlertContact: Uptimerobot.AlertContact = {
  id: 0,
  type: 1,
  status: 2,
  friendly_name: 'myAlertContact',
  value: '000-000-000',
}

const listRequest: AlertContactListRequest = {
  alert_contacts: [1, 2, 3],
  limit: 50,
  offset: 0,
}

const apiListRequest: Uptimerobot.AlertContactListRequest = {
  alert_contacts: '1-2-3',
  limit: 50,
  offset: 0,
}

const createRequest: AlertContactCreateRequest = {
  type: AlertContactType.sms,
  friendly_name: 'myCreateRequest',
  value: '000-000-000',
}

const apiCreateRequest: Uptimerobot.AlertContactCreateRequest = {
  type: 1,
  friendly_name: 'myCreateRequest',
  value: '000-000-000',
}

const editRequest: AlertContactEditRequest = {
  id: 0,
  friendly_name: 'myEditRequest',
  value: '000-000-000',
}

const apiEditRequest: Uptimerobot.AlertContactEditRequest = {
  id: 0,
  friendly_name: 'myEditRequest',
  value: '000-000-000',
}

const deleteRequest: AlertContactDeleteRequest = {
  id: 0,
}

const apiDeleteRequest: Uptimerobot.AlertContactDeleteRequest = {
  id: 0,
}

const listResponse: AlertContactListSuccessResponse = {
  alert_contacts: [alertContact],
  pagination: { limit: 50, offset: 0, total: 1 },
  stat: Stat.ok,
}

const apiListResponse: Uptimerobot.AlertContactListSuccessResponse = {
  alert_contacts: [apiAlertContact],
  limit: 50,
  offset: 0,
  total: 1,
  stat: Stat.ok,
}

const createResponse: AlertContactCreateSuccessResponse = {
  stat: Stat.ok,
  alertcontact: {
    id: 0,
    status: AlertContactState.active,
  }
}

const apiCreateResponse: Uptimerobot.AlertContactCreateSuccessResponse = {
  stat: Stat.ok,
  alertcontact: {
    id: 0,
    status: 2,
  }
}

const editResponse: AlertContactEditSuccessResponse = {
  stat: Stat.ok,
  alertcontact: { id: 0 }
}

const apiEditResponse: Uptimerobot.AlertContactEditSuccessResponse = {
  stat: Stat.ok,
  alertcontact: { id: 0 }
}

const deleteResponse: AlertContactDeleteSuccessResponse = {
  stat: Stat.ok,
  alertcontact: { id: 0 }
}

const apiDeleteResponse: Uptimerobot.AlertContactDeleteSuccessResponse = {
  stat: Stat.ok,
  alertcontact: { id: 0 }
}

describe('conversion/alertContact', () => {
  test('getAlertContactToApiAlertContact', () => {
    const result = getAlertContactToApiAlertContact(alertContact)
    expect(result).toEqual(apiAlertContact)
  })
  test('getApiAlertContactToAlertContact', () => {
    const result = getApiAlertContactToAlertContact(apiAlertContact)
    expect(result).toEqual(alertContact)
  })
  test('getAlertContactListRequestToApiRequest', () => {
    const result = getAlertContactListRequestToApiRequest(listRequest)
    expect(result).toEqual(apiListRequest)
  })
  test('getAlertContactCreateRequestToApiRequest', () => {
    const result = getAlertContactCreateRequestToApiRequest(createRequest)
    expect(result).toEqual(apiCreateRequest)
  })
  test('getAlertContactEditRequestToApiRequest', () => {
    const result = getAlertContactEditRequestToApiRequest(editRequest)
    expect(result).toEqual(apiEditRequest)
  })
  test('getAlertContactDeleteRequestToApiRequest', () => {
    const result = getAlertContactDeleteRequestToApiRequest(deleteRequest)
    expect(result).toEqual(apiDeleteRequest)
  })
  test('getAlertContactListResponseToApiRequest', () => {
    const result = getApiResponseToAlertContactListResponse(apiListResponse)
    expect(result).toEqual(listResponse)
  })
  test('getAlertContactCreateResponseToApiRequest', () => {
    const result = getApiResponseToAlertContactCreateResponse(apiCreateResponse)
    expect(result).toEqual(createResponse)
  })
  test('getAlertContactEditResponseToApiRequest', () => {
    const result = getApiResponseToAlertContactEditResponse(apiEditResponse)
    expect(result).toEqual(editResponse)
  })
  test('getAlertContactDeleteResponseToApiRequest', () => {
    const result = getApiResponseToAlertContactDeleteResponse(apiDeleteResponse)
    expect(result).toEqual(deleteResponse)
  })
})