'use strict';

// import urilib from 'url';
import attribute from './attribute.js';
import * as helpers from './helpers.js';
import { scan as scanSchema } from './scan.js';
var ValidatorResult = helpers.ValidatorResult;
var ValidatorResultError = helpers.ValidatorResultError;
var SchemaError = helpers.SchemaError;
var SchemaContext = helpers.SchemaContext;
//var anonymousBase = 'vnd.jsonschema:///';
var anonymousBase = '/';

// Alphabet chars.
const CHAR_UPPERCASE_A = 65; /* A */
const CHAR_LOWERCASE_A = 97; /* a */
const CHAR_UPPERCASE_Z = 90; /* Z */
const CHAR_LOWERCASE_Z = 122; /* z */
const CHAR_UPPERCASE_C = 67; /* C */
const CHAR_LOWERCASE_B = 98; /* b */
const CHAR_LOWERCASE_E = 101; /* e */
const CHAR_LOWERCASE_N = 110; /* n */

// Non-alphabetic chars.
const CHAR_DOT = 46; /* . */
const CHAR_FORWARD_SLASH = 47; /* / */
const CHAR_BACKWARD_SLASH = 92; /* \ */
const CHAR_VERTICAL_LINE = 124; /* | */
const CHAR_COLON = 58; /* : */
const CHAR_QUESTION_MARK = 63; /* ? */
const CHAR_UNDERSCORE = 95; /* _ */
const CHAR_LINE_FEED = 10; /* \n */
const CHAR_CARRIAGE_RETURN = 13; /* \r */
const CHAR_TAB = 9; /* \t */
const CHAR_FORM_FEED = 12; /* \f */
const CHAR_EXCLAMATION_MARK = 33; /* ! */
const CHAR_HASH = 35; /* # */
const CHAR_SPACE = 32; /*   */
const CHAR_NO_BREAK_SPACE = 160; /* \u00A0 */
const CHAR_ZERO_WIDTH_NOBREAK_SPACE = 65279; /* \uFEFF */
const CHAR_LEFT_SQUARE_BRACKET = 91; /* [ */
const CHAR_RIGHT_SQUARE_BRACKET = 93; /* ] */
const CHAR_LEFT_ANGLE_BRACKET = 60; /* < */
const CHAR_RIGHT_ANGLE_BRACKET = 62; /* > */
const CHAR_LEFT_CURLY_BRACKET = 123; /* { */
const CHAR_RIGHT_CURLY_BRACKET = 125; /* } */
const CHAR_HYPHEN_MINUS = 45; /* - */
const CHAR_PLUS = 43; /* + */
const CHAR_DOUBLE_QUOTE = 34; /* " */
const CHAR_SINGLE_QUOTE = 39; /* ' */
const CHAR_PERCENT = 37; /* % */
const CHAR_SEMICOLON = 59; /* ; */
const CHAR_CIRCUMFLEX_ACCENT = 94; /* ^ */
const CHAR_GRAVE_ACCENT = 96; /* ` */
const CHAR_AT = 64; /* @ */
const CHAR_AMPERSAND = 38; /* & */
const CHAR_EQUAL = 61; /* = */
// Escaped characters. Use empty strings to fill up unused entries.
// Using Array is faster than Object/Map
const escapedCodes = [
  /* 0 - 9 */ '', '', '', '', '', '', '', '', '', '%09',
  /* 10 - 19 */ '%0A', '', '', '%0D', '', '', '', '', '', '',
  /* 20 - 29 */ '', '', '', '', '', '', '', '', '', '',
  /* 30 - 39 */ '', '', '%20', '', '%22', '', '', '', '', '%27',
  /* 40 - 49 */ '', '', '', '', '', '', '', '', '', '',
  /* 50 - 59 */ '', '', '', '', '', '', '', '', '', '',
  /* 60 - 69 */ '%3C', '', '%3E', '', '', '', '', '', '', '',
  /* 70 - 79 */ '', '', '', '', '', '', '', '', '', '',
  /* 80 - 89 */ '', '', '', '', '', '', '', '', '', '',
  /* 90 - 99 */ '', '', '%5C', '', '%5E', '', '%60', '', '', '',
  /* 100 - 109 */ '', '', '', '', '', '', '', '', '', '',
  /* 110 - 119 */ '', '', '', '', '', '', '', '', '', '',
  /* 120 - 125 */ '', '', '', '%7B', '%7C', '%7D',
];
// Automatically escape all delimiters and unwise characters from RFC 2396.
// Also escape single quotes in case of an XSS attack.
// Return the escaped string.
function autoEscapeStr(rest) {
  let escaped = '';
  let lastEscapedPos = 0;
  for (let i = 0; i < rest.length; ++i) {
    // `escaped` contains substring up to the last escaped character.
    const escapedChar = escapedCodes[rest.charCodeAt(i)];
    if (escapedChar) {
      // Concat if there are ordinary characters in the middle.
      if (i > lastEscapedPos)
        escaped += rest.slice(lastEscapedPos, i);
      escaped += escapedChar;
      lastEscapedPos = i + 1;
    }
  }
  if (lastEscapedPos === 0)  // Nothing has been escaped.
    return rest;

  // There are ordinary characters at the end.
  if (lastEscapedPos < rest.length)
    escaped += rest.slice(lastEscapedPos);

  return escaped;
}
// Digits
const CHAR_0 = 48; /* 0 */
const CHAR_9 = 57; /* 9 */
// define these here so at least they only have to be
// compiled once on the first module load.
const protocolPattern = /^[a-z0-9.+-]+:/i;
const portPattern = /:[0-9]*$/;
const hostPattern = /^\/\/[^@/]+@[^@/]+/;
const hostnameMaxLen = 255;
// Protocols that can allow "unsafe" and "unwise" chars.
const unsafeProtocol = new Set([
  'javascript',
  'javascript:',
]);
// Protocols that never have a hostname.
const hostlessProtocol = new Set([
  'javascript',
  'javascript:',
]);
// Protocols that always contain a // bit.
const slashedProtocol = new Set([
  'http',
  'http:',
  'https',
  'https:',
  'ftp',
  'ftp:',
  'gopher',
  'gopher:',
  'file',
  'file:',
  'ws',
  'ws:',
  'wss',
  'wss:',
]);

// Special case for a simple path URL
const simplePathPattern = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
/**
 * 
 * @param {string} name 
 * @param {string} word 
 * @returns {boolean}
 */
const StringPrototypeEndsWith = (name, word) => name.endsWith(word);
/**
 * 
 * @param {string} name 
 * @param {string} word 
 * @returns {boolean}
 */
const StringPrototypeIncludes = (name, word) => name.includes(word);
/**
 * 
 * @param {string} arg 
 * @param {number} start
 * @param {number} end 
 * @returns {string}
 */
const StringPrototypeSlice = (arg, start, end) => arg.slice(start, end);/**
* 
* @param {string} arg
* @returns {string}
*/
const StringPrototypeToLowerCase = (arg) => arg.toLowerCase();

const ERR_INVALID_ARG_TYPE = ((name, expected, actual) => {
  assert(typeof name === 'string', "'name' must be a string");
  if (!ArrayIsArray(expected)) {
    expected = [expected];
  }

  let msg = 'The ';
  if (StringPrototypeEndsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg += `${name} `;
  } else {
    const type = StringPrototypeIncludes(name, '.') ? 'property' : 'argument';
    msg += `"${name}" ${type} `;
  }
  msg += 'must be ';

  const types = [];
  const instances = [];
  const other = [];

  for (const value of expected) {
    assert(typeof value === 'string',
           'All expected entries have to be of type string');
    if (ArrayPrototypeIncludes(kTypes, value)) {
      ArrayPrototypePush(types, StringPrototypeToLowerCase(value));
    } else if (RegExpPrototypeTest(classRegExp, value)) {
      ArrayPrototypePush(instances, value);
    } else {
      assert(value !== 'object',
             'The value "object" should be written as "Object"');
      ArrayPrototypePush(other, value);
    }
  }

  // Special handle `object` in case other instances are allowed to outline
  // the differences between each other.
  if (instances.length > 0) {
    const pos = ArrayPrototypeIndexOf(types, 'object');
    if (pos !== -1) {
      ArrayPrototypeSplice(types, pos, 1);
      ArrayPrototypePush(instances, 'Object');
    }
  }

  if (types.length > 0) {
    if (types.length > 2) {
      const last = ArrayPrototypePop(types);
      msg += `one of type ${ArrayPrototypeJoin(types, ', ')}, or ${last}`;
    } else if (types.length === 2) {
      msg += `one of type ${types[0]} or ${types[1]}`;
    } else {
      msg += `of type ${types[0]}`;
    }
    if (instances.length > 0 || other.length > 0)
      msg += ' or ';
  }

  if (instances.length > 0) {
    if (instances.length > 2) {
      const last = ArrayPrototypePop(instances);
      msg +=
        `an instance of ${ArrayPrototypeJoin(instances, ', ')}, or ${last}`;
    } else {
      msg += `an instance of ${instances[0]}`;
      if (instances.length === 2) {
        msg += ` or ${instances[1]}`;
      }
    }
    if (other.length > 0)
      msg += ' or ';
  }

  if (other.length > 0) {
    if (other.length > 2) {
      const last = ArrayPrototypePop(other);
      msg += `one of ${ArrayPrototypeJoin(other, ', ')}, or ${last}`;
    } else if (other.length === 2) {
      msg += `one of ${other[0]} or ${other[1]}`;
    } else {
      if (StringPrototypeToLowerCase(other[0]) !== other[0])
        msg += 'an ';
      msg += `${other[0]}`;
    }
  }

  if (actual == null) {
    msg += `. Received ${actual}`;
  } else if (typeof actual === 'function' && actual.name) {
    msg += `. Received function ${actual.name}`;
  } else if (typeof actual === 'object') {
    if (actual.constructor && actual.constructor.name) {
      msg += `. Received an instance of ${actual.constructor.name}`;
    } else {
      const inspected = lazyInternalUtilInspect()
        .inspect(actual, { depth: -1 });
      msg += `. Received ${inspected}`;
    }
  } else {
    let inspected = lazyInternalUtilInspect()
      .inspect(actual, { colors: false });
    if (inspected.length > 25)
      inspected = `${StringPrototypeSlice(inspected, 0, 25)}...`;
    msg += `. Received type ${typeof actual} (${inspected})`;
  }
  return msg;
}, TypeError)

function validateString(value, name) {
  if (typeof value !== 'string')
    throw new ERR_INVALID_ARG_TYPE(name, 'string', value);
}

class urilib {
  static parse(url, parseQueryString, slashesDenoteHost) {
    validateString(url, 'url');
  
    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    let hasHash = false;
    let hasAt = false;
    let start = -1;
    let end = -1;
    let rest = '';
    let lastPos = 0;
    for (let i = 0, inWs = false, split = false; i < url.length; ++i) {
      const code = url.charCodeAt(i);
  
      // Find first and last non-whitespace characters for trimming
      const isWs = code < 33 ||
                   code === CHAR_NO_BREAK_SPACE ||
                   code === CHAR_ZERO_WIDTH_NOBREAK_SPACE;
      if (start === -1) {
        if (isWs)
          continue;
        lastPos = start = i;
      } else if (inWs) {
        if (!isWs) {
          end = -1;
          inWs = false;
        }
      } else if (isWs) {
        end = i;
        inWs = true;
      }
  
      // Only convert backslashes while we haven't seen a split character
      if (!split) {
        switch (code) {
          case CHAR_AT:
            hasAt = true;
            break;
          case CHAR_HASH:
            hasHash = true;
          // Fall through
          case CHAR_QUESTION_MARK:
            split = true;
            break;
          case CHAR_BACKWARD_SLASH:
            if (i - lastPos > 0)
              rest += url.slice(lastPos, i);
            rest += '/';
            lastPos = i + 1;
            break;
        }
      } else if (!hasHash && code === CHAR_HASH) {
        hasHash = true;
      }
    }
  
    // Check if string was non-empty (including strings with only whitespace)
    if (start !== -1) {
      if (lastPos === start) {
        // We didn't convert any backslashes
  
        if (end === -1) {
          if (start === 0)
            rest = url;
          else
            rest = url.slice(start);
        } else {
          rest = url.slice(start, end);
        }
      } else if (end === -1 && lastPos < url.length) {
        // We converted some backslashes and have only part of the entire string
        rest += url.slice(lastPos);
      } else if (end !== -1 && lastPos < end) {
        // We converted some backslashes and have only part of the entire string
        rest += url.slice(lastPos, end);
      }
    }
  
    if (!slashesDenoteHost && !hasHash && !hasAt) {
      // Try fast path regexp
      const simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring.parse(this.search.slice(1));
          } else {
            this.query = this.search.slice(1);
          }
        } else if (parseQueryString) {
          this.search = null;
          this.query = ObjectCreate(null);
        }
        return this;
      }
    }
  
    let proto = protocolPattern.exec(rest);
    let lowerProto;
    if (proto) {
      proto = proto[0];
      lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.slice(proto.length);
    }
  
    // Figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    let slashes;
    if (slashesDenoteHost || proto || hostPattern.test(rest)) {
      slashes = rest.charCodeAt(0) === CHAR_FORWARD_SLASH &&
                rest.charCodeAt(1) === CHAR_FORWARD_SLASH;
      if (slashes && !(proto && hostlessProtocol.has(lowerProto))) {
        rest = rest.slice(2);
        this.slashes = true;
      }
    }
  
    if (!hostlessProtocol.has(lowerProto) &&
        (slashes || (proto && !slashedProtocol.has(proto)))) {
  
      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      //
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      //
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:b path:/?@c
  
      let hostEnd = -1;
      let atSign = -1;
      let nonHost = -1;
      for (let i = 0; i < rest.length; ++i) {
        switch (rest.charCodeAt(i)) {
          case CHAR_TAB:
          case CHAR_LINE_FEED:
          case CHAR_CARRIAGE_RETURN:
          case CHAR_SPACE:
          case CHAR_DOUBLE_QUOTE:
          case CHAR_PERCENT:
          case CHAR_SINGLE_QUOTE:
          case CHAR_SEMICOLON:
          case CHAR_LEFT_ANGLE_BRACKET:
          case CHAR_RIGHT_ANGLE_BRACKET:
          case CHAR_BACKWARD_SLASH:
          case CHAR_CIRCUMFLEX_ACCENT:
          case CHAR_GRAVE_ACCENT:
          case CHAR_LEFT_CURLY_BRACKET:
          case CHAR_VERTICAL_LINE:
          case CHAR_RIGHT_CURLY_BRACKET:
            // Characters that are never ever allowed in a hostname from RFC 2396
            if (nonHost === -1)
              nonHost = i;
            break;
          case CHAR_HASH:
          case CHAR_FORWARD_SLASH:
          case CHAR_QUESTION_MARK:
            // Find the first instance of any host-ending characters
            if (nonHost === -1)
              nonHost = i;
            hostEnd = i;
            break;
          case CHAR_AT:
            // At this point, either we have an explicit point where the
            // auth portion cannot go past, or the last @ char is the decider.
            atSign = i;
            nonHost = -1;
            break;
        }
        if (hostEnd !== -1)
          break;
      }
      start = 0;
      if (atSign !== -1) {
        this.auth = decodeURIComponent(rest.slice(0, atSign));
        start = atSign + 1;
      }
      if (nonHost === -1) {
        this.host = rest.slice(start);
        rest = '';
      } else {
        this.host = rest.slice(start, nonHost);
        rest = rest.slice(nonHost);
      }
  
      // pull out port.
      this.parseHost();
  
      // We've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
      if (typeof this.hostname !== 'string')
        this.hostname = '';
  
      const hostname = this.hostname;
  
      // If hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
      const ipv6Hostname = isIpv6Hostname(hostname);
  
      // validate a little.
      if (!ipv6Hostname) {
        rest = getHostname(this, rest, hostname);
      }
  
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        // Hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
      }
  
      if (this.hostname !== '') {
        if (ipv6Hostname) {
          if (forbiddenHostCharsIpv6.test(this.hostname)) {
            throw new ERR_INVALID_URL(url);
          }
        } else {
          // IDNA Support: Returns a punycoded representation of "domain".
          // It only converts parts of the domain name that
          // have non-ASCII characters, i.e. it doesn't matter if
          // you call it with a domain that already is ASCII-only.
  
          // Use lenient mode (`true`) to try to support even non-compliant
          // URLs.
          this.hostname = toASCII(this.hostname, true);
  
          // Prevent two potential routes of hostname spoofing.
          // 1. If this.hostname is empty, it must have become empty due to toASCII
          //    since we checked this.hostname above.
          // 2. If any of forbiddenHostChars appears in this.hostname, it must have
          //    also gotten in due to toASCII. This is since getHostname would have
          //    filtered them out otherwise.
          // Rather than trying to correct this by moving the non-host part into
          // the pathname as we've done in getHostname, throw an exception to
          // convey the severity of this issue.
          if (this.hostname === '' || forbiddenHostChars.test(this.hostname)) {
            throw new ERR_INVALID_URL(url);
          }
        }
      }
  
      const p = this.port ? ':' + this.port : '';
      const h = this.hostname || '';
      this.host = h + p;
  
      // strip [ and ] from the hostname
      // the host field still retains them, though
      if (ipv6Hostname) {
        this.hostname = this.hostname.slice(1, -1);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }
  
    // Now rest is set to the post-host stuff.
    // Chop off any delim chars.
    if (!unsafeProtocol.has(lowerProto)) {
      // First, make 100% sure that any "autoEscape" chars get
      // escaped, even if encodeURIComponent doesn't think they
      // need to be.
      rest = autoEscapeStr(rest);
    }
  
    let questionIdx = -1;
    let hashIdx = -1;
    for (let i = 0; i < rest.length; ++i) {
      const code = rest.charCodeAt(i);
      if (code === CHAR_HASH) {
        this.hash = rest.slice(i);
        hashIdx = i;
        break;
      } else if (code === CHAR_QUESTION_MARK && questionIdx === -1) {
        questionIdx = i;
      }
    }
  
    if (questionIdx !== -1) {
      if (hashIdx === -1) {
        this.search = rest.slice(questionIdx);
        this.query = rest.slice(questionIdx + 1);
      } else {
        this.search = rest.slice(questionIdx, hashIdx);
        this.query = rest.slice(questionIdx + 1, hashIdx);
      }
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
    } else if (parseQueryString) {
      // No query string, but parseQueryString still requested
      this.search = null;
      this.query = ObjectCreate(null);
    }
  
    const useQuestionIdx =
      questionIdx !== -1 && (hashIdx === -1 || questionIdx < hashIdx);
    const firstIdx = useQuestionIdx ? questionIdx : hashIdx;
    if (firstIdx === -1) {
      if (rest.length > 0)
        this.pathname = rest;
    } else if (firstIdx > 0) {
      this.pathname = rest.slice(0, firstIdx);
    }
    if (slashedProtocol.has(lowerProto) &&
        this.hostname && !this.pathname) {
      this.pathname = '/';
    }
  
    // To support http.request
    if (this.pathname || this.search) {
      const p = this.pathname || '';
      const s = this.search || '';
      this.path = p + s;
    }
  
    // Finally, reconstruct the href based on what has been validated.
    return this;
  };

  /**
   * This method resolves a target URL relative to a base URL in a manner similar to that of a Web browser resolving an anchor tag HREF.
   * ```
   * url.resolve('/one/two/three', 'four');         // '/one/two/four'
   * url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
   * url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
   * ```
   * You can achieve the same result using the WHATWG URL API:
   */
  static resolve(from, to) {
    const resolvedUrl = from + to;
    if (resolvedUrl.protocol === 'resolve:') {
      // `from` is a relative URL.
      const { pathname, search, hash } = resolvedUrl;
      return pathname + search + hash;
    }
    return resolvedUrl.toString();
  }
}

/**
 * Creates a new Validator object
 * @name Validator
 * @constructor
 */
function Validator () {
  // Allow a validator instance to override global custom formats or to have their
  // own custom formats.
  this.customFormats = Object.create(Validator.prototype.customFormats);
  this.schemas = {};
  this.unresolvedRefs = [];

  // Use Object.create to make this extensible without Validator instances stepping on each other's toes.
  this.types = Object.create(types);
  this.attributes = Object.create(attribute.validators);
};

// Allow formats to be registered globally.
Validator.prototype.customFormats = {};

// Hint at the presence of a property
Validator.prototype.schemas = null;
Validator.prototype.types = null;
Validator.prototype.attributes = null;
Validator.prototype.unresolvedRefs = null;

/**
 * Adds a schema with a certain urn to the Validator instance.
 * @param schema
 * @param urn
 * @return {Object}
 */
Validator.prototype.addSchema = function addSchema (schema, base) {
  var self = this;
  if (!schema) {
    return null;
  }
  var scan = scanSchema(base||anonymousBase, schema);
  var ourUri = base || schema.$id || schema.id;
  for(var uri in scan.id){
    this.schemas[uri] = scan.id[uri];
  }
  for(var uri in scan.ref){
    // If this schema is already defined, it will be filtered out by the next step
    this.unresolvedRefs.push(uri);
  }
  // Remove newly defined schemas from unresolvedRefs
  this.unresolvedRefs = this.unresolvedRefs.filter(function(uri){
    return typeof self.schemas[uri]==='undefined';
  });
  return this.schemas[ourUri];
};

Validator.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
  if(!Array.isArray(schemas)) return;
  for(var i=0; i<schemas.length; i++){
    this.addSubSchema(baseuri, schemas[i]);
  }
};

Validator.prototype.addSubSchemaObject = function addSubSchemaArray(baseuri, schemas) {
  if(!schemas || typeof schemas!='object') return;
  for(var p in schemas){
    this.addSubSchema(baseuri, schemas[p]);
  }
};



/**
 * Sets all the schemas of the Validator instance.
 * @param schemas
 */
Validator.prototype.setSchemas = function setSchemas (schemas) {
  this.schemas = schemas;
};

/**
 * Returns the schema of a certain urn
 * @param urn
 */
Validator.prototype.getSchema = function getSchema (urn) {
  return this.schemas[urn];
};

/**
 * Validates instance against the provided schema
 * @param instance
 * @param schema
 * @param [options]
 * @param [ctx]
 * @return {Array}
 */
Validator.prototype.validate = function validate (instance, schema, options, ctx) {
  if((typeof schema !== 'boolean' && typeof schema !== 'object') || schema === null){
    throw new SchemaError('Expected `schema` to be an object or boolean');
  }
  if (!options) {
    options = {};
  }
  // This section indexes subschemas in the provided schema, so they don't need to be added with Validator#addSchema
  // This will work so long as the function at uri.resolve() will resolve a relative URI to a relative URI
  var id = schema.$id || schema.id;
  var base = urilib.resolve(options.base||anonymousBase, id||'');
  if(!ctx){
    ctx = new SchemaContext(schema, options, [], base, Object.create(this.schemas));
    if (!ctx.schemas[base]) {
      ctx.schemas[base] = schema;
    }
    var found = scanSchema(base, schema);
    for(var n in found.id){
      var sch = found.id[n];
      ctx.schemas[n] = sch;
    }
  }
  if(options.required && instance===undefined){
    var result = new ValidatorResult(instance, schema, options, ctx);
    result.addError('is required, but is undefined');
    return result;
  }
  var result = this.validateSchema(instance, schema, options, ctx);
  if (!result) {
    throw new Error('Result undefined');
  }else if(options.throwAll && result.errors.length){
    throw new ValidatorResultError(result);
  }
  return result;
};

/**
* @param Object schema
* @return mixed schema uri or false
*/
function shouldResolve(schema) {
  var ref = (typeof schema === 'string') ? schema : schema.$ref;
  if (typeof ref=='string') return ref;
  return false;
}

/**
 * Validates an instance against the schema (the actual work horse)
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @private
 * @return {ValidatorResult}
 */
Validator.prototype.validateSchema = function validateSchema (instance, schema, options, ctx) {
  var result = new ValidatorResult(instance, schema, options, ctx);

  // Support for the true/false schemas
  if(typeof schema==='boolean') {
    if(schema===true){
      // `true` is always valid
      schema = {};
    }else if(schema===false){
      // `false` is always invalid
      schema = {type: []};
    }
  }else if(!schema){
    // This might be a string
    throw new Error("schema is undefined");
  }

  if (schema['extends']) {
    if (Array.isArray(schema['extends'])) {
      var schemaobj = {schema: schema, ctx: ctx};
      schema['extends'].forEach(this.schemaTraverser.bind(this, schemaobj));
      schema = schemaobj.schema;
      schemaobj.schema = null;
      schemaobj.ctx = null;
      schemaobj = null;
    } else {
      schema = helpers.deepMerge(schema, this.superResolve(schema['extends'], ctx));
    }
  }

  // If passed a string argument, load that schema URI
  var switchSchema = shouldResolve(schema);
  if (switchSchema) {
    var resolved = this.resolve(schema, switchSchema, ctx);
    var subctx = new SchemaContext(resolved.subschema, options, ctx.path, resolved.switchSchema, ctx.schemas);
    return this.validateSchema(instance, resolved.subschema, options, subctx);
  }

  var skipAttributes = options && options.skipAttributes || [];
  // Validate each schema attribute against the instance
  for (var key in schema) {
    if (!attribute.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
      var validatorErr = null;
      var validator = this.attributes[key];
      if (validator) {
        validatorErr = validator.call(this, instance, schema, options, ctx);
      } else if (options.allowUnknownAttributes === false) {
        // This represents an error with the schema itself, not an invalid instance
        throw new SchemaError("Unsupported attribute: " + key, schema);
      }
      if (validatorErr) {
        result.importErrors(validatorErr);
      }
    }
  }

  if (typeof options.rewrite == 'function') {
    var value = options.rewrite.call(this, instance, schema, options, ctx);
    result.instance = value;
  }
  return result;
};

/**
* @private
* @param Object schema
* @param SchemaContext ctx
* @returns Object schema or resolved schema
*/
Validator.prototype.schemaTraverser = function schemaTraverser (schemaobj, s) {
  schemaobj.schema = helpers.deepMerge(schemaobj.schema, this.superResolve(s, schemaobj.ctx));
};

/**
* @private
* @param Object schema
* @param SchemaContext ctx
* @returns Object schema or resolved schema
*/
Validator.prototype.superResolve = function superResolve (schema, ctx) {
  var ref = shouldResolve(schema);
  if(ref) {
    return this.resolve(schema, ref, ctx).subschema;
  }
  return schema;
};

/**
* @private
* @param Object schema
* @param Object switchSchema
* @param SchemaContext ctx
* @return Object resolved schemas {subschema:String, switchSchema: String}
* @throws SchemaError
*/
Validator.prototype.resolve = function resolve (schema, switchSchema, ctx) {
  switchSchema = ctx.resolve(switchSchema);
  // First see if the schema exists under the provided URI
  if (ctx.schemas[switchSchema]) {
    return {subschema: ctx.schemas[switchSchema], switchSchema: switchSchema};
  }
  // Else try walking the property pointer
  var parsed = urilib.parse(switchSchema);
  var fragment = parsed && parsed.hash;
  var document = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
  if (!document || !ctx.schemas[document]) {
    throw new SchemaError("no such schema <" + switchSchema + ">", schema);
  }
  var subschema = helpers.objectGetPath(ctx.schemas[document], fragment.substr(1));
  if(subschema===undefined){
    throw new SchemaError("no such schema " + fragment + " located in <" + document + ">", schema);
  }
  return {subschema: subschema, switchSchema: switchSchema};
};

/**
 * Tests whether the instance if of a certain type.
 * @private
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @param type
 * @return {boolean}
 */
Validator.prototype.testType = function validateType (instance, schema, options, ctx, type) {
  if(type===undefined){
    return;
  }else if(type===null){
    throw new SchemaError('Unexpected null in "type" keyword');
  }
  if (typeof this.types[type] == 'function') {
    return this.types[type].call(this, instance);
  }
  if (type && typeof type == 'object') {
    var res = this.validateSchema(instance, type, options, ctx);
    return res === undefined || !(res && res.errors.length);
  }
  // Undefined or properties not on the list are acceptable, same as not being defined
  return true;
};

var types = Validator.prototype.types = {};
types.string = function testString (instance) {
  return typeof instance == 'string';
};
types.number = function testNumber (instance) {
  // isFinite returns false for NaN, Infinity, and -Infinity
  return typeof instance == 'number' && isFinite(instance);
};
types.integer = function testInteger (instance) {
  return (typeof instance == 'number') && instance % 1 === 0;
};
types.boolean = function testBoolean (instance) {
  return typeof instance == 'boolean';
};
types.array = function testArray (instance) {
  return Array.isArray(instance);
};
types['null'] = function testNull (instance) {
  return instance === null;
};
types.date = function testDate (instance) {
  return instance instanceof Date;
};
types.any = function testAny (instance) {
  return true;
};
types.object = function testObject (instance) {
  // TODO: fix this - see #15
  return instance && (typeof instance === 'object') && !(Array.isArray(instance)) && !(instance instanceof Date);
};

export {Validator};
