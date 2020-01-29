import {
  Stat,
  Log,
  LogType,
  Monitor,
  MonitorType,
  MonitorSubType,
  MonitorState,
  MonitorKeywordType,
  MonitorHttpMethod,
  MonitorHttpMethodContentType,
  MonitorHttpMethodPostType,
  MonitorListRequest,
  MonitorCreateRequest,
  MonitorEditRequest,
  MonitorDeleteRequest,
  MonitorListSuccessResponse,
  MonitorCreateSuccessResponse,
  MonitorEditSuccessResponse,
  MonitorDeleteSuccessResponse,
  MonitorResetRequest,
  MonitorResetSuccessResponse
} from '../../types'
import {
  getApiMonitorToMonitor,
  getMonitorToApiMonitor,
  getMonitorListRequestToApiRequest,
  getMonitorCreateRequestToApiRequest,
  getMonitorEditRequestToApiRequest,
  getMonitorDeleteRequestToApiRequest,
  getMonitorResetRequestToApiRequest,
  getApiResponseToMonitorListResponse,
  getApiResponseToMonitorCreateResponse,
  getApiResponseToMonitorEditResponse,
  getApiResponseToMonitorDeleteResponse,
  getApiResponseToMonitorResetResponse,
} from './monitor'


const log: Log = {
  datetime: new Date(2020,1,1,0,0,0),
  duration: 5000,
  type: LogType.started,
  reason: {
    code: LogType.started,
    detail: '',
  }
}

const apiLog: Uptimerobot.Log = {
  datetime: (new Date(2020,1,1,0,0,0)).getTime(),
  duration: 5000,
  type: 98,
  reason: {
    code: 98,
    detail: '',
  }
}

const monitor: Monitor = {
  id: 0,
  friendly_name: 'myMonitor',
  create_datetime: new Date(2020,1,1,0,0,0),
  interval: 300,
  status: MonitorState.new,
  type: MonitorType.https,
  sub_type: MonitorSubType.https,
  url: 'https://example.com',
  http_username: '',
  http_password: '',
  port: 80,
  keyword_type: MonitorKeywordType.none,
  keyword_value: '',
  logs: [log],
  is_group_main: false,
  monitor_group: 0,
}

const apiMonitor: Uptimerobot.Monitor = {
  id: 0,
  friendly_name: 'myMonitor',
  create_datetime: (new Date(2020,1,1,0,0,0)).getTime(),
  interval: 300,
  status: 1,
  type: 1,
  sub_type: 2,
  url: 'https://example.com',
  http_username: '',
  http_password: '',
  port: 80,
  keyword_type: 0,
  keyword_value: '',
  logs: [apiLog],
  is_group_main: 0,
  monitor_group: 0,
}

const listRequest: MonitorListRequest = {
  alert_contacts: false,
  all_time_uptime_durations: false,
  all_time_uptime_ratio: false,
  custom_http_headers: false,
  custom_http_statuses: false,
  custom_uptime_ranges: [{
    start: new Date(2019,12,1,0,0,0),
    end: new Date(2020,1,1,0,0,0)
  }],
  custom_uptime_ratios: [{
    start: new Date(2019,12,1,0,0,0),
    end: new Date(2020,1,1,0,0,0)
  }],
  limit: 50,
  logs: true,
  log_types: [LogType.started, LogType.up, LogType.down],
  logs_end_date: new Date(2019,1,1,0,0,0),
  logs_start_date: new Date(2020,1,1,0,0,0),
  logs_limit: 50,
  monitors: [1, 2, 3],
  mwindows: [1, 2, 3],
  offset: 0,
  response_times: false,
  response_times_average: 500,
  response_times_end_date: new Date(2019,1,7,0,0,0),
  response_times_start_date: new Date(2019,1,1,0,0,0),
  response_times_limit: 50,
  search: 'mySearch',
  ssl: false,
  statuses: [MonitorState.warn, MonitorState.down],
  timezone: false,
  types: [MonitorType.https, MonitorType.keyword],
}

const apiListRequest: Uptimerobot.MonitorListRequest = {
  alert_contacts: 0,
  all_time_uptime_durations: 0,
  all_time_uptime_ratio: 0,
  custom_http_headers: 0,
  custom_http_statuses: 0,
  custom_uptime_ranges: '1577836800000_1580515200000',
  custom_uptime_ratios: '1577836800000_1580515200000',
  limit: 50,
  logs: 1,
  log_types: '98-2-1',
  logs_end_date: +new Date(2019,1,1,0,0,0),
  logs_start_date: +new Date(2020,1,1,0,0,0),
  logs_limit: 50,
  monitors: '1-2-3',
  mwindows: '1-2-3',
  offset: 0,
  response_times: 0,
  response_times_average: 500,
  response_times_end_date: +new Date(2019,1,7,0,0,0),
  response_times_start_date: +new Date(2019,1,1,0,0,0),
  response_times_limit: 50,
  search: 'mySearch',
  ssl: 0,
  statuses: '8-9',
  timezone: 0,
  types: '1-2',
}

const createRequest: MonitorCreateRequest = {
  friendly_name: 'MyMonitor',
  type: MonitorType.https,
  sub_type: MonitorSubType.https,
  url: 'https://example.com',
  alert_contacts: [
    { id: 1, threshold: 0, recurrence: 0 },
    { id: 2, threshold: 0, recurrence: 0 },
  ],
  custom_http_headers: { 'x-key': '1' },
  custom_http_statuses: [
    { code: 200, status: MonitorState.up },
    { code: 400, status: MonitorState.down },
  ],
  http_method: MonitorHttpMethod.get,
  http_password: '',
  http_username: '',
  ignore_ssl_errors: false,
  interval: 500,
  keyword_type: MonitorKeywordType.none,
  keyword_value: '',
  port: 80,
  post_content_type: MonitorHttpMethodContentType.json,
  post_type: MonitorHttpMethodPostType.keyValue,
  post_value: { apple: '1' },
}

const apiCreateRequest: Uptimerobot.MonitorCreateRequest = {
  friendly_name: 'MyMonitor',
  type: 1,
  sub_type: 2,
  url: 'https://example.com',
  alert_contacts: '1_0_0-2_0_0',
  custom_http_headers: '{"x-key":"1"}',
  custom_http_statuses: '200:2-400:9',
  http_method: 2,
  http_password: '',
  http_username: '',
  ignore_ssl_errors: 0,
  interval: 500,
  keyword_type: 0,
  keyword_value: '',
  port: 80,
  post_content_type: 1,
  post_type: 1,
  post_value: '{"apple":"1"}',
}

const editRequest: MonitorEditRequest = {
  id: 0,
  friendly_name: 'MyMonitor',
  sub_type: MonitorSubType.https,
  url: 'https://example.com',
  alert_contacts: [
    { id: 1, threshold: 0, recurrence: 0 },
    { id: 2, threshold: 0, recurrence: 0 },
  ],
  custom_http_headers: { 'x-key': '1' },
  custom_http_statuses: [
    { code: 200, status: MonitorState.up },
    { code: 400, status: MonitorState.down },
  ],
  http_method: MonitorHttpMethod.get,
  http_password: '',
  http_username: '',
  ignore_ssl_errors: false,
  interval: 500,
  keyword_type: MonitorKeywordType.none,
  keyword_value: '',
  port: 80,
  post_content_type: MonitorHttpMethodContentType.json,
  post_type: MonitorHttpMethodPostType.keyValue,
  post_value: { apple: '1' },
}

const apiEditRequest: Uptimerobot.MonitorEditRequest = {
  id: 0,
  friendly_name: 'MyMonitor',
  sub_type: 2,
  url: 'https://example.com',
  alert_contacts: '1_0_0-2_0_0',
  custom_http_headers: '{"x-key":"1"}',
  custom_http_statuses: '200:2-400:9',
  http_method: 2,
  http_password: '',
  http_username: '',
  ignore_ssl_errors: 0,
  interval: 500,
  keyword_type: 0,
  keyword_value: '',
  port: 80,
  post_content_type: 1,
  post_type: 1,
  post_value: '{"apple":"1"}',
}

const deleteRequest: MonitorDeleteRequest = {
  id: 0
}

const apiDeleteRequest: Uptimerobot.MonitorDeleteRequest = {
  id: 0
}

const resetRequest: MonitorResetRequest = {
  id: 0
}

const apiResetRequest: Uptimerobot.MonitorResetRequest = {
  id: 0
}

const listResponse: MonitorListSuccessResponse = {
  monitors: [monitor],
  pagination: { limit: 50, offset: 0, total: 1 },
  stat: Stat.ok,
}

const apiListResponse: Uptimerobot.MonitorListSuccessResponse = {
  monitors: [apiMonitor],
  pagination: {
    limit: 50,
    offset: 0,
    total: 1,
  },
  stat: Stat.ok,
}

const createResponse: MonitorCreateSuccessResponse = {
  stat: Stat.ok,
  monitor: {
    id: 0,
    status: MonitorState.up,
  }
}

const apiCreateResponse: Uptimerobot.MonitorCreateSuccessResponse = {
  stat: Stat.ok,
  monitor: {
    id: 0,
    status: 2,
  }
}

const editResponse: MonitorEditSuccessResponse = {
  stat: Stat.ok,
  monitor: { id: 0 }
}

const apiEditResponse: Uptimerobot.MonitorEditSuccessResponse = {
  stat: Stat.ok,
  monitor: { id: 0 }
}

const deleteResponse: MonitorDeleteSuccessResponse = {
  stat: Stat.ok,
  monitor: { id: 0 }
}

const apiDeleteResponse: Uptimerobot.MonitorDeleteSuccessResponse = {
  stat: Stat.ok,
  monitor: { id: 0 }
}

const resetResponse: MonitorResetSuccessResponse = {
  stat: Stat.ok,
  monitor: { id: 0 }
}

const apiResetResponse: Uptimerobot.MonitorResetSuccessResponse = {
  stat: Stat.ok,
  monitor: { id: 0 }
}

describe('conversion/monitor', () => {
  test('getMonitorToApiMonitor', () => {
    const result = getMonitorToApiMonitor(monitor)
    expect(result).toEqual(apiMonitor)
  })
  test('getApiMonitorToMonitor', () => {
    const result = getApiMonitorToMonitor(apiMonitor)
    expect(result).toEqual(monitor)
  })
  test('getMonitorListRequestToApiRequest', () => {
    const result = getMonitorListRequestToApiRequest(listRequest)
    expect(result).toEqual(apiListRequest)
  })
  test('getMonitorCreateRequestToApiRequest', () => {
    const result = getMonitorCreateRequestToApiRequest(createRequest)
    expect(result).toEqual(apiCreateRequest)
  })
  test('getMonitorEditRequestToApiRequest', () => {
    const result = getMonitorEditRequestToApiRequest(editRequest)
    expect(result).toEqual(apiEditRequest)
  })
  test('getMonitorDeleteRequestToApiRequest', () => {
    const result = getMonitorDeleteRequestToApiRequest(deleteRequest)
    expect(result).toEqual(apiDeleteRequest)
  })
  test('getMonitorResetRequestToApiRequest', () => {
    const result = getMonitorResetRequestToApiRequest(resetRequest)
    expect(result).toEqual(apiResetRequest)
  })
  test('getMonitorListResponseToApiRequest', () => {
    const result = getApiResponseToMonitorListResponse(apiListResponse)
    expect(result).toEqual(listResponse)
  })
  test('getMonitorCreateResponseToApiRequest', () => {
    const result = getApiResponseToMonitorCreateResponse(apiCreateResponse)
    expect(result).toEqual(createResponse)
  })
  test('getMonitorEditResponseToApiRequest', () => {
    const result = getApiResponseToMonitorEditResponse(apiEditResponse)
    expect(result).toEqual(editResponse)
  })
  test('getMonitorDeleteResponseToApiRequest', () => {
    const result = getApiResponseToMonitorDeleteResponse(apiDeleteResponse)
    expect(result).toEqual(deleteResponse)
  })
  test('getMonitorResetResponseToApiRequest', () => {
    const result = getApiResponseToMonitorResetResponse(apiResetResponse)
    expect(result).toEqual(resetResponse)
  })
})