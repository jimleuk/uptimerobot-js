import {
  Stat,
  PSP,
  PSPType,
  PSPState,
  PSPSort,
  PSPListRequest,
  PSPCreateRequest,
  PSPEditRequest,
  PSPDeleteRequest,
  PSPListSuccessResponse,
  PSPCreateSuccessResponse,
  PSPEditSuccessResponse,
  PSPDeleteSuccessResponse,
} from '../../types'
import {
  getApiPSPToPSP,
  getPSPToApiPSP,
  getPSPListRequestToApiRequest,
  getPSPCreateRequestToApiRequest,
  getPSPEditRequestToApiRequest,
  getPSPDeleteRequestToApiRequest,
  getApiResponseToPSPListResponse,
  getApiResponseToPSPCreateResponse,
  getApiResponseToPSPEditResponse,
  getApiResponseToPSPDeleteResponse,
} from './psp'


const PSP: PSP = {
  id: 0,
  friendly_name: 'myPSP',
  custom_url: 'https://example.com',
  monitors: [1,2,3],
  sort: PSPSort.friendlyNameAsc,
  standard_url: 'https://uptimerobot.com',
  status: PSPState.active,
}

const apiPSP: Uptimerobot.PSP = {
  id: 0,
  friendly_name: 'myPSP',
  custom_url: 'https://example.com',
  monitors: '1-2-3',
  sort: 1,
  standard_url: 'https://uptimerobot.com',
  status: 1,
}

const listRequest: PSPListRequest = {
  psps: [1,2,3],
  offset: 0,
  limit: 50,
}

const apiListRequest: Uptimerobot.PSPListRequest = {
  psps: '1-2-3',
  offset: 0,
  limit: 50,
}

const createRequest: PSPCreateRequest = {
  friendly_name: 'MyPSP',
  type: PSPType.all,
  monitors: [1,2,3],
  custom_domain: 'https://example.com',
  hide_url_links: true,
  password: '123456',
  sort: PSPSort.friendlyNameAsc,
  status: PSPState.active,
}

const apiCreateRequest: Uptimerobot.PSPCreateRequest = {
  friendly_name: 'MyPSP',
  type: 1,
  monitors: '1-2-3',
  custom_domain: 'https://example.com',
  hide_url_links: 1,
  password: '123456',
  sort: 1,
  status: 1,
}

const editRequest: PSPEditRequest = {
  id: 0,
  friendly_name: 'MyPSP',
  monitors: [1,2,3],
  custom_domain: 'https://example.com',
  hide_url_links: true,
  password: '123456',
  sort: PSPSort.friendlyNameAsc,
  status: PSPState.active,
}

const apiEditRequest: Uptimerobot.PSPEditRequest = {
  id: 0,
  friendly_name: 'MyPSP',
  monitors: '1-2-3',
  custom_domain: 'https://example.com',
  hide_url_links: 1,
  password: '123456',
  sort: 1,
  status: 1,
}

const deleteRequest: PSPDeleteRequest = {
  id: 0
}

const apiDeleteRequest: Uptimerobot.PSPDeleteRequest = {
  id: 0
}

const listResponse: PSPListSuccessResponse = {
  psps: [PSP],
  pagination: { limit: 50, offset: 0, total: 1 },
  stat: Stat.ok,
}

const apiListResponse: Uptimerobot.PSPListSuccessResponse = {
  psps: [apiPSP],
  limit: 50,
  offset: 0,
  total: 1,
  stat: 'ok',
}

const createResponse: PSPCreateSuccessResponse = {
  stat: Stat.ok,
  psp: { id: 0 },
}

const apiCreateResponse: Uptimerobot.PSPCreateSuccessResponse = {
  stat: 'ok',
  psp: { id: 0 },
}

const editResponse: PSPEditSuccessResponse = {
  stat: Stat.ok,
  psp: { id: 0 }
}

const apiEditResponse: Uptimerobot.PSPEditSuccessResponse = {
  stat: 'ok',
  psp: { id: 0 }
}

const deleteResponse: PSPDeleteSuccessResponse = {
  stat: Stat.ok,
  psp: { id: 0 }
}

const apiDeleteResponse: Uptimerobot.PSPDeleteSuccessResponse = {
  stat: 'ok',
  psp: { id: 0 }
}

describe('conversion/PSP', () => {
  test('getPSPToApiPSP', () => {
    const result = getPSPToApiPSP(PSP)
    expect(result).toEqual(apiPSP)
  })
  test('getApiPSPToPSP', () => {
    const result = getApiPSPToPSP(apiPSP)
    expect(result).toEqual(PSP)
  })
  test('getPSPListRequestToApiRequest', () => {
    const result = getPSPListRequestToApiRequest(listRequest)
    expect(result).toEqual(apiListRequest)
  })
  test('getPSPCreateRequestToApiRequest', () => {
    const result = getPSPCreateRequestToApiRequest(createRequest)
    expect(result).toEqual(apiCreateRequest)
  })
  test('getPSPEditRequestToApiRequest', () => {
    const result = getPSPEditRequestToApiRequest(editRequest)
    expect(result).toEqual(apiEditRequest)
  })
  test('getPSPDeleteRequestToApiRequest', () => {
    const result = getPSPDeleteRequestToApiRequest(deleteRequest)
    expect(result).toEqual(apiDeleteRequest)
  })
  test('getPSPListResponseToApiRequest', () => {
    const result = getApiResponseToPSPListResponse(apiListResponse)
    expect(result).toEqual(listResponse)
  })
  test('getPSPCreateResponseToApiRequest', () => {
    const result = getApiResponseToPSPCreateResponse(apiCreateResponse)
    expect(result).toEqual(createResponse)
  })
  test('getPSPEditResponseToApiRequest', () => {
    const result = getApiResponseToPSPEditResponse(apiEditResponse)
    expect(result).toEqual(editResponse)
  })
  test('getPSPDeleteResponseToApiRequest', () => {
    const result = getApiResponseToPSPDeleteResponse(apiDeleteResponse)
    expect(result).toEqual(deleteResponse)
  })
})