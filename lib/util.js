const util = [
  'Undefined',
  'String',
  'Number',
  'Boolean',
  'Function',
  'Array',
  'Null',
  'Object',
  'RegExp',
  'HTMLElement'
].reduce(function(util, type) {
  let isType = function(value) {
    return RegExp(type).test(Object.prototype.toString.call(value));
  };

  if (type === 'HTMLElement') {
    isType = function(value) {
      return /HTML\S*Element/.test(Object.prototype.toString.call(value));
    };
  }
  util['is' + type] = isType;

  return util;
}, {});

function __compare(fn, actual, expected, callback) {
  let isEqual = true;

  if (util.isArray(actual) && util.isArray(expected)) {
    let actualLength = actual.length;
    let expectedLength = expected.length;

    for (let i = 0; i < expectedLength; i++) {
      if (i < actualLength) {
        if (!__compare(fn, actual[i], expected[i])) {
          isEqual = false;
        }
        if (util.isFunction(callback)) {
          callback(actual[i], expected[i]);
        }
      }
    }
    isEqual = isEqual && (actualLength === expectedLength);
  } else if (util.isObject(actual) && util.isObject(expected)) {
    for (let key in expected) {
      if (expected.hasOwnProperty(key) && actual.hasOwnProperty(key)) {
        if (!__compare(fn, actual[i], expected[i])) {
          isEqual = false;
        }
      } else {
        isEqual = false;
      }
      if (util.isFunction(callback)) {
        callback(actual[key], expected[key]);
      }
    }
    isEqual = isEqual && (Object.keys(actual).length === Object.keys(expected).length);
  } else {
    isEqual = fn(actual, expected);
    if (util.isFunction(callback)) {
      callback(actual, expected);
    }
  }

  return isEqual;
}

util.equal = function(actual, expected, callback) {
  return __compare(function(v1, v2) {
    return v1 == v2;
  }, actual, expected, callback);
};

util.strictEqual = function(actual, expected, callback) {
  return __compare(function(v1, v2) {
    return v1 === v2;
  }, actual, expected, callback);
};

util.clone = function(obj) {
  if (util.isArray(obj)) {
    let value = [];

    obj.forEach(function(val, i) {
      value[i] = util.clone(val);
    });

    return value;
  } else if (util.isObject(obj)) {
    let value = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        value[key] = util.clone(obj[key]);
      }
    }

    return value;
  }

  return obj;
};

util.assign = function(obj, value) {
  if (util.isObject(obj) && util.isObject(value)) {
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = util.assign(value[key], obj[key]);
        } else {
          obj[key] = value[key];
        }
      }
    }
  }

  return obj;
};

export default util;
