import {
  MonitorState,
  MWindowType,
} from '../../types'
import {
  getJSONToApiValue,
  getApiValueToJSON,
  applyJSONConversion,
  getArrayToApiValue,
  getApiValueToArray,
  applyArrayConversion,
  getBoolToApiValue,
  getApiValueToBool,
  applyBoolConversion,
  getDateToApiValue,
  getApiValueToDate,
  applyDateConversion,
  getTimeRangeToApiValue,
  getApiValueToTimeRange,
  applyTimeRangeConversion,
  getMonitorHttpCustomStatusesToApiValue,
  getApiValueToMonitorHttpCustomStatuses,
  getMonitorAlertContactsNotificationsToApiValue,
  getApiValueForMonitorAlertContactsNotification,
  getMWindowStartTimeToApiValue,
  getApiValueForMWindowStartTime,
} from './values'

test('getJSONToApiValue', () => {
  const result = getJSONToApiValue({ apple: 1 })
  const expected = '{"apple":1}'
  expect(result).toEqual(expected);
})
test('getApiValueToJSON', () => {
  const result = getApiValueToJSON('{"apple":"1"}')
  const expected = { apple: "1" }
  expect(result).toEqual(expected);
})
test('applyJSONConversion', () => {
  const result1 = applyJSONConversion({ apple: 1 })
  const expected1 = '{"apple":1}'
  const result2 = applyJSONConversion('{"apple":"1"}')
  const expected2 = { apple: "1" }
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
})
test('getArrayToApiValue', () => {
  const result = getArrayToApiValue([1,2,3]);
  const expected = '1-2-3'
  expect(result).toEqual(expected);
})
test('getApiValueToArray', () => {
  const result = getApiValueToArray('1-2-3');
  const expected = [1,2,3]
  expect(result).toEqual(expected);
})
test('applyArrayConversion', () => {
  const result1 = applyArrayConversion([1,2,3])
  const expected1 = '1-2-3'
  const result2 = applyArrayConversion('1-2-3')
  const expected2 = [1,2,3]
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
})
test('getBoolToApiValue', () => {
  const result = getBoolToApiValue(true);
  const expected = 1
  expect(result).toEqual(expected);
})
test('getApiValueToBool', () => {
  const result = getApiValueToBool(1);
  const expected = true
  expect(result).toEqual(expected);
})
test('applyBoolConversion', () => {
  const result1 = applyBoolConversion(true)
  const expected1 = 1
  const result2 = applyBoolConversion(1)
  const expected2 = true
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
})
test('getDateToApiValue', () => {
  const result = getDateToApiValue(new Date(2020,1,1,0,0,0));
  const expected = 1580515200000
  expect(result).toEqual(expected);
})
test('getApiValueToDate', () => {
  const result = getApiValueToDate(1580515200000);
  const expected = new Date(2020,1,1,0,0,0)
  expect(result).toEqual(expected);
})
test('applyDateConversion', () => {
  const result1 = applyDateConversion(new Date(2020,1,1,0,0,0))
  const expected1 = 1580515200000
  const result2 = applyDateConversion(1580515200000)
  const expected2 = new Date(2020,1,1,0,0,0)
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
})
test('getTimeRangeToApiValue', () => {
  const result = getTimeRangeToApiValue([{
    start: new Date(2019,12,1,0,0,0),
    end: new Date(2020,1,1,0,0,0)
  }]);
  const expected = '1577836800000_1580515200000'
  expect(result).toEqual(expected);
})
test('getApiValueToTimeRange', () => {
  const result = getApiValueToTimeRange('1577836800000_1580515200000');
  const expected = [{
    start: new Date(2019,12,1,0,0,0),
    end: new Date(2020,1,1,0,0,0)
  }]
  expect(result).toEqual(expected);
})
test('applyTimeRangeConversion', () => {
  const result1 = applyTimeRangeConversion([{
    start: new Date(2019,12,1,0,0,0),
    end: new Date(2020,1,1,0,0,0)
  }])
  const expected1 = '1577836800000_1580515200000'
  const result2 = applyTimeRangeConversion('1577836800000_1580515200000')
  const expected2 = [{
    start: new Date(2019,12,1,0,0,0),
    end: new Date(2020,1,1,0,0,0)
  }]
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
})
test('getMonitorHttpCustomStatusesToApiValue', () => {
  const result = getMonitorHttpCustomStatusesToApiValue([
    { code: 200, status: MonitorState.up },
    { code: 400, status: MonitorState.down },
  ]);
  const expected = '200:2-400:9'
  expect(result).toEqual(expected);
})
test('getApiValueToMonitorHttpCustomStatuses', () => {
  const result = getApiValueToMonitorHttpCustomStatuses('200:2-400:9');
  const expected = [
    { code: 200, status: MonitorState.up },
    { code: 400, status: MonitorState.down },
  ]
  expect(result).toEqual(expected);
})
test('getMonitorAlertContactsNotificationsToApiValue', () => {
  const result = getMonitorAlertContactsNotificationsToApiValue([
    { id: 1, threshold: 0, recurrence: 0 },
    { id: 2, threshold: 0, recurrence: 0 },
  ]);
  const expected = '1_0_0-2_0_0'
  expect(result).toEqual(expected);
})
test('getApiValueForMonitorAlertContactsNotification', () => {
  const result = getApiValueForMonitorAlertContactsNotification('1_0_0-2_0_0');
  const expected = [
    { id: 1, threshold: 0, recurrence: 0 },
    { id: 2, threshold: 0, recurrence: 0 },
  ]
  expect(result).toEqual(expected);
})
test('getMWindowStartTimeToApiValue', () => {
  const result1 = getMWindowStartTimeToApiValue({
    type: MWindowType.once,
    date: new Date(2020,1,1,0,0,0),
  });
  const expected1 = '1580515200000'
  const result2 = getMWindowStartTimeToApiValue({
    type: MWindowType.monthly,
    hour: 12,
    minute: 30,
  });
  const expected2 = '12:30'
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
})
test('getApiValueForMWindowStartTime', () => {
  const result1 = getApiValueForMWindowStartTime(MWindowType.once, '1580515200000');
  const expected1 = {
    type: MWindowType.once,
    date: new Date(2020,1,1,0,0,0),
  }
  const result2 = getApiValueForMWindowStartTime(MWindowType.daily, '12:30');
  const expected2 = {
    type: MWindowType.daily,
    hour: 12,
    minute: 30,
  }
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
})