'use strict';

module.exports = {
  transform: transform
};

/**
 * Transforms the input based on the result of test.  Test is run against object
 * values, array values, and anything else.  If test returns true, object values are
 * deleted, array items are removed, and null is returned for anything else.
 *
 * @param {?} input
 * @param {Function} test
 * @return {?}
 */
function transform(input, test) {
  var i, len, value, keys, key, newInput;

  if (Array.isArray(input)) {
    newInput = [];

    for (i = input.length - 1; i >= 0 ; i--) {
      value = input[i];

      if (!test(value)) {
        newInput.unshift(value);
      }
    }

    input = newInput;
  } else if (input && input.constructor === Object) {
    keys = Object.keys(input);
    newInput = {};


    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];
      value = input[keys[i]];

      if (!test(value)) {
        newInput[key] = value;
      }
    }

    input = newInput;
  } else if (test(input)) {
    input = null;
  }

  return input;
}
