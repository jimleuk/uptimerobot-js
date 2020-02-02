import axios from 'axios';
import qs from 'qs';

var Stat;
(function (Stat) {
    Stat["ok"] = "ok";
    Stat["fail"] = "fail";
})(Stat || (Stat = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["invalidParameter"] = "invalid_parameter";
    ErrorType["missingParameter"] = "missing_parameter";
})(ErrorType || (ErrorType = {}));
/** The type of the alert contact notified (Zapier, HipChat and Slack are not
 * supported in the newAlertContact method yet)
 */
var AlertContactType;
(function (AlertContactType) {
    AlertContactType[AlertContactType["sms"] = 1] = "sms";
    AlertContactType[AlertContactType["email"] = 2] = "email";
    AlertContactType[AlertContactType["twitter"] = 3] = "twitter";
    AlertContactType[AlertContactType["boxcar"] = 4] = "boxcar";
    AlertContactType[AlertContactType["webhook"] = 5] = "webhook";
    AlertContactType[AlertContactType["pushbullet"] = 6] = "pushbullet";
    AlertContactType[AlertContactType["zapier"] = 7] = "zapier";
    AlertContactType[AlertContactType["pushover"] = 9] = "pushover";
    AlertContactType[AlertContactType["hipchat"] = 10] = "hipchat";
    AlertContactType[AlertContactType["slack"] = 11] = "slack";
})(AlertContactType || (AlertContactType = {}));
/** The status of the alert contact */
var AlertContactState;
(function (AlertContactState) {
    /** pending activation */
    AlertContactState[AlertContactState["pending"] = 0] = "pending";
    AlertContactState[AlertContactState["paused"] = 1] = "paused";
    AlertContactState[AlertContactState["active"] = 2] = "active";
})(AlertContactState || (AlertContactState = {}));
/** The type of the monitor. */
var MonitorType;
(function (MonitorType) {
    MonitorType[MonitorType["http"] = 1] = "http";
    MonitorType[MonitorType["https"] = 1] = "https";
    MonitorType[MonitorType["keyword"] = 2] = "keyword";
    MonitorType[MonitorType["port"] = 4] = "port";
})(MonitorType || (MonitorType = {}));
/** Used only for "Port monitoring (monitor>type = 4)" and shows which
 * pre-defined port/service is monitored or if a custom port is monitored.
 */
var MonitorSubType;
(function (MonitorSubType) {
    MonitorSubType[MonitorSubType["none"] = 0] = "none";
    MonitorSubType[MonitorSubType["http"] = 1] = "http";
    MonitorSubType[MonitorSubType["https"] = 2] = "https";
    MonitorSubType[MonitorSubType["ftp"] = 3] = "ftp";
    MonitorSubType[MonitorSubType["smtp"] = 4] = "smtp";
    MonitorSubType[MonitorSubType["pop3"] = 5] = "pop3";
    MonitorSubType[MonitorSubType["imap"] = 6] = "imap";
    MonitorSubType[MonitorSubType["customPort"] = 99] = "customPort";
})(MonitorSubType || (MonitorSubType = {}));
/** Used only for "Keyword monitoring (monitor>type = 2)" and shows "if the
 * monitor will be flagged as down when the keyword exists or not exists".
 */
var MonitorKeywordType;
(function (MonitorKeywordType) {
    MonitorKeywordType[MonitorKeywordType["none"] = 0] = "none";
    MonitorKeywordType[MonitorKeywordType["exists"] = 1] = "exists";
    MonitorKeywordType[MonitorKeywordType["notExists"] = 2] = "notExists";
})(MonitorKeywordType || (MonitorKeywordType = {}));
/** The status of the monitor. When used with the editMonitor method 0 (to
 * pause) or 1 (to start) can be sent.
 */
var MonitorState;
(function (MonitorState) {
    MonitorState[MonitorState["paused"] = 0] = "paused";
    MonitorState[MonitorState["new"] = 1] = "new";
    MonitorState[MonitorState["up"] = 2] = "up";
    MonitorState[MonitorState["warn"] = 8] = "warn";
    MonitorState[MonitorState["down"] = 9] = "down";
})(MonitorState || (MonitorState = {}));
/** The value of the keyword. */
var LogType;
(function (LogType) {
    LogType[LogType["down"] = 1] = "down";
    LogType[LogType["up"] = 2] = "up";
    LogType[LogType["started"] = 98] = "started";
    LogType[LogType["paused"] = 99] = "paused";
})(LogType || (LogType = {}));
/** The HTTP method to be used */
var MonitorHttpMethod;
(function (MonitorHttpMethod) {
    MonitorHttpMethod[MonitorHttpMethod["head"] = 1] = "head";
    MonitorHttpMethod[MonitorHttpMethod["get"] = 2] = "get";
    MonitorHttpMethod[MonitorHttpMethod["post"] = 3] = "post";
    MonitorHttpMethod[MonitorHttpMethod["put"] = 4] = "put";
    MonitorHttpMethod[MonitorHttpMethod["patch"] = 5] = "patch";
    MonitorHttpMethod[MonitorHttpMethod["delete"] = 6] = "delete";
    MonitorHttpMethod[MonitorHttpMethod["options"] = 7] = "options";
})(MonitorHttpMethod || (MonitorHttpMethod = {}));
/** The format of data to be sent with POST, PUT, PATCH, DELETE, OPTIONS HTTP
 * methods
 */
var MonitorHttpMethodPostType;
(function (MonitorHttpMethodPostType) {
    MonitorHttpMethodPostType[MonitorHttpMethodPostType["keyValue"] = 1] = "keyValue";
    MonitorHttpMethodPostType[MonitorHttpMethodPostType["rawData"] = 2] = "rawData";
})(MonitorHttpMethodPostType || (MonitorHttpMethodPostType = {}));
/** The Content-Type for POST, PUT, PATCH, DELETE, OPTIONS HTTP methods */
var MonitorHttpMethodContentType;
(function (MonitorHttpMethodContentType) {
    /** text/html */
    MonitorHttpMethodContentType[MonitorHttpMethodContentType["html"] = 0] = "html";
    /** application/json */
    MonitorHttpMethodContentType[MonitorHttpMethodContentType["json"] = 1] = "json";
})(MonitorHttpMethodContentType || (MonitorHttpMethodContentType = {}));
/** The type of the maintenance window */
var MWindowType;
(function (MWindowType) {
    MWindowType[MWindowType["once"] = 1] = "once";
    MWindowType[MWindowType["daily"] = 2] = "daily";
    MWindowType[MWindowType["weekly"] = 3] = "weekly";
    MWindowType[MWindowType["monthly"] = 4] = "monthly";
})(MWindowType || (MWindowType = {}));
/** The status of the maintenance window. 0 - paused or 1 - active */
var MWindowState;
(function (MWindowState) {
    MWindowState[MWindowState["paused"] = 0] = "paused";
    MWindowState[MWindowState["active"] = 1] = "active";
})(MWindowState || (MWindowState = {}));
/** The status of the status page. 0 - paused or 1 - active */
var PSPState;
(function (PSPState) {
    PSPState[PSPState["paused"] = 0] = "paused";
    PSPState[PSPState["active"] = 1] = "active";
})(PSPState || (PSPState = {}));
/** The sorting of the status page */
var PSPSort;
(function (PSPSort) {
    /** friendly name (a-z) */
    PSPSort[PSPSort["friendlyNameAsc"] = 1] = "friendlyNameAsc";
    /** friendly name (z-a) */
    PSPSort[PSPSort["friendlyNameDesc"] = 2] = "friendlyNameDesc";
    /** status (up-down-paused) */
    PSPSort[PSPSort["statusDesc"] = 3] = "statusDesc";
    /** status (down-up-paused) */
    PSPSort[PSPSort["statusAsc"] = 4] = "statusAsc";
})(PSPSort || (PSPSort = {}));
/** Sets the type of status page */
var PSPType;
(function (PSPType) {
    /** for all monitors */
    PSPType[PSPType["all"] = 1] = "all";
    /** for selected monitors */
    PSPType[PSPType["custom"] = 2] = "custom";
})(PSPType || (PSPType = {}));

const createErrorResponse = (err) => ({
    stat: 'fail',
    error: {
        type: 'invalid_parameter',
        parameter_name: 'Unhandled',
        message: err.message,
    },
});
class Client {
    constructor(apiKey, axiosConfig) {
        /** the axios instance */
        this.client = null;
        /** Returns a configured axios client */
        this.createClient = (apiKey, axiosConfig) => axios.create(Object.assign({ baseURL: `https://${Client.DEFAULT_HOST}/${Client.DEFAULT_BASE_PATH}`, timeout: 1e3, headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }, transformRequest: [data => qs.stringify(Object.assign(Object.assign({}, data), { api_key: apiKey }))] }, (axiosConfig || null)));
        /**
         * Creates a post request.
         * Note: api failed/badRequest requests are returned as 200. Here we have
         * intercept logic which looks to the Stat value of "fail" then force a
         * reject on the promise.
         */
        this.post = async (endpoint, params) => {
            var _a, _b, _c, _d, _e;
            try {
                const response = await ((_a = this.client) === null || _a === void 0 ? void 0 : _a.post(endpoint, params));
                if (((_b = response) === null || _b === void 0 ? void 0 : _b.data.stat) === 'fail') {
                    throw (_c = response) === null || _c === void 0 ? void 0 : _c.data;
                }
                return (_d = response) === null || _d === void 0 ? void 0 : _d.data;
            }
            catch (e) {
                throw !((_e = e) === null || _e === void 0 ? void 0 : _e.stat) ? createErrorResponse(e) : e;
            }
        };
        this.apiKey = apiKey;
        this.client = this.createClient(this.apiKey, axiosConfig);
    }
}
Client.DEFAULT_HOST = 'api.uptimerobot.com';
Client.DEFAULT_BASE_PATH = 'v2';
Client.DEFAULT_VERSION = 2;

// Models =================================================================== //
/**
 * Uptimerobot.Account -> Account
 */
const getApiAccountToAccount = (account) => (Object.assign({}, account));
// Responses ================================================================ //
/**
 * Uptimerobot.AccountListSuccessResponse -> AccountListResponse
 */
const getApiResponseToAccountListResponse = (response) => ({
    stat: response.stat,
    account: getApiAccountToAccount(response.account),
});

class Account extends Client {
    constructor() {
        super(...arguments);
        /**
         * Not implemented
         */
        this.get = () => {
            throw new Error('Not Implemented');
        };
        /**
         * Account details (max number of monitors that can be added and number of
         * up/down/paused monitors) can be grabbed using this method.
         */
        this.list = async () => {
            const response = await this.post('getAccountDetails');
            return getApiResponseToAccountListResponse(response);
        };
        /**
         * Not implemented
         */
        this.create = () => {
            throw new Error('Not Implemented');
        };
        /**
         * Not implemented
         */
        this.update = () => {
            throw new Error('Not Implemented');
        };
        /**
         * Not implemented
         */
        this.delete = () => {
            throw new Error('Not Implemented');
        };
    }
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var compact_1 = compact;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$3 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var noop_1 = noop;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY) ? noop_1 : function(values) {
  return new _Set(values);
};

var _createSet = createSet;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return _setToArray(set);
    }
    isCommon = false;
    includes = _cacheHas;
    seen = new _SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseUniq = baseUniq;

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? _baseUniq(array) : [];
}

var uniq_1 = uniq;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor;

/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */
function baseRepeat(string, n) {
  var result = '';
  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
    return result;
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string;
    }
    n = nativeFloor(n / 2);
    if (n) {
      string += string;
    }
  } while (n);

  return result;
}

var _baseRepeat = baseRepeat;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = _baseProperty('length');

var _asciiSize = asciiSize;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']',
    rsCombo = '[' + rsComboRange$1 + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange$1 + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange$1 + ']?',
    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

var _unicodeSize = unicodeSize;

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return _hasUnicode(string)
    ? _unicodeSize(string)
    : _asciiSize(string);
}

var _stringSize = stringSize;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff',
    rsComboMarksRange$2 = '\\u0300-\\u036f',
    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
    rsVarRange$2 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral$1 = '[' + rsAstralRange$2 + ']',
    rsCombo$1 = '[' + rsComboRange$2 + ']',
    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$1 = '(?:' + rsCombo$1 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$2 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsSymbol$1 = '(?:' + [rsNonAstral$1 + rsCombo$1 + '?', rsCombo$1, rsRegional$1, rsSurrPair$1, rsAstral$1].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode$1 = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol$1 + rsSeq$1, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode$1) || [];
}

var _unicodeToArray = unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return _hasUnicode(string)
    ? _unicodeToArray(string)
    : _asciiToArray(string);
}

var _stringToArray = stringToArray;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : _baseToString(chars);

  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? _baseRepeat(chars, length) : chars;
  }
  var result = _baseRepeat(chars, nativeCeil(length / _stringSize(chars)));
  return _hasUnicode(chars)
    ? _castSlice(_stringToArray(result), 0, length).join('')
    : result.slice(0, length);
}

var _createPadding = createPadding;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */
function padStart(string, length, chars) {
  string = toString_1(string);
  length = toInteger_1(length);

  var strLength = length ? _stringSize(string) : 0;
  return (length && strLength < length)
    ? (_createPadding(length - strLength, chars) + string)
    : string;
}

var padStart_1 = padStart;

/**
 * Returns JSON string of an object
 * @example
 * getJSONToApiValue({ apple: 1 })
 * > '{"apple":1}'
 */
const getJSONToApiValue = (obj) => obj ? JSON.stringify(obj) : obj;
/**
 * Returns a JSON object from a string
 * @example
 * getApiValueToJSON('{"apple":1}')
 * > { apple: 1 }
 */
const getApiValueToJSON = (value) => {
    try {
        return JSON.parse(value);
    }
    catch (e) {
        return {};
    }
};
/**
 * Bi-directional conversion for api json values
 * @example
 * '{"apple":1}' -> { apple: 1 } -> '{"apple":1}'
 */
const applyJSONConversion = (value) => {
    if (typeof value === 'string')
        return getApiValueToJSON(value);
    if (typeof value === 'object')
        return getJSONToApiValue(value);
    return value;
};
/**
 * Returns a hyphen-delimited string of an array of number
 * @example
 * getArrayToApiValue([1,2,3])
 * > '1-2-3'
 */
const getArrayToApiValue = (arr) => Array.isArray(arr) ? arr.join('-') : arr;
/**
 * Returns an array of number from a hyphen-delimited string
 * @example
 * getApiValueToArray('1-2-3')
 * > [1,2,3]
 */
const getApiValueToArray = (value) => value.split('-').map(Number);
/**
 * Bi-directional conversion for api array values
 * @example
 * '1-23-88' -> [1, 23, 88] or [1, 23, 88] -> '1-23-88'
 */
const applyArrayConversion = (value) => {
    if (typeof value === 'string')
        return getApiValueToArray(value);
    if (Array.isArray(value))
        return getArrayToApiValue(value);
    return value;
};
/**
 * Returns "1" or "0" for "true" and "false" respectively
 * @example
 * getBoolToApiValue(false)
 * > 0
 */
const getBoolToApiValue = (bool) => {
    if (bool !== undefined)
        return bool ? 1 : 0;
    return bool;
};
/**
 * Returns "true" or "false" for "1" or "0" respectively
 * @example
 * getApiValueToBool(0)
 * > false
 */
const getApiValueToBool = (value) => value === 1;
/**
 * Bi-directional conversion for api boolean values
 * @example
 * 1 -> true or true -> 1
 */
const applyBoolConversion = (value) => {
    if (typeof value === 'string' || typeof value === 'number') {
        return getApiValueToBool(value);
    }
    if (typeof value === 'boolean')
        return getBoolToApiValue(value);
    return value;
};
/**
 * Returns unix timestamp for date object
 * @example
 * getDateToApiValue(new Date())
 * > 1578082892915
 */
const getDateToApiValue = (d) => d instanceof Date ? d.getTime() : d;
/**
 * Returns date object for unix timestamp
 * @example
 * getApiValueToDate(1578082892915)
 * > new Date()
 */
const getApiValueToDate = (d) => new Date(d);
/**
 * Bi-directional conversion for api date values
 * @example
 * new Date() -> 1578082892915 or 1578082892915 -> new Date()
 */
const applyDateConversion = (value) => {
    if (typeof value === 'number')
        return getApiValueToDate(Number(value));
    if (value instanceof Date)
        return getDateToApiValue(value);
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
const getTimeRangeToApiValue = (ranges) => {
    if (Array.isArray(ranges)) {
        return flatten_1([ranges])
            .map(range => { var _a; return uniq_1(compact_1([range.start.getTime(), (_a = range.end) === null || _a === void 0 ? void 0 : _a.getTime()])).join('_'); })
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
const getApiValueToTimeRange = (value) => value.split('-').map(range => {
    const [rangeStart, rangeEnd] = range.split('_');
    const start = new Date(rangeStart);
    const end = rangeEnd ? new Date(rangeEnd) : start;
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
const applyTimeRangeConversion = (value) => {
    if (typeof value === 'string')
        return getApiValueToTimeRange(value);
    if (Array.isArray(value))
        return getTimeRangeToApiValue(value);
    return value;
};
/**
 * Returns a hyphen-delimited string for MonitorHttpCustomStatus[]
 */
const getMonitorHttpCustomStatusesToApiValue = (customStatuses) => Array.isArray(customStatuses)
    ? customStatuses.map(custom => `${custom.code}:${custom.status}`).join('-')
    : customStatuses;
/** Returns a formatted string for MonitorAlertContactsNotification[] */
const getMonitorAlertContactsNotificationsToApiValue = (notifications) => Array.isArray(notifications)
    ? notifications
        .map(n => `${n.id}_${n.threshold || 0}_${n.recurrence || 0}`)
        .join('-')
    : notifications;
/**
 * Returns api value for MWindowStartTime
 * @example
 * { type: MWindowStartTime.daily, hour: 12, minute: 30 } -> "12:30"
 * { type: MWindowStartTime.once, date: new Date() } -> "1575158400000"
 */
const getMWindowStartTimeToApiValue = (startTime) => {
    var _a, _b, _c, _d, _e, _f;
    if (((_a = startTime) === null || _a === void 0 ? void 0 : _a.type) === MWindowType.daily ||
        ((_b = startTime) === null || _b === void 0 ? void 0 : _b.type) === MWindowType.weekly ||
        ((_c = startTime) === null || _c === void 0 ? void 0 : _c.type) === MWindowType.monthly) {
        const hour = padStart_1(String((_d = startTime) === null || _d === void 0 ? void 0 : _d.hour), 2, '0');
        const minute = padStart_1(String((_e = startTime) === null || _e === void 0 ? void 0 : _e.minute), 2, '0');
        return `${hour}:${minute}`;
    }
    if (((_f = startTime) === null || _f === void 0 ? void 0 : _f.type) === MWindowType.once) {
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
const getApiValueForMWindowStartTime = (type, value) => {
    if (type !== MWindowType.once) {
        const [hour, minute] = value.split(':');
        return {
            type: type,
            hour: Number(hour),
            minute: Number(minute),
        };
    }
    return {
        type: MWindowType.once,
        date: new Date(Number(value)),
    };
};

/**
 * Uptimerobot.Log -> Log
 */
const getApiLogToLog = (log) => (Object.assign(Object.assign({}, log), { datetime: applyDateConversion(log.datetime), type: log.type, reason: log.reason
        ? Object.assign(Object.assign({}, log.reason), { code: log.reason.code }) : undefined }));
/**
 * Uptimerobot.Monitor -> Monitor
 */
const getApiMonitorToMonitor = (monitor) => {
    var _a;
    return (Object.assign(Object.assign({}, monitor), { type: monitor.type, sub_type: monitor.sub_type, keyword_type: monitor.keyword_type, status: monitor.status, create_datetime: new Date(monitor.create_datetime), logs: (_a = monitor.logs) === null || _a === void 0 ? void 0 : _a.map(getApiLogToLog), is_group_main: applyBoolConversion(monitor.is_group_main) }));
};
// Responses ================================================================ //
/**
 * Uptimerobot.MonitorListSuccessResponse -> MonitorListSuccessResponse
 */
const getApiResponseToMonitorListResponse = (response) => ({
    stat: response.stat,
    pagination: response.pagination,
    monitors: response.monitors.map(getApiMonitorToMonitor),
});
/**
 * Uptimerobot.MonitorCreateSuccessResponse -> MonitorCreateSuccessResponse
 */
const getApiResponseToMonitorCreateResponse = (response) => ({
    stat: response.stat,
    monitor: {
        id: response.monitor.id,
        status: response.monitor.status,
    },
});
/**
 * Uptimerobot.MonitorEditSuccessResponse -> MonitorEditSuccessResponse
 */
const getApiResponseToMonitorEditResponse = (response) => ({
    stat: response.stat,
    monitor: {
        id: response.monitor.id,
    },
});
/**
 * Uptimerobot.MonitorDeleteSuccessResponse -> MonitorDeleteSuccessResponse
 */
const getApiResponseToMonitorDeleteResponse = (response) => ({
    stat: response.stat,
    monitor: {
        id: response.monitor.id,
    },
});
/**
 * Uptimerobot.MonitorResetSuccessResponse -> MonitorResetSuccessResponse
 */
const getApiResponseToMonitorResetResponse = (response) => ({
    stat: response.stat,
    monitor: {
        id: response.monitor.id,
    },
});
// Requests ================================================================= //
/**
 * MonitorListRequest -> Uptimerobot.MonitorListRequest
 */
const getMonitorListRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { monitors: applyArrayConversion(request.monitors), types: applyArrayConversion(request.types), statuses: applyArrayConversion(request.statuses), custom_uptime_ratios: applyTimeRangeConversion(request.custom_uptime_ratios), custom_uptime_ranges: applyTimeRangeConversion(request.custom_uptime_ranges), all_time_uptime_ratio: applyBoolConversion(request.all_time_uptime_ratio), all_time_uptime_durations: applyBoolConversion(request.all_time_uptime_durations), logs: applyBoolConversion(request.logs), logs_start_date: applyDateConversion(request.logs_start_date), logs_end_date: applyDateConversion(request.logs_end_date), log_types: applyArrayConversion(request.log_types), response_times: applyBoolConversion(request.response_times), response_times_start_date: applyDateConversion(request.response_times_start_date), response_times_end_date: applyDateConversion(request.response_times_end_date), alert_contacts: applyBoolConversion(request.alert_contacts), mwindows: applyArrayConversion(request.mwindows), ssl: applyBoolConversion(request.ssl), custom_http_headers: applyBoolConversion(request.custom_http_headers), custom_http_statuses: applyBoolConversion(request.custom_http_statuses), timezone: applyBoolConversion(request.timezone) }));
/**
 * MonitorCreateRequest -> Uptimerobot.MonitorCreateRequest
 */
const getMonitorCreateRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { alert_contacts: getMonitorAlertContactsNotificationsToApiValue(request.alert_contacts), post_value: applyJSONConversion(request.post_value), custom_http_headers: applyJSONConversion(request.custom_http_headers), custom_http_statuses: getMonitorHttpCustomStatusesToApiValue(request.custom_http_statuses), ignore_ssl_errors: applyBoolConversion(request.ignore_ssl_errors) }));
/**
 * MonitorEditRequest -> Uptimerobot.MonitorEditRequest
 */
const getMonitorEditRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { alert_contacts: getMonitorAlertContactsNotificationsToApiValue(request.alert_contacts), post_value: applyJSONConversion(request.post_value), custom_http_headers: applyJSONConversion(request.custom_http_headers), custom_http_statuses: getMonitorHttpCustomStatusesToApiValue(request.custom_http_statuses), ignore_ssl_errors: applyBoolConversion(request.ignore_ssl_errors) }));
/**
 * MonitorDeleteRequest -> Uptimerobot.MonitorDeleteRequest
 */
const getMonitorDeleteRequestToApiRequest = (request) => (Object.assign({}, request));
/**
 * MonitorResetRequest -> Uptimerobot.MonitorResetRequest
 */
const getMonitorResetRequestToApiRequest = (request) => (Object.assign({}, request));

class Monitor extends Client {
    constructor() {
        super(...arguments);
        /**
         * Returns one or more specified Monitors.
         * See Monitor#list method description.
         */
        this.get = async (monitors, params) => {
            const response = await this.post('getMonitors', params ? getMonitorListRequestToApiRequest(Object.assign(Object.assign({}, params), { monitors })) : {});
            return getApiResponseToMonitorListResponse(response);
        };
        /**
         * This is a Swiss-Army knife type of a method for getting any information on
         * monitors.
         * By default, it lists all the monitors in a user's account, their
         * friendly names, types (http, keyword, port, etc.), statuses (up, down,
         * etc.) and uptime ratios.
         * There are optional parameters which lets the getMonitors method to output
         * information on any given monitors rather than all of them.
         * And also, parameters exist for getting the notification logs (alerts) for
         * each monitor and even which alert contacts were alerted on each
         * notification.
         */
        this.list = async (params) => {
            const response = await this.post('getMonitors', params ? getMonitorListRequestToApiRequest(params) : {});
            return getApiResponseToMonitorListResponse(response);
        };
        /**
         * New monitors of any type can be created using this method.
         */
        this.create = async (params) => {
            const response = await this.post('newMonitor', getMonitorCreateRequestToApiRequest(params));
            return getApiResponseToMonitorCreateResponse(response);
        };
        /**
         * Monitors can be edited using this method.
         * Important: The type of a monitor can not be edited (like changing a HTTP
         * monitor into a Port monitor). For such cases, deleting the monitor and
         * re-creating a new one is advised.
         */
        this.update = async (params) => {
            const response = await this.post('editMonitor', getMonitorEditRequestToApiRequest(params));
            return getApiResponseToMonitorEditResponse(response);
        };
        /**
         * Monitors can be deleted using this method.
         */
        this.delete = async (params) => {
            const response = await this.post('deleteMonitor', getMonitorDeleteRequestToApiRequest(params));
            return getApiResponseToMonitorDeleteResponse(response);
        };
        /**
         * Monitors can be reset (deleting all stats and response time data) using this method.
         */
        this.reset = async (params) => {
            const response = await this.post('resetMonitor', getMonitorResetRequestToApiRequest(params));
            return getApiResponseToMonitorResetResponse(response);
        };
    }
}

// Models =================================================================== //
/**
 * Uptimerobot.AlertContact -> AlertContact
 */
const getApiAlertContactToAlertContact = (alertContact) => (Object.assign(Object.assign({}, alertContact), { status: alertContact.status, type: alertContact.type }));
// Responses ================================================================ //
/**
 * Uptimerobot.AlertContactListSuccessResponse -> AlertContactListResponse
 */
const getApiResponseToAlertContactListResponse = (response) => ({
    stat: response.stat,
    pagination: {
        limit: response.limit,
        offset: response.offset,
        total: response.total,
    },
    alert_contacts: response.alert_contacts.map(getApiAlertContactToAlertContact),
});
/**
 * Uptimerobot.AlertContactCreateSuccessResponse -> AlertContactCreateSuccessResponse
 */
const getApiResponseToAlertContactCreateResponse = (response) => ({
    stat: response.stat,
    alertcontact: Object.assign(Object.assign({}, response.alertcontact), { status: response.alertcontact.status }),
});
/**
 * Uptimerobot.AlertContactEditSuccessResponse -> AlertContactEditSuccessResponse
 */
const getApiResponseToAlertContactEditResponse = (response) => (Object.assign(Object.assign({}, response), { stat: response.stat }));
/**
 * Uptimerobot.AlertContactDeleteSuccessResponse -> AlertContactDeleteSuccessResponse
 */
const getApiResponseToAlertContactDeleteResponse = (response) => (Object.assign(Object.assign({}, response), { stat: response.stat }));
// Requests ================================================================= //
/**
 * AlertContactListRequest -> Uptimerobot.AlertContactListRequest
 */
const getAlertContactListRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { alert_contacts: applyArrayConversion(request.alert_contacts) }));
/**
 * AlertContactCreateRequest -> Uptimerobot.AlertContactCreateRequest
 */
const getAlertContactCreateRequestToApiRequest = (request) => (Object.assign({}, request));
/**
 * AlertContactEditRequest -> Uptimerobot.AlertContactEditRequest
 */
const getAlertContactEditRequestToApiRequest = (request) => (Object.assign({}, request));
/**
 * AlertContactDeleteRequest -> Uptimerobot.AlertContactDeleteRequest
 */
const getAlertContactDeleteRequestToApiRequest = (request) => (Object.assign({}, request));

class AlertContact extends Client {
    constructor() {
        super(...arguments);
        /**
         * Returns one or more specified AlertContacts.
         */
        this.get = async (alertContacts, params) => {
            const response = await this.post('getAlertContacts', params
                ? getAlertContactListRequestToApiRequest(Object.assign(Object.assign({}, params), { alert_contacts: alertContacts }))
                : {});
            return getApiResponseToAlertContactListResponse(response);
        };
        /**
         * The list of alert contacts can be called with this method.
         */
        this.list = async (params) => {
            const response = await this.post('getAlertContacts', params ? getAlertContactListRequestToApiRequest(params) : {});
            return getApiResponseToAlertContactListResponse(response);
        };
        /**
         * New alert contacts of any type (mobile/SMS alert contacts are not supported
         * yet) can be created using this method.
         * The alert contacts created using the API are validated with the same way as
         * they were created from uptimerobot.com (activation link for e-mails, etc.).
         */
        this.create = async (params) => {
            const response = await this.post('newAlertContact', getAlertContactCreateRequestToApiRequest(params));
            return getApiResponseToAlertContactCreateResponse(response);
        };
        /**
         * Alert contacts can be edited using this method.
         */
        this.update = async (params) => {
            const response = await this.post('editAlertContact', getAlertContactEditRequestToApiRequest(params));
            return getApiResponseToAlertContactEditResponse(response);
        };
        /**
         * Alert contacts can be deleted using this method.
         */
        this.delete = async (params) => {
            const response = await this.post('deleteAlertContact', getAlertContactDeleteRequestToApiRequest(params));
            return getApiResponseToAlertContactDeleteResponse(response);
        };
    }
}

// Models =================================================================== //
/**
 * Uptimerobot.MWindow -> MWindow
 */
const getApiMWindowToMWindow = (mWindow) => (Object.assign(Object.assign({}, mWindow), { status: mWindow.status, type: mWindow.type, start_time: getApiValueForMWindowStartTime(mWindow.type, mWindow.start_time), value: applyArrayConversion(mWindow.value) }));
// Responses ================================================================ //
/**
 * Uptimerobot.MWindowListSuccessResponse -> MWindowListSuccessResponse
 */
const getApiResponseToMWindowListResponse = (response) => ({
    stat: response.stat,
    pagination: response.pagination,
    mwindows: response.mwindows.map(getApiMWindowToMWindow),
});
/**
 * Uptimerobot.MWindowCreateSuccessResponse -> MWindowCreateSuccessResponse
 */
const getApiResponseToMWindowCreateResponse = (response) => ({
    stat: response.stat,
    mwindow: Object.assign(Object.assign({}, response.mwindow), { status: response.mwindow.status }),
});
/**
 * Uptimerobot.MWindowEditSuccessResponse -> MWindowEditSuccessResponse
 */
const getApiResponseToMWindowEditResponse = (response) => (Object.assign(Object.assign({}, response), { stat: response.stat }));
/**
 * Uptimerobot.MWindowDeleteSuccessResponse -> MWindowDeleteSuccessResponse
 */
const getApiResponseToMWindowDeleteResponse = (response) => (Object.assign(Object.assign({}, response), { stat: response.stat }));
// Requests ================================================================= //
/**
 * MWindowListRequest -> Uptimerobot.MWindowListRequest
 */
const getMWindowListRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { mwindows: applyArrayConversion(request.mwindows) }));
/**
 * MWindowCreateRequest -> Uptimerobot.MWindowCreateRequest
 */
const getMWindowCreateRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { start_time: getMWindowStartTimeToApiValue(request.start_time), value: applyArrayConversion(request.value) }));
/**
 * MWindowEditRequest -> Uptimerobot.MWindowEditRequest
 */
const getMWindowEditRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { start_time: getMWindowStartTimeToApiValue(request.start_time) }));
/**
 * MWindowDeleteRequest -> Uptimerobot.MWindowDeleteRequest
 */
const getMWindowDeleteRequestToApiRequest = (request) => (Object.assign({}, request));

class MWindow extends Client {
    constructor() {
        super(...arguments);
        /**
         * Returns one or more specified maintenance windows.
         */
        this.get = async (mwindows, params) => {
            const response = await this.post('getMWindows', params ? getMWindowListRequestToApiRequest(Object.assign(Object.assign({}, params), { mwindows })) : {});
            return getApiResponseToMWindowListResponse(response);
        };
        /**
         * The list of maintenance windows can be called with this method.
         */
        this.list = async (params) => {
            const response = await this.post('getMWindows', params ? getMWindowListRequestToApiRequest(params) : {});
            return getApiResponseToMWindowListResponse(response);
        };
        /**
         * New maintenance windows can be created using this method.
         */
        this.create = async (params) => {
            const response = await this.post('newMWindow', getMWindowCreateRequestToApiRequest(params));
            return getApiResponseToMWindowCreateResponse(response);
        };
        /**
         * Maintenance windows can be edited using this method.
         */
        this.update = async (params) => {
            const response = await this.post('editMWindow', getMWindowEditRequestToApiRequest(params));
            return getApiResponseToMWindowEditResponse(response);
        };
        /**
         * Maintenance windows can be deleted using this method.
         */
        this.delete = async (params) => {
            const response = await this.post('deleteMWindow', getMWindowDeleteRequestToApiRequest(params));
            return getApiResponseToMWindowDeleteResponse(response);
        };
    }
}

// Models =================================================================== //
/**
 * Uptimerobot.PSP -> PSP
 */
const getApiPSPToPSP = (psp) => (Object.assign(Object.assign({}, psp), { sort: psp.sort, status: psp.status, monitors: applyArrayConversion(psp.monitors) }));
// Responses ================================================================ //
/**
 * Uptimerobot.PSPListSuccessResponse -> PSPListResponse
 */
const getApiResponseToPSPListResponse = (response) => ({
    stat: response.stat,
    pagination: {
        limit: response.limit,
        offset: response.offset,
        total: response.total,
    },
    psps: response.psps.map(getApiPSPToPSP),
});
/**
 * Uptimerobot.PSPCreateSuccessResponse -> PSPCreateSuccessResponse
 */
const getApiResponseToPSPCreateResponse = (response) => (Object.assign(Object.assign({}, response), { stat: response.stat }));
/**
 * Uptimerobot.PSPEditSuccessResponse -> PSPEditSuccessResponse
 */
const getApiResponseToPSPEditResponse = (response) => (Object.assign(Object.assign({}, response), { stat: response.stat }));
/**
 * Uptimerobot.PSPDeleteSuccessResponse -> PSPDeleteSuccessResponse
 */
const getApiResponseToPSPDeleteResponse = (response) => (Object.assign(Object.assign({}, response), { stat: response.stat }));
// Requests ================================================================= //
/**
 * PSPListRequest -> Uptimerobot.PSPListRequest
 */
const getPSPListRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { psps: applyArrayConversion(request.psps) }));
/**
 * PSPCreateRequest -> Uptimerobot.PSPCreateRequest
 */
const getPSPCreateRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { monitors: applyArrayConversion(request.monitors), hide_url_links: applyBoolConversion(request.hide_url_links) }));
/**
 * PSPEditRequest -> Uptimerobot.PSPEditRequest
 */
const getPSPEditRequestToApiRequest = (request) => (Object.assign(Object.assign({}, request), { monitors: applyArrayConversion(request.monitors), hide_url_links: applyBoolConversion(request.hide_url_links) }));
/**
 * PSPDeleteRequest -> Uptimerobot.PSPDeleteRequest
 */
const getPSPDeleteRequestToApiRequest = (request) => (Object.assign({}, request));

class PSP extends Client {
    constructor() {
        super(...arguments);
        /**
         * Returns one or more specified public status pages.
         */
        this.get = async (psps, params) => {
            const response = await this.post('getPSPs', params ? getPSPListRequestToApiRequest(Object.assign(Object.assign({}, params), { psps })) : {});
            return getApiResponseToPSPListResponse(response);
        };
        /**
         * The list of public status pages can be called with this method.
         */
        this.list = async (params) => {
            const response = await this.post('getPSPs', params ? getPSPListRequestToApiRequest(params) : {});
            return getApiResponseToPSPListResponse(response);
        };
        /**
         * New public status pages can be created using this method.
         */
        this.create = async (params) => {
            const response = await this.post('newPSP', getPSPCreateRequestToApiRequest(params));
            return getApiResponseToPSPCreateResponse(response);
        };
        /**
         * Public status pages can be edited using this method.
         */
        this.update = async (params) => {
            const response = await this.post('editPSP', getPSPEditRequestToApiRequest(params));
            return getApiResponseToPSPEditResponse(response);
        };
        /**
         * Public status pages can be deleted using this method.
         */
        this.delete = async (params) => {
            const response = await this.post('deletePSP', getPSPDeleteRequestToApiRequest(params));
            return getApiResponseToPSPDeleteResponse(response);
        };
    }
}

class Api extends Client {
    constructor(apiKey, axiosConfig) {
        super(apiKey, axiosConfig);
        this.account = new Account(apiKey, axiosConfig);
        this.monitor = new Monitor(apiKey, axiosConfig);
        this.alertContact = new AlertContact(apiKey, axiosConfig);
        this.mWindow = new MWindow(apiKey, axiosConfig);
        this.psp = new PSP(apiKey, axiosConfig);
    }
}

export default Api;
export { AlertContactState, AlertContactType, ErrorType, LogType, MWindowState, MWindowType, MonitorHttpMethod, MonitorHttpMethodContentType, MonitorHttpMethodPostType, MonitorKeywordType, MonitorState, MonitorSubType, MonitorType, PSPSort, PSPState, PSPType, Stat };
