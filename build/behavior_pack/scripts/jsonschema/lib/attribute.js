import*as e from"./helpers.js";var r=e.ValidatorResult,t=e.SchemaError,i={ignoreProperties:{id:!0,default:!0,description:!0,title:!0,additionalItems:!0,then:!0,else:!0,$schema:!0,$ref:!0,extends:!0}};export var validators=i.validators={};function a(e,r,t,i,a){var n=r.throwError,o=r.throwAll;r.throwError=!1,r.throwAll=!1;var s=this.validateSchema(e,a,r,t);return r.throwError=n,r.throwAll=o,!s.valid&&i instanceof Function&&i(s),s.valid}function n(e,r){if(Object.hasOwnProperty.call(e,r))return e[r];if(r in e)for(;e=Object.getPrototypeOf(e);)if(Object.propertyIsEnumerable.call(e,r))return e[r]}function o(e,r,t,i,a,n){if(this.types.object(e)&&(!r.properties||void 0===r.properties[a]))if(!1===r.additionalProperties)n.addError({name:"additionalProperties",argument:a,message:"is not allowed to have the additional property "+JSON.stringify(a)});else{var o=r.additionalProperties||{};"function"==typeof t.preValidateProperty&&t.preValidateProperty(e,a,o,t,i);var s=this.validateSchema(e[a],o,t,i.makeChild(o,a));s.instance!==n.instance[a]&&(n.instance[a]=s.instance),n.importErrors(s)}}validators.type=function(e,t,i,a){if(void 0===e)return null;var n=new r(e,t,i,a),o=Array.isArray(t.type)?t.type:[t.type];if(!o.some(this.testType.bind(this,e,t,i,a))){var s=o.map((function(e){if(e){var r=e.$id||e.id;return r?"<"+r+">":e+""}}));n.addError({name:"type",argument:s,message:"is not of a type(s) "+s})}return n},validators.anyOf=function(e,i,n,o){if(void 0===e)return null;var s=new r(e,i,n,o),m=new r(e,i,n,o);if(!Array.isArray(i.anyOf))throw new t("anyOf must be an array");if(!i.anyOf.some(a.bind(this,e,n,o,(function(e){m.importErrors(e)})))){var u=i.anyOf.map((function(e,r){var t=e.$id||e.id;return t?"<"+t+">":e.title&&JSON.stringify(e.title)||e.$ref&&"<"+e.$ref+">"||"[subschema "+r+"]"}));n.nestedErrors&&s.importErrors(m),s.addError({name:"anyOf",argument:u,message:"is not any of "+u.join(",")})}return s},validators.allOf=function(e,i,a,n){if(void 0===e)return null;if(!Array.isArray(i.allOf))throw new t("allOf must be an array");var o=new r(e,i,a,n),s=this;return i.allOf.forEach((function(r,t){var i=s.validateSchema(e,r,a,n);if(!i.valid){var m=r.$id||r.id||r.title&&JSON.stringify(r.title)||r.$ref&&"<"+r.$ref+">"||"[subschema "+t+"]";o.addError({name:"allOf",argument:{id:m,length:i.errors.length,valid:i},message:"does not match allOf schema "+m+" with "+i.errors.length+" error[s]:"}),o.importErrors(i)}})),o},validators.oneOf=function(e,i,n,o){if(void 0===e)return null;if(!Array.isArray(i.oneOf))throw new t("oneOf must be an array");var s=new r(e,i,n,o),m=new r(e,i,n,o),u=i.oneOf.filter(a.bind(this,e,n,o,(function(e){m.importErrors(e)}))).length,d=i.oneOf.map((function(e,r){return e.$id||e.id||e.title&&JSON.stringify(e.title)||e.$ref&&"<"+e.$ref+">"||"[subschema "+r+"]"}));return 1!==u&&(n.nestedErrors&&s.importErrors(m),s.addError({name:"oneOf",argument:d,message:"is not exactly one from "+d.join(",")})),s},validators.if=function(t,i,n,o){if(void 0===t)return null;if(!e.isSchema(i.if))throw new Error('Expected "if" keyword to be a schema');var s,m=a.call(this,t,n,o,null,i.if),u=new r(t,i,n,o);if(m){if(void 0===i.then)return;if(!e.isSchema(i.then))throw new Error('Expected "then" keyword to be a schema');s=this.validateSchema(t,i.then,n,o.makeChild(i.then)),u.importErrors(s)}else{if(void 0===i.else)return;if(!e.isSchema(i.else))throw new Error('Expected "else" keyword to be a schema');s=this.validateSchema(t,i.else,n,o.makeChild(i.else)),u.importErrors(s)}return u},validators.propertyNames=function(i,a,o,s){if(this.types.object(i)){var m=new r(i,a,o,s),u=void 0!==a.propertyNames?a.propertyNames:{};if(!e.isSchema(u))throw new t('Expected "propertyNames" to be a schema (object or boolean)');for(var d in i)if(void 0!==n(i,d)){var l=this.validateSchema(d,u,o,s.makeChild(u));m.importErrors(l)}return m}},validators.properties=function(e,i,a,o){if(this.types.object(e)){var s=new r(e,i,a,o),m=i.properties||{};for(var u in m){var d=m[u];if(void 0!==d){if(null===d)throw new t('Unexpected null, expected schema in "properties"');"function"==typeof a.preValidateProperty&&a.preValidateProperty(e,u,d,a,o);var l=n(e,u),f=this.validateSchema(l,d,a,o.makeChild(d,u));f.instance!==s.instance[u]&&(s.instance[u]=f.instance),s.importErrors(f)}}return s}},validators.patternProperties=function(e,i,a,n){if(this.types.object(e)){var s=new r(e,i,a,n),m=i.patternProperties||{};for(var u in e){var d=!0;for(var l in m){var f=m[l];if(void 0!==f){if(null===f)throw new t('Unexpected null, expected schema in "patternProperties"');try{var c=new RegExp(l,"u")}catch(e){c=new RegExp(l)}if(c.test(u)){d=!1,"function"==typeof a.preValidateProperty&&a.preValidateProperty(e,u,f,a,n);var p=this.validateSchema(e[u],f,a,n.makeChild(f,u));p.instance!==s.instance[u]&&(s.instance[u]=p.instance),s.importErrors(p)}}}d&&o.call(this,e,i,a,n,u,s)}return s}},validators.additionalProperties=function(e,t,i,a){if(this.types.object(e)){if(t.patternProperties)return null;var n=new r(e,t,i,a);for(var s in e)o.call(this,e,t,i,a,s,n);return n}},validators.minProperties=function(e,t,i,a){if(this.types.object(e)){var n=new r(e,t,i,a);return Object.keys(e).length>=t.minProperties||n.addError({name:"minProperties",argument:t.minProperties,message:"does not meet minimum property length of "+t.minProperties}),n}},validators.maxProperties=function(e,t,i,a){if(this.types.object(e)){var n=new r(e,t,i,a);return Object.keys(e).length<=t.maxProperties||n.addError({name:"maxProperties",argument:t.maxProperties,message:"does not meet maximum property length of "+t.maxProperties}),n}},validators.items=function(e,t,i,a){var n=this;if(this.types.array(e)&&t.items){var o=new r(e,t,i,a);return e.every((function(e,r){var s=Array.isArray(t.items)?t.items[r]||t.additionalItems:t.items;if(void 0===s)return!0;if(!1===s)return o.addError({name:"items",message:"additionalItems not permitted"}),!1;var m=n.validateSchema(e,s,i,a.makeChild(s,r));return m.instance!==o.instance[r]&&(o.instance[r]=m.instance),o.importErrors(m),!0})),o}},validators.minimum=function(e,t,i,a){if(this.types.number(e)){var n=new r(e,t,i,a);return t.exclusiveMinimum&&!0===t.exclusiveMinimum?e>t.minimum||n.addError({name:"minimum",argument:t.minimum,message:"must be greater than "+t.minimum}):e>=t.minimum||n.addError({name:"minimum",argument:t.minimum,message:"must be greater than or equal to "+t.minimum}),n}},validators.maximum=function(e,t,i,a){if(this.types.number(e)){var n=new r(e,t,i,a);return t.exclusiveMaximum&&!0===t.exclusiveMaximum?e<t.maximum||n.addError({name:"maximum",argument:t.maximum,message:"must be less than "+t.maximum}):e<=t.maximum||n.addError({name:"maximum",argument:t.maximum,message:"must be less than or equal to "+t.maximum}),n}},validators.exclusiveMinimum=function(e,t,i,a){if("boolean"!=typeof t.exclusiveMaximum&&this.types.number(e)){var n=new r(e,t,i,a);return e>t.exclusiveMinimum||n.addError({name:"exclusiveMinimum",argument:t.exclusiveMinimum,message:"must be strictly greater than "+t.exclusiveMinimum}),n}},validators.exclusiveMaximum=function(e,t,i,a){if("boolean"!=typeof t.exclusiveMaximum&&this.types.number(e)){var n=new r(e,t,i,a);return e<t.exclusiveMaximum||n.addError({name:"exclusiveMaximum",argument:t.exclusiveMaximum,message:"must be strictly less than "+t.exclusiveMaximum}),n}};var s=function(i,a,n,o,s,m){if(this.types.number(i)){var u=a[s];if(0==u)throw new t(s+" cannot be zero");var d=new r(i,a,n,o),l=e.getDecimalPlaces(i),f=e.getDecimalPlaces(u),c=Math.max(l,f),p=Math.pow(10,c);return Math.round(i*p)%Math.round(u*p)!=0&&d.addError({name:s,argument:u,message:m+JSON.stringify(u)}),d}};function m(r,t,i){var a,n=i.length;for(a=t+1;a<n;a++)if(e.deepCompareStrict(r,i[a]))return!1;return!0}validators.multipleOf=function(e,r,t,i){return s.call(this,e,r,t,i,"multipleOf","is not a multiple of (divisible by) ")},validators.divisibleBy=function(e,r,t,i){return s.call(this,e,r,t,i,"divisibleBy","is not divisible by (multiple of) ")},validators.required=function(e,t,i,a){var o=new r(e,t,i,a);return void 0===e&&!0===t.required?o.addError({name:"required",message:"is required"}):this.types.object(e)&&Array.isArray(t.required)&&t.required.forEach((function(r){void 0===n(e,r)&&o.addError({name:"required",argument:r,message:"requires property "+JSON.stringify(r)})})),o},validators.pattern=function(e,t,i,a){if(this.types.string(e)){var n=new r(e,t,i,a),o=t.pattern;try{var s=new RegExp(o,"u")}catch(e){s=new RegExp(o)}return e.match(s)||n.addError({name:"pattern",argument:t.pattern,message:"does not match pattern "+JSON.stringify(t.pattern.toString())}),n}},validators.format=function(t,i,a,n){if(void 0!==t){var o=new r(t,i,a,n);return o.disableFormat||e.isFormat(t,i.format,this)||o.addError({name:"format",argument:i.format,message:"does not conform to the "+JSON.stringify(i.format)+" format"}),o}},validators.minLength=function(e,t,i,a){if(this.types.string(e)){var n=new r(e,t,i,a),o=e.match(/[\uDC00-\uDFFF]/g);return e.length-(o?o.length:0)>=t.minLength||n.addError({name:"minLength",argument:t.minLength,message:"does not meet minimum length of "+t.minLength}),n}},validators.maxLength=function(e,t,i,a){if(this.types.string(e)){var n=new r(e,t,i,a),o=e.match(/[\uDC00-\uDFFF]/g);return e.length-(o?o.length:0)<=t.maxLength||n.addError({name:"maxLength",argument:t.maxLength,message:"does not meet maximum length of "+t.maxLength}),n}},validators.minItems=function(e,t,i,a){if(this.types.array(e)){var n=new r(e,t,i,a);return e.length>=t.minItems||n.addError({name:"minItems",argument:t.minItems,message:"does not meet minimum length of "+t.minItems}),n}},validators.maxItems=function(e,t,i,a){if(this.types.array(e)){var n=new r(e,t,i,a);return e.length<=t.maxItems||n.addError({name:"maxItems",argument:t.maxItems,message:"does not meet maximum length of "+t.maxItems}),n}},validators.uniqueItems=function(e,t,i,a){if(!0===t.uniqueItems&&this.types.array(e)){var n=new r(e,t,i,a);return e.every(m)||n.addError({name:"uniqueItems",message:"contains duplicate item"}),n}},validators.dependencies=function(e,t,i,a){if(this.types.object(e)){var n=new r(e,t,i,a);for(var o in t.dependencies)if(void 0!==e[o]){var s=t.dependencies[o],m=a.makeChild(s,o);if("string"==typeof s&&(s=[s]),Array.isArray(s))s.forEach((function(r){void 0===e[r]&&n.addError({name:"dependencies",argument:m.propertyPath,message:"property "+r+" not found, required by "+m.propertyPath})}));else{var u=this.validateSchema(e,s,i,m);n.instance!==u.instance&&(n.instance=u.instance),u&&u.errors.length&&(n.addError({name:"dependencies",argument:m.propertyPath,message:"does not meet dependency required by "+m.propertyPath}),n.importErrors(u))}}return n}},validators.enum=function(i,a,n,o){if(void 0===i)return null;if(!Array.isArray(a.enum))throw new t("enum expects an array",a);var s=new r(i,a,n,o);return a.enum.some(e.deepCompareStrict.bind(null,i))||s.addError({name:"enum",argument:a.enum,message:"is not one of enum values: "+a.enum.map(String).join(",")}),s},validators.const=function(t,i,a,n){if(void 0===t)return null;var o=new r(t,i,a,n);return e.deepCompareStrict(i.const,t)||o.addError({name:"const",argument:i.const,message:"does not exactly match expected constant: "+i.const}),o},validators.not=validators.disallow=function(e,t,i,a){var n=this;if(void 0===e)return null;var o=new r(e,t,i,a),s=t.not||t.disallow;return s?(Array.isArray(s)||(s=[s]),s.forEach((function(r){if(n.testType(e,t,i,a,r)){var s=r&&(r.$id||r.id)||r;o.addError({name:"not",argument:s,message:"is of prohibited type "+s})}})),o):null};export default i;