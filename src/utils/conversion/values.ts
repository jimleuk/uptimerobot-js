import flatten from 'lodash/flatten';
import compact from 'lodash/compact';
import uniq from 'lodash/uniq';
import padStart from 'lodash/padStart';
import {
  TimeRange,
  MonitorState,
  MonitorHttpCustomStatus,
  MonitorAlertContactsNotification,
  MWindowType,
  MWindowStartTime,
  MWindowStartTimeRecurring,
} from '../../types';

/**
 * Returns JSON string of an object
 * @example
 * getJSONToApiValue({ apple: 1 })
 * > '{"apple":1}'
 */
export const getJSONToApiValue = (obj?: object): string | undefined =>
  obj ? JSON.stringify(obj) : obj;

/**
 * Returns a JSON object from a string
 * @example
 * getApiValueToJSON('{"apple":1}')
 * > { apple: 1 }
 */
export const getApiValueToJSON = (value: string): object => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return {};
  }
};

/**
 * Bi-directional conversion for api json values
 * @example
 * '{"apple":1}' -> { apple: 1 } -> '{"apple":1}'
 */
export const applyJSONConversion = (
  value?: object | string
):
  | ReturnType<typeof getJSONToApiValue>
  | ReturnType<typeof getApiValueToJSON>
  | typeof value => {
  if (typeof value === 'string') return getApiValueToJSON(value);
  if (typeof value === 'object') return getJSONToApiValue(value);
  return value;
};

/**
 * Returns a hyphen-delimited string of an array of number
 * @example
 * getArrayToApiValue([1,2,3])
 * > '1-2-3'
 */
export const getArrayToApiValue = (arr?: number[]): string | undefined =>
  Array.isArray(arr) ? arr.join('-') : arr;

/**
 * Returns an array of number from a hyphen-delimited string
 * @example
 * getApiValueToArray('1-2-3')
 * > [1,2,3]
 */
export const getApiValueToArray = (value: string): number[] =>
  value.split('-').map(Number);

/**
 * Bi-directional conversion for api array values
 * @example
 * '1-23-88' -> [1, 23, 88] or [1, 23, 88] -> '1-23-88'
 */
export const applyArrayConversion = (
  value?: number[] | string
):
  | ReturnType<typeof getArrayToApiValue>
  | ReturnType<typeof getApiValueToArray>
  | typeof value => {
  if (typeof value === 'string') return getApiValueToArray(value);
  if (Array.isArray(value)) return getArrayToApiValue(value);
  return value;
};

/**
 * Returns "1" or "0" for "true" and "false" respectively
 * @example
 * getBoolToApiValue(false)
 * > 0
 */
export const getBoolToApiValue = (bool?: boolean): number | undefined => {
  if (bool !== undefined) return bool ? 1 : 0;
  return bool;
};

/**
 * Returns "true" or "false" for "1" or "0" respectively
 * @example
 * getApiValueToBool(0)
 * > false
 */
export const getApiValueToBool = (value: number): boolean => value === 1;

/**
 * Bi-directional conversion for api boolean values
 * @example
 * 1 -> true or true -> 1
 */
export const applyBoolConversion = (
  value?: boolean | number
):
  | ReturnType<typeof getBoolToApiValue>
  | ReturnType<typeof getApiValueToBool>
  | typeof value => {
  if (typeof value === 'string' || typeof value === 'number') {
    return getApiValueToBool(value);
  }
  if (typeof value === 'boolean') return getBoolToApiValue(value);
  return value;
};

/**
 * Returns unix timestamp for date object
 * @example
 * getDateToApiValue(new Date())
 * > 1578082892915
 */
export const getDateToApiValue = (d?: Date): number | undefined =>
  d instanceof Date ? d.getTime() : d;

/**
 * Returns date object for unix timestamp
 * @example
 * getApiValueToDate(1578082892915)
 * > new Date()
 */
export const getApiValueToDate = (d: number): Date => new Date(d);

/**
 * Bi-directional conversion for api date values
 * @example
 * new Date() -> 1578082892915 or 1578082892915 -> new Date()
 */
export const applyDateConversion = (
  value?: Date | number
):
  | ReturnType<typeof getDateToApiValue>
  | ReturnType<typeof getApiValueToDate>
  | typeof value => {
  if (typeof value === 'number') return getApiValueToDate(Number(value));
  if (value instanceof Date) return getDateToApiValue(value);
  return value;
};

/**
 * Returns a hyphen-delimited string representation of TimeRange[].
 * @example
 * getTimeRangesToApiValue([
 *  { start: new Date(2019-12-01), end: new Date(2019-12-31) },
 *  { start: new Date(2020-01-01), end: new Date(2020-01-30) },
 * ])
 * > '1575158400000_1577750400000-1577836800000_1580342400000'
 */
export const getTimeRangeToApiValue = (
  ranges?: TimeRange[]
): string | undefined => {
  if (Array.isArray(ranges)) {
    return flatten([ranges])
      .map(range =>
        uniq(compact([range.start.getTime(), range.end?.getTime()])).join('_')
      )
      .join('-');
  }
  return ranges;
};

/**
 * Returns TimeRange[] for a time range string
 * @example
 * getApiValueToTimeRange('1575158400000_1577750400000-1577836800000_1580342400000')
 * > [
 *  { start: new Date(2019-12-01), end: new Date(2019-12-31) },
 *  { start: new Date(2020-01-01), end: new Date(2020-01-30) },
 * ])
 */
export const getApiValueToTimeRange = (value: string): TimeRange[] =>
  value.split('-').map(range => {
    const [rangeStart, rangeEnd] = range.split('_');
    const start = new Date(+rangeStart);
    const end = rangeEnd ? new Date(+rangeEnd) : start;
    return { start, end };
  });

/**
 * Bi-directional conversion for api TimeRange values
 * @example
 * [
 *  { start: new Date(2019-12-01), end: new Date(2019-12-31) },
 *  { start: new Date(2020-01-01), end: new Date(2020-01-30) }
 * ] -> '1575158400000_1577750400000-1577836800000_1580342400000'
 */
export const applyTimeRangeConversion = (
  value?: TimeRange[] | string
):
  | ReturnType<typeof getTimeRangeToApiValue>
  | ReturnType<typeof getApiValueToTimeRange>
  | typeof value => {
  if (typeof value === 'string') return getApiValueToTimeRange(value);
  if (Array.isArray(value)) return getTimeRangeToApiValue(value);
  return value;
};

/**
 * Returns a hyphen-delimited string for MonitorHttpCustomStatus[]
 */
export const getMonitorHttpCustomStatusesToApiValue = (
  customStatuses?: MonitorHttpCustomStatus[]
): string | undefined =>
  Array.isArray(customStatuses)
    ? customStatuses.map(custom => `${custom.code}:${custom.status}`).join('-')
    : customStatuses;

/**
 * Returns MonitorHttpCustomStatus[] for a hyphen-delimited string
 * @example
 * getApiValueToMonitorHttpCustomStatuses("400:0-200:1")
 * > [{ code: 400, status: 0 }, { code: 200, status: 1 }]
 */
export const getApiValueToMonitorHttpCustomStatuses = (
  value: string
): MonitorHttpCustomStatus[] =>
  value.split('-').map(httpStatus => {
    const [code, status] = httpStatus.split(':');
    return {
      code: Number(code),
      status: Number(status) as MonitorState,
    };
  });

/** Returns a formatted string for MonitorAlertContactsNotification[] */
export const getMonitorAlertContactsNotificationsToApiValue = (
  notifications?: MonitorAlertContactsNotification[]
): string | undefined =>
  Array.isArray(notifications)
    ? notifications
        .map(n => `${n.id}_${n.threshold || 0}_${n.recurrence || 0}`)
        .join('-')
    : notifications;

/** Returns a MonitorAlertContactsNotification[] for a formatted string */
export const getApiValueForMonitorAlertContactsNotification = (
  notifications: string
): MonitorAlertContactsNotification[] =>
  notifications.split('-').map(n => {
    const [id, threshold, recurrence] = n.split('_').map(Number);
    return {
      id,
      threshold,
      recurrence,
    };
  });

/**
 * Returns api value for MWindowStartTime
 * @example
 * { type: MWindowStartTime.daily, hour: 12, minute: 30 } -> "12:30"
 * { type: MWindowStartTime.once, date: new Date() } -> "1575158400000"
 */
export const getMWindowStartTimeToApiValue = (
  startTime?: MWindowStartTime
): string | undefined => {
  if (
    startTime?.type === MWindowType.daily ||
    startTime?.type === MWindowType.weekly ||
    startTime?.type === MWindowType.monthly
  ) {
    const hour = padStart(String(startTime?.hour), 2, '0');
    const minute = padStart(String(startTime?.minute), 2, '0');
    return `${hour}:${minute}`;
  }
  if (startTime?.type === MWindowType.once) {
    return String(startTime.date.getTime());
  }
  return undefined;
};

/**
 * Api value for MWindow start_time can be either unix timestamp
 * (for MWindowType.once) or "hh:mm" (for MWindowType.daily, MWindowType.weekly,
 * MWindowType.monthly). Here, given then format of the value, we return either
 * a <MWindowStartTimeRecurring> or a <MWindowStartTimeOnce>
 * @example
 * "12:30" -> { type: MWindowStartTime.daily, hour: 12, minute: 30 }
 * "1575158400000" -> { type: MWindowStartTime.once, date: new Date() }
 */
export const getApiValueForMWindowStartTime = (
  type: MWindowType,
  value: string
): MWindowStartTime => {
  if (type !== MWindowType.once) {
    const [hour, minute] = value.split(':');
    return {
      type: type as MWindowStartTimeRecurring['type'],
      hour: Number(hour),
      minute: Number(minute),
    };
  }
  return {
    type: MWindowType.once,
    date: new Date(Number(value)),
  };
};
