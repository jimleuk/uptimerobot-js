import {
  Stat,
  MWindow,
  MWindowType,
  MWindowState,
  MWindowListRequest,
  MWindowCreateRequest,
  MWindowEditRequest,
  MWindowDeleteRequest,
  MWindowListSuccessResponse,
  MWindowCreateSuccessResponse,
  MWindowEditSuccessResponse,
  MWindowDeleteSuccessResponse,
} from '../../types'
import {
  getApiMWindowToMWindow,
  getMWindowToApiMWindow,
  getMWindowListRequestToApiRequest,
  getMWindowCreateRequestToApiRequest,
  getMWindowEditRequestToApiRequest,
  getMWindowDeleteRequestToApiRequest,
  getApiResponseToMWindowListResponse,
  getApiResponseToMWindowCreateResponse,
  getApiResponseToMWindowEditResponse,
  getApiResponseToMWindowDeleteResponse,
} from './mWindow'


const MWindow: MWindow = {
  id: 0,
  friendly_name: 'myMWindow',
  duration: 60,
  type: MWindowType.monthly,
  start_time: {
    type: MWindowType.monthly,
    hour: 12,
    minute: 0,
  },
  status: MWindowState.active,
  user: 0,
  value: [1, 3, 6],
}

const apiMWindow: Uptimerobot.MWindow = {
  id: 0,
  friendly_name: 'myMWindow',
  duration: 60,
  type: 4,
  start_time: '12:00',
  status: 1,
  user: 0,
  value: '1-3-6',
}

const listRequest: MWindowListRequest = {
  mwindows: [1,2,3],
  offset: 0,
  limit: 50,
}

const apiListRequest: Uptimerobot.MWindowListRequest = {
  mwindows: '1-2-3',
  offset: 0,
  limit: 50,
}

const createRequest: MWindowCreateRequest = {
  friendly_name: 'MyMWindow',
  type: MWindowType.monthly,
  value: [1, 2, 3],
  duration: 60,
  start_time: {
    type: MWindowType.monthly,
    hour: 12,
    minute: 0,
  },
}

const apiCreateRequest: Uptimerobot.MWindowCreateRequest = {
  friendly_name: 'MyMWindow',
  type: 4,
  value: '1-2-3',
  duration: 60,
  start_time: '12:00',
}

const editRequest: MWindowEditRequest = {
  id: 0,
  friendly_name: 'MyMWindow',
  duration: 60,
  start_time: {
    type: MWindowType.once,
    date: new Date(2020,1,1,0,0,0),
  },
}

const apiEditRequest: Uptimerobot.MWindowEditRequest = {
  id: 0,
  friendly_name: 'MyMWindow',
  duration: 60,
  start_time: '1580515200000',
}

const deleteRequest: MWindowDeleteRequest = {
  id: 0
}

const apiDeleteRequest: Uptimerobot.MWindowDeleteRequest = {
  id: 0
}

const listResponse: MWindowListSuccessResponse = {
  mwindows: [MWindow],
  pagination: { limit: 50, offset: 0, total: 1 },
  stat: Stat.ok,
}

const apiListResponse: Uptimerobot.MWindowListSuccessResponse = {
  mwindows: [apiMWindow],
  pagination: { limit: 50, offset: 0, total: 1 },
  stat: 'ok',
}

const createResponse: MWindowCreateSuccessResponse = {
  stat: Stat.ok,
  mwindow: {
    id: 0,
    status: MWindowState.active,
  }
}

const apiCreateResponse: Uptimerobot.MWindowCreateSuccessResponse = {
  stat: 'ok',
  mwindow: {
    id: 0,
    status: 1,
  }
}

const editResponse: MWindowEditSuccessResponse = {
  stat: Stat.ok,
  mwindow: { id: 0 }
}

const apiEditResponse: Uptimerobot.MWindowEditSuccessResponse = {
  stat: 'ok',
  mwindow: { id: 0 }
}

const deleteResponse: MWindowDeleteSuccessResponse = {
  stat: Stat.ok,
  mwindow: { id: 0 }
}

const apiDeleteResponse: Uptimerobot.MWindowDeleteSuccessResponse = {
  stat: 'ok',
  mwindow: { id: 0 }
}

describe('conversion/MWindow', () => {
  test('getMWindowToApiMWindow', () => {
    const result = getMWindowToApiMWindow(MWindow)
    expect(result).toEqual(apiMWindow)
  })
  test('getApiMWindowToMWindow', () => {
    const result = getApiMWindowToMWindow(apiMWindow)
    expect(result).toEqual(MWindow)
  })
  test('getMWindowListRequestToApiRequest', () => {
    const result = getMWindowListRequestToApiRequest(listRequest)
    expect(result).toEqual(apiListRequest)
  })
  test('getMWindowCreateRequestToApiRequest', () => {
    const result = getMWindowCreateRequestToApiRequest(createRequest)
    expect(result).toEqual(apiCreateRequest)
  })
  test('getMWindowEditRequestToApiRequest', () => {
    const result = getMWindowEditRequestToApiRequest(editRequest)
    expect(result).toEqual(apiEditRequest)
  })
  test('getMWindowDeleteRequestToApiRequest', () => {
    const result = getMWindowDeleteRequestToApiRequest(deleteRequest)
    expect(result).toEqual(apiDeleteRequest)
  })
  test('getMWindowListResponseToApiRequest', () => {
    const result = getApiResponseToMWindowListResponse(apiListResponse)
    expect(result).toEqual(listResponse)
  })
  test('getMWindowCreateResponseToApiRequest', () => {
    const result = getApiResponseToMWindowCreateResponse(apiCreateResponse)
    expect(result).toEqual(createResponse)
  })
  test('getMWindowEditResponseToApiRequest', () => {
    const result = getApiResponseToMWindowEditResponse(apiEditResponse)
    expect(result).toEqual(editResponse)
  })
  test('getMWindowDeleteResponseToApiRequest', () => {
    const result = getApiResponseToMWindowDeleteResponse(apiDeleteResponse)
    expect(result).toEqual(deleteResponse)
  })
})