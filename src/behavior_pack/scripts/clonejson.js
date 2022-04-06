/**
 * JSON clone function (Modified)
 * https://stackoverflow.com/a/17502990
 */

/**
 * 
 * @param {object}
 * @returns {object}
 */

function native(obj) {
  if (typeof obj === "function") {
    return String(obj)
  }
  if (obj === null || obj === undefined || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof Array) {
    var cloneA = [];
    for (var i = 0; i < obj.length; ++i) {
      cloneA[i] = native(obj[i]);
    }
    return cloneA;
  }
  var cloneO = {};
  for (var i in obj) {
    cloneO[i] = native(obj[i]);
  }
  return cloneO;
}

/**
 * 
 * @description code stays native so you cant see from interpreter in minecraft
 * @param {*} obj 
 * @returns JSON
 */
export const cloneJSON = (obj) => { return native(obj) }