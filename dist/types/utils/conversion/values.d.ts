import { TimeRange, MonitorHttpCustomStatus, MonitorAlertContactsNotification, MWindowType, MWindowStartTime, MWindowStartTimeRecurring } from '../../types';
/**
 * Returns JSON string of an object
 * @example
 * getJSONToApiValue({ apple: 1 })
 * > '{"apple":1}'
 */
export declare const getJSONToApiValue: (obj?: object | undefined) => string | undefined;
/**
 * Returns a JSON object from a string
 * @example
 * getApiValueToJSON('{"apple":1}')
 * > { apple: 1 }
 */
export declare const getApiValueToJSON: (value: string) => object;
/**
 * Bi-directional conversion for api json values
 * @example
 * '{"apple":1}' -> { apple: 1 } -> '{"apple":1}'
 */
export declare const applyJSONConversion: (value?: string | object | undefined) => string | object | undefined;
/**
 * Returns a hyphen-delimited string of an array of number
 * @example
 * getArrayToApiValue([1,2,3])
 * > '1-2-3'
 */
export declare const getArrayToApiValue: (arr?: number[] | undefined) => string | undefined;
/**
 * Returns an array of number from a hyphen-delimited string
 * @example
 * getApiValueToArray('1-2-3')
 * > [1,2,3]
 */
export declare const getApiValueToArray: (value: string) => number[];
/**
 * Bi-directional conversion for api array values
 * @example
 * '1-23-88' -> [1, 23, 88] or [1, 23, 88] -> '1-23-88'
 */
export declare const applyArrayConversion: (value?: string | number[] | undefined) => string | number[] | undefined;
/**
 * Returns "1" or "0" for "true" and "false" respectively
 * @example
 * getBoolToApiValue(false)
 * > 0
 */
export declare const getBoolToApiValue: (bool?: boolean | undefined) => number | undefined;
/**
 * Returns "true" or "false" for "1" or "0" respectively
 * @example
 * getApiValueToBool(0)
 * > false
 */
export declare const getApiValueToBool: (value: number) => boolean;
/**
 * Bi-directional conversion for api boolean values
 * @example
 * 1 -> true or true -> 1
 */
export declare const applyBoolConversion: (value?: number | boolean | undefined) => number | boolean | undefined;
/**
 * Returns unix timestamp for date object
 * @example
 * getDateToApiValue(new Date())
 * > 1578082892915
 */
export declare const getDateToApiValue: (d?: Date | undefined) => number | undefined;
/**
 * Returns date object for unix timestamp
 * @example
 * getApiValueToDate(1578082892915)
 * > new Date()
 */
export declare const getApiValueToDate: (d: number) => Date;
/**
 * Bi-directional conversion for api date values
 * @example
 * new Date() -> 1578082892915 or 1578082892915 -> new Date()
 */
export declare const applyDateConversion: (value?: number | Date | undefined) => number | Date | undefined;
/**
 * Returns a hyphen-delimited string representation of TimeRange[].
 * @example
 * getTimeRangesToApiValue([
 *  { start: new Date(2019-12-01), end: new Date(2019-12-31) },
 *  { start: new Date(2020-01-01), end: new Date(2020-01-30) },
 * ])
 * > '1575158400000_1577750400000-1577836800000_1580342400000'
 */
export declare const getTimeRangeToApiValue: (ranges?: TimeRange[] | undefined) => string | undefined;
/**
 * Returns TimeRange[] for a time range string
 * @example
 * getApiValueToTimeRange('1575158400000_1577750400000-1577836800000_1580342400000')
 * > [
 *  { start: new Date(2019-12-01), end: new Date(2019-12-31) },
 *  { start: new Date(2020-01-01), end: new Date(2020-01-30) },
 * ])
 */
export declare const getApiValueToTimeRange: (value: string) => TimeRange[];
/**
 * Bi-directional conversion for api TimeRange values
 * @example
 * [
 *  { start: new Date(2019-12-01), end: new Date(2019-12-31) },
 *  { start: new Date(2020-01-01), end: new Date(2020-01-30) }
 * ] -> '1575158400000_1577750400000-1577836800000_1580342400000'
 */
export declare const applyTimeRangeConversion: (value?: string | TimeRange[] | undefined) => string | TimeRange[] | undefined;
/**
 * Returns a hyphen-delimited string for MonitorHttpCustomStatus[]
 */
export declare const getMonitorHttpCustomStatusesToApiValue: (customStatuses?: MonitorHttpCustomStatus[] | undefined) => string | undefined;
/**
 * Returns MonitorHttpCustomStatus[] for a hyphen-delimited string
 * @example
 * getApiValueToMonitorHttpCustomStatuses("400:0-200:1")
 * > [{ code: 400, status: 0 }, { code: 200, status: 1 }]
 */
export declare const getApiValueToMonitorHttpCustomStatuses: (value: string) => MonitorHttpCustomStatus[];
/** Returns a formatted string for MonitorAlertContactsNotification[] */
export declare const getMonitorAlertContactsNotificationsToApiValue: (notifications?: MonitorAlertContactsNotification[] | undefined) => string | undefined;
/** Returns a MonitorAlertContactsNotification[] for a formatted string */
export declare const getApiValueForMonitorAlertContactsNotification: (notifications: string) => MonitorAlertContactsNotification[];
/**
 * Returns api value for MWindowStartTime
 * @example
 * { type: MWindowStartTime.daily, hour: 12, minute: 30 } -> "12:30"
 * { type: MWindowStartTime.once, date: new Date() } -> "1575158400000"
 */
export declare const getMWindowStartTimeToApiValue: (startTime?: import("../../types").MWindowStartTimeOnce | MWindowStartTimeRecurring | undefined) => string | undefined;
/**
 * Api value for MWindow start_time can be either unix timestamp
 * (for MWindowType.once) or "hh:mm" (for MWindowType.daily, MWindowType.weekly,
 * MWindowType.monthly). Here, given then format of the value, we return either
 * a <MWindowStartTimeRecurring> or a <MWindowStartTimeOnce>
 * @example
 * "12:30" -> { type: MWindowStartTime.daily, hour: 12, minute: 30 }
 * "1575158400000" -> { type: MWindowStartTime.once, date: new Date() }
 */
export declare const getApiValueForMWindowStartTime: (type: MWindowType, value: string) => MWindowStartTime;
