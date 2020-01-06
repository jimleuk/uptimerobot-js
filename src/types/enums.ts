export enum Stat {
  ok = 'ok',
  fail = 'fail',
}

export enum ErrorType {
  invalidParameter = 'invalid_parameter',
  missingParameter = 'missing_parameter',
}

/** The type of the alert contact notified (Zapier, HipChat and Slack are not
 * supported in the newAlertContact method yet)
 */
export enum AlertContactType {
  sms = 1,
  email = 2,
  twitter = 3,
  boxcar = 4,
  webhook = 5,
  pushbullet = 6,
  zapier = 7,
  pushover = 9,
  hipchat = 10,
  slack = 11,
}

/** The status of the alert contact */
export enum AlertContactState {
  /** pending activation */
  pending = 0,
  paused = 1,
  active = 2,
}

/** The type of the monitor. */
export enum MonitorType {
  http = 1,
  https = 1,
  keyword = 2,
  port = 4,
}

/** Used only for "Port monitoring (monitor>type = 4)" and shows which
 * pre-defined port/service is monitored or if a custom port is monitored.
 */
export enum MonitorSubType {
  none = 0,
  http = 1,
  https = 2,
  ftp = 3,
  smtp = 4,
  pop3 = 5,
  imap = 6,
  customPort = 99,
}

/** Used only for "Keyword monitoring (monitor>type = 2)" and shows "if the
 * monitor will be flagged as down when the keyword exists or not exists".
 */
export enum MonitorKeywordType {
  none = 0,
  exists = 1,
  notExists = 2,
}

/** The status of the monitor. When used with the editMonitor method 0 (to
 * pause) or 1 (to start) can be sent.
 */
export enum MonitorState {
  paused = 0,
  new = 1,
  up = 2,
  warn = 8,
  down = 9,
}

/** The value of the keyword. */
export enum LogType {
  down = 1,
  up = 2,
  started = 98,
  paused = 99,
}

/** The HTTP method to be used */
export enum MonitorHttpMethod {
  head = 1,
  get = 2,
  post = 3,
  put = 4,
  patch = 5,
  delete = 6,
  options = 7,
}

/** The format of data to be sent with POST, PUT, PATCH, DELETE, OPTIONS HTTP
 * methods
 */
export enum MonitorHttpMethodPostType {
  keyValue = 1,
  rawData = 2,
}

/** The Content-Type for POST, PUT, PATCH, DELETE, OPTIONS HTTP methods */
export enum MonitorHttpMethodContentType {
  /** text/html */
  html = 0,
  /** application/json */
  json = 1,
}

/** The type of the maintenance window */
export enum MWindowType {
  once = 1,
  daily = 2,
  weekly = 3,
  monthly = 4,
}

/** The status of the maintenance window. 0 - paused or 1 - active */
export enum MWindowState {
  paused,
  active,
}

/** The status of the status page. 0 - paused or 1 - active */
export enum PSPState {
  paused,
  active,
}

/** The sorting of the status page */
export enum PSPSort {
  /** friendly name (a-z) */
  friendlyNameAsc = 1,
  /** friendly name (z-a) */
  friendlyNameDesc = 2,
  /** status (up-down-paused) */
  statusDesc = 3,
  /** status (down-up-paused) */
  statusAsc = 4,
}

/** Sets the type of status page */
export enum PSPType {
  /** for all monitors */
  all = 1,
  /** for selected monitors */
  custom = 2,
}
