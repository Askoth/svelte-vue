(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.svelte = {})));
}(this, (function (exports) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}











function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

















function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

// Reserved word lists for various dialects of the language

var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};

// And the keywords

var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

var keywords = {
  5: ecma5AndLessKeywords,
  6: ecma5AndLessKeywords + " const class extends export import super"
};

var keywordRelationalOperator = /^in(stanceof)?$/;

// ## Character categories

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `bin/generate-identifier-regex.js`.

var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312e\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fea\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ae\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab65\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d4-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

// These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by bin/generate-identifier-regex.js

// eslint-disable-next-line comma-spacing
var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,257,0,11,39,8,0,22,0,12,39,3,3,55,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,698,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,1,31,6124,20,754,9486,286,82,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541];

// eslint-disable-next-line comma-spacing
var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,280,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,19719,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239];

// This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.
function isInAstralSet(code, set) {
  var pos = 0x10000;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) { return false }
    pos += set[i + 1];
    if (pos >= code) { return true }
  }
}

// Test whether a given character code starts an identifier.

function isIdentifierStart(code, astral) {
  if (code < 65) { return code === 36 }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes)
}

// Test whether a given character is part of an identifier.

function isIdentifierChar(code, astral) {
  if (code < 48) { return code === 36 }
  if (code < 58) { return true }
  if (code < 65) { return false }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
}

// ## Token types

// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.

// All token type variables start with an underscore, to make them
// easy to recognize.

// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// The `startsExpr` property is used to check if the token ends a
// `yield` expression. It is set on all token types that either can
// directly start an expression (like a quotation mark) or can
// continue an expression (like the body of a string).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.

var TokenType = function TokenType(label, conf) {
  if ( conf === void 0 ) conf = {};

  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};

function binop(name, prec) {
  return new TokenType(name, {beforeExpr: true, binop: prec})
}
var beforeExpr = {beforeExpr: true};
var startsExpr = {startsExpr: true};

// Map keyword names to token types.

var keywords$1 = {};

// Succinct definitions of keyword token types
function kw(name, options) {
  if ( options === void 0 ) options = {};

  options.keyword = name;
  return keywords$1[name] = new TokenType(name, options)
}

var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),

  // Punctuation token types.
  bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
  assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
  incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
  prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", {beforeExpr: true}),

  // Keyword token types.
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", {isLoop: true, beforeExpr: true}),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", {isLoop: true}),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", {isLoop: true}),
  _with: kw("with"),
  _new: kw("new", {beforeExpr: true, startsExpr: true}),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import"),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", {beforeExpr: true, binop: 7}),
  _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
  _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
  _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
  _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
};

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");

function isNewLine(code) {
  return code === 10 || code === 13 || code === 0x2028 || code === 0x2029
}

var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;

// Checks if an object has a property.

function has(obj, propName) {
  return hasOwnProperty.call(obj, propName)
}

var isArray = Array.isArray || (function (obj) { return (
  toString.call(obj) === "[object Array]"
); });

// These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.

var Position = function Position(line, col) {
  this.line = line;
  this.column = col;
};

Position.prototype.offset = function offset (n) {
  return new Position(this.line, this.column + n)
};

var SourceLocation = function SourceLocation(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) { this.source = p.sourceFile; }
};

// The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.

function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;;) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset - cur)
    }
  }
}

// A second optional argument can be given to further configure
// the parser process. These options are recognized:

var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must
  // be either 3, 5, 6 (2015), 7 (2016), or 8 (2017). This influences support
  // for strict mode, the set of reserved words, and support for
  // new syntax features. The default is 7.
  ecmaVersion: 7,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // th position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: false,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false,
  plugins: {}
};

// Interpret and default an options object

function getOptions(opts) {
  var options = {};

  for (var opt in defaultOptions)
    { options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt]; }

  if (options.ecmaVersion >= 2015)
    { options.ecmaVersion -= 2009; }

  if (options.allowReserved == null)
    { options.allowReserved = options.ecmaVersion < 5; }

  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function (token) { return tokens.push(token); };
  }
  if (isArray(options.onComment))
    { options.onComment = pushComment(options, options.onComment); }

  return options
}

function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start: start,
      end: end
    };
    if (options.locations)
      { comment.loc = new SourceLocation(this, startLoc, endLoc); }
    if (options.ranges)
      { comment.range = [start, end]; }
    array.push(comment);
  }
}

// Registered plugins
var plugins = {};

function keywordRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
}

var Parser$1 = function Parser(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = keywordRegexp(keywords[options.ecmaVersion >= 6 ? 6 : 5]);
  var reserved = "";
  if (!options.allowReserved) {
    for (var v = options.ecmaVersion;; v--)
      { if (reserved = reservedWords[v]) { break } }
    if (options.sourceType == "module") { reserved += " await"; }
  }
  this.reservedWords = keywordRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = keywordRegexp(reservedStrict);
  this.reservedWordsStrictBind = keywordRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);

  // Used to signal to callers of `readWord1` whether the word
  // contained any escape sequences. This is needed because words with
  // escape sequences must not be interpreted as keywords.
  this.containsEsc = false;

  // Load plugins
  this.loadPlugins(options.plugins);

  // Set up token state

  // The current position of the tokenizer in the input.
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }

  // Properties of the current token:
  // Its type
  this.type = types.eof;
  // For tokens that include more information than their type, the value
  this.value = null;
  // Its start and end offset
  this.start = this.end = this.pos;
  // And, if locations are used, the {line, column} object
  // corresponding to those offsets
  this.startLoc = this.endLoc = this.curPosition();

  // Position information for the previous token
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;

  // The context stack is used to superficially track syntactic
  // context to predict whether a regular expression is allowed in a
  // given position.
  this.context = this.initialContext();
  this.exprAllowed = true;

  // Figure out if it's a module code.
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);

  // Used to signify the start of a potential arrow function
  this.potentialArrowAt = -1;

  // Flags to track whether we are in a function, a generator, an async function.
  this.inFunction = this.inGenerator = this.inAsync = false;
  // Positions to delayed-check that yield/await does not exist in default parameters.
  this.yieldPos = this.awaitPos = 0;
  // Labels in scope.
  this.labels = [];

  // If enabled, skip leading hashbang line.
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
    { this.skipLineComment(2); }

  // Scope tracking for duplicate variable names (see scope.js)
  this.scopeStack = [];
  this.enterFunctionScope();

  // For RegExp validation
  this.regexpState = null;
};

// DEPRECATED Kept for backwards compatibility until 3.0 in case a plugin uses them
Parser$1.prototype.isKeyword = function isKeyword (word) { return this.keywords.test(word) };
Parser$1.prototype.isReservedWord = function isReservedWord (word) { return this.reservedWords.test(word) };

Parser$1.prototype.extend = function extend (name, f) {
  this[name] = f(this[name]);
};

Parser$1.prototype.loadPlugins = function loadPlugins (pluginConfigs) {
    var this$1 = this;

  for (var name in pluginConfigs) {
    var plugin = plugins[name];
    if (!plugin) { throw new Error("Plugin '" + name + "' not found") }
    plugin(this$1, pluginConfigs[name]);
  }
};

Parser$1.prototype.parse = function parse () {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node)
};

var pp = Parser$1.prototype;

// ## Parser utilities

var literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;
pp.strictDirective = function(start) {
  var this$1 = this;

  for (;;) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this$1.input)[0].length;
    var match = literal.exec(this$1.input.slice(start));
    if (!match) { return false }
    if ((match[1] || match[2]) == "use strict") { return true }
    start += match[0].length;
  }
};

// Predicate that tests whether the next token is of the given
// type, and if yes, consumes it as a side effect.

pp.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true
  } else {
    return false
  }
};

// Tests whether parsed token is a contextual keyword.

pp.isContextual = function(name) {
  return this.type === types.name && this.value === name && !this.containsEsc
};

// Consumes contextual keyword if possible.

pp.eatContextual = function(name) {
  if (!this.isContextual(name)) { return false }
  this.next();
  return true
};

// Asserts that following token is given contextual keyword.

pp.expectContextual = function(name) {
  if (!this.eatContextual(name)) { this.unexpected(); }
};

// Test whether a semicolon can be inserted at the current position.

pp.canInsertSemicolon = function() {
  return this.type === types.eof ||
    this.type === types.braceR ||
    lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon)
      { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
    return true
  }
};

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.

pp.semicolon = function() {
  if (!this.eat(types.semi) && !this.insertSemicolon()) { this.unexpected(); }
};

pp.afterTrailingComma = function(tokType, notNext) {
  if (this.type == tokType) {
    if (this.options.onTrailingComma)
      { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
    if (!notNext)
      { this.next(); }
    return true
  }
};

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error.

pp.expect = function(type) {
  this.eat(type) || this.unexpected();
};

// Raise an unexpected token error.

pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};

function DestructuringErrors() {
  this.shorthandAssign =
  this.trailingComma =
  this.parenthesizedAssign =
  this.parenthesizedBind =
  this.doubleProto =
    -1;
}

pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) { return }
  if (refDestructuringErrors.trailingComma > -1)
    { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) { this.raiseRecoverable(parens, "Parenthesized pattern"); }
};

pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) { return false }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
  if (shorthandAssign >= 0)
    { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
  if (doubleProto >= 0)
    { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
};

pp.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
    { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
  if (this.awaitPos)
    { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
};

pp.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression")
    { return this.isSimpleAssignTarget(expr.expression) }
  return expr.type === "Identifier" || expr.type === "MemberExpression"
};

var pp$1 = Parser$1.prototype;

// ### Statement parsing

// Parse a program. Initializes the parser, reads any number of
// statements, and wraps them in a Program node.  Optionally takes a
// `program` argument.  If present, the statements will be appended
// to its body instead of creating a new node.

pp$1.parseTopLevel = function(node) {
  var this$1 = this;

  var exports = {};
  if (!node.body) { node.body = []; }
  while (this.type !== types.eof) {
    var stmt = this$1.parseStatement(true, true, exports);
    node.body.push(stmt);
  }
  this.adaptDirectivePrologue(node.body);
  this.next();
  if (this.options.ecmaVersion >= 6) {
    node.sourceType = this.options.sourceType;
  }
  return this.finishNode(node, "Program")
};

var loopLabel = {kind: "loop"};
var switchLabel = {kind: "switch"};

pp$1.isLet = function() {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  if (nextCh === 91 || nextCh == 123) { return true } // '{' and '['
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(this.input.charCodeAt(pos), true)) { ++pos; }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) { return true }
  }
  return false
};

// check 'async [no LineTerminator here] function'
// - 'async /*foo*/ function' is OK.
// - 'async /*\n*/ function' is invalid.
pp$1.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    { return false }

  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length;
  return !lineBreak.test(this.input.slice(this.pos, next)) &&
    this.input.slice(next, next + 8) === "function" &&
    (next + 8 == this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
};

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

pp$1.parseStatement = function(declaration, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;

  if (this.isLet()) {
    starttype = types._var;
    kind = "let";
  }

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
  case types._break: case types._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
  case types._debugger: return this.parseDebuggerStatement(node)
  case types._do: return this.parseDoStatement(node)
  case types._for: return this.parseForStatement(node)
  case types._function:
    if (!declaration && this.options.ecmaVersion >= 6) { this.unexpected(); }
    return this.parseFunctionStatement(node, false)
  case types._class:
    if (!declaration) { this.unexpected(); }
    return this.parseClass(node, true)
  case types._if: return this.parseIfStatement(node)
  case types._return: return this.parseReturnStatement(node)
  case types._switch: return this.parseSwitchStatement(node)
  case types._throw: return this.parseThrowStatement(node)
  case types._try: return this.parseTryStatement(node)
  case types._const: case types._var:
    kind = kind || this.value;
    if (!declaration && kind != "var") { this.unexpected(); }
    return this.parseVarStatement(node, kind)
  case types._while: return this.parseWhileStatement(node)
  case types._with: return this.parseWithStatement(node)
  case types.braceL: return this.parseBlock()
  case types.semi: return this.parseEmptyStatement(node)
  case types._export:
  case types._import:
    if (!this.options.allowImportExportEverywhere) {
      if (!topLevel)
        { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
      if (!this.inModule)
        { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
    }
    return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports)

    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
  default:
    if (this.isAsyncFunction()) {
      if (!declaration) { this.unexpected(); }
      this.next();
      return this.parseFunctionStatement(node, true)
    }

    var maybeName = this.value, expr = this.parseExpression();
    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon))
      { return this.parseLabeledStatement(node, maybeName, expr) }
    else { return this.parseExpressionStatement(node, expr) }
  }
};

pp$1.parseBreakContinueStatement = function(node, keyword) {
  var this$1 = this;

  var isBreak = keyword == "break";
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) { node.label = null; }
  else if (this.type !== types.name) { this.unexpected(); }
  else {
    node.label = this.parseIdent();
    this.semicolon();
  }

  // Verify that there is an actual destination to break or
  // continue to.
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this$1.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
      if (node.label && isBreak) { break }
    }
  }
  if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
};

pp$1.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement")
};

pp$1.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement(false);
  this.labels.pop();
  this.expect(types._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6)
    { this.eat(types.semi); }
  else
    { this.semicolon(); }
  return this.finishNode(node, "DoWhileStatement")
};

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.

pp$1.parseForStatement = function(node) {
  this.next();
  var awaitAt = (this.options.ecmaVersion >= 9 && this.inAsync && this.eatContextual("await")) ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterLexicalScope();
  this.expect(types.parenL);
  if (this.type === types.semi) {
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, null)
  }
  var isLet = this.isLet();
  if (this.type === types._var || this.type === types._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1 &&
        !(kind !== "var" && init$1.declarations[0].init)) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) { this.unexpected(awaitAt); }
        } else { node.await = awaitAt > -1; }
      }
      return this.parseForIn(node, init$1)
    }
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, init$1)
  }
  var refDestructuringErrors = new DestructuringErrors;
  var init = this.parseExpression(true, refDestructuringErrors);
  if (this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types._in) {
        if (awaitAt > -1) { this.unexpected(awaitAt); }
      } else { node.await = awaitAt > -1; }
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLVal(init);
    return this.parseForIn(node, init)
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) { this.unexpected(awaitAt); }
  return this.parseFor(node, init)
};

pp$1.parseFunctionStatement = function(node, isAsync) {
  this.next();
  return this.parseFunction(node, true, false, isAsync)
};

pp$1.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  // allow function declarations in branches, but only in non-strict mode
  node.consequent = this.parseStatement(!this.strict && this.type == types._function);
  node.alternate = this.eat(types._else) ? this.parseStatement(!this.strict && this.type == types._function) : null;
  return this.finishNode(node, "IfStatement")
};

pp$1.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction)
    { this.raise(this.start, "'return' outside of function"); }
  this.next();

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (this.eat(types.semi) || this.insertSemicolon()) { node.argument = null; }
  else { node.argument = this.parseExpression(); this.semicolon(); }
  return this.finishNode(node, "ReturnStatement")
};

pp$1.parseSwitchStatement = function(node) {
  var this$1 = this;

  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types.braceL);
  this.labels.push(switchLabel);
  this.enterLexicalScope();

  // Statements under must be grouped (by label) in SwitchCase
  // nodes. `cur` is used to keep the node that we are currently
  // adding statements to.

  var cur;
  for (var sawDefault = false; this.type != types.braceR;) {
    if (this$1.type === types._case || this$1.type === types._default) {
      var isCase = this$1.type === types._case;
      if (cur) { this$1.finishNode(cur, "SwitchCase"); }
      node.cases.push(cur = this$1.startNode());
      cur.consequent = [];
      this$1.next();
      if (isCase) {
        cur.test = this$1.parseExpression();
      } else {
        if (sawDefault) { this$1.raiseRecoverable(this$1.lastTokStart, "Multiple default clauses"); }
        sawDefault = true;
        cur.test = null;
      }
      this$1.expect(types.colon);
    } else {
      if (!cur) { this$1.unexpected(); }
      cur.consequent.push(this$1.parseStatement(true));
    }
  }
  this.exitLexicalScope();
  if (cur) { this.finishNode(cur, "SwitchCase"); }
  this.next(); // Closing brace
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement")
};

pp$1.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
    { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement")
};

// Reused empty array added for node fields that are always empty.

var empty = [];

pp$1.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types._catch) {
    var clause = this.startNode();
    this.next();
    this.expect(types.parenL);
    clause.param = this.parseBindingAtom();
    this.enterLexicalScope();
    this.checkLVal(clause.param, "let");
    this.expect(types.parenR);
    clause.body = this.parseBlock(false);
    this.exitLexicalScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer)
    { this.raise(node.start, "Missing catch or finally clause"); }
  return this.finishNode(node, "TryStatement")
};

pp$1.parseVarStatement = function(node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration")
};

pp$1.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement(false);
  this.labels.pop();
  return this.finishNode(node, "WhileStatement")
};

pp$1.parseWithStatement = function(node) {
  if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement(false);
  return this.finishNode(node, "WithStatement")
};

pp$1.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement")
};

pp$1.parseLabeledStatement = function(node, maybeName, expr) {
  var this$1 = this;

  for (var i$1 = 0, list = this$1.labels; i$1 < list.length; i$1 += 1)
    {
    var label = list[i$1];

    if (label.name === maybeName)
      { this$1.raise(expr.start, "Label '" + maybeName + "' is already declared");
  } }
  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this$1.labels[i];
    if (label$1.statementStart == node.start) {
      // Update information about previous labels on this node
      label$1.statementStart = this$1.start;
      label$1.kind = kind;
    } else { break }
  }
  this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
  node.body = this.parseStatement(true);
  if (node.body.type == "ClassDeclaration" ||
      node.body.type == "VariableDeclaration" && node.body.kind != "var" ||
      node.body.type == "FunctionDeclaration" && (this.strict || node.body.generator))
    { this.raiseRecoverable(node.body.start, "Invalid labeled declaration"); }
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement")
};

pp$1.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement")
};

// Parse a semicolon-enclosed block of statements, handling `"use
// strict"` declarations when `allowStrict` is true (used for
// function bodies).

pp$1.parseBlock = function(createNewLexicalScope) {
  var this$1 = this;
  if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;

  var node = this.startNode();
  node.body = [];
  this.expect(types.braceL);
  if (createNewLexicalScope) {
    this.enterLexicalScope();
  }
  while (!this.eat(types.braceR)) {
    var stmt = this$1.parseStatement(true);
    node.body.push(stmt);
  }
  if (createNewLexicalScope) {
    this.exitLexicalScope();
  }
  return this.finishNode(node, "BlockStatement")
};

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

pp$1.parseFor = function(node, init) {
  node.init = init;
  this.expect(types.semi);
  node.test = this.type === types.semi ? null : this.parseExpression();
  this.expect(types.semi);
  node.update = this.type === types.parenR ? null : this.parseExpression();
  this.expect(types.parenR);
  this.exitLexicalScope();
  node.body = this.parseStatement(false);
  this.labels.pop();
  return this.finishNode(node, "ForStatement")
};

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

pp$1.parseForIn = function(node, init) {
  var type = this.type === types._in ? "ForInStatement" : "ForOfStatement";
  this.next();
  if (type == "ForInStatement") {
    if (init.type === "AssignmentPattern" ||
      (init.type === "VariableDeclaration" && init.declarations[0].init != null &&
       (this.strict || init.declarations[0].id.type !== "Identifier")))
      { this.raise(init.start, "Invalid assignment in for-in loop head"); }
  }
  node.left = init;
  node.right = type == "ForInStatement" ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types.parenR);
  this.exitLexicalScope();
  node.body = this.parseStatement(false);
  this.labels.pop();
  return this.finishNode(node, type)
};

// Parse a list of variable declarations.

pp$1.parseVar = function(node, isFor, kind) {
  var this$1 = this;

  node.declarations = [];
  node.kind = kind;
  for (;;) {
    var decl = this$1.startNode();
    this$1.parseVarId(decl, kind);
    if (this$1.eat(types.eq)) {
      decl.init = this$1.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this$1.type === types._in || (this$1.options.ecmaVersion >= 6 && this$1.isContextual("of")))) {
      this$1.unexpected();
    } else if (decl.id.type != "Identifier" && !(isFor && (this$1.type === types._in || this$1.isContextual("of")))) {
      this$1.raise(this$1.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this$1.finishNode(decl, "VariableDeclarator"));
    if (!this$1.eat(types.comma)) { break }
  }
  return node
};

pp$1.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom(kind);
  this.checkLVal(decl.id, kind, false);
};

// Parse a function declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseFunction = function(node, isStatement, allowExpressionBody, isAsync) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync)
    { node.generator = this.eat(types.star); }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  if (isStatement) {
    node.id = isStatement === "nullableID" && this.type != types.name ? null : this.parseIdent();
    if (node.id) {
      this.checkLVal(node.id, "var");
    }
  }

  var oldInGen = this.inGenerator, oldInAsync = this.inAsync,
      oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction;
  this.inGenerator = node.generator;
  this.inAsync = node.async;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.inFunction = true;
  this.enterFunctionScope();

  if (!isStatement)
    { node.id = this.type == types.name ? this.parseIdent() : null; }

  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody);

  this.inGenerator = oldInGen;
  this.inAsync = oldInAsync;
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.inFunction = oldInFunc;
  return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression")
};

pp$1.parseFunctionParams = function(node) {
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseClass = function(node, isStatement) {
  var this$1 = this;

  this.next();

  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    var member = this$1.parseClassMember(classBody);
    if (member && member.type === "MethodDefinition" && member.kind === "constructor") {
      if (hadConstructor) { this$1.raise(member.start, "Duplicate constructor in the same class"); }
      hadConstructor = true;
    }
  }
  node.body = this.finishNode(classBody, "ClassBody");
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
};

pp$1.parseClassMember = function(classBody) {
  var this$1 = this;

  if (this.eat(types.semi)) { return null }

  var method = this.startNode();
  var tryContextual = function (k, noLineBreak) {
    if ( noLineBreak === void 0 ) noLineBreak = false;

    var start = this$1.start, startLoc = this$1.startLoc;
    if (!this$1.eatContextual(k)) { return false }
    if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) { return true }
    if (method.key) { this$1.unexpected(); }
    method.computed = false;
    method.key = this$1.startNodeAt(start, startLoc);
    method.key.name = k;
    this$1.finishNode(method.key, "Identifier");
    return false
  };

  method.kind = "method";
  method.static = tryContextual("static");
  var isGenerator = this.eat(types.star);
  var isAsync = false;
  if (!isGenerator) {
    if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    } else if (tryContextual("get")) {
      method.kind = "get";
    } else if (tryContextual("set")) {
      method.kind = "set";
    }
  }
  if (!method.key) { this.parsePropertyName(method); }
  var key = method.key;
  if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" ||
      key.type === "Literal" && key.value === "constructor")) {
    if (method.kind !== "method") { this.raise(key.start, "Constructor can't have get/set modifier"); }
    if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
    if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
    method.kind = "constructor";
  } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  this.parseClassMethod(classBody, method, isGenerator, isAsync);
  if (method.kind === "get" && method.value.params.length !== 0)
    { this.raiseRecoverable(method.value.start, "getter should have no params"); }
  if (method.kind === "set" && method.value.params.length !== 1)
    { this.raiseRecoverable(method.value.start, "setter should have exactly one param"); }
  if (method.kind === "set" && method.value.params[0].type === "RestElement")
    { this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params"); }
  return method
};

pp$1.parseClassMethod = function(classBody, method, isGenerator, isAsync) {
  method.value = this.parseMethod(isGenerator, isAsync);
  classBody.body.push(this.finishNode(method, "MethodDefinition"));
};

pp$1.parseClassId = function(node, isStatement) {
  node.id = this.type === types.name ? this.parseIdent() : isStatement === true ? this.unexpected() : null;
};

pp$1.parseClassSuper = function(node) {
  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
};

// Parses module export declaration.

pp$1.parseExport = function(node, exports) {
  var this$1 = this;

  this.next();
  // export * from '...'
  if (this.eat(types.star)) {
    this.expectContextual("from");
    if (this.type !== types.string) { this.unexpected(); }
    node.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration")
  }
  if (this.eat(types._default)) { // export default ...
    this.checkExport(exports, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) { this.next(); }
      node.declaration = this.parseFunction(fNode, "nullableID", false, isAsync);
    } else if (this.type === types._class) {
      var cNode = this.startNode();
      node.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration")
  }
  // export var|const|let|function|class ...
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(true);
    if (node.declaration.type === "VariableDeclaration")
      { this.checkVariableExport(exports, node.declaration.declarations); }
    else
      { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
    node.specifiers = [];
    node.source = null;
  } else { // export { x, y as z } [from '...']
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types.string) { this.unexpected(); }
      node.source = this.parseExprAtom();
    } else {
      // check for keywords used as local names
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        var spec = list[i];

        this$1.checkUnreserved(spec.local);
      }

      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration")
};

pp$1.checkExport = function(exports, name, pos) {
  if (!exports) { return }
  if (has(exports, name))
    { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
  exports[name] = true;
};

pp$1.checkPatternExport = function(exports, pat) {
  var this$1 = this;

  var type = pat.type;
  if (type == "Identifier")
    { this.checkExport(exports, pat.name, pat.start); }
  else if (type == "ObjectPattern")
    { for (var i = 0, list = pat.properties; i < list.length; i += 1)
      {
        var prop = list[i];

        this$1.checkPatternExport(exports, prop);
      } }
  else if (type == "ArrayPattern")
    { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];

        if (elt) { this$1.checkPatternExport(exports, elt); }
    } }
  else if (type == "Property")
    { this.checkPatternExport(exports, pat.value); }
  else if (type == "AssignmentPattern")
    { this.checkPatternExport(exports, pat.left); }
  else if (type == "RestElement")
    { this.checkPatternExport(exports, pat.argument); }
  else if (type == "ParenthesizedExpression")
    { this.checkPatternExport(exports, pat.expression); }
};

pp$1.checkVariableExport = function(exports, decls) {
  var this$1 = this;

  if (!exports) { return }
  for (var i = 0, list = decls; i < list.length; i += 1)
    {
    var decl = list[i];

    this$1.checkPatternExport(exports, decl.id);
  }
};

pp$1.shouldParseExportStatement = function() {
  return this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
};

// Parses a comma-separated list of module exports.

pp$1.parseExportSpecifiers = function(exports) {
  var this$1 = this;

  var nodes = [], first = true;
  // export { x, y as z } [from '...']
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this$1.expect(types.comma);
      if (this$1.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node = this$1.startNode();
    node.local = this$1.parseIdent(true);
    node.exported = this$1.eatContextual("as") ? this$1.parseIdent(true) : node.local;
    this$1.checkExport(exports, node.exported.name, node.exported.start);
    nodes.push(this$1.finishNode(node, "ExportSpecifier"));
  }
  return nodes
};

// Parses import declaration.

pp$1.parseImport = function(node) {
  this.next();
  // import '...'
  if (this.type === types.string) {
    node.specifiers = empty;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration")
};

// Parses a comma-separated list of module imports.

pp$1.parseImportSpecifiers = function() {
  var this$1 = this;

  var nodes = [], first = true;
  if (this.type === types.name) {
    // import defaultObj, { x, y as z } from '...'
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLVal(node.local, "let");
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(types.comma)) { return nodes }
  }
  if (this.type === types.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLVal(node$1.local, "let");
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes
  }
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this$1.expect(types.comma);
      if (this$1.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node$2 = this$1.startNode();
    node$2.imported = this$1.parseIdent(true);
    if (this$1.eatContextual("as")) {
      node$2.local = this$1.parseIdent();
    } else {
      this$1.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this$1.checkLVal(node$2.local, "let");
    nodes.push(this$1.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes
};

// Set `ExpressionStatement#directive` property for directive prologues.
pp$1.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$1.isDirectiveCandidate = function(statement) {
  return (
    statement.type === "ExpressionStatement" &&
    statement.expression.type === "Literal" &&
    typeof statement.expression.value === "string" &&
    // Reject parenthesized strings.
    (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
  )
};

var pp$2 = Parser$1.prototype;

// Convert existing expression atom to assignable pattern
// if possible.

pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
  var this$1 = this;

  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
    case "Identifier":
      if (this.inAsync && node.name === "await")
        { this.raise(node.start, "Can not use 'await' as identifier inside an async function"); }
      break

    case "ObjectPattern":
    case "ArrayPattern":
    case "RestElement":
      break

    case "ObjectExpression":
      node.type = "ObjectPattern";
      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
      for (var i = 0, list = node.properties; i < list.length; i += 1) {
        var prop = list[i];

      this$1.toAssignable(prop, isBinding);
        // Early error:
        //   AssignmentRestProperty[Yield, Await] :
        //     `...` DestructuringAssignmentTarget[Yield, Await]
        //
        //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
        if (
          prop.type === "RestElement" &&
          (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
        ) {
          this$1.raise(prop.argument.start, "Unexpected token");
        }
      }
      break

    case "Property":
      // AssignmentProperty has type == "Property"
      if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
      this.toAssignable(node.value, isBinding);
      break

    case "ArrayExpression":
      node.type = "ArrayPattern";
      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
      this.toAssignableList(node.elements, isBinding);
      break

    case "SpreadElement":
      node.type = "RestElement";
      this.toAssignable(node.argument, isBinding);
      if (node.argument.type === "AssignmentPattern")
        { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
      break

    case "AssignmentExpression":
      if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
      node.type = "AssignmentPattern";
      delete node.operator;
      this.toAssignable(node.left, isBinding);
      // falls through to AssignmentPattern

    case "AssignmentPattern":
      break

    case "ParenthesizedExpression":
      this.toAssignable(node.expression, isBinding);
      break

    case "MemberExpression":
      if (!isBinding) { break }

    default:
      this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
  return node
};

// Convert list of expression atoms to binding list.

pp$2.toAssignableList = function(exprList, isBinding) {
  var this$1 = this;

  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) { this$1.toAssignable(elt, isBinding); }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
      { this.unexpected(last.argument.start); }
  }
  return exprList
};

// Parses spread element.

pp$2.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement")
};

pp$2.parseRestBinding = function() {
  var node = this.startNode();
  this.next();

  // RestElement inside of a function parameter must be an identifier
  if (this.options.ecmaVersion === 6 && this.type !== types.name)
    { this.unexpected(); }

  node.argument = this.parseBindingAtom();

  return this.finishNode(node, "RestElement")
};

// Parses lvalue (assignable) atom.

pp$2.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
    case types.bracketL:
      var node = this.startNode();
      this.next();
      node.elements = this.parseBindingList(types.bracketR, true, true);
      return this.finishNode(node, "ArrayPattern")

    case types.braceL:
      return this.parseObj(true)
    }
  }
  return this.parseIdent()
};

pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var this$1 = this;

  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) { first = false; }
    else { this$1.expect(types.comma); }
    if (allowEmpty && this$1.type === types.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this$1.afterTrailingComma(close)) {
      break
    } else if (this$1.type === types.ellipsis) {
      var rest = this$1.parseRestBinding();
      this$1.parseBindingListItem(rest);
      elts.push(rest);
      if (this$1.type === types.comma) { this$1.raise(this$1.start, "Comma is not permitted after the rest element"); }
      this$1.expect(close);
      break
    } else {
      var elem = this$1.parseMaybeDefault(this$1.start, this$1.startLoc);
      this$1.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts
};

pp$2.parseBindingListItem = function(param) {
  return param
};

// Parses assignment pattern around given atom if possible.

pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) { return left }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern")
};

// Verify that a node is an lval — something that can be assigned
// to.
// bindingType can be either:
// 'var' indicating that the lval creates a 'var' binding
// 'let' indicating that the lval creates a lexical ('let' or 'const') binding
// 'none' indicating that the binding should be checked for illegal identifiers, but not for duplicate references

pp$2.checkLVal = function(expr, bindingType, checkClashes) {
  var this$1 = this;

  switch (expr.type) {
  case "Identifier":
    if (this.strict && this.reservedWordsStrictBind.test(expr.name))
      { this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
    if (checkClashes) {
      if (has(checkClashes, expr.name))
        { this.raiseRecoverable(expr.start, "Argument name clash"); }
      checkClashes[expr.name] = true;
    }
    if (bindingType && bindingType !== "none") {
      if (
        bindingType === "var" && !this.canDeclareVarName(expr.name) ||
        bindingType !== "var" && !this.canDeclareLexicalName(expr.name)
      ) {
        this.raiseRecoverable(expr.start, ("Identifier '" + (expr.name) + "' has already been declared"));
      }
      if (bindingType === "var") {
        this.declareVarName(expr.name);
      } else {
        this.declareLexicalName(expr.name);
      }
    }
    break

  case "MemberExpression":
    if (bindingType) { this.raiseRecoverable(expr.start, "Binding member expression"); }
    break

  case "ObjectPattern":
    for (var i = 0, list = expr.properties; i < list.length; i += 1)
      {
    var prop = list[i];

    this$1.checkLVal(prop, bindingType, checkClashes);
  }
    break

  case "Property":
    // AssignmentProperty has type == "Property"
    this.checkLVal(expr.value, bindingType, checkClashes);
    break

  case "ArrayPattern":
    for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
      var elem = list$1[i$1];

    if (elem) { this$1.checkLVal(elem, bindingType, checkClashes); }
    }
    break

  case "AssignmentPattern":
    this.checkLVal(expr.left, bindingType, checkClashes);
    break

  case "RestElement":
    this.checkLVal(expr.argument, bindingType, checkClashes);
    break

  case "ParenthesizedExpression":
    this.checkLVal(expr.expression, bindingType, checkClashes);
    break

  default:
    this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
  }
};

// A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts — that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

var pp$3 = Parser$1.prototype;

// Check if property name clashes with already added.
// Object/class getters and setters are not allowed to clash —
// either with each other or with an init property — and in
// strict mode, init properties are also not allowed to be repeated.

pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
    { return }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
    { return }
  var key = prop.key;
  var name;
  switch (key.type) {
  case "Identifier": name = key.name; break
  case "Literal": name = String(key.value); break
  default: return
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors && refDestructuringErrors.doubleProto < 0) { refDestructuringErrors.doubleProto = key.start; }
        // Backwards-compat kludge. Can be removed in version 6.0
        else { this.raiseRecoverable(key.start, "Redefinition of __proto__ property"); }
      }
      propHash.proto = true;
    }
    return
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition)
      { this.raiseRecoverable(key.start, "Redefinition of property"); }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function(s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.

// Parse a full expression. The optional arguments are used to
// forbid the `in` operator (in for loops initalization expressions)
// and provide reference for storing '=' operator inside shorthand
// property assignment in contexts where both object expression
// and object pattern might appear (so it's possible to raise
// delayed syntax error at correct position).

pp$3.parseExpression = function(noIn, refDestructuringErrors) {
  var this$1 = this;

  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
  if (this.type === types.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types.comma)) { node.expressions.push(this$1.parseMaybeAssign(noIn, refDestructuringErrors)); }
    return this.finishNode(node, "SequenceExpression")
  }
  return expr
};

// Parse an assignment expression. This includes applications of
// operators like `+=`.

pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
  if (this.inGenerator && this.isContextual("yield")) { return this.parseYield() }

  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors;
    ownDestructuringErrors = true;
  }

  var startPos = this.start, startLoc = this.startLoc;
  if (this.type == types.parenL || this.type == types.name)
    { this.potentialArrowAt = this.start; }
  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
  if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
    if (!ownDestructuringErrors) { DestructuringErrors.call(refDestructuringErrors); }
    refDestructuringErrors.shorthandAssign = -1; // reset because shorthand default was used correctly
    this.checkLVal(left);
    this.next();
    node.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "AssignmentExpression")
  } else {
    if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
  }
  if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
  if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
  return left
};

// Parse a ternary conditional (`?:`) operator.

pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(noIn, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  if (this.eat(types.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types.colon);
    node.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "ConditionalExpression")
  }
  return expr
};

// Start the precedence parser.

pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  return expr.start == startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn)
};

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.

pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop;
  if (prec != null && (!noIn || this.type !== types._in)) {
    if (prec > minPrec) {
      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical);
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
    }
  }
  return left
};

pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
};

// Parse unary operators, both prefix and postfix.

pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
  var this$1 = this;

  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.inAsync && this.isContextual("await")) {
    expr = this.parseAwait();
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) { this.checkLVal(node.argument); }
    else if (this.strict && node.operator === "delete" &&
             node.argument.type === "Identifier")
      { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
    else { sawUnary = true; }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this$1.startNodeAt(startPos, startLoc);
      node$1.operator = this$1.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this$1.checkLVal(expr);
      this$1.next();
      expr = this$1.finishNode(node$1, "UpdateExpression");
    }
  }

  if (!sawUnary && this.eat(types.starstar))
    { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false) }
  else
    { return expr }
};

// Parse call, dot, and `[]`-subscript expressions.

pp$3.parseExprSubscripts = function(refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors);
  var skipArrowSubscripts = expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")";
  if (this.checkExpressionErrors(refDestructuringErrors) || skipArrowSubscripts) { return expr }
  var result = this.parseSubscripts(expr, startPos, startLoc);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
    if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
  }
  return result
};

pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
  var this$1 = this;

  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
      this.lastTokEnd == base.end && !this.canInsertSemicolon() && this.input.slice(base.start, base.end) === "async";
  for (var computed = (void 0);;) {
    if ((computed = this$1.eat(types.bracketL)) || this$1.eat(types.dot)) {
      var node = this$1.startNodeAt(startPos, startLoc);
      node.object = base;
      node.property = computed ? this$1.parseExpression() : this$1.parseIdent(true);
      node.computed = !!computed;
      if (computed) { this$1.expect(types.bracketR); }
      base = this$1.finishNode(node, "MemberExpression");
    } else if (!noCalls && this$1.eat(types.parenL)) {
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this$1.yieldPos, oldAwaitPos = this$1.awaitPos;
      this$1.yieldPos = 0;
      this$1.awaitPos = 0;
      var exprList = this$1.parseExprList(types.parenR, this$1.options.ecmaVersion >= 8, false, refDestructuringErrors);
      if (maybeAsyncArrow && !this$1.canInsertSemicolon() && this$1.eat(types.arrow)) {
        this$1.checkPatternErrors(refDestructuringErrors, false);
        this$1.checkYieldAwaitInDefaultParams();
        this$1.yieldPos = oldYieldPos;
        this$1.awaitPos = oldAwaitPos;
        return this$1.parseArrowExpression(this$1.startNodeAt(startPos, startLoc), exprList, true)
      }
      this$1.checkExpressionErrors(refDestructuringErrors, true);
      this$1.yieldPos = oldYieldPos || this$1.yieldPos;
      this$1.awaitPos = oldAwaitPos || this$1.awaitPos;
      var node$1 = this$1.startNodeAt(startPos, startLoc);
      node$1.callee = base;
      node$1.arguments = exprList;
      base = this$1.finishNode(node$1, "CallExpression");
    } else if (this$1.type === types.backQuote) {
      var node$2 = this$1.startNodeAt(startPos, startLoc);
      node$2.tag = base;
      node$2.quasi = this$1.parseTemplate({isTagged: true});
      base = this$1.finishNode(node$2, "TaggedTemplateExpression");
    } else {
      return base
    }
  }
};

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.

pp$3.parseExprAtom = function(refDestructuringErrors) {
  var node, canBeArrow = this.potentialArrowAt == this.start;
  switch (this.type) {
  case types._super:
    if (!this.inFunction)
      { this.raise(this.start, "'super' outside of function or class"); }
    node = this.startNode();
    this.next();
    // The `super` keyword can appear at below:
    // SuperProperty:
    //     super [ Expression ]
    //     super . IdentifierName
    // SuperCall:
    //     super Arguments
    if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL)
      { this.unexpected(); }
    return this.finishNode(node, "Super")

  case types._this:
    node = this.startNode();
    this.next();
    return this.finishNode(node, "ThisExpression")

  case types.name:
    var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
    var id = this.parseIdent(this.type !== types.name);
    if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function))
      { return this.parseFunction(this.startNodeAt(startPos, startLoc), false, false, true) }
    if (canBeArrow && !this.canInsertSemicolon()) {
      if (this.eat(types.arrow))
        { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false) }
      if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
        id = this.parseIdent();
        if (this.canInsertSemicolon() || !this.eat(types.arrow))
          { this.unexpected(); }
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
      }
    }
    return id

  case types.regexp:
    var value = this.value;
    node = this.parseLiteral(value.value);
    node.regex = {pattern: value.pattern, flags: value.flags};
    return node

  case types.num: case types.string:
    return this.parseLiteral(this.value)

  case types._null: case types._true: case types._false:
    node = this.startNode();
    node.value = this.type === types._null ? null : this.type === types._true;
    node.raw = this.type.keyword;
    this.next();
    return this.finishNode(node, "Literal")

  case types.parenL:
    var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
    if (refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
        { refDestructuringErrors.parenthesizedAssign = start; }
      if (refDestructuringErrors.parenthesizedBind < 0)
        { refDestructuringErrors.parenthesizedBind = start; }
    }
    return expr

  case types.bracketL:
    node = this.startNode();
    this.next();
    node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
    return this.finishNode(node, "ArrayExpression")

  case types.braceL:
    return this.parseObj(false, refDestructuringErrors)

  case types._function:
    node = this.startNode();
    this.next();
    return this.parseFunction(node, false)

  case types._class:
    return this.parseClass(this.startNode(), false)

  case types._new:
    return this.parseNew()

  case types.backQuote:
    return this.parseTemplate()

  default:
    this.unexpected();
  }
};

pp$3.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  this.next();
  return this.finishNode(node, "Literal")
};

pp$3.parseParenExpression = function() {
  this.expect(types.parenL);
  var val = this.parseExpression();
  this.expect(types.parenR);
  return val
};

pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
  var this$1 = this;

  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();

    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types.parenR) {
      first ? first = false : this$1.expect(types.comma);
      if (allowTrailingComma && this$1.afterTrailingComma(types.parenR, true)) {
        lastIsComma = true;
        break
      } else if (this$1.type === types.ellipsis) {
        spreadStart = this$1.start;
        exprList.push(this$1.parseParenItem(this$1.parseRestBinding()));
        if (this$1.type === types.comma) { this$1.raise(this$1.start, "Comma is not permitted after the rest element"); }
        break
      } else {
        exprList.push(this$1.parseMaybeAssign(false, refDestructuringErrors, this$1.parseParenItem));
      }
    }
    var innerEndPos = this.start, innerEndLoc = this.startLoc;
    this.expect(types.parenR);

    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList)
    }

    if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
    if (spreadStart) { this.unexpected(spreadStart); }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }

  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression")
  } else {
    return val
  }
};

pp$3.parseParenItem = function(item) {
  return item
};

pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
};

// New's precedence is slightly tricky. It must allow its argument to
// be a `[]` or dot subscript expression, but not a call — at least,
// not without wrapping it in parentheses. Thus, it uses the noCalls
// argument to parseSubscripts to prevent it from consuming the
// argument list.

var empty$1 = [];

pp$3.parseNew = function() {
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
    node.meta = meta;
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target" || containsEsc)
      { this.raiseRecoverable(node.property.start, "The only valid meta property for new is new.target"); }
    if (!this.inFunction)
      { this.raiseRecoverable(node.start, "new.target can only be used in functions"); }
    return this.finishNode(node, "MetaProperty")
  }
  var startPos = this.start, startLoc = this.startLoc;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  if (this.eat(types.parenL)) { node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false); }
  else { node.arguments = empty$1; }
  return this.finishNode(node, "NewExpression")
};

// Parse template expression.

pp$3.parseTemplateElement = function(ref) {
  var isTagged = ref.isTagged;

  var elem = this.startNode();
  if (this.type === types.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types.backQuote;
  return this.finishNode(elem, "TemplateElement")
};

pp$3.parseTemplate = function(ref) {
  var this$1 = this;
  if ( ref === void 0 ) ref = {};
  var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({isTagged: isTagged});
  node.quasis = [curElt];
  while (!curElt.tail) {
    this$1.expect(types.dollarBraceL);
    node.expressions.push(this$1.parseExpression());
    this$1.expect(types.braceR);
    node.quasis.push(curElt = this$1.parseTemplateElement({isTagged: isTagged}));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral")
};

pp$3.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
    (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types.star)) &&
    !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

// Parse an object literal or binding pattern.

pp$3.parseObj = function(isPattern, refDestructuringErrors) {
  var this$1 = this;

  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types.braceR)) {
    if (!first) {
      this$1.expect(types.comma);
      if (this$1.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var prop = this$1.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) { this$1.checkPropClash(prop, propHash, refDestructuringErrors); }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
};

pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement")
    }
    // To disallow parenthesized identifier via `this.toAssignable()`.
    if (this.type === types.parenL && refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0) {
        refDestructuringErrors.parenthesizedAssign = this.start;
      }
      if (refDestructuringErrors.parenthesizedBind < 0) {
        refDestructuringErrors.parenthesizedBind = this.start;
      }
    }
    // Parse argument.
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    // To disallow trailing comma via `this.toAssignable()`.
    if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    // Finish
    return this.finishNode(prop, "SpreadElement")
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern)
      { isGenerator = this.eat(types.star); }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property")
};

pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types.colon)
    { this.unexpected(); }

  if (this.eat(types.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
    if (isPattern) { this.unexpected(); }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc &&
             this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
             (prop.key.name === "get" || prop.key.name === "set") &&
             (this.type != types.comma && this.type != types.braceR)) {
    if (isGenerator || isAsync) { this.unexpected(); }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get")
        { this.raiseRecoverable(start, "getter should have no params"); }
      else
        { this.raiseRecoverable(start, "setter should have exactly one param"); }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
        { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    this.checkUnreserved(prop.key);
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else if (this.type === types.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0)
        { refDestructuringErrors.shorthandAssign = this.start; }
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else {
      prop.value = prop.key;
    }
    prop.shorthand = true;
  } else { this.unexpected(); }
};

pp$3.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
      return prop.key
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(true)
};

// Initialize empty function node.

pp$3.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = false;
    node.expression = false;
  }
  if (this.options.ecmaVersion >= 8)
    { node.async = false; }
};

// Parse object or class method.

pp$3.parseMethod = function(isGenerator, isAsync) {
  var node = this.startNode(), oldInGen = this.inGenerator, oldInAsync = this.inAsync,
      oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction;

  this.initFunction(node);
  if (this.options.ecmaVersion >= 6)
    { node.generator = isGenerator; }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  this.inGenerator = node.generator;
  this.inAsync = node.async;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.inFunction = true;
  this.enterFunctionScope();

  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false);

  this.inGenerator = oldInGen;
  this.inAsync = oldInAsync;
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.inFunction = oldInFunc;
  return this.finishNode(node, "FunctionExpression")
};

// Parse arrow function expression with given parameters.

pp$3.parseArrowExpression = function(node, params, isAsync) {
  var oldInGen = this.inGenerator, oldInAsync = this.inAsync,
      oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction;

  this.enterFunctionScope();
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  this.inGenerator = false;
  this.inAsync = node.async;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.inFunction = true;

  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true);

  this.inGenerator = oldInGen;
  this.inAsync = oldInAsync;
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.inFunction = oldInFunc;
  return this.finishNode(node, "ArrowFunctionExpression")
};

// Parse function body and check parameters.

pp$3.parseFunctionBody = function(node, isArrowFunction) {
  var isExpression = isArrowFunction && this.type !== types.braceL;
  var oldStrict = this.strict, useStrict = false;

  if (isExpression) {
    node.body = this.parseMaybeAssign();
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      // If this is a strict mode function, verify that argument names
      // are not repeated, and it does not try to bind the words `eval`
      // or `arguments`.
      if (useStrict && nonSimple)
        { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
    }
    // Start a new scope with regard to labels and the `inFunction`
    // flag (restore them to their old value afterwards).
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) { this.strict = true; }

    // Add the params to varDeclaredNames to ensure that an error is thrown
    // if a let/const declaration in the function clashes with one of the params.
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && this.isSimpleParamList(node.params));
    node.body = this.parseBlock(false);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitFunctionScope();

  if (this.strict && node.id) {
    // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
    this.checkLVal(node.id, "none");
  }
  this.strict = oldStrict;
};

pp$3.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1)
    {
    var param = list[i];

    if (param.type !== "Identifier") { return false
  } }
  return true
};

// Checks function params for various disallowed patterns such as using "eval"
// or "arguments" and duplicate parameters.

pp$3.checkParams = function(node, allowDuplicates) {
  var this$1 = this;

  var nameHash = {};
  for (var i = 0, list = node.params; i < list.length; i += 1)
    {
    var param = list[i];

    this$1.checkLVal(param, "var", allowDuplicates ? null : nameHash);
  }
};

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var this$1 = this;

  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this$1.expect(types.comma);
      if (allowTrailingComma && this$1.afterTrailingComma(close)) { break }
    } else { first = false; }

    var elt = (void 0);
    if (allowEmpty && this$1.type === types.comma)
      { elt = null; }
    else if (this$1.type === types.ellipsis) {
      elt = this$1.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this$1.type === types.comma && refDestructuringErrors.trailingComma < 0)
        { refDestructuringErrors.trailingComma = this$1.start; }
    } else {
      elt = this$1.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts
};

pp$3.checkUnreserved = function(ref) {
  var start = ref.start;
  var end = ref.end;
  var name = ref.name;

  if (this.inGenerator && name === "yield")
    { this.raiseRecoverable(start, "Can not use 'yield' as identifier inside a generator"); }
  if (this.inAsync && name === "await")
    { this.raiseRecoverable(start, "Can not use 'await' as identifier inside an async function"); }
  if (this.isKeyword(name))
    { this.raise(start, ("Unexpected keyword '" + name + "'")); }
  if (this.options.ecmaVersion < 6 &&
    this.input.slice(start, end).indexOf("\\") != -1) { return }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name)) {
    if (!this.inAsync && name === "await")
      { this.raiseRecoverable(start, "Can not use keyword 'await' outside an async function"); }
    this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
  }
};

// Parse the next token as an identifier. If `liberal` is true (used
// when parsing properties), it will also convert keywords into
// identifiers.

pp$3.parseIdent = function(liberal, isBinding) {
  var node = this.startNode();
  if (liberal && this.options.allowReserved == "never") { liberal = false; }
  if (this.type === types.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;

    // To fix https://github.com/acornjs/acorn/issues/575
    // `class` and `function` keywords push new context into this.context.
    // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
    // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
    if ((node.name === "class" || node.name === "function") &&
        (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next();
  this.finishNode(node, "Identifier");
  if (!liberal) { this.checkUnreserved(node); }
  return node
};

// Parses yield expression inside generator.

pp$3.parseYield = function() {
  if (!this.yieldPos) { this.yieldPos = this.start; }

  var node = this.startNode();
  this.next();
  if (this.type == types.semi || this.canInsertSemicolon() || (this.type != types.star && !this.type.startsExpr)) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types.star);
    node.argument = this.parseMaybeAssign();
  }
  return this.finishNode(node, "YieldExpression")
};

pp$3.parseAwait = function() {
  if (!this.awaitPos) { this.awaitPos = this.start; }

  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true);
  return this.finishNode(node, "AwaitExpression")
};

var pp$4 = Parser$1.prototype;

// This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.

pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
  throw err
};

pp$4.raiseRecoverable = pp$4.raise;

pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart)
  }
};

var pp$5 = Parser$1.prototype;

// Object.assign polyfill
var assign = Object.assign || function(target) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  for (var i = 0, list = sources; i < list.length; i += 1) {
    var source = list[i];

    for (var key in source) {
      if (has(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target
};

// The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

pp$5.enterFunctionScope = function() {
  // var: a hash of var-declared names in the current lexical scope
  // lexical: a hash of lexically-declared names in the current lexical scope
  // childVar: a hash of var-declared names in all child lexical scopes of the current lexical scope (within the current function scope)
  // parentLexical: a hash of lexically-declared names in all parent lexical scopes of the current lexical scope (within the current function scope)
  this.scopeStack.push({var: {}, lexical: {}, childVar: {}, parentLexical: {}});
};

pp$5.exitFunctionScope = function() {
  this.scopeStack.pop();
};

pp$5.enterLexicalScope = function() {
  var parentScope = this.scopeStack[this.scopeStack.length - 1];
  var childScope = {var: {}, lexical: {}, childVar: {}, parentLexical: {}};

  this.scopeStack.push(childScope);
  assign(childScope.parentLexical, parentScope.lexical, parentScope.parentLexical);
};

pp$5.exitLexicalScope = function() {
  var childScope = this.scopeStack.pop();
  var parentScope = this.scopeStack[this.scopeStack.length - 1];

  assign(parentScope.childVar, childScope.var, childScope.childVar);
};

/**
 * A name can be declared with `var` if there are no variables with the same name declared with `let`/`const`
 * in the current lexical scope or any of the parent lexical scopes in this function.
 */
pp$5.canDeclareVarName = function(name) {
  var currentScope = this.scopeStack[this.scopeStack.length - 1];

  return !has(currentScope.lexical, name) && !has(currentScope.parentLexical, name)
};

/**
 * A name can be declared with `let`/`const` if there are no variables with the same name declared with `let`/`const`
 * in the current scope, and there are no variables with the same name declared with `var` in the current scope or in
 * any child lexical scopes in this function.
 */
pp$5.canDeclareLexicalName = function(name) {
  var currentScope = this.scopeStack[this.scopeStack.length - 1];

  return !has(currentScope.lexical, name) && !has(currentScope.var, name) && !has(currentScope.childVar, name)
};

pp$5.declareVarName = function(name) {
  this.scopeStack[this.scopeStack.length - 1].var[name] = true;
};

pp$5.declareLexicalName = function(name) {
  this.scopeStack[this.scopeStack.length - 1].lexical[name] = true;
};

var Node = function Node(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations)
    { this.loc = new SourceLocation(parser, loc); }
  if (parser.options.directSourceFile)
    { this.sourceFile = parser.options.directSourceFile; }
  if (parser.options.ranges)
    { this.range = [pos, 0]; }
};

// Start an AST node, attaching a start offset.

var pp$6 = Parser$1.prototype;

pp$6.startNode = function() {
  return new Node(this, this.start, this.startLoc)
};

pp$6.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc)
};

// Finish an AST node, adding `type` and `end` properties.

function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations)
    { node.loc.end = loc; }
  if (this.options.ranges)
    { node.range[1] = pos; }
  return node
}

pp$6.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
};

// Finish node at given position

pp$6.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc)
};

// The algorithm used to determine whether a regexp can appear at a
// given point in the program is loosely based on sweet.js' approach.
// See https://github.com/mozilla/sweet.js/wiki/design

var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};

var types$1 = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};

var pp$7 = Parser$1.prototype;

pp$7.initialContext = function() {
  return [types$1.b_stat]
};

pp$7.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types$1.f_expr || parent === types$1.f_stat)
    { return true }
  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr))
    { return !parent.isExpr }

  // The check for `tt.name && exprAllowed` detects whether we are
  // after a `yield` or `of` construct. See the `updateContext` for
  // `tt.name`.
  if (prevType === types._return || prevType == types.name && this.exprAllowed)
    { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType == types.arrow)
    { return true }
  if (prevType == types.braceL)
    { return parent === types$1.b_stat }
  if (prevType == types._var || prevType == types.name)
    { return false }
  return !this.exprAllowed
};

pp$7.inGeneratorContext = function() {
  var this$1 = this;

  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this$1.context[i];
    if (context.token === "function")
      { return context.generator }
  }
  return false
};

pp$7.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType == types.dot)
    { this.exprAllowed = false; }
  else if (update = type.updateContext)
    { update.call(this, prevType); }
  else
    { this.exprAllowed = type.beforeExpr; }
};

// Token-specific context update code

types.parenR.updateContext = types.braceR.updateContext = function() {
  if (this.context.length == 1) {
    this.exprAllowed = true;
    return
  }
  var out = this.context.pop();
  if (out === types$1.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};

types.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
  this.exprAllowed = true;
};

types.dollarBraceL.updateContext = function() {
  this.context.push(types$1.b_tmpl);
  this.exprAllowed = true;
};

types.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
  this.exprAllowed = true;
};

types.incDec.updateContext = function() {
  // tokExprAllowed stays unchanged
};

types._function.updateContext = types._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else &&
      !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat))
    { this.context.push(types$1.f_expr); }
  else
    { this.context.push(types$1.f_stat); }
  this.exprAllowed = false;
};

types.backQuote.updateContext = function() {
  if (this.curContext() === types$1.q_tmpl)
    { this.context.pop(); }
  else
    { this.context.push(types$1.q_tmpl); }
  this.exprAllowed = false;
};

types.star.updateContext = function(prevType) {
  if (prevType == types._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types$1.f_expr)
      { this.context[index] = types$1.f_expr_gen; }
    else
      { this.context[index] = types$1.f_gen; }
  }
  this.exprAllowed = true;
};

types.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6) {
    if (this.value == "of" && !this.exprAllowed ||
        this.value == "yield" && this.inGeneratorContext())
      { allowed = true; }
  }
  this.exprAllowed = allowed;
};

var data = {
  "$LONE": [
    "ASCII",
    "ASCII_Hex_Digit",
    "AHex",
    "Alphabetic",
    "Alpha",
    "Any",
    "Assigned",
    "Bidi_Control",
    "Bidi_C",
    "Bidi_Mirrored",
    "Bidi_M",
    "Case_Ignorable",
    "CI",
    "Cased",
    "Changes_When_Casefolded",
    "CWCF",
    "Changes_When_Casemapped",
    "CWCM",
    "Changes_When_Lowercased",
    "CWL",
    "Changes_When_NFKC_Casefolded",
    "CWKCF",
    "Changes_When_Titlecased",
    "CWT",
    "Changes_When_Uppercased",
    "CWU",
    "Dash",
    "Default_Ignorable_Code_Point",
    "DI",
    "Deprecated",
    "Dep",
    "Diacritic",
    "Dia",
    "Emoji",
    "Emoji_Component",
    "Emoji_Modifier",
    "Emoji_Modifier_Base",
    "Emoji_Presentation",
    "Extender",
    "Ext",
    "Grapheme_Base",
    "Gr_Base",
    "Grapheme_Extend",
    "Gr_Ext",
    "Hex_Digit",
    "Hex",
    "IDS_Binary_Operator",
    "IDSB",
    "IDS_Trinary_Operator",
    "IDST",
    "ID_Continue",
    "IDC",
    "ID_Start",
    "IDS",
    "Ideographic",
    "Ideo",
    "Join_Control",
    "Join_C",
    "Logical_Order_Exception",
    "LOE",
    "Lowercase",
    "Lower",
    "Math",
    "Noncharacter_Code_Point",
    "NChar",
    "Pattern_Syntax",
    "Pat_Syn",
    "Pattern_White_Space",
    "Pat_WS",
    "Quotation_Mark",
    "QMark",
    "Radical",
    "Regional_Indicator",
    "RI",
    "Sentence_Terminal",
    "STerm",
    "Soft_Dotted",
    "SD",
    "Terminal_Punctuation",
    "Term",
    "Unified_Ideograph",
    "UIdeo",
    "Uppercase",
    "Upper",
    "Variation_Selector",
    "VS",
    "White_Space",
    "space",
    "XID_Continue",
    "XIDC",
    "XID_Start",
    "XIDS"
  ],
  "General_Category": [
    "Cased_Letter",
    "LC",
    "Close_Punctuation",
    "Pe",
    "Connector_Punctuation",
    "Pc",
    "Control",
    "Cc",
    "cntrl",
    "Currency_Symbol",
    "Sc",
    "Dash_Punctuation",
    "Pd",
    "Decimal_Number",
    "Nd",
    "digit",
    "Enclosing_Mark",
    "Me",
    "Final_Punctuation",
    "Pf",
    "Format",
    "Cf",
    "Initial_Punctuation",
    "Pi",
    "Letter",
    "L",
    "Letter_Number",
    "Nl",
    "Line_Separator",
    "Zl",
    "Lowercase_Letter",
    "Ll",
    "Mark",
    "M",
    "Combining_Mark",
    "Math_Symbol",
    "Sm",
    "Modifier_Letter",
    "Lm",
    "Modifier_Symbol",
    "Sk",
    "Nonspacing_Mark",
    "Mn",
    "Number",
    "N",
    "Open_Punctuation",
    "Ps",
    "Other",
    "C",
    "Other_Letter",
    "Lo",
    "Other_Number",
    "No",
    "Other_Punctuation",
    "Po",
    "Other_Symbol",
    "So",
    "Paragraph_Separator",
    "Zp",
    "Private_Use",
    "Co",
    "Punctuation",
    "P",
    "punct",
    "Separator",
    "Z",
    "Space_Separator",
    "Zs",
    "Spacing_Mark",
    "Mc",
    "Surrogate",
    "Cs",
    "Symbol",
    "S",
    "Titlecase_Letter",
    "Lt",
    "Unassigned",
    "Cn",
    "Uppercase_Letter",
    "Lu"
  ],
  "Script": [
    "Adlam",
    "Adlm",
    "Ahom",
    "Anatolian_Hieroglyphs",
    "Hluw",
    "Arabic",
    "Arab",
    "Armenian",
    "Armn",
    "Avestan",
    "Avst",
    "Balinese",
    "Bali",
    "Bamum",
    "Bamu",
    "Bassa_Vah",
    "Bass",
    "Batak",
    "Batk",
    "Bengali",
    "Beng",
    "Bhaiksuki",
    "Bhks",
    "Bopomofo",
    "Bopo",
    "Brahmi",
    "Brah",
    "Braille",
    "Brai",
    "Buginese",
    "Bugi",
    "Buhid",
    "Buhd",
    "Canadian_Aboriginal",
    "Cans",
    "Carian",
    "Cari",
    "Caucasian_Albanian",
    "Aghb",
    "Chakma",
    "Cakm",
    "Cham",
    "Cherokee",
    "Cher",
    "Common",
    "Zyyy",
    "Coptic",
    "Copt",
    "Qaac",
    "Cuneiform",
    "Xsux",
    "Cypriot",
    "Cprt",
    "Cyrillic",
    "Cyrl",
    "Deseret",
    "Dsrt",
    "Devanagari",
    "Deva",
    "Duployan",
    "Dupl",
    "Egyptian_Hieroglyphs",
    "Egyp",
    "Elbasan",
    "Elba",
    "Ethiopic",
    "Ethi",
    "Georgian",
    "Geor",
    "Glagolitic",
    "Glag",
    "Gothic",
    "Goth",
    "Grantha",
    "Gran",
    "Greek",
    "Grek",
    "Gujarati",
    "Gujr",
    "Gurmukhi",
    "Guru",
    "Han",
    "Hani",
    "Hangul",
    "Hang",
    "Hanunoo",
    "Hano",
    "Hatran",
    "Hatr",
    "Hebrew",
    "Hebr",
    "Hiragana",
    "Hira",
    "Imperial_Aramaic",
    "Armi",
    "Inherited",
    "Zinh",
    "Qaai",
    "Inscriptional_Pahlavi",
    "Phli",
    "Inscriptional_Parthian",
    "Prti",
    "Javanese",
    "Java",
    "Kaithi",
    "Kthi",
    "Kannada",
    "Knda",
    "Katakana",
    "Kana",
    "Kayah_Li",
    "Kali",
    "Kharoshthi",
    "Khar",
    "Khmer",
    "Khmr",
    "Khojki",
    "Khoj",
    "Khudawadi",
    "Sind",
    "Lao",
    "Laoo",
    "Latin",
    "Latn",
    "Lepcha",
    "Lepc",
    "Limbu",
    "Limb",
    "Linear_A",
    "Lina",
    "Linear_B",
    "Linb",
    "Lisu",
    "Lycian",
    "Lyci",
    "Lydian",
    "Lydi",
    "Mahajani",
    "Mahj",
    "Malayalam",
    "Mlym",
    "Mandaic",
    "Mand",
    "Manichaean",
    "Mani",
    "Marchen",
    "Marc",
    "Masaram_Gondi",
    "Gonm",
    "Meetei_Mayek",
    "Mtei",
    "Mende_Kikakui",
    "Mend",
    "Meroitic_Cursive",
    "Merc",
    "Meroitic_Hieroglyphs",
    "Mero",
    "Miao",
    "Plrd",
    "Modi",
    "Mongolian",
    "Mong",
    "Mro",
    "Mroo",
    "Multani",
    "Mult",
    "Myanmar",
    "Mymr",
    "Nabataean",
    "Nbat",
    "New_Tai_Lue",
    "Talu",
    "Newa",
    "Nko",
    "Nkoo",
    "Nushu",
    "Nshu",
    "Ogham",
    "Ogam",
    "Ol_Chiki",
    "Olck",
    "Old_Hungarian",
    "Hung",
    "Old_Italic",
    "Ital",
    "Old_North_Arabian",
    "Narb",
    "Old_Permic",
    "Perm",
    "Old_Persian",
    "Xpeo",
    "Old_South_Arabian",
    "Sarb",
    "Old_Turkic",
    "Orkh",
    "Oriya",
    "Orya",
    "Osage",
    "Osge",
    "Osmanya",
    "Osma",
    "Pahawh_Hmong",
    "Hmng",
    "Palmyrene",
    "Palm",
    "Pau_Cin_Hau",
    "Pauc",
    "Phags_Pa",
    "Phag",
    "Phoenician",
    "Phnx",
    "Psalter_Pahlavi",
    "Phlp",
    "Rejang",
    "Rjng",
    "Runic",
    "Runr",
    "Samaritan",
    "Samr",
    "Saurashtra",
    "Saur",
    "Sharada",
    "Shrd",
    "Shavian",
    "Shaw",
    "Siddham",
    "Sidd",
    "SignWriting",
    "Sgnw",
    "Sinhala",
    "Sinh",
    "Sora_Sompeng",
    "Sora",
    "Soyombo",
    "Soyo",
    "Sundanese",
    "Sund",
    "Syloti_Nagri",
    "Sylo",
    "Syriac",
    "Syrc",
    "Tagalog",
    "Tglg",
    "Tagbanwa",
    "Tagb",
    "Tai_Le",
    "Tale",
    "Tai_Tham",
    "Lana",
    "Tai_Viet",
    "Tavt",
    "Takri",
    "Takr",
    "Tamil",
    "Taml",
    "Tangut",
    "Tang",
    "Telugu",
    "Telu",
    "Thaana",
    "Thaa",
    "Thai",
    "Tibetan",
    "Tibt",
    "Tifinagh",
    "Tfng",
    "Tirhuta",
    "Tirh",
    "Ugaritic",
    "Ugar",
    "Vai",
    "Vaii",
    "Warang_Citi",
    "Wara",
    "Yi",
    "Yiii",
    "Zanabazar_Square",
    "Zanb"
  ]
};
Array.prototype.push.apply(data.$LONE, data.General_Category);
data.gc = data.General_Category;
data.sc = data.Script_Extensions = data.scx = data.Script;

var pp$9 = Parser$1.prototype;

var RegExpValidationState = function RegExpValidationState(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};

RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
};

RegExpValidationState.prototype.raise = function raise (message) {
  this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
};

// If u flag is given, this returns the code point at the index (it combines a surrogate pair).
// Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
RegExpValidationState.prototype.at = function at (i) {
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1
  }
  var c = s.charCodeAt(i);
  if (!this.switchU || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
    return c
  }
  return (c << 10) + s.charCodeAt(i + 1) - 0x35FDC00
};

RegExpValidationState.prototype.nextIndex = function nextIndex (i) {
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l
  }
  var c = s.charCodeAt(i);
  if (!this.switchU || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
    return i + 1
  }
  return i + 2
};

RegExpValidationState.prototype.current = function current () {
  return this.at(this.pos)
};

RegExpValidationState.prototype.lookahead = function lookahead () {
  return this.at(this.nextIndex(this.pos))
};

RegExpValidationState.prototype.advance = function advance () {
  this.pos = this.nextIndex(this.pos);
};

RegExpValidationState.prototype.eat = function eat (ch) {
  if (this.current() === ch) {
    this.advance();
    return true
  }
  return false
};

function codePointToString$1(ch) {
  if (ch <= 0xFFFF) { return String.fromCharCode(ch) }
  ch -= 0x10000;
  return String.fromCharCode((ch >> 10) + 0xD800, (ch & 0x03FF) + 0xDC00)
}

/**
 * Validate the flags part of a given RegExpLiteral.
 *
 * @param {RegExpValidationState} state The state to validate RegExp.
 * @returns {void}
 */
pp$9.validateRegExpFlags = function(state) {
  var this$1 = this;

  var validFlags = state.validFlags;
  var flags = state.flags;

  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) == -1) {
      this$1.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this$1.raise(state.start, "Duplicate regular expression flag");
    }
  }
};

/**
 * Validate the pattern part of a given RegExpLiteral.
 *
 * @param {RegExpValidationState} state The state to validate RegExp.
 * @returns {void}
 */
pp$9.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);

  // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
  // parsing contains a |GroupName|, reparse with the goal symbol
  // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
  // exception if _P_ did not conform to the grammar, if any elements of _P_
  // were not matched by the parse, or if any Early Error conditions exist.
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
pp$9.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;

  this.regexp_disjunction(state);

  if (state.pos !== state.source.length) {
    // Make the same messages as V8.
    if (state.eat(0x29 /* ) */)) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(0x5D /* [ */) || state.eat(0x7D /* } */)) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name = list[i];

    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
pp$9.regexp_disjunction = function(state) {
  var this$1 = this;

  this.regexp_alternative(state);
  while (state.eat(0x7C /* | */)) {
    this$1.regexp_alternative(state);
  }

  // Make the same message as V8.
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(0x7B /* { */)) {
    state.raise("Lone quantifier brackets");
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
pp$9.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state))
    {  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
pp$9.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    // Handle `QuantifiableAssertion Quantifier` alternative.
    // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
    // is a QuantifiableAssertion.
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      // Make the same message as V8.
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true
  }

  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
pp$9.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;

  // ^, $
  if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
    return true
  }

  // \b \B
  if (state.eat(0x5C /* \ */)) {
    if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
      return true
    }
    state.pos = start;
  }

  // Lookahead / Lookbehind
  if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(0x3C /* < */);
    }
    if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
      this.regexp_disjunction(state);
      if (!state.eat(0x29 /* ) */)) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true
    }
  }

  state.pos = start;
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
pp$9.regexp_eatQuantifier = function(state, noError) {
  if ( noError === void 0 ) noError = false;

  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(0x3F /* ? */);
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
pp$9.regexp_eatQuantifierPrefix = function(state, noError) {
  return (
    state.eat(0x2A /* * */) ||
    state.eat(0x2B /* + */) ||
    state.eat(0x3F /* ? */) ||
    this.regexp_eatBracedQuantifier(state, noError)
  )
};
pp$9.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(0x7B /* { */)) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(0x7D /* } */)) {
        // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
pp$9.regexp_eatAtom = function(state) {
  return (
    this.regexp_eatPatternCharacters(state) ||
    state.eat(0x2E /* . */) ||
    this.regexp_eatReverseSolidusAtomEscape(state) ||
    this.regexp_eatCharacterClass(state) ||
    this.regexp_eatUncapturingGroup(state) ||
    this.regexp_eatCapturingGroup(state)
  )
};
pp$9.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(0x5C /* \ */)) {
    if (this.regexp_eatAtomEscape(state)) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$9.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(0x28 /* ( */)) {
    if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
      this.regexp_disjunction(state);
      if (state.eat(0x29 /* ) */)) {
        return true
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false
};
pp$9.regexp_eatCapturingGroup = function(state) {
  if (state.eat(0x28 /* ( */)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 0x3F /* ? */) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(0x29 /* ) */)) {
      state.numCapturingParens += 1;
      return true
    }
    state.raise("Unterminated group");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
pp$9.regexp_eatExtendedAtom = function(state) {
  return (
    state.eat(0x2E /* . */) ||
    this.regexp_eatReverseSolidusAtomEscape(state) ||
    this.regexp_eatCharacterClass(state) ||
    this.regexp_eatUncapturingGroup(state) ||
    this.regexp_eatCapturingGroup(state) ||
    this.regexp_eatInvalidBracedQuantifier(state) ||
    this.regexp_eatExtendedPatternCharacter(state)
  )
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
pp$9.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
pp$9.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }
  return false
};
function isSyntaxCharacter(ch) {
  return (
    ch === 0x24 /* $ */ ||
    ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
    ch === 0x2E /* . */ ||
    ch === 0x3F /* ? */ ||
    ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
    ch >= 0x7B /* { */ && ch <= 0x7D /* } */
  )
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
// But eat eager.
pp$9.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
pp$9.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (
    ch !== -1 &&
    ch !== 0x24 /* $ */ &&
    !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
    ch !== 0x2E /* . */ &&
    ch !== 0x3F /* ? */ &&
    ch !== 0x5B /* [ */ &&
    ch !== 0x5E /* ^ */ &&
    ch !== 0x7C /* | */
  ) {
    state.advance();
    return true
  }
  return false
};

// GroupSpecifier[U] ::
//   [empty]
//   `?` GroupName[?U]
pp$9.regexp_groupSpecifier = function(state) {
  if (state.eat(0x3F /* ? */)) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return
    }
    state.raise("Invalid group");
  }
};

// GroupName[U] ::
//   `<` RegExpIdentifierName[?U] `>`
// Note: this updates `state.lastStringValue` property with the eaten name.
pp$9.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(0x3C /* < */)) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
      return true
    }
    state.raise("Invalid capture group name");
  }
  return false
};

// RegExpIdentifierName[U] ::
//   RegExpIdentifierStart[?U]
//   RegExpIdentifierName[?U] RegExpIdentifierPart[?U]
// Note: this updates `state.lastStringValue` property with the eaten name.
pp$9.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString$1(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString$1(state.lastIntValue);
    }
    return true
  }
  return false
};

// RegExpIdentifierStart[U] ::
//   UnicodeIDStart
//   `$`
//   `_`
//   `\` RegExpUnicodeEscapeSequence[?U]
pp$9.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var ch = state.current();
  state.advance();

  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true
  }

  state.pos = start;
  return false
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
}

// RegExpIdentifierPart[U] ::
//   UnicodeIDContinue
//   `$`
//   `_`
//   `\` RegExpUnicodeEscapeSequence[?U]
//   <ZWNJ>
//   <ZWJ>
pp$9.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var ch = state.current();
  state.advance();

  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true
  }

  state.pos = start;
  return false
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
pp$9.regexp_eatAtomEscape = function(state) {
  if (
    this.regexp_eatBackReference(state) ||
    this.regexp_eatCharacterClassEscape(state) ||
    this.regexp_eatCharacterEscape(state) ||
    (state.switchN && this.regexp_eatKGroupName(state))
  ) {
    return true
  }
  if (state.switchU) {
    // Make the same message as V8.
    if (state.current() === 0x63 /* c */) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false
};
pp$9.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n = state.lastIntValue;
    if (state.switchU) {
      // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
      if (n > state.maxBackReference) {
        state.maxBackReference = n;
      }
      return true
    }
    if (n <= state.numCapturingParens) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$9.regexp_eatKGroupName = function(state) {
  if (state.eat(0x6B /* k */)) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true
    }
    state.raise("Invalid named reference");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
pp$9.regexp_eatCharacterEscape = function(state) {
  return (
    this.regexp_eatControlEscape(state) ||
    this.regexp_eatCControlLetter(state) ||
    this.regexp_eatZero(state) ||
    this.regexp_eatHexEscapeSequence(state) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(state) ||
    (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
    this.regexp_eatIdentityEscape(state)
  )
};
pp$9.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(0x63 /* c */)) {
    if (this.regexp_eatControlLetter(state)) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$9.regexp_eatZero = function(state) {
  if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
pp$9.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 0x74 /* t */) {
    state.lastIntValue = 0x09; /* \t */
    state.advance();
    return true
  }
  if (ch === 0x6E /* n */) {
    state.lastIntValue = 0x0A; /* \n */
    state.advance();
    return true
  }
  if (ch === 0x76 /* v */) {
    state.lastIntValue = 0x0B; /* \v */
    state.advance();
    return true
  }
  if (ch === 0x66 /* f */) {
    state.lastIntValue = 0x0C; /* \f */
    state.advance();
    return true
  }
  if (ch === 0x72 /* r */) {
    state.lastIntValue = 0x0D; /* \r */
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
pp$9.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 0x20;
    state.advance();
    return true
  }
  return false
};
function isControlLetter(ch) {
  return (
    (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
    (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
  )
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
pp$9.regexp_eatRegExpUnicodeEscapeSequence = function(state) {
  var start = state.pos;

  if (state.eat(0x75 /* u */)) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (state.switchU && lead >= 0xD800 && lead <= 0xDBFF) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 0xDC00 && trail <= 0xDFFF) {
            state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
            return true
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true
    }
    if (
      state.switchU &&
      state.eat(0x7B /* { */) &&
      this.regexp_eatHexDigits(state) &&
      state.eat(0x7D /* } */) &&
      isValidUnicode(state.lastIntValue)
    ) {
      return true
    }
    if (state.switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }

  return false
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 0x10FFFF
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
pp$9.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true
    }
    if (state.eat(0x2F /* / */)) {
      state.lastIntValue = 0x2F; /* / */
      return true
    }
    return false
  }

  var ch = state.current();
  if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
pp$9.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
      state.advance();
    } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
pp$9.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();

  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return true
  }

  if (
    state.switchU &&
    this.options.ecmaVersion >= 9 &&
    (ch === 0x50 /* P */ || ch === 0x70 /* p */)
  ) {
    state.lastIntValue = -1;
    state.advance();
    if (
      state.eat(0x7B /* { */) &&
      this.regexp_eatUnicodePropertyValueExpression(state) &&
      state.eat(0x7D /* } */)
    ) {
      return true
    }
    state.raise("Invalid property name");
  }

  return false
};
function isCharacterClassEscape(ch) {
  return (
    ch === 0x64 /* d */ ||
    ch === 0x44 /* D */ ||
    ch === 0x73 /* s */ ||
    ch === 0x53 /* S */ ||
    ch === 0x77 /* w */ ||
    ch === 0x57 /* W */
  )
}

// UnicodePropertyValueExpression ::
//   UnicodePropertyName `=` UnicodePropertyValue
//   LoneUnicodePropertyNameOrValue
pp$9.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;

  // UnicodePropertyName `=` UnicodePropertyValue
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return true
    }
  }
  state.pos = start;

  // LoneUnicodePropertyNameOrValue
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    return true
  }
  return false
};
pp$9.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!data.hasOwnProperty(name) || data[name].indexOf(value) === -1) {
    state.raise("Invalid property name");
  }
};
pp$9.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (data.$LONE.indexOf(nameOrValue) === -1) {
    state.raise("Invalid property name");
  }
};

// UnicodePropertyName ::
//   UnicodePropertyNameCharacters
pp$9.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString$1(ch);
    state.advance();
  }
  return state.lastStringValue !== ""
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 0x5F /* _ */
}

// UnicodePropertyValue ::
//   UnicodePropertyValueCharacters
pp$9.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString$1(ch);
    state.advance();
  }
  return state.lastStringValue !== ""
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
}

// LoneUnicodePropertyNameOrValue ::
//   UnicodePropertyValueCharacters
pp$9.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state)
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
pp$9.regexp_eatCharacterClass = function(state) {
  if (state.eat(0x5B /* [ */)) {
    state.eat(0x5E /* ^ */);
    this.regexp_classRanges(state);
    if (state.eat(0x5D /* [ */)) {
      return true
    }
    // Unreachable since it threw "unterminated regular expression" error before.
    state.raise("Unterminated character class");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
pp$9.regexp_classRanges = function(state) {
  var this$1 = this;

  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(0x2D /* - */) && this$1.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
pp$9.regexp_eatClassAtom = function(state) {
  var start = state.pos;

  if (state.eat(0x5C /* \ */)) {
    if (this.regexp_eatClassEscape(state)) {
      return true
    }
    if (state.switchU) {
      // Make the same message as V8.
      var ch$1 = state.current();
      if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }

  var ch = state.current();
  if (ch !== 0x5D /* [ */) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
pp$9.regexp_eatClassEscape = function(state) {
  var start = state.pos;

  if (state.eat(0x62 /* b */)) {
    state.lastIntValue = 0x08; /* <BS> */
    return true
  }

  if (state.switchU && state.eat(0x2D /* - */)) {
    state.lastIntValue = 0x2D; /* - */
    return true
  }

  if (!state.switchU && state.eat(0x63 /* c */)) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true
    }
    state.pos = start;
  }

  return (
    this.regexp_eatCharacterClassEscape(state) ||
    this.regexp_eatCharacterEscape(state)
  )
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
pp$9.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
    state.lastIntValue = ch % 0x20;
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
pp$9.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(0x78 /* x */)) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
pp$9.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
    state.advance();
  }
  return state.pos !== start
};
function isDecimalDigit(ch) {
  return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
pp$9.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start
};
function isHexDigit(ch) {
  return (
    (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
    (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
    (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
  )
}
function hexToInt(ch) {
  if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
    return 10 + (ch - 0x41 /* A */)
  }
  if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
    return 10 + (ch - 0x61 /* a */)
  }
  return ch - 0x30 /* 0 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
// Allows only 0-377(octal) i.e. 0-255(decimal).
pp$9.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
pp$9.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 0x30; /* 0 */
    state.advance();
    return true
  }
  state.lastIntValue = 0;
  return false
};
function isOctalDigit(ch) {
  return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
// And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
pp$9.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true
};

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.

var Token = function Token(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations)
    { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
  if (p.options.ranges)
    { this.range = [p.start, p.end]; }
};

// ## Tokenizer

var pp$8 = Parser$1.prototype;

// Move to the next token

pp$8.next = function() {
  if (this.options.onToken)
    { this.options.onToken(new Token(this)); }

  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};

pp$8.getToken = function() {
  this.next();
  return new Token(this)
};

// If we're in an ES6 environment, make parsers iterable
if (typeof Symbol !== "undefined")
  { pp$8[Symbol.iterator] = function() {
    var this$1 = this;

    return {
      next: function () {
        var token = this$1.getToken();
        return {
          done: token.type === types.eof,
          value: token
        }
      }
    }
  }; }

// Toggle strict mode. Re-reads the next number or string to please
// pedantic tests (`"use strict"; 010;` should fail).

pp$8.curContext = function() {
  return this.context[this.context.length - 1]
};

// Read a single token, updating the parser object's token-related
// properties.

pp$8.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

  this.start = this.pos;
  if (this.options.locations) { this.startLoc = this.curPosition(); }
  if (this.pos >= this.input.length) { return this.finishToken(types.eof) }

  if (curContext.override) { return curContext.override(this) }
  else { this.readToken(this.fullCharCodeAtPos()); }
};

pp$8.readToken = function(code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
    { return this.readWord() }

  return this.getTokenFromCode(code)
};

pp$8.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 0xd7ff || code >= 0xe000) { return code }
  var next = this.input.charCodeAt(this.pos + 1);
  return (code << 10) + next - 0x35fdc00
};

pp$8.skipBlockComment = function() {
  var this$1 = this;

  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
  this.pos = end + 2;
  if (this.options.locations) {
    lineBreakG.lastIndex = start;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this$1.curLine;
      this$1.lineStart = match.index + match[0].length;
    }
  }
  if (this.options.onComment)
    { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                           startLoc, this.curPosition()); }
};

pp$8.skipLineComment = function(startSkip) {
  var this$1 = this;

  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this$1.input.charCodeAt(++this$1.pos);
  }
  if (this.options.onComment)
    { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                           startLoc, this.curPosition()); }
};

// Called at the start of the parse and after every token. Skips
// whitespace and comments, and.

pp$8.skipSpace = function() {
  var this$1 = this;

  loop: while (this.pos < this.input.length) {
    var ch = this$1.input.charCodeAt(this$1.pos);
    switch (ch) {
    case 32: case 160: // ' '
      ++this$1.pos;
      break
    case 13:
      if (this$1.input.charCodeAt(this$1.pos + 1) === 10) {
        ++this$1.pos;
      }
    case 10: case 8232: case 8233:
      ++this$1.pos;
      if (this$1.options.locations) {
        ++this$1.curLine;
        this$1.lineStart = this$1.pos;
      }
      break
    case 47: // '/'
      switch (this$1.input.charCodeAt(this$1.pos + 1)) {
      case 42: // '*'
        this$1.skipBlockComment();
        break
      case 47:
        this$1.skipLineComment(2);
        break
      default:
        break loop
      }
      break
    default:
      if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
        ++this$1.pos;
      } else {
        break loop
      }
    }
  }
};

// Called at the end of every token. Sets `end`, `val`, and
// maintains `context` and `exprAllowed`, and skips the space after
// the token, so that the next one's `start` will point at the
// right position.

pp$8.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) { this.endLoc = this.curPosition(); }
  var prevType = this.type;
  this.type = type;
  this.value = val;

  this.updateContext(prevType);
};

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
//
pp$8.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) { return this.readNumber(true) }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
    this.pos += 3;
    return this.finishToken(types.ellipsis)
  } else {
    ++this.pos;
    return this.finishToken(types.dot)
  }
};

pp$8.readToken_slash = function() { // '/'
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.slash, 1)
};

pp$8.readToken_mult_modulo_exp = function(code) { // '%*'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types.star : types.modulo;

  // exponentiation operator ** and **=
  if (this.options.ecmaVersion >= 7 && code == 42 && next === 42) {
    ++size;
    tokentype = types.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }

  if (next === 61) { return this.finishOp(types.assign, size + 1) }
  return this.finishOp(tokentype, size)
};

pp$8.readToken_pipe_amp = function(code) { // '|&'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) { return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2) }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1)
};

pp$8.readToken_caret = function() { // '^'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.bitwiseXOR, 1)
};

pp$8.readToken_plus_min = function(code) { // '+-'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next == 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) == 62 &&
        (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      // A `-->` line comment
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken()
    }
    return this.finishOp(types.incDec, 2)
  }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.plusMin, 1)
};

pp$8.readToken_lt_gt = function(code) { // '<>'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types.assign, size + 1) }
    return this.finishOp(types.bitShift, size)
  }
  if (next == 33 && code == 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) == 45 &&
      this.input.charCodeAt(this.pos + 3) == 45) {
    // `<!--`, an XML-style comment that should be interpreted as a line comment
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken()
  }
  if (next === 61) { size = 2; }
  return this.finishOp(types.relational, size)
};

pp$8.readToken_eq_excl = function(code) { // '=!'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
    this.pos += 2;
    return this.finishToken(types.arrow)
  }
  return this.finishOp(code === 61 ? types.eq : types.prefix, 1)
};

pp$8.getTokenFromCode = function(code) {
  switch (code) {
  // The interpretation of a dot depends on whether it is followed
  // by a digit or another two dots.
  case 46: // '.'
    return this.readToken_dot()

  // Punctuation tokens.
  case 40: ++this.pos; return this.finishToken(types.parenL)
  case 41: ++this.pos; return this.finishToken(types.parenR)
  case 59: ++this.pos; return this.finishToken(types.semi)
  case 44: ++this.pos; return this.finishToken(types.comma)
  case 91: ++this.pos; return this.finishToken(types.bracketL)
  case 93: ++this.pos; return this.finishToken(types.bracketR)
  case 123: ++this.pos; return this.finishToken(types.braceL)
  case 125: ++this.pos; return this.finishToken(types.braceR)
  case 58: ++this.pos; return this.finishToken(types.colon)
  case 63: ++this.pos; return this.finishToken(types.question)

  case 96: // '`'
    if (this.options.ecmaVersion < 6) { break }
    ++this.pos;
    return this.finishToken(types.backQuote)

  case 48: // '0'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
    if (this.options.ecmaVersion >= 6) {
      if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
      if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
    }

  // Anything else beginning with a digit is an integer, octal
  // number, or float.
  case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
    return this.readNumber(false)

  // Quotes produce strings.
  case 34: case 39: // '"', "'"
    return this.readString(code)

  // Operators are parsed inline in tiny state machines. '=' (61) is
  // often referred to. `finishOp` simply skips the amount of
  // characters it is given as second argument, and returns a token
  // of the type given by its first argument.

  case 47: // '/'
    return this.readToken_slash()

  case 37: case 42: // '%*'
    return this.readToken_mult_modulo_exp(code)

  case 124: case 38: // '|&'
    return this.readToken_pipe_amp(code)

  case 94: // '^'
    return this.readToken_caret()

  case 43: case 45: // '+-'
    return this.readToken_plus_min(code)

  case 60: case 62: // '<>'
    return this.readToken_lt_gt(code)

  case 61: case 33: // '=!'
    return this.readToken_eq_excl(code)

  case 126: // '~'
    return this.finishOp(types.prefix, 1)
  }

  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};

pp$8.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str)
};

pp$8.readRegexp = function() {
  var this$1 = this;

  var escaped, inClass, start = this.pos;
  for (;;) {
    if (this$1.pos >= this$1.input.length) { this$1.raise(start, "Unterminated regular expression"); }
    var ch = this$1.input.charAt(this$1.pos);
    if (lineBreak.test(ch)) { this$1.raise(start, "Unterminated regular expression"); }
    if (!escaped) {
      if (ch === "[") { inClass = true; }
      else if (ch === "]" && inClass) { inClass = false; }
      else if (ch === "/" && !inClass) { break }
      escaped = ch === "\\";
    } else { escaped = false; }
    ++this$1.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) { this.unexpected(flagsStart); }

  // Validate pattern
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);

  // Create Literal#value property value.
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {
    // ESTree requires null if it failed to instantiate RegExp object.
    // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
  }

  return this.finishToken(types.regexp, {pattern: pattern, flags: flags, value: value})
};

// Read an integer in the given radix. Return null if zero digits
// were read, the integer value otherwise. When `len` is given, this
// will return `null` unless the integer has exactly `len` digits.

pp$8.readInt = function(radix, len) {
  var this$1 = this;

  var start = this.pos, total = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
    var code = this$1.input.charCodeAt(this$1.pos), val = (void 0);
    if (code >= 97) { val = code - 97 + 10; } // a
    else if (code >= 65) { val = code - 65 + 10; } // A
    else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
    else { val = Infinity; }
    if (val >= radix) { break }
    ++this$1.pos;
    total = total * radix + val;
  }
  if (this.pos === start || len != null && this.pos - start !== len) { return null }

  return total
};

pp$8.readRadixNumber = function(radix) {
  this.pos += 2; // 0x
  var val = this.readInt(radix);
  if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
  if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
  return this.finishToken(types.num, val)
};

// Read an integer, octal integer, or floating-point number.

pp$8.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10) === null) { this.raise(start, "Invalid number"); }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) { this.raise(start, "Invalid number"); }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
  var next = this.input.charCodeAt(this.pos);
  if (next === 46 && !octal) { // '.'
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) { // 'eE'
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) { ++this.pos; } // '+-'
    if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

  var str = this.input.slice(start, this.pos);
  var val = octal ? parseInt(str, 8) : parseFloat(str);
  return this.finishToken(types.num, val)
};

// Read a string value, interpreting backslash-escapes.

pp$8.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;

  if (ch === 123) { // '{'
    if (this.options.ecmaVersion < 6) { this.unexpected(); }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
  } else {
    code = this.readHexChar(4);
  }
  return code
};

function codePointToString(code) {
  // UTF-16 Decoding
  if (code <= 0xFFFF) { return String.fromCharCode(code) }
  code -= 0x10000;
  return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
}

pp$8.readString = function(quote) {
  var this$1 = this;

  var out = "", chunkStart = ++this.pos;
  for (;;) {
    if (this$1.pos >= this$1.input.length) { this$1.raise(this$1.start, "Unterminated string constant"); }
    var ch = this$1.input.charCodeAt(this$1.pos);
    if (ch === quote) { break }
    if (ch === 92) { // '\'
      out += this$1.input.slice(chunkStart, this$1.pos);
      out += this$1.readEscapedChar(false);
      chunkStart = this$1.pos;
    } else {
      if (isNewLine(ch)) { this$1.raise(this$1.start, "Unterminated string constant"); }
      ++this$1.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types.string, out)
};

// Reads template string tokens.

var INVALID_TEMPLATE_ESCAPE_ERROR = {};

pp$8.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err
    }
  }

  this.inTemplateElement = false;
};

pp$8.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR
  } else {
    this.raise(position, message);
  }
};

pp$8.readTmplToken = function() {
  var this$1 = this;

  var out = "", chunkStart = this.pos;
  for (;;) {
    if (this$1.pos >= this$1.input.length) { this$1.raise(this$1.start, "Unterminated template"); }
    var ch = this$1.input.charCodeAt(this$1.pos);
    if (ch === 96 || ch === 36 && this$1.input.charCodeAt(this$1.pos + 1) === 123) { // '`', '${'
      if (this$1.pos === this$1.start && (this$1.type === types.template || this$1.type === types.invalidTemplate)) {
        if (ch === 36) {
          this$1.pos += 2;
          return this$1.finishToken(types.dollarBraceL)
        } else {
          ++this$1.pos;
          return this$1.finishToken(types.backQuote)
        }
      }
      out += this$1.input.slice(chunkStart, this$1.pos);
      return this$1.finishToken(types.template, out)
    }
    if (ch === 92) { // '\'
      out += this$1.input.slice(chunkStart, this$1.pos);
      out += this$1.readEscapedChar(true);
      chunkStart = this$1.pos;
    } else if (isNewLine(ch)) {
      out += this$1.input.slice(chunkStart, this$1.pos);
      ++this$1.pos;
      switch (ch) {
      case 13:
        if (this$1.input.charCodeAt(this$1.pos) === 10) { ++this$1.pos; }
      case 10:
        out += "\n";
        break
      default:
        out += String.fromCharCode(ch);
        break
      }
      if (this$1.options.locations) {
        ++this$1.curLine;
        this$1.lineStart = this$1.pos;
      }
      chunkStart = this$1.pos;
    } else {
      ++this$1.pos;
    }
  }
};

// Reads a template token to search for the end, without validating any escape sequences
pp$8.readInvalidTemplateToken = function() {
  var this$1 = this;

  for (; this.pos < this.input.length; this.pos++) {
    switch (this$1.input[this$1.pos]) {
    case "\\":
      ++this$1.pos;
      break

    case "$":
      if (this$1.input[this$1.pos + 1] !== "{") {
        break
      }
    // falls through

    case "`":
      return this$1.finishToken(types.invalidTemplate, this$1.input.slice(this$1.start, this$1.pos))

    // no default
    }
  }
  this.raise(this.start, "Unterminated template");
};

// Used to read escaped characters

pp$8.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
  case 110: return "\n" // 'n' -> '\n'
  case 114: return "\r" // 'r' -> '\r'
  case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
  case 117: return codePointToString(this.readCodePoint()) // 'u'
  case 116: return "\t" // 't' -> '\t'
  case 98: return "\b" // 'b' -> '\b'
  case 118: return "\u000b" // 'v' -> '\u000b'
  case 102: return "\f" // 'f' -> '\f'
  case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
  case 10: // ' \n'
    if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
    return ""
  default:
    if (ch >= 48 && ch <= 55) {
      var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
      var octal = parseInt(octalStr, 8);
      if (octal > 255) {
        octalStr = octalStr.slice(0, -1);
        octal = parseInt(octalStr, 8);
      }
      this.pos += octalStr.length - 1;
      ch = this.input.charCodeAt(this.pos);
      if ((octalStr !== "0" || ch == 56 || ch == 57) && (this.strict || inTemplate)) {
        this.invalidStringToken(
          this.pos - 1 - octalStr.length,
          inTemplate
            ? "Octal literal in template string"
            : "Octal literal in strict mode"
        );
      }
      return String.fromCharCode(octal)
    }
    return String.fromCharCode(ch)
  }
};

// Used to read character escape sequences ('\x', '\u', '\U').

pp$8.readHexChar = function(len) {
  var codePos = this.pos;
  var n = this.readInt(16, len);
  if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
  return n
};

// Read an identifier, and return it as a string. Sets `this.containsEsc`
// to whether the word contained a '\u' escape.
//
// Incrementally adds only escaped chars, adding other chunks as-is
// as a micro-optimization.

pp$8.readWord1 = function() {
  var this$1 = this;

  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this$1.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this$1.pos += ch <= 0xffff ? 1 : 2;
    } else if (ch === 92) { // "\"
      this$1.containsEsc = true;
      word += this$1.input.slice(chunkStart, this$1.pos);
      var escStart = this$1.pos;
      if (this$1.input.charCodeAt(++this$1.pos) != 117) // "u"
        { this$1.invalidStringToken(this$1.pos, "Expecting Unicode escape sequence \\uXXXX"); }
      ++this$1.pos;
      var esc = this$1.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
        { this$1.invalidStringToken(escStart, "Invalid Unicode escape"); }
      word += codePointToString(esc);
      chunkStart = this$1.pos;
    } else {
      break
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos)
};

// Read an identifier or keyword token. Will check for reserved
// words when necessary.

pp$8.readWord = function() {
  var word = this.readWord1();
  var type = types.name;
  if (this.keywords.test(word)) {
    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword " + word); }
    type = keywords$1[word];
  }
  return this.finishToken(type, word)
};

// Acorn is a tiny, fast JavaScript parser written in JavaScript.
//
// Acorn was written by Marijn Haverbeke, Ingvar Stepanyan, and
// various contributors and released under an MIT license.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/acornjs/acorn.git
//
// Please use the [github bug tracker][ghbt] to report issues.
//
// [ghbt]: https://github.com/acornjs/acorn/issues
//
// This file defines the main parser interface. The library also comes
// with a [error-tolerant parser][dammit] and an
// [abstract syntax tree walker][walk], defined in other files.
//
// [dammit]: acorn_loose.js
// [walk]: util/walk.js

var version$1 = "5.5.3";

// The main exported interface (under `self.acorn` when in the
// browser) is a `parse` function that takes a code string and
// returns an abstract syntax tree as specified by [Mozilla parser
// API][api].
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

function parse$1(input, options) {
  return new Parser$1(options, input).parse()
}

// This function tries to parse a single expression at a given
// offset in a string. Useful for parsing mixed-language formats
// that embed JavaScript expressions.

function parseExpressionAt(input, pos, options) {
  var p = new Parser$1(options, input, pos);
  p.nextToken();
  return p.parseExpression()
}

// Acorn is organized as a tokenizer and a recursive-descent parser.
// The `tokenizer` export provides an interface to the tokenizer.

function tokenizer(input, options) {
  return new Parser$1(options, input)
}

// This is a terrible kludge to support the existing, pre-ES6
// interface where the loose parser module retroactively adds exports
// to this module.
var parse_dammit;
var LooseParser;
var pluginsLoose; // eslint-disable-line camelcase
function addLooseExports(parse, Parser$$1, plugins$$1) {
  parse_dammit = parse; // eslint-disable-line camelcase
  LooseParser = Parser$$1;
  pluginsLoose = plugins$$1;
}




var acorn = Object.freeze({
	version: version$1,
	parse: parse$1,
	parseExpressionAt: parseExpressionAt,
	tokenizer: tokenizer,
	get parse_dammit () { return parse_dammit; },
	get LooseParser () { return LooseParser; },
	get pluginsLoose () { return pluginsLoose; },
	addLooseExports: addLooseExports,
	Parser: Parser$1,
	plugins: plugins,
	defaultOptions: defaultOptions,
	Position: Position,
	SourceLocation: SourceLocation,
	getLineInfo: getLineInfo,
	Node: Node,
	TokenType: TokenType,
	tokTypes: types,
	keywordTypes: keywords$1,
	TokContext: TokContext,
	tokContexts: types$1,
	isIdentifierChar: isIdentifierChar,
	isIdentifierStart: isIdentifierStart,
	Token: Token,
	isNewLine: isNewLine,
	lineBreak: lineBreak,
	lineBreakG: lineBreakG,
	nonASCIIwhitespace: nonASCIIwhitespace
});

var literals = new Map([['true', true], ['false', false], ['null', null]]);
function readExpression(parser) {
    var start = parser.index;
    var name = parser.readUntil(/\s*}}/);
    if (name && /^[a-z]+$/.test(name)) {
        var end = start + name.length;
        if (literals.has(name)) {
            return {
                type: 'Literal',
                start: start,
                end: end,
                value: literals.get(name),
                raw: name
            };
        }
        return {
            type: 'Identifier',
            start: start,
            end: start + name.length,
            name: name
        };
    }
    parser.index = start;
    try {
        var node = parseExpressionAt(parser.template, parser.index, {
            ecmaVersion: 9,
            preserveParens: true
        });
        parser.index = node.end;
        return node;
    }
    catch (err) {
        parser.acornError(err);
    }
}

/* eslint-disable no-underscore-dangle */

function injectDynamicImport(acorn) {
  const tt = acorn.tokTypes;

  // NOTE: This allows `yield import()` to parse correctly.
  tt._import.startsExpr = true;

  function parseDynamicImport() {
    const node = this.startNode();
    this.next();
    if (this.type !== tt.parenL) {
      this.unexpected();
    }
    return this.finishNode(node, 'Import');
  }

  function peekNext() {
    return this.input[this.pos];
  }

  // eslint-disable-next-line no-param-reassign
  acorn.plugins.dynamicImport = function dynamicImportPlugin(instance) {
    instance.extend('parseStatement', nextMethod => (
      function parseStatement(...args) {
        const node = this.startNode();
        if (this.type === tt._import) {
          const nextToken = peekNext.call(this);
          if (nextToken === tt.parenL.label) {
            const expr = this.parseExpression();
            return this.parseExpressionStatement(node, expr);
          }
        }

        return nextMethod.apply(this, args);
      }
    ));

    instance.extend('parseExprAtom', nextMethod => (
      function parseExprAtom(refDestructuringErrors) {
        if (this.type === tt._import) {
          return parseDynamicImport.call(this);
        }
        return nextMethod.call(this, refDestructuringErrors);
      }
    ));
  };

  return acorn;
}

function repeat(str, i) {
    var result = '';
    while (i--)
        result += str;
    return result;
}

var scriptClosingTag = '</script>';
injectDynamicImport(acorn);
function readScript(parser, start, attributes) {
    var scriptStart = parser.index;
    var scriptEnd = parser.template.indexOf(scriptClosingTag, scriptStart);
    if (scriptEnd === -1)
        parser.error("<script> must have a closing tag");
    var source = repeat(' ', scriptStart) + parser.template.slice(scriptStart, scriptEnd);
    parser.index = scriptEnd + scriptClosingTag.length;
    var ast;
    try {
        ast = parse$1(source, {
            ecmaVersion: 9,
            sourceType: 'module',
            plugins: {
                dynamicImport: true
            }
        });
    }
    catch (err) {
        parser.acornError(err);
    }
    if (!ast.body.length)
        return null;
    ast.start = scriptStart;
    return {
        start: start,
        end: parser.index,
        attributes: attributes,
        content: ast
    };
}

'use strict';

var MAX_LINE_LENGTH = 100;
var OFFSET_CORRECTION = 60;
var TAB_REPLACEMENT = '    ';

function sourceFragment(error, extraLines) {
    function processLines(start, end) {
        return lines.slice(start, end).map(function(line, idx) {
            var num = String(start + idx + 1);

            while (num.length < maxNumLength) {
                num = ' ' + num;
            }

            return num + ' |' + line;
        }).join('\n');
    }

    var lines = error.source.split(/\n|\r\n?|\f/);
    var line = error.line;
    var column = error.column;
    var startLine = Math.max(1, line - extraLines) - 1;
    var endLine = Math.min(line + extraLines, lines.length + 1);
    var maxNumLength = Math.max(4, String(endLine).length) + 1;
    var cutLeft = 0;

    // correct column according to replaced tab before column
    column += (TAB_REPLACEMENT.length - 1) * (lines[line - 1].substr(0, column - 1).match(/\t/g) || []).length;

    if (column > MAX_LINE_LENGTH) {
        cutLeft = column - OFFSET_CORRECTION + 3;
        column = OFFSET_CORRECTION - 2;
    }

    for (var i = startLine; i <= endLine; i++) {
        if (i >= 0 && i < lines.length) {
            lines[i] = lines[i].replace(/\t/g, TAB_REPLACEMENT);
            lines[i] =
                (cutLeft > 0 && lines[i].length > cutLeft ? '\u2026' : '') +
                lines[i].substr(cutLeft, MAX_LINE_LENGTH - 2) +
                (lines[i].length > cutLeft + MAX_LINE_LENGTH - 1 ? '\u2026' : '');
        }
    }

    return [
        processLines(startLine, line),
        new Array(column + maxNumLength + 2).join('-') + '^',
        processLines(line, endLine)
    ].join('\n');
}

var CssSyntaxError = function(message, source, offset, line, column) {
    // some VMs prevent setting line/column otherwise (iOS Safari 10 even throw an exception)
    var error = Object.create(SyntaxError.prototype);

    error.name = 'CssSyntaxError';
    error.message = message;
    error.stack = (new Error().stack || '').replace(/^.+\n/, error.name + ': ' + error.message + '\n');
    error.source = source;
    error.offset = offset;
    error.line = line;
    error.column = column;

    error.sourceFragment = function(extraLines) {
        return sourceFragment(error, isNaN(extraLines) ? 0 : extraLines);
    };
    Object.defineProperty(error, 'formattedMessage', {
        get: function() {
            return (
                'Parse error: ' + error.message + '\n' +
                sourceFragment(error, 2)
            );
        }
    });

    // for backward capability
    error.parseError = {
        offset: offset,
        line: line,
        column: column
    };

    return error;
};

var error = CssSyntaxError;

'use strict';

// token types (note: value shouldn't intersect with used char codes)
var WHITESPACE$1 = 1;
var IDENTIFIER$1 = 2;
var NUMBER$1 = 3;
var STRING$1 = 4;
var COMMENT$1 = 5;
var PUNCTUATOR$1 = 6;
var CDO$1 = 7;
var CDC$1 = 8;
var ATRULE$1 = 14;
var FUNCTION$1 = 15;
var URL$1 = 16;
var RAW$1 = 17;

var TAB = 9;
var N$1 = 10;
var F$1 = 12;
var R$1 = 13;
var SPACE = 32;

var TYPE$1 = {
    WhiteSpace:   WHITESPACE$1,
    Identifier:   IDENTIFIER$1,
    Number:           NUMBER$1,
    String:           STRING$1,
    Comment:         COMMENT$1,
    Punctuator:   PUNCTUATOR$1,
    CDO:                 CDO$1,
    CDC:                 CDC$1,
    Atrule:           ATRULE$1,
    Function:       FUNCTION$1,
    Url:                 URL$1,
    Raw:                 RAW$1,

    ExclamationMark:      33,  // !
    QuotationMark:        34,  // "
    NumberSign:           35,  // #
    DollarSign:           36,  // $
    PercentSign:          37,  // %
    Ampersand:            38,  // &
    Apostrophe:           39,  // '
    LeftParenthesis:      40,  // (
    RightParenthesis:     41,  // )
    Asterisk:             42,  // *
    PlusSign:             43,  // +
    Comma:                44,  // ,
    HyphenMinus:          45,  // -
    FullStop:             46,  // .
    Solidus:              47,  // /
    Colon:                58,  // :
    Semicolon:            59,  // ;
    LessThanSign:         60,  // <
    EqualsSign:           61,  // =
    GreaterThanSign:      62,  // >
    QuestionMark:         63,  // ?
    CommercialAt:         64,  // @
    LeftSquareBracket:    91,  // [
    Backslash:            92,  // \
    RightSquareBracket:   93,  // ]
    CircumflexAccent:     94,  // ^
    LowLine:              95,  // _
    GraveAccent:          96,  // `
    LeftCurlyBracket:    123,  // {
    VerticalLine:        124,  // |
    RightCurlyBracket:   125,  // }
    Tilde:               126   // ~
};

var NAME$1 = Object.keys(TYPE$1).reduce(function(result, key) {
    result[TYPE$1[key]] = key;
    return result;
}, {});

// https://drafts.csswg.org/css-syntax/#tokenizer-definitions
// > non-ASCII code point
// >   A code point with a value equal to or greater than U+0080 <control>
// > name-start code point
// >   A letter, a non-ASCII code point, or U+005F LOW LINE (_).
// > name code point
// >   A name-start code point, a digit, or U+002D HYPHEN-MINUS (-)
// That means only ASCII code points has a special meaning and we a maps for 0..127 codes only
var SafeUint32Array$1 = typeof Uint32Array !== 'undefined' ? Uint32Array : Array; // fallback on Array when TypedArray is not supported
var SYMBOL_TYPE$1 = new SafeUint32Array$1(0x80);
var PUNCTUATION = new SafeUint32Array$1(0x80);
var STOP_URL_RAW = new SafeUint32Array$1(0x80);

for (var i = 0; i < SYMBOL_TYPE$1.length; i++) {
    SYMBOL_TYPE$1[i] = IDENTIFIER$1;
}

// fill categories
[
    TYPE$1.ExclamationMark,    // !
    TYPE$1.QuotationMark,      // "
    TYPE$1.NumberSign,         // #
    TYPE$1.DollarSign,         // $
    TYPE$1.PercentSign,        // %
    TYPE$1.Ampersand,          // &
    TYPE$1.Apostrophe,         // '
    TYPE$1.LeftParenthesis,    // (
    TYPE$1.RightParenthesis,   // )
    TYPE$1.Asterisk,           // *
    TYPE$1.PlusSign,           // +
    TYPE$1.Comma,              // ,
    TYPE$1.HyphenMinus,        // -
    TYPE$1.FullStop,           // .
    TYPE$1.Solidus,            // /
    TYPE$1.Colon,              // :
    TYPE$1.Semicolon,          // ;
    TYPE$1.LessThanSign,       // <
    TYPE$1.EqualsSign,         // =
    TYPE$1.GreaterThanSign,    // >
    TYPE$1.QuestionMark,       // ?
    TYPE$1.CommercialAt,       // @
    TYPE$1.LeftSquareBracket,  // [
    // TYPE.Backslash,          // \
    TYPE$1.RightSquareBracket, // ]
    TYPE$1.CircumflexAccent,   // ^
    // TYPE.LowLine,            // _
    TYPE$1.GraveAccent,        // `
    TYPE$1.LeftCurlyBracket,   // {
    TYPE$1.VerticalLine,       // |
    TYPE$1.RightCurlyBracket,  // }
    TYPE$1.Tilde               // ~
].forEach(function(key) {
    SYMBOL_TYPE$1[Number(key)] = PUNCTUATOR$1;
    PUNCTUATION[Number(key)] = PUNCTUATOR$1;
});

for (var i = 48; i <= 57; i++) {
    SYMBOL_TYPE$1[i] = NUMBER$1;
}

SYMBOL_TYPE$1[SPACE] = WHITESPACE$1;
SYMBOL_TYPE$1[TAB] = WHITESPACE$1;
SYMBOL_TYPE$1[N$1] = WHITESPACE$1;
SYMBOL_TYPE$1[R$1] = WHITESPACE$1;
SYMBOL_TYPE$1[F$1] = WHITESPACE$1;

SYMBOL_TYPE$1[TYPE$1.Apostrophe] = STRING$1;
SYMBOL_TYPE$1[TYPE$1.QuotationMark] = STRING$1;

STOP_URL_RAW[SPACE] = 1;
STOP_URL_RAW[TAB] = 1;
STOP_URL_RAW[N$1] = 1;
STOP_URL_RAW[R$1] = 1;
STOP_URL_RAW[F$1] = 1;
STOP_URL_RAW[TYPE$1.Apostrophe] = 1;
STOP_URL_RAW[TYPE$1.QuotationMark] = 1;
STOP_URL_RAW[TYPE$1.LeftParenthesis] = 1;
STOP_URL_RAW[TYPE$1.RightParenthesis] = 1;

// whitespace is punctuation ...
PUNCTUATION[SPACE] = PUNCTUATOR$1;
PUNCTUATION[TAB] = PUNCTUATOR$1;
PUNCTUATION[N$1] = PUNCTUATOR$1;
PUNCTUATION[R$1] = PUNCTUATOR$1;
PUNCTUATION[F$1] = PUNCTUATOR$1;
// ... hyper minus is not
PUNCTUATION[TYPE$1.HyphenMinus] = 0;

var _const = {
    TYPE: TYPE$1,
    NAME: NAME$1,

    SYMBOL_TYPE: SYMBOL_TYPE$1,
    PUNCTUATION: PUNCTUATION,
    STOP_URL_RAW: STOP_URL_RAW
};

'use strict';


var PUNCTUATION$1 = _const.PUNCTUATION;
var STOP_URL_RAW$1 = _const.STOP_URL_RAW;
var TYPE$2 = _const.TYPE;
var FULLSTOP$1 = TYPE$2.FullStop;
var PLUSSIGN$1 = TYPE$2.PlusSign;
var HYPHENMINUS$1 = TYPE$2.HyphenMinus;
var PUNCTUATOR$2 = TYPE$2.Punctuator;
var TAB$1 = 9;
var N$2 = 10;
var F$2 = 12;
var R$2 = 13;
var SPACE$1 = 32;
var BACK_SLASH = 92;
var E = 101; // 'e'.charCodeAt(0)

function firstCharOffset$1(source) {
    // detect BOM (https://en.wikipedia.org/wiki/Byte_order_mark)
    if (source.charCodeAt(0) === 0xFEFF ||  // UTF-16BE
        source.charCodeAt(0) === 0xFFFE) {  // UTF-16LE
        return 1;
    }

    return 0;
}

function isHex(code) {
    return (code >= 48 && code <= 57) || // 0 .. 9
           (code >= 65 && code <= 70) || // A .. F
           (code >= 97 && code <= 102);  // a .. f
}

function isNumber$1(code) {
    return code >= 48 && code <= 57;
}

function isNewline(source, offset, code) {
    if (code === N$2 || code === F$2 || code === R$2) {
        if (code === R$2 && offset + 1 < source.length && source.charCodeAt(offset + 1) === N$2) {
            return 2;
        }

        return 1;
    }

    return 0;
}

function cmpChar(testStr, offset, referenceCode) {
    var code = testStr.charCodeAt(offset);

    // code.toLowerCase()
    if (code >= 65 && code <= 90) {
        code = code | 32;
    }

    return code === referenceCode;
}

function cmpStr$1(testStr, start, end, referenceStr) {
    if (end - start !== referenceStr.length) {
        return false;
    }

    if (start < 0 || end > testStr.length) {
        return false;
    }

    for (var i = start; i < end; i++) {
        var testCode = testStr.charCodeAt(i);
        var refCode = referenceStr.charCodeAt(i - start);

        // testStr[i].toLowerCase()
        if (testCode >= 65 && testCode <= 90) {
            testCode = testCode | 32;
        }

        if (testCode !== refCode) {
            return false;
        }
    }

    return true;
}

function endsWith(testStr, referenceStr) {
    return cmpStr$1(testStr, testStr.length - referenceStr.length, testStr.length, referenceStr);
}

function findLastNonSpaceLocation$1(scanner) {
    for (var i = scanner.source.length - 1; i >= 0; i--) {
        var code = scanner.source.charCodeAt(i);

        if (code !== SPACE$1 && code !== TAB$1 && code !== R$2 && code !== N$2 && code !== F$2) {
            break;
        }
    }

    return scanner.getLocation(i + 1);
}

function findWhiteSpaceEnd$1(source, offset) {
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        if (code !== SPACE$1 && code !== TAB$1 && code !== R$2 && code !== N$2 && code !== F$2) {
            break;
        }
    }

    return offset;
}

function findCommentEnd$1(source, offset) {
    var commentEnd = source.indexOf('*/', offset);

    if (commentEnd === -1) {
        return source.length;
    }

    return commentEnd + 2;
}

function findStringEnd$1(source, offset, quote) {
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        // TODO: bad string
        if (code === BACK_SLASH) {
            offset++;
        } else if (code === quote) {
            offset++;
            break;
        }
    }

    return offset;
}

function findDecimalNumberEnd(source, offset) {
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        if (code < 48 || code > 57) {  // not a 0 .. 9
            break;
        }
    }

    return offset;
}

function findNumberEnd$1(source, offset, allowFraction) {
    var code;

    offset = findDecimalNumberEnd(source, offset);

    // fraction: .\d+
    if (allowFraction && offset + 1 < source.length && source.charCodeAt(offset) === FULLSTOP$1) {
        code = source.charCodeAt(offset + 1);

        if (isNumber$1(code)) {
            offset = findDecimalNumberEnd(source, offset + 1);
        }
    }

    // exponent: e[+-]\d+
    if (offset + 1 < source.length) {
        if ((source.charCodeAt(offset) | 32) === E) { // case insensitive check for `e`
            code = source.charCodeAt(offset + 1);

            if (code === PLUSSIGN$1 || code === HYPHENMINUS$1) {
                if (offset + 2 < source.length) {
                    code = source.charCodeAt(offset + 2);
                }
            }

            if (isNumber$1(code)) {
                offset = findDecimalNumberEnd(source, offset + 2);
            }
        }
    }

    return offset;
}

// skip escaped unicode sequence that can ends with space
// [0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?
function findEscaseEnd(source, offset) {
    for (var i = 0; i < 7 && offset + i < source.length; i++) {
        var code = source.charCodeAt(offset + i);

        if (i !== 6 && isHex(code)) {
            continue;
        }

        if (i > 0) {
            offset += i - 1 + isNewline(source, offset + i, code);
            if (code === SPACE$1 || code === TAB$1) {
                offset++;
            }
        }

        break;
    }

    return offset;
}

function findIdentifierEnd$1(source, offset) {
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        if (code === BACK_SLASH) {
            offset = findEscaseEnd(source, offset + 1);
        } else if (code < 0x80 && PUNCTUATION$1[code] === PUNCTUATOR$2) {
            break;
        }
    }

    return offset;
}

function findUrlRawEnd$1(source, offset) {
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        if (code === BACK_SLASH) {
            offset = findEscaseEnd(source, offset + 1);
        } else if (code < 0x80 && STOP_URL_RAW$1[code] === 1) {
            break;
        }
    }

    return offset;
}

var utils = {
    firstCharOffset: firstCharOffset$1,

    isHex: isHex,
    isNumber: isNumber$1,
    isNewline: isNewline,

    cmpChar: cmpChar,
    cmpStr: cmpStr$1,
    endsWith: endsWith,

    findLastNonSpaceLocation: findLastNonSpaceLocation$1,
    findWhiteSpaceEnd: findWhiteSpaceEnd$1,
    findCommentEnd: findCommentEnd$1,
    findStringEnd: findStringEnd$1,
    findDecimalNumberEnd: findDecimalNumberEnd,
    findNumberEnd: findNumberEnd$1,
    findEscaseEnd: findEscaseEnd,
    findIdentifierEnd: findIdentifierEnd$1,
    findUrlRawEnd: findUrlRawEnd$1
};

'use strict';




var TYPE = _const.TYPE;
var NAME = _const.NAME;
var SYMBOL_TYPE = _const.SYMBOL_TYPE;


var firstCharOffset = utils.firstCharOffset;
var cmpStr = utils.cmpStr;
var isNumber = utils.isNumber;
var findLastNonSpaceLocation = utils.findLastNonSpaceLocation;
var findWhiteSpaceEnd = utils.findWhiteSpaceEnd;
var findCommentEnd = utils.findCommentEnd;
var findStringEnd = utils.findStringEnd;
var findNumberEnd = utils.findNumberEnd;
var findIdentifierEnd = utils.findIdentifierEnd;
var findUrlRawEnd = utils.findUrlRawEnd;

var NULL = 0;
var WHITESPACE = TYPE.WhiteSpace;
var IDENTIFIER = TYPE.Identifier;
var NUMBER = TYPE.Number;
var STRING = TYPE.String;
var COMMENT = TYPE.Comment;
var PUNCTUATOR = TYPE.Punctuator;
var CDO = TYPE.CDO;
var CDC = TYPE.CDC;
var ATRULE = TYPE.Atrule;
var FUNCTION = TYPE.Function;
var URL = TYPE.Url;
var RAW = TYPE.Raw;

var N = 10;
var F = 12;
var R = 13;
var STAR = TYPE.Asterisk;
var SLASH = TYPE.Solidus;
var FULLSTOP = TYPE.FullStop;
var PLUSSIGN = TYPE.PlusSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var GREATERTHANSIGN = TYPE.GreaterThanSign;
var LESSTHANSIGN = TYPE.LessThanSign;
var EXCLAMATIONMARK = TYPE.ExclamationMark;
var COMMERCIALAT = TYPE.CommercialAt;
var QUOTATIONMARK = TYPE.QuotationMark;
var APOSTROPHE = TYPE.Apostrophe;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;

var MIN_BUFFER_SIZE = 16 * 1024;
var OFFSET_MASK = 0x00FFFFFF;
var TYPE_SHIFT = 24;
var SafeUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : Array; // fallback on Array when TypedArray is not supported

function computeLinesAndColumns(tokenizer, source) {
    var sourceLength = source.length;
    var start = firstCharOffset(source);
    var lines = tokenizer.lines;
    var line = tokenizer.startLine;
    var columns = tokenizer.columns;
    var column = tokenizer.startColumn;

    if (lines === null || lines.length < sourceLength + 1) {
        lines = new SafeUint32Array(Math.max(sourceLength + 1024, MIN_BUFFER_SIZE));
        columns = new SafeUint32Array(lines.length);
    }

    for (var i = start; i < sourceLength; i++) {
        var code = source.charCodeAt(i);

        lines[i] = line;
        columns[i] = column++;

        if (code === N || code === R || code === F) {
            if (code === R && i + 1 < sourceLength && source.charCodeAt(i + 1) === N) {
                i++;
                lines[i] = line;
                columns[i] = column;
            }

            line++;
            column = 1;
        }
    }

    lines[i] = line;
    columns[i] = column;

    tokenizer.linesAnsColumnsComputed = true;
    tokenizer.lines = lines;
    tokenizer.columns = columns;
}

function tokenLayout(tokenizer, source, startPos) {
    var sourceLength = source.length;
    var offsetAndType = tokenizer.offsetAndType;
    var balance = tokenizer.balance;
    var tokenCount = 0;
    var prevType = 0;
    var offset = startPos;
    var anchor = 0;
    var balanceCloseCode = 0;
    var balanceStart = 0;
    var balancePrev = 0;

    if (offsetAndType === null || offsetAndType.length < sourceLength + 1) {
        offsetAndType = new SafeUint32Array(sourceLength + 1024);
        balance = new SafeUint32Array(sourceLength + 1024);
    }

    while (offset < sourceLength) {
        var code = source.charCodeAt(offset);
        var type = code < 0x80 ? SYMBOL_TYPE[code] : IDENTIFIER;

        balance[tokenCount] = sourceLength;

        switch (type) {
            case WHITESPACE:
                offset = findWhiteSpaceEnd(source, offset + 1);
                break;

            case PUNCTUATOR:
                switch (code) {
                    case balanceCloseCode:
                        balancePrev = balanceStart & OFFSET_MASK;
                        balanceStart = balance[balancePrev];
                        balanceCloseCode = balanceStart >> TYPE_SHIFT;
                        balance[tokenCount] = balancePrev;
                        balance[balancePrev++] = tokenCount;
                        for (; balancePrev < tokenCount; balancePrev++) {
                            if (balance[balancePrev] === sourceLength) {
                                balance[balancePrev] = tokenCount;
                            }
                        }
                        break;

                    case LEFTSQUAREBRACKET:
                        balance[tokenCount] = balanceStart;
                        balanceCloseCode = RIGHTSQUAREBRACKET;
                        balanceStart = (balanceCloseCode << TYPE_SHIFT) | tokenCount;
                        break;

                    case LEFTCURLYBRACKET:
                        balance[tokenCount] = balanceStart;
                        balanceCloseCode = RIGHTCURLYBRACKET;
                        balanceStart = (balanceCloseCode << TYPE_SHIFT) | tokenCount;
                        break;

                    case LEFTPARENTHESIS:
                        balance[tokenCount] = balanceStart;
                        balanceCloseCode = RIGHTPARENTHESIS;
                        balanceStart = (balanceCloseCode << TYPE_SHIFT) | tokenCount;
                        break;
                }

                // /*
                if (code === STAR && prevType === SLASH) {
                    type = COMMENT;
                    offset = findCommentEnd(source, offset + 1);
                    tokenCount--; // rewrite prev token
                    break;
                }

                // edge case for -.123 and +.123
                if (code === FULLSTOP && (prevType === PLUSSIGN || prevType === HYPHENMINUS)) {
                    if (offset + 1 < sourceLength && isNumber(source.charCodeAt(offset + 1))) {
                        type = NUMBER;
                        offset = findNumberEnd(source, offset + 2, false);
                        tokenCount--; // rewrite prev token
                        break;
                    }
                }

                // <!--
                if (code === EXCLAMATIONMARK && prevType === LESSTHANSIGN) {
                    if (offset + 2 < sourceLength &&
                        source.charCodeAt(offset + 1) === HYPHENMINUS &&
                        source.charCodeAt(offset + 2) === HYPHENMINUS) {
                        type = CDO;
                        offset = offset + 3;
                        tokenCount--; // rewrite prev token
                        break;
                    }
                }

                // -->
                if (code === HYPHENMINUS && prevType === HYPHENMINUS) {
                    if (offset + 1 < sourceLength && source.charCodeAt(offset + 1) === GREATERTHANSIGN) {
                        type = CDC;
                        offset = offset + 2;
                        tokenCount--; // rewrite prev token
                        break;
                    }
                }

                // ident(
                if (code === LEFTPARENTHESIS && prevType === IDENTIFIER) {
                    offset = offset + 1;
                    tokenCount--; // rewrite prev token
                    balance[tokenCount] = balance[tokenCount + 1];
                    balanceStart--;

                    // 4 char length identifier and equal to `url(` (case insensitive)
                    if (offset - anchor === 4 && cmpStr(source, anchor, offset, 'url(')) {
                        // special case for url() because it can contain any symbols sequence with few exceptions
                        anchor = findWhiteSpaceEnd(source, offset);
                        code = source.charCodeAt(anchor);
                        if (code !== LEFTPARENTHESIS &&
                            code !== RIGHTPARENTHESIS &&
                            code !== QUOTATIONMARK &&
                            code !== APOSTROPHE) {
                            // url(
                            offsetAndType[tokenCount++] = (URL << TYPE_SHIFT) | offset;
                            balance[tokenCount] = sourceLength;

                            // ws*
                            if (anchor !== offset) {
                                offsetAndType[tokenCount++] = (WHITESPACE << TYPE_SHIFT) | anchor;
                                balance[tokenCount] = sourceLength;
                            }

                            // raw
                            type = RAW;
                            offset = findUrlRawEnd(source, anchor);
                        } else {
                            type = URL;
                        }
                    } else {
                        type = FUNCTION;
                    }
                    break;
                }

                type = code;
                offset = offset + 1;
                break;

            case NUMBER:
                offset = findNumberEnd(source, offset + 1, prevType !== FULLSTOP);

                // merge number with a preceding dot, dash or plus
                if (prevType === FULLSTOP ||
                    prevType === HYPHENMINUS ||
                    prevType === PLUSSIGN) {
                    tokenCount--; // rewrite prev token
                }

                break;

            case STRING:
                offset = findStringEnd(source, offset + 1, code);
                break;

            default:
                anchor = offset;
                offset = findIdentifierEnd(source, offset);

                // merge identifier with a preceding dash
                if (prevType === HYPHENMINUS) {
                    // rewrite prev token
                    tokenCount--;
                    // restore prev prev token type
                    // for case @-prefix-ident
                    prevType = tokenCount === 0 ? 0 : offsetAndType[tokenCount - 1] >> TYPE_SHIFT;
                }

                if (prevType === COMMERCIALAT) {
                    // rewrite prev token and change type to <at-keyword-token>
                    tokenCount--;
                    type = ATRULE;
                }
        }

        offsetAndType[tokenCount++] = (type << TYPE_SHIFT) | offset;
        prevType = type;
    }

    // finalize arrays
    offsetAndType[tokenCount] = offset;
    balance[tokenCount] = sourceLength;
    while (balanceStart !== 0) {
        balancePrev = balanceStart & OFFSET_MASK;
        balanceStart = balance[balancePrev];
        balance[balancePrev] = sourceLength;
    }

    tokenizer.offsetAndType = offsetAndType;
    tokenizer.tokenCount = tokenCount;
    tokenizer.balance = balance;
}

//
// tokenizer
//

var Tokenizer = function(source, startOffset, startLine, startColumn) {
    this.offsetAndType = null;
    this.balance = null;
    this.lines = null;
    this.columns = null;

    this.setSource(source, startOffset, startLine, startColumn);
};

Tokenizer.prototype = {
    setSource: function(source, startOffset, startLine, startColumn) {
        var safeSource = String(source || '');
        var start = firstCharOffset(safeSource);

        this.source = safeSource;
        this.firstCharOffset = start;
        this.startOffset = typeof startOffset === 'undefined' ? 0 : startOffset;
        this.startLine = typeof startLine === 'undefined' ? 1 : startLine;
        this.startColumn = typeof startColumn === 'undefined' ? 1 : startColumn;
        this.linesAnsColumnsComputed = false;

        this.eof = false;
        this.currentToken = -1;
        this.tokenType = 0;
        this.tokenStart = start;
        this.tokenEnd = start;

        tokenLayout(this, safeSource, start);
        this.next();
    },

    lookupType: function(offset) {
        offset += this.currentToken;

        if (offset < this.tokenCount) {
            return this.offsetAndType[offset] >> TYPE_SHIFT;
        }

        return NULL;
    },
    lookupNonWSType: function(offset) {
        offset += this.currentToken;

        for (var type; offset < this.tokenCount; offset++) {
            type = this.offsetAndType[offset] >> TYPE_SHIFT;

            if (type !== WHITESPACE) {
                return type;
            }
        }

        return NULL;
    },
    lookupValue: function(offset, referenceStr) {
        offset += this.currentToken;

        if (offset < this.tokenCount) {
            return cmpStr(
                this.source,
                this.offsetAndType[offset - 1] & OFFSET_MASK,
                this.offsetAndType[offset] & OFFSET_MASK,
                referenceStr
            );
        }

        return false;
    },
    getTokenStart: function(tokenNum) {
        if (tokenNum === this.currentToken) {
            return this.tokenStart;
        }

        if (tokenNum > 0) {
            return tokenNum < this.tokenCount
                ? this.offsetAndType[tokenNum - 1] & OFFSET_MASK
                : this.offsetAndType[this.tokenCount] & OFFSET_MASK;
        }

        return this.firstCharOffset;
    },
    getOffsetExcludeWS: function() {
        if (this.currentToken > 0) {
            if ((this.offsetAndType[this.currentToken - 1] >> TYPE_SHIFT) === WHITESPACE) {
                return this.currentToken > 1
                    ? this.offsetAndType[this.currentToken - 2] & OFFSET_MASK
                    : this.firstCharOffset;
            }
        }
        return this.tokenStart;
    },
    getRawLength: function(startToken, endTokenType1, endTokenType2, includeTokenType2) {
        var cursor = startToken;
        var balanceEnd;

        loop:
        for (; cursor < this.tokenCount; cursor++) {
            balanceEnd = this.balance[cursor];

            // belance end points to offset before start
            if (balanceEnd < startToken) {
                break loop;
            }

            // check token is stop type
            switch (this.offsetAndType[cursor] >> TYPE_SHIFT) {
                case endTokenType1:
                    break loop;

                case endTokenType2:
                    if (includeTokenType2) {
                        cursor++;
                    }
                    break loop;

                default:
                    // fast forward to the end of balanced block
                    if (this.balance[balanceEnd] === cursor) {
                        cursor = balanceEnd;
                    }
            }

        }

        return cursor - this.currentToken;
    },

    getTokenValue: function() {
        return this.source.substring(this.tokenStart, this.tokenEnd);
    },
    substrToCursor: function(start) {
        return this.source.substring(start, this.tokenStart);
    },

    skipWS: function() {
        for (var i = this.currentToken, skipTokenCount = 0; i < this.tokenCount; i++, skipTokenCount++) {
            if ((this.offsetAndType[i] >> TYPE_SHIFT) !== WHITESPACE) {
                break;
            }
        }

        if (skipTokenCount > 0) {
            this.skip(skipTokenCount);
        }
    },
    skipSC: function() {
        while (this.tokenType === WHITESPACE || this.tokenType === COMMENT) {
            this.next();
        }
    },
    skip: function(tokenCount) {
        var next = this.currentToken + tokenCount;

        if (next < this.tokenCount) {
            this.currentToken = next;
            this.tokenStart = this.offsetAndType[next - 1] & OFFSET_MASK;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_SHIFT;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.currentToken = this.tokenCount;
            this.next();
        }
    },
    next: function() {
        var next = this.currentToken + 1;

        if (next < this.tokenCount) {
            this.currentToken = next;
            this.tokenStart = this.tokenEnd;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_SHIFT;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.currentToken = this.tokenCount;
            this.eof = true;
            this.tokenType = NULL;
            this.tokenStart = this.tokenEnd = this.source.length;
        }
    },

    eat: function(tokenType) {
        if (this.tokenType !== tokenType) {
            var offset = this.tokenStart;
            var message = NAME[tokenType] + ' is expected';

            // tweak message and offset
            if (tokenType === IDENTIFIER) {
                // when identifier is expected but there is a function or url
                if (this.tokenType === FUNCTION || this.tokenType === URL) {
                    offset = this.tokenEnd - 1;
                    message += ' but function found';
                }
            } else {
                // when test type is part of another token show error for current position + 1
                // e.g. eat(HYPHENMINUS) will fail on "-foo", but pointing on "-" is odd
                if (this.source.charCodeAt(this.tokenStart) === tokenType) {
                    offset = offset + 1;
                }
            }

            this.error(message, offset);
        }

        this.next();
    },
    eatNonWS: function(tokenType) {
        this.skipWS();
        this.eat(tokenType);
    },

    consume: function(tokenType) {
        var value = this.getTokenValue();

        this.eat(tokenType);

        return value;
    },
    consumeFunctionName: function() {
        var name = this.source.substring(this.tokenStart, this.tokenEnd - 1);

        this.eat(FUNCTION);

        return name;
    },
    consumeNonWS: function(tokenType) {
        this.skipWS();

        return this.consume(tokenType);
    },

    expectIdentifier: function(name) {
        if (this.tokenType !== IDENTIFIER || cmpStr(this.source, this.tokenStart, this.tokenEnd, name) === false) {
            this.error('Identifier `' + name + '` is expected');
        }

        this.next();
    },

    getLocation: function(offset, filename) {
        if (!this.linesAnsColumnsComputed) {
            computeLinesAndColumns(this, this.source);
        }

        return {
            source: filename,
            offset: this.startOffset + offset,
            line: this.lines[offset],
            column: this.columns[offset]
        };
    },

    getLocationRange: function(start, end, filename) {
        if (!this.linesAnsColumnsComputed) {
            computeLinesAndColumns(this, this.source);
        }

        return {
            source: filename,
            start: {
                offset: this.startOffset + start,
                line: this.lines[start],
                column: this.columns[start]
            },
            end: {
                offset: this.startOffset + end,
                line: this.lines[end],
                column: this.columns[end]
            }
        };
    },

    error: function(message, offset) {
        var location = typeof offset !== 'undefined' && offset < this.source.length
            ? this.getLocation(offset)
            : this.eof
                ? findLastNonSpaceLocation(this)
                : this.getLocation(this.tokenStart);

        throw new error(
            message || 'Unexpected input',
            this.source,
            location.offset,
            location.line,
            location.column
        );
    },

    dump: function() {
        var offset = 0;

        return Array.prototype.slice.call(this.offsetAndType, 0, this.tokenCount).map(function(item, idx) {
            var start = offset;
            var end = item & OFFSET_MASK;

            offset = end;

            return {
                idx: idx,
                type: NAME[item >> TYPE_SHIFT],
                chunk: this.source.substring(start, end),
                balance: this.balance[idx]
            };
        }, this);
    }
};

// extend with error class
Tokenizer.CssSyntaxError = error;

// extend tokenizer with constants
Object.keys(_const).forEach(function(key) {
    Tokenizer[key] = _const[key];
});

// extend tokenizer with static methods from utils
Object.keys(utils).forEach(function(key) {
    Tokenizer[key] = utils[key];
});

// warm up tokenizer to elimitate code branches that never execute
// fix soft deoptimizations (insufficient type feedback)
new Tokenizer('\n\r\r\n\f<!---->//""\'\'/*\r\n\f*/1a;.\\31\t\+2{url(a);func();+1.2e3 -.4e-5 .6e+7}').getLocation();

var Tokenizer_1 = Tokenizer;

var tokenizer$1 = Tokenizer_1;

'use strict';

//
//            item        item        item        item
//          /------\    /------\    /------\    /------\
//          | data |    | data |    | data |    | data |
//  null <--+-prev |<---+-prev |<---+-prev |<---+-prev |
//          | next-+--->| next-+--->| next-+--->| next-+--> null
//          \------/    \------/    \------/    \------/
//             ^                                    ^
//             |                list                |
//             |              /------\              |
//             \--------------+-head |              |
//                            | tail-+--------------/
//                            \------/
//

function createItem(data) {
    return {
        prev: null,
        next: null,
        data: data
    };
}

var cursors = null;
var List = function() {
    this.cursor = null;
    this.head = null;
    this.tail = null;
};

List.createItem = createItem;
List.prototype.createItem = createItem;

List.prototype.getSize = function() {
    var size = 0;
    var cursor = this.head;

    while (cursor) {
        size++;
        cursor = cursor.next;
    }

    return size;
};

List.prototype.fromArray = function(array) {
    var cursor = null;

    this.head = null;

    for (var i = 0; i < array.length; i++) {
        var item = createItem(array[i]);

        if (cursor !== null) {
            cursor.next = item;
        } else {
            this.head = item;
        }

        item.prev = cursor;
        cursor = item;
    }

    this.tail = cursor;

    return this;
};

List.prototype.toArray = function() {
    var cursor = this.head;
    var result = [];

    while (cursor) {
        result.push(cursor.data);
        cursor = cursor.next;
    }

    return result;
};

List.prototype.toJSON = List.prototype.toArray;

List.prototype.isEmpty = function() {
    return this.head === null;
};

List.prototype.first = function() {
    return this.head && this.head.data;
};

List.prototype.last = function() {
    return this.tail && this.tail.data;
};

function allocateCursor(node, prev, next) {
    var cursor;

    if (cursors !== null) {
        cursor = cursors;
        cursors = cursors.cursor;
        cursor.prev = prev;
        cursor.next = next;
        cursor.cursor = node.cursor;
    } else {
        cursor = {
            prev: prev,
            next: next,
            cursor: node.cursor
        };
    }

    node.cursor = cursor;

    return cursor;
}

function releaseCursor(node) {
    var cursor = node.cursor;

    node.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursors;
    cursors = cursor;
}

List.prototype.each = function(fn, context) {
    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, null, this.head);

    while (cursor.next !== null) {
        item = cursor.next;
        cursor.next = item.next;

        fn.call(context, item.data, item, this);
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.eachRight = function(fn, context) {
    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, this.tail, null);

    while (cursor.prev !== null) {
        item = cursor.prev;
        cursor.prev = item.prev;

        fn.call(context, item.data, item, this);
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.nextUntil = function(start, fn, context) {
    if (start === null) {
        return;
    }

    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, null, start);

    while (cursor.next !== null) {
        item = cursor.next;
        cursor.next = item.next;

        if (fn.call(context, item.data, item, this)) {
            break;
        }
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.prevUntil = function(start, fn, context) {
    if (start === null) {
        return;
    }

    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, start, null);

    while (cursor.prev !== null) {
        item = cursor.prev;
        cursor.prev = item.prev;

        if (fn.call(context, item.data, item, this)) {
            break;
        }
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.some = function(fn, context) {
    var cursor = this.head;

    if (context === undefined) {
        context = this;
    }

    while (cursor !== null) {
        if (fn.call(context, cursor.data, cursor, this)) {
            return true;
        }

        cursor = cursor.next;
    }

    return false;
};

List.prototype.map = function(fn, context) {
    var result = [];
    var cursor = this.head;

    if (context === undefined) {
        context = this;
    }

    while (cursor !== null) {
        result.push(fn.call(context, cursor.data, cursor, this));
        cursor = cursor.next;
    }

    return result;
};

List.prototype.clear = function() {
    this.head = null;
    this.tail = null;
};

List.prototype.copy = function() {
    var result = new List();
    var cursor = this.head;

    while (cursor !== null) {
        result.insert(createItem(cursor.data));
        cursor = cursor.next;
    }

    return result;
};

List.prototype.updateCursors = function(prevOld, prevNew, nextOld, nextNew) {
    var cursor = this.cursor;

    while (cursor !== null) {
        if (cursor.prev === prevOld) {
            cursor.prev = prevNew;
        }

        if (cursor.next === nextOld) {
            cursor.next = nextNew;
        }

        cursor = cursor.cursor;
    }
};

List.prototype.prepend = function(item) {
    //      head
    //    ^
    // item
    this.updateCursors(null, item, this.head, item);

    // insert to the beginning of the list
    if (this.head !== null) {
        // new item <- first item
        this.head.prev = item;

        // new item -> first item
        item.next = this.head;
    } else {
        // if list has no head, then it also has no tail
        // in this case tail points to the new item
        this.tail = item;
    }

    // head always points to new item
    this.head = item;

    return this;
};

List.prototype.prependData = function(data) {
    return this.prepend(createItem(data));
};

List.prototype.append = function(item) {
    // tail
    //      ^
    //      item
    this.updateCursors(this.tail, item, null, item);

    // insert to the ending of the list
    if (this.tail !== null) {
        // last item -> new item
        this.tail.next = item;

        // last item <- new item
        item.prev = this.tail;
    } else {
        // if list has no tail, then it also has no head
        // in this case head points to new item
        this.head = item;
    }

    // tail always points to new item
    this.tail = item;

    return this;
};

List.prototype.appendData = function(data) {
    return this.append(createItem(data));
};

List.prototype.insert = function(item, before) {
    if (before !== undefined && before !== null) {
        // prev   before
        //      ^
        //     item
        this.updateCursors(before.prev, item, before, item);

        if (before.prev === null) {
            // insert to the beginning of list
            if (this.head !== before) {
                throw new Error('before doesn\'t belong to list');
            }

            // since head points to before therefore list doesn't empty
            // no need to check tail
            this.head = item;
            before.prev = item;
            item.next = before;

            this.updateCursors(null, item);
        } else {

            // insert between two items
            before.prev.next = item;
            item.prev = before.prev;

            before.prev = item;
            item.next = before;
        }
    } else {
        this.append(item);
    }
};

List.prototype.insertData = function(data, before) {
    this.insert(createItem(data), before);
};

List.prototype.remove = function(item) {
    //      item
    //       ^
    // prev     next
    this.updateCursors(item, item.prev, item, item.next);

    if (item.prev !== null) {
        item.prev.next = item.next;
    } else {
        if (this.head !== item) {
            throw new Error('item doesn\'t belong to list');
        }

        this.head = item.next;
    }

    if (item.next !== null) {
        item.next.prev = item.prev;
    } else {
        if (this.tail !== item) {
            throw new Error('item doesn\'t belong to list');
        }

        this.tail = item.prev;
    }

    item.prev = null;
    item.next = null;

    return item;
};

List.prototype.appendList = function(list) {
    // ignore empty lists
    if (list.head === null) {
        return;
    }

    this.updateCursors(this.tail, list.tail, null, list.head);

    // insert to end of the list
    if (this.tail !== null) {
        // if destination list has a tail, then it also has a head,
        // but head doesn't change

        // dest tail -> source head
        this.tail.next = list.head;

        // dest tail <- source head
        list.head.prev = this.tail;
    } else {
        // if list has no a tail, then it also has no a head
        // in this case points head to new item
        this.head = list.head;
    }

    // tail always start point to new item
    this.tail = list.tail;

    list.head = null;
    list.tail = null;
};

List.prototype.insertList = function(list, before) {
    if (before !== undefined && before !== null) {
        // ignore empty lists
        if (list.head === null) {
            return;
        }

        this.updateCursors(before.prev, list.tail, before, list.head);

        // insert in the middle of dist list
        if (before.prev !== null) {
            // before.prev <-> list.head
            before.prev.next = list.head;
            list.head.prev = before.prev;
        } else {
            this.head = list.head;
        }

        before.prev = list.tail;
        list.tail.next = before;

        list.head = null;
        list.tail = null;
    } else {
        this.appendList(list);
    }
};

List.prototype.replace = function(oldItem, newItemOrList) {
    if ('head' in newItemOrList) {
        this.insertList(newItemOrList, oldItem);
    } else {
        this.insert(newItemOrList, oldItem);
    }
    this.remove(oldItem);
};

var list = List;

var TYPE$3 = tokenizer$1.TYPE;
var WHITESPACE$2 = TYPE$3.WhiteSpace;
var COMMENT$2 = TYPE$3.Comment;

var sequence = function readSequence(recognizer) {
    var children = new list();
    var child = null;
    var context = {
        recognizer: recognizer,
        space: null,
        ignoreWS: false,
        ignoreWSAfter: false
    };

    this.scanner.skipSC();

    while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
            case COMMENT$2:
                this.scanner.next();
                continue;

            case WHITESPACE$2:
                if (context.ignoreWS) {
                    this.scanner.next();
                } else {
                    context.space = this.WhiteSpace();
                }
                continue;
        }

        child = recognizer.getNode.call(this, context);

        if (child === undefined) {
            break;
        }

        if (context.space !== null) {
            children.appendData(context.space);
            context.space = null;
        }

        children.appendData(child);

        if (context.ignoreWSAfter) {
            context.ignoreWSAfter = false;
            context.ignoreWS = true;
        } else {
            context.ignoreWS = false;
        }
    }

    return children;
};

'use strict';



var noop = function() {};

function createParseContext(name) {
    return function() {
        return this[name]();
    };
}

function processConfig(config) {
    var parserConfig = {
        context: {},
        scope: {},
        atrule: {},
        pseudo: {}
    };

    if (config.parseContext) {
        for (var name in config.parseContext) {
            switch (typeof config.parseContext[name]) {
                case 'function':
                    parserConfig.context[name] = config.parseContext[name];
                    break;

                case 'string':
                    parserConfig.context[name] = createParseContext(config.parseContext[name]);
                    break;
            }
        }
    }

    if (config.scope) {
        for (var name in config.scope) {
            parserConfig.scope[name] = config.scope[name];
        }
    }

    if (config.atrule) {
        for (var name in config.atrule) {
            var atrule = config.atrule[name];

            if (atrule.parse) {
                parserConfig.atrule[name] = atrule.parse;
            }
        }
    }

    if (config.pseudo) {
        for (var name in config.pseudo) {
            var pseudo = config.pseudo[name];

            if (pseudo.parse) {
                parserConfig.pseudo[name] = pseudo.parse;
            }
        }
    }

    if (config.node) {
        for (var name in config.node) {
            parserConfig[name] = config.node[name].parse;
        }
    }

    return parserConfig;
}

var create$1 = function createParser(config) {
    var parser = {
        scanner: new tokenizer$1(),
        filename: '<unknown>',
        needPositions: false,
        tolerant: false,
        onParseError: noop,
        parseAtruleExpression: true,
        parseSelector: true,
        parseValue: true,
        parseCustomProperty: false,

        readSequence: sequence,

        tolerantParse: function(consumer, fallback) {
            if (this.tolerant) {
                var start = this.scanner.currentToken;

                try {
                    return consumer.call(this);
                } catch (e) {
                    this.onParseError(e);
                    return fallback.call(this, start);
                }
            } else {
                return consumer.call(this);
            }
        },

        getLocation: function(start, end) {
            if (this.needPositions) {
                return this.scanner.getLocationRange(
                    start,
                    end,
                    this.filename
                );
            }

            return null;
        },
        getLocationFromList: function(list) {
            if (this.needPositions) {
                return this.scanner.getLocationRange(
                    list.head !== null ? list.first().loc.start.offset - this.scanner.startOffset : this.scanner.tokenStart,
                    list.head !== null ? list.last().loc.end.offset - this.scanner.startOffset : this.scanner.tokenStart,
                    this.filename
                );
            }

            return null;
        }
    };

    config = processConfig(config || {});
    for (var key in config) {
        parser[key] = config[key];
    }

    return function(source, options) {
        options = options || {};

        var context = options.context || 'default';
        var ast;

        parser.scanner.setSource(source, options.offset, options.line, options.column);
        parser.filename = options.filename || '<unknown>';
        parser.needPositions = Boolean(options.positions);
        parser.tolerant = Boolean(options.tolerant);
        parser.onParseError = typeof options.onParseError === 'function' ? options.onParseError : noop;
        parser.parseAtruleExpression = 'parseAtruleExpression' in options ? Boolean(options.parseAtruleExpression) : true;
        parser.parseSelector = 'parseSelector' in options ? Boolean(options.parseSelector) : true;
        parser.parseValue = 'parseValue' in options ? Boolean(options.parseValue) : true;
        parser.parseCustomProperty = 'parseCustomProperty' in options ? Boolean(options.parseCustomProperty) : false;

        if (!parser.context.hasOwnProperty(context)) {
            throw new Error('Unknown context `' + context + '`');
        }

        ast = parser.context[context].call(parser, options);

        if (!parser.scanner.eof) {
            parser.scanner.error();
        }

        // console.log(JSON.stringify(ast, null, 4));
        return ast;
    };
};

var cmpChar$1 = tokenizer$1.cmpChar;
var TYPE$4 = tokenizer$1.TYPE;

var IDENTIFIER$2 = TYPE$4.Identifier;
var STRING$2 = TYPE$4.String;
var NUMBER$2 = TYPE$4.Number;
var FUNCTION$2 = TYPE$4.Function;
var URL$2 = TYPE$4.Url;
var NUMBERSIGN = TYPE$4.NumberSign;
var LEFTPARENTHESIS$1 = TYPE$4.LeftParenthesis;
var LEFTSQUAREBRACKET$1 = TYPE$4.LeftSquareBracket;
var PLUSSIGN$2 = TYPE$4.PlusSign;
var HYPHENMINUS$2 = TYPE$4.HyphenMinus;
var COMMA = TYPE$4.Comma;
var SOLIDUS = TYPE$4.Solidus;
var ASTERISK = TYPE$4.Asterisk;
var PERCENTSIGN = TYPE$4.PercentSign;
var BACKSLASH = TYPE$4.Backslash;
var U = 117; // 'u'.charCodeAt(0)

var _default = function defaultRecognizer(context) {
    switch (this.scanner.tokenType) {
        case NUMBERSIGN:
            return this.HexColor();

        case COMMA:
            context.space = null;
            context.ignoreWSAfter = true;
            return this.Operator();

        case SOLIDUS:
        case ASTERISK:
        case PLUSSIGN$2:
        case HYPHENMINUS$2:
            return this.Operator();

        case LEFTPARENTHESIS$1:
            return this.Parentheses(this.readSequence, context.recognizer);

        case LEFTSQUAREBRACKET$1:
            return this.Brackets(this.readSequence, context.recognizer);

        case STRING$2:
            return this.String();

        case NUMBER$2:
            switch (this.scanner.lookupType(1)) {
                case PERCENTSIGN:
                    return this.Percentage();

                case IDENTIFIER$2:
                    // edge case: number with folowing \0 and \9 hack shouldn't to be a Dimension
                    if (cmpChar$1(this.scanner.source, this.scanner.tokenEnd, BACKSLASH)) {
                        return this.Number();
                    } else {
                        return this.Dimension();
                    }

                default:
                    return this.Number();
            }

        case FUNCTION$2:
            return this.Function(this.readSequence, context.recognizer);

        case URL$2:
            return this.Url();

        case IDENTIFIER$2:
            // check for unicode range, it should start with u+ or U+
            if (cmpChar$1(this.scanner.source, this.scanner.tokenStart, U) &&
                cmpChar$1(this.scanner.source, this.scanner.tokenStart + 1, PLUSSIGN$2)) {
                return this.UnicodeRange();
            } else {
                return this.Identifier();
            }
    }
};

var atruleExpression = {
    getNode: _default
};

var TYPE$5 = tokenizer$1.TYPE;

var IDENTIFIER$3 = TYPE$5.Identifier;
var NUMBER$3 = TYPE$5.Number;
var NUMBERSIGN$1 = TYPE$5.NumberSign;
var LEFTSQUAREBRACKET$2 = TYPE$5.LeftSquareBracket;
var PLUSSIGN$3 = TYPE$5.PlusSign;
var SOLIDUS$1 = TYPE$5.Solidus;
var ASTERISK$1 = TYPE$5.Asterisk;
var FULLSTOP$2 = TYPE$5.FullStop;
var COLON = TYPE$5.Colon;
var GREATERTHANSIGN$1 = TYPE$5.GreaterThanSign;
var VERTICALLINE = TYPE$5.VerticalLine;
var TILDE = TYPE$5.Tilde;

function getNode(context) {
    switch (this.scanner.tokenType) {
        case PLUSSIGN$3:
        case GREATERTHANSIGN$1:
        case TILDE:
            context.space = null;
            context.ignoreWSAfter = true;
            return this.Combinator();

        case SOLIDUS$1:  // /deep/
            return this.Combinator();

        case FULLSTOP$2:
            return this.ClassSelector();

        case LEFTSQUAREBRACKET$2:
            return this.AttributeSelector();

        case NUMBERSIGN$1:
            return this.IdSelector();

        case COLON:
            if (this.scanner.lookupType(1) === COLON) {
                return this.PseudoElementSelector();
            } else {
                return this.PseudoClassSelector();
            }

        case IDENTIFIER$3:
        case ASTERISK$1:
        case VERTICALLINE:
            return this.TypeSelector();

        case NUMBER$3:
            return this.Percentage();
    }
}

var selector = {
    getNode: getNode
};

// https://drafts.csswg.org/css-images-4/#element-notation
// https://developer.mozilla.org/en-US/docs/Web/CSS/element
var element = function() {
    this.scanner.skipSC();

    var id = this.IdSelector();

    this.scanner.skipSC();

    return new list().appendData(
        id
    );
};

// legacy IE function
// expression '(' raw ')'
var expression = function() {
    return new list().appendData(
        this.Raw(this.scanner.currentToken, 0, 0, false, false)
    );
};

var TYPE$6 = tokenizer$1.TYPE;

var IDENTIFIER$4 = TYPE$6.Identifier;
var COMMA$1 = TYPE$6.Comma;
var SEMICOLON = TYPE$6.Semicolon;
var HYPHENMINUS$3 = TYPE$6.HyphenMinus;
var EXCLAMATIONMARK$1 = TYPE$6.ExclamationMark;

// var '(' ident (',' <value>? )? ')'
var _var = function() {
    var children = new list();

    this.scanner.skipSC();

    var identStart = this.scanner.tokenStart;

    this.scanner.eat(HYPHENMINUS$3);
    if (this.scanner.source.charCodeAt(this.scanner.tokenStart) !== HYPHENMINUS$3) {
        this.scanner.error('HyphenMinus is expected');
    }
    this.scanner.eat(IDENTIFIER$4);

    children.appendData({
        type: 'Identifier',
        loc: this.getLocation(identStart, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(identStart)
    });

    this.scanner.skipSC();

    if (this.scanner.tokenType === COMMA$1) {
        children.appendData(this.Operator());
        children.appendData(this.parseCustomProperty
            ? this.Value(null)
            : this.Raw(this.scanner.currentToken, EXCLAMATIONMARK$1, SEMICOLON, false, false)
        );
    }

    return children;
};

var value = {
    getNode: _default,
    '-moz-element': element,
    'element': element,
    'expression': expression,
    'var': _var
};

var scope = {
    AtruleExpression: atruleExpression,
    Selector: selector,
    Value: value
};

var fontFace = {
    parse: {
        expression: null,
        block: function() {
            return this.Block(this.Declaration);
        }
    }
};

var TYPE$7 = tokenizer$1.TYPE;

var STRING$3 = TYPE$7.String;
var IDENTIFIER$5 = TYPE$7.Identifier;
var URL$3 = TYPE$7.Url;
var LEFTPARENTHESIS$2 = TYPE$7.LeftParenthesis;

var _import = {
    parse: {
        expression: function() {
            var children = new list();

            this.scanner.skipSC();

            switch (this.scanner.tokenType) {
                case STRING$3:
                    children.appendData(this.String());
                    break;

                case URL$3:
                    children.appendData(this.Url());
                    break;

                default:
                    this.scanner.error('String or url() is expected');
            }

            if (this.scanner.lookupNonWSType(0) === IDENTIFIER$5 ||
                this.scanner.lookupNonWSType(0) === LEFTPARENTHESIS$2) {
                children.appendData(this.WhiteSpace());
                children.appendData(this.MediaQueryList());
            }

            return children;
        },
        block: null
    }
};

var media = {
    parse: {
        expression: function() {
            return new list().appendData(
                this.MediaQueryList()
            );
        },
        block: function() {
            return this.Block(this.Rule);
        }
    }
};

var TYPE$8 = tokenizer$1.TYPE;
var LEFTCURLYBRACKET$1 = TYPE$8.LeftCurlyBracket;

var page = {
    parse: {
        expression: function() {
            if (this.scanner.lookupNonWSType(0) === LEFTCURLYBRACKET$1) {
                return null;
            }

            return new list().appendData(
                this.SelectorList()
            );
        },
        block: function() {
            return this.Block(this.Declaration);
        }
    }
};

var TYPE$9 = tokenizer$1.TYPE;

var WHITESPACE$3 = TYPE$9.WhiteSpace;
var COMMENT$3 = TYPE$9.Comment;
var IDENTIFIER$6 = TYPE$9.Identifier;
var FUNCTION$3 = TYPE$9.Function;
var LEFTPARENTHESIS$3 = TYPE$9.LeftParenthesis;
var HYPHENMINUS$4 = TYPE$9.HyphenMinus;
var COLON$1 = TYPE$9.Colon;

function consumeRaw() {
    return new list().appendData(
        this.Raw(this.scanner.currentToken, 0, 0, false, false)
    );
}

function parentheses() {
    var index = 0;

    this.scanner.skipSC();

    // TODO: make it simplier
    if (this.scanner.tokenType === IDENTIFIER$6) {
        index = 1;
    } else if (this.scanner.tokenType === HYPHENMINUS$4 &&
               this.scanner.lookupType(1) === IDENTIFIER$6) {
        index = 2;
    }

    if (index !== 0 && this.scanner.lookupNonWSType(index) === COLON$1) {
        return new list().appendData(
            this.Declaration()
        );
    }

    return readSequence$1.call(this);
}

function readSequence$1() {
    var children = new list();
    var space = null;
    var child;

    this.scanner.skipSC();

    scan:
    while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
            case WHITESPACE$3:
                space = this.WhiteSpace();
                continue;

            case COMMENT$3:
                this.scanner.next();
                continue;

            case FUNCTION$3:
                child = this.Function(consumeRaw, this.scope.AtruleExpression);
                break;

            case IDENTIFIER$6:
                child = this.Identifier();
                break;

            case LEFTPARENTHESIS$3:
                child = this.Parentheses(parentheses, this.scope.AtruleExpression);
                break;

            default:
                break scan;
        }

        if (space !== null) {
            children.appendData(space);
            space = null;
        }

        children.appendData(child);
    }

    return children;
}

var supports = {
    parse: {
        expression: function() {
            var children = readSequence$1.call(this);

            if (children.isEmpty()) {
                this.scanner.error('Condition is expected');
            }

            return children;
        },
        block: function() {
            return this.Block(this.Rule);
        }
    }
};

var atrule = {
    'font-face': fontFace,
    'import': _import,
    'media': media,
    'page': page,
    'supports': supports
};

var dir = {
    parse: function() {
        return new list().appendData(
            this.Identifier()
        );
    }
};

var has$1 = {
    parse: function() {
        return new list().appendData(
            this.SelectorList()
        );
    }
};

var lang = {
    parse: function() {
        return new list().appendData(
            this.Identifier()
        );
    }
};

var selectorList = {
    parse: function selectorList() {
        return new list().appendData(
            this.SelectorList()
        );
    }
};

var matches = selectorList;

var not = selectorList;

var ALLOW_OF_CLAUSE = true;

var nthWithOfClause = {
    parse: function() {
        return new list().appendData(
            this.Nth(ALLOW_OF_CLAUSE)
        );
    }
};

var nthChild = nthWithOfClause;

var nthLastChild = nthWithOfClause;

var DISALLOW_OF_CLAUSE = false;

var nth = {
    parse: function nth() {
        return new list().appendData(
            this.Nth(DISALLOW_OF_CLAUSE)
        );
    }
};

var nthLastOfType = nth;

var nthOfType = nth;

var slotted = {
    parse: function compoundSelector() {
        return new list().appendData(
            this.Selector()
        );
    }
};

var pseudo = {
    'dir': dir,
    'has': has$1,
    'lang': lang,
    'matches': matches,
    'not': not,
    'nth-child': nthChild,
    'nth-last-child': nthLastChild,
    'nth-last-of-type': nthLastOfType,
    'nth-of-type': nthOfType,
    'slotted': slotted
};

var cmpChar$2 = tokenizer$1.cmpChar;
var isNumber$2 = tokenizer$1.isNumber;
var TYPE$10 = tokenizer$1.TYPE;

var IDENTIFIER$7 = TYPE$10.Identifier;
var NUMBER$4 = TYPE$10.Number;
var PLUSSIGN$4 = TYPE$10.PlusSign;
var HYPHENMINUS$5 = TYPE$10.HyphenMinus;
var N$3 = 110; // 'n'.charCodeAt(0)
var DISALLOW_SIGN = true;
var ALLOW_SIGN = false;

function checkTokenIsInteger(scanner, disallowSign) {
    var pos = scanner.tokenStart;

    if (scanner.source.charCodeAt(pos) === PLUSSIGN$4 ||
        scanner.source.charCodeAt(pos) === HYPHENMINUS$5) {
        if (disallowSign) {
            scanner.error();
        }
        pos++;
    }

    for (; pos < scanner.tokenEnd; pos++) {
        if (!isNumber$2(scanner.source.charCodeAt(pos))) {
            scanner.error('Unexpected input', pos);
        }
    }
}

// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
var AnPlusB = {
    name: 'AnPlusB',
    structure: {
        a: [String, null],
        b: [String, null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var end = start;
        var prefix = '';
        var a = null;
        var b = null;

        if (this.scanner.tokenType === NUMBER$4 ||
            this.scanner.tokenType === PLUSSIGN$4) {
            checkTokenIsInteger(this.scanner, ALLOW_SIGN);
            prefix = this.scanner.getTokenValue();
            this.scanner.next();
            end = this.scanner.tokenStart;
        }

        if (this.scanner.tokenType === IDENTIFIER$7) {
            var bStart = this.scanner.tokenStart;

            if (cmpChar$2(this.scanner.source, bStart, HYPHENMINUS$5)) {
                if (prefix === '') {
                    prefix = '-';
                    bStart++;
                } else {
                    this.scanner.error('Unexpected hyphen minus');
                }
            }

            if (!cmpChar$2(this.scanner.source, bStart, N$3)) {
                this.scanner.error();
            }

            a = prefix === ''  ? '1'  :
                prefix === '+' ? '+1' :
                prefix === '-' ? '-1' :
                prefix;

            var len = this.scanner.tokenEnd - bStart;
            if (len > 1) {
                // ..n-..
                if (this.scanner.source.charCodeAt(bStart + 1) !== HYPHENMINUS$5) {
                    this.scanner.error('Unexpected input', bStart + 1);
                }

                if (len > 2) {
                    // ..n-{number}..
                    this.scanner.tokenStart = bStart + 2;
                } else {
                    // ..n- {number}
                    this.scanner.next();
                    this.scanner.skipSC();
                }

                checkTokenIsInteger(this.scanner, DISALLOW_SIGN);
                b = '-' + this.scanner.getTokenValue();
                this.scanner.next();
                end = this.scanner.tokenStart;
            } else {
                prefix = '';
                this.scanner.next();
                end = this.scanner.tokenStart;
                this.scanner.skipSC();

                if (this.scanner.tokenType === HYPHENMINUS$5 ||
                    this.scanner.tokenType === PLUSSIGN$4) {
                    prefix = this.scanner.getTokenValue();
                    this.scanner.next();
                    this.scanner.skipSC();
                }

                if (this.scanner.tokenType === NUMBER$4) {
                    checkTokenIsInteger(this.scanner, prefix !== '');

                    if (!isNumber$2(this.scanner.source.charCodeAt(this.scanner.tokenStart))) {
                        prefix = this.scanner.source.charAt(this.scanner.tokenStart);
                        this.scanner.tokenStart++;
                    }

                    if (prefix === '') {
                        // should be an operator before number
                        this.scanner.error();
                    } else if (prefix === '+') {
                        // plus is using by default
                        prefix = '';
                    }

                    b = prefix + this.scanner.getTokenValue();

                    this.scanner.next();
                    end = this.scanner.tokenStart;
                } else {
                    if (prefix) {
                        this.scanner.eat(NUMBER$4);
                    }
                }
            }
        } else {
            if (prefix === '' || prefix === '+') { // no number
                this.scanner.error(
                    'Number or identifier is expected',
                    this.scanner.tokenStart + (
                        this.scanner.tokenType === PLUSSIGN$4 ||
                        this.scanner.tokenType === HYPHENMINUS$5
                    )
                );
            }

            b = prefix;
        }

        return {
            type: 'AnPlusB',
            loc: this.getLocation(start, end),
            a: a,
            b: b
        };
    },
    generate: function(processChunk, node) {
        var a = node.a !== null && node.a !== undefined;
        var b = node.b !== null && node.b !== undefined;

        if (a) {
            processChunk(
                node.a === '+1' ? '+n' :
                node.a ===  '1' ?  'n' :
                node.a === '-1' ? '-n' :
                node.a + 'n'
            );

            if (b) {
                b = String(node.b);
                if (b.charAt(0) === '-' || b.charAt(0) === '+') {
                    processChunk(b.charAt(0));
                    processChunk(b.substr(1));
                } else {
                    processChunk('+');
                    processChunk(b);
                }
            }
        } else {
            processChunk(String(node.b));
        }
    }
};

var TYPE$11 = tokenizer$1.TYPE;

var ATRULE$2 = TYPE$11.Atrule;
var SEMICOLON$1 = TYPE$11.Semicolon;
var LEFTCURLYBRACKET$2 = TYPE$11.LeftCurlyBracket;
var RIGHTCURLYBRACKET$1 = TYPE$11.RightCurlyBracket;

function isBlockAtrule() {
    for (var offset = 1, type; type = this.scanner.lookupType(offset); offset++) {
        if (type === RIGHTCURLYBRACKET$1) {
            return true;
        }

        if (type === LEFTCURLYBRACKET$2 ||
            type === ATRULE$2) {
            return false;
        }
    }

    this.scanner.skip(offset);
    this.scanner.eat(RIGHTCURLYBRACKET$1);
}

var Atrule = {
    name: 'Atrule',
    structure: {
        name: String,
        expression: ['AtruleExpression', null],
        block: ['Block', null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var nameLowerCase;
        var expression = null;
        var block = null;

        this.scanner.eat(ATRULE$2);

        name = this.scanner.substrToCursor(start + 1);
        nameLowerCase = name.toLowerCase();
        this.scanner.skipSC();

        expression = this.AtruleExpression(name);

        // turn empty AtruleExpression into null
        if (expression.children.head === null) {
            expression = null;
        }

        this.scanner.skipSC();

        if (this.atrule.hasOwnProperty(nameLowerCase)) {
            if (typeof this.atrule[nameLowerCase].block === 'function') {
                if (this.scanner.tokenType !== LEFTCURLYBRACKET$2) {
                    // FIXME: make tolerant
                    this.scanner.error('Curly bracket is expected');
                }

                block = this.atrule[nameLowerCase].block.call(this);
            } else {
                if (!this.tolerant || !this.scanner.eof) {
                    this.scanner.eat(SEMICOLON$1);
                }
            }
        } else {
            switch (this.scanner.tokenType) {
                case SEMICOLON$1:
                    this.scanner.next();
                    break;

                case LEFTCURLYBRACKET$2:
                    // TODO: should consume block content as Raw?
                    block = this.Block(isBlockAtrule.call(this) ? this.Declaration : this.Rule);
                    break;

                default:
                    if (!this.tolerant) {
                        this.scanner.error('Semicolon or block is expected');
                    }
            }
        }

        return {
            type: 'Atrule',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            expression: expression,
            block: block
        };
    },
    generate: function(processChunk, node) {
        processChunk('@');
        processChunk(node.name);

        if (node.expression !== null) {
            processChunk(' ');
            this.generate(processChunk, node.expression);
        }

        if (node.block) {
            this.generate(processChunk, node.block);
        } else {
            processChunk(';');
        }
    },
    walkContext: 'atrule'
};

var TYPE$12 = tokenizer$1.TYPE;
var SEMICOLON$2 = TYPE$12.Semicolon;
var LEFTCURLYBRACKET$3 = TYPE$12.LeftCurlyBracket;

function consumeRaw$1(startToken) {
    return new list().appendData(
        this.Raw(startToken, SEMICOLON$2, LEFTCURLYBRACKET$3, false, true)
    );
}

function consumeDefaultSequence() {
    return this.readSequence(this.scope.AtruleExpression);
}

var AtruleExpression = {
    name: 'AtruleExpression',
    structure: {
        children: [[]]
    },
    parse: function(name) {
        var children = null;
        var startToken = this.scanner.currentToken;

        if (name !== null) {
            name = name.toLowerCase();
        }

        if (this.parseAtruleExpression) {
            // custom consumer
            if (this.atrule.hasOwnProperty(name)) {
                if (typeof this.atrule[name].expression === 'function') {
                    children = this.tolerantParse(this.atrule[name].expression, consumeRaw$1);
                }
            } else {
                // default consumer
                this.scanner.skipSC();
                children = this.tolerantParse(consumeDefaultSequence, consumeRaw$1);
            }

            if (this.tolerant) {
                if (this.scanner.eof || (this.scanner.tokenType !== SEMICOLON$2 && this.scanner.tokenType !== LEFTCURLYBRACKET$3)) {
                    children = consumeRaw$1.call(this, startToken);
                }
            }
        } else {
            children = consumeRaw$1.call(this, startToken);
        }

        if (children === null) {
            children = new list();
        }

        return {
            type: 'AtruleExpression',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.each(processChunk, node);
    },
    walkContext: 'atruleExpression'
};

var TYPE$13 = tokenizer$1.TYPE;

var IDENTIFIER$8 = TYPE$13.Identifier;
var STRING$4 = TYPE$13.String;
var DOLLARSIGN = TYPE$13.DollarSign;
var ASTERISK$2 = TYPE$13.Asterisk;
var COLON$2 = TYPE$13.Colon;
var EQUALSSIGN = TYPE$13.EqualsSign;
var LEFTSQUAREBRACKET$3 = TYPE$13.LeftSquareBracket;
var RIGHTSQUAREBRACKET$1 = TYPE$13.RightSquareBracket;
var CIRCUMFLEXACCENT = TYPE$13.CircumflexAccent;
var VERTICALLINE$1 = TYPE$13.VerticalLine;
var TILDE$1 = TYPE$13.Tilde;

function getAttributeName() {
    if (this.scanner.eof) {
        this.scanner.error('Unexpected end of input');
    }

    var start = this.scanner.tokenStart;
    var expectIdentifier = false;
    var checkColon = true;

    if (this.scanner.tokenType === ASTERISK$2) {
        expectIdentifier = true;
        checkColon = false;
        this.scanner.next();
    } else if (this.scanner.tokenType !== VERTICALLINE$1) {
        this.scanner.eat(IDENTIFIER$8);
    }

    if (this.scanner.tokenType === VERTICALLINE$1) {
        if (this.scanner.lookupType(1) !== EQUALSSIGN) {
            this.scanner.next();
            this.scanner.eat(IDENTIFIER$8);
        } else if (expectIdentifier) {
            this.scanner.error('Identifier is expected', this.scanner.tokenEnd);
        }
    } else if (expectIdentifier) {
        this.scanner.error('Vertical line is expected');
    }

    if (checkColon && this.scanner.tokenType === COLON$2) {
        this.scanner.next();
        this.scanner.eat(IDENTIFIER$8);
    }

    return {
        type: 'Identifier',
        loc: this.getLocation(start, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(start)
    };
}

function getOperator() {
    var start = this.scanner.tokenStart;
    var tokenType = this.scanner.tokenType;

    if (tokenType !== EQUALSSIGN &&        // =
        tokenType !== TILDE$1 &&             // ~=
        tokenType !== CIRCUMFLEXACCENT &&  // ^=
        tokenType !== DOLLARSIGN &&        // $=
        tokenType !== ASTERISK$2 &&          // *=
        tokenType !== VERTICALLINE$1         // |=
    ) {
        this.scanner.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected');
    }

    if (tokenType === EQUALSSIGN) {
        this.scanner.next();
    } else {
        this.scanner.next();
        this.scanner.eat(EQUALSSIGN);
    }

    return this.scanner.substrToCursor(start);
}

// '[' S* attrib_name ']'
// '[' S* attrib_name S* attrib_matcher S* [ IDENT | STRING ] S* attrib_flags? S* ']'
var AttributeSelector = {
    name: 'AttributeSelector',
    structure: {
        name: 'Identifier',
        matcher: [String, null],
        value: ['String', 'Identifier', null],
        flags: [String, null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var matcher = null;
        var value = null;
        var flags = null;

        this.scanner.eat(LEFTSQUAREBRACKET$3);
        this.scanner.skipSC();

        name = getAttributeName.call(this);
        this.scanner.skipSC();

        if (this.scanner.tokenType !== RIGHTSQUAREBRACKET$1) {
            // avoid case `[name i]`
            if (this.scanner.tokenType !== IDENTIFIER$8) {
                matcher = getOperator.call(this);

                this.scanner.skipSC();

                value = this.scanner.tokenType === STRING$4
                    ? this.String()
                    : this.Identifier();

                this.scanner.skipSC();
            }

            // attribute flags
            if (this.scanner.tokenType === IDENTIFIER$8) {
                flags = this.scanner.getTokenValue();
                this.scanner.next();

                this.scanner.skipSC();
            }
        }

        this.scanner.eat(RIGHTSQUAREBRACKET$1);

        return {
            type: 'AttributeSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            matcher: matcher,
            value: value,
            flags: flags
        };
    },
    generate: function(processChunk, node) {
        var flagsPrefix = ' ';

        processChunk('[');
        this.generate(processChunk, node.name);

        if (node.matcher !== null) {
            processChunk(node.matcher);

            if (node.value !== null) {
                this.generate(processChunk, node.value);

                // space between string and flags is not required
                if (node.value.type === 'String') {
                    flagsPrefix = '';
                }
            }
        }

        if (node.flags !== null) {
            processChunk(flagsPrefix);
            processChunk(node.flags);
        }

        processChunk(']');
    }
};

var TYPE$14 = tokenizer$1.TYPE;

var WHITESPACE$4 = TYPE$14.WhiteSpace;
var COMMENT$4 = TYPE$14.Comment;
var SEMICOLON$3 = TYPE$14.Semicolon;
var ATRULE$3 = TYPE$14.Atrule;
var LEFTCURLYBRACKET$4 = TYPE$14.LeftCurlyBracket;
var RIGHTCURLYBRACKET$2 = TYPE$14.RightCurlyBracket;

function consumeRaw$2(startToken) {
    return this.Raw(startToken, 0, SEMICOLON$3, true, true);
}

var Block = {
    name: 'Block',
    structure: {
        children: [['Atrule', 'Rule', 'Declaration']]
    },
    parse: function(defaultConsumer) {
        if (!defaultConsumer) {
            defaultConsumer = this.Declaration;
        }

        var start = this.scanner.tokenStart;
        var children = new list();

        this.scanner.eat(LEFTCURLYBRACKET$4);

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case RIGHTCURLYBRACKET$2:
                    break scan;

                case WHITESPACE$4:
                case COMMENT$4:
                case SEMICOLON$3:
                    this.scanner.next();
                    break;

                case ATRULE$3:
                    children.appendData(this.tolerantParse(this.Atrule, consumeRaw$2));
                    break;

                default:
                    children.appendData(this.tolerantParse(defaultConsumer, consumeRaw$2));
            }
        }

        if (!this.tolerant || !this.scanner.eof) {
            this.scanner.eat(RIGHTCURLYBRACKET$2);
        }

        return {
            type: 'Block',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(processChunk, node) {
        processChunk('{');
        this.each(processChunk, node);
        processChunk('}');
    },
    walkContext: 'block'
};

var TYPE$15 = tokenizer$1.TYPE;
var LEFTSQUAREBRACKET$4 = TYPE$15.LeftSquareBracket;
var RIGHTSQUAREBRACKET$2 = TYPE$15.RightSquareBracket;

// currently only Grid Layout uses square brackets, but left it universal
// https://drafts.csswg.org/css-grid/#track-sizing
// [ ident* ]
var Brackets = {
    name: 'Brackets',
    structure: {
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var children = null;

        this.scanner.eat(LEFTSQUAREBRACKET$4);
        children = readSequence.call(this, recognizer);
        this.scanner.eat(RIGHTSQUAREBRACKET$2);

        return {
            type: 'Brackets',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(processChunk, node) {
        processChunk('[');
        this.each(processChunk, node);
        processChunk(']');
    }
};

var CDC$2 = tokenizer$1.TYPE.CDC;

var CDC_1 = {
    name: 'CDC',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(CDC$2); // -->

        return {
            type: 'CDC',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function(processChunk) {
        processChunk('-->');
    }
};

var CDO$2 = tokenizer$1.TYPE.CDO;

var CDO_1 = {
    name: 'CDO',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(CDO$2); // <!--

        return {
            type: 'CDO',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function(processChunk) {
        processChunk('<!--');
    }
};

var TYPE$16 = tokenizer$1.TYPE;
var IDENTIFIER$9 = TYPE$16.Identifier;
var FULLSTOP$3 = TYPE$16.FullStop;

// '.' ident
var ClassSelector = {
    name: 'ClassSelector',
    structure: {
        name: String
    },
    parse: function() {
        this.scanner.eat(FULLSTOP$3);

        return {
            type: 'ClassSelector',
            loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
            name: this.scanner.consume(IDENTIFIER$9)
        };
    },
    generate: function(processChunk, node) {
        processChunk('.');
        processChunk(node.name);
    }
};

var TYPE$17 = tokenizer$1.TYPE;

var PLUSSIGN$5 = TYPE$17.PlusSign;
var SOLIDUS$2 = TYPE$17.Solidus;
var GREATERTHANSIGN$2 = TYPE$17.GreaterThanSign;
var TILDE$2 = TYPE$17.Tilde;

// + | > | ~ | /deep/
var Combinator = {
    name: 'Combinator',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        switch (this.scanner.tokenType) {
            case GREATERTHANSIGN$2:
            case PLUSSIGN$5:
            case TILDE$2:
                this.scanner.next();
                break;

            case SOLIDUS$2:
                this.scanner.next();
                this.scanner.expectIdentifier('deep');
                this.scanner.eat(SOLIDUS$2);
                break;

            default:
                this.scanner.error('Combinator is expected');
        }

        return {
            type: 'Combinator',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.name);
    }
};

var TYPE$18 = tokenizer$1.TYPE;

var ASTERISK$3 = TYPE$18.Asterisk;
var SOLIDUS$3 = TYPE$18.Solidus;

// '/*' .* '*/'
var Comment = {
    name: 'Comment',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var end = this.scanner.tokenEnd;

        if ((end - start + 2) >= 2 &&
            this.scanner.source.charCodeAt(end - 2) === ASTERISK$3 &&
            this.scanner.source.charCodeAt(end - 1) === SOLIDUS$3) {
            end -= 2;
        }

        this.scanner.next();

        return {
            type: 'Comment',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.source.substring(start + 2, end)
        };
    },
    generate: function(processChunk, node) {
        processChunk('/*');
        processChunk(node.value);
        processChunk('*/');
    }
};

var TYPE$19 = tokenizer$1.TYPE;

var IDENTIFIER$10 = TYPE$19.Identifier;
var COLON$3 = TYPE$19.Colon;
var EXCLAMATIONMARK$2 = TYPE$19.ExclamationMark;
var SOLIDUS$4 = TYPE$19.Solidus;
var ASTERISK$4 = TYPE$19.Asterisk;
var DOLLARSIGN$1 = TYPE$19.DollarSign;
var HYPHENMINUS$6 = TYPE$19.HyphenMinus;
var SEMICOLON$4 = TYPE$19.Semicolon;
var RIGHTCURLYBRACKET$3 = TYPE$19.RightCurlyBracket;
var RIGHTPARENTHESIS$1 = TYPE$19.RightParenthesis;
var PLUSSIGN$6 = TYPE$19.PlusSign;
var NUMBERSIGN$2 = TYPE$19.NumberSign;

var Declaration = {
    name: 'Declaration',
    structure: {
        important: [Boolean, String],
        property: String,
        value: ['Value', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var property = readProperty.call(this);
        var important = false;
        var value;

        this.scanner.skipSC();
        this.scanner.eat(COLON$3);

        if (isCustomProperty(property) ? this.parseCustomProperty : this.parseValue) {
            value = this.Value(property);
        } else {
            value = this.Raw(this.scanner.currentToken, EXCLAMATIONMARK$2, SEMICOLON$4, false, false);
        }

        if (this.scanner.tokenType === EXCLAMATIONMARK$2) {
            important = getImportant(this.scanner);
            this.scanner.skipSC();
        }

        // TODO: include or not to include semicolon to range?
        // if (this.scanner.tokenType === SEMICOLON) {
        //     this.scanner.next();
        // }

        if (!this.scanner.eof &&
            this.scanner.tokenType !== SEMICOLON$4 &&
            this.scanner.tokenType !== RIGHTPARENTHESIS$1 &&
            this.scanner.tokenType !== RIGHTCURLYBRACKET$3) {
            this.scanner.error();
        }

        return {
            type: 'Declaration',
            loc: this.getLocation(start, this.scanner.tokenStart),
            important: important,
            property: property,
            value: value
        };
    },
    generate: function(processChunk, node, item) {
        processChunk(node.property);
        processChunk(':');
        this.generate(processChunk, node.value);

        if (node.important) {
            processChunk(node.important === true ? '!important' : '!' + node.important);
        }

        if (item && item.next) {
            processChunk(';');
        }
    },
    walkContext: 'declaration'
};

function isCustomProperty(name) {
    return name.length >= 2 &&
           name.charCodeAt(0) === HYPHENMINUS$6 &&
           name.charCodeAt(1) === HYPHENMINUS$6;
}

function readProperty() {
    var start = this.scanner.tokenStart;
    var prefix = 0;

    // hacks
    switch (this.scanner.tokenType) {
        case ASTERISK$4:
        case DOLLARSIGN$1:
        case PLUSSIGN$6:
        case NUMBERSIGN$2:
            prefix = 1;
            break;

        // TODO: not sure we should support this hack
        case SOLIDUS$4:
            prefix = this.scanner.lookupType(1) === SOLIDUS$4 ? 2 : 1;
            break;
    }

    if (this.scanner.lookupType(prefix) === HYPHENMINUS$6) {
        prefix++;
    }

    if (prefix) {
        this.scanner.skip(prefix);
    }

    this.scanner.eat(IDENTIFIER$10);

    return this.scanner.substrToCursor(start);
}

// ! ws* important
function getImportant(scanner) {
    scanner.eat(EXCLAMATIONMARK$2);
    scanner.skipSC();

    var important = scanner.consume(IDENTIFIER$10);

    // store original value in case it differ from `important`
    // for better original source restoring and hacks like `!ie` support
    return important === 'important' ? true : important;
}

var TYPE$20 = tokenizer$1.TYPE;

var WHITESPACE$5 = TYPE$20.WhiteSpace;
var COMMENT$5 = TYPE$20.Comment;
var SEMICOLON$5 = TYPE$20.Semicolon;

function consumeRaw$3(startToken) {
    return this.Raw(startToken, 0, SEMICOLON$5, true, true);
}

var DeclarationList = {
    name: 'DeclarationList',
    structure: {
        children: [['Declaration']]
    },
    parse: function() {
        var children = new list();

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case WHITESPACE$5:
                case COMMENT$5:
                case SEMICOLON$5:
                    this.scanner.next();
                    break;

                default:
                    children.appendData(this.tolerantParse(this.Declaration, consumeRaw$3));
            }
        }

        return {
            type: 'DeclarationList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.each(processChunk, node);
    }
};

var NUMBER$5 = tokenizer$1.TYPE.Number;

// special reader for units to avoid adjoined IE hacks (i.e. '1px\9')
function readUnit(scanner) {
    var unit = scanner.getTokenValue();
    var backSlashPos = unit.indexOf('\\');

    if (backSlashPos > 0) {
        // patch token offset
        scanner.tokenStart += backSlashPos;

        // return part before backslash
        return unit.substring(0, backSlashPos);
    }

    // no backslash in unit name
    scanner.next();

    return unit;
}

// number ident
var Dimension = {
    name: 'Dimension',
    structure: {
        value: String,
        unit: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var value = this.scanner.consume(NUMBER$5);
        var unit = readUnit(this.scanner);

        return {
            type: 'Dimension',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: value,
            unit: unit
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
        processChunk(node.unit);
    }
};

var TYPE$21 = tokenizer$1.TYPE;
var RIGHTPARENTHESIS$2 = TYPE$21.RightParenthesis;

// <function-token> <sequence> ')'
var _Function = {
    name: 'Function',
    structure: {
        name: String,
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var name = this.scanner.consumeFunctionName();
        var nameLowerCase = name.toLowerCase();
        var children;

        children = recognizer.hasOwnProperty(nameLowerCase)
            ? recognizer[nameLowerCase].call(this, recognizer)
            : readSequence.call(this, recognizer);

        this.scanner.eat(RIGHTPARENTHESIS$2);

        return {
            type: 'Function',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.name);
        processChunk('(');
        this.each(processChunk, node);
        processChunk(')');
    },
    walkContext: 'function'
};

var isHex$1 = tokenizer$1.isHex;
var TYPE$22 = tokenizer$1.TYPE;

var IDENTIFIER$11 = TYPE$22.Identifier;
var NUMBER$6 = TYPE$22.Number;
var NUMBERSIGN$3 = TYPE$22.NumberSign;

function consumeHexSequence(scanner, required) {
    if (!isHex$1(scanner.source.charCodeAt(scanner.tokenStart))) {
        if (required) {
            scanner.error('Unexpected input', scanner.tokenStart);
        } else {
            return;
        }
    }

    for (var pos = scanner.tokenStart + 1; pos < scanner.tokenEnd; pos++) {
        var code = scanner.source.charCodeAt(pos);

        // break on non-hex char
        if (!isHex$1(code)) {
            // break token, exclude symbol
            scanner.tokenStart = pos;
            return;
        }
    }

    // token is full hex sequence, go to next token
    scanner.next();
}

// # ident
var HexColor = {
    name: 'HexColor',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(NUMBERSIGN$3);

        scan:
        switch (this.scanner.tokenType) {
            case NUMBER$6:
                consumeHexSequence(this.scanner, true);

                // if token is identifier then number consists of hex only,
                // try to add identifier to result
                if (this.scanner.tokenType === IDENTIFIER$11) {
                    consumeHexSequence(this.scanner, false);
                }

                break;

            case IDENTIFIER$11:
                consumeHexSequence(this.scanner, true);
                break;

            default:
                this.scanner.error('Number or identifier is expected');
        }

        return {
            type: 'HexColor',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start + 1) // skip #
        };
    },
    generate: function(processChunk, node) {
        processChunk('#');
        processChunk(node.value);
    }
};

var TYPE$23 = tokenizer$1.TYPE;
var IDENTIFIER$12 = TYPE$23.Identifier;

var Identifier = {
    name: 'Identifier',
    structure: {
        name: String
    },
    parse: function() {
        return {
            type: 'Identifier',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            name: this.scanner.consume(IDENTIFIER$12)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.name);
    }
};

var TYPE$24 = tokenizer$1.TYPE;
var IDENTIFIER$13 = TYPE$24.Identifier;
var NUMBERSIGN$4 = TYPE$24.NumberSign;

// '#' ident
var IdSelector = {
    name: 'IdSelector',
    structure: {
        name: String
    },
    parse: function() {
        this.scanner.eat(NUMBERSIGN$4);

        return {
            type: 'IdSelector',
            loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
            name: this.scanner.consume(IDENTIFIER$13)
        };
    },
    generate: function(processChunk, node) {
        processChunk('#');
        processChunk(node.name);
    }
};

var TYPE$25 = tokenizer$1.TYPE;

var IDENTIFIER$14 = TYPE$25.Identifier;
var NUMBER$7 = TYPE$25.Number;
var LEFTPARENTHESIS$4 = TYPE$25.LeftParenthesis;
var RIGHTPARENTHESIS$3 = TYPE$25.RightParenthesis;
var COLON$4 = TYPE$25.Colon;
var SOLIDUS$5 = TYPE$25.Solidus;

var MediaFeature = {
    name: 'MediaFeature',
    structure: {
        name: String,
        value: ['Identifier', 'Number', 'Dimension', 'Ratio', null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var value = null;

        this.scanner.eat(LEFTPARENTHESIS$4);
        this.scanner.skipSC();

        name = this.scanner.consume(IDENTIFIER$14);
        this.scanner.skipSC();

        if (this.scanner.tokenType !== RIGHTPARENTHESIS$3) {
            this.scanner.eat(COLON$4);
            this.scanner.skipSC();

            switch (this.scanner.tokenType) {
                case NUMBER$7:
                    if (this.scanner.lookupType(1) === IDENTIFIER$14) {
                        value = this.Dimension();
                    } else if (this.scanner.lookupNonWSType(1) === SOLIDUS$5) {
                        value = this.Ratio();
                    } else {
                        value = this.Number();
                    }

                    break;

                case IDENTIFIER$14:
                    value = this.Identifier();

                    break;

                default:
                    this.scanner.error('Number, dimension, ratio or identifier is expected');
            }

            this.scanner.skipSC();
        }

        this.scanner.eat(RIGHTPARENTHESIS$3);

        return {
            type: 'MediaFeature',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            value: value
        };
    },
    generate: function(processChunk, node) {
        processChunk('(');
        processChunk(node.name);
        if (node.value !== null) {
            processChunk(':');
            this.generate(processChunk, node.value);
        }
        processChunk(')');
    }
};

var TYPE$26 = tokenizer$1.TYPE;

var WHITESPACE$6 = TYPE$26.WhiteSpace;
var COMMENT$6 = TYPE$26.Comment;
var IDENTIFIER$15 = TYPE$26.Identifier;
var LEFTPARENTHESIS$5 = TYPE$26.LeftParenthesis;

var MediaQuery = {
    name: 'MediaQuery',
    structure: {
        children: [['Identifier', 'MediaFeature', 'WhiteSpace']]
    },
    parse: function() {
        this.scanner.skipSC();

        var children = new list();
        var child = null;
        var space = null;

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case COMMENT$6:
                    this.scanner.next();
                    continue;

                case WHITESPACE$6:
                    space = this.WhiteSpace();
                    continue;

                case IDENTIFIER$15:
                    child = this.Identifier();
                    break;

                case LEFTPARENTHESIS$5:
                    child = this.MediaFeature();
                    break;

                default:
                    break scan;
            }

            if (space !== null) {
                children.appendData(space);
                space = null;
            }

            children.appendData(child);
        }

        if (child === null) {
            this.scanner.error('Identifier or parenthesis is expected');
        }

        return {
            type: 'MediaQuery',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.each(processChunk, node);
    }
};

var COMMA$2 = tokenizer$1.TYPE.Comma;

var MediaQueryList = {
    name: 'MediaQueryList',
    structure: {
        children: [['MediaQuery']]
    },
    parse: function(relative) {
        var children = new list();

        this.scanner.skipSC();

        while (!this.scanner.eof) {
            children.appendData(this.MediaQuery(relative));

            if (this.scanner.tokenType !== COMMA$2) {
                break;
            }

            this.scanner.next();
        }

        return {
            type: 'MediaQueryList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.eachComma(processChunk, node);
    }
};

// https://drafts.csswg.org/css-syntax-3/#the-anb-type
var Nth = {
    name: 'Nth',
    structure: {
        nth: ['AnPlusB', 'Identifier'],
        selector: ['SelectorList', null]
    },
    parse: function(allowOfClause) {
        this.scanner.skipSC();

        var start = this.scanner.tokenStart;
        var end = start;
        var selector = null;
        var query;

        if (this.scanner.lookupValue(0, 'odd') || this.scanner.lookupValue(0, 'even')) {
            query = this.Identifier();
        } else {
            query = this.AnPlusB();
        }

        this.scanner.skipSC();

        if (allowOfClause && this.scanner.lookupValue(0, 'of')) {
            this.scanner.next();

            selector = this.SelectorList();

            if (this.needPositions) {
                end = selector.children.last().loc.end.offset;
            }
        } else {
            if (this.needPositions) {
                end = query.loc.end.offset;
            }
        }

        return {
            type: 'Nth',
            loc: this.getLocation(start, end),
            nth: query,
            selector: selector
        };
    },
    generate: function(processChunk, node) {
        this.generate(processChunk, node.nth);
        if (node.selector !== null) {
            processChunk(' of ');
            this.generate(processChunk, node.selector);
        }
    }
};

var NUMBER$8 = tokenizer$1.TYPE.Number;

var _Number = {
    name: 'Number',
    structure: {
        value: String
    },
    parse: function() {
        return {
            type: 'Number',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            value: this.scanner.consume(NUMBER$8)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
    }
};

// '/' | '*' | ',' | ':' | '+' | '-'
var Operator = {
    name: 'Operator',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.next();

        return {
            type: 'Operator',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
    }
};

var TYPE$27 = tokenizer$1.TYPE;
var LEFTPARENTHESIS$6 = TYPE$27.LeftParenthesis;
var RIGHTPARENTHESIS$4 = TYPE$27.RightParenthesis;

var Parentheses = {
    name: 'Parentheses',
    structure: {
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var children = null;

        this.scanner.eat(LEFTPARENTHESIS$6);
        children = readSequence.call(this, recognizer);
        this.scanner.eat(RIGHTPARENTHESIS$4);

        return {
            type: 'Parentheses',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(processChunk, node) {
        processChunk('(');
        this.each(processChunk, node);
        processChunk(')');
    }
};

var TYPE$28 = tokenizer$1.TYPE;

var NUMBER$9 = TYPE$28.Number;
var PERCENTSIGN$1 = TYPE$28.PercentSign;

var Percentage = {
    name: 'Percentage',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var number = this.scanner.consume(NUMBER$9);

        this.scanner.eat(PERCENTSIGN$1);

        return {
            type: 'Percentage',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: number
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
        processChunk('%');
    }
};

var TYPE$29 = tokenizer$1.TYPE;

var IDENTIFIER$16 = TYPE$29.Identifier;
var FUNCTION$4 = TYPE$29.Function;
var COLON$5 = TYPE$29.Colon;
var RIGHTPARENTHESIS$5 = TYPE$29.RightParenthesis;

// : ident [ '(' .. ')' ]?
var PseudoClassSelector = {
    name: 'PseudoClassSelector',
    structure: {
        name: String,
        children: [['Raw'], null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = null;
        var name;
        var nameLowerCase;

        this.scanner.eat(COLON$5);

        if (this.scanner.tokenType === FUNCTION$4) {
            name = this.scanner.consumeFunctionName();
            nameLowerCase = name.toLowerCase();

            if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                this.scanner.skipSC();
                children = this.pseudo[nameLowerCase].call(this);
                this.scanner.skipSC();
            } else {
                children = new list().appendData(
                    this.Raw(this.scanner.currentToken, 0, 0, false, false)
                );
            }

            this.scanner.eat(RIGHTPARENTHESIS$5);
        } else {
            name = this.scanner.consume(IDENTIFIER$16);
        }

        return {
            type: 'PseudoClassSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(processChunk, node) {
        processChunk(':');
        processChunk(node.name);

        if (node.children !== null) {
            processChunk('(');
            this.each(processChunk, node);
            processChunk(')');
        }
    },
    walkContext: 'function'
};

var TYPE$30 = tokenizer$1.TYPE;

var IDENTIFIER$17 = TYPE$30.Identifier;
var FUNCTION$5 = TYPE$30.Function;
var COLON$6 = TYPE$30.Colon;
var RIGHTPARENTHESIS$6 = TYPE$30.RightParenthesis;

// :: ident [ '(' .. ')' ]?
var PseudoElementSelector = {
    name: 'PseudoElementSelector',
    structure: {
        name: String,
        children: [['Raw'], null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = null;
        var name;
        var nameLowerCase;

        this.scanner.eat(COLON$6);
        this.scanner.eat(COLON$6);

        if (this.scanner.tokenType === FUNCTION$5) {
            name = this.scanner.consumeFunctionName();
            nameLowerCase = name.toLowerCase();

            if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                this.scanner.skipSC();
                children = this.pseudo[nameLowerCase].call(this);
                this.scanner.skipSC();
            } else {
                children = new list().appendData(
                    this.Raw(this.scanner.currentToken, 0, 0, false, false)
                );
            }

            this.scanner.eat(RIGHTPARENTHESIS$6);
        } else {
            name = this.scanner.consume(IDENTIFIER$17);
        }

        return {
            type: 'PseudoElementSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(processChunk, node) {
        processChunk('::');
        processChunk(node.name);

        if (node.children !== null) {
            processChunk('(');
            this.each(processChunk, node);
            processChunk(')');
        }
    },
    walkContext: 'function'
};

var isNumber$3 = tokenizer$1.isNumber;
var TYPE$31 = tokenizer$1.TYPE;
var NUMBER$10 = TYPE$31.Number;
var SOLIDUS$6 = TYPE$31.Solidus;
var FULLSTOP$4 = TYPE$31.FullStop;

// Terms of <ratio> should to be a positive number (not zero or negative)
// (see https://drafts.csswg.org/mediaqueries-3/#values)
// However, -o-min-device-pixel-ratio takes fractional values as a ratio's term
// and this is using by various sites. Therefore we relax checking on parse
// to test a term is unsigned number without exponent part.
// Additional checks may to be applied on lexer validation.
function consumeNumber(scanner) {
    var value = scanner.consumeNonWS(NUMBER$10);

    for (var i = 0; i < value.length; i++) {
        var code = value.charCodeAt(i);
        if (!isNumber$3(code) && code !== FULLSTOP$4) {
            scanner.error('Unsigned number is expected', scanner.tokenStart - value.length + i);
        }
    }

    if (Number(value) === 0) {
        scanner.error('Zero number is not allowed', scanner.tokenStart - value.length);
    }

    return value;
}

// <positive-integer> S* '/' S* <positive-integer>
var Ratio = {
    name: 'Ratio',
    structure: {
        left: String,
        right: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var left = consumeNumber(this.scanner);
        var right;

        this.scanner.eatNonWS(SOLIDUS$6);
        right = consumeNumber(this.scanner);

        return {
            type: 'Ratio',
            loc: this.getLocation(start, this.scanner.tokenStart),
            left: left,
            right: right
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.left);
        processChunk('/');
        processChunk(node.right);
    }
};

var Raw = {
    name: 'Raw',
    structure: {
        value: String
    },
    parse: function(startToken, endTokenType1, endTokenType2, includeTokenType2, excludeWhiteSpace) {
        var startOffset = this.scanner.getTokenStart(startToken);
        var endOffset;

        this.scanner.skip(
            this.scanner.getRawLength(
                startToken,
                endTokenType1,
                endTokenType2,
                includeTokenType2
            )
        );

        if (excludeWhiteSpace && this.scanner.tokenStart > startOffset) {
            endOffset = this.scanner.getOffsetExcludeWS();
        } else {
            endOffset = this.scanner.tokenStart;
        }

        return {
            type: 'Raw',
            loc: this.getLocation(startOffset, endOffset),
            value: this.scanner.source.substring(startOffset, endOffset)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
    }
};

var TYPE$32 = tokenizer$1.TYPE;

var LEFTCURLYBRACKET$5 = TYPE$32.LeftCurlyBracket;

function consumeRaw$4(startToken) {
    return this.Raw(startToken, LEFTCURLYBRACKET$5, 0, false, true);
}

var Rule = {
    name: 'Rule',
    structure: {
        selector: ['SelectorList', 'Raw'],
        block: ['Block']
    },
    parse: function() {
        var startToken = this.scanner.currentToken;
        var startOffset = this.scanner.tokenStart;
        var selector = this.parseSelector
            ? this.tolerantParse(this.SelectorList, consumeRaw$4)
            : consumeRaw$4.call(this, startToken);
        var block = this.Block(this.Declaration);

        return {
            type: 'Rule',
            loc: this.getLocation(startOffset, this.scanner.tokenStart),
            selector: selector,
            block: block
        };
    },
    generate: function(processChunk, node) {
        this.generate(processChunk, node.selector);
        this.generate(processChunk, node.block);
    },
    walkContext: 'rule'
};

var Selector = {
    name: 'Selector',
    structure: {
        children: [[
            'TypeSelector',
            'IdSelector',
            'ClassSelector',
            'AttributeSelector',
            'PseudoClassSelector',
            'PseudoElementSelector',
            'Combinator',
            'WhiteSpace'
        ]]
    },
    parse: function() {
        var children = this.readSequence(this.scope.Selector);

        // nothing were consumed
        if (children.isEmpty()) {
            this.scanner.error('Selector is expected');
        }

        return {
            type: 'Selector',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.each(processChunk, node);
    }
};

var TYPE$33 = tokenizer$1.TYPE;

var COMMA$3 = TYPE$33.Comma;
var LEFTCURLYBRACKET$6 = TYPE$33.LeftCurlyBracket;

var SelectorList = {
    name: 'SelectorList',
    structure: {
        children: [['Selector', 'Raw']]
    },
    parse: function() {
        var children = new list();

        while (!this.scanner.eof) {
            children.appendData(this.parseSelector
                ? this.Selector()
                : this.Raw(this.scanner.currentToken, COMMA$3, LEFTCURLYBRACKET$6, false, false)
            );

            if (this.scanner.tokenType === COMMA$3) {
                this.scanner.next();
                continue;
            }

            break;
        }

        return {
            type: 'SelectorList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.eachComma(processChunk, node);
    },
    walkContext: 'selector'
};

var STRING$5 = tokenizer$1.TYPE.String;

var _String = {
    name: 'String',
    structure: {
        value: String
    },
    parse: function() {
        return {
            type: 'String',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            value: this.scanner.consume(STRING$5)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
    }
};

var TYPE$34 = tokenizer$1.TYPE;

var WHITESPACE$7 = TYPE$34.WhiteSpace;
var COMMENT$7 = TYPE$34.Comment;
var EXCLAMATIONMARK$3 = TYPE$34.ExclamationMark;
var ATRULE$4 = TYPE$34.Atrule;
var CDO$3 = TYPE$34.CDO;
var CDC$3 = TYPE$34.CDC;

function consumeRaw$5(startToken) {
    return this.Raw(startToken, 0, 0, false, false);
}

var StyleSheet = {
    name: 'StyleSheet',
    structure: {
        children: [['Comment', 'Atrule', 'Rule', 'Raw']]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = new list();
        var child;

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case WHITESPACE$7:
                    this.scanner.next();
                    continue;

                case COMMENT$7:
                    // ignore comments except exclamation comments (i.e. /*! .. */) on top level
                    if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== EXCLAMATIONMARK$3) {
                        this.scanner.next();
                        continue;
                    }

                    child = this.Comment();
                    break;

                case CDO$3: // <!--
                    child = this.CDO();
                    break;

                case CDC$3: // -->
                    child = this.CDC();
                    break;

                // CSS Syntax Module Level 3
                // §2.2 Error handling
                // At the "top level" of a stylesheet, an <at-keyword-token> starts an at-rule.
                case ATRULE$4:
                    child = this.Atrule();
                    break;

                // Anything else starts a qualified rule ...
                default:
                    child = this.tolerantParse(this.Rule, consumeRaw$5);
            }

            children.appendData(child);
        }

        return {
            type: 'StyleSheet',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.each(processChunk, node);
    },
    walkContext: 'stylesheet'
};

var TYPE$35 = tokenizer$1.TYPE;

var IDENTIFIER$18 = TYPE$35.Identifier;
var ASTERISK$5 = TYPE$35.Asterisk;
var VERTICALLINE$2 = TYPE$35.VerticalLine;

function eatIdentifierOrAsterisk() {
    if (this.scanner.tokenType !== IDENTIFIER$18 &&
        this.scanner.tokenType !== ASTERISK$5) {
        this.scanner.error('Identifier or asterisk is expected');
    }

    this.scanner.next();
}

// ident
// ident|ident
// ident|*
// *
// *|ident
// *|*
// |ident
// |*
var TypeSelector = {
    name: 'TypeSelector',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        if (this.scanner.tokenType === VERTICALLINE$2) {
            this.scanner.next();
            eatIdentifierOrAsterisk.call(this);
        } else {
            eatIdentifierOrAsterisk.call(this);

            if (this.scanner.tokenType === VERTICALLINE$2) {
                this.scanner.next();
                eatIdentifierOrAsterisk.call(this);
            }
        }

        return {
            type: 'TypeSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.name);
    }
};

var isHex$2 = tokenizer$1.isHex;
var TYPE$36 = tokenizer$1.TYPE;

var IDENTIFIER$19 = TYPE$36.Identifier;
var NUMBER$11 = TYPE$36.Number;
var PLUSSIGN$7 = TYPE$36.PlusSign;
var HYPHENMINUS$7 = TYPE$36.HyphenMinus;
var FULLSTOP$5 = TYPE$36.FullStop;
var QUESTIONMARK = TYPE$36.QuestionMark;

function scanUnicodeNumber(scanner) {
    for (var pos = scanner.tokenStart + 1; pos < scanner.tokenEnd; pos++) {
        var code = scanner.source.charCodeAt(pos);

        // break on fullstop or hyperminus/plussign after exponent
        if (code === FULLSTOP$5 || code === PLUSSIGN$7) {
            // break token, exclude symbol
            scanner.tokenStart = pos;
            return false;
        }
    }

    return true;
}

// https://drafts.csswg.org/css-syntax-3/#urange
function scanUnicodeRange(scanner) {
    var hexStart = scanner.tokenStart + 1; // skip +
    var hexLength = 0;

    scan: {
        if (scanner.tokenType === NUMBER$11) {
            if (scanner.source.charCodeAt(scanner.tokenStart) !== FULLSTOP$5 && scanUnicodeNumber(scanner)) {
                scanner.next();
            } else if (scanner.source.charCodeAt(scanner.tokenStart) !== HYPHENMINUS$7) {
                break scan;
            }
        } else {
            scanner.next(); // PLUSSIGN
        }

        if (scanner.tokenType === HYPHENMINUS$7) {
            scanner.next();
        }

        if (scanner.tokenType === NUMBER$11) {
            scanner.next();
        }

        if (scanner.tokenType === IDENTIFIER$19) {
            scanner.next();
        }

        if (scanner.tokenStart === hexStart) {
            scanner.error('Unexpected input', hexStart);
        }
    }

    // validate for U+x{1,6} or U+x{1,6}-x{1,6}
    // where x is [0-9a-fA-F]
    for (var i = hexStart, wasHyphenMinus = false; i < scanner.tokenStart; i++) {
        var code = scanner.source.charCodeAt(i);

        if (isHex$2(code) === false && (code !== HYPHENMINUS$7 || wasHyphenMinus)) {
            scanner.error('Unexpected input', i);
        }

        if (code === HYPHENMINUS$7) {
            // hex sequence shouldn't be an empty
            if (hexLength === 0) {
                scanner.error('Unexpected input', i);
            }

            wasHyphenMinus = true;
            hexLength = 0;
        } else {
            hexLength++;

            // too long hex sequence
            if (hexLength > 6) {
                scanner.error('Too long hex sequence', i);
            }
        }

    }

    // check we have a non-zero sequence
    if (hexLength === 0) {
        scanner.error('Unexpected input', i - 1);
    }

    // U+abc???
    if (!wasHyphenMinus) {
        // consume as many U+003F QUESTION MARK (?) code points as possible
        for (; hexLength < 6 && !scanner.eof; scanner.next()) {
            if (scanner.tokenType !== QUESTIONMARK) {
                break;
            }

            hexLength++;
        }
    }
}

var UnicodeRange = {
    name: 'UnicodeRange',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.next(); // U or u
        scanUnicodeRange(this.scanner);

        return {
            type: 'UnicodeRange',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
    }
};

var TYPE$37 = tokenizer$1.TYPE;

var STRING$6 = TYPE$37.String;
var URL$4 = TYPE$37.Url;
var RAW$2 = TYPE$37.Raw;
var RIGHTPARENTHESIS$7 = TYPE$37.RightParenthesis;

// url '(' S* (string | raw) S* ')'
var Url = {
    name: 'Url',
    structure: {
        value: ['String', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var value;

        this.scanner.eat(URL$4);
        this.scanner.skipSC();

        switch (this.scanner.tokenType) {
            case STRING$6:
                value = this.String();
                break;

            case RAW$2:
                value = this.Raw(this.scanner.currentToken, 0, RAW$2, true, false);
                break;

            default:
                this.scanner.error('String or Raw is expected');
        }

        this.scanner.skipSC();
        this.scanner.eat(RIGHTPARENTHESIS$7);

        return {
            type: 'Url',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: value
        };
    },
    generate: function(processChunk, node) {
        processChunk('url');
        processChunk('(');
        this.generate(processChunk, node.value);
        processChunk(')');
    }
};

var endsWith$1 = tokenizer$1.endsWith;
var TYPE$38 = tokenizer$1.TYPE;

var WHITESPACE$8 = TYPE$38.WhiteSpace;
var COMMENT$8 = TYPE$38.Comment;
var FUNCTION$6 = TYPE$38.Function;
var COLON$7 = TYPE$38.Colon;
var SEMICOLON$6 = TYPE$38.Semicolon;
var EXCLAMATIONMARK$4 = TYPE$38.ExclamationMark;

// 'progid:' ws* 'DXImageTransform.Microsoft.' ident ws* '(' .* ')'
function checkProgid(scanner) {
    var offset = 0;

    for (var type; type = scanner.lookupType(offset); offset++) {
        if (type !== WHITESPACE$8 && type !== COMMENT$8) {
            break;
        }
    }

    if (scanner.lookupValue(offset, 'alpha(') ||
        scanner.lookupValue(offset, 'chroma(') ||
        scanner.lookupValue(offset, 'dropshadow(')) {
        if (scanner.lookupType(offset) !== FUNCTION$6) {
            return false;
        }
    } else {
        if (scanner.lookupValue(offset, 'progid') === false ||
            scanner.lookupType(offset + 1) !== COLON$7) {
            return false;
        }
    }

    return true;
}

var Value = {
    name: 'Value',
    structure: {
        children: [[]]
    },
    parse: function(property) {
        // special parser for filter property since it can contains non-standart syntax for old IE
        if (property !== null && endsWith$1(property, 'filter') && checkProgid(this.scanner)) {
            this.scanner.skipSC();
            return this.Raw(this.scanner.currentToken, EXCLAMATIONMARK$4, SEMICOLON$6, false, false);
        }

        var start = this.scanner.tokenStart;
        var children = this.readSequence(this.scope.Value);

        return {
            type: 'Value',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.each(processChunk, node);
    }
};

var WHITESPACE$9 = tokenizer$1.TYPE.WhiteSpace;
var SPACE$2 = Object.freeze({
    type: 'WhiteSpace',
    loc: null,
    value: ' '
});

var WhiteSpace = {
    name: 'WhiteSpace',
    structure: {
        value: String
    },
    parse: function() {
        this.scanner.eat(WHITESPACE$9);
        return SPACE$2;

        // return {
        //     type: 'WhiteSpace',
        //     loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
        //     value: this.scanner.consume(WHITESPACE)
        // };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
    }
};

var node = {
    AnPlusB: AnPlusB,
    Atrule: Atrule,
    AtruleExpression: AtruleExpression,
    AttributeSelector: AttributeSelector,
    Block: Block,
    Brackets: Brackets,
    CDC: CDC_1,
    CDO: CDO_1,
    ClassSelector: ClassSelector,
    Combinator: Combinator,
    Comment: Comment,
    Declaration: Declaration,
    DeclarationList: DeclarationList,
    Dimension: Dimension,
    Function: _Function,
    HexColor: HexColor,
    Identifier: Identifier,
    IdSelector: IdSelector,
    MediaFeature: MediaFeature,
    MediaQuery: MediaQuery,
    MediaQueryList: MediaQueryList,
    Nth: Nth,
    Number: _Number,
    Operator: Operator,
    Parentheses: Parentheses,
    Percentage: Percentage,
    PseudoClassSelector: PseudoClassSelector,
    PseudoElementSelector: PseudoElementSelector,
    Ratio: Ratio,
    Raw: Raw,
    Rule: Rule,
    Selector: Selector,
    SelectorList: SelectorList,
    String: _String,
    StyleSheet: StyleSheet,
    TypeSelector: TypeSelector,
    UnicodeRange: UnicodeRange,
    Url: Url,
    Value: Value,
    WhiteSpace: WhiteSpace
};

var parser$1 = {
    parseContext: {
        default: 'StyleSheet',
        stylesheet: 'StyleSheet',
        atrule: 'Atrule',
        atruleExpression: function(options) {
            return this.AtruleExpression(options.atrule ? String(options.atrule) : null);
        },
        mediaQueryList: 'MediaQueryList',
        mediaQuery: 'MediaQuery',
        rule: 'Rule',
        selectorList: 'SelectorList',
        selector: 'Selector',
        block: function() {
            return this.Block(this.Declaration);
        },
        declarationList: 'DeclarationList',
        declaration: 'Declaration',
        value: function(options) {
            return this.Value(options.property ? String(options.property) : null);
        }
    },
    scope: scope,
    atrule: atrule,
    pseudo: pseudo,
    node: node
};

var parser = create$1(parser$1);

function walk ( ast, ref) {
	var enter = ref.enter;
	var leave = ref.leave;

	visit( ast, null, enter, leave );
}

var shouldSkip = false;
var context = { skip: function () { return shouldSkip = true; } };

var childKeys = {};

var toString$1 = Object.prototype.toString;

function isArray$1 ( thing ) {
	return toString$1.call( thing ) === '[object Array]';
}

function visit ( node, parent, enter, leave, prop, index ) {
	if ( !node ) { return; }

	if ( enter ) {
		var _shouldSkip = shouldSkip;
		shouldSkip = false;
		enter.call( context, node, parent, prop, index );
		var skipped = shouldSkip;
		shouldSkip = _shouldSkip;

		if ( skipped ) { return; }
	}

	var keys = childKeys[ node.type ] || (
		childKeys[ node.type ] = Object.keys( node ).filter( function (key) { return typeof node[ key ] === 'object'; } )
	);

	for ( var i = 0; i < keys.length; i += 1 ) {
		var key = keys[i];
		var value = node[ key ];

		if ( isArray$1( value ) ) {
			for ( var j = 0; j < value.length; j += 1 ) {
				visit( value[j], node, enter, leave, key, j );
			}
		}

		else if ( value && value.type ) {
			visit( value, node, enter, leave, key, null );
		}
	}

	if ( leave ) {
		leave( node, parent, prop, index );
	}
}

function readStyle(parser$$1, start, attributes) {
    var contentStart = parser$$1.index;
    var styles = parser$$1.readUntil(/<\/style>/);
    var contentEnd = parser$$1.index;
    var ast;
    try {
        ast = parser(styles, {
            positions: true,
            offset: contentStart
        });
    }
    catch (err) {
        if (err.name === 'CssSyntaxError') {
            parser$$1.error(err.message, err.offset);
        }
        else {
            throw err;
        }
    }
    ast = JSON.parse(JSON.stringify(ast));
    // tidy up AST
    walk(ast, {
        enter: function (node) {
            // replace `ref:a` nodes
            if (node.type === 'Selector') {
                for (var i = 0; i < node.children.length; i += 1) {
                    var a = node.children[i];
                    var b = node.children[i + 1];
                    if (isRefSelector(a, b)) {
                        node.children.splice(i, 2, {
                            type: 'RefSelector',
                            start: a.loc.start.offset,
                            end: b.loc.end.offset,
                            name: b.name
                        });
                    }
                }
            }
            if (node.loc) {
                node.start = node.loc.start.offset;
                node.end = node.loc.end.offset;
                delete node.loc;
            }
        }
    });
    parser$$1.eat('</style>', true);
    var end = parser$$1.index;
    return {
        start: start,
        end: end,
        attributes: attributes,
        children: ast.children,
        content: {
            start: contentStart,
            end: contentEnd,
            styles: styles
        }
    };
}
function isRefSelector(a, b) {
    if (!b)
        return false;
    return (a.type === 'TypeSelector' &&
        a.name === 'ref' &&
        b.type === 'PseudoClassSelector');
}

var DIRECTIVES = {
    Ref: {
        names: ['ref'],
        attribute: function (start, end, type, name) {
            return { start: start, end: end, type: type, name: name };
        },
        allowedExpressionTypes: [],
        error: 'ref directives cannot have a value'
    },
    EventHandler: {
        names: ['on'],
        attribute: function (start, end, type, name, expression) {
            return { start: start, end: end, type: type, name: name, expression: expression };
        },
        allowedExpressionTypes: ['CallExpression'],
        error: 'Expected a method call'
    },
    Binding: {
        names: ['bind'],
        attribute: function (start, end, type, name, expression) {
            return {
                start: start, end: end, type: type, name: name,
                value: expression || {
                    type: 'Identifier',
                    start: start + 5,
                    end: end,
                    name: name
                }
            };
        },
        allowedExpressionTypes: ['Identifier', 'MemberExpression'],
        error: 'Can only bind to an identifier (e.g. `foo`) or a member expression (e.g. `foo.bar` or `foo[baz]`)'
    },
    Transition: {
        names: ['in', 'out', 'transition'],
        attribute: function (start, end, type, name, expression, directiveName) {
            return {
                start: start, end: end, type: type, name: name, expression: expression,
                intro: directiveName === 'in' || directiveName === 'transition',
                outro: directiveName === 'out' || directiveName === 'transition'
            };
        },
        allowedExpressionTypes: ['ObjectExpression'],
        error: 'Transition argument must be an object literal, e.g. `{ duration: 400 }`'
    }
};
var lookupByName = {};
Object.keys(DIRECTIVES).forEach(function (name) {
    var directive = DIRECTIVES[name];
    directive.names.forEach(function (type) { return lookupByName[type] = name; });
});
function readExpression$1(parser, start, quoteMark) {
    var str = '';
    var escaped = false;
    for (var i = start; i < parser.template.length; i += 1) {
        var char = parser.template[i];
        if (quoteMark) {
            if (char === quoteMark) {
                if (escaped) {
                    str += quoteMark;
                }
                else {
                    break;
                }
            }
            else if (escaped) {
                str += '\\' + char;
                escaped = false;
            }
            else if (char === '\\') {
                escaped = true;
            }
            else {
                str += char;
            }
        }
        else if (/[\s\/>]/.test(char)) {
            break;
        }
        else {
            str += char;
        }
    }
    var expression = parseExpressionAt(repeat(' ', start) + str, start, {
        ecmaVersion: 9
    });
    parser.index = expression.end;
    parser.allowWhitespace();
    if (quoteMark)
        parser.eat(quoteMark, true);
    return expression;
}
function readDirective(parser, start, attrName) {
    var _a = attrName.split(':'), directiveName = _a[0], name = _a[1];
    if (name === undefined)
        return; // No colon in the name
    if (directiveName === '') {
        // not a directive — :foo is short for foo={{foo}}
        return {
            start: start,
            end: start + name.length + 1,
            type: 'Attribute',
            name: name,
            value: getShorthandValue(start + 1, name)
        };
    }
    var type = lookupByName[directiveName];
    if (!type)
        return; // not a registered directive
    var directive = DIRECTIVES[type];
    var expression = null;
    if (parser.eat('=')) {
        var quoteMark = parser.eat("'") ? "'" : parser.eat("\"") ? "\"" : null;
        var expressionStart = parser.index;
        if (parser.eat('{{')) {
            var message = 'directive values should not be wrapped';
            var expressionEnd = parser.template.indexOf('}}', expressionStart);
            if (expressionEnd !== -1) {
                var value = parser.template.slice(parser.index, expressionEnd);
                message += " \u2014 use '" + value + "', not '{{" + value + "}}'";
            }
            parser.error(message, expressionStart);
        }
        expression = readExpression$1(parser, expressionStart, quoteMark);
        if (directive.allowedExpressionTypes.indexOf(expression.type) === -1) {
            parser.error(directive.error, expressionStart);
        }
    }
    return directive.attribute(start, parser.index, type, name, expression, directiveName);
}
function getShorthandValue(start, name) {
    var end = start + name.length;
    return [
        {
            type: 'AttributeShorthand',
            start: start,
            end: end,
            expression: {
                type: 'Identifier',
                start: start,
                end: end,
                name: name
            }
        },
    ];
}

// https://dev.w3.org/html5/html-author/charref
var htmlEntities = {
    CounterClockwiseContourIntegral: 8755,
    ClockwiseContourIntegral: 8754,
    DoubleLongLeftRightArrow: 10234,
    DiacriticalDoubleAcute: 733,
    NotSquareSupersetEqual: 8931,
    CloseCurlyDoubleQuote: 8221,
    DoubleContourIntegral: 8751,
    FilledVerySmallSquare: 9642,
    NegativeVeryThinSpace: 8203,
    NotPrecedesSlantEqual: 8928,
    NotRightTriangleEqual: 8941,
    NotSucceedsSlantEqual: 8929,
    CapitalDifferentialD: 8517,
    DoubleLeftRightArrow: 8660,
    DoubleLongRightArrow: 10233,
    EmptyVerySmallSquare: 9643,
    NestedGreaterGreater: 8811,
    NotDoubleVerticalBar: 8742,
    NotLeftTriangleEqual: 8940,
    NotSquareSubsetEqual: 8930,
    OpenCurlyDoubleQuote: 8220,
    ReverseUpEquilibrium: 10607,
    DoubleLongLeftArrow: 10232,
    DownLeftRightVector: 10576,
    LeftArrowRightArrow: 8646,
    NegativeMediumSpace: 8203,
    RightArrowLeftArrow: 8644,
    SquareSupersetEqual: 8850,
    leftrightsquigarrow: 8621,
    DownRightTeeVector: 10591,
    DownRightVectorBar: 10583,
    LongLeftRightArrow: 10231,
    Longleftrightarrow: 10234,
    NegativeThickSpace: 8203,
    PrecedesSlantEqual: 8828,
    ReverseEquilibrium: 8651,
    RightDoubleBracket: 10215,
    RightDownTeeVector: 10589,
    RightDownVectorBar: 10581,
    RightTriangleEqual: 8885,
    SquareIntersection: 8851,
    SucceedsSlantEqual: 8829,
    blacktriangleright: 9656,
    longleftrightarrow: 10231,
    DoubleUpDownArrow: 8661,
    DoubleVerticalBar: 8741,
    DownLeftTeeVector: 10590,
    DownLeftVectorBar: 10582,
    FilledSmallSquare: 9724,
    GreaterSlantEqual: 10878,
    LeftDoubleBracket: 10214,
    LeftDownTeeVector: 10593,
    LeftDownVectorBar: 10585,
    LeftTriangleEqual: 8884,
    NegativeThinSpace: 8203,
    NotReverseElement: 8716,
    NotTildeFullEqual: 8775,
    RightAngleBracket: 10217,
    RightUpDownVector: 10575,
    SquareSubsetEqual: 8849,
    VerticalSeparator: 10072,
    blacktriangledown: 9662,
    blacktriangleleft: 9666,
    leftrightharpoons: 8651,
    rightleftharpoons: 8652,
    twoheadrightarrow: 8608,
    DiacriticalAcute: 180,
    DiacriticalGrave: 96,
    DiacriticalTilde: 732,
    DoubleRightArrow: 8658,
    DownArrowUpArrow: 8693,
    EmptySmallSquare: 9723,
    GreaterEqualLess: 8923,
    GreaterFullEqual: 8807,
    LeftAngleBracket: 10216,
    LeftUpDownVector: 10577,
    LessEqualGreater: 8922,
    NonBreakingSpace: 160,
    NotRightTriangle: 8939,
    NotSupersetEqual: 8841,
    RightTriangleBar: 10704,
    RightUpTeeVector: 10588,
    RightUpVectorBar: 10580,
    UnderParenthesis: 9181,
    UpArrowDownArrow: 8645,
    circlearrowright: 8635,
    downharpoonright: 8642,
    ntrianglerighteq: 8941,
    rightharpoondown: 8641,
    rightrightarrows: 8649,
    twoheadleftarrow: 8606,
    vartriangleright: 8883,
    CloseCurlyQuote: 8217,
    ContourIntegral: 8750,
    DoubleDownArrow: 8659,
    DoubleLeftArrow: 8656,
    DownRightVector: 8641,
    LeftRightVector: 10574,
    LeftTriangleBar: 10703,
    LeftUpTeeVector: 10592,
    LeftUpVectorBar: 10584,
    LowerRightArrow: 8600,
    NotGreaterEqual: 8817,
    NotGreaterTilde: 8821,
    NotLeftTriangle: 8938,
    OverParenthesis: 9180,
    RightDownVector: 8642,
    ShortRightArrow: 8594,
    UpperRightArrow: 8599,
    bigtriangledown: 9661,
    circlearrowleft: 8634,
    curvearrowright: 8631,
    downharpoonleft: 8643,
    leftharpoondown: 8637,
    leftrightarrows: 8646,
    nLeftrightarrow: 8654,
    nleftrightarrow: 8622,
    ntrianglelefteq: 8940,
    rightleftarrows: 8644,
    rightsquigarrow: 8605,
    rightthreetimes: 8908,
    straightepsilon: 1013,
    trianglerighteq: 8885,
    vartriangleleft: 8882,
    DiacriticalDot: 729,
    DoubleRightTee: 8872,
    DownLeftVector: 8637,
    GreaterGreater: 10914,
    HorizontalLine: 9472,
    InvisibleComma: 8291,
    InvisibleTimes: 8290,
    LeftDownVector: 8643,
    LeftRightArrow: 8596,
    Leftrightarrow: 8660,
    LessSlantEqual: 10877,
    LongRightArrow: 10230,
    Longrightarrow: 10233,
    LowerLeftArrow: 8601,
    NestedLessLess: 8810,
    NotGreaterLess: 8825,
    NotLessGreater: 8824,
    NotSubsetEqual: 8840,
    NotVerticalBar: 8740,
    OpenCurlyQuote: 8216,
    ReverseElement: 8715,
    RightTeeVector: 10587,
    RightVectorBar: 10579,
    ShortDownArrow: 8595,
    ShortLeftArrow: 8592,
    SquareSuperset: 8848,
    TildeFullEqual: 8773,
    UpperLeftArrow: 8598,
    ZeroWidthSpace: 8203,
    curvearrowleft: 8630,
    doublebarwedge: 8966,
    downdownarrows: 8650,
    hookrightarrow: 8618,
    leftleftarrows: 8647,
    leftrightarrow: 8596,
    leftthreetimes: 8907,
    longrightarrow: 10230,
    looparrowright: 8620,
    nshortparallel: 8742,
    ntriangleright: 8939,
    rightarrowtail: 8611,
    rightharpoonup: 8640,
    trianglelefteq: 8884,
    upharpoonright: 8638,
    ApplyFunction: 8289,
    DifferentialD: 8518,
    DoubleLeftTee: 10980,
    DoubleUpArrow: 8657,
    LeftTeeVector: 10586,
    LeftVectorBar: 10578,
    LessFullEqual: 8806,
    LongLeftArrow: 10229,
    Longleftarrow: 10232,
    NotTildeEqual: 8772,
    NotTildeTilde: 8777,
    Poincareplane: 8460,
    PrecedesEqual: 10927,
    PrecedesTilde: 8830,
    RightArrowBar: 8677,
    RightTeeArrow: 8614,
    RightTriangle: 8883,
    RightUpVector: 8638,
    SucceedsEqual: 10928,
    SucceedsTilde: 8831,
    SupersetEqual: 8839,
    UpEquilibrium: 10606,
    VerticalTilde: 8768,
    VeryThinSpace: 8202,
    bigtriangleup: 9651,
    blacktriangle: 9652,
    divideontimes: 8903,
    fallingdotseq: 8786,
    hookleftarrow: 8617,
    leftarrowtail: 8610,
    leftharpoonup: 8636,
    longleftarrow: 10229,
    looparrowleft: 8619,
    measuredangle: 8737,
    ntriangleleft: 8938,
    shortparallel: 8741,
    smallsetminus: 8726,
    triangleright: 9657,
    upharpoonleft: 8639,
    DownArrowBar: 10515,
    DownTeeArrow: 8615,
    ExponentialE: 8519,
    GreaterEqual: 8805,
    GreaterTilde: 8819,
    HilbertSpace: 8459,
    HumpDownHump: 8782,
    Intersection: 8898,
    LeftArrowBar: 8676,
    LeftTeeArrow: 8612,
    LeftTriangle: 8882,
    LeftUpVector: 8639,
    NotCongruent: 8802,
    NotLessEqual: 8816,
    NotLessTilde: 8820,
    Proportional: 8733,
    RightCeiling: 8969,
    RoundImplies: 10608,
    ShortUpArrow: 8593,
    SquareSubset: 8847,
    UnderBracket: 9141,
    VerticalLine: 124,
    blacklozenge: 10731,
    exponentiale: 8519,
    risingdotseq: 8787,
    triangledown: 9663,
    triangleleft: 9667,
    CircleMinus: 8854,
    CircleTimes: 8855,
    Equilibrium: 8652,
    GreaterLess: 8823,
    LeftCeiling: 8968,
    LessGreater: 8822,
    MediumSpace: 8287,
    NotPrecedes: 8832,
    NotSucceeds: 8833,
    OverBracket: 9140,
    RightVector: 8640,
    Rrightarrow: 8667,
    RuleDelayed: 10740,
    SmallCircle: 8728,
    SquareUnion: 8852,
    SubsetEqual: 8838,
    UpDownArrow: 8597,
    Updownarrow: 8661,
    VerticalBar: 8739,
    backepsilon: 1014,
    blacksquare: 9642,
    circledcirc: 8858,
    circleddash: 8861,
    curlyeqprec: 8926,
    curlyeqsucc: 8927,
    diamondsuit: 9830,
    eqslantless: 10901,
    expectation: 8496,
    nRightarrow: 8655,
    nrightarrow: 8603,
    preccurlyeq: 8828,
    precnapprox: 10937,
    quaternions: 8461,
    straightphi: 981,
    succcurlyeq: 8829,
    succnapprox: 10938,
    thickapprox: 8776,
    updownarrow: 8597,
    Bernoullis: 8492,
    CirclePlus: 8853,
    EqualTilde: 8770,
    Fouriertrf: 8497,
    ImaginaryI: 8520,
    Laplacetrf: 8466,
    LeftVector: 8636,
    Lleftarrow: 8666,
    NotElement: 8713,
    NotGreater: 8815,
    Proportion: 8759,
    RightArrow: 8594,
    RightFloor: 8971,
    Rightarrow: 8658,
    TildeEqual: 8771,
    TildeTilde: 8776,
    UnderBrace: 9183,
    UpArrowBar: 10514,
    UpTeeArrow: 8613,
    circledast: 8859,
    complement: 8705,
    curlywedge: 8911,
    eqslantgtr: 10902,
    gtreqqless: 10892,
    lessapprox: 10885,
    lesseqqgtr: 10891,
    lmoustache: 9136,
    longmapsto: 10236,
    mapstodown: 8615,
    mapstoleft: 8612,
    nLeftarrow: 8653,
    nleftarrow: 8602,
    precapprox: 10935,
    rightarrow: 8594,
    rmoustache: 9137,
    sqsubseteq: 8849,
    sqsupseteq: 8850,
    subsetneqq: 10955,
    succapprox: 10936,
    supsetneqq: 10956,
    upuparrows: 8648,
    varepsilon: 949,
    varnothing: 8709,
    Backslash: 8726,
    CenterDot: 183,
    CircleDot: 8857,
    Congruent: 8801,
    Coproduct: 8720,
    DoubleDot: 168,
    DownArrow: 8595,
    DownBreve: 785,
    Downarrow: 8659,
    HumpEqual: 8783,
    LeftArrow: 8592,
    LeftFloor: 8970,
    Leftarrow: 8656,
    LessTilde: 8818,
    Mellintrf: 8499,
    MinusPlus: 8723,
    NotCupCap: 8813,
    NotExists: 8708,
    OverBrace: 9182,
    PlusMinus: 177,
    Therefore: 8756,
    ThinSpace: 8201,
    TripleDot: 8411,
    UnionPlus: 8846,
    backprime: 8245,
    backsimeq: 8909,
    bigotimes: 10754,
    centerdot: 183,
    checkmark: 10003,
    complexes: 8450,
    dotsquare: 8865,
    downarrow: 8595,
    gtrapprox: 10886,
    gtreqless: 8923,
    heartsuit: 9829,
    leftarrow: 8592,
    lesseqgtr: 8922,
    nparallel: 8742,
    nshortmid: 8740,
    nsubseteq: 8840,
    nsupseteq: 8841,
    pitchfork: 8916,
    rationals: 8474,
    spadesuit: 9824,
    subseteqq: 10949,
    subsetneq: 8842,
    supseteqq: 10950,
    supsetneq: 8843,
    therefore: 8756,
    triangleq: 8796,
    varpropto: 8733,
    DDotrahd: 10513,
    DotEqual: 8784,
    Integral: 8747,
    LessLess: 10913,
    NotEqual: 8800,
    NotTilde: 8769,
    PartialD: 8706,
    Precedes: 8826,
    RightTee: 8866,
    Succeeds: 8827,
    SuchThat: 8715,
    Superset: 8835,
    Uarrocir: 10569,
    UnderBar: 818,
    andslope: 10840,
    angmsdaa: 10664,
    angmsdab: 10665,
    angmsdac: 10666,
    angmsdad: 10667,
    angmsdae: 10668,
    angmsdaf: 10669,
    angmsdag: 10670,
    angmsdah: 10671,
    angrtvbd: 10653,
    approxeq: 8778,
    awconint: 8755,
    backcong: 8780,
    barwedge: 8965,
    bbrktbrk: 9142,
    bigoplus: 10753,
    bigsqcup: 10758,
    biguplus: 10756,
    bigwedge: 8896,
    boxminus: 8863,
    boxtimes: 8864,
    capbrcup: 10825,
    circledR: 174,
    circledS: 9416,
    cirfnint: 10768,
    clubsuit: 9827,
    cupbrcap: 10824,
    curlyvee: 8910,
    cwconint: 8754,
    doteqdot: 8785,
    dotminus: 8760,
    drbkarow: 10512,
    dzigrarr: 10239,
    elinters: 9191,
    emptyset: 8709,
    eqvparsl: 10725,
    fpartint: 10765,
    geqslant: 10878,
    gesdotol: 10884,
    gnapprox: 10890,
    hksearow: 10533,
    hkswarow: 10534,
    imagline: 8464,
    imagpart: 8465,
    infintie: 10717,
    integers: 8484,
    intercal: 8890,
    intlarhk: 10775,
    laemptyv: 10676,
    ldrushar: 10571,
    leqslant: 10877,
    lesdotor: 10883,
    llcorner: 8990,
    lnapprox: 10889,
    lrcorner: 8991,
    lurdshar: 10570,
    mapstoup: 8613,
    multimap: 8888,
    naturals: 8469,
    otimesas: 10806,
    parallel: 8741,
    plusacir: 10787,
    pointint: 10773,
    precneqq: 10933,
    precnsim: 8936,
    profalar: 9006,
    profline: 8978,
    profsurf: 8979,
    raemptyv: 10675,
    realpart: 8476,
    rppolint: 10770,
    rtriltri: 10702,
    scpolint: 10771,
    setminus: 8726,
    shortmid: 8739,
    smeparsl: 10724,
    sqsubset: 8847,
    sqsupset: 8848,
    subseteq: 8838,
    succneqq: 10934,
    succnsim: 8937,
    supseteq: 8839,
    thetasym: 977,
    thicksim: 8764,
    timesbar: 10801,
    triangle: 9653,
    triminus: 10810,
    trpezium: 9186,
    ulcorner: 8988,
    urcorner: 8989,
    varkappa: 1008,
    varsigma: 962,
    vartheta: 977,
    Because: 8757,
    Cayleys: 8493,
    Cconint: 8752,
    Cedilla: 184,
    Diamond: 8900,
    DownTee: 8868,
    Element: 8712,
    Epsilon: 917,
    Implies: 8658,
    LeftTee: 8867,
    NewLine: 10,
    NoBreak: 8288,
    NotLess: 8814,
    Omicron: 927,
    OverBar: 175,
    Product: 8719,
    UpArrow: 8593,
    Uparrow: 8657,
    Upsilon: 933,
    alefsym: 8501,
    angrtvb: 8894,
    angzarr: 9084,
    asympeq: 8781,
    backsim: 8765,
    because: 8757,
    bemptyv: 10672,
    between: 8812,
    bigcirc: 9711,
    bigodot: 10752,
    bigstar: 9733,
    boxplus: 8862,
    ccupssm: 10832,
    cemptyv: 10674,
    cirscir: 10690,
    coloneq: 8788,
    congdot: 10861,
    cudarrl: 10552,
    cudarrr: 10549,
    cularrp: 10557,
    curarrm: 10556,
    dbkarow: 10511,
    ddagger: 8225,
    ddotseq: 10871,
    demptyv: 10673,
    diamond: 8900,
    digamma: 989,
    dotplus: 8724,
    dwangle: 10662,
    epsilon: 949,
    eqcolon: 8789,
    equivDD: 10872,
    gesdoto: 10882,
    gtquest: 10876,
    gtrless: 8823,
    harrcir: 10568,
    intprod: 10812,
    isindot: 8949,
    larrbfs: 10527,
    larrsim: 10611,
    lbrksld: 10639,
    lbrkslu: 10637,
    ldrdhar: 10599,
    lesdoto: 10881,
    lessdot: 8918,
    lessgtr: 8822,
    lesssim: 8818,
    lotimes: 10804,
    lozenge: 9674,
    ltquest: 10875,
    luruhar: 10598,
    maltese: 10016,
    minusdu: 10794,
    napprox: 8777,
    natural: 9838,
    nearrow: 8599,
    nexists: 8708,
    notinva: 8713,
    notinvb: 8951,
    notinvc: 8950,
    notniva: 8716,
    notnivb: 8958,
    notnivc: 8957,
    npolint: 10772,
    nsqsube: 8930,
    nsqsupe: 8931,
    nvinfin: 10718,
    nwarrow: 8598,
    olcross: 10683,
    omicron: 959,
    orderof: 8500,
    orslope: 10839,
    pertenk: 8241,
    planckh: 8462,
    pluscir: 10786,
    plussim: 10790,
    plustwo: 10791,
    precsim: 8830,
    quatint: 10774,
    questeq: 8799,
    rarrbfs: 10528,
    rarrsim: 10612,
    rbrksld: 10638,
    rbrkslu: 10640,
    rdldhar: 10601,
    realine: 8475,
    rotimes: 10805,
    ruluhar: 10600,
    searrow: 8600,
    simplus: 10788,
    simrarr: 10610,
    subedot: 10947,
    submult: 10945,
    subplus: 10943,
    subrarr: 10617,
    succsim: 8831,
    supdsub: 10968,
    supedot: 10948,
    suphsub: 10967,
    suplarr: 10619,
    supmult: 10946,
    supplus: 10944,
    swarrow: 8601,
    topfork: 10970,
    triplus: 10809,
    tritime: 10811,
    uparrow: 8593,
    upsilon: 965,
    uwangle: 10663,
    vzigzag: 10650,
    zigrarr: 8669,
    Aacute: 193,
    Abreve: 258,
    Agrave: 192,
    Assign: 8788,
    Atilde: 195,
    Barwed: 8966,
    Bumpeq: 8782,
    Cacute: 262,
    Ccaron: 268,
    Ccedil: 199,
    Colone: 10868,
    Conint: 8751,
    CupCap: 8781,
    Dagger: 8225,
    Dcaron: 270,
    DotDot: 8412,
    Dstrok: 272,
    Eacute: 201,
    Ecaron: 282,
    Egrave: 200,
    Exists: 8707,
    ForAll: 8704,
    Gammad: 988,
    Gbreve: 286,
    Gcedil: 290,
    HARDcy: 1066,
    Hstrok: 294,
    Iacute: 205,
    Igrave: 204,
    Itilde: 296,
    Jsercy: 1032,
    Kcedil: 310,
    Lacute: 313,
    Lambda: 923,
    Lcaron: 317,
    Lcedil: 315,
    Lmidot: 319,
    Lstrok: 321,
    Nacute: 323,
    Ncaron: 327,
    Ncedil: 325,
    Ntilde: 209,
    Oacute: 211,
    Odblac: 336,
    Ograve: 210,
    Oslash: 216,
    Otilde: 213,
    Otimes: 10807,
    Racute: 340,
    Rarrtl: 10518,
    Rcaron: 344,
    Rcedil: 342,
    SHCHcy: 1065,
    SOFTcy: 1068,
    Sacute: 346,
    Scaron: 352,
    Scedil: 350,
    Square: 9633,
    Subset: 8912,
    Supset: 8913,
    Tcaron: 356,
    Tcedil: 354,
    Tstrok: 358,
    Uacute: 218,
    Ubreve: 364,
    Udblac: 368,
    Ugrave: 217,
    Utilde: 360,
    Vdashl: 10982,
    Verbar: 8214,
    Vvdash: 8874,
    Yacute: 221,
    Zacute: 377,
    Zcaron: 381,
    aacute: 225,
    abreve: 259,
    agrave: 224,
    andand: 10837,
    angmsd: 8737,
    angsph: 8738,
    apacir: 10863,
    approx: 8776,
    atilde: 227,
    barvee: 8893,
    barwed: 8965,
    becaus: 8757,
    bernou: 8492,
    bigcap: 8898,
    bigcup: 8899,
    bigvee: 8897,
    bkarow: 10509,
    bottom: 8869,
    bowtie: 8904,
    boxbox: 10697,
    bprime: 8245,
    brvbar: 166,
    bullet: 8226,
    bumpeq: 8783,
    cacute: 263,
    capand: 10820,
    capcap: 10827,
    capcup: 10823,
    capdot: 10816,
    ccaron: 269,
    ccedil: 231,
    circeq: 8791,
    cirmid: 10991,
    colone: 8788,
    commat: 64,
    compfn: 8728,
    conint: 8750,
    coprod: 8720,
    copysr: 8471,
    cularr: 8630,
    cupcap: 10822,
    cupcup: 10826,
    cupdot: 8845,
    curarr: 8631,
    curren: 164,
    cylcty: 9005,
    dagger: 8224,
    daleth: 8504,
    dcaron: 271,
    dfisht: 10623,
    divide: 247,
    divonx: 8903,
    dlcorn: 8990,
    dlcrop: 8973,
    dollar: 36,
    drcorn: 8991,
    drcrop: 8972,
    dstrok: 273,
    eacute: 233,
    easter: 10862,
    ecaron: 283,
    ecolon: 8789,
    egrave: 232,
    egsdot: 10904,
    elsdot: 10903,
    emptyv: 8709,
    emsp13: 8196,
    emsp14: 8197,
    eparsl: 10723,
    eqcirc: 8790,
    equals: 61,
    equest: 8799,
    female: 9792,
    ffilig: 64259,
    ffllig: 64260,
    forall: 8704,
    frac12: 189,
    frac13: 8531,
    frac14: 188,
    frac15: 8533,
    frac16: 8537,
    frac18: 8539,
    frac23: 8532,
    frac25: 8534,
    frac34: 190,
    frac35: 8535,
    frac38: 8540,
    frac45: 8536,
    frac56: 8538,
    frac58: 8541,
    frac78: 8542,
    gacute: 501,
    gammad: 989,
    gbreve: 287,
    gesdot: 10880,
    gesles: 10900,
    gtlPar: 10645,
    gtrarr: 10616,
    gtrdot: 8919,
    gtrsim: 8819,
    hairsp: 8202,
    hamilt: 8459,
    hardcy: 1098,
    hearts: 9829,
    hellip: 8230,
    hercon: 8889,
    homtht: 8763,
    horbar: 8213,
    hslash: 8463,
    hstrok: 295,
    hybull: 8259,
    hyphen: 8208,
    iacute: 237,
    igrave: 236,
    iiiint: 10764,
    iinfin: 10716,
    incare: 8453,
    inodot: 305,
    intcal: 8890,
    iquest: 191,
    isinsv: 8947,
    itilde: 297,
    jsercy: 1112,
    kappav: 1008,
    kcedil: 311,
    kgreen: 312,
    lAtail: 10523,
    lacute: 314,
    lagran: 8466,
    lambda: 955,
    langle: 10216,
    larrfs: 10525,
    larrhk: 8617,
    larrlp: 8619,
    larrpl: 10553,
    larrtl: 8610,
    latail: 10521,
    lbrace: 123,
    lbrack: 91,
    lcaron: 318,
    lcedil: 316,
    ldquor: 8222,
    lesdot: 10879,
    lesges: 10899,
    lfisht: 10620,
    lfloor: 8970,
    lharul: 10602,
    llhard: 10603,
    lmidot: 320,
    lmoust: 9136,
    loplus: 10797,
    lowast: 8727,
    lowbar: 95,
    lparlt: 10643,
    lrhard: 10605,
    lsaquo: 8249,
    lsquor: 8218,
    lstrok: 322,
    lthree: 8907,
    ltimes: 8905,
    ltlarr: 10614,
    ltrPar: 10646,
    mapsto: 8614,
    marker: 9646,
    mcomma: 10793,
    midast: 42,
    midcir: 10992,
    middot: 183,
    minusb: 8863,
    minusd: 8760,
    mnplus: 8723,
    models: 8871,
    mstpos: 8766,
    nVDash: 8879,
    nVdash: 8878,
    nacute: 324,
    ncaron: 328,
    ncedil: 326,
    nearhk: 10532,
    nequiv: 8802,
    nesear: 10536,
    nexist: 8708,
    nltrie: 8940,
    nprcue: 8928,
    nrtrie: 8941,
    nsccue: 8929,
    nsimeq: 8772,
    ntilde: 241,
    numero: 8470,
    nvDash: 8877,
    nvHarr: 10500,
    nvdash: 8876,
    nvlArr: 10498,
    nvrArr: 10499,
    nwarhk: 10531,
    nwnear: 10535,
    oacute: 243,
    odblac: 337,
    odsold: 10684,
    ograve: 242,
    ominus: 8854,
    origof: 8886,
    oslash: 248,
    otilde: 245,
    otimes: 8855,
    parsim: 10995,
    percnt: 37,
    period: 46,
    permil: 8240,
    phmmat: 8499,
    planck: 8463,
    plankv: 8463,
    plusdo: 8724,
    plusdu: 10789,
    plusmn: 177,
    preceq: 10927,
    primes: 8473,
    prnsim: 8936,
    propto: 8733,
    prurel: 8880,
    puncsp: 8200,
    qprime: 8279,
    rAtail: 10524,
    racute: 341,
    rangle: 10217,
    rarrap: 10613,
    rarrfs: 10526,
    rarrhk: 8618,
    rarrlp: 8620,
    rarrpl: 10565,
    rarrtl: 8611,
    ratail: 10522,
    rbrace: 125,
    rbrack: 93,
    rcaron: 345,
    rcedil: 343,
    rdquor: 8221,
    rfisht: 10621,
    rfloor: 8971,
    rharul: 10604,
    rmoust: 9137,
    roplus: 10798,
    rpargt: 10644,
    rsaquo: 8250,
    rsquor: 8217,
    rthree: 8908,
    rtimes: 8906,
    sacute: 347,
    scaron: 353,
    scedil: 351,
    scnsim: 8937,
    searhk: 10533,
    seswar: 10537,
    sfrown: 8994,
    shchcy: 1097,
    sigmaf: 962,
    sigmav: 962,
    simdot: 10858,
    smashp: 10803,
    softcy: 1100,
    solbar: 9023,
    spades: 9824,
    sqsube: 8849,
    sqsupe: 8850,
    square: 9633,
    squarf: 9642,
    ssetmn: 8726,
    ssmile: 8995,
    sstarf: 8902,
    subdot: 10941,
    subset: 8834,
    subsim: 10951,
    subsub: 10965,
    subsup: 10963,
    succeq: 10928,
    supdot: 10942,
    supset: 8835,
    supsim: 10952,
    supsub: 10964,
    supsup: 10966,
    swarhk: 10534,
    swnwar: 10538,
    target: 8982,
    tcaron: 357,
    tcedil: 355,
    telrec: 8981,
    there4: 8756,
    thetav: 977,
    thinsp: 8201,
    thksim: 8764,
    timesb: 8864,
    timesd: 10800,
    topbot: 9014,
    topcir: 10993,
    tprime: 8244,
    tridot: 9708,
    tstrok: 359,
    uacute: 250,
    ubreve: 365,
    udblac: 369,
    ufisht: 10622,
    ugrave: 249,
    ulcorn: 8988,
    ulcrop: 8975,
    urcorn: 8989,
    urcrop: 8974,
    utilde: 361,
    vangrt: 10652,
    varphi: 966,
    varrho: 1009,
    veebar: 8891,
    vellip: 8942,
    verbar: 124,
    wedbar: 10847,
    wedgeq: 8793,
    weierp: 8472,
    wreath: 8768,
    xoplus: 10753,
    xotime: 10754,
    xsqcup: 10758,
    xuplus: 10756,
    xwedge: 8896,
    yacute: 253,
    zacute: 378,
    zcaron: 382,
    zeetrf: 8488,
    AElig: 198,
    Acirc: 194,
    Alpha: 913,
    Amacr: 256,
    Aogon: 260,
    Aring: 197,
    Breve: 728,
    Ccirc: 264,
    Colon: 8759,
    Cross: 10799,
    Dashv: 10980,
    Delta: 916,
    Ecirc: 202,
    Emacr: 274,
    Eogon: 280,
    Equal: 10869,
    Gamma: 915,
    Gcirc: 284,
    Hacek: 711,
    Hcirc: 292,
    IJlig: 306,
    Icirc: 206,
    Imacr: 298,
    Iogon: 302,
    Iukcy: 1030,
    Jcirc: 308,
    Jukcy: 1028,
    Kappa: 922,
    OElig: 338,
    Ocirc: 212,
    Omacr: 332,
    Omega: 937,
    Prime: 8243,
    RBarr: 10512,
    Scirc: 348,
    Sigma: 931,
    THORN: 222,
    TRADE: 8482,
    TSHcy: 1035,
    Theta: 920,
    Tilde: 8764,
    Ubrcy: 1038,
    Ucirc: 219,
    Umacr: 362,
    Union: 8899,
    Uogon: 370,
    UpTee: 8869,
    Uring: 366,
    VDash: 8875,
    Vdash: 8873,
    Wcirc: 372,
    Wedge: 8896,
    Ycirc: 374,
    acirc: 226,
    acute: 180,
    aelig: 230,
    aleph: 8501,
    alpha: 945,
    amacr: 257,
    amalg: 10815,
    angle: 8736,
    angrt: 8735,
    angst: 8491,
    aogon: 261,
    aring: 229,
    asymp: 8776,
    awint: 10769,
    bcong: 8780,
    bdquo: 8222,
    bepsi: 1014,
    blank: 9251,
    blk12: 9618,
    blk14: 9617,
    blk34: 9619,
    block: 9608,
    boxDL: 9559,
    boxDR: 9556,
    boxDl: 9558,
    boxDr: 9555,
    boxHD: 9574,
    boxHU: 9577,
    boxHd: 9572,
    boxHu: 9575,
    boxUL: 9565,
    boxUR: 9562,
    boxUl: 9564,
    boxUr: 9561,
    boxVH: 9580,
    boxVL: 9571,
    boxVR: 9568,
    boxVh: 9579,
    boxVl: 9570,
    boxVr: 9567,
    boxdL: 9557,
    boxdR: 9554,
    boxdl: 9488,
    boxdr: 9484,
    boxhD: 9573,
    boxhU: 9576,
    boxhd: 9516,
    boxhu: 9524,
    boxuL: 9563,
    boxuR: 9560,
    boxul: 9496,
    boxur: 9492,
    boxvH: 9578,
    boxvL: 9569,
    boxvR: 9566,
    boxvh: 9532,
    boxvl: 9508,
    boxvr: 9500,
    breve: 728,
    bsemi: 8271,
    bsime: 8909,
    bsolb: 10693,
    bumpE: 10926,
    bumpe: 8783,
    caret: 8257,
    caron: 711,
    ccaps: 10829,
    ccirc: 265,
    ccups: 10828,
    cedil: 184,
    check: 10003,
    clubs: 9827,
    colon: 58,
    comma: 44,
    crarr: 8629,
    cross: 10007,
    csube: 10961,
    csupe: 10962,
    ctdot: 8943,
    cuepr: 8926,
    cuesc: 8927,
    cupor: 10821,
    cuvee: 8910,
    cuwed: 8911,
    cwint: 8753,
    dashv: 8867,
    dblac: 733,
    ddarr: 8650,
    delta: 948,
    dharl: 8643,
    dharr: 8642,
    diams: 9830,
    disin: 8946,
    doteq: 8784,
    dtdot: 8945,
    dtrif: 9662,
    duarr: 8693,
    duhar: 10607,
    eDDot: 10871,
    ecirc: 234,
    efDot: 8786,
    emacr: 275,
    empty: 8709,
    eogon: 281,
    eplus: 10865,
    epsiv: 949,
    eqsim: 8770,
    equiv: 8801,
    erDot: 8787,
    erarr: 10609,
    esdot: 8784,
    exist: 8707,
    fflig: 64256,
    filig: 64257,
    fllig: 64258,
    fltns: 9649,
    forkv: 10969,
    frasl: 8260,
    frown: 8994,
    gamma: 947,
    gcirc: 285,
    gescc: 10921,
    gimel: 8503,
    gneqq: 8809,
    gnsim: 8935,
    grave: 96,
    gsime: 10894,
    gsiml: 10896,
    gtcir: 10874,
    gtdot: 8919,
    harrw: 8621,
    hcirc: 293,
    hoarr: 8703,
    icirc: 238,
    iexcl: 161,
    iiint: 8749,
    iiota: 8489,
    ijlig: 307,
    imacr: 299,
    image: 8465,
    imath: 305,
    imped: 437,
    infin: 8734,
    iogon: 303,
    iprod: 10812,
    isinE: 8953,
    isins: 8948,
    isinv: 8712,
    iukcy: 1110,
    jcirc: 309,
    jmath: 567,
    jukcy: 1108,
    kappa: 954,
    lAarr: 8666,
    lBarr: 10510,
    langd: 10641,
    laquo: 171,
    larrb: 8676,
    lbarr: 10508,
    lbbrk: 10098,
    lbrke: 10635,
    lceil: 8968,
    ldquo: 8220,
    lescc: 10920,
    lhard: 8637,
    lharu: 8636,
    lhblk: 9604,
    llarr: 8647,
    lltri: 9722,
    lneqq: 8808,
    lnsim: 8934,
    loang: 10220,
    loarr: 8701,
    lobrk: 10214,
    lopar: 10629,
    lrarr: 8646,
    lrhar: 8651,
    lrtri: 8895,
    lsime: 10893,
    lsimg: 10895,
    lsquo: 8216,
    ltcir: 10873,
    ltdot: 8918,
    ltrie: 8884,
    ltrif: 9666,
    mDDot: 8762,
    mdash: 8212,
    micro: 181,
    minus: 8722,
    mumap: 8888,
    nabla: 8711,
    napos: 329,
    natur: 9838,
    ncong: 8775,
    ndash: 8211,
    neArr: 8663,
    nearr: 8599,
    ngsim: 8821,
    nhArr: 8654,
    nharr: 8622,
    nhpar: 10994,
    nlArr: 8653,
    nlarr: 8602,
    nless: 8814,
    nlsim: 8820,
    nltri: 8938,
    notin: 8713,
    notni: 8716,
    nprec: 8832,
    nrArr: 8655,
    nrarr: 8603,
    nrtri: 8939,
    nsime: 8772,
    nsmid: 8740,
    nspar: 8742,
    nsube: 8840,
    nsucc: 8833,
    nsupe: 8841,
    numsp: 8199,
    nwArr: 8662,
    nwarr: 8598,
    ocirc: 244,
    odash: 8861,
    oelig: 339,
    ofcir: 10687,
    ohbar: 10677,
    olarr: 8634,
    olcir: 10686,
    oline: 8254,
    omacr: 333,
    omega: 969,
    operp: 10681,
    oplus: 8853,
    orarr: 8635,
    order: 8500,
    ovbar: 9021,
    parsl: 11005,
    phone: 9742,
    plusb: 8862,
    pluse: 10866,
    pound: 163,
    prcue: 8828,
    prime: 8242,
    prnap: 10937,
    prsim: 8830,
    quest: 63,
    rAarr: 8667,
    rBarr: 10511,
    radic: 8730,
    rangd: 10642,
    range: 10661,
    raquo: 187,
    rarrb: 8677,
    rarrc: 10547,
    rarrw: 8605,
    ratio: 8758,
    rbarr: 10509,
    rbbrk: 10099,
    rbrke: 10636,
    rceil: 8969,
    rdquo: 8221,
    reals: 8477,
    rhard: 8641,
    rharu: 8640,
    rlarr: 8644,
    rlhar: 8652,
    rnmid: 10990,
    roang: 10221,
    roarr: 8702,
    robrk: 10215,
    ropar: 10630,
    rrarr: 8649,
    rsquo: 8217,
    rtrie: 8885,
    rtrif: 9656,
    sbquo: 8218,
    sccue: 8829,
    scirc: 349,
    scnap: 10938,
    scsim: 8831,
    sdotb: 8865,
    sdote: 10854,
    seArr: 8664,
    searr: 8600,
    setmn: 8726,
    sharp: 9839,
    sigma: 963,
    simeq: 8771,
    simgE: 10912,
    simlE: 10911,
    simne: 8774,
    slarr: 8592,
    smile: 8995,
    sqcap: 8851,
    sqcup: 8852,
    sqsub: 8847,
    sqsup: 8848,
    srarr: 8594,
    starf: 9733,
    strns: 175,
    subnE: 10955,
    subne: 8842,
    supnE: 10956,
    supne: 8843,
    swArr: 8665,
    swarr: 8601,
    szlig: 223,
    theta: 952,
    thkap: 8776,
    thorn: 254,
    tilde: 732,
    times: 215,
    trade: 8482,
    trisb: 10701,
    tshcy: 1115,
    twixt: 8812,
    ubrcy: 1118,
    ucirc: 251,
    udarr: 8645,
    udhar: 10606,
    uharl: 8639,
    uharr: 8638,
    uhblk: 9600,
    ultri: 9720,
    umacr: 363,
    uogon: 371,
    uplus: 8846,
    upsih: 978,
    uring: 367,
    urtri: 9721,
    utdot: 8944,
    utrif: 9652,
    uuarr: 8648,
    vBarv: 10985,
    vDash: 8872,
    varpi: 982,
    vdash: 8866,
    veeeq: 8794,
    vltri: 8882,
    vprop: 8733,
    vrtri: 8883,
    wcirc: 373,
    wedge: 8743,
    xcirc: 9711,
    xdtri: 9661,
    xhArr: 10234,
    xharr: 10231,
    xlArr: 10232,
    xlarr: 10229,
    xodot: 10752,
    xrArr: 10233,
    xrarr: 10230,
    xutri: 9651,
    ycirc: 375,
    Aopf: 120120,
    Ascr: 119964,
    Auml: 196,
    Barv: 10983,
    Beta: 914,
    Bopf: 120121,
    Bscr: 8492,
    CHcy: 1063,
    COPY: 169,
    Cdot: 266,
    Copf: 8450,
    Cscr: 119966,
    DJcy: 1026,
    DScy: 1029,
    DZcy: 1039,
    Darr: 8609,
    Dopf: 120123,
    Dscr: 119967,
    Edot: 278,
    Eopf: 120124,
    Escr: 8496,
    Esim: 10867,
    Euml: 203,
    Fopf: 120125,
    Fscr: 8497,
    GJcy: 1027,
    Gdot: 288,
    Gopf: 120126,
    Gscr: 119970,
    Hopf: 8461,
    Hscr: 8459,
    IEcy: 1045,
    IOcy: 1025,
    Idot: 304,
    Iopf: 120128,
    Iota: 921,
    Iscr: 8464,
    Iuml: 207,
    Jopf: 120129,
    Jscr: 119973,
    KHcy: 1061,
    KJcy: 1036,
    Kopf: 120130,
    Kscr: 119974,
    LJcy: 1033,
    Lang: 10218,
    Larr: 8606,
    Lopf: 120131,
    Lscr: 8466,
    Mopf: 120132,
    Mscr: 8499,
    NJcy: 1034,
    Nopf: 8469,
    Nscr: 119977,
    Oopf: 120134,
    Oscr: 119978,
    Ouml: 214,
    Popf: 8473,
    Pscr: 119979,
    QUOT: 34,
    Qopf: 8474,
    Qscr: 119980,
    Rang: 10219,
    Rarr: 8608,
    Ropf: 8477,
    Rscr: 8475,
    SHcy: 1064,
    Sopf: 120138,
    Sqrt: 8730,
    Sscr: 119982,
    Star: 8902,
    TScy: 1062,
    Topf: 120139,
    Tscr: 119983,
    Uarr: 8607,
    Uopf: 120140,
    Upsi: 978,
    Uscr: 119984,
    Uuml: 220,
    Vbar: 10987,
    Vert: 8214,
    Vopf: 120141,
    Vscr: 119985,
    Wopf: 120142,
    Wscr: 119986,
    Xopf: 120143,
    Xscr: 119987,
    YAcy: 1071,
    YIcy: 1031,
    YUcy: 1070,
    Yopf: 120144,
    Yscr: 119988,
    Yuml: 376,
    ZHcy: 1046,
    Zdot: 379,
    Zeta: 918,
    Zopf: 8484,
    Zscr: 119989,
    andd: 10844,
    andv: 10842,
    ange: 10660,
    aopf: 120146,
    apid: 8779,
    apos: 39,
    ascr: 119990,
    auml: 228,
    bNot: 10989,
    bbrk: 9141,
    beta: 946,
    beth: 8502,
    bnot: 8976,
    bopf: 120147,
    boxH: 9552,
    boxV: 9553,
    boxh: 9472,
    boxv: 9474,
    bscr: 119991,
    bsim: 8765,
    bsol: 92,
    bull: 8226,
    bump: 8782,
    cdot: 267,
    cent: 162,
    chcy: 1095,
    cirE: 10691,
    circ: 710,
    cire: 8791,
    comp: 8705,
    cong: 8773,
    copf: 120148,
    copy: 169,
    cscr: 119992,
    csub: 10959,
    csup: 10960,
    dArr: 8659,
    dHar: 10597,
    darr: 8595,
    dash: 8208,
    diam: 8900,
    djcy: 1106,
    dopf: 120149,
    dscr: 119993,
    dscy: 1109,
    dsol: 10742,
    dtri: 9663,
    dzcy: 1119,
    eDot: 8785,
    ecir: 8790,
    edot: 279,
    emsp: 8195,
    ensp: 8194,
    eopf: 120150,
    epar: 8917,
    epsi: 1013,
    escr: 8495,
    esim: 8770,
    euml: 235,
    euro: 8364,
    excl: 33,
    flat: 9837,
    fnof: 402,
    fopf: 120151,
    fork: 8916,
    fscr: 119995,
    gdot: 289,
    geqq: 8807,
    gjcy: 1107,
    gnap: 10890,
    gneq: 10888,
    gopf: 120152,
    gscr: 8458,
    gsim: 8819,
    gtcc: 10919,
    hArr: 8660,
    half: 189,
    harr: 8596,
    hbar: 8463,
    hopf: 120153,
    hscr: 119997,
    iecy: 1077,
    imof: 8887,
    iocy: 1105,
    iopf: 120154,
    iota: 953,
    iscr: 119998,
    isin: 8712,
    iuml: 239,
    jopf: 120155,
    jscr: 119999,
    khcy: 1093,
    kjcy: 1116,
    kopf: 120156,
    kscr: 120000,
    lArr: 8656,
    lHar: 10594,
    lang: 10216,
    larr: 8592,
    late: 10925,
    lcub: 123,
    ldca: 10550,
    ldsh: 8626,
    leqq: 8806,
    ljcy: 1113,
    lnap: 10889,
    lneq: 10887,
    lopf: 120157,
    lozf: 10731,
    lpar: 40,
    lscr: 120001,
    lsim: 8818,
    lsqb: 91,
    ltcc: 10918,
    ltri: 9667,
    macr: 175,
    male: 9794,
    malt: 10016,
    mlcp: 10971,
    mldr: 8230,
    mopf: 120158,
    mscr: 120002,
    nbsp: 160,
    ncap: 10819,
    ncup: 10818,
    ngeq: 8817,
    ngtr: 8815,
    nisd: 8954,
    njcy: 1114,
    nldr: 8229,
    nleq: 8816,
    nmid: 8740,
    nopf: 120159,
    npar: 8742,
    nscr: 120003,
    nsim: 8769,
    nsub: 8836,
    nsup: 8837,
    ntgl: 8825,
    ntlg: 8824,
    oast: 8859,
    ocir: 8858,
    odiv: 10808,
    odot: 8857,
    ogon: 731,
    oint: 8750,
    omid: 10678,
    oopf: 120160,
    opar: 10679,
    ordf: 170,
    ordm: 186,
    oror: 10838,
    oscr: 8500,
    osol: 8856,
    ouml: 246,
    para: 182,
    part: 8706,
    perp: 8869,
    phiv: 966,
    plus: 43,
    popf: 120161,
    prap: 10935,
    prec: 8826,
    prnE: 10933,
    prod: 8719,
    prop: 8733,
    pscr: 120005,
    qint: 10764,
    qopf: 120162,
    qscr: 120006,
    quot: 34,
    rArr: 8658,
    rHar: 10596,
    race: 10714,
    rang: 10217,
    rarr: 8594,
    rcub: 125,
    rdca: 10551,
    rdsh: 8627,
    real: 8476,
    rect: 9645,
    rhov: 1009,
    ring: 730,
    ropf: 120163,
    rpar: 41,
    rscr: 120007,
    rsqb: 93,
    rtri: 9657,
    scap: 10936,
    scnE: 10934,
    sdot: 8901,
    sect: 167,
    semi: 59,
    sext: 10038,
    shcy: 1096,
    sime: 8771,
    simg: 10910,
    siml: 10909,
    smid: 8739,
    smte: 10924,
    solb: 10692,
    sopf: 120164,
    spar: 8741,
    squf: 9642,
    sscr: 120008,
    star: 9734,
    subE: 10949,
    sube: 8838,
    succ: 8827,
    sung: 9834,
    sup1: 185,
    sup2: 178,
    sup3: 179,
    supE: 10950,
    supe: 8839,
    tbrk: 9140,
    tdot: 8411,
    tint: 8749,
    toea: 10536,
    topf: 120165,
    tosa: 10537,
    trie: 8796,
    tscr: 120009,
    tscy: 1094,
    uArr: 8657,
    uHar: 10595,
    uarr: 8593,
    uopf: 120166,
    upsi: 965,
    uscr: 120010,
    utri: 9653,
    uuml: 252,
    vArr: 8661,
    vBar: 10984,
    varr: 8597,
    vert: 124,
    vopf: 120167,
    vscr: 120011,
    wopf: 120168,
    wscr: 120012,
    xcap: 8898,
    xcup: 8899,
    xmap: 10236,
    xnis: 8955,
    xopf: 120169,
    xscr: 120013,
    xvee: 8897,
    yacy: 1103,
    yicy: 1111,
    yopf: 120170,
    yscr: 120014,
    yucy: 1102,
    yuml: 255,
    zdot: 380,
    zeta: 950,
    zhcy: 1078,
    zopf: 120171,
    zscr: 120015,
    zwnj: 8204,
    AMP: 38,
    Acy: 1040,
    Afr: 120068,
    And: 10835,
    Bcy: 1041,
    Bfr: 120069,
    Cap: 8914,
    Cfr: 8493,
    Chi: 935,
    Cup: 8915,
    Dcy: 1044,
    Del: 8711,
    Dfr: 120071,
    Dot: 168,
    ENG: 330,
    ETH: 208,
    Ecy: 1069,
    Efr: 120072,
    Eta: 919,
    Fcy: 1060,
    Ffr: 120073,
    Gcy: 1043,
    Gfr: 120074,
    Hat: 94,
    Hfr: 8460,
    Icy: 1048,
    Ifr: 8465,
    Int: 8748,
    Jcy: 1049,
    Jfr: 120077,
    Kcy: 1050,
    Kfr: 120078,
    Lcy: 1051,
    Lfr: 120079,
    Lsh: 8624,
    Map: 10501,
    Mcy: 1052,
    Mfr: 120080,
    Ncy: 1053,
    Nfr: 120081,
    Not: 10988,
    Ocy: 1054,
    Ofr: 120082,
    Pcy: 1055,
    Pfr: 120083,
    Phi: 934,
    Psi: 936,
    Qfr: 120084,
    REG: 174,
    Rcy: 1056,
    Rfr: 8476,
    Rho: 929,
    Rsh: 8625,
    Scy: 1057,
    Sfr: 120086,
    Sub: 8912,
    Sum: 8721,
    Sup: 8913,
    Tab: 9,
    Tau: 932,
    Tcy: 1058,
    Tfr: 120087,
    Ucy: 1059,
    Ufr: 120088,
    Vcy: 1042,
    Vee: 8897,
    Vfr: 120089,
    Wfr: 120090,
    Xfr: 120091,
    Ycy: 1067,
    Yfr: 120092,
    Zcy: 1047,
    Zfr: 8488,
    acd: 8767,
    acy: 1072,
    afr: 120094,
    amp: 38,
    and: 8743,
    ang: 8736,
    apE: 10864,
    ape: 8778,
    ast: 42,
    bcy: 1073,
    bfr: 120095,
    bot: 8869,
    cap: 8745,
    cfr: 120096,
    chi: 967,
    cir: 9675,
    cup: 8746,
    dcy: 1076,
    deg: 176,
    dfr: 120097,
    die: 168,
    div: 247,
    dot: 729,
    ecy: 1101,
    efr: 120098,
    egs: 10902,
    ell: 8467,
    els: 10901,
    eng: 331,
    eta: 951,
    eth: 240,
    fcy: 1092,
    ffr: 120099,
    gEl: 10892,
    gap: 10886,
    gcy: 1075,
    gel: 8923,
    geq: 8805,
    ges: 10878,
    gfr: 120100,
    ggg: 8921,
    glE: 10898,
    gla: 10917,
    glj: 10916,
    gnE: 8809,
    gne: 10888,
    hfr: 120101,
    icy: 1080,
    iff: 8660,
    ifr: 120102,
    int: 8747,
    jcy: 1081,
    jfr: 120103,
    kcy: 1082,
    kfr: 120104,
    lEg: 10891,
    lap: 10885,
    lat: 10923,
    lcy: 1083,
    leg: 8922,
    leq: 8804,
    les: 10877,
    lfr: 120105,
    lgE: 10897,
    lnE: 8808,
    lne: 10887,
    loz: 9674,
    lrm: 8206,
    lsh: 8624,
    map: 8614,
    mcy: 1084,
    mfr: 120106,
    mho: 8487,
    mid: 8739,
    nap: 8777,
    ncy: 1085,
    nfr: 120107,
    nge: 8817,
    ngt: 8815,
    nis: 8956,
    niv: 8715,
    nle: 8816,
    nlt: 8814,
    not: 172,
    npr: 8832,
    nsc: 8833,
    num: 35,
    ocy: 1086,
    ofr: 120108,
    ogt: 10689,
    ohm: 8486,
    olt: 10688,
    ord: 10845,
    orv: 10843,
    par: 8741,
    pcy: 1087,
    pfr: 120109,
    phi: 966,
    piv: 982,
    prE: 10931,
    pre: 10927,
    psi: 968,
    qfr: 120110,
    rcy: 1088,
    reg: 174,
    rfr: 120111,
    rho: 961,
    rlm: 8207,
    rsh: 8625,
    scE: 10932,
    sce: 10928,
    scy: 1089,
    sfr: 120112,
    shy: 173,
    sim: 8764,
    smt: 10922,
    sol: 47,
    squ: 9633,
    sub: 8834,
    sum: 8721,
    sup: 8835,
    tau: 964,
    tcy: 1090,
    tfr: 120113,
    top: 8868,
    ucy: 1091,
    ufr: 120114,
    uml: 168,
    vcy: 1074,
    vee: 8744,
    vfr: 120115,
    wfr: 120116,
    xfr: 120117,
    ycy: 1099,
    yen: 165,
    yfr: 120118,
    zcy: 1079,
    zfr: 120119,
    zwj: 8205,
    DD: 8517,
    GT: 62,
    Gg: 8921,
    Gt: 8811,
    Im: 8465,
    LT: 60,
    Ll: 8920,
    Lt: 8810,
    Mu: 924,
    Nu: 925,
    Or: 10836,
    Pi: 928,
    Pr: 10939,
    Re: 8476,
    Sc: 10940,
    Xi: 926,
    ac: 8766,
    af: 8289,
    ap: 8776,
    dd: 8518,
    ee: 8519,
    eg: 10906,
    el: 10905,
    gE: 8807,
    ge: 8805,
    gg: 8811,
    gl: 8823,
    gt: 62,
    ic: 8291,
    ii: 8520,
    "in": 8712,
    it: 8290,
    lE: 8806,
    le: 8804,
    lg: 8822,
    ll: 8810,
    lt: 60,
    mp: 8723,
    mu: 956,
    ne: 8800,
    ni: 8715,
    nu: 957,
    oS: 9416,
    or: 8744,
    pi: 960,
    pm: 177,
    pr: 8826,
    rx: 8478,
    sc: 8827,
    wp: 8472,
    wr: 8768,
    xi: 958
};

var windows1252 = [
    8364,
    129,
    8218,
    402,
    8222,
    8230,
    8224,
    8225,
    710,
    8240,
    352,
    8249,
    338,
    141,
    381,
    143,
    144,
    8216,
    8217,
    8220,
    8221,
    8226,
    8211,
    8212,
    732,
    8482,
    353,
    8250,
    339,
    157,
    382,
    376,
];
var entityPattern = new RegExp("&(#?(?:x[\\w\\d]+|\\d+|" + Object.keys(htmlEntities).join('|') + "));?", 'g');
function decodeCharacterReferences(html) {
    return html.replace(entityPattern, function (match, entity) {
        var code;
        // Handle named entities
        if (entity[0] !== '#') {
            code = htmlEntities[entity];
        }
        else if (entity[1] === 'x') {
            code = parseInt(entity.substring(2), 16);
        }
        else {
            code = parseInt(entity.substring(1), 10);
        }
        if (!code) {
            return match;
        }
        return String.fromCodePoint(validateCode(code));
    });
}
var NUL = 0;
// some code points are verboten. If we were inserting HTML, the browser would replace the illegal
// code points with alternatives in some cases - since we're bypassing that mechanism, we need
// to replace them ourselves
//
// Source: http://en.wikipedia.org/wiki/Character_encodings_in_HTML#Illegal_characters
function validateCode(code) {
    // line feed becomes generic whitespace
    if (code === 10) {
        return 32;
    }
    // ASCII range. (Why someone would use HTML entities for ASCII characters I don't know, but...)
    if (code < 128) {
        return code;
    }
    // code points 128-159 are dealt with leniently by browsers, but they're incorrect. We need
    // to correct the mistake or we'll end up with missing € signs and so on
    if (code <= 159) {
        return windows1252[code - 128];
    }
    // basic multilingual plane
    if (code < 55296) {
        return code;
    }
    // UTF-16 surrogate halves
    if (code <= 57343) {
        return NUL;
    }
    // rest of the basic multilingual plane
    if (code <= 65535) {
        return code;
    }
    // supplementary multilingual plane 0x10000 - 0x1ffff
    if (code >= 65536 && code <= 131071) {
        return code;
    }
    // supplementary ideographic plane 0x20000 - 0x2ffff
    if (code >= 131072 && code <= 196607) {
        return code;
    }
    return NUL;
}

var voidElementNames = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function isVoidElementName(name) {
    return voidElementNames.test(name) || name.toLowerCase() === '!doctype';
}

var validTagName = /^\!?[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/;
var SELF = ':Self';
var COMPONENT = ':Component';
var metaTags = new Set([
    ':Window',
    ':Head'
]);
var specials = new Map([
    [
        'script',
        {
            read: readScript,
            property: 'js'
        },
    ],
    [
        'style',
        {
            read: readStyle,
            property: 'css'
        },
    ],
]);
// based on http://developers.whatwg.org/syntax.html#syntax-tag-omission
var disallowedContents = new Map([
    ['li', new Set(['li'])],
    ['dt', new Set(['dt', 'dd'])],
    ['dd', new Set(['dt', 'dd'])],
    [
        'p',
        new Set('address article aside blockquote div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul'.split(' ')),
    ],
    ['rt', new Set(['rt', 'rp'])],
    ['rp', new Set(['rt', 'rp'])],
    ['optgroup', new Set(['optgroup'])],
    ['option', new Set(['option', 'optgroup'])],
    ['thead', new Set(['tbody', 'tfoot'])],
    ['tbody', new Set(['tbody', 'tfoot'])],
    ['tfoot', new Set(['tbody'])],
    ['tr', new Set(['tr', 'tbody'])],
    ['td', new Set(['td', 'th', 'tr'])],
    ['th', new Set(['td', 'th', 'tr'])],
]);
function tag(parser) {
    var start = parser.index++;
    var parent = parser.current();
    if (parser.eat('!--')) {
        var data = parser.readUntil(/-->/);
        parser.eat('-->', true, 'comment was left open, expected -->');
        parser.current().children.push({
            start: start,
            end: parser.index,
            type: 'Comment',
            data: data
        });
        return;
    }
    var isClosingTag = parser.eat('/');
    var name = readTagName(parser);
    if (metaTags.has(name)) {
        if (isClosingTag) {
            if (name === ':Window' && parser.current().children.length) {
                parser.error("<:Window> cannot have children", parser.current().children[0].start);
            }
        }
        else {
            if (name in parser.metaTags) {
                parser.error("A component can only have one <" + name + "> tag", start);
            }
            if (parser.stack.length > 1) {
                console.log(parser.stack);
                parser.error("<" + name + "> tags cannot be inside elements or blocks", start);
            }
            parser.metaTags[name] = true;
        }
    }
    var type = metaTags.has(name)
        ? name.slice(1)
        : 'Element'; // TODO in v2, capitalised name means 'Component'
    var element = {
        start: start,
        end: null,
        type: type,
        name: name,
        attributes: [],
        children: []
    };
    parser.allowWhitespace();
    if (isClosingTag) {
        if (isVoidElementName(name)) {
            parser.error("<" + name + "> is a void element and cannot have children, or a closing tag", start);
        }
        if (!parser.eat('>'))
            parser.error("Expected '>'");
        // close any elements that don't have their own closing tags, e.g. <div><p></div>
        while (parent.name !== name) {
            if (parent.type !== 'Element')
                parser.error("</" + name + "> attempted to close an element that was not open", start);
            parent.end = start;
            parser.stack.pop();
            parent = parser.current();
        }
        parent.end = parser.index;
        parser.stack.pop();
        return;
    }
    else if (disallowedContents.has(parent.name)) {
        // can this be a child of the parent element, or does it implicitly
        // close it, like `<li>one<li>two`?
        if (disallowedContents.get(parent.name).has(name)) {
            parent.end = start;
            parser.stack.pop();
        }
    }
    if (name === 'slot') {
        var i = parser.stack.length;
        while (i--) {
            var item = parser.stack[i];
            if (item.type === 'EachBlock') {
                parser.error("<slot> cannot be a child of an each-block", start);
            }
        }
    }
    if (name === COMPONENT) {
        parser.eat('{', true);
        element.expression = readExpression(parser);
        parser.allowWhitespace();
        parser.eat('}', true);
        parser.allowWhitespace();
    }
    var uniqueNames = new Set();
    var attribute;
    while ((attribute = readAttribute(parser, uniqueNames))) {
        if (attribute.type === 'Binding' && !parser.allowBindings) {
            parser.error("Two-way binding is disabled", attribute.start);
        }
        element.attributes.push(attribute);
        parser.allowWhitespace();
    }
    // special cases – top-level <script> and <style>
    if (specials.has(name) && parser.stack.length === 1) {
        var special = specials.get(name);
        if (parser[special.property]) {
            parser.index = start;
            parser.error("You can only have one top-level <" + name + "> tag per component");
        }
        parser.eat('>', true);
        parser[special.property] = special.read(parser, start, element.attributes);
        return;
    }
    parser.current().children.push(element);
    var selfClosing = parser.eat('/') || isVoidElementName(name);
    parser.eat('>', true);
    if (selfClosing) {
        // don't push self-closing elements onto the stack
        element.end = parser.index;
    }
    else if (name === 'textarea') {
        // special case
        element.children = readSequence(parser, function () {
            return parser.template.slice(parser.index, parser.index + 11) === '</textarea>';
        });
        parser.read(/<\/textarea>/);
        element.end = parser.index;
    }
    else if (name === 'script') {
        // special case
        var start_1 = parser.index;
        var data = parser.readUntil(/<\/script>/);
        var end = parser.index;
        element.children.push({ start: start_1, end: end, type: 'Text', data: data });
        parser.eat('</script>', true);
        element.end = parser.index;
    }
    else if (name === 'style') {
        // special case
        element.children = readSequence(parser, function () {
            return parser.template.slice(parser.index, parser.index + 8) === '</style>';
        });
        parser.read(/<\/style>/);
        element.end = parser.index;
    }
    else {
        parser.stack.push(element);
    }
}
function readTagName(parser) {
    var start = parser.index;
    if (parser.eat(SELF)) {
        // check we're inside a block, otherwise this
        // will cause infinite recursion
        var i = parser.stack.length;
        var legal = false;
        while (i--) {
            var fragment = parser.stack[i];
            if (fragment.type === 'IfBlock' || fragment.type === 'EachBlock') {
                legal = true;
                break;
            }
        }
        if (!legal) {
            parser.error("<" + SELF + "> components can only exist inside if-blocks or each-blocks", start);
        }
        return SELF;
    }
    if (parser.eat(COMPONENT))
        return COMPONENT;
    var name = parser.readUntil(/(\s|\/|>)/);
    if (metaTags.has(name))
        return name;
    if (!validTagName.test(name)) {
        parser.error("Expected valid tag name", start);
    }
    return name;
}
function readAttribute(parser, uniqueNames) {
    var start = parser.index;
    var name = parser.readUntil(/(\s|=|\/|>)/);
    if (!name)
        return null;
    if (uniqueNames.has(name)) {
        parser.error('Attributes need to be unique', start);
    }
    uniqueNames.add(name);
    parser.allowWhitespace();
    var attribute = readDirective(parser, start, name);
    if (attribute)
        return attribute;
    var value = parser.eat('=') ? readAttributeValue(parser) : true;
    return {
        start: start,
        end: parser.index,
        type: 'Attribute',
        name: name,
        value: value
    };
}
function readAttributeValue(parser) {
    var quoteMark = parser.eat("'") ? "'" : parser.eat("\"") ? "\"" : null;
    var regex = quoteMark === "'"
        ? /'/
        : quoteMark === "\"" ? /"/ : /[\s"'=<>\/`]/;
    var value = readSequence(parser, function () {
        return regex.test(parser.template[parser.index]);
    });
    if (quoteMark)
        parser.index += 1;
    return value;
}
function readSequence(parser, done) {
    var currentChunk = {
        start: parser.index,
        end: null,
        type: 'Text',
        data: ''
    };
    var chunks = [];
    while (parser.index < parser.template.length) {
        var index = parser.index;
        if (done()) {
            currentChunk.end = parser.index;
            if (currentChunk.data)
                chunks.push(currentChunk);
            chunks.forEach(function (chunk) {
                if (chunk.type === 'Text')
                    chunk.data = decodeCharacterReferences(chunk.data);
            });
            return chunks;
        }
        else if (parser.eat('{{')) {
            if (currentChunk.data) {
                currentChunk.end = index;
                chunks.push(currentChunk);
            }
            var expression = readExpression(parser);
            parser.allowWhitespace();
            if (!parser.eat('}}')) {
                parser.error("Expected }}");
            }
            chunks.push({
                start: index,
                end: parser.index,
                type: 'MustacheTag',
                expression: expression
            });
            currentChunk = {
                start: parser.index,
                end: null,
                type: 'Text',
                data: ''
            };
        }
        else {
            currentChunk.data += parser.template[parser.index++];
        }
    }
    parser.error("Unexpected end of input");
}

var whitespace = /[ \t\r\n]/;

function trimStart(str) {
    var i = 0;
    while (whitespace.test(str[i]))
        i += 1;
    return str.slice(i);
}
function trimEnd(str) {
    var i = str.length;
    while (whitespace.test(str[i - 1]))
        i -= 1;
    return str.slice(0, i);
}

function trimWhitespace(block, trimBefore, trimAfter) {
    if (!block.children || block.children.length === 0)
        return; // AwaitBlock
    var firstChild = block.children[0];
    var lastChild = block.children[block.children.length - 1];
    if (firstChild.type === 'Text' && trimBefore) {
        firstChild.data = trimStart(firstChild.data);
        if (!firstChild.data)
            block.children.shift();
    }
    if (lastChild.type === 'Text' && trimAfter) {
        lastChild.data = trimEnd(lastChild.data);
        if (!lastChild.data)
            block.children.pop();
    }
    if (block["else"]) {
        trimWhitespace(block["else"], trimBefore, trimAfter);
    }
    if (firstChild.elseif) {
        trimWhitespace(firstChild, trimBefore, trimAfter);
    }
}
function mustache(parser) {
    var start = parser.index;
    parser.index += 2;
    parser.allowWhitespace();
    // {{/if}} or {{/each}}
    if (parser.eat('/')) {
        var block = parser.current();
        var expected = void 0;
        if (block.type === 'ElseBlock' || block.type === 'PendingBlock' || block.type === 'ThenBlock' || block.type === 'CatchBlock') {
            block.end = start;
            parser.stack.pop();
            block = parser.current();
            expected = 'await';
        }
        if (block.type === 'IfBlock') {
            expected = 'if';
        }
        else if (block.type === 'EachBlock') {
            expected = 'each';
        }
        else if (block.type === 'AwaitBlock') {
            expected = 'await';
        }
        else {
            parser.error("Unexpected block closing tag");
        }
        parser.eat(expected, true);
        parser.allowWhitespace();
        parser.eat('}}', true);
        while (block.elseif) {
            block.end = parser.index;
            parser.stack.pop();
            block = parser.current();
            if (block["else"]) {
                block["else"].end = start;
            }
        }
        // strip leading/trailing whitespace as necessary
        var charBefore = parser.template[block.start - 1];
        var charAfter = parser.template[parser.index];
        var trimBefore = !charBefore || whitespace.test(charBefore);
        var trimAfter = !charAfter || whitespace.test(charAfter);
        trimWhitespace(block, trimBefore, trimAfter);
        block.end = parser.index;
        parser.stack.pop();
    }
    else if (parser.eat('elseif')) {
        var block = parser.current();
        if (block.type !== 'IfBlock')
            parser.error('Cannot have an {{elseif ...}} block outside an {{#if ...}} block');
        parser.requireWhitespace();
        var expression = readExpression(parser);
        parser.allowWhitespace();
        parser.eat('}}', true);
        block["else"] = {
            start: parser.index,
            end: null,
            type: 'ElseBlock',
            children: [
                {
                    start: parser.index,
                    end: null,
                    type: 'IfBlock',
                    elseif: true,
                    expression: expression,
                    children: []
                },
            ]
        };
        parser.stack.push(block["else"].children[0]);
    }
    else if (parser.eat('else')) {
        var block = parser.current();
        if (block.type !== 'IfBlock' && block.type !== 'EachBlock') {
            parser.error('Cannot have an {{else}} block outside an {{#if ...}} or {{#each ...}} block');
        }
        parser.allowWhitespace();
        parser.eat('}}', true);
        block["else"] = {
            start: parser.index,
            end: null,
            type: 'ElseBlock',
            children: []
        };
        parser.stack.push(block["else"]);
    }
    else if (parser.eat('then')) {
        // TODO DRY out this and the next section
        var pendingBlock = parser.current();
        if (pendingBlock.type === 'PendingBlock') {
            pendingBlock.end = start;
            parser.stack.pop();
            var awaitBlock = parser.current();
            parser.requireWhitespace();
            awaitBlock.value = parser.readIdentifier();
            parser.allowWhitespace();
            parser.eat('}}', true);
            var thenBlock = {
                start: start,
                end: null,
                type: 'ThenBlock',
                children: []
            };
            awaitBlock.then = thenBlock;
            parser.stack.push(thenBlock);
        }
    }
    else if (parser.eat('catch')) {
        var thenBlock = parser.current();
        if (thenBlock.type === 'ThenBlock') {
            thenBlock.end = start;
            parser.stack.pop();
            var awaitBlock = parser.current();
            parser.requireWhitespace();
            awaitBlock.error = parser.readIdentifier();
            parser.allowWhitespace();
            parser.eat('}}', true);
            var catchBlock = {
                start: start,
                end: null,
                type: 'CatchBlock',
                children: []
            };
            awaitBlock["catch"] = catchBlock;
            parser.stack.push(catchBlock);
        }
    }
    else if (parser.eat('#')) {
        // {{#if foo}} or {{#each foo}}
        var type = void 0;
        if (parser.eat('if')) {
            type = 'IfBlock';
        }
        else if (parser.eat('each')) {
            type = 'EachBlock';
        }
        else if (parser.eat('await')) {
            type = 'AwaitBlock';
        }
        else {
            parser.error("Expected if, each or await");
        }
        parser.requireWhitespace();
        var expression = readExpression(parser);
        var block = type === 'AwaitBlock' ?
            {
                start: start,
                end: null,
                type: type,
                expression: expression,
                value: null,
                error: null,
                pending: {
                    start: null,
                    end: null,
                    type: 'PendingBlock',
                    children: []
                },
                then: {
                    start: null,
                    end: null,
                    type: 'ThenBlock',
                    children: []
                },
                "catch": {
                    start: null,
                    end: null,
                    type: 'CatchBlock',
                    children: []
                }
            } :
            {
                start: start,
                end: null,
                type: type,
                expression: expression,
                children: []
            };
        parser.allowWhitespace();
        // {{#each}} blocks must declare a context – {{#each list as item}}
        if (type === 'EachBlock') {
            parser.eat('as', true);
            parser.requireWhitespace();
            if (parser.eat('[')) {
                parser.allowWhitespace();
                block.destructuredContexts = [];
                do {
                    parser.allowWhitespace();
                    var destructuredContext = parser.readIdentifier();
                    if (!destructuredContext)
                        parser.error("Expected name");
                    block.destructuredContexts.push(destructuredContext);
                    parser.allowWhitespace();
                } while (parser.eat(','));
                if (!block.destructuredContexts.length)
                    parser.error("Expected name");
                block.context = block.destructuredContexts.join('_');
                parser.allowWhitespace();
                parser.eat(']', true);
            }
            else {
                block.context = parser.readIdentifier();
                if (!block.context)
                    parser.error("Expected name");
            }
            parser.allowWhitespace();
            if (parser.eat(',')) {
                parser.allowWhitespace();
                block.index = parser.readIdentifier();
                if (!block.index)
                    parser.error("Expected name");
                parser.allowWhitespace();
            }
            if (parser.eat('@')) {
                block.key = parser.readIdentifier();
                if (!block.key)
                    parser.error("Expected name");
                parser.allowWhitespace();
            }
        }
        var awaitBlockShorthand = type === 'AwaitBlock' && parser.eat('then');
        if (awaitBlockShorthand) {
            parser.requireWhitespace();
            block.value = parser.readIdentifier();
            parser.allowWhitespace();
        }
        parser.eat('}}', true);
        parser.current().children.push(block);
        parser.stack.push(block);
        if (type === 'AwaitBlock') {
            var childBlock = awaitBlockShorthand ? block.then : block.pending;
            childBlock.start = parser.index;
            parser.stack.push(childBlock);
        }
    }
    else if (parser.eat('yield')) {
        // {{yield}}
        // TODO deprecate
        parser.allowWhitespace();
        parser.eat('}}', true);
        parser.current().children.push({
            start: start,
            end: parser.index,
            type: 'Element',
            name: 'slot',
            attributes: [],
            children: []
        });
    }
    else if (parser.eat('{')) {
        // {{{raw}}} mustache
        var expression = readExpression(parser);
        parser.allowWhitespace();
        parser.eat('}}}', true);
        parser.current().children.push({
            start: start,
            end: parser.index,
            type: 'RawMustacheTag',
            expression: expression
        });
    }
    else {
        var expression = readExpression(parser);
        parser.allowWhitespace();
        parser.eat('}}', true);
        parser.current().children.push({
            start: start,
            end: parser.index,
            type: 'MustacheTag',
            expression: expression
        });
    }
}

function text(parser) {
    var start = parser.index;
    var data = '';
    while (parser.index < parser.template.length &&
        !parser.match('<') &&
        !parser.match('{{')) {
        data += parser.template[parser.index++];
    }
    parser.current().children.push({
        start: start,
        end: parser.index,
        type: 'Text',
        data: decodeCharacterReferences(data)
    });
}

function fragment(parser) {
    if (parser.match('<')) {
        return tag;
    }
    if (parser.match('{{')) {
        return mustache;
    }
    return text;
}

var reservedNames = new Set([
    'arguments',
    'await',
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'eval',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'interface',
    'let',
    'new',
    'null',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'static',
    'super',
    'switch',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
]);

// Adapted from https://github.com/acornjs/acorn/blob/6584815dca7440e00de841d1dad152302fdd7ca5/src/tokenize.js
// Reproduced under MIT License https://github.com/acornjs/acorn/blob/master/LICENSE
function fullCharCodeAt(str, i) {
    var code = str.charCodeAt(i);
    if (code <= 0xd7ff || code >= 0xe000)
        return code;
    var next = str.charCodeAt(i + 1);
    return (code << 10) + next - 0x35fdc00;
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    var hash = 5381;
    var i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return (hash >>> 0).toString(36);
}

function getLocator(source, options) {
    if (options === void 0) { options = {}; }
    var offsetLine = options.offsetLine || 0;
    var offsetColumn = options.offsetColumn || 0;
    var originalLines = source.split('\n');
    var start = 0;
    var lineRanges = originalLines.map(function (line, i) {
        var end = start + line.length + 1;
        var range = { start: start, end: end, line: i };
        start = end;
        return range;
    });
    var i = 0;
    function rangeContains(range, index) {
        return range.start <= index && index < range.end;
    }
    function getLocation(range, index) {
        return { line: offsetLine + range.line, column: offsetColumn + index - range.start, character: index };
    }
    function locate(search, startIndex) {
        if (typeof search === 'string') {
            search = source.indexOf(search, startIndex || 0);
        }
        var range = lineRanges[i];
        var d = search >= range.end ? 1 : -1;
        while (range) {
            if (rangeContains(range, search))
                return getLocation(range, search);
            i += d;
            range = lineRanges[i];
        }
    }
    
    return locate;
}
function locate(source, search, options) {
    if (typeof options === 'number') {
        throw new Error('locate takes a { startIndex, offsetLine, offsetColumn } object as the third argument');
    }
    return getLocator(source, options)(search, options && options.startIndex);
}

function tabsToSpaces(str) {
    return str.replace(/^\t+/, function (match) { return match.split('\t').join('  '); });
}
function getCodeFrame(source, line, column) {
    var lines = source.split('\n');
    var frameStart = Math.max(0, line - 2);
    var frameEnd = Math.min(line + 3, lines.length);
    var digits = String(frameEnd + 1).length;
    return lines
        .slice(frameStart, frameEnd)
        .map(function (str, i) {
        var isErrorLine = frameStart + i === line;
        var lineNum = String(i + frameStart + 1);
        while (lineNum.length < digits)
            lineNum = " " + lineNum;
        if (isErrorLine) {
            var indicator = repeat(' ', digits + 2 + tabsToSpaces(str.slice(0, column)).length) + '^';
            return lineNum + ": " + tabsToSpaces(str) + "\n" + indicator;
        }
        return lineNum + ": " + tabsToSpaces(str);
    })
        .join('\n');
}

var CompileError = /** @class */ (function (_super) {
    __extends(CompileError, _super);
    function CompileError(message, template, startPos, filename, endPos) {
        if (endPos === void 0) { endPos = startPos; }
        var _this = _super.call(this, message) || this;
        _this.toString = function () {
            return _this.message + " (" + _this.loc.line + ":" + _this.loc.column + ")\n" + _this
                .frame;
        };
        var start = locate(template, startPos);
        var end = locate(template, endPos);
        _this.loc = { line: start.line + 1, column: start.column };
        _this.end = { line: end.line + 1, column: end.column };
        _this.pos = startPos;
        _this.filename = filename;
        _this.frame = getCodeFrame(template, start.line, start.column);
        return _this;
    }
    return CompileError;
}(Error));

var ParseError = /** @class */ (function (_super) {
    __extends(ParseError, _super);
    function ParseError(message, template, index, filename) {
        var _this = _super.call(this, message, template, index, filename) || this;
        _this.name = 'ParseError';
        return _this;
    }
    return ParseError;
}(CompileError));
var Parser = /** @class */ (function () {
    function Parser(template, options) {
        if (typeof template !== 'string') {
            throw new TypeError('Template must be a string');
        }
        this.template = template.replace(/\s+$/, '');
        this.filename = options.filename;
        this.allowBindings = options.bind !== false;
        this.index = 0;
        this.stack = [];
        this.metaTags = {};
        this.html = {
            start: null,
            end: null,
            type: 'Fragment',
            children: []
        };
        this.css = null;
        this.js = null;
        this.stack.push(this.html);
        var state = fragment;
        while (this.index < this.template.length) {
            state = state(this) || fragment;
        }
        if (this.stack.length > 1) {
            var current = this.current();
            var type = current.type === 'Element' ? "<" + current.name + ">" : 'Block';
            this.error(type + " was left open", current.start);
        }
        if (state !== fragment) {
            this.error('Unexpected end of input');
        }
        if (this.html.children.length) {
            var start = this.html.children[0] && this.html.children[0].start;
            while (/\s/.test(template[start]))
                start += 1;
            var end = this.html.children[this.html.children.length - 1] && this.html.children[this.html.children.length - 1].end;
            while (/\s/.test(template[end - 1]))
                end -= 1;
            this.html.start = start;
            this.html.end = end;
        }
        else {
            this.html.start = this.html.end = null;
        }
    }
    Parser.prototype.current = function () {
        return this.stack[this.stack.length - 1];
    };
    Parser.prototype.acornError = function (err) {
        this.error(err.message.replace(/ \(\d+:\d+\)$/, ''), err.pos);
    };
    Parser.prototype.error = function (message, index) {
        if (index === void 0) { index = this.index; }
        throw new ParseError(message, this.template, index, this.filename);
    };
    Parser.prototype.eat = function (str, required, message) {
        if (this.match(str)) {
            this.index += str.length;
            return true;
        }
        if (required) {
            this.error(message || "Expected " + str);
        }
        return false;
    };
    Parser.prototype.match = function (str) {
        return this.template.slice(this.index, this.index + str.length) === str;
    };
    Parser.prototype.allowWhitespace = function () {
        while (this.index < this.template.length &&
            whitespace.test(this.template[this.index])) {
            this.index++;
        }
    };
    Parser.prototype.read = function (pattern) {
        var match = pattern.exec(this.template.slice(this.index));
        if (!match || match.index !== 0)
            return null;
        this.index += match[0].length;
        return match[0];
    };
    Parser.prototype.readIdentifier = function () {
        var start = this.index;
        var i = this.index;
        var code = fullCharCodeAt(this.template, i);
        if (!isIdentifierStart(code, true))
            return null;
        i += code <= 0xffff ? 1 : 2;
        while (i < this.template.length) {
            var code_1 = fullCharCodeAt(this.template, i);
            if (!isIdentifierChar(code_1, true))
                break;
            i += code_1 <= 0xffff ? 1 : 2;
        }
        var identifier = this.template.slice(this.index, this.index = i);
        if (reservedNames.has(identifier)) {
            this.error("'" + identifier + "' is a reserved word in JavaScript and cannot be used here", start);
        }
        return identifier;
    };
    Parser.prototype.readUntil = function (pattern) {
        if (this.index >= this.template.length)
            this.error('Unexpected end of input');
        var start = this.index;
        var match = pattern.exec(this.template.slice(start));
        if (match) {
            this.index = start + match.index;
            return this.template.slice(start, this.index);
        }
        this.index = this.template.length;
        return this.template.slice(start);
    };
    Parser.prototype.remaining = function () {
        return this.template.slice(this.index);
    };
    Parser.prototype.requireWhitespace = function () {
        if (!whitespace.test(this.template[this.index])) {
            this.error("Expected whitespace");
        }
        this.allowWhitespace();
    };
    return Parser;
}());
function parse(template, options) {
    if (options === void 0) { options = {}; }
    var parser = new Parser(template, options);
    return {
        hash: hash(parser.template),
        html: parser.html,
        css: parser.css,
        js: parser.js
    };
}

var disallowed = new Set(['Literal', 'ObjectExpression', 'ArrayExpression']);
function data$1(validator, prop) {
    while (prop.type === 'ParenthesizedExpression')
        prop = prop.expression;
    if (disallowed.has(prop.value.type)) {
        validator.error("'data' must be a function", prop.value);
    }
}

function getMethodName(node) {
    if (node.type === 'Identifier')
        return node.name;
    if (node.type === 'Literal')
        return String(node.value);
}

function checkForDupes(validator, properties) {
    var seen = new Set();
    properties.forEach(function (prop) {
        var name = getMethodName(prop.key);
        if (seen.has(name)) {
            validator.error("Duplicate property '" + name + "'", prop);
        }
        seen.add(name);
    });
}

function checkForComputedKeys(validator, properties) {
    properties.forEach(function (prop) {
        if (prop.key.computed) {
            validator.error("Cannot use computed keys", prop);
        }
    });
}

function isValidIdentifier(str) {
    var i = 0;
    while (i < str.length) {
        var code = fullCharCodeAt(str, i);
        if (!(i === 0 ? isIdentifierStart : isIdentifierChar)(code, true))
            return false;
        i += code <= 0xffff ? 1 : 2;
    }
    return true;
}

function walkThroughTopFunctionScope(body, callback) {
    var lexicalDepth = 0;
    walk(body, {
        enter: function (node) {
            if (/^Function/.test(node.type)) {
                lexicalDepth += 1;
            }
            else if (lexicalDepth === 0) {
                callback(node);
            }
        },
        leave: function (node) {
            if (/^Function/.test(node.type)) {
                lexicalDepth -= 1;
            }
        }
    });
}

function isThisGetCallExpression(node) {
    return node.type === 'CallExpression' &&
        node.callee.type === 'MemberExpression' &&
        node.callee.object.type === 'ThisExpression' &&
        node.callee.property.name === 'get';
}

var isFunctionExpression = new Set([
    'FunctionExpression',
    'ArrowFunctionExpression',
]);
function computed(validator, prop) {
    if (prop.value.type !== 'ObjectExpression') {
        validator.error("The 'computed' property must be an object literal", prop);
    }
    checkForDupes(validator, prop.value.properties);
    checkForComputedKeys(validator, prop.value.properties);
    prop.value.properties.forEach(function (computation) {
        var name = getMethodName(computation.key);
        if (!isValidIdentifier(name)) {
            var suggestion = name.replace(/[^_$a-z0-9]/ig, '_').replace(/^\d/, '_$&');
            validator.error("Computed property name '" + name + "' is invalid \u2014 must be a valid identifier such as " + suggestion, computation);
        }
        if (reservedNames.has(name)) {
            validator.error("Computed property name '" + name + "' is invalid \u2014 cannot be a JavaScript reserved word", computation);
        }
        if (!isFunctionExpression.has(computation.value.type)) {
            validator.error("Computed properties can be function expressions or arrow function expressions", computation.value);
        }
        var _a = computation.value, body = _a.body, params = _a.params;
        walkThroughTopFunctionScope(body, function (node) {
            if (isThisGetCallExpression(node) && !node.callee.property.computed) {
                validator.error("Cannot use this.get(...) \u2014 values must be passed into the function as arguments", node);
            }
            if (node.type === 'ThisExpression') {
                validator.error("Computed properties should be pure functions \u2014 they do not have access to the component instance and cannot use 'this'. Did you mean to put this in 'methods'?", node);
            }
        });
        if (params.length === 0) {
            validator.error("A computed value must depend on at least one property", computation.value);
        }
        params.forEach(function (param) {
            var valid = param.type === 'Identifier' ||
                (param.type === 'AssignmentPattern' &&
                    param.left.type === 'Identifier');
            if (!valid) {
                validator.error("Computed properties cannot use destructuring in function parameters", param);
            }
        });
    });
}

function isReference(node, parent) {
    if (node.type === 'MemberExpression') {
        return !node.computed && isReference(node.object, node);
    }
    if (node.type === 'Identifier') {
        // the only time we could have an identifier node without a parent is
        // if it's the entire body of a function without a block statement –
        // i.e. an arrow function expression like `a => a`
        if (!parent)
            return true;
        // TODO is this right?
        if (parent.type === 'MemberExpression' || parent.type === 'MethodDefinition') {
            return parent.computed || node === parent.object;
        }
        // disregard the `bar` in `{ bar: foo }`, but keep it in `{ [bar]: foo }`
        if (parent.type === 'Property')
            return parent.computed || node === parent.value;
        // disregard the `bar` in `export { foo as bar }`
        if (parent.type === 'ExportSpecifier' && node !== parent.local)
            return false;
        return true;
    }
    return false;
}

function usesThisOrArguments(node) {
    var result = false;
    walk(node, {
        enter: function (node, parent) {
            if (result ||
                node.type === 'FunctionExpression' ||
                node.type === 'FunctionDeclaration') {
                return this.skip();
            }
            if (node.type === 'ThisExpression') {
                result = true;
            }
            if (node.type === 'Identifier' &&
                isReference(node, parent) &&
                node.name === 'arguments') {
                result = true;
            }
        }
    });
    return result;
}

function oncreate(validator, prop) {
    if (prop.value.type === 'ArrowFunctionExpression') {
        if (usesThisOrArguments(prop.value.body)) {
            validator.error("'oncreate' should be a function expression, not an arrow function expression", prop);
        }
    }
}

function ondestroy(validator, prop) {
    if (prop.value.type === 'ArrowFunctionExpression') {
        if (usesThisOrArguments(prop.value.body)) {
            validator.error("'ondestroy' should be a function expression, not an arrow function expression", prop);
        }
    }
}

function onrender(validator, prop) {
    validator.warn("'onrender' has been deprecated in favour of 'oncreate', and will cause an error in Svelte 2.x", prop);
    oncreate(validator, prop);
}

function onteardown(validator, prop) {
    validator.warn("'onteardown' has been deprecated in favour of 'ondestroy', and will cause an error in Svelte 2.x", prop);
    ondestroy(validator, prop);
}

function helpers(validator, prop) {
    if (prop.value.type !== 'ObjectExpression') {
        validator.error("The 'helpers' property must be an object literal", prop);
    }
    checkForDupes(validator, prop.value.properties);
    checkForComputedKeys(validator, prop.value.properties);
    prop.value.properties.forEach(function (prop) {
        if (!/FunctionExpression/.test(prop.value.type))
            return;
        var usesArguments = false;
        walkThroughTopFunctionScope(prop.value.body, function (node) {
            if (isThisGetCallExpression(node) && !node.callee.property.computed) {
                validator.error("Cannot use this.get(...) \u2014 values must be passed into the helper function as arguments", node);
            }
            if (node.type === 'ThisExpression') {
                validator.error("Helpers should be pure functions \u2014 they do not have access to the component instance and cannot use 'this'. Did you mean to put this in 'methods'?", node);
            }
            else if (node.type === 'Identifier' && node.name === 'arguments') {
                usesArguments = true;
            }
        });
        if (prop.value.params.length === 0 && !usesArguments) {
            validator.warn("Helpers should be pure functions, with at least one argument", prop);
        }
    });
}

function checkForAccessors(validator, properties, label) {
    properties.forEach(function (prop) {
        if (prop.kind !== 'init') {
            validator.error(label + " cannot use getters and setters", prop);
        }
    });
}

var builtin = new Set(['set', 'get', 'on', 'fire', 'observe', 'destroy']);
function methods(validator, prop) {
    if (prop.value.type !== 'ObjectExpression') {
        validator.error("The 'methods' property must be an object literal", prop);
    }
    checkForAccessors(validator, prop.value.properties, 'Methods');
    checkForDupes(validator, prop.value.properties);
    checkForComputedKeys(validator, prop.value.properties);
    prop.value.properties.forEach(function (prop) {
        var name = getMethodName(prop.key);
        if (builtin.has(name)) {
            validator.error("Cannot overwrite built-in method '" + name + "'", prop);
        }
        if (prop.value.type === 'ArrowFunctionExpression') {
            if (usesThisOrArguments(prop.value.body)) {
                validator.error("Method '" + prop.key
                    .name + "' should be a function expression, not an arrow function expression", prop);
            }
        }
    });
}

function components(validator, prop) {
    if (prop.value.type !== 'ObjectExpression') {
        validator.error("The 'components' property must be an object literal", prop);
    }
    checkForDupes(validator, prop.value.properties);
    checkForComputedKeys(validator, prop.value.properties);
    prop.value.properties.forEach(function (component) {
        var name = getMethodName(component.key);
        if (name === 'state') {
            validator.error("Component constructors cannot be called 'state' due to technical limitations", component);
        }
        if (!/^[A-Z]/.test(name)) {
            validator.warn("Component names should be capitalised", component);
        }
    });
}

function events(validator, prop) {
    if (prop.value.type !== 'ObjectExpression') {
        validator.error("The 'events' property must be an object literal", prop);
    }
    checkForDupes(validator, prop.value.properties);
    checkForComputedKeys(validator, prop.value.properties);
}

var html = 'http://www.w3.org/1999/xhtml';
var mathml = 'http://www.w3.org/1998/Math/MathML';
var svg = 'http://www.w3.org/2000/svg';
var xlink = 'http://www.w3.org/1999/xlink';
var xml = 'http://www.w3.org/XML/1998/namespace';
var xmlns = 'http://www.w3.org/2000/xmlns';
var validNamespaces = [
    'html',
    'mathml',
    'svg',
    'xlink',
    'xml',
    'xmlns',
    html,
    mathml,
    svg,
    xlink,
    xml,
    xmlns,
];
var namespaces = { html: html, mathml: mathml, svg: svg, xlink: xlink, xml: xml, xmlns: xmlns };

// adapted from https://github.com/Glench/fuzzyset.js/blob/master/lib/fuzzyset.js
// BSD Licensed
var GRAM_SIZE_LOWER = 2;
var GRAM_SIZE_UPPER = 3;
// return an edit distance from 0 to 1
function _distance(str1, str2) {
    if (str1 === null && str2 === null)
        throw 'Trying to compare two null values';
    if (str1 === null || str2 === null)
        return 0;
    str1 = String(str1);
    str2 = String(str2);
    var distance = levenshtein(str1, str2);
    if (str1.length > str2.length) {
        return 1 - distance / str1.length;
    }
    else {
        return 1 - distance / str2.length;
    }
}
// helper functions
function levenshtein(str1, str2) {
    var current = [];
    var prev;
    var value;
    for (var i = 0; i <= str2.length; i++) {
        for (var j = 0; j <= str1.length; j++) {
            if (i && j) {
                if (str1.charAt(j - 1) === str2.charAt(i - 1)) {
                    value = prev;
                }
                else {
                    value = Math.min(current[j], current[j - 1], prev) + 1;
                }
            }
            else {
                value = i + j;
            }
            prev = current[j];
            current[j] = value;
        }
    }
    return current.pop();
}
var _nonWordRe = /[^\w, ]+/;
function _iterateGrams(value, gramSize) {
    gramSize = gramSize || 2;
    var simplified = '-' + value.toLowerCase().replace(_nonWordRe, '') + '-';
    var lenDiff = gramSize - simplified.length;
    var results = [];
    if (lenDiff > 0) {
        for (var i = 0; i < lenDiff; ++i) {
            value += '-';
        }
    }
    for (var i = 0; i < simplified.length - gramSize + 1; ++i) {
        results.push(simplified.slice(i, i + gramSize));
    }
    return results;
}
function _gramCounter(value, gramSize) {
    // return an object where key=gram, value=number of occurrences
    gramSize = gramSize || 2;
    var result = {};
    var grams = _iterateGrams(value, gramSize);
    var i = 0;
    for (i; i < grams.length; ++i) {
        if (grams[i] in result) {
            result[grams[i]] += 1;
        }
        else {
            result[grams[i]] = 1;
        }
    }
    return result;
}
function sortDescending(a, b) {
    return b[0] - a[0];
}
var FuzzySet = /** @class */ (function () {
    function FuzzySet(arr) {
        // define all the object functions and attributes
        this.exactSet = {};
        this.matchDict = {};
        this.items = {};
        // initialization
        for (var i = GRAM_SIZE_LOWER; i < GRAM_SIZE_UPPER + 1; ++i) {
            this.items[i] = [];
        }
        // add all the items to the set
        for (var i = 0; i < arr.length; ++i) {
            this.add(arr[i]);
        }
    }
    FuzzySet.prototype.add = function (value) {
        var normalizedValue = value.toLowerCase();
        if (normalizedValue in this.exactSet) {
            return false;
        }
        var i = GRAM_SIZE_LOWER;
        for (i; i < GRAM_SIZE_UPPER + 1; ++i) {
            this._add(value, i);
        }
    };
    FuzzySet.prototype._add = function (value, gramSize) {
        var normalizedValue = value.toLowerCase();
        var items = this.items[gramSize] || [];
        var index = items.length;
        items.push(0);
        var gramCounts = _gramCounter(normalizedValue, gramSize);
        var sumOfSquareGramCounts = 0;
        var gram;
        var gramCount;
        for (gram in gramCounts) {
            gramCount = gramCounts[gram];
            sumOfSquareGramCounts += Math.pow(gramCount, 2);
            if (gram in this.matchDict) {
                this.matchDict[gram].push([index, gramCount]);
            }
            else {
                this.matchDict[gram] = [[index, gramCount]];
            }
        }
        var vectorNormal = Math.sqrt(sumOfSquareGramCounts);
        items[index] = [vectorNormal, normalizedValue];
        this.items[gramSize] = items;
        this.exactSet[normalizedValue] = value;
    };
    
    FuzzySet.prototype.get = function (value) {
        var normalizedValue = value.toLowerCase();
        var result = this.exactSet[normalizedValue];
        if (result) {
            return [[1, result]];
        }
        var results = [];
        // start with high gram size and if there are no results, go to lower gram sizes
        for (var gramSize = GRAM_SIZE_UPPER; gramSize >= GRAM_SIZE_LOWER; --gramSize) {
            results = this.__get(value, gramSize);
            if (results) {
                return results;
            }
        }
        return null;
    };
    FuzzySet.prototype.__get = function (value, gramSize) {
        var normalizedValue = value.toLowerCase();
        var matches = {};
        var gramCounts = _gramCounter(normalizedValue, gramSize);
        var items = this.items[gramSize];
        var sumOfSquareGramCounts = 0;
        var gram;
        var gramCount;
        var i;
        var index;
        var otherGramCount;
        for (gram in gramCounts) {
            gramCount = gramCounts[gram];
            sumOfSquareGramCounts += Math.pow(gramCount, 2);
            if (gram in this.matchDict) {
                for (i = 0; i < this.matchDict[gram].length; ++i) {
                    index = this.matchDict[gram][i][0];
                    otherGramCount = this.matchDict[gram][i][1];
                    if (index in matches) {
                        matches[index] += gramCount * otherGramCount;
                    }
                    else {
                        matches[index] = gramCount * otherGramCount;
                    }
                }
            }
        }
        var vectorNormal = Math.sqrt(sumOfSquareGramCounts);
        var results = [];
        var matchScore;
        // build a results list of [score, str]
        for (var matchIndex in matches) {
            matchScore = matches[matchIndex];
            results.push([
                matchScore / (vectorNormal * items[matchIndex][0]),
                items[matchIndex][1],
            ]);
        }
        results.sort(sortDescending);
        var newResults = [];
        var endIndex = Math.min(50, results.length);
        // truncate somewhat arbitrarily to 50
        for (var i_1 = 0; i_1 < endIndex; ++i_1) {
            newResults.push([
                _distance(results[i_1][1], normalizedValue),
                results[i_1][1],
            ]);
        }
        results = newResults;
        results.sort(sortDescending);
        newResults = [];
        for (var i_2 = 0; i_2 < results.length; ++i_2) {
            if (results[i_2][0] == results[0][0]) {
                newResults.push([results[i_2][0], this.exactSet[results[i_2][1]]]);
            }
        }
        return newResults;
    };
    
    return FuzzySet;
}());

function fuzzymatch(name, names) {
    var set = new FuzzySet(names);
    var matches = set.get(name);
    return matches && matches[0] && matches[0][0] > 0.7 ? matches[0][1] : null;
}

var valid = new Set(validNamespaces);
function namespace(validator, prop) {
    var ns = prop.value.value;
    if (prop.value.type !== 'Literal' || typeof ns !== 'string') {
        validator.error("The 'namespace' property must be a string literal representing a valid namespace", prop);
    }
    if (!valid.has(ns)) {
        var match = fuzzymatch(ns, validNamespaces);
        if (match) {
            validator.error("Invalid namespace '" + ns + "' (did you mean '" + match + "'?)", prop);
        }
        else {
            validator.error("Invalid namespace '" + ns + "'", prop);
        }
    }
}

function preload(validator, prop) {
    // not sure there's anything we need to check here...
}

function props(validator, prop) {
    if (prop.value.type !== 'ArrayExpression') {
        validator.error("'props' must be an array expression, if specified", prop.value);
    }
    prop.value.elements.forEach(function (element) {
        if (element.type !== 'Literal' || typeof element.value !== 'string') {
            validator.error("'props' must be an array of string literals", element);
        }
    });
}

function tag$1(validator, prop) {
    if (prop.value.type !== 'Literal' || typeof prop.value.value !== 'string') {
        validator.error("'tag' must be a string literal", prop.value);
    }
    var tag = prop.value.value;
    if (!/^[a-zA-Z][a-zA-Z0-9]*-[a-zA-Z0-9-]+$/.test(tag)) {
        validator.error("tag name must be two or more words joined by the '-' character", prop.value);
    }
}

function transitions(validator, prop) {
    if (prop.value.type !== 'ObjectExpression') {
        validator.error("The 'transitions' property must be an object literal", prop);
    }
    checkForDupes(validator, prop.value.properties);
    checkForComputedKeys(validator, prop.value.properties);
    prop.value.properties.forEach(function () {
        // TODO probably some validation that can happen here...
        // checking for use of `this` etc?
    });
}

var disallowed$1 = new Set(['Literal', 'ObjectExpression', 'ArrayExpression']);
function setup(validator, prop) {
    while (prop.type === 'ParenthesizedExpression')
        prop = prop.expression;
    if (disallowed$1.has(prop.value.type)) {
        validator.error("'setup' must be a function", prop.value);
    }
}

function store(validator, prop) {
    // not sure there's anything we need to check here...
}

function immutable(validator, prop) {
    if (prop.value.type !== 'Literal' || typeof prop.value.value !== 'boolean') {
        validator.error("'immutable' must be a boolean literal", prop.value);
    }
}

var propValidators = {
    data: data$1,
    computed: computed,
    oncreate: oncreate,
    ondestroy: ondestroy,
    onrender: onrender,
    onteardown: onteardown,
    helpers: helpers,
    methods: methods,
    components: components,
    events: events,
    namespace: namespace,
    preload: preload,
    props: props,
    tag: tag$1,
    transitions: transitions,
    setup: setup,
    store: store,
    immutable: immutable
};

var validPropList = Object.keys(propValidators);
function validateJs(validator, js) {
    js.content.body.forEach(function (node) {
        // check there are no named exports
        if (node.type === 'ExportNamedDeclaration') {
            validator.error("A component can only have a default export", node);
        }
        if (node.type === 'ExportDefaultDeclaration') {
            if (node.declaration.type !== 'ObjectExpression') {
                return validator.error("Default export must be an object literal", node.declaration);
            }
            checkForComputedKeys(validator, node.declaration.properties);
            checkForDupes(validator, node.declaration.properties);
            var props_1 = validator.properties;
            node.declaration.properties.forEach(function (prop) {
                props_1.set(getMethodName(prop.key), prop);
            });
            // Remove these checks in version 2
            if (props_1.has('oncreate') && props_1.has('onrender')) {
                validator.error('Cannot have both oncreate and onrender', props_1.get('onrender'));
            }
            if (props_1.has('ondestroy') && props_1.has('onteardown')) {
                validator.error('Cannot have both ondestroy and onteardown', props_1.get('onteardown'));
            }
            // ensure all exported props are valid
            node.declaration.properties.forEach(function (prop) {
                var name = getMethodName(prop.key);
                var propValidator = propValidators[name];
                if (propValidator) {
                    propValidator(validator, prop);
                }
                else {
                    var match = fuzzymatch(name, validPropList);
                    if (match) {
                        validator.error("Unexpected property '" + name + "' (did you mean '" + match + "'?)", prop);
                    }
                    else if (/FunctionExpression/.test(prop.value.type)) {
                        validator.error("Unexpected property '" + name + "' (did you mean to include it in 'methods'?)", prop);
                    }
                    else {
                        validator.error("Unexpected property '" + name + "'", prop);
                    }
                }
            });
            if (props_1.has('namespace')) {
                var ns = props_1.get('namespace').value.value;
                validator.namespace = namespaces[ns] || ns;
            }
            validator.defaultExport = node;
        }
    });
    ['components', 'methods', 'helpers', 'transitions'].forEach(function (key) {
        if (validator.properties.has(key)) {
            validator.properties.get(key).value.properties.forEach(function (prop) {
                validator[key].set(getMethodName(prop.key), prop.value);
            });
        }
    });
}

function flatten(node) {
    var parts = [];
    var propEnd = node.end;
    while (node.type === 'MemberExpression') {
        if (node.computed)
            return null;
        parts.unshift(node.property.name);
        node = node.object;
    }
    var propStart = node.end;
    var name = node.type === 'Identifier'
        ? node.name
        : node.type === 'ThisExpression' ? 'this' : null;
    if (!name)
        return null;
    parts.unshift(name);
    return { name: name, parts: parts, keypath: name + "[\u2702" + propStart + "-" + propEnd + "\u2702]" };
}

function list$2(items, conjunction) {
    if (conjunction === void 0) { conjunction = 'or'; }
    if (items.length === 1)
        return items[0];
    return items.slice(0, -1).join(', ') + " " + conjunction + " " + items[items.length - 1];
}

var validCalleeObjects = new Set(['this', 'event', 'console']);

var validBuiltins = new Set(['set', 'fire', 'destroy']);
function validateEventHandlerCallee(validator, attribute, refCallees) {
    if (!attribute.expression)
        return;
    var _a = attribute.expression, callee = _a.callee, type = _a.type;
    if (type !== 'CallExpression') {
        validator.error("Expected a call expression", attribute.expression);
    }
    var name = flatten(callee).name;
    if (validCalleeObjects.has(name) || name === 'options')
        return;
    if (name === 'refs') {
        refCallees.push(callee);
        return;
    }
    if (name === 'store' && attribute.expression.callee.type === 'MemberExpression') {
        if (!validator.options.store) {
            validator.warn('compile with `store: true` in order to call store methods', attribute.expression);
        }
        return;
    }
    if ((callee.type === 'Identifier' && validBuiltins.has(callee.name)) ||
        validator.methods.has(callee.name))
        return;
    var validCallees = ['this.*', 'event.*', 'options.*', 'console.*'].concat(validator.options.store ? 'store.*' : [], Array.from(validBuiltins), Array.from(validator.methods.keys()));
    var message = "'" + validator.source.slice(callee.start, callee.end) + "' is an invalid callee (should be one of " + list$2(validCallees) + ")";
    if (callee.type === 'Identifier' && validator.helpers.has(callee.name)) {
        message += ". '" + callee.name + "' exists on 'helpers', did you put it in the wrong place?";
    }
    validator.warn(message, attribute.expression);
}

var svg$1 = /^(?:altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform|circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix|feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting|feSpotLight|feTile|feTurbulence|filter|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern|image|line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata|missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor|stop|switch|symbol|text|textPath|tref|tspan|unknown|use|view|vkern)$/;
function validateElement(validator, node, refs, refCallees, stack, elementStack, isComponent) {
    if (isComponent) {
        validator.used.components.add(node.name);
    }
    if (!isComponent && /^[A-Z]/.test(node.name[0])) {
        // TODO upgrade to validator.error in v2
        validator.warn(node.name + " component is not defined", node);
    }
    if (elementStack.length === 0 && validator.namespace !== svg && svg$1.test(node.name)) {
        validator.warn("<" + node.name + "> is an SVG element \u2013 did you forget to add { namespace: 'svg' } ?", node);
    }
    if (node.name === 'slot') {
        var nameAttribute = node.attributes.find(function (attribute) { return attribute.name === 'name'; });
        if (nameAttribute) {
            if (nameAttribute.value.length !== 1 || nameAttribute.value[0].type !== 'Text') {
                validator.error("<slot> name cannot be dynamic", nameAttribute);
            }
            var slotName = nameAttribute.value[0].data;
            if (slotName === 'default') {
                validator.error("default is a reserved word \u2014 it cannot be used as a slot name", nameAttribute);
            }
            // TODO should duplicate slots be disallowed? Feels like it's more likely to be a
            // bug than anything. Perhaps it should be a warning
            // if (validator.slots.has(slotName)) {
            // 	validator.error(`duplicate '${slotName}' <slot> element`, nameAttribute.start);
            // }
            // validator.slots.add(slotName);
        }
        else {
            // if (validator.slots.has('default')) {
            // 	validator.error(`duplicate default <slot> element`, node.start);
            // }
            // validator.slots.add('default');
        }
    }
    if (node.name === 'title') {
        if (node.attributes.length > 0) {
            validator.error("<title> cannot have attributes", node.attributes[0]);
        }
        node.children.forEach(function (child) {
            if (child.type !== 'Text' && child.type !== 'MustacheTag') {
                validator.error("<title> can only contain text and {{tags}}", child);
            }
        });
    }
    var hasIntro;
    var hasOutro;
    var hasTransition;
    node.attributes.forEach(function (attribute) {
        if (attribute.type === 'Ref') {
            if (!refs.has(attribute.name))
                refs.set(attribute.name, []);
            refs.get(attribute.name).push(node);
        }
        if (!isComponent && attribute.type === 'Binding') {
            var name = attribute.name;
            if (name === 'value') {
                if (node.name !== 'input' &&
                    node.name !== 'textarea' &&
                    node.name !== 'select') {
                    validator.error("'value' is not a valid binding on <" + node.name + "> elements", attribute);
                }
                checkTypeAttribute(validator, node);
            }
            else if (name === 'checked' || name === 'indeterminate') {
                if (node.name !== 'input') {
                    validator.error("'" + name + "' is not a valid binding on <" + node.name + "> elements", attribute);
                }
                if (checkTypeAttribute(validator, node) !== 'checkbox') {
                    validator.error("'" + name + "' binding can only be used with <input type=\"checkbox\">", attribute);
                }
            }
            else if (name === 'group') {
                if (node.name !== 'input') {
                    validator.error("'group' is not a valid binding on <" + node.name + "> elements", attribute);
                }
                var type = checkTypeAttribute(validator, node);
                if (type !== 'checkbox' && type !== 'radio') {
                    validator.error("'checked' binding can only be used with <input type=\"checkbox\"> or <input type=\"radio\">", attribute);
                }
            }
            else if (name === 'currentTime' ||
                name === 'duration' ||
                name === 'paused' ||
                name === 'buffered' ||
                name === 'seekable' ||
                name === 'played' ||
                name === 'volume') {
                if (node.name !== 'audio' && node.name !== 'video') {
                    validator.error("'" + name + "' binding can only be used with <audio> or <video>", attribute);
                }
            }
            else {
                validator.error("'" + attribute.name + "' is not a valid binding", attribute);
            }
        }
        else if (attribute.type === 'EventHandler') {
            validator.used.events.add(attribute.name);
            validateEventHandlerCallee(validator, attribute, refCallees);
        }
        else if (attribute.type === 'Transition') {
            if (isComponent) {
                validator.error("Transitions can only be applied to DOM elements, not components", attribute);
            }
            validator.used.transitions.add(attribute.name);
            var bidi = attribute.intro && attribute.outro;
            if (hasTransition) {
                if (bidi)
                    validator.error("An element can only have one 'transition' directive", attribute);
                validator.error("An element cannot have both a 'transition' directive and an '" + (attribute.intro
                    ? 'in'
                    : 'out') + "' directive", attribute);
            }
            if ((hasIntro && attribute.intro) || (hasOutro && attribute.outro)) {
                if (bidi)
                    validator.error("An element cannot have both an '" + (hasIntro
                        ? 'in'
                        : 'out') + "' directive and a 'transition' directive", attribute);
                validator.error("An element can only have one '" + (hasIntro ? 'in' : 'out') + "' directive", attribute);
            }
            if (attribute.intro)
                hasIntro = true;
            if (attribute.outro)
                hasOutro = true;
            if (bidi)
                hasTransition = true;
            if (!validator.transitions.has(attribute.name)) {
                validator.error("Missing transition '" + attribute.name + "'", attribute);
            }
        }
        else if (attribute.type === 'Attribute') {
            if (attribute.name === 'value' && node.name === 'textarea') {
                if (node.children.length) {
                    validator.error("A <textarea> can have either a value attribute or (equivalently) child content, but not both", attribute);
                }
            }
            if (attribute.name === 'slot' && !isComponent) {
                checkSlotAttribute(validator, node, attribute, stack);
            }
        }
    });
}
function checkTypeAttribute(validator, node) {
    var attribute = node.attributes.find(function (attribute) { return attribute.name === 'type'; });
    if (!attribute)
        return null;
    if (attribute.value === true) {
        validator.error("'type' attribute must be specified", attribute);
    }
    if (isDynamic(attribute)) {
        validator.error("'type' attribute cannot be dynamic if input uses two-way binding", attribute);
    }
    return attribute.value[0].data;
}
function checkSlotAttribute(validator, node, attribute, stack) {
    if (isDynamic(attribute)) {
        validator.error("slot attribute cannot have a dynamic value", attribute);
    }
    var i = stack.length;
    while (i--) {
        var parent = stack[i];
        if (parent.type === 'Element') {
            // if we're inside a component or a custom element, gravy
            if (parent.name === ':Self' || parent.name === ':Component' || validator.components.has(parent.name))
                return;
            if (/-/.test(parent.name))
                return;
        }
        if (parent.type === 'IfBlock' || parent.type === 'EachBlock') {
            var message = "Cannot place slotted elements inside an " + (parent.type === 'IfBlock' ? 'if' : 'each') + "-block";
            validator.error(message, attribute);
        }
    }
    validator.error("Element with a slot='...' attribute must be a descendant of a component or custom element", attribute);
}
function isDynamic(attribute) {
    return attribute.value.length > 1 || attribute.value[0].type !== 'Text';
}

var validBindings = [
    'innerWidth',
    'innerHeight',
    'outerWidth',
    'outerHeight',
    'scrollX',
    'scrollY',
    'online'
];
function validateWindow(validator, node, refs, refCallees) {
    node.attributes.forEach(function (attribute) {
        if (attribute.type === 'Binding') {
            if (attribute.value.type !== 'Identifier') {
                var parts = flatten(attribute.value).parts;
                validator.error("Bindings on <:Window/> must be to top-level properties, e.g. '" + parts[parts.length - 1] + "' rather than '" + parts.join('.') + "'", attribute.value);
            }
            if (!~validBindings.indexOf(attribute.name)) {
                var match = attribute.name === 'width'
                    ? 'innerWidth'
                    : attribute.name === 'height'
                        ? 'innerHeight'
                        : fuzzymatch(attribute.name, validBindings);
                var message = "'" + attribute.name + "' is not a valid binding on <:Window>";
                if (match) {
                    validator.error(message + " (did you mean '" + match + "'?)", attribute);
                }
                else {
                    validator.error(message + " \u2014 valid bindings are " + list$2(validBindings), attribute);
                }
            }
        }
        else if (attribute.type === 'EventHandler') {
            validateEventHandlerCallee(validator, attribute, refCallees);
        }
    });
}

function validateHead(validator, node, refs, refCallees) {
    if (node.attributes.length) {
        validator.error("<:Head> should not have any attributes or directives", node);
    }
    // TODO ensure only valid elements are included here
    node.children.forEach(function (node) {
        if (node.type !== 'Element')
            return; // TODO handle {{#if}} and friends?
        validateElement(validator, node, refs, refCallees, [], [], false);
    });
}

function getStaticAttributeValue(node, name) {
    var attribute = node.attributes.find(function (attr) { return attr.name.toLowerCase() === name; });
    if (!attribute)
        return null;
    if (attribute.value === true)
        return true;
    if (attribute.value.length === 0)
        return '';
    if (attribute.value.length === 1 && attribute.value[0].type === 'Text') {
        return attribute.value[0].data;
    }
    return null;
}

var ariaAttributes = 'activedescendant atomic autocomplete busy checked controls current describedby disabled dropeffect expanded flowto grabbed haspopup hidden invalid label labelledby level live multiline multiselectable orientation owns posinset pressed readonly relevant required selected setsize sort valuemax valuemin valuenow valuetext'.split(' ');
var ariaAttributeSet = new Set(ariaAttributes);
var ariaRoles = 'alert alertdialog application article banner button checkbox columnheader combobox command complementary composite contentinfo definition dialog directory document feed form grid gridcell group heading img input landmark link list listbox listitem log main marquee math menu menubar menuitem menuitemcheckbox menuitemradio navigation note option presentation progressbar radio radiogroup range region roletype row rowgroup rowheader scrollbar search section sectionhead select separator slider spinbutton status structure tab tablist tabpanel textbox timer toolbar tooltip tree treegrid treeitem widget window'.split(' ');
var ariaRoleSet = new Set(ariaRoles);
var invisibleElements = new Set(['meta', 'html', 'script', 'style']);
function a11y(validator, node, elementStack) {
    if (node.type === 'Text') {
        // accessible-emoji
        return;
    }
    if (node.type !== 'Element')
        return;
    var attributeMap = new Map();
    node.attributes.forEach(function (attribute) {
        var name = attribute.name.toLowerCase();
        // aria-props
        if (name.startsWith('aria-')) {
            if (invisibleElements.has(node.name)) {
                // aria-unsupported-elements
                validator.warn("A11y: <" + node.name + "> should not have aria-* attributes", attribute);
            }
            var type = name.slice(5);
            if (!ariaAttributeSet.has(type)) {
                var match = fuzzymatch(type, ariaAttributes);
                var message = "A11y: Unknown aria attribute 'aria-" + type + "'";
                if (match)
                    message += " (did you mean '" + match + "'?)";
                validator.warn(message, attribute);
            }
        }
        // aria-role
        if (name === 'role') {
            if (invisibleElements.has(node.name)) {
                // aria-unsupported-elements
                validator.warn("A11y: <" + node.name + "> should not have role attribute", attribute);
            }
            var value = getStaticAttributeValue(node, 'role');
            if (value && !ariaRoleSet.has(value)) {
                var match = fuzzymatch(value, ariaRoles);
                var message = "A11y: Unknown role '" + value + "'";
                if (match)
                    message += " (did you mean '" + match + "'?)";
                validator.warn(message, attribute);
            }
        }
        // no-access-key
        if (name === 'accesskey') {
            validator.warn("A11y: Avoid using accesskey", attribute);
        }
        // no-autofocus
        if (name === 'autofocus') {
            validator.warn("A11y: Avoid using autofocus", attribute);
        }
        // scope
        if (name === 'scope' && node.name !== 'th') {
            validator.warn("A11y: The scope attribute should only be used with <th> elements", attribute);
        }
        // tabindex-no-positive
        if (name === 'tabindex') {
            var value = getStaticAttributeValue(node, 'tabindex');
            if (!isNaN(value) && +value > 0) {
                validator.warn("A11y: avoid tabindex values above zero", attribute);
            }
        }
        attributeMap.set(attribute.name, attribute);
    });
    function shouldHaveAttribute(attributes, name) {
        if (name === void 0) { name = node.name; }
        if (attributes.length === 0 || !attributes.some(function (name) { return attributeMap.has(name); })) {
            var article = /^[aeiou]/.test(attributes[0]) ? 'an' : 'a';
            var sequence = attributes.length > 1 ?
                attributes.slice(0, -1).join(', ') + (" or " + attributes[attributes.length - 1]) :
                attributes[0];
            validator.warn("A11y: <" + name + "> element should have " + article + " " + sequence + " attribute", node);
        }
    }
    function shouldHaveContent() {
        if (node.children.length === 0) {
            validator.warn("A11y: <" + node.name + "> element should have child content", node);
        }
    }
    function shouldHaveValidHref(attribute) {
        var href = attributeMap.get(attribute);
        var value = getStaticAttributeValue(node, attribute);
        if (value === '' || value === '#') {
            validator.warn("A11y: '" + value + "' is not a valid " + attribute + " attribute", href);
        }
    }
    if (node.name === 'a') {
        if (attributeMap.has('href')) {
            // anchor-is-valid
            shouldHaveValidHref('href');
        }
        else if (attributeMap.has('xlink:href')) {
            // anchor-in-svg-is-valid
            shouldHaveValidHref('xlink:href');
        }
        else {
            validator.warn("A11y: <a> element should have an href attribute", node);
        }
        // anchor-has-content
        shouldHaveContent();
    }
    if (node.name === 'img')
        shouldHaveAttribute(['alt']);
    if (node.name === 'area')
        shouldHaveAttribute(['alt', 'aria-label', 'aria-labelledby']);
    if (node.name === 'object')
        shouldHaveAttribute(['title', 'aria-label', 'aria-labelledby']);
    if (node.name === 'input' && getStaticAttributeValue(node, 'type') === 'image') {
        shouldHaveAttribute(['alt', 'aria-label', 'aria-labelledby'], 'input type="image"');
    }
    // heading-has-content
    if (/^h[1-6]$/.test(node.name)) {
        shouldHaveContent();
        if (attributeMap.has('aria-hidden')) {
            validator.warn("A11y: <" + node.name + "> element should not be hidden", attributeMap.get('aria-hidden'));
        }
    }
    // iframe-has-title
    if (node.name === 'iframe') {
        shouldHaveAttribute(['title']);
    }
    // html-has-lang
    if (node.name === 'html') {
        shouldHaveAttribute(['lang']);
    }
    // no-distracting-elements
    if (node.name === 'marquee' || node.name === 'blink') {
        validator.warn("A11y: Avoid <" + node.name + "> elements", node);
    }
    if (node.name === 'figcaption') {
        var parent = elementStack[elementStack.length - 1];
        if (parent) {
            if (parent.name !== 'figure') {
                validator.warn("A11y: <figcaption> must be an immediate child of <figure>", node);
            }
            else {
                var children = parent.children.filter(function (node) {
                    if (node.type === 'Comment')
                        return false;
                    if (node.type === 'Text')
                        return /\S/.test(node.data);
                    return true;
                });
                var index = children.indexOf(node);
                if (index !== 0 && index !== children.length - 1) {
                    validator.warn("A11y: <figcaption> must be first or last child of <figure>", node);
                }
            }
        }
    }
}

function isEmptyBlock(node) {
    if (!/Block$/.test(node.type) || !node.children)
        return false;
    if (node.children.length > 1)
        return false;
    var child = node.children[0];
    return !child || (child.type === 'Text' && !/\S/.test(child.data));
}
function validateHtml(validator, html) {
    var refs = new Map();
    var refCallees = [];
    var stack = [];
    var elementStack = [];
    function visit(node) {
        if (node.type === 'Window') {
            validateWindow(validator, node, refs, refCallees);
        }
        else if (node.type === 'Head') {
            validateHead(validator, node, refs, refCallees);
        }
        else if (node.type === 'Element') {
            var isComponent = node.name === ':Self' ||
                node.name === ':Component' ||
                validator.components.has(node.name);
            validateElement(validator, node, refs, refCallees, stack, elementStack, isComponent);
            if (!isComponent) {
                a11y(validator, node, elementStack);
            }
        }
        else if (node.type === 'EachBlock') {
            if (validator.helpers.has(node.context)) {
                var c = node.expression.end;
                // find start of context
                while (/\s/.test(validator.source[c]))
                    c += 1;
                c += 2;
                while (/\s/.test(validator.source[c]))
                    c += 1;
                validator.warn("Context clashes with a helper. Rename one or the other to eliminate any ambiguity", { start: c, end: c + node.context.length });
            }
        }
        if (validator.options.dev && isEmptyBlock(node)) {
            validator.warn('Empty block', node);
        }
        if (node.children) {
            if (node.type === 'Element')
                elementStack.push(node);
            stack.push(node);
            node.children.forEach(visit);
            stack.pop();
            if (node.type === 'Element')
                elementStack.pop();
        }
        if (node["else"]) {
            visit(node["else"]);
        }
        if (node.type === 'AwaitBlock') {
            visit(node.pending);
            visit(node.then);
            visit(node["catch"]);
        }
    }
    html.children.forEach(visit);
    refCallees.forEach(function (callee) {
        var parts = flatten(callee).parts;
        var ref = parts[1];
        if (refs.has(ref)) {
            // TODO check method is valid, e.g. `audio.stop()` should be `audio.pause()`
        }
        else {
            var match = fuzzymatch(ref, Array.from(refs.keys()));
            var message = "'refs." + ref + "' does not exist";
            if (match)
                message += " (did you mean 'refs." + match + "'?)";
            validator.error(message, callee);
        }
    });
}

var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message, template, pos, filename) {
        var _this = _super.call(this, message, template, pos.start, filename, pos.end) || this;
        _this.name = 'ValidationError';
        return _this;
    }
    return ValidationError;
}(CompileError));
var Validator = /** @class */ (function () {
    function Validator(parsed, source, options) {
        this.source = source;
        this.filename = options.filename;
        this.onwarn = options.onwarn;
        this.options = options;
        this.namespace = null;
        this.defaultExport = null;
        this.properties = new Map();
        this.components = new Map();
        this.methods = new Map();
        this.helpers = new Map();
        this.transitions = new Map();
        this.slots = new Set();
        this.used = {
            components: new Set(),
            helpers: new Set(),
            events: new Set(),
            transitions: new Set()
        };
    }
    Validator.prototype.error = function (message, pos) {
        throw new ValidationError(message, this.source, pos, this.filename);
    };
    Validator.prototype.warn = function (message, pos) {
        if (!this.locator)
            this.locator = getLocator(this.source);
        var start = this.locator(pos.start);
        var end = this.locator(pos.end);
        var frame = getCodeFrame(this.source, start.line, start.column);
        this.onwarn({
            message: message,
            frame: frame,
            loc: { line: start.line + 1, column: start.column },
            end: { line: end.line + 1, column: end.column },
            pos: pos.start,
            filename: this.filename,
            toString: function () { return message + " (" + (start.line + 1) + ":" + start.column + ")\n" + frame; }
        });
    };
    return Validator;
}());
function validate(parsed, source, stylesheet, options) {
    var onwarn = options.onwarn, onerror = options.onerror, name = options.name, filename = options.filename, store = options.store, dev = options.dev;
    try {
        if (name && !/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(name)) {
            var error = new Error("options.name must be a valid identifier (got '" + name + "')");
            throw error;
        }
        if (name && /^[a-z]/.test(name)) {
            var message_1 = "options.name should be capitalised";
            onwarn({
                message: message_1,
                filename: filename,
                toString: function () { return message_1; }
            });
        }
        var validator_1 = new Validator(parsed, source, {
            onwarn: onwarn,
            name: name,
            filename: filename,
            store: store,
            dev: dev
        });
        if (parsed.js) {
            validateJs(validator_1, parsed.js);
        }
        if (parsed.css) {
            stylesheet.validate(validator_1);
        }
        if (parsed.html) {
            validateHtml(validator_1, parsed.html);
        }
        // need to do a second pass of the JS, now that we've analysed the markup
        if (parsed.js && validator_1.defaultExport) {
            var categories_1 = {
                components: 'component',
                // TODO helpers require a bit more work — need to analyse all expressions
                // helpers: 'helper',
                events: 'event definition',
                transitions: 'transition'
            };
            Object.keys(categories_1).forEach(function (category) {
                var definitions = validator_1.defaultExport.declaration.properties.find(function (prop) { return prop.key.name === category; });
                if (definitions) {
                    definitions.value.properties.forEach(function (prop) {
                        var name = prop.key.name;
                        if (!validator_1.used[category].has(name)) {
                            validator_1.warn("The '" + name + "' " + categories_1[category] + " is unused", prop);
                        }
                    });
                }
            });
        }
    }
    catch (err) {
        if (onerror) {
            onerror(err);
        }
        else {
            throw err;
        }
    }
}

var integerToChar = {};

'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.split( '' ).forEach( function ( char, i ) {
	integerToChar[ i ] = char;
});



function encode ( value ) {
	var result;

	if ( typeof value === 'number' ) {
		result = encodeInteger( value );
	} else {
		result = '';
		for ( var i = 0; i < value.length; i += 1 ) {
			result += encodeInteger( value[i] );
		}
	}

	return result;
}

function encodeInteger ( num ) {
	var result = '';

	if ( num < 0 ) {
		num = ( -num << 1 ) | 1;
	} else {
		num <<= 1;
	}

	do {
		var clamped = num & 31;
		num >>= 5;

		if ( num > 0 ) {
			clamped |= 32;
		}

		result += integerToChar[ clamped ];
	} while ( num > 0 );

	return result;
}

function Chunk ( start, end, content ) {
	this.start = start;
	this.end = end;
	this.original = content;

	this.intro = '';
	this.outro = '';

	this.content = content;
	this.storeName = false;
	this.edited = false;

	// we make these non-enumerable, for sanity while debugging
	Object.defineProperties( this, {
		previous: { writable: true, value: null },
		next: { writable: true, value: null }
	});
}

Chunk.prototype = {
	appendLeft: function appendLeft ( content ) {
		this.outro += content;
	},

	appendRight: function appendRight ( content ) {
		this.intro = this.intro + content;
	},

	clone: function clone () {
		var chunk = new Chunk( this.start, this.end, this.original );

		chunk.intro = this.intro;
		chunk.outro = this.outro;
		chunk.content = this.content;
		chunk.storeName = this.storeName;
		chunk.edited = this.edited;

		return chunk;
	},

	contains: function contains ( index ) {
		return this.start < index && index < this.end;
	},

	eachNext: function eachNext ( fn ) {
		var chunk = this;
		while ( chunk ) {
			fn( chunk );
			chunk = chunk.next;
		}
	},

	eachPrevious: function eachPrevious ( fn ) {
		var chunk = this;
		while ( chunk ) {
			fn( chunk );
			chunk = chunk.previous;
		}
	},

	edit: function edit ( content, storeName, contentOnly ) {
		this.content = content;
		if ( !contentOnly ) {
			this.intro = '';
			this.outro = '';
		}
		this.storeName = storeName;

		this.edited = true;

		return this;
	},

	prependLeft: function prependLeft ( content ) {
		this.outro = content + this.outro;
	},

	prependRight: function prependRight ( content ) {
		this.intro = content + this.intro;
	},

	split: function split ( index ) {
		var sliceIndex = index - this.start;

		var originalBefore = this.original.slice( 0, sliceIndex );
		var originalAfter = this.original.slice( sliceIndex );

		this.original = originalBefore;

		var newChunk = new Chunk( index, this.end, originalAfter );
		newChunk.outro = this.outro;
		this.outro = '';

		this.end = index;

		if ( this.edited ) {
			// TODO is this block necessary?...
			newChunk.edit( '', false );
			this.content = '';
		} else {
			this.content = originalBefore;
		}

		newChunk.next = this.next;
		if ( newChunk.next ) { newChunk.next.previous = newChunk; }
		newChunk.previous = this;
		this.next = newChunk;

		return newChunk;
	},

	toString: function toString () {
		return this.intro + this.content + this.outro;
	},

	trimEnd: function trimEnd ( rx ) {
		this.outro = this.outro.replace( rx, '' );
		if ( this.outro.length ) { return true; }

		var trimmed = this.content.replace( rx, '' );

		if ( trimmed.length ) {
			if ( trimmed !== this.content ) {
				this.split( this.start + trimmed.length ).edit( '', false );
			}

			return true;
		} else {
			this.edit( '', false );

			this.intro = this.intro.replace( rx, '' );
			if ( this.intro.length ) { return true; }
		}
	},

	trimStart: function trimStart ( rx ) {
		this.intro = this.intro.replace( rx, '' );
		if ( this.intro.length ) { return true; }

		var trimmed = this.content.replace( rx, '' );

		if ( trimmed.length ) {
			if ( trimmed !== this.content ) {
				this.split( this.end - trimmed.length );
				this.edit( '', false );
			}

			return true;
		} else {
			this.edit( '', false );

			this.outro = this.outro.replace( rx, '' );
			if ( this.outro.length ) { return true; }
		}
	}
};

var _btoa;

if ( typeof window !== 'undefined' && typeof window.btoa === 'function' ) {
	_btoa = window.btoa;
} else if ( typeof Buffer === 'function' ) {
	_btoa = function (str) { return new Buffer( str ).toString( 'base64' ); };
} else {
	_btoa = function () {
		throw new Error( 'Unsupported environment: `window.btoa` or `Buffer` should be supported.' );
	};
}

var btoa = _btoa;

function SourceMap ( properties ) {
	this.version = 3;

	this.file           = properties.file;
	this.sources        = properties.sources;
	this.sourcesContent = properties.sourcesContent;
	this.names          = properties.names;
	this.mappings       = properties.mappings;
}

SourceMap.prototype = {
	toString: function toString () {
		return JSON.stringify( this );
	},

	toUrl: function toUrl () {
		return 'data:application/json;charset=utf-8;base64,' + btoa( this.toString() );
	}
};

function guessIndent ( code ) {
	var lines = code.split( '\n' );

	var tabbed = lines.filter( function (line) { return /^\t+/.test( line ); } );
	var spaced = lines.filter( function (line) { return /^ {2,}/.test( line ); } );

	if ( tabbed.length === 0 && spaced.length === 0 ) {
		return null;
	}

	// More lines tabbed than spaced? Assume tabs, and
	// default to tabs in the case of a tie (or nothing
	// to go on)
	if ( tabbed.length >= spaced.length ) {
		return '\t';
	}

	// Otherwise, we need to guess the multiple
	var min = spaced.reduce( function ( previous, current ) {
		var numSpaces = /^ +/.exec( current )[0].length;
		return Math.min( numSpaces, previous );
	}, Infinity );

	return new Array( min + 1 ).join( ' ' );
}

function getRelativePath ( from, to ) {
	var fromParts = from.split( /[\/\\]/ );
	var toParts = to.split( /[\/\\]/ );

	fromParts.pop(); // get dirname

	while ( fromParts[0] === toParts[0] ) {
		fromParts.shift();
		toParts.shift();
	}

	if ( fromParts.length ) {
		var i = fromParts.length;
		while ( i-- ) { fromParts[i] = '..'; }
	}

	return fromParts.concat( toParts ).join( '/' );
}

var toString$1$1 = Object.prototype.toString;

function isObject ( thing ) {
	return toString$1$1.call( thing ) === '[object Object]';
}

function getLocator$1 ( source ) {
	var originalLines = source.split( '\n' );

	var start = 0;
	var lineRanges = originalLines.map( function ( line, i ) {
		var end = start + line.length + 1;
		var range = { start: start, end: end, line: i };

		start = end;
		return range;
	});

	var i = 0;

	function rangeContains ( range, index ) {
		return range.start <= index && index < range.end;
	}

	function getLocation ( range, index ) {
		return { line: range.line, column: index - range.start };
	}

	return function locate ( index ) {
		var range = lineRanges[i];

		var d = index >= range.end ? 1 : -1;

		while ( range ) {
			if ( rangeContains( range, index ) ) { return getLocation( range, index ); }

			i += d;
			range = lineRanges[i];
		}
	};
}

function Mappings ( hires ) {
	var this$1 = this;

	var offsets = {
		generatedCodeColumn: 0,
		sourceIndex: 0,
		sourceCodeLine: 0,
		sourceCodeColumn: 0,
		sourceCodeName: 0
	};

	var generatedCodeLine = 0;
	var generatedCodeColumn = 0;

	this.raw = [];
	var rawSegments = this.raw[ generatedCodeLine ] = [];

	var pending = null;

	this.addEdit = function ( sourceIndex, content, original, loc, nameIndex ) {
		if ( content.length ) {
			rawSegments.push([
				generatedCodeColumn,
				sourceIndex,
				loc.line,
				loc.column,
				nameIndex ]);
		} else if ( pending ) {
			rawSegments.push( pending );
		}

		this$1.advance( content );
		pending = null;
	};

	this.addUneditedChunk = function ( sourceIndex, chunk, original, loc, sourcemapLocations ) {
		var originalCharIndex = chunk.start;
		var first = true;

		while ( originalCharIndex < chunk.end ) {
			if ( hires || first || sourcemapLocations[ originalCharIndex ] ) {
				rawSegments.push([
					generatedCodeColumn,
					sourceIndex,
					loc.line,
					loc.column,
					-1
				]);
			}

			if ( original[ originalCharIndex ] === '\n' ) {
				loc.line += 1;
				loc.column = 0;
				generatedCodeLine += 1;
				this$1.raw[ generatedCodeLine ] = rawSegments = [];
				generatedCodeColumn = 0;
			} else {
				loc.column += 1;
				generatedCodeColumn += 1;
			}

			originalCharIndex += 1;
			first = false;
		}

		pending = [
			generatedCodeColumn,
			sourceIndex,
			loc.line,
			loc.column,
			-1 ];
	};

	this.advance = function (str) {
		if ( !str ) { return; }

		var lines = str.split( '\n' );
		var lastLine = lines.pop();

		if ( lines.length ) {
			generatedCodeLine += lines.length;
			this$1.raw[ generatedCodeLine ] = rawSegments = [];
			generatedCodeColumn = lastLine.length;
		} else {
			generatedCodeColumn += lastLine.length;
		}
	};

	this.encode = function () {
		return this$1.raw.map( function (segments) {
			var generatedCodeColumn = 0;

			return segments.map( function (segment) {
				var arr = [
					segment[0] - generatedCodeColumn,
					segment[1] - offsets.sourceIndex,
					segment[2] - offsets.sourceCodeLine,
					segment[3] - offsets.sourceCodeColumn
				];

				generatedCodeColumn = segment[0];
				offsets.sourceIndex = segment[1];
				offsets.sourceCodeLine = segment[2];
				offsets.sourceCodeColumn = segment[3];

				if ( ~segment[4] ) {
					arr.push( segment[4] - offsets.sourceCodeName );
					offsets.sourceCodeName = segment[4];
				}

				return encode( arr );
			}).join( ',' );
		}).join( ';' );
	};
}

var Stats = function Stats () {
	Object.defineProperties( this, {
		startTimes: { value: {} }
	});
};

Stats.prototype.time = function time ( label ) {
	this.startTimes[ label ] = process.hrtime();
};

Stats.prototype.timeEnd = function timeEnd ( label ) {
	var elapsed = process.hrtime( this.startTimes[ label ] );

	if ( !this[ label ] ) { this[ label ] = 0; }
	this[ label ] += elapsed[0] * 1e3 + elapsed[1] * 1e-6;
};

var warned = {
	insertLeft: false,
	insertRight: false,
	storeName: false
};

function MagicString$1 ( string, options ) {
	if ( options === void 0 ) options = {};

	var chunk = new Chunk( 0, string.length, string );

	Object.defineProperties( this, {
		original:              { writable: true, value: string },
		outro:                 { writable: true, value: '' },
		intro:                 { writable: true, value: '' },
		firstChunk:            { writable: true, value: chunk },
		lastChunk:             { writable: true, value: chunk },
		lastSearchedChunk:     { writable: true, value: chunk },
		byStart:               { writable: true, value: {} },
		byEnd:                 { writable: true, value: {} },
		filename:              { writable: true, value: options.filename },
		indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
		sourcemapLocations:    { writable: true, value: {} },
		storedNames:           { writable: true, value: {} },
		indentStr:             { writable: true, value: guessIndent( string ) }
	});

	this.byStart[ 0 ] = chunk;
	this.byEnd[ string.length ] = chunk;
}

MagicString$1.prototype = {
	addSourcemapLocation: function addSourcemapLocation ( char ) {
		this.sourcemapLocations[ char ] = true;
	},

	append: function append ( content ) {
		if ( typeof content !== 'string' ) { throw new TypeError( 'outro content must be a string' ); }

		this.outro += content;
		return this;
	},

	appendLeft: function appendLeft ( index, content ) {
		if ( typeof content !== 'string' ) { throw new TypeError( 'inserted content must be a string' ); }

		this._split( index );

		var chunk = this.byEnd[ index ];

		if ( chunk ) {
			chunk.appendLeft( content );
		} else {
			this.intro += content;
		}

		return this;
	},

	appendRight: function appendRight ( index, content ) {
		if ( typeof content !== 'string' ) { throw new TypeError( 'inserted content must be a string' ); }

		this._split( index );

		var chunk = this.byStart[ index ];

		if ( chunk ) {
			chunk.appendRight( content );
		} else {
			this.outro += content;
		}

		return this;
	},

	clone: function clone () {
		var cloned = new MagicString$1( this.original, { filename: this.filename });

		var originalChunk = this.firstChunk;
		var clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();

		while ( originalChunk ) {
			cloned.byStart[ clonedChunk.start ] = clonedChunk;
			cloned.byEnd[ clonedChunk.end ] = clonedChunk;

			var nextOriginalChunk = originalChunk.next;
			var nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();

			if ( nextClonedChunk ) {
				clonedChunk.next = nextClonedChunk;
				nextClonedChunk.previous = clonedChunk;

				clonedChunk = nextClonedChunk;
			}

			originalChunk = nextOriginalChunk;
		}

		cloned.lastChunk = clonedChunk;

		if ( this.indentExclusionRanges ) {
			cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
		}

		Object.keys( this.sourcemapLocations ).forEach( function (loc) {
			cloned.sourcemapLocations[ loc ] = true;
		});

		return cloned;
	},

	generateMap: function generateMap ( options ) {
		var this$1 = this;

		options = options || {};

		var sourceIndex = 0;
		var names = Object.keys( this.storedNames );
		var mappings = new Mappings( options.hires );

		var locate = getLocator$1( this.original );

		if ( this.intro ) {
			mappings.advance( this.intro );
		}

		this.firstChunk.eachNext( function (chunk) {
			var loc = locate( chunk.start );

			if ( chunk.intro.length ) { mappings.advance( chunk.intro ); }

			if ( chunk.edited ) {
				mappings.addEdit( sourceIndex, chunk.content, chunk.original, loc, chunk.storeName ? names.indexOf( chunk.original ) : -1 );
			} else {
				mappings.addUneditedChunk( sourceIndex, chunk, this$1.original, loc, this$1.sourcemapLocations );
			}

			if ( chunk.outro.length ) { mappings.advance( chunk.outro ); }
		});

		var map = new SourceMap({
			file: ( options.file ? options.file.split( /[\/\\]/ ).pop() : null ),
			sources: [ options.source ? getRelativePath( options.file || '', options.source ) : null ],
			sourcesContent: options.includeContent ? [ this.original ] : [ null ],
			names: names,
			mappings: mappings.encode()
		});
		return map;
	},

	getIndentString: function getIndentString () {
		return this.indentStr === null ? '\t' : this.indentStr;
	},

	indent: function indent ( indentStr, options ) {
		var this$1 = this;

		var pattern = /^[^\r\n]/gm;

		if ( isObject( indentStr ) ) {
			options = indentStr;
			indentStr = undefined;
		}

		indentStr = indentStr !== undefined ? indentStr : ( this.indentStr || '\t' );

		if ( indentStr === '' ) { return this; } // noop

		options = options || {};

		// Process exclusion ranges
		var isExcluded = {};

		if ( options.exclude ) {
			var exclusions = typeof options.exclude[0] === 'number' ? [ options.exclude ] : options.exclude;
			exclusions.forEach( function (exclusion) {
				for ( var i = exclusion[0]; i < exclusion[1]; i += 1 ) {
					isExcluded[i] = true;
				}
			});
		}

		var shouldIndentNextCharacter = options.indentStart !== false;
		var replacer = function (match) {
			if ( shouldIndentNextCharacter ) { return ("" + indentStr + match); }
			shouldIndentNextCharacter = true;
			return match;
		};

		this.intro = this.intro.replace( pattern, replacer );

		var charIndex = 0;

		var chunk = this.firstChunk;

		while ( chunk ) {
			var end = chunk.end;

			if ( chunk.edited ) {
				if ( !isExcluded[ charIndex ] ) {
					chunk.content = chunk.content.replace( pattern, replacer );

					if ( chunk.content.length ) {
						shouldIndentNextCharacter = chunk.content[ chunk.content.length - 1 ] === '\n';
					}
				}
			} else {
				charIndex = chunk.start;

				while ( charIndex < end ) {
					if ( !isExcluded[ charIndex ] ) {
						var char = this$1.original[ charIndex ];

						if ( char === '\n' ) {
							shouldIndentNextCharacter = true;
						} else if ( char !== '\r' && shouldIndentNextCharacter ) {
							shouldIndentNextCharacter = false;

							if ( charIndex === chunk.start ) {
								chunk.prependRight( indentStr );
							} else {
								this$1._splitChunk( chunk, charIndex );
								chunk = chunk.next;
								chunk.prependRight( indentStr );
							}
						}
					}

					charIndex += 1;
				}
			}

			charIndex = chunk.end;
			chunk = chunk.next;
		}

		this.outro = this.outro.replace( pattern, replacer );

		return this;
	},

	insert: function insert () {
		throw new Error( 'magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)' );
	},

	insertLeft: function insertLeft ( index, content ) {
		if ( !warned.insertLeft ) {
			console.warn( 'magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead' ); // eslint-disable-line no-console
			warned.insertLeft = true;
		}

		return this.appendLeft( index, content );
	},

	insertRight: function insertRight ( index, content ) {
		if ( !warned.insertRight ) {
			console.warn( 'magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead' ); // eslint-disable-line no-console
			warned.insertRight = true;
		}

		return this.prependRight( index, content );
	},

	move: function move ( start, end, index ) {
		if ( index >= start && index <= end ) { throw new Error( 'Cannot move a selection inside itself' ); }

		this._split( start );
		this._split( end );
		this._split( index );

		var first = this.byStart[ start ];
		var last = this.byEnd[ end ];

		var oldLeft = first.previous;
		var oldRight = last.next;

		var newRight = this.byStart[ index ];
		if ( !newRight && last === this.lastChunk ) { return this; }
		var newLeft = newRight ? newRight.previous : this.lastChunk;

		if ( oldLeft ) { oldLeft.next = oldRight; }
		if ( oldRight ) { oldRight.previous = oldLeft; }

		if ( newLeft ) { newLeft.next = first; }
		if ( newRight ) { newRight.previous = last; }

		if ( !first.previous ) { this.firstChunk = last.next; }
		if ( !last.next ) {
			this.lastChunk = first.previous;
			this.lastChunk.next = null;
		}

		first.previous = newLeft;
		last.next = newRight || null;

		if ( !newLeft ) { this.firstChunk = first; }
		if ( !newRight ) { this.lastChunk = last; }

		return this;
	},

	overwrite: function overwrite ( start, end, content, options ) {
		var this$1 = this;

		if ( typeof content !== 'string' ) { throw new TypeError( 'replacement content must be a string' ); }

		while ( start < 0 ) { start += this$1.original.length; }
		while ( end < 0 ) { end += this$1.original.length; }

		if ( end > this.original.length ) { throw new Error( 'end is out of bounds' ); }
		if ( start === end ) { throw new Error( 'Cannot overwrite a zero-length range – use appendLeft or prependRight instead' ); }

		this._split( start );
		this._split( end );

		if ( options === true ) {
			if ( !warned.storeName ) {
				console.warn( 'The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string' ); // eslint-disable-line no-console
				warned.storeName = true;
			}

			options = { storeName: true };
		}
		var storeName = options !== undefined ? options.storeName : false;
		var contentOnly = options !== undefined ? options.contentOnly : false;

		if ( storeName ) {
			var original = this.original.slice( start, end );
			this.storedNames[ original ] = true;
		}

		var first = this.byStart[ start ];
		var last = this.byEnd[ end ];

		if ( first ) {
			if ( end > first.end && first.next !== this.byStart[ first.end ] ) {
				throw new Error( 'Cannot overwrite across a split point' );
			}

			first.edit( content, storeName, contentOnly );

			if ( first !== last ) {
				var chunk = first.next;
				while ( chunk !== last ) {
					chunk.edit( '', false );
					chunk = chunk.next;
				}

				chunk.edit( '', false );
			}
		}

		else {
			// must be inserting at the end
			var newChunk = new Chunk( start, end, '' ).edit( content, storeName );

			// TODO last chunk in the array may not be the last chunk, if it's moved...
			last.next = newChunk;
			newChunk.previous = last;
		}

		return this;
	},

	prepend: function prepend ( content ) {
		if ( typeof content !== 'string' ) { throw new TypeError( 'outro content must be a string' ); }

		this.intro = content + this.intro;
		return this;
	},

	prependLeft: function prependLeft ( index, content ) {
		if ( typeof content !== 'string' ) { throw new TypeError( 'inserted content must be a string' ); }

		this._split( index );

		var chunk = this.byEnd[ index ];

		if ( chunk ) {
			chunk.prependLeft( content );
		} else {
			this.intro = content + this.intro;
		}

		return this;
	},

	prependRight: function prependRight ( index, content ) {
		if ( typeof content !== 'string' ) { throw new TypeError( 'inserted content must be a string' ); }

		this._split( index );

		var chunk = this.byStart[ index ];

		if ( chunk ) {
			chunk.prependRight( content );
		} else {
			this.outro = content + this.outro;
		}

		return this;
	},

	remove: function remove ( start, end ) {
		var this$1 = this;

		while ( start < 0 ) { start += this$1.original.length; }
		while ( end < 0 ) { end += this$1.original.length; }

		if ( start === end ) { return this; }

		if ( start < 0 || end > this.original.length ) { throw new Error( 'Character is out of bounds' ); }
		if ( start > end ) { throw new Error( 'end must be greater than start' ); }

		this._split( start );
		this._split( end );

		var chunk = this.byStart[ start ];

		while ( chunk ) {
			chunk.intro = '';
			chunk.outro = '';
			chunk.edit( '' );

			chunk = end > chunk.end ? this$1.byStart[ chunk.end ] : null;
		}

		return this;
	},

	slice: function slice ( start, end ) {
		var this$1 = this;
		if ( start === void 0 ) start = 0;
		if ( end === void 0 ) end = this.original.length;

		while ( start < 0 ) { start += this$1.original.length; }
		while ( end < 0 ) { end += this$1.original.length; }

		var result = '';

		// find start chunk
		var chunk = this.firstChunk;
		while ( chunk && ( chunk.start > start || chunk.end <= start ) ) {

			// found end chunk before start
			if ( chunk.start < end && chunk.end >= end ) {
				return result;
			}

			chunk = chunk.next;
		}

		if ( chunk && chunk.edited && chunk.start !== start ) { throw new Error(("Cannot use replaced character " + start + " as slice start anchor.")); }

		var startChunk = chunk;
		while ( chunk ) {
			if ( chunk.intro && ( startChunk !== chunk || chunk.start === start ) ) {
				result += chunk.intro;
			}

			var containsEnd = chunk.start < end && chunk.end >= end;
			if ( containsEnd && chunk.edited && chunk.end !== end ) { throw new Error(("Cannot use replaced character " + end + " as slice end anchor.")); }

			var sliceStart = startChunk === chunk ? start - chunk.start : 0;
			var sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;

			result += chunk.content.slice( sliceStart, sliceEnd );

			if ( chunk.outro && ( !containsEnd || chunk.end === end ) ) {
				result += chunk.outro;
			}

			if ( containsEnd ) {
				break;
			}

			chunk = chunk.next;
		}

		return result;
	},

	// TODO deprecate this? not really very useful
	snip: function snip ( start, end ) {
		var clone = this.clone();
		clone.remove( 0, start );
		clone.remove( end, clone.original.length );

		return clone;
	},

	_split: function _split ( index ) {
		var this$1 = this;

		if ( this.byStart[ index ] || this.byEnd[ index ] ) { return; }

		var chunk = this.lastSearchedChunk;
		var searchForward = index > chunk.end;

		while ( true ) {
			if ( chunk.contains( index ) ) { return this$1._splitChunk( chunk, index ); }

			chunk = searchForward ?
				this$1.byStart[ chunk.end ] :
				this$1.byEnd[ chunk.start ];
		}
	},

	_splitChunk: function _splitChunk ( chunk, index ) {
		if ( chunk.edited && chunk.content.length ) { // zero-length edited chunks are a special case (overlapping replacements)
			var loc = getLocator$1( this.original )( index );
			throw new Error( ("Cannot split a chunk that has already been edited (" + (loc.line) + ":" + (loc.column) + " – \"" + (chunk.original) + "\")") );
		}

		var newChunk = chunk.split( index );

		this.byEnd[ index ] = chunk;
		this.byStart[ index ] = newChunk;
		this.byEnd[ newChunk.end ] = newChunk;

		if ( chunk === this.lastChunk ) { this.lastChunk = newChunk; }

		this.lastSearchedChunk = chunk;
		return true;
	},

	toString: function toString () {
		var str = this.intro;

		var chunk = this.firstChunk;
		while ( chunk ) {
			str += chunk.toString();
			chunk = chunk.next;
		}

		return str + this.outro;
	},

	trimLines: function trimLines () {
		return this.trim('[\\r\\n]');
	},

	trim: function trim ( charType ) {
		return this.trimStart( charType ).trimEnd( charType );
	},

	trimEnd: function trimEnd ( charType ) {
		var this$1 = this;

		var rx = new RegExp( ( charType || '\\s' ) + '+$' );

		this.outro = this.outro.replace( rx, '' );
		if ( this.outro.length ) { return this; }

		var chunk = this.lastChunk;

		do {
			var end = chunk.end;
			var aborted = chunk.trimEnd( rx );

			// if chunk was trimmed, we have a new lastChunk
			if ( chunk.end !== end ) {
				if ( this$1.lastChunk === chunk ) {
					this$1.lastChunk = chunk.next;
				}

				this$1.byEnd[ chunk.end ] = chunk;
				this$1.byStart[ chunk.next.start ] = chunk.next;
				this$1.byEnd[ chunk.next.end ] = chunk.next;
			}

			if ( aborted ) { return this$1; }
			chunk = chunk.previous;
		} while ( chunk );

		return this;
	},

	trimStart: function trimStart ( charType ) {
		var this$1 = this;

		var rx = new RegExp( '^' + ( charType || '\\s' ) + '+' );

		this.intro = this.intro.replace( rx, '' );
		if ( this.intro.length ) { return this; }

		var chunk = this.firstChunk;

		do {
			var end = chunk.end;
			var aborted = chunk.trimStart( rx );

			if ( chunk.end !== end ) {
				// special case...
				if ( chunk === this$1.lastChunk ) { this$1.lastChunk = chunk.next; }

				this$1.byEnd[ chunk.end ] = chunk;
				this$1.byStart[ chunk.next.start ] = chunk.next;
				this$1.byEnd[ chunk.next.end ] = chunk.next;
			}

			if ( aborted ) { return this$1; }
			chunk = chunk.next;
		} while ( chunk );

		return this;
	}
};

var hasOwnProp = Object.prototype.hasOwnProperty;

function Bundle ( options ) {
	if ( options === void 0 ) options = {};

	this.intro = options.intro || '';
	this.separator = options.separator !== undefined ? options.separator : '\n';

	this.sources = [];

	this.uniqueSources = [];
	this.uniqueSourceIndexByFilename = {};
}

Bundle.prototype = {
	addSource: function addSource ( source ) {
		if ( source instanceof MagicString$1 ) {
			return this.addSource({
				content: source,
				filename: source.filename,
				separator: this.separator
			});
		}

		if ( !isObject( source ) || !source.content ) {
			throw new Error( 'bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`' );
		}

		[ 'filename', 'indentExclusionRanges', 'separator' ].forEach( function (option) {
			if ( !hasOwnProp.call( source, option ) ) { source[ option ] = source.content[ option ]; }
		});

		if ( source.separator === undefined ) { // TODO there's a bunch of this sort of thing, needs cleaning up
			source.separator = this.separator;
		}

		if ( source.filename ) {
			if ( !hasOwnProp.call( this.uniqueSourceIndexByFilename, source.filename ) ) {
				this.uniqueSourceIndexByFilename[ source.filename ] = this.uniqueSources.length;
				this.uniqueSources.push({ filename: source.filename, content: source.content.original });
			} else {
				var uniqueSource = this.uniqueSources[ this.uniqueSourceIndexByFilename[ source.filename ] ];
				if ( source.content.original !== uniqueSource.content ) {
					throw new Error( ("Illegal source: same filename (" + (source.filename) + "), different contents") );
				}
			}
		}

		this.sources.push( source );
		return this;
	},

	append: function append ( str, options ) {
		this.addSource({
			content: new MagicString$1( str ),
			separator: ( options && options.separator ) || ''
		});

		return this;
	},

	clone: function clone () {
		var bundle = new Bundle({
			intro: this.intro,
			separator: this.separator
		});

		this.sources.forEach( function (source) {
			bundle.addSource({
				filename: source.filename,
				content: source.content.clone(),
				separator: source.separator
			});
		});

		return bundle;
	},

	generateMap: function generateMap ( options ) {
		var this$1 = this;
		if ( options === void 0 ) options = {};

		var names = [];
		this.sources.forEach( function (source) {
			Object.keys( source.content.storedNames ).forEach( function (name) {
				if ( !~names.indexOf( name ) ) { names.push( name ); }
			});
		});

		var mappings = new Mappings( options.hires );

		if ( this.intro ) {
			mappings.advance( this.intro );
		}

		this.sources.forEach( function ( source, i ) {
			if ( i > 0 ) {
				mappings.advance( this$1.separator );
			}

			var sourceIndex = source.filename ? this$1.uniqueSourceIndexByFilename[ source.filename ] : -1;
			var magicString = source.content;
			var locate = getLocator$1( magicString.original );

			if ( magicString.intro ) {
				mappings.advance( magicString.intro );
			}

			magicString.firstChunk.eachNext( function (chunk) {
				var loc = locate( chunk.start );

				if ( chunk.intro.length ) { mappings.advance( chunk.intro ); }

				if ( source.filename ) {
					if ( chunk.edited ) {
						mappings.addEdit( sourceIndex, chunk.content, chunk.original, loc, chunk.storeName ? names.indexOf( chunk.original ) : -1 );
					} else {
						mappings.addUneditedChunk( sourceIndex, chunk, magicString.original, loc, magicString.sourcemapLocations );
					}
				}

				else {
					mappings.advance( chunk.content );
				}

				if ( chunk.outro.length ) { mappings.advance( chunk.outro ); }
			});

			if ( magicString.outro ) {
				mappings.advance( magicString.outro );
			}
		});

		return new SourceMap({
			file: ( options.file ? options.file.split( /[\/\\]/ ).pop() : null ),
			sources: this.uniqueSources.map( function (source) {
				return options.file ? getRelativePath( options.file, source.filename ) : source.filename;
			}),
			sourcesContent: this.uniqueSources.map( function (source) {
				return options.includeContent ? source.content : null;
			}),
			names: names,
			mappings: mappings.encode()
		});
	},

	getIndentString: function getIndentString () {
		var indentStringCounts = {};

		this.sources.forEach( function (source) {
			var indentStr = source.content.indentStr;

			if ( indentStr === null ) { return; }

			if ( !indentStringCounts[ indentStr ] ) { indentStringCounts[ indentStr ] = 0; }
			indentStringCounts[ indentStr ] += 1;
		});

		return ( Object.keys( indentStringCounts ).sort( function ( a, b ) {
			return indentStringCounts[a] - indentStringCounts[b];
		})[0] ) || '\t';
	},

	indent: function indent ( indentStr ) {
		var this$1 = this;

		if ( !arguments.length ) {
			indentStr = this.getIndentString();
		}

		if ( indentStr === '' ) { return this; } // noop

		var trailingNewline = !this.intro || this.intro.slice( -1 ) === '\n';

		this.sources.forEach( function ( source, i ) {
			var separator = source.separator !== undefined ? source.separator : this$1.separator;
			var indentStart = trailingNewline || ( i > 0 && /\r?\n$/.test( separator ) );

			source.content.indent( indentStr, {
				exclude: source.indentExclusionRanges,
				indentStart: indentStart//: trailingNewline || /\r?\n$/.test( separator )  //true///\r?\n/.test( separator )
			});

			// TODO this is a very slow way to determine this
			trailingNewline = source.content.toString().slice( 0, -1 ) === '\n';
		});

		if ( this.intro ) {
			this.intro = indentStr + this.intro.replace( /^[^\n]/gm, function ( match, index ) {
				return index > 0 ? indentStr + match : match;
			});
		}

		return this;
	},

	prepend: function prepend ( str ) {
		this.intro = str + this.intro;
		return this;
	},

	toString: function toString () {
		var this$1 = this;

		var body = this.sources.map( function ( source, i ) {
			var separator = source.separator !== undefined ? source.separator : this$1.separator;
			var str = ( i > 0 ? separator : '' ) + source.content.toString();

			return str;
		}).join( '' );

		return this.intro + body;
	},

	trimLines: function trimLines () {
		return this.trim('[\\r\\n]');
	},

	trim: function trim ( charType ) {
		return this.trimStart( charType ).trimEnd( charType );
	},

	trimStart: function trimStart ( charType ) {
		var this$1 = this;

		var rx = new RegExp( '^' + ( charType || '\\s' ) + '+' );
		this.intro = this.intro.replace( rx, '' );

		if ( !this.intro ) {
			var source;
			var i = 0;

			do {
				source = this$1.sources[i];

				if ( !source ) {
					break;
				}

				source.content.trimStart( charType );
				i += 1;
			} while ( source.content.toString() === '' ); // TODO faster way to determine non-empty source?
		}

		return this;
	},

	trimEnd: function trimEnd ( charType ) {
		var this$1 = this;

		var rx = new RegExp( ( charType || '\\s' ) + '+$' );

		var source;
		var i = this.sources.length - 1;

		do {
			source = this$1.sources[i];

			if ( !source ) {
				this$1.intro = this$1.intro.replace( rx, '' );
				break;
			}

			source.content.trimEnd( charType );
			i -= 1;
		} while ( source.content.toString() === '' ); // TODO faster way to determine non-empty source?

		return this;
	}
};

function annotateWithScopes(expression) {
    var globals = new Set();
    var scope = new Scope(null, false);
    walk(expression, {
        enter: function (node, parent) {
            if (/Function/.test(node.type)) {
                if (node.type === 'FunctionDeclaration') {
                    scope.declarations.add(node.id.name);
                }
                else {
                    node._scope = scope = new Scope(scope, false);
                    if (node.id)
                        scope.declarations.add(node.id.name);
                }
                node.params.forEach(function (param) {
                    extractNames(param).forEach(function (name) {
                        scope.declarations.add(name);
                    });
                });
            }
            else if (/For(?:In|Of)Statement/.test(node.type)) {
                node._scope = scope = new Scope(scope, true);
            }
            else if (node.type === 'BlockStatement') {
                node._scope = scope = new Scope(scope, true);
            }
            else if (/(Function|Class|Variable)Declaration/.test(node.type)) {
                scope.addDeclaration(node);
            }
            else if (isReference(node, parent)) {
                if (!scope.has(node.name)) {
                    globals.add(node.name);
                }
            }
        },
        leave: function (node) {
            if (node._scope) {
                scope = scope.parent;
            }
        }
    });
    return { scope: scope, globals: globals };
}
var Scope = /** @class */ (function () {
    function Scope(parent, block) {
        this.parent = parent;
        this.block = block;
        this.declarations = new Set();
    }
    Scope.prototype.addDeclaration = function (node) {
        var _this = this;
        if (node.kind === 'var' && !this.block && this.parent) {
            this.parent.addDeclaration(node);
        }
        else if (node.type === 'VariableDeclaration') {
            node.declarations.forEach(function (declarator) {
                extractNames(declarator.id).forEach(function (name) {
                    _this.declarations.add(name);
                });
            });
        }
        else {
            this.declarations.add(node.id.name);
        }
    };
    Scope.prototype.has = function (name) {
        return (this.declarations.has(name) || (this.parent && this.parent.has(name)));
    };
    return Scope;
}());
function extractNames(param) {
    var names = [];
    extractors[param.type](names, param);
    return names;
}
var extractors = {
    Identifier: function (names, param) {
        names.push(param.name);
    },
    ObjectPattern: function (names, param) {
        param.properties.forEach(function (prop) {
            extractors[prop.value.type](names, prop.value);
        });
    },
    ArrayPattern: function (names, param) {
        param.elements.forEach(function (element) {
            if (element)
                extractors[element.type](names, element);
        });
    },
    RestElement: function (names, param) {
        extractors[param.argument.type](names, param.argument);
    },
    AssignmentPattern: function (names, param) {
        extractors[param.left.type](names, param.left);
    }
};

var start = /\n(\t+)/;
function deindent(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var indentation = start.exec(strings[0])[1];
    var pattern = new RegExp("^" + indentation, 'gm');
    var result = strings[0].replace(start, '').replace(pattern, '');
    var trailingIndentation = getTrailingIndentation(result);
    for (var i = 1; i < strings.length; i += 1) {
        var expression = values[i - 1];
        var string = strings[i].replace(pattern, '');
        if (Array.isArray(expression)) {
            expression = expression.length ? expression.join('\n') : null;
        }
        if (expression || expression === '') {
            var value = String(expression).replace(/\n/g, "\n" + trailingIndentation);
            result += value + string;
        }
        else {
            var c = result.length;
            while (/\s/.test(result[c - 1]))
                c -= 1;
            result = result.slice(0, c) + string;
        }
        trailingIndentation = getTrailingIndentation(result);
    }
    return result.trim().replace(/\t+$/gm, '');
}
function getTrailingIndentation(str) {
    var i = str.length;
    while (str[i - 1] === ' ' || str[i - 1] === '\t')
        i -= 1;
    return str.slice(i, str.length);
}

function stringify(data, options) {
    if (options === void 0) { options = {}; }
    return JSON.stringify(escape(data, options));
}
function escape(data, _a) {
    var _b = (_a === void 0 ? {} : _a).onlyEscapeAtSymbol, onlyEscapeAtSymbol = _b === void 0 ? false : _b;
    return data.replace(onlyEscapeAtSymbol ? /(%+|@+)/g : /(%+|@+|#+)/g, function (match) {
        return match + match[0];
    });
}
var escaped = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escapeHTML(html) {
    return String(html).replace(/[&<>]/g, function (match) { return escaped[match]; });
}
function escapeTemplate(str) {
    return str.replace(/(\${|`|\\)/g, '\\$1');
}

var ChunkType;
(function (ChunkType) {
    ChunkType[ChunkType["Line"] = 0] = "Line";
    ChunkType[ChunkType["Block"] = 1] = "Block";
})(ChunkType || (ChunkType = {}));
var CodeBuilder = /** @class */ (function () {
    function CodeBuilder(str) {
        if (str === void 0) { str = ''; }
        this.result = str;
        var initial = str
            ? /\n/.test(str) ? ChunkType.Block : ChunkType.Line
            : null;
        this.first = initial;
        this.last = initial;
        this.lastCondition = null;
        this.conditionStack = [];
        this.indent = '';
    }
    CodeBuilder.prototype.addConditional = function (condition, body) {
        this.reifyConditions();
        body = body.replace(/^/gm, this.indent + "\t");
        if (condition === this.lastCondition) {
            this.result += "\n" + body;
        }
        else {
            if (this.lastCondition) {
                this.result += "\n" + this.indent + "}";
            }
            this.result += "" + (this.last === ChunkType.Block ? '\n\n' : '\n') + this.indent + "if (" + condition + ") {\n" + body;
            this.lastCondition = condition;
        }
        this.last = ChunkType.Block;
    };
    CodeBuilder.prototype.addLine = function (line) {
        this.reifyConditions();
        if (this.lastCondition) {
            this.result += "\n" + this.indent + "}";
            this.lastCondition = null;
        }
        if (this.last === ChunkType.Block) {
            this.result += "\n\n" + this.indent + line;
        }
        else if (this.last === ChunkType.Line) {
            this.result += "\n" + this.indent + line;
        }
        else {
            this.result += line;
        }
        this.last = ChunkType.Line;
        if (!this.first)
            this.first = ChunkType.Line;
    };
    CodeBuilder.prototype.addLineAtStart = function (line) {
        this.reifyConditions();
        if (this.first === ChunkType.Block) {
            this.result = line + "\n\n" + this.indent + this.result;
        }
        else if (this.first === ChunkType.Line) {
            this.result = line + "\n" + this.indent + this.result;
        }
        else {
            this.result += line;
        }
        this.first = ChunkType.Line;
        if (!this.last)
            this.last = ChunkType.Line;
    };
    CodeBuilder.prototype.addBlock = function (block) {
        this.reifyConditions();
        if (this.indent)
            block = block.replace(/^/gm, "" + this.indent);
        if (this.lastCondition) {
            this.result += "\n" + this.indent + "}";
            this.lastCondition = null;
        }
        if (this.result) {
            this.result += "\n\n" + this.indent + block;
        }
        else {
            this.result += block;
        }
        this.last = ChunkType.Block;
        if (!this.first)
            this.first = ChunkType.Block;
    };
    CodeBuilder.prototype.addBlockAtStart = function (block) {
        this.reifyConditions();
        if (this.result) {
            this.result = block + "\n\n" + this.indent + this.result;
        }
        else {
            this.result += block;
        }
        this.first = ChunkType.Block;
        if (!this.last)
            this.last = ChunkType.Block;
    };
    CodeBuilder.prototype.isEmpty = function () {
        return this.result === '';
    };
    CodeBuilder.prototype.pushCondition = function (condition) {
        this.conditionStack.push({ condition: condition, used: false });
    };
    CodeBuilder.prototype.popCondition = function () {
        var used = this.conditionStack.pop().used;
        this.indent = repeat('\t', this.conditionStack.length);
        if (used)
            this.addLine('}');
    };
    CodeBuilder.prototype.reifyConditions = function () {
        for (var i = 0; i < this.conditionStack.length; i += 1) {
            var condition = this.conditionStack[i];
            if (!condition.used) {
                var line = "if (" + condition.condition + ") {";
                if (this.last === ChunkType.Block) {
                    this.result += "\n\n" + this.indent + line;
                }
                else if (this.last === ChunkType.Line) {
                    this.result += "\n" + this.indent + line;
                }
                else {
                    this.result += line;
                }
                this.last = ChunkType.Line;
                if (!this.first)
                    this.first = ChunkType.Line;
                this.indent = repeat('\t', this.conditionStack.length);
                condition.used = true;
            }
        }
    };
    CodeBuilder.prototype.toString = function () {
        return this.result.trim() + (this.lastCondition ? "\n}" : "");
    };
    return CodeBuilder;
}());

var globalWhitelist = new Set([
    'Array',
    'Boolean',
    'console',
    'Date',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'Infinity',
    'Intl',
    'isFinite',
    'isNaN',
    'JSON',
    'Map',
    'Math',
    'NaN',
    'Number',
    'Object',
    'parseFloat',
    'parseInt',
    'RegExp',
    'Set',
    'String',
    'undefined',
]);

// this file is auto-generated, do not edit it
var shared = {
    "appendNode": "function appendNode(node, target) {\n\ttarget.appendChild(node);\n}",
    "insertNode": "function insertNode(node, target, anchor) {\n\ttarget.insertBefore(node, anchor);\n}",
    "detachNode": "function detachNode(node) {\n\tnode.parentNode.removeChild(node);\n}",
    "detachBetween": "function detachBetween(before, after) {\n\twhile (before.nextSibling && before.nextSibling !== after) {\n\t\tbefore.parentNode.removeChild(before.nextSibling);\n\t}\n}",
    "detachBefore": "function detachBefore(after) {\n\twhile (after.previousSibling) {\n\t\tafter.parentNode.removeChild(after.previousSibling);\n\t}\n}",
    "detachAfter": "function detachAfter(before) {\n\twhile (before.nextSibling) {\n\t\tbefore.parentNode.removeChild(before.nextSibling);\n\t}\n}",
    "reinsertBetween": "function reinsertBetween(before, after, target) {\n\twhile (before.nextSibling && before.nextSibling !== after) {\n\t\ttarget.appendChild(before.parentNode.removeChild(before.nextSibling));\n\t}\n}",
    "reinsertChildren": "function reinsertChildren(parent, target) {\n\twhile (parent.firstChild) target.appendChild(parent.firstChild);\n}",
    "reinsertAfter": "function reinsertAfter(before, target) {\n\twhile (before.nextSibling) target.appendChild(before.nextSibling);\n}",
    "reinsertBefore": "function reinsertBefore(after, target) {\n\tvar parent = after.parentNode;\n\twhile (parent.firstChild !== after) target.appendChild(parent.firstChild);\n}",
    "destroyEach": "function destroyEach(iterations) {\n\tfor (var i = 0; i < iterations.length; i += 1) {\n\t\tif (iterations[i]) iterations[i].d();\n\t}\n}",
    "createFragment": "function createFragment() {\n\treturn document.createDocumentFragment();\n}",
    "createElement": "function createElement(name) {\n\treturn document.createElement(name);\n}",
    "createSvgElement": "function createSvgElement(name) {\n\treturn document.createElementNS('http://www.w3.org/2000/svg', name);\n}",
    "createText": "function createText(data) {\n\treturn document.createTextNode(data);\n}",
    "createComment": "function createComment() {\n\treturn document.createComment('');\n}",
    "addListener": "function addListener(node, event, handler) {\n\tnode.addEventListener(event, handler, false);\n}",
    "removeListener": "function removeListener(node, event, handler) {\n\tnode.removeEventListener(event, handler, false);\n}",
    "setAttribute": "function setAttribute(node, attribute, value) {\n\tnode.setAttribute(attribute, value);\n}",
    "setXlinkAttribute": "function setXlinkAttribute(node, attribute, value) {\n\tnode.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);\n}",
    "getBindingGroupValue": "function getBindingGroupValue(group) {\n\tvar value = [];\n\tfor (var i = 0; i < group.length; i += 1) {\n\t\tif (group[i].checked) value.push(group[i].__value);\n\t}\n\treturn value;\n}",
    "toNumber": "function toNumber(value) {\n\treturn value === '' ? undefined : +value;\n}",
    "timeRangesToArray": "function timeRangesToArray(ranges) {\n\tvar array = [];\n\tfor (var i = 0; i < ranges.length; i += 1) {\n\t\tarray.push({ start: ranges.start(i), end: ranges.end(i) });\n\t}\n\treturn array;\n}",
    "children": "function children (element) {\n\treturn Array.from(element.childNodes);\n}",
    "claimElement": "function claimElement (nodes, name, attributes, svg) {\n\tfor (var i = 0; i < nodes.length; i += 1) {\n\t\tvar node = nodes[i];\n\t\tif (node.nodeName === name) {\n\t\t\tfor (var j = 0; j < node.attributes.length; j += 1) {\n\t\t\t\tvar attribute = node.attributes[j];\n\t\t\t\tif (!attributes[attribute.name]) node.removeAttribute(attribute.name);\n\t\t\t}\n\t\t\treturn nodes.splice(i, 1)[0]; // TODO strip unwanted attributes\n\t\t}\n\t}\n\n\treturn svg ? createSvgElement(name) : createElement(name);\n}",
    "claimText": "function claimText (nodes, data) {\n\tfor (var i = 0; i < nodes.length; i += 1) {\n\t\tvar node = nodes[i];\n\t\tif (node.nodeType === 3) {\n\t\t\tnode.data = data;\n\t\t\treturn nodes.splice(i, 1)[0];\n\t\t}\n\t}\n\n\treturn createText(data);\n}",
    "setInputType": "function setInputType(input, type) {\n\ttry {\n\t\tinput.type = type;\n\t} catch (e) {}\n}",
    "setStyle": "function setStyle(node, key, value) {\n\tnode.style.setProperty(key, value);\n}",
    "selectOption": "function selectOption(select, value) {\n\tfor (var i = 0; i < select.options.length; i += 1) {\n\t\tvar option = select.options[i];\n\n\t\tif (option.__value === value) {\n\t\t\toption.selected = true;\n\t\t\treturn;\n\t\t}\n\t}\n}",
    "selectOptions": "function selectOptions(select, value) {\n\tfor (var i = 0; i < select.options.length; i += 1) {\n\t\tvar option = select.options[i];\n\t\toption.selected = ~value.indexOf(option.__value);\n\t}\n}",
    "selectValue": "function selectValue(select) {\n\tvar selectedOption = select.querySelector(':checked') || select.options[0];\n\treturn selectedOption && selectedOption.__value;\n}",
    "selectMultipleValue": "function selectMultipleValue(select) {\n\treturn [].map.call(select.querySelectorAll(':checked'), function(option) {\n\t\treturn option.__value;\n\t});\n}",
    "blankObject": "function blankObject() {\n\treturn Object.create(null);\n}",
    "destroy": "function destroy(detach) {\n\tthis.destroy = noop;\n\tthis.fire('destroy');\n\tthis.set = this.get = noop;\n\n\tif (detach !== false) this._fragment.u();\n\tthis._fragment.d();\n\tthis._fragment = this._state = null;\n}",
    "destroyDev": "function destroyDev(detach) {\n\tdestroy.call(this, detach);\n\tthis.destroy = function() {\n\t\tconsole.warn('Component was already destroyed');\n\t};\n}",
    "_differs": "function _differs(a, b) {\n\treturn a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');\n}",
    "_differsImmutable": "function _differsImmutable(a, b) {\n\treturn a != a ? b == b : a !== b;\n}",
    "dispatchObservers": "function dispatchObservers(component, group, changed, newState, oldState) {\n\tfor (var key in group) {\n\t\tif (!changed[key]) continue;\n\n\t\tvar newValue = newState[key];\n\t\tvar oldValue = oldState[key];\n\n\t\tvar callbacks = group[key];\n\t\tif (!callbacks) continue;\n\n\t\tfor (var i = 0; i < callbacks.length; i += 1) {\n\t\t\tvar callback = callbacks[i];\n\t\t\tif (callback.__calling) continue;\n\n\t\t\tcallback.__calling = true;\n\t\t\tcallback.call(component, newValue, oldValue);\n\t\t\tcallback.__calling = false;\n\t\t}\n\t}\n}",
    "fire": "function fire(eventName, data) {\n\tvar handlers =\n\t\teventName in this._handlers && this._handlers[eventName].slice();\n\tif (!handlers) return;\n\n\tfor (var i = 0; i < handlers.length; i += 1) {\n\t\thandlers[i].call(this, data);\n\t}\n}",
    "get": "function get(key) {\n\treturn key ? this._state[key] : this._state;\n}",
    "init": "function init(component, options) {\n\tcomponent._observers = { pre: blankObject(), post: blankObject() };\n\tcomponent._handlers = blankObject();\n\tcomponent._bind = options._bind;\n\n\tcomponent.options = options;\n\tcomponent.root = options.root || component;\n\tcomponent.store = component.root.store || options.store;\n}",
    "observe": "function observe(key, callback, options) {\n\tvar group = options && options.defer\n\t\t? this._observers.post\n\t\t: this._observers.pre;\n\n\t(group[key] || (group[key] = [])).push(callback);\n\n\tif (!options || options.init !== false) {\n\t\tcallback.__calling = true;\n\t\tcallback.call(this, this._state[key]);\n\t\tcallback.__calling = false;\n\t}\n\n\treturn {\n\t\tcancel: function() {\n\t\t\tvar index = group[key].indexOf(callback);\n\t\t\tif (~index) group[key].splice(index, 1);\n\t\t}\n\t};\n}",
    "observeDev": "function observeDev(key, callback, options) {\n\tvar c = (key = '' + key).search(/[.[]/);\n\tif (c > -1) {\n\t\tvar message =\n\t\t\t'The first argument to component.observe(...) must be the name of a top-level property';\n\t\tif (c > 0)\n\t\t\tmessage += \", i.e. '\" + key.slice(0, c) + \"' rather than '\" + key + \"'\";\n\n\t\tthrow new Error(message);\n\t}\n\n\treturn observe.call(this, key, callback, options);\n}",
    "on": "function on(eventName, handler) {\n\tif (eventName === 'teardown') return this.on('destroy', handler);\n\n\tvar handlers = this._handlers[eventName] || (this._handlers[eventName] = []);\n\thandlers.push(handler);\n\n\treturn {\n\t\tcancel: function() {\n\t\t\tvar index = handlers.indexOf(handler);\n\t\t\tif (~index) handlers.splice(index, 1);\n\t\t}\n\t};\n}",
    "onDev": "function onDev(eventName, handler) {\n\tif (eventName === 'teardown') {\n\t\tconsole.warn(\n\t\t\t\"Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2\"\n\t\t);\n\t\treturn this.on('destroy', handler);\n\t}\n\n\treturn on.call(this, eventName, handler);\n}",
    "run": "function run(fn) {\n\tfn();\n}",
    "set": "function set(newState) {\n\tthis._set(assign({}, newState));\n\tif (this.root._lock) return;\n\tthis.root._lock = true;\n\tcallAll(this.root._beforecreate);\n\tcallAll(this.root._oncreate);\n\tcallAll(this.root._aftercreate);\n\tthis.root._lock = false;\n}",
    "_set": "function _set(newState) {\n\tvar oldState = this._state,\n\t\tchanged = {},\n\t\tdirty = false;\n\n\tfor (var key in newState) {\n\t\tif (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;\n\t}\n\tif (!dirty) return;\n\n\tthis._state = assign({}, oldState, newState);\n\tthis._recompute(changed, this._state);\n\tif (this._bind) this._bind(changed, this._state);\n\n\tif (this._fragment) {\n\t\tdispatchObservers(this, this._observers.pre, changed, this._state, oldState);\n\t\tthis._fragment.p(changed, this._state);\n\t\tdispatchObservers(this, this._observers.post, changed, this._state, oldState);\n\t}\n}",
    "setDev": "function setDev(newState) {\n\tif (typeof newState !== 'object') {\n\t\tthrow new Error(\n\t\t\tthis._debugName + '.set was called without an object of data key-values to update.'\n\t\t);\n\t}\n\n\tthis._checkReadOnly(newState);\n\tset.call(this, newState);\n}",
    "callAll": "function callAll(fns) {\n\twhile (fns && fns.length) fns.shift()();\n}",
    "_mount": "function _mount(target, anchor) {\n\tthis._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);\n}",
    "_unmount": "function _unmount() {\n\tif (this._fragment) this._fragment.u();\n}",
    "isPromise": "function isPromise(value) {\n\treturn value && typeof value.then === 'function';\n}",
    "PENDING": "{}",
    "SUCCESS": "{}",
    "FAILURE": "{}",
    "removeFromStore": "function removeFromStore() {\n\tthis.store._remove(this);\n}",
    "proto": "{\n\tdestroy: destroy,\n\tget: get,\n\tfire: fire,\n\tobserve: observe,\n\ton: on,\n\tset: set,\n\tteardown: destroy,\n\t_recompute: noop,\n\t_set: _set,\n\t_mount: _mount,\n\t_unmount: _unmount,\n\t_differs: _differs\n}",
    "protoDev": "{\n\tdestroy: destroyDev,\n\tget: get,\n\tfire: fire,\n\tobserve: observeDev,\n\ton: onDev,\n\tset: setDev,\n\tteardown: destroyDev,\n\t_recompute: noop,\n\t_set: _set,\n\t_mount: _mount,\n\t_unmount: _unmount,\n\t_differs: _differs\n}",
    "destroyIteration": "function destroyIteration(iteration, lookup) {\n\tvar first = iteration.first\n\tif (first && first.parentNode) {\n\t\titeration.u();\n\t}\n\titeration.d();\n\tlookup[iteration.key] = null;\n}",
    "outroAndDestroyIteration": "function outroAndDestroyIteration(iteration, lookup) {\n\titeration.o(function() {\n\t\titeration.u();\n\t\titeration.d();\n\t\tlookup[iteration.key] = null;\n\t});\n}",
    "updateKeyedEach": "function updateKeyedEach(component, key, changed, key_prop, dynamic, list, head, lookup, node, has_outro, create_each_block, intro_method, get_context) {\n\tvar keep = {};\n\n\tvar i = list.length;\n\twhile (i--) {\n\t\tvar key = list[i][key_prop];\n\t\tvar iteration = lookup[key];\n\n\t\tif (iteration) {\n\t\t\tif (dynamic) iteration.p(changed, get_context(i));\n\t\t} else {\n\t\t\titeration = lookup[key] = create_each_block(component, key, get_context(i));\n\t\t\titeration.c();\n\t\t}\n\n\t\tlookup[key] = iteration;\n\t\tkeep[key] = 1;\n\t}\n\n\tvar destroy = has_outro\n\t\t? outroAndDestroyIteration\n\t\t: destroyIteration;\n\n\titeration = head;\n\twhile (iteration) {\n\t\tif (!keep[iteration.key]) destroy(iteration, lookup);\n\t\titeration = iteration.next;\n\t}\n\n\tvar next = null;\n\n\ti = list.length;\n\twhile (i--) {\n\t\tkey = list[i][key_prop];\n\t\titeration = lookup[key];\n\n\t\tvar anchor;\n\n\t\tif (has_outro) {\n\t\t\tvar next_key = next && next.key;\n\t\t\tvar neighbour = iteration.next;\n\t\t\tvar anchor_key;\n\n\t\t\twhile (neighbour && anchor_key != next_key && !keep[anchor_key]) {\n\t\t\t\tanchor = neighbour && neighbour.first;\n\t\t\t\tneighbour = neighbour.next;\n\t\t\t\tanchor_key = neighbour && neighbour.key;\n\t\t\t}\n\t\t} else {\n\t\t\tanchor = next && next.first;\n\t\t}\n\n\t\titeration[intro_method](node, anchor);\n\n\t\titeration.next = next;\n\t\tif (next) next.last = iteration;\n\t\tnext = iteration;\n\t}\n}",
    "linear": "function linear(t) {\n\treturn t;\n}",
    "generateRule": "function generateRule(\n\ta,\n\tb,\n\tdelta,\n\tduration,\n\tease,\n\tfn\n) {\n\tvar keyframes = '{\\n';\n\n\tfor (var p = 0; p <= 1; p += 16.666 / duration) {\n\t\tvar t = a + delta * ease(p);\n\t\tkeyframes += p * 100 + '%{' + fn(t) + '}\\n';\n\t}\n\n\treturn keyframes + '100% {' + fn(b) + '}\\n}';\n}",
    "hash": "function hash(str) {\n\tvar hash = 5381;\n\tvar i = str.length;\n\n\twhile (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);\n\treturn hash >>> 0;\n}",
    "wrapTransition": "function wrapTransition(component, node, fn, params, intro, outgroup) {\n\tvar obj = fn(node, params);\n\tvar duration = obj.duration || 300;\n\tvar ease = obj.easing || linear;\n\tvar cssText;\n\n\t// TODO share <style> tag between all transitions?\n\tif (obj.css && !transitionManager.stylesheet) {\n\t\tvar style = createElement('style');\n\t\tdocument.head.appendChild(style);\n\t\ttransitionManager.stylesheet = style.sheet;\n\t}\n\n\tif (intro) {\n\t\tif (obj.css && obj.delay) {\n\t\t\tcssText = node.style.cssText;\n\t\t\tnode.style.cssText += obj.css(0);\n\t\t}\n\n\t\tif (obj.tick) obj.tick(0);\n\t}\n\n\treturn {\n\t\tt: intro ? 0 : 1,\n\t\trunning: false,\n\t\tprogram: null,\n\t\tpending: null,\n\t\trun: function(intro, callback) {\n\t\t\tvar program = {\n\t\t\t\tstart: window.performance.now() + (obj.delay || 0),\n\t\t\t\tintro: intro,\n\t\t\t\tcallback: callback\n\t\t\t};\n\n\t\t\tif (obj.delay) {\n\t\t\t\tthis.pending = program;\n\t\t\t} else {\n\t\t\t\tthis.start(program);\n\t\t\t}\n\n\t\t\tif (!this.running) {\n\t\t\t\tthis.running = true;\n\t\t\t\ttransitionManager.add(this);\n\t\t\t}\n\t\t},\n\t\tstart: function(program) {\n\t\t\tcomponent.fire(program.intro ? 'intro.start' : 'outro.start', { node: node });\n\n\t\t\tprogram.a = this.t;\n\t\t\tprogram.b = program.intro ? 1 : 0;\n\t\t\tprogram.delta = program.b - program.a;\n\t\t\tprogram.duration = duration * Math.abs(program.b - program.a);\n\t\t\tprogram.end = program.start + program.duration;\n\n\t\t\tif (obj.css) {\n\t\t\t\tif (obj.delay) node.style.cssText = cssText;\n\n\t\t\t\tprogram.rule = generateRule(\n\t\t\t\t\tprogram.a,\n\t\t\t\t\tprogram.b,\n\t\t\t\t\tprogram.delta,\n\t\t\t\t\tprogram.duration,\n\t\t\t\t\tease,\n\t\t\t\t\tobj.css\n\t\t\t\t);\n\n\t\t\t\ttransitionManager.addRule(program.rule, program.name = '__svelte_' + hash(program.rule));\n\n\t\t\t\tnode.style.animation = (node.style.animation || '')\n\t\t\t\t\t.split(', ')\n\t\t\t\t\t.filter(function(anim) {\n\t\t\t\t\t\t// when introing, discard old animations if there are any\n\t\t\t\t\t\treturn anim && (program.delta < 0 || !/__svelte/.test(anim));\n\t\t\t\t\t})\n\t\t\t\t\t.concat(program.name + ' ' + program.duration + 'ms linear 1 forwards')\n\t\t\t\t\t.join(', ');\n\t\t\t}\n\n\t\t\tthis.program = program;\n\t\t\tthis.pending = null;\n\t\t},\n\t\tupdate: function(now) {\n\t\t\tvar program = this.program;\n\t\t\tif (!program) return;\n\n\t\t\tvar p = now - program.start;\n\t\t\tthis.t = program.a + program.delta * ease(p / program.duration);\n\t\t\tif (obj.tick) obj.tick(this.t);\n\t\t},\n\t\tdone: function() {\n\t\t\tvar program = this.program;\n\t\t\tthis.t = program.b;\n\t\t\tif (obj.tick) obj.tick(this.t);\n\t\t\tif (obj.css) transitionManager.deleteRule(node, program.name);\n\t\t\tprogram.callback();\n\t\t\tprogram = null;\n\t\t\tthis.running = !!this.pending;\n\t\t},\n\t\tabort: function() {\n\t\t\tif (obj.tick) obj.tick(1);\n\t\t\tif (obj.css) transitionManager.deleteRule(node, this.program.name);\n\t\t\tthis.program = this.pending = null;\n\t\t\tthis.running = false;\n\t\t}\n\t};\n}",
    "transitionManager": "{\n\trunning: false,\n\ttransitions: [],\n\tbound: null,\n\tstylesheet: null,\n\tactiveRules: {},\n\n\tadd: function(transition) {\n\t\tthis.transitions.push(transition);\n\n\t\tif (!this.running) {\n\t\t\tthis.running = true;\n\t\t\trequestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));\n\t\t}\n\t},\n\n\taddRule: function(rule, name) {\n\t\tif (!this.activeRules[name]) {\n\t\t\tthis.activeRules[name] = true;\n\t\t\tthis.stylesheet.insertRule('@keyframes ' + name + ' ' + rule, this.stylesheet.cssRules.length);\n\t\t}\n\t},\n\n\tnext: function() {\n\t\tthis.running = false;\n\n\t\tvar now = window.performance.now();\n\t\tvar i = this.transitions.length;\n\n\t\twhile (i--) {\n\t\t\tvar transition = this.transitions[i];\n\n\t\t\tif (transition.program && now >= transition.program.end) {\n\t\t\t\ttransition.done();\n\t\t\t}\n\n\t\t\tif (transition.pending && now >= transition.pending.start) {\n\t\t\t\ttransition.start(transition.pending);\n\t\t\t}\n\n\t\t\tif (transition.running) {\n\t\t\t\ttransition.update(now);\n\t\t\t\tthis.running = true;\n\t\t\t} else if (!transition.pending) {\n\t\t\t\tthis.transitions.splice(i, 1);\n\t\t\t}\n\t\t}\n\n\t\tif (this.running) {\n\t\t\trequestAnimationFrame(this.bound);\n\t\t} else if (this.stylesheet) {\n\t\t\tvar i = this.stylesheet.cssRules.length;\n\t\t\twhile (i--) this.stylesheet.deleteRule(i);\n\t\t\tthis.activeRules = {};\n\t\t}\n\t},\n\n\tdeleteRule: function(node, name) {\n\t\tnode.style.animation = node.style.animation\n\t\t\t.split(', ')\n\t\t\t.filter(function(anim) {\n\t\t\t\treturn anim.slice(0, name.length) !== name;\n\t\t\t})\n\t\t\t.join(', ');\n\t}\n}",
    "noop": "function noop() {}",
    "assign": "function assign(target) {\n\tvar k,\n\t\tsource,\n\t\ti = 1,\n\t\tlen = arguments.length;\n\tfor (; i < len; i++) {\n\t\tsource = arguments[i];\n\t\tfor (k in source) target[k] = source[k];\n\t}\n\n\treturn target;\n}"
};

var keys = {
    ObjectExpression: 'properties',
    Program: 'body'
};
var offsets = {
    ObjectExpression: [1, -1],
    Program: [0, 0]
};
function removeNode(code, parent, node) {
    var key = keys[parent.type];
    var offset = offsets[parent.type];
    if (!key || !offset)
        throw new Error("not implemented: " + parent.type);
    var list = parent[key];
    var i = list.indexOf(node);
    if (i === -1)
        throw new Error('node not in list');
    var a;
    var b;
    if (list.length === 1) {
        // remove everything, leave {}
        a = parent.start + offset[0];
        b = parent.end + offset[1];
    }
    else if (i === 0) {
        // remove everything before second node, including comments
        a = parent.start + offset[0];
        while (/\s/.test(code.original[a]))
            a += 1;
        b = list[i].end;
        while (/[\s,]/.test(code.original[b]))
            b += 1;
    }
    else {
        // remove the end of the previous node to the end of this one
        a = list[i - 1].end;
        b = node.end;
    }
    code.remove(a, b);
    list.splice(i, 1);
    return;
}

var wrappers = { es: es, amd: amd, cjs: cjs, iife: iife, umd: umd, eval: expr };
function wrapModule(code, format, name, options, banner, sharedPath, helpers, imports, source) {
    if (format === 'es')
        return es(code, name, options, banner, sharedPath, helpers, imports, source);
    var dependencies = imports.map(function (declaration, i) {
        var defaultImport = declaration.specifiers.find(function (x) {
            return x.type === 'ImportDefaultSpecifier' ||
                (x.type === 'ImportSpecifier' && x.imported.name === 'default');
        });
        var namespaceImport = declaration.specifiers.find(function (x) { return x.type === 'ImportNamespaceSpecifier'; });
        var namedImports = declaration.specifiers.filter(function (x) {
            return x.type === 'ImportSpecifier' && x.imported.name !== 'default';
        });
        var name = defaultImport || namespaceImport
            ? (defaultImport || namespaceImport).local.name
            : "__import" + i;
        var statements = [];
        namedImports.forEach(function (specifier) {
            statements.push("var " + specifier.local.name + " = " + name + "." + specifier.imported.name + ";");
        });
        if (defaultImport) {
            statements.push(name + " = (" + name + " && " + name + ".__esModule) ? " + name + "[\"default\"] : " + name + ";");
        }
        return { name: name, statements: statements, source: declaration.source.value };
    });
    if (format === 'amd')
        return amd(code, name, options, banner, dependencies);
    if (format === 'cjs')
        return cjs(code, name, options, banner, sharedPath, helpers, dependencies);
    if (format === 'iife')
        return iife(code, name, options, banner, dependencies);
    if (format === 'umd')
        return umd(code, name, options, banner, dependencies);
    if (format === 'eval')
        return expr(code, name, options, banner, dependencies);
    throw new Error("options.format is invalid (must be " + list$2(Object.keys(wrappers)) + ")");
}
function es(code, name, options, banner, sharedPath, helpers, imports, source) {
    var importHelpers = helpers && ("import { " + helpers.map(function (h) { return h.name === h.alias ? h.name : h.name + " as " + h.alias; }).join(', ') + " } from " + JSON.stringify(sharedPath) + ";");
    var importBlock = imports.length > 0 && (imports
        .map(function (declaration) { return source.slice(declaration.start, declaration.end); })
        .join('\n'));
    return deindent(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n\t\t", "\n\t\t", "\n\t\t", "\n\n\t\t", "\n\t\texport default ", ";"], ["\n\t\t", "\n\t\t", "\n\t\t", "\n\n\t\t", "\n\t\texport default ", ";"])), banner, importHelpers, importBlock, code, name);
}
function amd(code, name, options, banner, dependencies) {
    var sourceString = dependencies.length
        ? "[" + dependencies.map(function (d) { return "\"" + removeExtension(d.source) + "\""; }).join(', ') + "], "
        : '';
    var id = options.amd && options.amd.id;
    return deindent(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n\t\tdefine(", "", "function(", ") { \"use strict\";\n\t\t\t", "\n\n\t\t\t", "\n\t\t\treturn ", ";\n\t\t});"], ["\n\t\tdefine(", "", "function(", ") { \"use strict\";\n\t\t\t", "\n\n\t\t\t", "\n\t\t\treturn ", ";\n\t\t});"])), id ? "\"" + id + "\", " : '', sourceString, paramString(dependencies), getCompatibilityStatements(dependencies), code, name);
}
function cjs(code, name, options, banner, sharedPath, helpers, dependencies) {
    var SHARED = '__shared';
    var helperBlock = helpers && ("var " + SHARED + " = require(" + JSON.stringify(sharedPath) + ");\n" +
        helpers.map(function (helper) {
            return "var " + helper.alias + " = " + SHARED + "." + helper.name + ";";
        }).join('\n'));
    var requireBlock = dependencies.length > 0 && (dependencies
        .map(function (d) { return "var " + d.name + " = require(\"" + d.source + "\");"; })
        .join('\n\n'));
    return deindent(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n\t\t", "\n\t\t\"use strict\";\n\n\t\t", "\n\t\t", "\n\t\t", "\n\n\t\t", "\n\n\t\tmodule.exports = ", ";"], ["\n\t\t", "\n\t\t\"use strict\";\n\n\t\t", "\n\t\t", "\n\t\t", "\n\n\t\t", "\n\n\t\tmodule.exports = ", ";"])), banner, helperBlock, requireBlock, getCompatibilityStatements(dependencies), code, name);
}
function iife(code, name, options, banner, dependencies) {
    if (!options.name) {
        throw new Error("Missing required 'name' option for IIFE export");
    }
    var globals = getGlobals(dependencies, options);
    return deindent(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n\t\t", "\n\t\tvar ", " = (function(", ") { \"use strict\";\n\t\t\t", "\n\n\t\t\t", "\n\t\t\treturn ", ";\n\t\t}(", "));"], ["\n\t\t", "\n\t\tvar ", " = (function(", ") { \"use strict\";\n\t\t\t", "\n\n\t\t\t", "\n\t\t\treturn ", ";\n\t\t}(", "));"])), banner, options.name, paramString(dependencies), getCompatibilityStatements(dependencies), code, name, globals.join(', '));
}
function umd(code, name, options, banner, dependencies) {
    if (!options.name) {
        throw new Error("Missing required 'name' option for UMD export");
    }
    var amdId = options.amd && options.amd.id ? "'" + options.amd.id + "', " : '';
    var amdDeps = dependencies.length
        ? "[" + dependencies.map(function (d) { return "\"" + removeExtension(d.source) + "\""; }).join(', ') + "], "
        : '';
    var cjsDeps = dependencies
        .map(function (d) { return "require(\"" + d.source + "\")"; })
        .join(', ');
    var globals = getGlobals(dependencies, options);
    return deindent(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n\t\t", "\n\t\t(function(global, factory) {\n\t\t\ttypeof exports === \"object\" && typeof module !== \"undefined\" ? module.exports = factory(", ") :\n\t\t\ttypeof define === \"function\" && define.amd ? define(", "", "factory) :\n\t\t\t(global.", " = factory(", "));\n\t\t}(this, (function (", ") { \"use strict\";\n\n\t\t\t", "\n\n\t\t\t", "\n\n\t\t\treturn ", ";\n\n\t\t})));"], ["\n\t\t", "\n\t\t(function(global, factory) {\n\t\t\ttypeof exports === \"object\" && typeof module !== \"undefined\" ? module.exports = factory(", ") :\n\t\t\ttypeof define === \"function\" && define.amd ? define(", "", "factory) :\n\t\t\t(global.", " = factory(", "));\n\t\t}(this, (function (", ") { \"use strict\";\n\n\t\t\t", "\n\n\t\t\t", "\n\n\t\t\treturn ", ";\n\n\t\t})));"])), banner, cjsDeps, amdId, amdDeps, options.name, globals.join(', '), paramString(dependencies), getCompatibilityStatements(dependencies), code, name);
}
function expr(code, name, options, banner, dependencies) {
    var globals = getGlobals(dependencies, options);
    return deindent(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n\t\t(function (", ") { \"use strict\";\n\t\t\t", "\n\n\t\t\t", "\n\n\t\t\t", "\n\n\t\t\treturn ", ";\n\t\t}(", "))"], ["\n\t\t(function (", ") { \"use strict\";\n\t\t\t", "\n\n\t\t\t", "\n\n\t\t\t", "\n\n\t\t\treturn ", ";\n\t\t}(", "))"])), paramString(dependencies), banner, getCompatibilityStatements(dependencies), code, name, globals.join(', '));
}
function paramString(dependencies) {
    return dependencies.map(function (dep) { return dep.name; }).join(', ');
}
function removeExtension(file) {
    var index = file.lastIndexOf('.');
    return ~index ? file.slice(0, index) : file;
}
function getCompatibilityStatements(dependencies) {
    if (!dependencies.length)
        return null;
    var statements = [];
    dependencies.forEach(function (dependency) {
        statements.push.apply(statements, dependency.statements);
    });
    return statements.join('\n');
}
function getGlobals(dependencies, options) {
    var globals = options.globals, onerror = options.onerror, onwarn = options.onwarn;
    var globalFn = getGlobalFn(globals);
    return dependencies.map(function (d) {
        var name = globalFn(d.source);
        if (!name) {
            if (d.name.startsWith('__import')) {
                var error = new Error("Could not determine name for imported module '" + d.source + "' \u2013 use options.globals");
                onerror(error);
            }
            else {
                var warning = {
                    message: "No name was supplied for imported module '" + d.source + "'. Guessing '" + d.name + "', but you should use options.globals"
                };
                onwarn(warning);
            }
            name = d.name;
        }
        return name;
    });
}
function getGlobalFn(globals) {
    if (typeof globals === 'function')
        return globals;
    if (typeof globals === 'object') {
        return function (id) { return globals[id]; };
    }
    return function () { return undefined; };
}
var templateObject_1$2;
var templateObject_2$2;
var templateObject_3$2;
var templateObject_4$2;
var templateObject_5$1;
var templateObject_6$1;

function clone(node) {
    var cloned = {};
    for (var key in node) {
        var value = node[key];
        if (Array.isArray(value)) {
            cloned[key] = value.map(clone);
        }
        else if (value && typeof value === 'object') {
            cloned[key] = clone(value);
        }
        else {
            cloned[key] = value;
        }
    }
    return cloned;
}

var test = typeof process !== 'undefined' && process.env.TEST;

var svgAttributes = 'accent-height accumulate additive alignment-baseline allowReorder alphabetic amplitude arabic-form ascent attributeName attributeType autoReverse azimuth baseFrequency baseline-shift baseProfile bbox begin bias by calcMode cap-height class clip clipPathUnits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominant-baseline dur dx dy edgeMode elevation enable-background end exponent externalResourcesRequired fill fill-opacity fill-rule filter filterRes filterUnits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight format from fr fx fy g1 g2 glyph-name glyph-orientation-horizontal glyph-orientation-vertical glyphRef gradientTransform gradientUnits hanging height href horiz-adv-x horiz-origin-x id ideographic image-rendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lang lengthAdjust letter-spacing lighting-color limitingConeAngle local marker-end marker-mid marker-start markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical max media method min mode name numOctaves offset onabort onactivate onbegin onclick onend onerror onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup onrepeat onresize onscroll onunload opacity operator order orient orientation origin overflow overline-position overline-thickness panose-1 paint-order pathLength patternContentUnits patternTransform patternUnits pointer-events points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY rendering-intent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shape-rendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stop-color stop-opacity strikethrough-position strikethrough-thickness string stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width style surfaceScale systemLanguage tabindex tableValues target targetX targetY text-anchor text-decoration text-rendering textLength to transform type u1 u2 underline-position underline-thickness unicode unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical values version vert-adv-y vert-origin-x vert-origin-y viewBox viewTarget visibility width widths word-spacing writing-mode x x-height x1 x2 xChannelSelector xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y y1 y2 yChannelSelector z zoomAndPan'.split(' ');
var svgAttributeLookup = new Map();
svgAttributes.forEach(function (name) {
    svgAttributeLookup.set(name.toLowerCase(), name);
});
function fixAttributeCasing(name) {
    name = name.toLowerCase();
    return svgAttributeLookup.get(name) || name;
}

var binaryOperators = {
    '**': 15,
    '*': 14,
    '/': 14,
    '%': 14,
    '+': 13,
    '-': 13,
    '<<': 12,
    '>>': 12,
    '>>>': 12,
    '<': 11,
    '<=': 11,
    '>': 11,
    '>=': 11,
    'in': 11,
    'instanceof': 11,
    '==': 10,
    '!=': 10,
    '===': 10,
    '!==': 10,
    '&': 9,
    '^': 8,
    '|': 7
};
var logicalOperators = {
    '&&': 6,
    '||': 5
};
var precedence = {
    Literal: function () { return 21; },
    Identifier: function () { return 21; },
    ParenthesizedExpression: function () { return 20; },
    MemberExpression: function () { return 19; },
    NewExpression: function () { return 19; },
    CallExpression: function () { return 19; },
    UpdateExpression: function () { return 17; },
    UnaryExpression: function () { return 16; },
    BinaryExpression: function (expression) { return binaryOperators[expression.operator]; },
    LogicalExpression: function (expression) { return logicalOperators[expression.operator]; },
    ConditionalExpression: function () { return 4; },
    AssignmentExpression: function () { return 3; },
    YieldExpression: function () { return 2; },
    SpreadElement: function () { return 1; },
    SequenceExpression: function () { return 0; }
};
function getExpressionPrecedence(expression) {
    return expression.type in precedence ? precedence[expression.type](expression) : 0;
}

var Attribute = /** @class */ (function () {
    function Attribute(_a) {
        var generator = _a.generator, name = _a.name, value = _a.value, parent = _a.parent;
        this.type = 'Attribute';
        this.generator = generator;
        this.parent = parent;
        this.name = name;
        this.value = value;
    }
    Attribute.prototype.render = function (block) {
        var node = this.parent;
        var name = fixAttributeCasing(this.name);
        if (name === 'style') {
            var styleProps = optimizeStyle(this.value);
            if (styleProps) {
                this.renderStyle(block, styleProps);
                return;
            }
        }
        var metadata = node.namespace ? null : attributeLookup[name];
        if (metadata && metadata.appliesTo && !~metadata.appliesTo.indexOf(node.name))
            metadata = null;
        var isIndirectlyBoundValue = name === 'value' &&
            (node.name === 'option' || // TODO check it's actually bound
                (node.name === 'input' &&
                    node.attributes.find(function (attribute) {
                        return attribute.type === 'Binding' && /checked|group/.test(attribute.name);
                    })));
        var propertyName = isIndirectlyBoundValue
            ? '__value'
            : metadata && metadata.propertyName;
        // xlink is a special case... we could maybe extend this to generic
        // namespaced attributes but I'm not sure that's applicable in
        // HTML5?
        var method = name.slice(0, 6) === 'xlink:'
            ? '@setXlinkAttribute'
            : '@setAttribute';
        var isDynamic = this.isDynamic();
        var isLegacyInputType = this.generator.legacy && name === 'type' && this.parent.name === 'input';
        var isDataSet = /^data-/.test(name) && !this.generator.legacy && !node.namespace;
        var camelCaseName = isDataSet ? name.replace('data-', '').replace(/(-\w)/g, function (m) {
            return m[1].toUpperCase();
        }) : name;
        if (isDynamic) {
            var value = void 0;
            var allDependencies_1 = new Set();
            var shouldCache = void 0;
            var hasChangeableIndex_1;
            // TODO some of this code is repeated in Tag.ts — would be good to
            // DRY it out if that's possible without introducing crazy indirection
            if (this.value.length === 1) {
                // single {{tag}} — may be a non-string
                var expression = this.value[0].expression;
                var indexes = block.contextualise(expression).indexes;
                var _a = this.value[0].metadata, dependencies = _a.dependencies, snippet = _a.snippet;
                value = snippet;
                dependencies.forEach(function (d) {
                    allDependencies_1.add(d);
                });
                hasChangeableIndex_1 = Array.from(indexes).some(function (index) { return block.changeableIndexes.get(index); });
                shouldCache = (expression.type !== 'Identifier' ||
                    block.contexts.has(expression.name) ||
                    hasChangeableIndex_1);
            }
            else {
                // '{{foo}} {{bar}}' — treat as string concatenation
                value =
                    (this.value[0].type === 'Text' ? '' : "\"\" + ") +
                        this.value
                            .map(function (chunk) {
                            if (chunk.type === 'Text') {
                                return stringify(chunk.data);
                            }
                            else {
                                var indexes = block.contextualise(chunk.expression).indexes;
                                var _a = chunk.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
                                if (Array.from(indexes).some(function (index) { return block.changeableIndexes.get(index); })) {
                                    hasChangeableIndex_1 = true;
                                }
                                dependencies.forEach(function (d) {
                                    allDependencies_1.add(d);
                                });
                                return getExpressionPrecedence(chunk.expression) <= 13 ? "(" + snippet + ")" : snippet;
                            }
                        })
                            .join(' + ');
                shouldCache = true;
            }
            var isSelectValueAttribute = name === 'value' && node.name === 'select';
            var last = (shouldCache || isSelectValueAttribute) && block.getUniqueName(node["var"] + "_" + name.replace(/[^a-zA-Z_$]/g, '_') + "_value");
            if (shouldCache || isSelectValueAttribute)
                block.addVariable(last);
            var updater = void 0;
            var init = shouldCache ? last + " = " + value : value;
            if (isLegacyInputType) {
                block.builders.hydrate.addLine("@setInputType(" + node["var"] + ", " + init + ");");
                updater = "@setInputType(" + node["var"] + ", " + (shouldCache ? last : value) + ");";
            }
            else if (isSelectValueAttribute) {
                // annoying special case
                var isMultipleSelect = node.getStaticAttributeValue('multiple');
                var i = block.getUniqueName('i');
                var option = block.getUniqueName('option');
                var ifStatement = isMultipleSelect
                    ? deindent(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n\t\t\t\t\t\t", ".selected = ~", ".indexOf(", ".__value);"], ["\n\t\t\t\t\t\t", ".selected = ~", ".indexOf(", ".__value);"])), option, last, option) : deindent(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n\t\t\t\t\t\tif (", ".__value === ", ") {\n\t\t\t\t\t\t\t", ".selected = true;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}"], ["\n\t\t\t\t\t\tif (", ".__value === ", ") {\n\t\t\t\t\t\t\t", ".selected = true;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}"])), option, last, option);
                updater = deindent(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n\t\t\t\t\tfor (var ", " = 0; ", " < ", ".options.length; ", " += 1) {\n\t\t\t\t\t\tvar ", " = ", ".options[", "];\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tfor (var ", " = 0; ", " < ", ".options.length; ", " += 1) {\n\t\t\t\t\t\tvar ", " = ", ".options[", "];\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t"])), i, i, node["var"], i, option, node["var"], i, ifStatement);
                block.builders.hydrate.addBlock(deindent(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n\t\t\t\t\t", " = ", ";\n\t\t\t\t\t", "\n\t\t\t\t"], ["\n\t\t\t\t\t", " = ", ";\n\t\t\t\t\t", "\n\t\t\t\t"])), last, value, updater));
                block.builders.update.addLine(last + " = " + value + ";");
            }
            else if (propertyName) {
                block.builders.hydrate.addLine(node["var"] + "." + propertyName + " = " + init + ";");
                updater = node["var"] + "." + propertyName + " = " + (shouldCache ? last : value) + ";";
            }
            else if (isDataSet) {
                block.builders.hydrate.addLine(node["var"] + ".dataset." + camelCaseName + " = " + init + ";");
                updater = node["var"] + ".dataset." + camelCaseName + " = " + (shouldCache ? last : value) + ";";
            }
            else {
                block.builders.hydrate.addLine(method + "(" + node["var"] + ", \"" + name + "\", " + init + ");");
                updater = method + "(" + node["var"] + ", \"" + name + "\", " + (shouldCache ? last : value) + ");";
            }
            if (allDependencies_1.size || hasChangeableIndex_1 || isSelectValueAttribute) {
                var dependencies = Array.from(allDependencies_1);
                var changedCheck = ((block.hasOutroMethod ? "#outroing || " : '') +
                    dependencies.map(function (dependency) { return "changed." + dependency; }).join(' || '));
                var updateCachedValue = last + " !== (" + last + " = " + value + ")";
                var condition = shouldCache ?
                    (dependencies.length ? "(" + changedCheck + ") && " + updateCachedValue : updateCachedValue) :
                    changedCheck;
                block.builders.update.addConditional(condition, updater);
            }
        }
        else {
            var value = this.value === true
                ? 'true'
                : this.value.length === 0 ? "''" : stringify(this.value[0].data);
            var statement = (isLegacyInputType
                ? "@setInputType(" + node["var"] + ", " + value + ");"
                : propertyName
                    ? node["var"] + "." + propertyName + " = " + value + ";"
                    : isDataSet
                        ? node["var"] + ".dataset." + camelCaseName + " = " + value + ";"
                        : method + "(" + node["var"] + ", \"" + name + "\", " + value + ");");
            block.builders.hydrate.addLine(statement);
            // special case – autofocus. has to be handled in a bit of a weird way
            if (this.value === true && name === 'autofocus') {
                block.autofocus = node["var"];
            }
        }
        if (isIndirectlyBoundValue) {
            var updateValue = node["var"] + ".value = " + node["var"] + ".__value;";
            block.builders.hydrate.addLine(updateValue);
            if (isDynamic)
                block.builders.update.addLine(updateValue);
        }
    };
    Attribute.prototype.renderStyle = function (block, styleProps) {
        var _this = this;
        styleProps.forEach(function (prop) {
            var value;
            if (isDynamic$1(prop.value)) {
                var allDependencies_2 = new Set();
                var hasChangeableIndex_2;
                value =
                    ((prop.value.length === 1 || prop.value[0].type === 'Text') ? '' : "\"\" + ") +
                        prop.value
                            .map(function (chunk) {
                            if (chunk.type === 'Text') {
                                return stringify(chunk.data);
                            }
                            else {
                                var indexes = block.contextualise(chunk.expression).indexes;
                                var _a = chunk.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
                                if (Array.from(indexes).some(function (index) { return block.changeableIndexes.get(index); })) {
                                    hasChangeableIndex_2 = true;
                                }
                                dependencies.forEach(function (d) {
                                    allDependencies_2.add(d);
                                });
                                return getExpressionPrecedence(chunk.expression) <= 13 ? "( " + snippet + " )" : snippet;
                            }
                        })
                            .join(' + ');
                if (allDependencies_2.size || hasChangeableIndex_2) {
                    var dependencies = Array.from(allDependencies_2);
                    var condition = ((block.hasOutroMethod ? "#outroing || " : '') +
                        dependencies.map(function (dependency) { return "changed." + dependency; }).join(' || '));
                    block.builders.update.addConditional(condition, "@setStyle(" + _this.parent["var"] + ", \"" + prop.key + "\", " + value + ");");
                }
            }
            else {
                value = stringify(prop.value[0].data);
            }
            block.builders.hydrate.addLine("@setStyle(" + _this.parent["var"] + ", \"" + prop.key + "\", " + value + ");");
        });
    };
    Attribute.prototype.isDynamic = function () {
        if (this.value === true || this.value.length === 0)
            return false;
        if (this.value.length > 1)
            return true;
        return this.value[0].type !== 'Text';
    };
    return Attribute;
}());
// source: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
var attributeLookup = {
    accept: { appliesTo: ['form', 'input'] },
    'accept-charset': { propertyName: 'acceptCharset', appliesTo: ['form'] },
    accesskey: { propertyName: 'accessKey' },
    action: { appliesTo: ['form'] },
    align: {
        appliesTo: [
            'applet',
            'caption',
            'col',
            'colgroup',
            'hr',
            'iframe',
            'img',
            'table',
            'tbody',
            'td',
            'tfoot',
            'th',
            'thead',
            'tr',
        ]
    },
    allowfullscreen: { propertyName: 'allowFullscreen', appliesTo: ['iframe'] },
    alt: { appliesTo: ['applet', 'area', 'img', 'input'] },
    async: { appliesTo: ['script'] },
    autocomplete: { appliesTo: ['form', 'input'] },
    autofocus: { appliesTo: ['button', 'input', 'keygen', 'select', 'textarea'] },
    autoplay: { appliesTo: ['audio', 'video'] },
    autosave: { appliesTo: ['input'] },
    bgcolor: {
        propertyName: 'bgColor',
        appliesTo: [
            'body',
            'col',
            'colgroup',
            'marquee',
            'table',
            'tbody',
            'tfoot',
            'td',
            'th',
            'tr',
        ]
    },
    border: { appliesTo: ['img', 'object', 'table'] },
    buffered: { appliesTo: ['audio', 'video'] },
    challenge: { appliesTo: ['keygen'] },
    charset: { appliesTo: ['meta', 'script'] },
    checked: { appliesTo: ['command', 'input'] },
    cite: { appliesTo: ['blockquote', 'del', 'ins', 'q'] },
    "class": { propertyName: 'className' },
    code: { appliesTo: ['applet'] },
    codebase: { propertyName: 'codeBase', appliesTo: ['applet'] },
    color: { appliesTo: ['basefont', 'font', 'hr'] },
    cols: { appliesTo: ['textarea'] },
    colspan: { propertyName: 'colSpan', appliesTo: ['td', 'th'] },
    content: { appliesTo: ['meta'] },
    contenteditable: { propertyName: 'contentEditable' },
    contextmenu: {},
    controls: { appliesTo: ['audio', 'video'] },
    coords: { appliesTo: ['area'] },
    data: { appliesTo: ['object'] },
    datetime: { propertyName: 'dateTime', appliesTo: ['del', 'ins', 'time'] },
    "default": { appliesTo: ['track'] },
    defer: { appliesTo: ['script'] },
    dir: {},
    dirname: { propertyName: 'dirName', appliesTo: ['input', 'textarea'] },
    disabled: {
        appliesTo: [
            'button',
            'command',
            'fieldset',
            'input',
            'keygen',
            'optgroup',
            'option',
            'select',
            'textarea',
        ]
    },
    download: { appliesTo: ['a', 'area'] },
    draggable: {},
    dropzone: {},
    enctype: { appliesTo: ['form'] },
    "for": { propertyName: 'htmlFor', appliesTo: ['label', 'output'] },
    form: {
        appliesTo: [
            'button',
            'fieldset',
            'input',
            'keygen',
            'label',
            'meter',
            'object',
            'output',
            'progress',
            'select',
            'textarea',
        ]
    },
    formaction: { appliesTo: ['input', 'button'] },
    headers: { appliesTo: ['td', 'th'] },
    height: {
        appliesTo: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video']
    },
    hidden: {},
    high: { appliesTo: ['meter'] },
    href: { appliesTo: ['a', 'area', 'base', 'link'] },
    hreflang: { appliesTo: ['a', 'area', 'link'] },
    'http-equiv': { propertyName: 'httpEquiv', appliesTo: ['meta'] },
    icon: { appliesTo: ['command'] },
    id: {},
    indeterminate: { appliesTo: ['input'] },
    ismap: { propertyName: 'isMap', appliesTo: ['img'] },
    itemprop: {},
    keytype: { appliesTo: ['keygen'] },
    kind: { appliesTo: ['track'] },
    label: { appliesTo: ['track'] },
    lang: {},
    language: { appliesTo: ['script'] },
    loop: { appliesTo: ['audio', 'bgsound', 'marquee', 'video'] },
    low: { appliesTo: ['meter'] },
    manifest: { appliesTo: ['html'] },
    max: { appliesTo: ['input', 'meter', 'progress'] },
    maxlength: { propertyName: 'maxLength', appliesTo: ['input', 'textarea'] },
    media: { appliesTo: ['a', 'area', 'link', 'source', 'style'] },
    method: { appliesTo: ['form'] },
    min: { appliesTo: ['input', 'meter'] },
    multiple: { appliesTo: ['input', 'select'] },
    muted: { appliesTo: ['audio', 'video'] },
    name: {
        appliesTo: [
            'button',
            'form',
            'fieldset',
            'iframe',
            'input',
            'keygen',
            'object',
            'output',
            'select',
            'textarea',
            'map',
            'meta',
            'param',
        ]
    },
    novalidate: { propertyName: 'noValidate', appliesTo: ['form'] },
    open: { appliesTo: ['details'] },
    optimum: { appliesTo: ['meter'] },
    pattern: { appliesTo: ['input'] },
    ping: { appliesTo: ['a', 'area'] },
    placeholder: { appliesTo: ['input', 'textarea'] },
    poster: { appliesTo: ['video'] },
    preload: { appliesTo: ['audio', 'video'] },
    radiogroup: { appliesTo: ['command'] },
    readonly: { propertyName: 'readOnly', appliesTo: ['input', 'textarea'] },
    rel: { appliesTo: ['a', 'area', 'link'] },
    required: { appliesTo: ['input', 'select', 'textarea'] },
    reversed: { appliesTo: ['ol'] },
    rows: { appliesTo: ['textarea'] },
    rowspan: { propertyName: 'rowSpan', appliesTo: ['td', 'th'] },
    sandbox: { appliesTo: ['iframe'] },
    scope: { appliesTo: ['th'] },
    scoped: { appliesTo: ['style'] },
    seamless: { appliesTo: ['iframe'] },
    selected: { appliesTo: ['option'] },
    shape: { appliesTo: ['a', 'area'] },
    size: { appliesTo: ['input', 'select'] },
    sizes: { appliesTo: ['link', 'img', 'source'] },
    span: { appliesTo: ['col', 'colgroup'] },
    spellcheck: {},
    src: {
        appliesTo: [
            'audio',
            'embed',
            'iframe',
            'img',
            'input',
            'script',
            'source',
            'track',
            'video',
        ]
    },
    srcdoc: { appliesTo: ['iframe'] },
    srclang: { appliesTo: ['track'] },
    srcset: { appliesTo: ['img'] },
    start: { appliesTo: ['ol'] },
    step: { appliesTo: ['input'] },
    style: { propertyName: 'style.cssText' },
    summary: { appliesTo: ['table'] },
    tabindex: { propertyName: 'tabIndex' },
    target: { appliesTo: ['a', 'area', 'base', 'form'] },
    title: {},
    type: {
        appliesTo: [
            'button',
            'command',
            'embed',
            'object',
            'script',
            'source',
            'style',
            'menu',
        ]
    },
    usemap: { propertyName: 'useMap', appliesTo: ['img', 'input', 'object'] },
    value: {
        appliesTo: [
            'button',
            'option',
            'input',
            'li',
            'meter',
            'progress',
            'param',
            'select',
            'textarea',
        ]
    },
    volume: { appliesTo: ['audio', 'video'] },
    width: {
        appliesTo: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video']
    },
    wrap: { appliesTo: ['textarea'] }
};
Object.keys(attributeLookup).forEach(function (name) {
    var metadata = attributeLookup[name];
    if (!metadata.propertyName)
        metadata.propertyName = name;
});
function optimizeStyle(value) {
    var props = [];
    var chunks = value.slice();
    while (chunks.length) {
        var chunk = chunks[0];
        if (chunk.type !== 'Text')
            return null;
        var keyMatch = /^\s*([\w-]+):\s*/.exec(chunk.data);
        if (!keyMatch)
            return null;
        var key = keyMatch[1];
        var offset = keyMatch.index + keyMatch[0].length;
        var remainingData = chunk.data.slice(offset);
        if (remainingData) {
            chunks[0] = {
                start: chunk.start + offset,
                end: chunk.end,
                type: 'Text',
                data: remainingData
            };
        }
        else {
            chunks.shift();
        }
        var result = getStyleValue(chunks);
        if (!result)
            return null;
        props.push({ key: key, value: result.value });
        chunks = result.chunks;
    }
    return props;
}
function getStyleValue(chunks) {
    var value = [];
    var inUrl = false;
    var quoteMark = null;
    var escaped = false;
    while (chunks.length) {
        var chunk = chunks.shift();
        if (chunk.type === 'Text') {
            var c = 0;
            while (c < chunk.data.length) {
                var char = chunk.data[c];
                if (escaped) {
                    escaped = false;
                }
                else if (char === '\\') {
                    escaped = true;
                }
                else if (char === quoteMark) {
                    quoteMark === null;
                }
                else if (char === '"' || char === "'") {
                    quoteMark = char;
                }
                else if (char === ')' && inUrl) {
                    inUrl = false;
                }
                else if (char === 'u' && chunk.data.slice(c, c + 4) === 'url(') {
                    inUrl = true;
                }
                else if (char === ';' && !inUrl && !quoteMark) {
                    break;
                }
                c += 1;
            }
            if (c > 0) {
                value.push({
                    type: 'Text',
                    start: chunk.start,
                    end: chunk.start + c,
                    data: chunk.data.slice(0, c)
                });
            }
            while (/[;\s]/.test(chunk.data[c]))
                c += 1;
            var remainingData = chunk.data.slice(c);
            if (remainingData) {
                chunks.unshift({
                    start: chunk.start + c,
                    end: chunk.end,
                    type: 'Text',
                    data: remainingData
                });
                break;
            }
        }
        else {
            value.push(chunk);
        }
    }
    return {
        chunks: chunks,
        value: value
    };
}
function isDynamic$1(value) {
    return value.length > 1 || value[0].type !== 'Text';
}
var templateObject_1$3;
var templateObject_2$3;
var templateObject_3$3;
var templateObject_4$3;

var Node$1 = /** @class */ (function () {
    function Node(data) {
        Object.assign(this, data);
    }
    Node.prototype.cannotUseInnerHTML = function () {
        if (this.canUseInnerHTML !== false) {
            this.canUseInnerHTML = false;
            if (this.parent) {
                if (!this.parent.cannotUseInnerHTML)
                    console.log(this.parent.type, this.type);
                this.parent.cannotUseInnerHTML();
            }
        }
    };
    Node.prototype.init = function (block, stripWhitespace, nextSibling) {
        // implemented by subclasses
    };
    Node.prototype.initChildren = function (block, stripWhitespace, nextSibling) {
        var _this = this;
        // glue text nodes together
        var cleaned = [];
        var lastChild;
        var windowComponent;
        this.children.forEach(function (child) {
            if (child.type === 'Comment')
                return;
            // special case — this is an easy way to remove whitespace surrounding
            // <:Window/>. lil hacky but it works
            if (child.type === 'Window') {
                windowComponent = child;
                return;
            }
            if (child.type === 'Text' && lastChild && lastChild.type === 'Text') {
                lastChild.data += child.data;
                lastChild.end = child.end;
            }
            else {
                if (child.type === 'Text' && stripWhitespace && cleaned.length === 0) {
                    child.data = trimStart(child.data);
                    if (child.data)
                        cleaned.push(child);
                }
                else {
                    cleaned.push(child);
                }
            }
            lastChild = child;
        });
        lastChild = null;
        cleaned.forEach(function (child, i) {
            child.canUseInnerHTML = !_this.generator.hydratable;
            child.init(block, stripWhitespace, cleaned[i + 1] || nextSibling);
            if (child.shouldSkip)
                return;
            if (lastChild)
                lastChild.next = child;
            child.prev = lastChild;
            lastChild = child;
        });
        // We want to remove trailing whitespace inside an element/component/block,
        // *unless* there is no whitespace between this node and its next sibling
        if (stripWhitespace && lastChild && lastChild.type === 'Text') {
            var shouldTrim = (nextSibling ? (nextSibling.type === 'Text' && /^\s/.test(nextSibling.data)) : !this.hasAncestor('EachBlock'));
            if (shouldTrim) {
                lastChild.data = trimEnd(lastChild.data);
                if (!lastChild.data) {
                    cleaned.pop();
                    lastChild = cleaned[cleaned.length - 1];
                    lastChild.next = null;
                }
            }
        }
        this.children = cleaned;
        if (windowComponent)
            cleaned.unshift(windowComponent);
    };
    Node.prototype.build = function (block, parentNode, parentNodes) {
        // implemented by subclasses
    };
    Node.prototype.isDomNode = function () {
        return this.type === 'Element' || this.type === 'Text' || this.type === 'MustacheTag';
    };
    Node.prototype.hasAncestor = function (type) {
        return this.parent ?
            this.parent.type === type || this.parent.hasAncestor(type) :
            false;
    };
    Node.prototype.findNearest = function (selector) {
        if (selector.test(this.type))
            return this;
        if (this.parent)
            return this.parent.findNearest(selector);
    };
    Node.prototype.getOrCreateAnchor = function (block, parentNode, parentNodes) {
        // TODO use this in EachBlock and IfBlock — tricky because
        // children need to be created first
        var needsAnchor = this.next ? !this.next.isDomNode() : !parentNode || !this.parent.isDomNode();
        var anchor = needsAnchor
            ? block.getUniqueName(this["var"] + "_anchor")
            : (this.next && this.next["var"]) || 'null';
        if (needsAnchor) {
            block.addElement(anchor, "@createComment()", parentNodes && "@createComment()", parentNode);
        }
        return anchor;
    };
    Node.prototype.getUpdateMountNode = function (anchor) {
        return this.parent.isDomNode() ? this.parent["var"] : anchor + ".parentNode";
    };
    Node.prototype.remount = function (name) {
        return this["var"] + ".m(" + name + "._slotted" + (this.generator.legacy ? "[\"default\"]" : ".default") + ", null);";
    };
    return Node;
}());

function createDebuggingComment(node, generator) {
    var locate = generator.locate, source = generator.source;
    var c = node.start;
    if (node.type === 'ElseBlock') {
        while (source[c] !== '{')
            c -= 1;
        c -= 1;
    }
    var d = node.expression ? node.expression.end : c;
    while (source[d] !== '}')
        d += 1;
    d += 2;
    var start = locate(c);
    var loc = "(" + (start.line + 1) + ":" + start.column + ")";
    return (loc + " " + source.slice(c, d)).replace(/\s/g, ' ');
}

var AwaitBlock = /** @class */ (function (_super) {
    __extends(AwaitBlock, _super);
    function AwaitBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwaitBlock.prototype.init = function (block, stripWhitespace, nextSibling) {
        var _this = this;
        this.cannotUseInnerHTML();
        this["var"] = block.getUniqueName('await_block');
        block.addDependencies(this.metadata.dependencies);
        var dynamic = false;
        [
            ['pending', null],
            ['then', this.value],
            ['catch', this.error]
        ].forEach(function (_a) {
            var status = _a[0], arg = _a[1];
            var child = _this[status];
            child.block = block.child({
                comment: createDebuggingComment(child, _this.generator),
                name: _this.generator.getUniqueName("create_" + status + "_block"),
                contexts: new Map(block.contexts),
                contextTypes: new Map(block.contextTypes)
            });
            if (arg) {
                child.block.context = arg;
                child.block.contexts.set(arg, arg); // TODO should be using getUniqueName
                child.block.contextTypes.set(arg, status);
            }
            child.initChildren(child.block, stripWhitespace, nextSibling);
            _this.generator.blocks.push(child.block);
            if (child.block.dependencies.size > 0) {
                dynamic = true;
                block.addDependencies(child.block.dependencies);
            }
        });
        this.pending.block.hasUpdateMethod = dynamic;
        this.then.block.hasUpdateMethod = dynamic;
        this["catch"].block.hasUpdateMethod = dynamic;
    };
    AwaitBlock.prototype.build = function (block, parentNode, parentNodes) {
        var anchor = this.getOrCreateAnchor(block, parentNode, parentNodes);
        var updateMountNode = this.getUpdateMountNode(anchor);
        block.contextualise(this.expression);
        var snippet = this.metadata.snippet;
        var promise = block.getUniqueName("promise");
        var resolved = block.getUniqueName("resolved");
        var await_block = block.getUniqueName("await_block");
        var await_block_type = block.getUniqueName("await_block_type");
        var token = block.getUniqueName("token");
        var await_token = block.getUniqueName("await_token");
        var handle_promise = block.getUniqueName("handle_promise");
        var replace_await_block = block.getUniqueName("replace_await_block");
        var old_block = block.getUniqueName("old_block");
        var value = block.getUniqueName("value");
        var error = block.getUniqueName("error");
        var create_pending_block = this.pending.block.name;
        var create_then_block = this.then.block.name;
        var create_catch_block = this["catch"].block.name;
        block.addVariable(await_block);
        block.addVariable(await_block_type);
        block.addVariable(await_token);
        block.addVariable(promise);
        block.addVariable(resolved);
        // the `#component.root.set({})` below is just a cheap way to flush
        // any oncreate handlers. We could have a dedicated `flush()` method
        // but it's probably not worth it
        block.builders.init.addBlock(deindent(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n\t\t\tfunction ", "(", ", type, state) {\n\t\t\t\tif (", " !== ", ") return;\n\n\t\t\t\tvar ", " = ", ";\n\t\t\t\t", " = type && (", " = type)(#component, state);\n\n\t\t\t\tif (", ") {\n\t\t\t\t\t", ".u();\n\t\t\t\t\t", ".d();\n\t\t\t\t\t", ".c();\n\t\t\t\t\t", ".m(", ", ", ");\n\n\t\t\t\t\t#component.root.set({});\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction ", "(", ", state) {\n\t\t\t\tvar ", " = ", " = {};\n\n\t\t\t\tif (@isPromise(", ")) {\n\t\t\t\t\t", ".then(function(", ") {\n\t\t\t\t\t\t", "\n\t\t\t\t\t}, function (", ") {\n\t\t\t\t\t\t", "\n\t\t\t\t\t});\n\n\t\t\t\t\t// if we previously had a then/catch block, destroy it\n\t\t\t\t\tif (", " !== ", ") {\n\t\t\t\t\t\t", "(", ", ", ", state);\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\t", " = { ", ": ", " };\n\t\t\t\t\tif (", " !== ", ") {\n\t\t\t\t\t\t", "(", ", ", ", @assign({}, state, ", "));\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t", "(", " = ", ", state);\n\t\t"], ["\n\t\t\tfunction ", "(", ", type, state) {\n\t\t\t\tif (", " !== ", ") return;\n\n\t\t\t\tvar ", " = ", ";\n\t\t\t\t", " = type && (", " = type)(#component, state);\n\n\t\t\t\tif (", ") {\n\t\t\t\t\t", ".u();\n\t\t\t\t\t", ".d();\n\t\t\t\t\t", ".c();\n\t\t\t\t\t", ".m(", ", ", ");\n\n\t\t\t\t\t#component.root.set({});\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction ", "(", ", state) {\n\t\t\t\tvar ", " = ", " = {};\n\n\t\t\t\tif (@isPromise(", ")) {\n\t\t\t\t\t", ".then(function(", ") {\n\t\t\t\t\t\t",
            "\n\t\t\t\t\t}, function (", ") {\n\t\t\t\t\t\t",
            "\n\t\t\t\t\t});\n\n\t\t\t\t\t// if we previously had a then/catch block, destroy it\n\t\t\t\t\tif (", " !== ", ") {\n\t\t\t\t\t\t", "(", ", ", ", state);\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\t", " = { ", ": ", " };\n\t\t\t\t\tif (", " !== ", ") {\n\t\t\t\t\t\t", "(", ", ", ", @assign({}, state, ", "));\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t", "(", " = ", ", state);\n\t\t"])), replace_await_block, token, token, await_token, old_block, await_block, await_block, await_block_type, old_block, old_block, old_block, await_block, await_block, updateMountNode, anchor, handle_promise, promise, token, await_token, promise, promise, value, this.then.block.context ? deindent(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n\t\t\t\t\t\t\tvar state = #component.get();\n\t\t\t\t\t\t\t", " = { ", ": ", " };\n\t\t\t\t\t\t\t", "(", ", ", ", @assign({}, state, ", "));\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\tvar state = #component.get();\n\t\t\t\t\t\t\t", " = { ", ": ", " };\n\t\t\t\t\t\t\t", "(", ", ", ", @assign({}, state, ", "));\n\t\t\t\t\t\t"])), resolved, this.then.block.context, value, replace_await_block, token, create_then_block, resolved) : deindent(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n\t\t\t\t\t\t\t", "(", ", null, null);\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\t", "(", ", null, null);\n\t\t\t\t\t\t"])), replace_await_block, token), error, this["catch"].block.context ? deindent(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n\t\t\t\t\t\t\tvar state = #component.get();\n\t\t\t\t\t\t\t", " = { ", ": ", " };\n\t\t\t\t\t\t\t", "(", ", ", ", @assign({}, state, ", "));\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\tvar state = #component.get();\n\t\t\t\t\t\t\t", " = { ", ": ", " };\n\t\t\t\t\t\t\t", "(", ", ", ", @assign({}, state, ", "));\n\t\t\t\t\t\t"])), resolved, this["catch"].block.context, error, replace_await_block, token, create_catch_block, resolved) : deindent(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n\t\t\t\t\t\t\t", "(", ", null, null);\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\t", "(", ", null, null);\n\t\t\t\t\t\t"])), replace_await_block, token), await_block_type, create_pending_block, replace_await_block, token, create_pending_block, resolved, this.then.block.context, promise, await_block_type, create_then_block, replace_await_block, token, create_then_block, resolved, handle_promise, promise, snippet));
        block.builders.create.addBlock(deindent(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n\t\t\t", ".c();\n\t\t"], ["\n\t\t\t", ".c();\n\t\t"])), await_block));
        if (parentNodes) {
            block.builders.claim.addBlock(deindent(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n\t\t\t\t", ".l(", ");\n\t\t\t"], ["\n\t\t\t\t", ".l(", ");\n\t\t\t"])), await_block, parentNodes));
        }
        var initialMountNode = parentNode || '#target';
        var anchorNode = parentNode ? 'null' : 'anchor';
        block.builders.mount.addBlock(deindent(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n\t\t\t", ".m(", ", ", ");\n\t\t"], ["\n\t\t\t", ".m(", ", ", ");\n\t\t"])), await_block, initialMountNode, anchorNode));
        var conditions = [];
        if (this.metadata.dependencies) {
            conditions.push("(" + this.metadata.dependencies.map(function (dep) { return "'" + dep + "' in changed"; }).join(' || ') + ")");
        }
        conditions.push(promise + " !== (" + promise + " = " + snippet + ")", handle_promise + "(" + promise + ", state)");
        if (this.pending.block.hasUpdateMethod) {
            block.builders.update.addBlock(deindent(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n\t\t\t\tif (", ") {\n\t\t\t\t\t// nothing\n\t\t\t\t} else {\n\t\t\t\t\t", ".p(changed, @assign({}, state, ", "));\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tif (", ") {\n\t\t\t\t\t// nothing\n\t\t\t\t} else {\n\t\t\t\t\t", ".p(changed, @assign({}, state, ", "));\n\t\t\t\t}\n\t\t\t"])), conditions.join(' && '), await_block, resolved));
        }
        else {
            block.builders.update.addBlock(deindent(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n\t\t\t\tif (", ") {\n\t\t\t\t\t", ".c();\n\t\t\t\t\t", ".m(", ".parentNode, ", ");\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tif (", ") {\n\t\t\t\t\t", ".c();\n\t\t\t\t\t", ".m(", ".parentNode, ", ");\n\t\t\t\t}\n\t\t\t"])), conditions.join(' && '), await_block, await_block, anchor, anchor));
        }
        block.builders.unmount.addBlock(deindent(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n\t\t\t", ".u();\n\t\t"], ["\n\t\t\t", ".u();\n\t\t"])), await_block));
        block.builders.destroy.addBlock(deindent(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n\t\t\t", " = null;\n\t\t\t", ".d();\n\t\t"], ["\n\t\t\t", " = null;\n\t\t\t", ".d();\n\t\t"])), await_token, await_block));
        [this.pending, this.then, this["catch"]].forEach(function (status) {
            status.children.forEach(function (child) {
                child.build(status.block, null, 'nodes');
            });
        });
    };
    return AwaitBlock;
}(Node$1));
var templateObject_2$4;
var templateObject_3$4;
var templateObject_4$4;
var templateObject_5$2;
var templateObject_1$4;
var templateObject_6$2;
var templateObject_7$1;
var templateObject_8$1;
var templateObject_9$1;
var templateObject_10$1;
var templateObject_11$1;
var templateObject_12$1;

function getObject(node) {
    while (node.type === 'MemberExpression')
        node = node.object;
    return node;
}

function getTailSnippet(node) {
    var end = node.end;
    while (node.type === 'MemberExpression')
        node = node.object;
    var start = node.end;
    return "[\u2702" + start + "-" + end + "\u2702]";
}

var readOnlyMediaAttributes = new Set([
    'duration',
    'buffered',
    'seekable',
    'played'
]);
var Binding = /** @class */ (function (_super) {
    __extends(Binding, _super);
    function Binding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Binding.prototype.munge = function (block, allUsedContexts) {
        var _this = this;
        var node = this.parent;
        var needsLock = node.name !== 'input' || !/radio|checkbox|range|color/.test(node.getStaticAttributeValue('type'));
        var isReadOnly = node.isMediaNode() && readOnlyMediaAttributes.has(this.name);
        var updateCondition;
        var name = getObject(this.value).name;
        var contexts = block.contextualise(this.value).contexts;
        var snippet = this.metadata.snippet;
        // special case: if you have e.g. `<input type=checkbox bind:checked=selected.done>`
        // and `selected` is an object chosen with a <select>, then when `checked` changes,
        // we need to tell the component to update all the values `selected` might be
        // pointing to
        // TODO should this happen in preprocess?
        var dependencies = this.metadata.dependencies.slice();
        this.metadata.dependencies.forEach(function (prop) {
            var indirectDependencies = _this.generator.indirectDependencies.get(prop);
            if (indirectDependencies) {
                indirectDependencies.forEach(function (indirectDependency) {
                    if (!~dependencies.indexOf(indirectDependency))
                        dependencies.push(indirectDependency);
                });
            }
        });
        contexts.forEach(function (context) {
            allUsedContexts.add(context);
        });
        // view to model
        var valueFromDom = getValueFromDom(this.generator, node, this);
        var handler = getEventHandler(this.generator, block, name, snippet, this, dependencies, valueFromDom);
        // model to view
        var updateDom = getDomUpdater(node, this, snippet);
        var initialUpdate = updateDom;
        // special cases
        if (this.name === 'group') {
            var bindingGroup = getBindingGroup(this.generator, this.value);
            block.builders.hydrate.addLine("#component._bindingGroups[" + bindingGroup + "].push(" + node["var"] + ");");
            block.builders.destroy.addLine("#component._bindingGroups[" + bindingGroup + "].splice(#component._bindingGroups[" + bindingGroup + "].indexOf(" + node["var"] + "), 1);");
        }
        if (this.name === 'currentTime' || this.name === 'volume') {
            updateCondition = "!isNaN(" + snippet + ")";
            if (this.name === 'currentTime')
                initialUpdate = null;
        }
        if (this.name === 'paused') {
            // this is necessary to prevent audio restarting by itself
            var last = block.getUniqueName(node["var"] + "_is_paused");
            block.addVariable(last, 'true');
            updateCondition = last + " !== (" + last + " = " + snippet + ")";
            updateDom = node["var"] + "[" + last + " ? \"pause\" : \"play\"]();";
            initialUpdate = null;
        }
        return {
            name: this.name,
            object: name,
            handler: handler,
            updateDom: updateDom,
            initialUpdate: initialUpdate,
            needsLock: !isReadOnly && needsLock,
            updateCondition: updateCondition,
            isReadOnlyMediaAttribute: this.isReadOnlyMediaAttribute()
        };
    };
    Binding.prototype.isReadOnlyMediaAttribute = function () {
        return readOnlyMediaAttributes.has(this.name);
    };
    return Binding;
}(Node$1));
function getDomUpdater(node, binding, snippet) {
    if (binding.isReadOnlyMediaAttribute()) {
        return null;
    }
    if (node.name === 'select') {
        return node.getStaticAttributeValue('multiple') === true ?
            "@selectOptions(" + node["var"] + ", " + snippet + ")" :
            "@selectOption(" + node["var"] + ", " + snippet + ")";
    }
    if (binding.name === 'group') {
        var type = node.getStaticAttributeValue('type');
        var condition = type === 'checkbox'
            ? "~" + snippet + ".indexOf(" + node["var"] + ".__value)"
            : node["var"] + ".__value === " + snippet;
        return node["var"] + ".checked = " + condition + ";";
    }
    return node["var"] + "." + binding.name + " = " + snippet + ";";
}
function getBindingGroup(generator, value) {
    var parts = flatten(value).parts; // TODO handle cases involving computed member expressions
    var keypath = parts.join('.');
    // TODO handle contextual bindings — `keypath` should include unique ID of
    // each block that provides context
    var index = generator.bindingGroups.indexOf(keypath);
    if (index === -1) {
        index = generator.bindingGroups.length;
        generator.bindingGroups.push(keypath);
    }
    return index;
}
function getEventHandler(generator, block, name, snippet, attribute, dependencies, value) {
    var storeDependencies = [];
    if (generator.options.store) {
        storeDependencies = dependencies.filter(function (prop) { return prop[0] === '$'; }).map(function (prop) { return prop.slice(1); });
        dependencies = dependencies.filter(function (prop) { return prop[0] !== '$'; });
    }
    if (block.contexts.has(name)) {
        var tail = attribute.value.type === 'MemberExpression'
            ? getTailSnippet(attribute.value)
            : '';
        var list = "context." + block.listNames.get(name);
        var index = "context." + block.indexNames.get(name);
        return {
            usesContext: true,
            usesState: true,
            usesStore: storeDependencies.length > 0,
            mutation: list + "[" + index + "]" + tail + " = " + value + ";",
            props: dependencies.map(function (prop) { return prop + ": state." + prop; }),
            storeProps: storeDependencies.map(function (prop) { return prop + ": $." + prop; })
        };
    }
    if (attribute.value.type === 'MemberExpression') {
        // This is a little confusing, and should probably be tidied up
        // at some point. It addresses a tricky bug (#893), wherein
        // Svelte tries to `set()` a computed property, which throws an
        // error in dev mode. a) it's possible that we should be
        // replacing computations with *their* dependencies, and b)
        // we should probably populate `generator.readonly` sooner so
        // that we don't have to do the `.some()` here
        dependencies = dependencies.filter(function (prop) { return !generator.computations.some(function (computation) { return computation.key === prop; }); });
        return {
            usesContext: false,
            usesState: true,
            usesStore: storeDependencies.length > 0,
            mutation: snippet + " = " + value,
            props: dependencies.map(function (prop) { return prop + ": state." + prop; }),
            storeProps: storeDependencies.map(function (prop) { return prop + ": $." + prop; })
        };
    }
    var props;
    var storeProps;
    if (generator.options.store && name[0] === '$') {
        props = [];
        storeProps = [name.slice(1) + ": " + value];
    }
    else {
        props = [name + ": " + value];
        storeProps = [];
    }
    return {
        usesContext: false,
        usesState: false,
        usesStore: false,
        mutation: null,
        props: props,
        storeProps: storeProps
    };
}
function getValueFromDom(generator, node, binding) {
    // <select bind:value='selected>
    if (node.name === 'select') {
        return node.getStaticAttributeValue('multiple') === true ?
            "@selectMultipleValue(" + node["var"] + ")" :
            "@selectValue(" + node["var"] + ")";
    }
    var type = node.getStaticAttributeValue('type');
    // <input type='checkbox' bind:group='foo'>
    if (binding.name === 'group') {
        var bindingGroup = getBindingGroup(generator, binding.value);
        if (type === 'checkbox') {
            return "@getBindingGroupValue(#component._bindingGroups[" + bindingGroup + "])";
        }
        return node["var"] + ".__value";
    }
    // <input type='range|number' bind:value>
    if (type === 'range' || type === 'number') {
        return "@toNumber(" + node["var"] + "." + binding.name + ")";
    }
    if ((binding.name === 'buffered' || binding.name === 'seekable' || binding.name === 'played')) {
        return "@timeRangesToArray(" + node["var"] + "." + binding.name + ")";
    }
    // everything else
    return node["var"] + "." + binding.name;
}

var CatchBlock = /** @class */ (function (_super) {
    __extends(CatchBlock, _super);
    function CatchBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CatchBlock;
}(Node$1));

var Comment$2 = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Comment;
}(Node$1));

function stringifyProps(props) {
    if (!props.length)
        return '{}';
    var joined = props.join(', ');
    if (joined.length > 40) {
        // make larger data objects readable
        return "{\n\t" + props.join(',\n\t') + "\n}";
    }
    return "{ " + joined + " }";
}

function quoteIfNecessary(name, legacy) {
    if (!isValidIdentifier || (legacy && reservedNames.has(name)))
        return "\"" + name + "\"";
    return name;
}
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.init = function (block, stripWhitespace, nextSibling) {
        this.cannotUseInnerHTML();
        this.attributes.forEach(function (attribute) {
            if (attribute.type === 'Attribute' && attribute.value !== true) {
                attribute.value.forEach(function (chunk) {
                    if (chunk.type !== 'Text') {
                        var dependencies = chunk.metadata.dependencies;
                        block.addDependencies(dependencies);
                    }
                });
            }
            else {
                if (attribute.type === 'EventHandler' && attribute.expression) {
                    attribute.expression.arguments.forEach(function (arg) {
                        block.addDependencies(arg.metadata.dependencies);
                    });
                }
                else if (attribute.type === 'Binding') {
                    block.addDependencies(attribute.metadata.dependencies);
                }
            }
        });
        this["var"] = block.getUniqueName((this.name === ':Self' ? this.generator.name :
            this.name === ':Component' ? 'switch_instance' :
                this.name).toLowerCase());
        if (this.children.length) {
            this._slots = new Set(['default']);
            this.children.forEach(function (child) {
                child.init(block, stripWhitespace, nextSibling);
            });
        }
    };
    Component.prototype.build = function (block, parentNode, parentNodes) {
        var _this = this;
        var generator = this.generator;
        generator.hasComponents = true;
        var name = this["var"];
        var componentInitProperties = ["root: #component.root"];
        if (this.children.length > 0) {
            var slots = Array.from(this._slots).map(function (name) { return quoteIfNecessary(name, generator.legacy) + ": @createFragment()"; });
            componentInitProperties.push("slots: { " + slots.join(', ') + " }");
            this.children.forEach(function (child) {
                child.build(block, _this["var"] + "._slotted" + (generator.legacy ? "[\"default\"]" : ".default"), 'nodes');
            });
        }
        var allContexts = new Set();
        var statements = [];
        var name_updating;
        var name_initial_data;
        var beforecreate = null;
        var attributes = this.attributes
            .filter(function (a) { return a.type === 'Attribute'; })
            .map(function (a) { return mungeAttribute(a, block); });
        var bindings = this.attributes
            .filter(function (a) { return a.type === 'Binding'; })
            .map(function (a) { return mungeBinding(a, block); });
        var eventHandlers = this.attributes
            .filter(function (a) { return a.type === 'EventHandler'; })
            .map(function (a) { return mungeEventHandler(generator, _this, a, block, allContexts); });
        var ref = this.attributes.find(function (a) { return a.type === 'Ref'; });
        if (ref)
            generator.usesRefs = true;
        var updates = [];
        if (attributes.length || bindings.length) {
            var initialProps = attributes
                .map(function (attribute) { return attribute.name + ": " + attribute.value; });
            var initialPropString = stringifyProps(initialProps);
            attributes
                .filter(function (attribute) { return attribute.dynamic; })
                .forEach(function (attribute) {
                if (attribute.dependencies.length) {
                    updates.push(deindent(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n\t\t\t\t\t\t\tif (", ") ", "_changes.", " = ", ";\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\tif (",
                        ") ", "_changes.", " = ", ";\n\t\t\t\t\t\t"])), attribute.dependencies
                        .map(function (dependency) { return "changed." + dependency; })
                        .join(' || '), name, attribute.name, attribute.value));
                }
                else {
                    // TODO this is an odd situation to encounter – I *think* it should only happen with
                    // each block indices, in which case it may be possible to optimise this
                    updates.push(name + "_changes." + attribute.name + " = " + attribute.value + ";");
                }
            });
            if (bindings.length) {
                generator.hasComplexBindings = true;
                name_updating = block.alias(name + "_updating");
                name_initial_data = block.getUniqueName(name + "_initial_data");
                block.addVariable(name_updating, '{}');
                statements.push("var " + name_initial_data + " = " + initialPropString + ";");
                var hasLocalBindings_1 = false;
                var hasStoreBindings_1 = false;
                var builder_1 = new CodeBuilder();
                bindings.forEach(function (binding) {
                    var key = getObject(binding.value).name;
                    binding.contexts.forEach(function (context) {
                        allContexts.add(context);
                    });
                    var setFromChild;
                    if (block.contexts.has(key)) {
                        var tail = binding.value.type === 'MemberExpression' ? getTailSnippet(binding.value) : '';
                        var list = block.listNames.get(key);
                        var index = block.indexNames.get(key);
                        setFromChild = deindent(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n\t\t\t\t\t\t\t", "[", "]", " = childState.", ";\n\n\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\t", "[", "]", " = childState.", ";\n\n\t\t\t\t\t\t\t",
                            "\n\t\t\t\t\t\t"])), list, index, tail, binding.name, binding.dependencies
                            .map(function (name) {
                            var isStoreProp = generator.options.store && name[0] === '$';
                            var prop = isStoreProp ? name.slice(1) : name;
                            var newState = isStoreProp ? 'newStoreState' : 'newState';
                            if (isStoreProp)
                                hasStoreBindings_1 = true;
                            else
                                hasLocalBindings_1 = true;
                            return newState + "." + prop + " = state." + name + ";";
                        })
                            .join('\n'));
                    }
                    else {
                        var isStoreProp = generator.options.store && key[0] === '$';
                        var prop = isStoreProp ? key.slice(1) : key;
                        var newState = isStoreProp ? 'newStoreState' : 'newState';
                        if (isStoreProp)
                            hasStoreBindings_1 = true;
                        else
                            hasLocalBindings_1 = true;
                        if (binding.value.type === 'MemberExpression') {
                            setFromChild = deindent(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n\t\t\t\t\t\t\t\t", " = childState.", ";\n\t\t\t\t\t\t\t\t", ".", " = state.", ";\n\t\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\t\t", " = childState.", ";\n\t\t\t\t\t\t\t\t", ".", " = state.", ";\n\t\t\t\t\t\t\t"])), binding.snippet, binding.name, newState, prop, key);
                        }
                        else {
                            setFromChild = newState + "." + prop + " = childState." + binding.name + ";";
                        }
                    }
                    statements.push(deindent(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n\t\t\t\t\t\tif (", " in ", ") {\n\t\t\t\t\t\t\t", ".", " = ", ";\n\t\t\t\t\t\t\t", ".", " = true;\n\t\t\t\t\t\t}"], ["\n\t\t\t\t\t\tif (", " in ", ") {\n\t\t\t\t\t\t\t", ".", " = ", ";\n\t\t\t\t\t\t\t", ".", " = true;\n\t\t\t\t\t\t}"])), binding.prop, binding.obj, name_initial_data, binding.name, binding.snippet, name_updating, binding.name));
                    builder_1.addConditional("!" + name_updating + "." + binding.name + " && changed." + binding.name, setFromChild);
                    // TODO could binding.dependencies.length ever be 0?
                    if (binding.dependencies.length) {
                        updates.push(deindent(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n\t\t\t\t\t\t\tif (!", ".", " && ", ") {\n\t\t\t\t\t\t\t\t", "_changes.", " = ", ";\n\t\t\t\t\t\t\t\t", ".", " = true;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\tif (!", ".", " && ", ") {\n\t\t\t\t\t\t\t\t", "_changes.", " = ", ";\n\t\t\t\t\t\t\t\t", ".", " = true;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t"])), name_updating, binding.name, binding.dependencies.map(function (dependency) { return "changed." + dependency; }).join(' || '), name, binding.name, binding.snippet, name_updating, binding.name));
                    }
                });
                componentInitProperties.push("data: " + name_initial_data);
                var initialisers = [
                    'state = #component.get()',
                    hasLocalBindings_1 && 'newState = {}',
                    hasStoreBindings_1 && 'newStoreState = {}',
                ].filter(Boolean).join(', ');
                componentInitProperties.push(deindent(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n\t\t\t\t\t_bind: function(changed, childState) {\n\t\t\t\t\t\tvar ", ";\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", " = {};\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\t_bind: function(changed, childState) {\n\t\t\t\t\t\tvar ", ";\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", " = {};\n\t\t\t\t\t}\n\t\t\t\t"])), initialisers, builder_1, hasStoreBindings_1 && "#component.store.set(newStoreState);", hasLocalBindings_1 && "#component._set(newState);", name_updating));
                beforecreate = deindent(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n\t\t\t\t\t#component.root._beforecreate.push(function() {\n\t\t\t\t\t\t", "._bind({ ", " }, ", ".get());\n\t\t\t\t\t});\n\t\t\t\t"], ["\n\t\t\t\t\t#component.root._beforecreate.push(function() {\n\t\t\t\t\t\t", "._bind({ ", " }, ", ".get());\n\t\t\t\t\t});\n\t\t\t\t"])), name, bindings.map(function (b) { return b.name + ": 1"; }).join(', '), name);
            }
            else if (initialProps.length) {
                componentInitProperties.push("data: " + initialPropString);
            }
        }
        var isDynamicComponent = this.name === ':Component';
        var switch_vars = isDynamicComponent && {
            value: block.getUniqueName('switch_value'),
            props: block.getUniqueName('switch_props')
        };
        var expression = (this.name === ':Self' ? generator.name :
            isDynamicComponent ? switch_vars.value :
                "%components-" + this.name);
        if (isDynamicComponent) {
            block.contextualise(this.expression);
            var _a = this.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
            var anchor = this.getOrCreateAnchor(block, parentNode, parentNodes);
            block.builders.init.addBlock(deindent(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n\t\t\t\tvar ", " = ", ";\n\n\t\t\t\tfunction ", "(state) {\n\t\t\t\t\t", "\n\t\t\t\t\treturn {\n\t\t\t\t\t\t", "\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tif (", ") {\n\t\t\t\t\tvar ", " = new ", "(", "(state));\n\n\t\t\t\t\t", "\n\t\t\t\t}\n\n\t\t\t\t", "\n\t\t\t"], ["\n\t\t\t\tvar ", " = ", ";\n\n\t\t\t\tfunction ", "(state) {\n\t\t\t\t\t", "\n\t\t\t\t\treturn {\n\t\t\t\t\t\t", "\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tif (", ") {\n\t\t\t\t\tvar ", " = new ", "(", "(state));\n\n\t\t\t\t\t", "\n\t\t\t\t}\n\n\t\t\t\t",
                "\n\t\t\t"])), switch_vars.value, snippet, switch_vars.props, statements.length > 0 && statements.join('\n'), componentInitProperties.join(',\n'), switch_vars.value, name, expression, switch_vars.props, beforecreate, eventHandlers.map(function (handler) { return deindent(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n\t\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\n\t\t\t\t\tif (", ") ", ".on(\"", "\", ", ");\n\t\t\t\t"], ["\n\t\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\n\t\t\t\t\tif (", ") ", ".on(\"", "\", ", ");\n\t\t\t\t"])), handler["var"], handler.body, name, name, handler.name, handler["var"]); })));
            block.builders.create.addLine("if (" + name + ") " + name + "._fragment.c();");
            if (parentNodes) {
                block.builders.claim.addLine("if (" + name + ") " + name + "._fragment.l(" + parentNodes + ");");
            }
            block.builders.mount.addLine("if (" + name + ") " + name + "._mount(" + (parentNode || '#target') + ", " + (parentNode ? 'null' : 'anchor') + ");");
            var updateMountNode = this.getUpdateMountNode(anchor);
            block.builders.update.addBlock(deindent(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n\t\t\t\tif (", " !== (", " = ", ")) {\n\t\t\t\t\tif (", ") ", ".destroy();\n\n\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t", " = new ", "(", "(state));\n\t\t\t\t\t\t", "._fragment.c();\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "._mount(", ", ", ");\n\n\t\t\t\t\t\t", "\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tif (", " !== (", " = ", ")) {\n\t\t\t\t\tif (", ") ", ".destroy();\n\n\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t", " = new ", "(", "(state));\n\t\t\t\t\t\t", "._fragment.c();\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "._mount(", ", ", ");\n\n\t\t\t\t\t\t",
                "\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\n\t\t\t\t\t",
                "\n\t\t\t\t}\n\t\t\t"])), switch_vars.value, switch_vars.value, snippet, name, name, switch_vars.value, name, switch_vars.value, switch_vars.props, name, this.children.map(function (child) { return child.remount(name); }), name, updateMountNode, anchor, eventHandlers.map(function (handler) { return deindent(templateObject_11$2 || (templateObject_11$2 = __makeTemplateObject(["\n\t\t\t\t\t\t\t", ".on(\"", "\", ", ");\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\t", ".on(\"", "\", ", ");\n\t\t\t\t\t\t"])), name, handler.name, handler["var"]); }), ref && "#component.refs." + ref.name + " = " + name + ";", ref && deindent(templateObject_12$2 || (templateObject_12$2 = __makeTemplateObject(["\n\t\t\t\t\t\telse if (#component.refs.", " === ", ") {\n\t\t\t\t\t\t\t#component.refs.", " = null;\n\t\t\t\t\t\t}"], ["\n\t\t\t\t\t\telse if (#component.refs.", " === ", ") {\n\t\t\t\t\t\t\t#component.refs.", " = null;\n\t\t\t\t\t\t}"])), ref.name, name, ref.name)));
            if (updates.length) {
                block.builders.update.addBlock(deindent(templateObject_13$1 || (templateObject_13$1 = __makeTemplateObject(["\n\t\t\t\t\telse {\n\t\t\t\t\t\tvar ", "_changes = {};\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "._set(", "_changes);\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\telse {\n\t\t\t\t\t\tvar ", "_changes = {};\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "._set(", "_changes);\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t"])), name, updates.join('\n'), name, name, bindings.length && name_updating + " = {};"));
            }
            if (!parentNode)
                block.builders.unmount.addLine("if (" + name + ") " + name + "._unmount();");
            block.builders.destroy.addLine("if (" + name + ") " + name + ".destroy(false);");
        }
        else {
            block.builders.init.addBlock(deindent(templateObject_14$1 || (templateObject_14$1 = __makeTemplateObject(["\n\t\t\t\t", "\n\t\t\t\tvar ", " = new ", "({\n\t\t\t\t\t", "\n\t\t\t\t});\n\n\t\t\t\t", "\n\n\t\t\t\t", "\n\n\t\t\t\t", "\n\t\t\t"], ["\n\t\t\t\t", "\n\t\t\t\tvar ", " = new ", "({\n\t\t\t\t\t", "\n\t\t\t\t});\n\n\t\t\t\t", "\n\n\t\t\t\t",
                "\n\n\t\t\t\t", "\n\t\t\t"])), statements.join('\n'), name, expression, componentInitProperties.join(',\n'), beforecreate, eventHandlers.map(function (handler) { return deindent(templateObject_15$1 || (templateObject_15$1 = __makeTemplateObject(["\n\t\t\t\t\t", ".on(\"", "\", function(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t});\n\t\t\t\t"], ["\n\t\t\t\t\t", ".on(\"", "\", function(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t});\n\t\t\t\t"])), name, handler.name, handler.body); }), ref && "#component.refs." + ref.name + " = " + name + ";"));
            block.builders.create.addLine(name + "._fragment.c();");
            if (parentNodes) {
                block.builders.claim.addLine(name + "._fragment.l(" + parentNodes + ");");
            }
            block.builders.mount.addLine(name + "._mount(" + (parentNode || '#target') + ", " + (parentNode ? 'null' : 'anchor') + ");");
            if (updates.length) {
                block.builders.update.addBlock(deindent(templateObject_16$1 || (templateObject_16$1 = __makeTemplateObject(["\n\t\t\t\t\tvar ", "_changes = {};\n\t\t\t\t\t", "\n\t\t\t\t\t", "._set(", "_changes);\n\t\t\t\t\t", "\n\t\t\t\t"], ["\n\t\t\t\t\tvar ", "_changes = {};\n\t\t\t\t\t", "\n\t\t\t\t\t", "._set(", "_changes);\n\t\t\t\t\t", "\n\t\t\t\t"])), name, updates.join('\n'), name, name, bindings.length && name_updating + " = {};"));
            }
            if (!parentNode)
                block.builders.unmount.addLine(name + "._unmount();");
            block.builders.destroy.addLine(deindent(templateObject_17$1 || (templateObject_17$1 = __makeTemplateObject(["\n\t\t\t\t", ".destroy(false);\n\t\t\t\t", "\n\t\t\t"], ["\n\t\t\t\t", ".destroy(false);\n\t\t\t\t", "\n\t\t\t"])), name, ref && "if (#component.refs." + ref.name + " === " + name + ") #component.refs." + ref.name + " = null;"));
        }
    };
    Component.prototype.remount = function (name) {
        return this["var"] + "._mount(" + name + "._slotted" + (this.generator.legacy ? "[\"default\"]" : ".default") + ", null);";
    };
    return Component;
}(Node$1));
function mungeAttribute(attribute, block) {
    if (attribute.value === true) {
        // attributes without values, e.g. <textarea readonly>
        return {
            name: attribute.name,
            value: true,
            dynamic: false
        };
    }
    if (attribute.value.length === 0) {
        return {
            name: attribute.name,
            value: "''",
            dynamic: false
        };
    }
    if (attribute.value.length === 1) {
        var value_1 = attribute.value[0];
        if (value_1.type === 'Text') {
            // static attributes
            return {
                name: attribute.name,
                value: isNaN(value_1.data) ? stringify(value_1.data) : value_1.data,
                dynamic: false
            };
        }
        // simple dynamic attributes
        block.contextualise(value_1.expression); // TODO remove
        var _a = value_1.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
        // TODO only update attributes that have changed
        return {
            name: attribute.name,
            value: snippet,
            dependencies: dependencies,
            dynamic: true
        };
    }
    // otherwise we're dealing with a complex dynamic attribute
    var allDependencies = new Set();
    var value = (attribute.value[0].type === 'Text' ? '' : "\"\" + ") +
        attribute.value
            .map(function (chunk) {
            if (chunk.type === 'Text') {
                return stringify(chunk.data);
            }
            else {
                block.contextualise(chunk.expression); // TODO remove
                var _a = chunk.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
                dependencies.forEach(function (dependency) {
                    allDependencies.add(dependency);
                });
                return getExpressionPrecedence(chunk.expression) <= 13 ? "(" + snippet + ")" : snippet;
            }
        })
            .join(' + ');
    return {
        name: attribute.name,
        value: value,
        dependencies: Array.from(allDependencies),
        dynamic: true
    };
}
function mungeBinding(binding, block) {
    var name = getObject(binding.value).name;
    var contexts = block.contextualise(binding.value).contexts;
    var _a = binding.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
    var contextual = block.contexts.has(name);
    var obj;
    var prop;
    if (contextual) {
        obj = "state." + block.listNames.get(name);
        prop = "" + block.indexNames.get(name);
    }
    else if (binding.value.type === 'MemberExpression') {
        prop = "[\u2702" + binding.value.property.start + "-" + binding.value.property.end + "\u2702]";
        if (!binding.value.computed)
            prop = "'" + prop + "'";
        obj = "[\u2702" + binding.value.object.start + "-" + binding.value.object.end + "\u2702]";
    }
    else {
        obj = 'state';
        prop = "'" + name + "'";
    }
    return {
        name: binding.name,
        value: binding.value,
        contexts: contexts,
        snippet: snippet,
        obj: obj,
        prop: prop,
        dependencies: dependencies
    };
}
function mungeEventHandler(generator, node, handler, block, allContexts) {
    var body;
    if (handler.expression) {
        generator.addSourcemapLocations(handler.expression);
        generator.code.prependRight(handler.expression.start, block.alias('component') + ".");
        handler.expression.arguments.forEach(function (arg) {
            var contexts = block.contextualise(arg, null, true).contexts;
            contexts.forEach(function (context) {
                allContexts.add(context);
            });
        });
        body = deindent(templateObject_18$1 || (templateObject_18$1 = __makeTemplateObject(["\n\t\t\t[\u2702", "-", "\u2702];\n\t\t"], ["\n\t\t\t[\u2702", "-", "\u2702];\n\t\t"])), handler.expression.start, handler.expression.end);
    }
    else {
        body = deindent(templateObject_19$1 || (templateObject_19$1 = __makeTemplateObject(["\n\t\t\t", ".fire('", "', event);\n\t\t"], ["\n\t\t\t", ".fire('", "', event);\n\t\t"])), block.alias('component'), handler.name);
    }
    return {
        name: handler.name,
        "var": block.getUniqueName(node["var"] + "_" + handler.name),
        body: body
    };
}
var templateObject_1$5;
var templateObject_2$5;
var templateObject_3$5;
var templateObject_4$5;
var templateObject_5$3;
var templateObject_6$3;
var templateObject_7$2;
var templateObject_9$2;
var templateObject_8$2;
var templateObject_11$2;
var templateObject_12$2;
var templateObject_10$2;
var templateObject_13$1;
var templateObject_15$1;
var templateObject_14$1;
var templateObject_16$1;
var templateObject_17$1;
var templateObject_18$1;
var templateObject_19$1;

var EachBlock = /** @class */ (function (_super) {
    __extends(EachBlock, _super);
    function EachBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EachBlock.prototype.init = function (block, stripWhitespace, nextSibling) {
        this.cannotUseInnerHTML();
        this["var"] = block.getUniqueName("each");
        this.iterations = block.getUniqueName(this["var"] + "_blocks");
        this.each_context = block.getUniqueName(this["var"] + "_context");
        var dependencies = this.metadata.dependencies;
        block.addDependencies(dependencies);
        this.block = block.child({
            comment: createDebuggingComment(this, this.generator),
            name: this.generator.getUniqueName('create_each_block'),
            context: this.context,
            key: this.key,
            contexts: new Map(block.contexts),
            contextTypes: new Map(block.contextTypes),
            indexes: new Map(block.indexes),
            changeableIndexes: new Map(block.changeableIndexes),
            indexNames: new Map(block.indexNames),
            listNames: new Map(block.listNames)
        });
        var listName = this.generator.getUniqueName('each_value');
        var indexName = this.index || this.generator.getUniqueName(this.context + "_index");
        this.block.contextTypes.set(this.context, 'each');
        this.block.indexNames.set(this.context, indexName);
        this.block.listNames.set(this.context, listName);
        if (this.index) {
            this.block.getUniqueName(this.index); // this prevents name collisions (#1254)
            this.block.indexes.set(this.index, this.context);
            this.block.changeableIndexes.set(this.index, this.key); // TODO is this right?
        }
        var context = this.block.getUniqueName(this.context);
        this.block.contexts.set(this.context, context); // TODO this is now redundant?
        if (this.destructuredContexts) {
            for (var i = 0; i < this.destructuredContexts.length; i += 1) {
                var context_1 = this.block.getUniqueName(this.destructuredContexts[i]);
                this.block.contexts.set(this.destructuredContexts[i], context_1);
            }
        }
        this.contextProps = [
            listName + ": " + listName,
            this.context + ": " + listName + "[#i]",
            indexName + ": #i"
        ];
        if (this.destructuredContexts) {
            for (var i = 0; i < this.destructuredContexts.length; i += 1) {
                this.contextProps.push(this.destructuredContexts[i] + ": " + listName + "[#i][" + i + "]");
            }
        }
        this.generator.blocks.push(this.block);
        this.initChildren(this.block, stripWhitespace, nextSibling);
        block.addDependencies(this.block.dependencies);
        this.block.hasUpdateMethod = this.block.dependencies.size > 0;
        if (this["else"]) {
            this["else"].block = block.child({
                comment: createDebuggingComment(this["else"], this.generator),
                name: this.generator.getUniqueName(this.block.name + "_else")
            });
            this.generator.blocks.push(this["else"].block);
            this["else"].initChildren(this["else"].block, stripWhitespace, nextSibling);
            this["else"].block.hasUpdateMethod = this["else"].block.dependencies.size > 0;
        }
    };
    EachBlock.prototype.build = function (block, parentNode, parentNodes) {
        var _this = this;
        var generator = this.generator;
        var each = this["var"];
        var create_each_block = this.block.name;
        var each_block_value = this.block.listNames.get(this.context);
        var iterations = this.iterations;
        var needsAnchor = this.next ? !this.next.isDomNode() : !parentNode || !this.parent.isDomNode();
        var anchor = needsAnchor
            ? block.getUniqueName(each + "_anchor")
            : (this.next && this.next["var"]) || 'null';
        // hack the sourcemap, so that if data is missing the bug
        // is easy to find
        var c = this.start + 3;
        while (generator.source[c] !== 'e')
            c += 1;
        generator.code.overwrite(c, c + 4, 'length');
        var length = "[\u2702" + c + "-" + (c + 4) + "\u2702]";
        var mountOrIntro = this.block.hasIntroMethod ? 'i' : 'm';
        var vars = {
            each: each,
            create_each_block: create_each_block,
            each_block_value: each_block_value,
            length: length,
            iterations: iterations,
            anchor: anchor,
            mountOrIntro: mountOrIntro
        };
        block.contextualise(this.expression);
        var snippet = this.metadata.snippet;
        block.builders.init.addLine("var " + each_block_value + " = " + snippet + ";");
        if (this.key) {
            this.buildKeyed(block, parentNode, parentNodes, snippet, vars);
        }
        else {
            this.buildUnkeyed(block, parentNode, parentNodes, snippet, vars);
        }
        if (needsAnchor) {
            block.addElement(anchor, "@createComment()", parentNodes && "@createComment()", parentNode);
        }
        if (this["else"]) {
            var each_block_else = generator.getUniqueName(each + "_else");
            block.builders.init.addLine("var " + each_block_else + " = null;");
            // TODO neaten this up... will end up with an empty line in the block
            block.builders.init.addBlock(deindent(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n\t\t\t\tif (!", ".", ") {\n\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t", ".c();\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tif (!", ".", ") {\n\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t", ".c();\n\t\t\t\t}\n\t\t\t"])), each_block_value, length, each_block_else, this["else"].block.name, each_block_else));
            block.builders.mount.addBlock(deindent(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n\t\t\t\tif (", ") {\n\t\t\t\t\t", ".", "(", ", null);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tif (", ") {\n\t\t\t\t\t", ".", "(", ", null);\n\t\t\t\t}\n\t\t\t"])), each_block_else, each_block_else, mountOrIntro, parentNode || '#target'));
            var initialMountNode = parentNode || anchor + ".parentNode";
            if (this["else"].block.hasUpdateMethod) {
                block.builders.update.addBlock(deindent(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n\t\t\t\t\tif (!", ".", " && ", ") {\n\t\t\t\t\t\t", ".p(changed, state);\n\t\t\t\t\t} else if (!", ".", ") {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t\t", ".", "(", ", ", ");\n\t\t\t\t\t} else if (", ") {\n\t\t\t\t\t\t", ".u();\n\t\t\t\t\t\t", ".d();\n\t\t\t\t\t\t", " = null;\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tif (!", ".", " && ", ") {\n\t\t\t\t\t\t", ".p(changed, state);\n\t\t\t\t\t} else if (!", ".", ") {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t\t", ".", "(", ", ", ");\n\t\t\t\t\t} else if (", ") {\n\t\t\t\t\t\t", ".u();\n\t\t\t\t\t\t", ".d();\n\t\t\t\t\t\t", " = null;\n\t\t\t\t\t}\n\t\t\t\t"])), each_block_value, length, each_block_else, each_block_else, each_block_value, length, each_block_else, this["else"].block.name, each_block_else, each_block_else, mountOrIntro, initialMountNode, anchor, each_block_else, each_block_else, each_block_else, each_block_else));
            }
            else {
                block.builders.update.addBlock(deindent(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n\t\t\t\t\tif (", ".", ") {\n\t\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t\t", ".u();\n\t\t\t\t\t\t\t", ".d();\n\t\t\t\t\t\t\t", " = null;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else if (!", ") {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t\t", ".", "(", ", ", ");\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tif (", ".", ") {\n\t\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t\t", ".u();\n\t\t\t\t\t\t\t", ".d();\n\t\t\t\t\t\t\t", " = null;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else if (!", ") {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t\t", ".", "(", ", ", ");\n\t\t\t\t\t}\n\t\t\t\t"])), each_block_value, length, each_block_else, each_block_else, each_block_else, each_block_else, each_block_else, each_block_else, this["else"].block.name, each_block_else, each_block_else, mountOrIntro, initialMountNode, anchor));
            }
            block.builders.unmount.addLine("if (" + each_block_else + ") " + each_block_else + ".u()");
            block.builders.destroy.addBlock(deindent(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n\t\t\t\tif (", ") ", ".d();\n\t\t\t"], ["\n\t\t\t\tif (", ") ", ".d();\n\t\t\t"])), each_block_else, each_block_else));
        }
        this.children.forEach(function (child) {
            child.build(_this.block, null, 'nodes');
        });
        if (this["else"]) {
            this["else"].children.forEach(function (child) {
                child.build(_this["else"].block, null, 'nodes');
            });
        }
    };
    EachBlock.prototype.buildKeyed = function (block, parentNode, parentNodes, snippet, _a) {
        var each = _a.each, create_each_block = _a.create_each_block, each_block_value = _a.each_block_value, length = _a.length, anchor = _a.anchor, mountOrIntro = _a.mountOrIntro;
        var key = block.getUniqueName('key');
        var lookup = block.getUniqueName(each + "_lookup");
        var iteration = block.getUniqueName(each + "_iteration");
        var head = block.getUniqueName(each + "_head");
        var last = block.getUniqueName(each + "_last");
        var expected = block.getUniqueName(each + "_expected");
        var keep = block.getUniqueName(each + "_keep");
        var mounts = block.getUniqueName(each + "_mounts");
        var next_iteration = block.getUniqueName(each + "_next_iteration");
        block.addVariable(lookup, "@blankObject()");
        block.addVariable(head);
        block.addVariable(last);
        if (this.children[0].isDomNode()) {
            this.block.first = this.children[0]["var"];
        }
        else {
            this.block.first = this.block.getUniqueName('first');
            this.block.addElement(this.block.first, "@createComment()", parentNodes && "@createComment()", null);
        }
        block.builders.init.addBlock(deindent(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n\t\t\tfor (var #i = 0; #i < ", ".", "; #i += 1) {\n\t\t\t\tvar ", " = ", "[#i].", ";\n\t\t\t\tvar ", " = ", "[", "] = ", "(#component, ", ", @assign({}, state, {\n\t\t\t\t\t", "\n\t\t\t\t}));\n\n\t\t\t\tif (", ") ", ".next = ", ";\n\t\t\t\t", ".last = ", ";\n\t\t\t\t", " = ", ";\n\n\t\t\t\tif (#i === 0) ", " = ", ";\n\t\t\t}\n\t\t"], ["\n\t\t\tfor (var #i = 0; #i < ", ".", "; #i += 1) {\n\t\t\t\tvar ", " = ", "[#i].", ";\n\t\t\t\tvar ", " = ", "[", "] = ", "(#component, ", ", @assign({}, state, {\n\t\t\t\t\t", "\n\t\t\t\t}));\n\n\t\t\t\tif (", ") ", ".next = ", ";\n\t\t\t\t", ".last = ", ";\n\t\t\t\t", " = ", ";\n\n\t\t\t\tif (#i === 0) ", " = ", ";\n\t\t\t}\n\t\t"])), each_block_value, length, key, each_block_value, this.key, iteration, lookup, key, create_each_block, key, this.contextProps.join(',\n'), last, last, iteration, iteration, last, last, iteration, head, iteration));
        var initialMountNode = parentNode || '#target';
        var updateMountNode = this.getUpdateMountNode(anchor);
        var anchorNode = parentNode ? 'null' : 'anchor';
        block.builders.create.addBlock(deindent(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n\t\t\tvar ", " = ", ";\n\t\t\twhile (", ") {\n\t\t\t\t", ".c();\n\t\t\t\t", " = ", ".next;\n\t\t\t}\n\t\t"], ["\n\t\t\tvar ", " = ", ";\n\t\t\twhile (", ") {\n\t\t\t\t", ".c();\n\t\t\t\t", " = ", ".next;\n\t\t\t}\n\t\t"])), iteration, head, iteration, iteration, iteration, iteration));
        if (parentNodes) {
            block.builders.claim.addBlock(deindent(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["\n\t\t\t\tvar ", " = ", ";\n\t\t\t\twhile (", ") {\n\t\t\t\t\t", ".l(", ");\n\t\t\t\t\t", " = ", ".next;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tvar ", " = ", ";\n\t\t\t\twhile (", ") {\n\t\t\t\t\t", ".l(", ");\n\t\t\t\t\t", " = ", ".next;\n\t\t\t\t}\n\t\t\t"])), iteration, head, iteration, iteration, parentNodes, iteration, iteration));
        }
        block.builders.mount.addBlock(deindent(templateObject_9$3 || (templateObject_9$3 = __makeTemplateObject(["\n\t\t\tvar ", " = ", ";\n\t\t\twhile (", ") {\n\t\t\t\t", ".", "(", ", ", ");\n\t\t\t\t", " = ", ".next;\n\t\t\t}\n\t\t"], ["\n\t\t\tvar ", " = ", ";\n\t\t\twhile (", ") {\n\t\t\t\t", ".", "(", ", ", ");\n\t\t\t\t", " = ", ".next;\n\t\t\t}\n\t\t"])), iteration, head, iteration, iteration, mountOrIntro, initialMountNode, anchorNode, iteration, iteration));
        var dynamic = this.block.hasUpdateMethod;
        block.builders.update.addBlock(deindent(templateObject_10$3 || (templateObject_10$3 = __makeTemplateObject(["\n\t\t\tvar ", " = ", ";\n\n\t\t\t@updateKeyedEach(#component, ", ", changed, \"", "\", ", ", ", ", ", ", ", ", ", ", ", ", ", ", \"", "\", function(#i) {\n\t\t\t\treturn @assign({}, state, {\n\t\t\t\t\t", "\n\t\t\t\t});\n\t\t\t});\n\n\t\t\t", " = ", "[", "[0] && ", "[0].", "];\n\t\t"], ["\n\t\t\tvar ", " = ", ";\n\n\t\t\t@updateKeyedEach(#component, ", ", changed, \"", "\", ", ", ", ", ", ", ", ", ", ", ", ", ", ", \"", "\", function(#i) {\n\t\t\t\treturn @assign({}, state, {\n\t\t\t\t\t", "\n\t\t\t\t});\n\t\t\t});\n\n\t\t\t", " = ", "[", "[0] && ", "[0].", "];\n\t\t"])), each_block_value, snippet, key, this.key, dynamic, each_block_value, head, lookup, updateMountNode, String(this.block.hasOutroMethod), create_each_block, mountOrIntro, this.contextProps.join(',\n'), head, lookup, each_block_value, each_block_value, this.key));
        if (!parentNode) {
            block.builders.unmount.addBlock(deindent(templateObject_11$3 || (templateObject_11$3 = __makeTemplateObject(["\n\t\t\t\tvar ", " = ", ";\n\t\t\t\twhile (", ") {\n\t\t\t\t\t", ".u();\n\t\t\t\t\t", " = ", ".next;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tvar ", " = ", ";\n\t\t\t\twhile (", ") {\n\t\t\t\t\t", ".u();\n\t\t\t\t\t", " = ", ".next;\n\t\t\t\t}\n\t\t\t"])), iteration, head, iteration, iteration, iteration, iteration));
        }
        block.builders.destroy.addBlock(deindent(templateObject_12$3 || (templateObject_12$3 = __makeTemplateObject(["\n\t\t\tvar ", " = ", ";\n\t\t\twhile (", ") {\n\t\t\t\t", ".d();\n\t\t\t\t", " = ", ".next;\n\t\t\t}\n\t\t"], ["\n\t\t\tvar ", " = ", ";\n\t\t\twhile (", ") {\n\t\t\t\t", ".d();\n\t\t\t\t", " = ", ".next;\n\t\t\t}\n\t\t"])), iteration, head, iteration, iteration, iteration, iteration));
    };
    EachBlock.prototype.buildUnkeyed = function (block, parentNode, parentNodes, snippet, _a) {
        var create_each_block = _a.create_each_block, each_block_value = _a.each_block_value, length = _a.length, iterations = _a.iterations, anchor = _a.anchor, mountOrIntro = _a.mountOrIntro;
        block.builders.init.addBlock(deindent(templateObject_13$2 || (templateObject_13$2 = __makeTemplateObject(["\n\t\t\tvar ", " = [];\n\n\t\t\tfor (var #i = 0; #i < ", ".", "; #i += 1) {\n\t\t\t\t", "[#i] = ", "(#component, @assign({}, state, {\n\t\t\t\t\t", "\n\t\t\t\t}));\n\t\t\t}\n\t\t"], ["\n\t\t\tvar ", " = [];\n\n\t\t\tfor (var #i = 0; #i < ", ".", "; #i += 1) {\n\t\t\t\t", "[#i] = ", "(#component, @assign({}, state, {\n\t\t\t\t\t", "\n\t\t\t\t}));\n\t\t\t}\n\t\t"])), iterations, each_block_value, length, iterations, create_each_block, this.contextProps.join(',\n')));
        var initialMountNode = parentNode || '#target';
        var updateMountNode = this.getUpdateMountNode(anchor);
        var anchorNode = parentNode ? 'null' : 'anchor';
        block.builders.create.addBlock(deindent(templateObject_14$2 || (templateObject_14$2 = __makeTemplateObject(["\n\t\t\tfor (var #i = 0; #i < ", ".length; #i += 1) {\n\t\t\t\t", "[#i].c();\n\t\t\t}\n\t\t"], ["\n\t\t\tfor (var #i = 0; #i < ", ".length; #i += 1) {\n\t\t\t\t", "[#i].c();\n\t\t\t}\n\t\t"])), iterations, iterations));
        if (parentNodes) {
            block.builders.claim.addBlock(deindent(templateObject_15$2 || (templateObject_15$2 = __makeTemplateObject(["\n\t\t\t\tfor (var #i = 0; #i < ", ".length; #i += 1) {\n\t\t\t\t\t", "[#i].l(", ");\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tfor (var #i = 0; #i < ", ".length; #i += 1) {\n\t\t\t\t\t", "[#i].l(", ");\n\t\t\t\t}\n\t\t\t"])), iterations, iterations, parentNodes));
        }
        block.builders.mount.addBlock(deindent(templateObject_16$2 || (templateObject_16$2 = __makeTemplateObject(["\n\t\t\tfor (var #i = 0; #i < ", ".length; #i += 1) {\n\t\t\t\t", "[#i].", "(", ", ", ");\n\t\t\t}\n\t\t"], ["\n\t\t\tfor (var #i = 0; #i < ", ".length; #i += 1) {\n\t\t\t\t", "[#i].", "(", ", ", ");\n\t\t\t}\n\t\t"])), iterations, iterations, mountOrIntro, initialMountNode, anchorNode));
        var allDependencies = new Set(this.block.dependencies);
        var dependencies = this.metadata.dependencies;
        dependencies.forEach(function (dependency) {
            allDependencies.add(dependency);
        });
        // TODO do this for keyed blocks as well
        var condition = Array.from(allDependencies)
            .map(function (dependency) { return "changed." + dependency; })
            .join(' || ');
        if (condition !== '') {
            var forLoopBody = this.block.hasUpdateMethod
                ? this.block.hasIntroMethod
                    ? deindent(templateObject_17$2 || (templateObject_17$2 = __makeTemplateObject(["\n\t\t\t\t\t\tif (", "[#i]) {\n\t\t\t\t\t\t\t", "[#i].p(changed, ", ");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t", "[#i] = ", "(#component, ", ");\n\t\t\t\t\t\t\t", "[#i].c();\n\t\t\t\t\t\t}\n\t\t\t\t\t\t", "[#i].i(", ", ", ");\n\t\t\t\t\t"], ["\n\t\t\t\t\t\tif (", "[#i]) {\n\t\t\t\t\t\t\t", "[#i].p(changed, ", ");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t", "[#i] = ", "(#component, ", ");\n\t\t\t\t\t\t\t", "[#i].c();\n\t\t\t\t\t\t}\n\t\t\t\t\t\t", "[#i].i(", ", ", ");\n\t\t\t\t\t"])), iterations, iterations, this.each_context, iterations, create_each_block, this.each_context, iterations, iterations, updateMountNode, anchor) : deindent(templateObject_18$2 || (templateObject_18$2 = __makeTemplateObject(["\n\t\t\t\t\t\tif (", "[#i]) {\n\t\t\t\t\t\t\t", "[#i].p(changed, ", ");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t", "[#i] = ", "(#component, ", ");\n\t\t\t\t\t\t\t", "[#i].c();\n\t\t\t\t\t\t\t", "[#i].m(", ", ", ");\n\t\t\t\t\t\t}\n\t\t\t\t\t"], ["\n\t\t\t\t\t\tif (", "[#i]) {\n\t\t\t\t\t\t\t", "[#i].p(changed, ", ");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t", "[#i] = ", "(#component, ", ");\n\t\t\t\t\t\t\t", "[#i].c();\n\t\t\t\t\t\t\t", "[#i].m(", ", ", ");\n\t\t\t\t\t\t}\n\t\t\t\t\t"])), iterations, iterations, this.each_context, iterations, create_each_block, this.each_context, iterations, iterations, updateMountNode, anchor)
                : deindent(templateObject_19$2 || (templateObject_19$2 = __makeTemplateObject(["\n\t\t\t\t\t", "[#i] = ", "(#component, ", ");\n\t\t\t\t\t", "[#i].c();\n\t\t\t\t\t", "[#i].", "(", ", ", ");\n\t\t\t\t"], ["\n\t\t\t\t\t", "[#i] = ", "(#component, ", ");\n\t\t\t\t\t", "[#i].c();\n\t\t\t\t\t", "[#i].", "(", ", ", ");\n\t\t\t\t"])), iterations, create_each_block, this.each_context, iterations, iterations, mountOrIntro, updateMountNode, anchor);
            var start = this.block.hasUpdateMethod ? '0' : iterations + ".length";
            var outro = block.getUniqueName('outro');
            var destroy = this.block.hasOutroMethod
                ? deindent(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n\t\t\t\t\tfunction ", "(i) {\n\t\t\t\t\t\tif (", "[i]) {\n\t\t\t\t\t\t\t", "[i].o(function() {\n\t\t\t\t\t\t\t\t", "[i].u();\n\t\t\t\t\t\t\t\t", "[i].d();\n\t\t\t\t\t\t\t\t", "[i] = null;\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tfor (; #i < ", ".length; #i += 1) ", "(#i);\n\t\t\t\t"], ["\n\t\t\t\t\tfunction ", "(i) {\n\t\t\t\t\t\tif (", "[i]) {\n\t\t\t\t\t\t\t", "[i].o(function() {\n\t\t\t\t\t\t\t\t", "[i].u();\n\t\t\t\t\t\t\t\t", "[i].d();\n\t\t\t\t\t\t\t\t", "[i] = null;\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tfor (; #i < ", ".length; #i += 1) ", "(#i);\n\t\t\t\t"])), outro, iterations, iterations, iterations, iterations, iterations, iterations, outro) : deindent(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n\t\t\t\t\tfor (; #i < ", ".length; #i += 1) {\n\t\t\t\t\t\t", "[#i].u();\n\t\t\t\t\t\t", "[#i].d();\n\t\t\t\t\t}\n\t\t\t\t\t", ".length = ", ".", ";\n\t\t\t\t"], ["\n\t\t\t\t\tfor (; #i < ", ".length; #i += 1) {\n\t\t\t\t\t\t", "[#i].u();\n\t\t\t\t\t\t", "[#i].d();\n\t\t\t\t\t}\n\t\t\t\t\t", ".length = ", ".", ";\n\t\t\t\t"])), iterations, iterations, iterations, iterations, each_block_value, length);
            block.builders.update.addBlock(deindent(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n\t\t\t\tvar ", " = ", ";\n\n\t\t\t\tif (", ") {\n\t\t\t\t\tfor (var #i = ", "; #i < ", ".", "; #i += 1) {\n\t\t\t\t\t\tvar ", " = @assign({}, state, {\n\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tvar ", " = ", ";\n\n\t\t\t\tif (", ") {\n\t\t\t\t\tfor (var #i = ", "; #i < ", ".", "; #i += 1) {\n\t\t\t\t\t\tvar ", " = @assign({}, state, {\n\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), each_block_value, snippet, condition, start, each_block_value, length, this.each_context, this.contextProps.join(',\n'), forLoopBody, destroy));
        }
        block.builders.unmount.addBlock(deindent(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n\t\t\tfor (var #i = 0; #i < ", ".length; #i += 1) {\n\t\t\t\t", "[#i].u();\n\t\t\t}\n\t\t"], ["\n\t\t\tfor (var #i = 0; #i < ", ".length; #i += 1) {\n\t\t\t\t", "[#i].u();\n\t\t\t}\n\t\t"])), iterations, iterations));
        block.builders.destroy.addBlock("@destroyEach(" + iterations + ");");
    };
    EachBlock.prototype.remount = function (name) {
        // TODO consider keyed blocks
        return "for (var #i = 0; #i < " + this.iterations + ".length; #i += 1) " + this.iterations + "[#i].m(" + name + "._slotted" + (this.generator.legacy ? "[\"default\"]" : ".default") + ", null);";
    };
    return EachBlock;
}(Node$1));
var templateObject_1$6;
var templateObject_2$6;
var templateObject_3$6;
var templateObject_4$6;
var templateObject_5$4;
var templateObject_6$4;
var templateObject_7$3;
var templateObject_8$3;
var templateObject_9$3;
var templateObject_10$3;
var templateObject_11$3;
var templateObject_12$3;
var templateObject_13$2;
var templateObject_14$2;
var templateObject_15$2;
var templateObject_16$2;
var templateObject_17$2;
var templateObject_18$2;
var templateObject_19$2;
var templateObject_20;
var templateObject_21;
var templateObject_22;
var templateObject_23;

var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    function Element() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Element.prototype.init = function (block, stripWhitespace, nextSibling) {
        var _this = this;
        if (this.name === 'slot' || this.name === 'option') {
            this.cannotUseInnerHTML();
        }
        var parentElement = this.parent && this.parent.findNearest(/^Element/);
        this.namespace = this.name === 'svg' ?
            svg :
            parentElement ? parentElement.namespace : this.generator.namespace;
        this.attributes.forEach(function (attribute) {
            if (attribute.type === 'Attribute' && attribute.value !== true) {
                // special case — xmlns
                if (attribute.name === 'xmlns') {
                    // TODO this attribute must be static – enforce at compile time
                    _this.namespace = attribute.value[0].data;
                }
                attribute.value.forEach(function (chunk) {
                    if (chunk.type !== 'Text') {
                        if (_this.parent)
                            _this.parent.cannotUseInnerHTML();
                        var dependencies_1 = chunk.metadata.dependencies;
                        block.addDependencies(dependencies_1);
                        // special case — <option value='{{foo}}'> — see below
                        if (_this.name === 'option' &&
                            attribute.name === 'value') {
                            var select = _this.parent;
                            while (select && (select.type !== 'Element' || select.name !== 'select'))
                                select = select.parent;
                            if (select && select.selectBindingDependencies) {
                                select.selectBindingDependencies.forEach(function (prop) {
                                    dependencies_1.forEach(function (dependency) {
                                        _this.generator.indirectDependencies.get(prop).add(dependency);
                                    });
                                });
                            }
                        }
                    }
                });
            }
            else {
                if (_this.parent)
                    _this.parent.cannotUseInnerHTML();
                if (attribute.type === 'EventHandler' && attribute.expression) {
                    attribute.expression.arguments.forEach(function (arg) {
                        block.addDependencies(arg.metadata.dependencies);
                    });
                }
                else if (attribute.type === 'Binding') {
                    block.addDependencies(attribute.metadata.dependencies);
                }
                else if (attribute.type === 'Transition') {
                    if (attribute.intro)
                        _this.generator.hasIntroTransitions = block.hasIntroMethod = true;
                    if (attribute.outro) {
                        _this.generator.hasOutroTransitions = block.hasOutroMethod = true;
                        block.outros += 1;
                    }
                }
            }
        });
        var valueAttribute = this.attributes.find(function (attribute) { return attribute.name === 'value'; });
        if (this.name === 'textarea') {
            // this is an egregious hack, but it's the easiest way to get <textarea>
            // children treated the same way as a value attribute
            if (this.children.length > 0) {
                this.attributes.push(new Attribute({
                    generator: this.generator,
                    name: 'value',
                    value: this.children,
                    parent: this
                }));
                this.children = [];
            }
        }
        // special case — in a case like this...
        //
        //   <select bind:value='foo'>
        //     <option value='{{bar}}'>bar</option>
        //     <option value='{{baz}}'>baz</option>
        //   </option>
        //
        // ...we need to know that `foo` depends on `bar` and `baz`,
        // so that if `foo.qux` changes, we know that we need to
        // mark `bar` and `baz` as dirty too
        if (this.name === 'select') {
            var binding = this.attributes.find(function (node) { return node.type === 'Binding' && node.name === 'value'; });
            if (binding) {
                // TODO does this also apply to e.g. `<input type='checkbox' bind:group='foo'>`?
                var dependencies = binding.metadata.dependencies;
                this.selectBindingDependencies = dependencies;
                dependencies.forEach(function (prop) {
                    _this.generator.indirectDependencies.set(prop, new Set());
                });
            }
            else {
                this.selectBindingDependencies = null;
            }
        }
        var slot = this.getStaticAttributeValue('slot');
        if (slot && this.hasAncestor('Component')) {
            this.cannotUseInnerHTML();
            this.slotted = true;
            // TODO validate slots — no nesting, no dynamic names...
            var component = this.findNearest(/^Component/);
            component._slots.add(slot);
        }
        this["var"] = block.getUniqueName(this.name.replace(/[^a-zA-Z0-9_$]/g, '_'));
        if (this.children.length) {
            if (this.name === 'pre' || this.name === 'textarea')
                stripWhitespace = false;
            this.initChildren(block, stripWhitespace, nextSibling);
        }
    };
    Element.prototype.build = function (block, parentNode, parentNodes) {
        var _this = this;
        var generator = this.generator;
        if (this.name === 'slot') {
            var slotName = this.getStaticAttributeValue('name') || 'default';
            this.generator.slots.add(slotName);
        }
        if (this.name === 'noscript')
            return;
        var childState = {
            parentNode: this["var"],
            parentNodes: parentNodes && block.getUniqueName(this["var"] + "_nodes") // if we're in unclaimable territory, i.e. <head>, parentNodes is null
        };
        var name = this["var"];
        var allUsedContexts = new Set();
        var slot = this.attributes.find(function (attribute) { return attribute.name === 'slot'; });
        var initialMountNode = this.slotted ?
            this.findNearest(/^Component/)["var"] + "._slotted." + slot.value[0].data : // TODO this looks bonkers
            parentNode;
        block.addVariable(name);
        var renderStatement = getRenderStatement(this.generator, this.namespace, this.name);
        block.builders.create.addLine(name + " = " + renderStatement + ";");
        if (this.generator.hydratable) {
            if (parentNodes) {
                block.builders.claim.addBlock(deindent(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n\t\t\t\t\t", " = ", ";\n\t\t\t\t\tvar ", " = @children(", ");\n\t\t\t\t"], ["\n\t\t\t\t\t", " = ", ";\n\t\t\t\t\tvar ", " = @children(", ");\n\t\t\t\t"])), name, getClaimStatement(generator, this.namespace, parentNodes, this), childState.parentNodes, name));
            }
            else {
                block.builders.claim.addLine(name + " = " + renderStatement + ";");
            }
        }
        if (initialMountNode) {
            block.builders.mount.addLine("@appendNode(" + name + ", " + initialMountNode + ");");
            if (initialMountNode === 'document.head') {
                block.builders.unmount.addLine("@detachNode(" + name + ");");
            }
        }
        else {
            block.builders.mount.addLine("@insertNode(" + name + ", #target, anchor);");
            // TODO we eventually need to consider what happens to elements
            // that belong to the same outgroup as an outroing element...
            block.builders.unmount.addLine("@detachNode(" + name + ");");
        }
        // TODO move this into a class as well?
        if (this._cssRefAttribute) {
            block.builders.hydrate.addLine("@setAttribute(" + name + ", \"svelte-ref-" + this._cssRefAttribute + "\", \"\");");
        }
        // insert static children with textContent or innerHTML
        if (!this.namespace && this.canUseInnerHTML && this.children.length > 0) {
            if (this.children.length === 1 && this.children[0].type === 'Text') {
                block.builders.create.addLine(name + ".textContent = " + stringify(this.children[0].data) + ";");
            }
            else {
                block.builders.create.addLine(name + ".innerHTML = " + stringify(this.children.map(toHTML).join('')) + ";");
            }
        }
        else {
            this.children.forEach(function (child) {
                child.build(block, childState.parentNode, childState.parentNodes);
            });
        }
        this.addBindings(block, allUsedContexts);
        this.attributes.filter(function (a) { return a.type === 'Attribute'; }).forEach(function (attribute) {
            attribute.render(block);
        });
        // event handlers
        var eventHandlerUsesComponent = false;
        this.attributes.filter(function (a) { return a.type === 'EventHandler'; }).forEach(function (attribute) {
            var isCustomEvent = generator.events.has(attribute.name);
            var shouldHoist = !isCustomEvent && _this.hasAncestor('EachBlock');
            var context = shouldHoist ? null : name;
            var usedContexts = [];
            if (attribute.expression) {
                generator.addSourcemapLocations(attribute.expression);
                var flattened = flatten(attribute.expression.callee);
                if (!validCalleeObjects.has(flattened.name)) {
                    // allow event.stopPropagation(), this.select() etc
                    // TODO verify that it's a valid callee (i.e. built-in or declared method)
                    generator.code.prependRight(attribute.expression.start, block.alias('component') + ".");
                    if (shouldHoist)
                        eventHandlerUsesComponent = true; // this feels a bit hacky but it works!
                }
                attribute.expression.arguments.forEach(function (arg) {
                    var contexts = block.contextualise(arg, context, true).contexts;
                    contexts.forEach(function (context) {
                        if (!~usedContexts.indexOf(context))
                            usedContexts.push(context);
                        allUsedContexts.add(context);
                    });
                });
            }
            var ctx = context || 'this';
            var declarations = usedContexts
                .map(function (name) {
                if (name === 'state') {
                    if (shouldHoist)
                        eventHandlerUsesComponent = true;
                    return "var state = " + block.alias('component') + ".get();";
                }
                var contextType = block.contextTypes.get(name);
                if (contextType === 'each') {
                    var listName = block.listNames.get(name);
                    var indexName = block.indexNames.get(name);
                    var contextName = block.contexts.get(name);
                    return "var " + listName + " = " + ctx + "._svelte." + listName + ", " + indexName + " = " + ctx + "._svelte." + indexName + ", " + contextName + " = " + listName + "[" + indexName + "];";
                }
            })
                .filter(Boolean);
            // get a name for the event handler that is globally unique
            // if hoisted, locally unique otherwise
            var handlerName = (shouldHoist ? generator : block).getUniqueName(attribute.name.replace(/[^a-zA-Z0-9_$]/g, '_') + "_handler");
            // create the handler body
            var handlerBody = deindent(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"], ["\n\t\t\t\t",
                "\n\t\t\t\t", "\n\t\t\t\t",
                "\n\t\t\t"])), eventHandlerUsesComponent &&
                "var " + block.alias('component') + " = " + ctx + "._svelte.component;", declarations, attribute.expression ?
                "[\u2702" + attribute.expression.start + "-" + attribute.expression.end + "\u2702];" :
                block.alias('component') + ".fire(\"" + attribute.name + "\", event);");
            if (isCustomEvent) {
                block.addVariable(handlerName);
                block.builders.hydrate.addBlock(deindent(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n\t\t\t\t\t", " = %events-", ".call(#component, ", ", function(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t});\n\t\t\t\t"], ["\n\t\t\t\t\t", " = %events-", ".call(#component, ", ", function(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t});\n\t\t\t\t"])), handlerName, attribute.name, name, handlerBody));
                block.builders.destroy.addLine(deindent(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n\t\t\t\t\t", ".teardown();\n\t\t\t\t"], ["\n\t\t\t\t\t", ".teardown();\n\t\t\t\t"])), handlerName));
            }
            else {
                var handler = deindent(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n\t\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t"])), handlerName, handlerBody);
                if (shouldHoist) {
                    generator.blocks.push(handler);
                }
                else {
                    block.builders.init.addBlock(handler);
                }
                block.builders.hydrate.addLine("@addListener(" + name + ", \"" + attribute.name + "\", " + handlerName + ");");
                block.builders.destroy.addLine("@removeListener(" + name + ", \"" + attribute.name + "\", " + handlerName + ");");
            }
        });
        // refs
        this.attributes.filter(function (a) { return a.type === 'Ref'; }).forEach(function (attribute) {
            var ref = "#component.refs." + attribute.name;
            block.builders.mount.addLine(ref + " = " + name + ";");
            block.builders.destroy.addLine("if (" + ref + " === " + name + ") " + ref + " = null;");
            generator.usesRefs = true; // so component.refs object is created
        });
        this.addTransitions(block);
        if (allUsedContexts.size || eventHandlerUsesComponent) {
            var initialProps_1 = [];
            var updates_1 = [];
            if (eventHandlerUsesComponent) {
                initialProps_1.push("component: #component");
            }
            allUsedContexts.forEach(function (contextName) {
                if (contextName === 'state')
                    return;
                if (block.contextTypes.get(contextName) !== 'each')
                    return;
                var listName = block.listNames.get(contextName);
                var indexName = block.indexNames.get(contextName);
                initialProps_1.push(listName + ": state." + listName + ",\n" + indexName + ": state." + indexName);
                updates_1.push(name + "._svelte." + listName + " = state." + listName + ";\n" + name + "._svelte." + indexName + " = state." + indexName + ";");
            });
            if (initialProps_1.length) {
                block.builders.hydrate.addBlock(deindent(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n\t\t\t\t\t", "._svelte = {\n\t\t\t\t\t\t", "\n\t\t\t\t\t};\n\t\t\t\t"], ["\n\t\t\t\t\t", "._svelte = {\n\t\t\t\t\t\t", "\n\t\t\t\t\t};\n\t\t\t\t"])), name, initialProps_1.join(',\n')));
            }
            if (updates_1.length) {
                block.builders.update.addBlock(updates_1.join('\n'));
            }
        }
        if (this.initialUpdate) {
            block.builders.mount.addBlock(this.initialUpdate);
        }
        if (childState.parentNodes) {
            block.builders.claim.addLine(childState.parentNodes + ".forEach(@detachNode);");
        }
        function toHTML(node) {
            if (node.type === 'Text') {
                return node.parent &&
                    node.parent.type === 'Element' &&
                    (node.parent.name === 'script' || node.parent.name === 'style')
                    ? node.data
                    : escapeHTML(node.data);
            }
            if (node.name === 'noscript')
                return '';
            var open = "<" + node.name;
            if (node._cssRefAttribute) {
                open += " svelte-ref-" + node._cssRefAttribute;
            }
            node.attributes.forEach(function (attr) {
                open += " " + fixAttributeCasing(attr.name) + stringifyAttributeValue(attr.value);
            });
            if (isVoidElementName(node.name))
                return open + '>';
            return open + ">" + node.children.map(toHTML).join('') + "</" + node.name + ">";
        }
    };
    Element.prototype.addBindings = function (block, allUsedContexts) {
        var _this = this;
        var bindings = this.attributes.filter(function (a) { return a.type === 'Binding'; });
        if (bindings.length === 0)
            return;
        if (this.name === 'select' || this.isMediaNode())
            this.generator.hasComplexBindings = true;
        var needsLock = this.name !== 'input' || !/radio|checkbox|range|color/.test(this.getStaticAttributeValue('type'));
        var mungedBindings = bindings.map(function (binding) { return binding.munge(block, allUsedContexts); });
        var lock = mungedBindings.some(function (binding) { return binding.needsLock; }) ?
            block.getUniqueName(this["var"] + "_updating") :
            null;
        if (lock)
            block.addVariable(lock, 'false');
        var groups = events$1
            .map(function (event) {
            return {
                events: event.eventNames,
                bindings: mungedBindings.filter(function (binding) { return event.filter(_this, binding.name); })
            };
        })
            .filter(function (group) { return group.bindings.length; });
        groups.forEach(function (group) {
            var handler = block.getUniqueName(_this["var"] + "_" + group.events.join('_') + "_handler");
            var needsLock = group.bindings.some(function (binding) { return binding.needsLock; });
            group.bindings.forEach(function (binding) {
                if (!binding.updateDom)
                    return;
                var updateConditions = needsLock ? ["!" + lock] : [];
                if (binding.updateCondition)
                    updateConditions.push(binding.updateCondition);
                block.builders.update.addLine(updateConditions.length ? "if (" + updateConditions.join(' && ') + ") " + binding.updateDom : binding.updateDom);
            });
            var usesContext = group.bindings.some(function (binding) { return binding.handler.usesContext; });
            var usesState = group.bindings.some(function (binding) { return binding.handler.usesState; });
            var usesStore = group.bindings.some(function (binding) { return binding.handler.usesStore; });
            var mutations = group.bindings.map(function (binding) { return binding.handler.mutation; }).filter(Boolean).join('\n');
            var props = new Set();
            var storeProps = new Set();
            group.bindings.forEach(function (binding) {
                binding.handler.props.forEach(function (prop) {
                    props.add(prop);
                });
                binding.handler.storeProps.forEach(function (prop) {
                    storeProps.add(prop);
                });
            }); // TODO use stringifyProps here, once indenting is fixed
            // media bindings — awkward special case. The native timeupdate events
            // fire too infrequently, so we need to take matters into our
            // own hands
            var animation_frame;
            if (group.events[0] === 'timeupdate') {
                animation_frame = block.getUniqueName(_this["var"] + "_animationframe");
                block.addVariable(animation_frame);
            }
            block.builders.init.addBlock(deindent(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n\t\t\t\tfunction ", "() {\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tfunction ", "() {\n\t\t\t\t\t",
                "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), handler, animation_frame && deindent(templateObject_8$4 || (templateObject_8$4 = __makeTemplateObject(["\n\t\t\t\t\t\t\tcancelAnimationFrame(", ");\n\t\t\t\t\t\t\tif (!", ".paused) ", " = requestAnimationFrame(", ");"], ["\n\t\t\t\t\t\t\tcancelAnimationFrame(", ");\n\t\t\t\t\t\t\tif (!", ".paused) ", " = requestAnimationFrame(", ");"])), animation_frame, _this["var"], animation_frame, handler), usesContext && "var context = " + _this["var"] + "._svelte;", usesState && "var state = #component.get();", usesStore && "var $ = #component.store.get();", needsLock && lock + " = true;", mutations.length > 0 && mutations, props.size > 0 && "#component.set({ " + Array.from(props).join(', ') + " });", storeProps.size > 0 && "#component.store.set({ " + Array.from(storeProps).join(', ') + " });", needsLock && lock + " = false;"));
            group.events.forEach(function (name) {
                block.builders.hydrate.addLine("@addListener(" + _this["var"] + ", \"" + name + "\", " + handler + ");");
                block.builders.destroy.addLine("@removeListener(" + _this["var"] + ", \"" + name + "\", " + handler + ");");
            });
            var allInitialStateIsDefined = group.bindings
                .map(function (binding) { return "'" + binding.object + "' in state"; })
                .join(' && ');
            if (_this.name === 'select' || group.bindings.find(function (binding) { return binding.name === 'indeterminate' || binding.isReadOnlyMediaAttribute; })) {
                _this.generator.hasComplexBindings = true;
                block.builders.hydrate.addLine("if (!(" + allInitialStateIsDefined + ")) #component.root._beforecreate.push(" + handler + ");");
            }
        });
        this.initialUpdate = mungedBindings.map(function (binding) { return binding.initialUpdate; }).filter(Boolean).join('\n');
    };
    Element.prototype.addTransitions = function (block) {
        var intro = this.attributes.find(function (a) { return a.type === 'Transition' && a.intro; });
        var outro = this.attributes.find(function (a) { return a.type === 'Transition' && a.outro; });
        if (!intro && !outro)
            return;
        if (intro === outro) {
            block.contextualise(intro.expression); // TODO remove all these
            var name = block.getUniqueName(this["var"] + "_transition");
            var snippet = intro.expression
                ? intro.metadata.snippet
                : '{}';
            block.addVariable(name);
            var fn = "%transitions-" + intro.name;
            block.builders.intro.addBlock(deindent(templateObject_9$4 || (templateObject_9$4 = __makeTemplateObject(["\n\t\t\t\t#component.root._aftercreate.push(function() {\n\t\t\t\t\tif (!", ") ", " = @wrapTransition(#component, ", ", ", ", ", ", true, null);\n\t\t\t\t\t", ".run(true, function() {\n\t\t\t\t\t\t#component.fire(\"intro.end\", { node: ", " });\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t"], ["\n\t\t\t\t#component.root._aftercreate.push(function() {\n\t\t\t\t\tif (!", ") ", " = @wrapTransition(#component, ", ", ", ", ", ", true, null);\n\t\t\t\t\t", ".run(true, function() {\n\t\t\t\t\t\t#component.fire(\"intro.end\", { node: ", " });\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t"])), name, name, this["var"], fn, snippet, name, this["var"]));
            block.builders.outro.addBlock(deindent(templateObject_10$4 || (templateObject_10$4 = __makeTemplateObject(["\n\t\t\t\t", ".run(false, function() {\n\t\t\t\t\t#component.fire(\"outro.end\", { node: ", " });\n\t\t\t\t\tif (--#outros === 0) #outrocallback();\n\t\t\t\t\t", " = null;\n\t\t\t\t});\n\t\t\t"], ["\n\t\t\t\t", ".run(false, function() {\n\t\t\t\t\t#component.fire(\"outro.end\", { node: ", " });\n\t\t\t\t\tif (--#outros === 0) #outrocallback();\n\t\t\t\t\t", " = null;\n\t\t\t\t});\n\t\t\t"])), name, this["var"], name));
        }
        else {
            var introName = intro && block.getUniqueName(this["var"] + "_intro");
            var outroName = outro && block.getUniqueName(this["var"] + "_outro");
            if (intro) {
                block.contextualise(intro.expression);
                block.addVariable(introName);
                var snippet = intro.expression
                    ? intro.metadata.snippet
                    : '{}';
                var fn = "%transitions-" + intro.name; // TODO add built-in transitions?
                if (outro) {
                    block.builders.intro.addBlock(deindent(templateObject_11$4 || (templateObject_11$4 = __makeTemplateObject(["\n\t\t\t\t\t\tif (", ") ", ".abort();\n\t\t\t\t\t\tif (", ") ", ".abort();\n\t\t\t\t\t"], ["\n\t\t\t\t\t\tif (", ") ", ".abort();\n\t\t\t\t\t\tif (", ") ", ".abort();\n\t\t\t\t\t"])), introName, introName, outroName, outroName));
                }
                block.builders.intro.addBlock(deindent(templateObject_12$4 || (templateObject_12$4 = __makeTemplateObject(["\n\t\t\t\t\t#component.root._aftercreate.push(function() {\n\t\t\t\t\t\t", " = @wrapTransition(#component, ", ", ", ", ", ", true, null);\n\t\t\t\t\t\t", ".run(true, function() {\n\t\t\t\t\t\t\t#component.fire(\"intro.end\", { node: ", " });\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t"], ["\n\t\t\t\t\t#component.root._aftercreate.push(function() {\n\t\t\t\t\t\t", " = @wrapTransition(#component, ", ", ", ", ", ", true, null);\n\t\t\t\t\t\t", ".run(true, function() {\n\t\t\t\t\t\t\t#component.fire(\"intro.end\", { node: ", " });\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t"])), introName, this["var"], fn, snippet, introName, this["var"]));
            }
            if (outro) {
                block.contextualise(outro.expression);
                block.addVariable(outroName);
                var snippet = outro.expression
                    ? outro.metadata.snippet
                    : '{}';
                var fn = "%transitions-" + outro.name;
                // TODO hide elements that have outro'd (unless they belong to a still-outroing
                // group) prior to their removal from the DOM
                block.builders.outro.addBlock(deindent(templateObject_13$3 || (templateObject_13$3 = __makeTemplateObject(["\n\t\t\t\t\t", " = @wrapTransition(#component, ", ", ", ", ", ", false, null);\n\t\t\t\t\t", ".run(false, function() {\n\t\t\t\t\t\t#component.fire(\"outro.end\", { node: ", " });\n\t\t\t\t\t\tif (--#outros === 0) #outrocallback();\n\t\t\t\t\t});\n\t\t\t\t"], ["\n\t\t\t\t\t", " = @wrapTransition(#component, ", ", ", ", ", ", false, null);\n\t\t\t\t\t", ".run(false, function() {\n\t\t\t\t\t\t#component.fire(\"outro.end\", { node: ", " });\n\t\t\t\t\t\tif (--#outros === 0) #outrocallback();\n\t\t\t\t\t});\n\t\t\t\t"])), outroName, this["var"], fn, snippet, outroName, this["var"]));
            }
        }
    };
    Element.prototype.getStaticAttributeValue = function (name) {
        var attribute = this.attributes.find(function (attr) { return attr.type === 'Attribute' && attr.name.toLowerCase() === name; });
        if (!attribute)
            return null;
        if (attribute.value === true)
            return true;
        if (attribute.value.length === 0)
            return '';
        if (attribute.value.length === 1 && attribute.value[0].type === 'Text') {
            return attribute.value[0].data;
        }
        return null;
    };
    Element.prototype.isMediaNode = function () {
        return this.name === 'audio' || this.name === 'video';
    };
    Element.prototype.remount = function (name) {
        var slot = this.attributes.find(function (attribute) { return attribute.name === 'slot'; });
        if (slot) {
            return "@appendNode(" + this["var"] + ", " + name + "._slotted." + this.getStaticAttributeValue('slot') + ");";
        }
        return "@appendNode(" + this["var"] + ", " + name + "._slotted" + (this.generator.legacy ? "[\"default\"]" : ".default") + ");";
    };
    Element.prototype.addCssClass = function () {
        var classAttribute = this.attributes.find(function (a) { return a.name === 'class'; });
        if (classAttribute && classAttribute.value !== true) {
            if (classAttribute.value.length === 1 && classAttribute.value[0].type === 'Text') {
                classAttribute.value[0].data += " " + this.generator.stylesheet.id;
            }
            else {
                classAttribute.value.push(new Node$1({ type: 'Text', data: " " + this.generator.stylesheet.id }));
            }
        }
        else {
            this.attributes.push(new Attribute({
                generator: this.generator,
                name: 'class',
                value: [new Node$1({ type: 'Text', data: "" + this.generator.stylesheet.id })],
                parent: this
            }));
        }
    };
    return Element;
}(Node$1));
function getRenderStatement(generator, namespace, name) {
    if (namespace === 'http://www.w3.org/2000/svg') {
        return "@createSvgElement(\"" + name + "\")";
    }
    if (namespace) {
        return "document.createElementNS(\"" + namespace + "\", \"" + name + "\")";
    }
    return "@createElement(\"" + name + "\")";
}
function getClaimStatement(generator, namespace, nodes, node) {
    var attributes = node.attributes
        .filter(function (attr) { return attr.type === 'Attribute'; })
        .map(function (attr) { return quoteProp(attr.name, generator.legacy) + ": true"; })
        .join(', ');
    var name = namespace ? node.name : node.name.toUpperCase();
    return "@claimElement(" + nodes + ", \"" + name + "\", " + (attributes
        ? "{ " + attributes + " }"
        : "{}") + ", " + (namespace === svg ? true : false) + ")";
}
function quoteProp(name, legacy) {
    var isLegacyPropName = legacy && reservedNames.has(name);
    if (/[^a-zA-Z_$0-9]/.test(name) || isLegacyPropName)
        return "\"" + name + "\"";
    return name;
}
function stringifyAttributeValue(value) {
    if (value === true)
        return '';
    if (value.length === 0)
        return "=\"\"";
    var data = value[0].data;
    return "=" + JSON.stringify(data);
}
var events$1 = [
    {
        eventNames: ['input'],
        filter: function (node, name) {
            return node.name === 'textarea' ||
                node.name === 'input' && !/radio|checkbox/.test(node.getStaticAttributeValue('type'));
        }
    },
    {
        eventNames: ['change'],
        filter: function (node, name) {
            return node.name === 'select' ||
                node.name === 'input' && /radio|checkbox|range/.test(node.getStaticAttributeValue('type'));
        }
    },
    // media events
    {
        eventNames: ['timeupdate'],
        filter: function (node, name) {
            return node.isMediaNode() &&
                (name === 'currentTime' || name === 'played');
        }
    },
    {
        eventNames: ['durationchange'],
        filter: function (node, name) {
            return node.isMediaNode() &&
                name === 'duration';
        }
    },
    {
        eventNames: ['play', 'pause'],
        filter: function (node, name) {
            return node.isMediaNode() &&
                name === 'paused';
        }
    },
    {
        eventNames: ['progress'],
        filter: function (node, name) {
            return node.isMediaNode() &&
                name === 'buffered';
        }
    },
    {
        eventNames: ['loadedmetadata'],
        filter: function (node, name) {
            return node.isMediaNode() &&
                (name === 'buffered' || name === 'seekable');
        }
    },
    {
        eventNames: ['volumechange'],
        filter: function (node, name) {
            return node.isMediaNode() &&
                name === 'volume';
        }
    }
];
var templateObject_1$7;
var templateObject_2$7;
var templateObject_3$7;
var templateObject_4$7;
var templateObject_5$5;
var templateObject_6$5;
var templateObject_8$4;
var templateObject_7$4;
var templateObject_9$4;
var templateObject_10$4;
var templateObject_11$4;
var templateObject_12$4;
var templateObject_13$3;

var ElseBlock = /** @class */ (function (_super) {
    __extends(ElseBlock, _super);
    function ElseBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ElseBlock;
}(Node$1));

var EventHandler = /** @class */ (function (_super) {
    __extends(EventHandler, _super);
    function EventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventHandler;
}(Node$1));

var Block$2 = /** @class */ (function () {
    function Block(options) {
        this.generator = options.generator;
        this.name = options.name;
        this.expression = options.expression;
        this.context = options.context;
        this.destructuredContexts = options.destructuredContexts;
        this.comment = options.comment;
        // for keyed each blocks
        this.key = options.key;
        this.first = null;
        this.contexts = options.contexts;
        this.contextTypes = options.contextTypes;
        this.indexes = options.indexes;
        this.changeableIndexes = options.changeableIndexes;
        this.dependencies = new Set();
        this.indexNames = options.indexNames;
        this.listNames = options.listNames;
        this.builders = {
            init: new CodeBuilder(),
            create: new CodeBuilder(),
            claim: new CodeBuilder(),
            hydrate: new CodeBuilder(),
            mount: new CodeBuilder(),
            intro: new CodeBuilder(),
            update: new CodeBuilder(),
            outro: new CodeBuilder(),
            unmount: new CodeBuilder(),
            detachRaw: new CodeBuilder(),
            destroy: new CodeBuilder()
        };
        this.hasIntroMethod = false; // a block could have an intro method but not intro transitions, e.g. if a sibling block has intros
        this.hasOutroMethod = false;
        this.outros = 0;
        this.getUniqueName = this.generator.getUniqueNameMaker();
        this.variables = new Map();
        this.aliases = new Map()
            .set('component', this.getUniqueName('component'))
            .set('state', this.getUniqueName('state'));
        if (this.key)
            this.aliases.set('key', this.getUniqueName('key'));
        this.hasUpdateMethod = false; // determined later
    }
    Block.prototype.addDependencies = function (dependencies) {
        var _this = this;
        dependencies.forEach(function (dependency) {
            _this.dependencies.add(dependency);
        });
    };
    Block.prototype.addElement = function (name, renderStatement, claimStatement, parentNode) {
        this.addVariable(name);
        this.builders.create.addLine(name + " = " + renderStatement + ";");
        this.builders.claim.addLine(name + " = " + (claimStatement || renderStatement) + ";");
        if (parentNode) {
            this.builders.mount.addLine("@appendNode(" + name + ", " + parentNode + ");");
            if (parentNode === 'document.head')
                this.builders.unmount.addLine("@detachNode(" + name + ");");
        }
        else {
            this.builders.mount.addLine("@insertNode(" + name + ", #target, anchor);");
            this.builders.unmount.addLine("@detachNode(" + name + ");");
        }
    };
    Block.prototype.addVariable = function (name, init) {
        if (this.variables.has(name) && this.variables.get(name) !== init) {
            throw new Error("Variable '" + name + "' already initialised with a different value");
        }
        this.variables.set(name, init);
    };
    Block.prototype.alias = function (name) {
        if (!this.aliases.has(name)) {
            this.aliases.set(name, this.getUniqueName(name));
        }
        return this.aliases.get(name);
    };
    Block.prototype.child = function (options) {
        return new Block(Object.assign({}, this, { key: null }, options, { parent: this }));
    };
    Block.prototype.contextualise = function (expression, context, isEventHandler) {
        return this.generator.contextualise(this.contexts, this.indexes, expression, context, isEventHandler);
    };
    Block.prototype.toString = function () {
        var _this = this;
        var introing;
        var hasIntros = !this.builders.intro.isEmpty();
        if (hasIntros) {
            introing = this.getUniqueName('introing');
            this.addVariable(introing);
        }
        var outroing;
        var hasOutros = !this.builders.outro.isEmpty();
        if (hasOutros) {
            outroing = this.alias('outroing');
            this.addVariable(outroing);
        }
        if (this.autofocus) {
            this.builders.mount.addLine(this.autofocus + ".focus();");
        }
        // TODO `this.contexts` is possibly redundant post-#1122
        var initializers = [];
        this.contexts.forEach(function (name, context) {
            // TODO only the ones that are actually used in this block...
            var listName = _this.listNames.get(context);
            var indexName = _this.indexNames.get(context);
            initializers.push(name + " = state." + context, listName + " = state." + listName, indexName + " = state." + indexName);
            _this.hasUpdateMethod = true;
        });
        // minor hack – we need to ensure that any {{{triples}}} are detached first
        this.builders.unmount.addBlockAtStart(this.builders.detachRaw.toString());
        var properties = new CodeBuilder();
        var localKey;
        if (this.key) {
            localKey = this.getUniqueName('key');
            properties.addBlock("key: " + localKey + ",");
        }
        if (this.first) {
            properties.addBlock("first: null,");
            this.builders.hydrate.addLine("this.first = " + this.first + ";");
        }
        if (this.builders.create.isEmpty() && this.builders.hydrate.isEmpty()) {
            properties.addBlock("c: @noop,");
        }
        else {
            properties.addBlock(deindent(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n\t\t\t\tc: function create() {\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t},\n\t\t\t"], ["\n\t\t\t\tc: function create() {\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t},\n\t\t\t"])), this.builders.create, !this.builders.hydrate.isEmpty() && "this.h();"));
        }
        if (this.generator.hydratable) {
            if (this.builders.claim.isEmpty() && this.builders.hydrate.isEmpty()) {
                properties.addBlock("l: @noop,");
            }
            else {
                properties.addBlock(deindent(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n\t\t\t\t\tl: function claim(nodes) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t},\n\t\t\t\t"], ["\n\t\t\t\t\tl: function claim(nodes) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t},\n\t\t\t\t"])), this.builders.claim, !this.builders.hydrate.isEmpty() && "this.h();"));
            }
        }
        if (!this.builders.hydrate.isEmpty()) {
            properties.addBlock(deindent(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n\t\t\t\th: function hydrate() {\n\t\t\t\t\t", "\n\t\t\t\t},\n\t\t\t"], ["\n\t\t\t\th: function hydrate() {\n\t\t\t\t\t", "\n\t\t\t\t},\n\t\t\t"])), this.builders.hydrate));
        }
        if (this.builders.mount.isEmpty()) {
            properties.addBlock("m: @noop,");
        }
        else {
            properties.addBlock(deindent(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n\t\t\t\tm: function mount(#target, anchor) {\n\t\t\t\t\t", "\n\t\t\t\t},\n\t\t\t"], ["\n\t\t\t\tm: function mount(#target, anchor) {\n\t\t\t\t\t", "\n\t\t\t\t},\n\t\t\t"])), this.builders.mount));
        }
        if (this.hasUpdateMethod) {
            if (this.builders.update.isEmpty() && initializers.length === 0) {
                properties.addBlock("p: @noop,");
            }
            else {
                properties.addBlock(deindent(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n\t\t\t\t\tp: function update(changed, state) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t},\n\t\t\t\t"], ["\n\t\t\t\t\tp: function update(changed, state) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t},\n\t\t\t\t"])), initializers.map(function (str) { return str + ";"; }), this.builders.update));
            }
        }
        if (this.hasIntroMethod) {
            if (hasIntros) {
                properties.addBlock(deindent(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["\n\t\t\t\t\ti: function intro(#target, anchor) {\n\t\t\t\t\t\tif (", ") return;\n\t\t\t\t\t\t", " = true;\n\t\t\t\t\t\t", "\n\n\t\t\t\t\t\t", "\n\n\t\t\t\t\t\tthis.m(#target, anchor);\n\t\t\t\t\t},\n\t\t\t\t"], ["\n\t\t\t\t\ti: function intro(#target, anchor) {\n\t\t\t\t\t\tif (", ") return;\n\t\t\t\t\t\t", " = true;\n\t\t\t\t\t\t", "\n\n\t\t\t\t\t\t", "\n\n\t\t\t\t\t\tthis.m(#target, anchor);\n\t\t\t\t\t},\n\t\t\t\t"])), introing, introing, hasOutros && outroing + " = false;", this.builders.intro));
            }
            else {
                properties.addBlock(deindent(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["\n\t\t\t\t\ti: function intro(#target, anchor) {\n\t\t\t\t\t\tthis.m(#target, anchor);\n\t\t\t\t\t},\n\t\t\t\t"], ["\n\t\t\t\t\ti: function intro(#target, anchor) {\n\t\t\t\t\t\tthis.m(#target, anchor);\n\t\t\t\t\t},\n\t\t\t\t"]))));
            }
        }
        if (this.hasOutroMethod) {
            if (hasOutros) {
                properties.addBlock(deindent(templateObject_8$5 || (templateObject_8$5 = __makeTemplateObject(["\n\t\t\t\t\to: function outro(#outrocallback) {\n\t\t\t\t\t\tif (", ") return;\n\t\t\t\t\t\t", " = true;\n\t\t\t\t\t\t", "\n\n\t\t\t\t\t\tvar #outros = ", ";\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t},\n\t\t\t\t"], ["\n\t\t\t\t\to: function outro(#outrocallback) {\n\t\t\t\t\t\tif (", ") return;\n\t\t\t\t\t\t", " = true;\n\t\t\t\t\t\t", "\n\n\t\t\t\t\t\tvar #outros = ", ";\n\n\t\t\t\t\t\t", "\n\t\t\t\t\t},\n\t\t\t\t"])), outroing, outroing, hasIntros && introing + " = false;", this.outros, this.builders.outro));
            }
            else {
                properties.addBlock(deindent(templateObject_9$5 || (templateObject_9$5 = __makeTemplateObject(["\n\t\t\t\t\to: @run,\n\t\t\t\t"], ["\n\t\t\t\t\to: @run,\n\t\t\t\t"]))));
            }
        }
        if (this.builders.unmount.isEmpty()) {
            properties.addBlock("u: @noop,");
        }
        else {
            properties.addBlock(deindent(templateObject_10$5 || (templateObject_10$5 = __makeTemplateObject(["\n\t\t\t\tu: function unmount() {\n\t\t\t\t\t", "\n\t\t\t\t},\n\t\t\t"], ["\n\t\t\t\tu: function unmount() {\n\t\t\t\t\t", "\n\t\t\t\t},\n\t\t\t"])), this.builders.unmount));
        }
        if (this.builders.destroy.isEmpty()) {
            properties.addBlock("d: @noop");
        }
        else {
            properties.addBlock(deindent(templateObject_11$5 || (templateObject_11$5 = __makeTemplateObject(["\n\t\t\t\td: function destroy() {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\td: function destroy() {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), this.builders.destroy));
        }
        return deindent(templateObject_12$5 || (templateObject_12$5 = __makeTemplateObject(["\n\t\t\t", "\n\t\t\tfunction ", "(#component", ", state) {\n\t\t\t\t", "\n\t\t\t\t", "\n\n\t\t\t\t", "\n\n\t\t\t\treturn {\n\t\t\t\t\t", "\n\t\t\t\t};\n\t\t\t}\n\t\t"], ["\n\t\t\t", "\n\t\t\tfunction ", "(#component", ", state) {\n\t\t\t\t",
            "\n\t\t\t\t",
            "\n\n\t\t\t\t", "\n\n\t\t\t\treturn {\n\t\t\t\t\t", "\n\t\t\t\t};\n\t\t\t}\n\t\t"])), this.comment && "// " + escape(this.comment), this.name, this.key ? ", " + localKey : '', initializers.length > 0 &&
            "var " + initializers.join(', ') + ";", this.variables.size > 0 &&
            "var " + Array.from(this.variables.keys())
                .map(function (key) {
                var init = _this.variables.get(key);
                return init !== undefined ? key + " = " + init : key;
            })
                .join(', ') + ";", !this.builders.init.isEmpty() && this.builders.init, properties).replace(/(#+)(\w*)/g, function (match, sigil, name) {
            return sigil === '#' ? _this.alias(name) : sigil.slice(1) + name;
        });
    };
    return Block;
}());
var templateObject_1$8;
var templateObject_2$8;
var templateObject_3$8;
var templateObject_4$8;
var templateObject_5$6;
var templateObject_6$6;
var templateObject_7$5;
var templateObject_8$5;
var templateObject_9$5;
var templateObject_10$5;
var templateObject_11$5;
var templateObject_12$5;

var Fragment = /** @class */ (function (_super) {
    __extends(Fragment, _super);
    function Fragment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fragment.prototype.init = function () {
        this.block = new Block$2({
            generator: this.generator,
            name: '@create_main_fragment',
            key: null,
            contexts: new Map(),
            indexes: new Map(),
            changeableIndexes: new Map(),
            indexNames: new Map(),
            listNames: new Map(),
            dependencies: new Set()
        });
        this.generator.blocks.push(this.block);
        this.initChildren(this.block, true, null);
        this.block.hasUpdateMethod = true;
    };
    Fragment.prototype.build = function () {
        var _this = this;
        this.init();
        this.children.forEach(function (child) {
            child.build(_this.block, null, 'nodes');
        });
    };
    return Fragment;
}(Node$1));

var Head = /** @class */ (function (_super) {
    __extends(Head, _super);
    function Head() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Head.prototype.init = function (block, stripWhitespace, nextSibling) {
        this.initChildren(block, true, null);
    };
    Head.prototype.build = function (block, parentNode, parentNodes) {
        this["var"] = 'document.head';
        this.children.forEach(function (child) {
            child.build(block, 'document.head', null);
        });
    };
    return Head;
}(Node$1));

function isElseIf(node) {
    return (node && node.children.length === 1 && node.children[0].type === 'IfBlock');
}
function isElseBranch(branch) {
    return branch.block && !branch.condition;
}
var IfBlock = /** @class */ (function (_super) {
    __extends(IfBlock, _super);
    function IfBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IfBlock.prototype.init = function (block, stripWhitespace, nextSibling) {
        var generator = this.generator;
        this.cannotUseInnerHTML();
        var blocks = [];
        var dynamic = false;
        var hasIntros = false;
        var hasOutros = false;
        function attachBlocks(node) {
            node["var"] = block.getUniqueName("if_block");
            block.addDependencies(node.metadata.dependencies);
            node.block = block.child({
                comment: createDebuggingComment(node, generator),
                name: generator.getUniqueName("create_if_block")
            });
            blocks.push(node.block);
            node.initChildren(node.block, stripWhitespace, nextSibling);
            if (node.block.dependencies.size > 0) {
                dynamic = true;
                block.addDependencies(node.block.dependencies);
            }
            if (node.block.hasIntroMethod)
                hasIntros = true;
            if (node.block.hasOutroMethod)
                hasOutros = true;
            if (isElseIf(node["else"])) {
                attachBlocks(node["else"].children[0]);
            }
            else if (node["else"]) {
                node["else"].block = block.child({
                    comment: createDebuggingComment(node["else"], generator),
                    name: generator.getUniqueName("create_if_block")
                });
                blocks.push(node["else"].block);
                node["else"].initChildren(node["else"].block, stripWhitespace, nextSibling);
                if (node["else"].block.dependencies.size > 0) {
                    dynamic = true;
                    block.addDependencies(node["else"].block.dependencies);
                }
            }
        }
        attachBlocks(this);
        blocks.forEach(function (block) {
            block.hasUpdateMethod = dynamic;
            block.hasIntroMethod = hasIntros;
            block.hasOutroMethod = hasOutros;
        });
        (_a = generator.blocks).push.apply(_a, blocks);
        var _a;
    };
    IfBlock.prototype.build = function (block, parentNode, parentNodes) {
        var name = this["var"];
        var needsAnchor = this.next ? !this.next.isDomNode() : !parentNode || !this.parent.isDomNode();
        var anchor = needsAnchor
            ? block.getUniqueName(name + "_anchor")
            : (this.next && this.next["var"]) || 'null';
        var branches = this.getBranches(block, parentNode, parentNodes, this);
        var hasElse = isElseBranch(branches[branches.length - 1]);
        var if_name = hasElse ? '' : "if (" + name + ") ";
        var dynamic = branches[0].hasUpdateMethod; // can use [0] as proxy for all, since they necessarily have the same value
        var hasOutros = branches[0].hasOutroMethod;
        var vars = { name: name, anchor: anchor, if_name: if_name, hasElse: hasElse };
        if (this["else"]) {
            if (hasOutros) {
                this.buildCompoundWithOutros(block, parentNode, parentNodes, branches, dynamic, vars);
            }
            else {
                this.buildCompound(block, parentNode, parentNodes, branches, dynamic, vars);
            }
        }
        else {
            this.buildSimple(block, parentNode, parentNodes, branches[0], dynamic, vars);
        }
        block.builders.create.addLine("" + if_name + name + ".c();");
        if (parentNodes) {
            block.builders.claim.addLine("" + if_name + name + ".l(" + parentNodes + ");");
        }
        if (needsAnchor) {
            block.addElement(anchor, "@createComment()", parentNodes && "@createComment()", parentNode);
        }
    };
    IfBlock.prototype.buildCompound = function (block, parentNode, parentNodes, branches, dynamic, _a) {
        var name = _a.name, anchor = _a.anchor, hasElse = _a.hasElse, if_name = _a.if_name;
        var select_block_type = this.generator.getUniqueName("select_block_type");
        var current_block_type = block.getUniqueName("current_block_type");
        var current_block_type_and = hasElse ? '' : current_block_type + " && ";
        block.builders.init.addBlock(deindent(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n\t\t\tfunction ", "(state) {\n\t\t\t\t", "\n\t\t\t}\n\t\t"], ["\n\t\t\tfunction ", "(state) {\n\t\t\t\t",
            "\n\t\t\t}\n\t\t"])), select_block_type, branches
            .map(function (_a) {
            var condition = _a.condition, block = _a.block;
            return (condition ? "if (" + condition + ") " : '') + "return " + block + ";";
        })
            .join('\n')));
        block.builders.init.addBlock(deindent(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n\t\t\tvar ", " = ", "(state);\n\t\t\tvar ", " = ", "", "(#component, state);\n\t\t"], ["\n\t\t\tvar ", " = ", "(state);\n\t\t\tvar ", " = ", "", "(#component, state);\n\t\t"])), current_block_type, select_block_type, name, current_block_type_and, current_block_type));
        var mountOrIntro = branches[0].hasIntroMethod ? 'i' : 'm';
        var initialMountNode = parentNode || '#target';
        var anchorNode = parentNode ? 'null' : 'anchor';
        block.builders.mount.addLine("" + if_name + name + "." + mountOrIntro + "(" + initialMountNode + ", " + anchorNode + ");");
        var updateMountNode = this.getUpdateMountNode(anchor);
        var changeBlock = deindent(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n\t\t\t", "\n\t\t\t", " = ", "", "(#component, state);\n\t\t\t", "", ".c();\n\t\t\t", "", ".", "(", ", ", ");\n\t\t"], ["\n\t\t\t",
            "\n\t\t\t", " = ", "", "(#component, state);\n\t\t\t", "", ".c();\n\t\t\t", "", ".", "(", ", ", ");\n\t\t"])), hasElse
            ? deindent(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n\t\t\t\t\t", ".u();\n\t\t\t\t\t", ".d();\n\t\t\t\t"], ["\n\t\t\t\t\t", ".u();\n\t\t\t\t\t", ".d();\n\t\t\t\t"])), name, name) : deindent(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t", ".u();\n\t\t\t\t\t\t", ".d();\n\t\t\t\t\t}"], ["\n\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t", ".u();\n\t\t\t\t\t\t", ".d();\n\t\t\t\t\t}"])), name, name, name), name, current_block_type_and, current_block_type, if_name, name, if_name, name, mountOrIntro, updateMountNode, anchor);
        if (dynamic) {
            block.builders.update.addBlock(deindent(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["\n\t\t\t\tif (", " === (", " = ", "(state)) && ", ") {\n\t\t\t\t\t", ".p(changed, state);\n\t\t\t\t} else {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tif (", " === (", " = ", "(state)) && ", ") {\n\t\t\t\t\t", ".p(changed, state);\n\t\t\t\t} else {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), current_block_type, current_block_type, select_block_type, name, name, changeBlock));
        }
        else {
            block.builders.update.addBlock(deindent(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["\n\t\t\t\tif (", " !== (", " = ", "(state))) {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tif (", " !== (", " = ", "(state))) {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), current_block_type, current_block_type, select_block_type, changeBlock));
        }
        block.builders.unmount.addLine("" + if_name + name + ".u();");
        block.builders.destroy.addLine("" + if_name + name + ".d();");
    };
    // if any of the siblings have outros, we need to keep references to the blocks
    // (TODO does this only apply to bidi transitions?)
    IfBlock.prototype.buildCompoundWithOutros = function (block, parentNode, parentNodes, branches, dynamic, _a) {
        var name = _a.name, anchor = _a.anchor, hasElse = _a.hasElse;
        var select_block_type = block.getUniqueName("select_block_type");
        var current_block_type_index = block.getUniqueName("current_block_type_index");
        var previous_block_index = block.getUniqueName("previous_block_index");
        var if_block_creators = block.getUniqueName("if_block_creators");
        var if_blocks = block.getUniqueName("if_blocks");
        var if_current_block_type_index = hasElse
            ? ''
            : "if (~" + current_block_type_index + ") ";
        block.addVariable(current_block_type_index);
        block.addVariable(name);
        block.builders.init.addBlock(deindent(templateObject_8$6 || (templateObject_8$6 = __makeTemplateObject(["\n\t\t\tvar ", " = [\n\t\t\t\t", "\n\t\t\t];\n\n\t\t\tvar ", " = [];\n\n\t\t\tfunction ", "(state) {\n\t\t\t\t", "\n\t\t\t}\n\t\t"], ["\n\t\t\tvar ", " = [\n\t\t\t\t", "\n\t\t\t];\n\n\t\t\tvar ", " = [];\n\n\t\t\tfunction ", "(state) {\n\t\t\t\t",
            "\n\t\t\t}\n\t\t"])), if_block_creators, branches.map(function (branch) { return branch.block; }).join(',\n'), if_blocks, select_block_type, branches
            .map(function (_a, i) {
            var condition = _a.condition, block = _a.block;
            return (condition ? "if (" + condition + ") " : '') + "return " + (block ? i : -1) + ";";
        })
            .join('\n')));
        if (hasElse) {
            block.builders.init.addBlock(deindent(templateObject_9$6 || (templateObject_9$6 = __makeTemplateObject(["\n\t\t\t\t", " = ", "(state);\n\t\t\t\t", " = ", "[", "] = ", "[", "](#component, state);\n\t\t\t"], ["\n\t\t\t\t", " = ", "(state);\n\t\t\t\t", " = ", "[", "] = ", "[", "](#component, state);\n\t\t\t"])), current_block_type_index, select_block_type, name, if_blocks, current_block_type_index, if_block_creators, current_block_type_index));
        }
        else {
            block.builders.init.addBlock(deindent(templateObject_10$6 || (templateObject_10$6 = __makeTemplateObject(["\n\t\t\t\tif (~(", " = ", "(state))) {\n\t\t\t\t\t", " = ", "[", "] = ", "[", "](#component, state);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tif (~(", " = ", "(state))) {\n\t\t\t\t\t", " = ", "[", "] = ", "[", "](#component, state);\n\t\t\t\t}\n\t\t\t"])), current_block_type_index, select_block_type, name, if_blocks, current_block_type_index, if_block_creators, current_block_type_index));
        }
        var mountOrIntro = branches[0].hasIntroMethod ? 'i' : 'm';
        var initialMountNode = parentNode || '#target';
        var anchorNode = parentNode ? 'null' : 'anchor';
        block.builders.mount.addLine("" + if_current_block_type_index + if_blocks + "[" + current_block_type_index + "]." + mountOrIntro + "(" + initialMountNode + ", " + anchorNode + ");");
        var updateMountNode = this.getUpdateMountNode(anchor);
        var destroyOldBlock = deindent(templateObject_11$6 || (templateObject_11$6 = __makeTemplateObject(["\n\t\t\t", ".o(function() {\n\t\t\t\t", "[ ", " ].u();\n\t\t\t\t", "[ ", " ].d();\n\t\t\t\t", "[ ", " ] = null;\n\t\t\t});\n\t\t"], ["\n\t\t\t", ".o(function() {\n\t\t\t\t", "[ ", " ].u();\n\t\t\t\t", "[ ", " ].d();\n\t\t\t\t", "[ ", " ] = null;\n\t\t\t});\n\t\t"])), name, if_blocks, previous_block_index, if_blocks, previous_block_index, if_blocks, previous_block_index);
        var createNewBlock = deindent(templateObject_12$6 || (templateObject_12$6 = __makeTemplateObject(["\n\t\t\t", " = ", "[", "];\n\t\t\tif (!", ") {\n\t\t\t\t", " = ", "[", "] = ", "[", "](#component, state);\n\t\t\t\t", ".c();\n\t\t\t}\n\t\t\t", ".", "(", ", ", ");\n\t\t"], ["\n\t\t\t", " = ", "[", "];\n\t\t\tif (!", ") {\n\t\t\t\t", " = ", "[", "] = ", "[", "](#component, state);\n\t\t\t\t", ".c();\n\t\t\t}\n\t\t\t", ".", "(", ", ", ");\n\t\t"])), name, if_blocks, current_block_type_index, name, name, if_blocks, current_block_type_index, if_block_creators, current_block_type_index, name, name, mountOrIntro, updateMountNode, anchor);
        var changeBlock = hasElse
            ? deindent(templateObject_13$4 || (templateObject_13$4 = __makeTemplateObject(["\n\t\t\t\t", "\n\n\t\t\t\t", "\n\t\t\t"], ["\n\t\t\t\t", "\n\n\t\t\t\t", "\n\t\t\t"])), destroyOldBlock, createNewBlock) : deindent(templateObject_14$3 || (templateObject_14$3 = __makeTemplateObject(["\n\t\t\t\tif (", ") {\n\t\t\t\t\t", "\n\t\t\t\t}\n\n\t\t\t\tif (~", ") {\n\t\t\t\t\t", "\n\t\t\t\t} else {\n\t\t\t\t\t", " = null;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tif (", ") {\n\t\t\t\t\t", "\n\t\t\t\t}\n\n\t\t\t\tif (~", ") {\n\t\t\t\t\t", "\n\t\t\t\t} else {\n\t\t\t\t\t", " = null;\n\t\t\t\t}\n\t\t\t"])), name, destroyOldBlock, current_block_type_index, createNewBlock, name);
        if (dynamic) {
            block.builders.update.addBlock(deindent(templateObject_15$3 || (templateObject_15$3 = __makeTemplateObject(["\n\t\t\t\tvar ", " = ", ";\n\t\t\t\t", " = ", "(state);\n\t\t\t\tif (", " === ", ") {\n\t\t\t\t\t", "", "[", "].p(changed, state);\n\t\t\t\t} else {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tvar ", " = ", ";\n\t\t\t\t", " = ", "(state);\n\t\t\t\tif (", " === ", ") {\n\t\t\t\t\t", "", "[", "].p(changed, state);\n\t\t\t\t} else {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), previous_block_index, current_block_type_index, current_block_type_index, select_block_type, current_block_type_index, previous_block_index, if_current_block_type_index, if_blocks, current_block_type_index, changeBlock));
        }
        else {
            block.builders.update.addBlock(deindent(templateObject_16$3 || (templateObject_16$3 = __makeTemplateObject(["\n\t\t\t\tvar ", " = ", ";\n\t\t\t\t", " = ", "(state);\n\t\t\t\tif (", " !== ", ") {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tvar ", " = ", ";\n\t\t\t\t", " = ", "(state);\n\t\t\t\tif (", " !== ", ") {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), previous_block_index, current_block_type_index, current_block_type_index, select_block_type, current_block_type_index, previous_block_index, changeBlock));
        }
        block.builders.destroy.addLine(deindent(templateObject_17$3 || (templateObject_17$3 = __makeTemplateObject(["\n\t\t\t", "{\n\t\t\t\t", "[", "].u();\n\t\t\t\t", "[", "].d();\n\t\t\t}\n\t\t"], ["\n\t\t\t", "{\n\t\t\t\t", "[", "].u();\n\t\t\t\t", "[", "].d();\n\t\t\t}\n\t\t"])), if_current_block_type_index, if_blocks, current_block_type_index, if_blocks, current_block_type_index));
    };
    IfBlock.prototype.buildSimple = function (block, parentNode, parentNodes, branch, dynamic, _a) {
        var name = _a.name, anchor = _a.anchor, if_name = _a.if_name;
        block.builders.init.addBlock(deindent(templateObject_18$3 || (templateObject_18$3 = __makeTemplateObject(["\n\t\t\tvar ", " = (", ") && ", "(#component, state);\n\t\t"], ["\n\t\t\tvar ", " = (", ") && ", "(#component, state);\n\t\t"])), name, branch.condition, branch.block));
        var mountOrIntro = branch.hasIntroMethod ? 'i' : 'm';
        var initialMountNode = parentNode || '#target';
        var anchorNode = parentNode ? 'null' : 'anchor';
        block.builders.mount.addLine("if (" + name + ") " + name + "." + mountOrIntro + "(" + initialMountNode + ", " + anchorNode + ");");
        var updateMountNode = this.getUpdateMountNode(anchor);
        var enter = dynamic
            ? branch.hasIntroMethod
                ? deindent(templateObject_19$3 || (templateObject_19$3 = __makeTemplateObject(["\n\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t", ".p(changed, state);\n\t\t\t\t\t} else {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\tif (", ") ", ".c();\n\t\t\t\t\t}\n\n\t\t\t\t\t", ".i(", ", ", ");\n\t\t\t\t"], ["\n\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t", ".p(changed, state);\n\t\t\t\t\t} else {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\tif (", ") ", ".c();\n\t\t\t\t\t}\n\n\t\t\t\t\t", ".i(", ", ", ");\n\t\t\t\t"])), name, name, name, branch.block, name, name, name, updateMountNode, anchor) : deindent(templateObject_20$1 || (templateObject_20$1 = __makeTemplateObject(["\n\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t", ".p(changed, state);\n\t\t\t\t\t} else {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t\t", ".m(", ", ", ");\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tif (", ") {\n\t\t\t\t\t\t", ".p(changed, state);\n\t\t\t\t\t} else {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t\t", ".m(", ", ", ");\n\t\t\t\t\t}\n\t\t\t\t"])), name, name, name, branch.block, name, name, updateMountNode, anchor)
            : branch.hasIntroMethod
                ? deindent(templateObject_21$1 || (templateObject_21$1 = __makeTemplateObject(["\n\t\t\t\t\tif (!", ") {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t}\n\t\t\t\t\t", ".i(", ", ", ");\n\t\t\t\t"], ["\n\t\t\t\t\tif (!", ") {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t}\n\t\t\t\t\t", ".i(", ", ", ");\n\t\t\t\t"])), name, name, branch.block, name, name, updateMountNode, anchor) : deindent(templateObject_22$1 || (templateObject_22$1 = __makeTemplateObject(["\n\t\t\t\t\tif (!", ") {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t\t", ".m(", ", ", ");\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tif (!", ") {\n\t\t\t\t\t\t", " = ", "(#component, state);\n\t\t\t\t\t\t", ".c();\n\t\t\t\t\t\t", ".m(", ", ", ");\n\t\t\t\t\t}\n\t\t\t\t"])), name, name, branch.block, name, name, updateMountNode, anchor);
        // no `p()` here — we don't want to update outroing nodes,
        // as that will typically result in glitching
        var exit = branch.hasOutroMethod
            ? deindent(templateObject_23$1 || (templateObject_23$1 = __makeTemplateObject(["\n\t\t\t\t", ".o(function() {\n\t\t\t\t\t", ".u();\n\t\t\t\t\t", ".d();\n\t\t\t\t\t", " = null;\n\t\t\t\t});\n\t\t\t"], ["\n\t\t\t\t", ".o(function() {\n\t\t\t\t\t", ".u();\n\t\t\t\t\t", ".d();\n\t\t\t\t\t", " = null;\n\t\t\t\t});\n\t\t\t"])), name, name, name, name) : deindent(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n\t\t\t\t", ".u();\n\t\t\t\t", ".d();\n\t\t\t\t", " = null;\n\t\t\t"], ["\n\t\t\t\t", ".u();\n\t\t\t\t", ".d();\n\t\t\t\t", " = null;\n\t\t\t"])), name, name, name);
        block.builders.update.addBlock(deindent(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n\t\t\tif (", ") {\n\t\t\t\t", "\n\t\t\t} else if (", ") {\n\t\t\t\t", "\n\t\t\t}\n\t\t"], ["\n\t\t\tif (", ") {\n\t\t\t\t", "\n\t\t\t} else if (", ") {\n\t\t\t\t", "\n\t\t\t}\n\t\t"])), branch.condition, enter, name, exit));
        block.builders.unmount.addLine("" + if_name + name + ".u();");
        block.builders.destroy.addLine("" + if_name + name + ".d();");
    };
    IfBlock.prototype.getBranches = function (block, parentNode, parentNodes, node) {
        block.contextualise(node.expression); // TODO remove
        var branches = [
            {
                condition: node.metadata.snippet,
                block: node.block.name,
                hasUpdateMethod: node.block.hasUpdateMethod,
                hasIntroMethod: node.block.hasIntroMethod,
                hasOutroMethod: node.block.hasOutroMethod
            },
        ];
        this.visitChildren(block, node);
        if (isElseIf(node["else"])) {
            branches.push.apply(branches, this.getBranches(block, parentNode, parentNodes, node["else"].children[0]));
        }
        else {
            branches.push({
                condition: null,
                block: node["else"] ? node["else"].block.name : null,
                hasUpdateMethod: node["else"] ? node["else"].block.hasUpdateMethod : false,
                hasIntroMethod: node["else"] ? node["else"].block.hasIntroMethod : false,
                hasOutroMethod: node["else"] ? node["else"].block.hasOutroMethod : false
            });
            if (node["else"]) {
                this.visitChildren(block, node["else"]);
            }
        }
        return branches;
    };
    IfBlock.prototype.visitChildren = function (block, node) {
        node.children.forEach(function (child) {
            child.build(node.block, null, 'nodes');
        });
    };
    return IfBlock;
}(Node$1));
var templateObject_1$9;
var templateObject_2$9;
var templateObject_4$9;
var templateObject_5$7;
var templateObject_3$9;
var templateObject_6$7;
var templateObject_7$6;
var templateObject_8$6;
var templateObject_9$6;
var templateObject_10$6;
var templateObject_11$6;
var templateObject_12$6;
var templateObject_13$4;
var templateObject_14$3;
var templateObject_15$3;
var templateObject_16$3;
var templateObject_17$3;
var templateObject_18$3;
var templateObject_19$3;
var templateObject_20$1;
var templateObject_21$1;
var templateObject_22$1;
var templateObject_23$1;
var templateObject_24;
var templateObject_25;

var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.renameThisMethod = function (block, update) {
        var indexes = block.contextualise(this.expression).indexes;
        var _a = this.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
        var hasChangeableIndex = Array.from(indexes).some(function (index) { return block.changeableIndexes.get(index); });
        var shouldCache = (this.expression.type !== 'Identifier' ||
            block.contexts.has(this.expression.name) ||
            hasChangeableIndex);
        var value = shouldCache && block.getUniqueName(this["var"] + "_value");
        var content = shouldCache ? value : snippet;
        if (shouldCache)
            block.addVariable(value, snippet);
        if (dependencies.length || hasChangeableIndex) {
            var changedCheck = ((block.hasOutroMethod ? "#outroing || " : '') +
                dependencies.map(function (dependency) { return "changed." + dependency; }).join(' || '));
            var updateCachedValue = value + " !== (" + value + " = " + snippet + ")";
            var condition = shouldCache ?
                (dependencies.length ? "(" + changedCheck + ") && " + updateCachedValue : updateCachedValue) :
                changedCheck;
            block.builders.update.addConditional(condition, update(content));
        }
        return { init: content };
    };
    return Tag;
}(Node$1));

var MustacheTag = /** @class */ (function (_super) {
    __extends(MustacheTag, _super);
    function MustacheTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MustacheTag.prototype.init = function (block) {
        this.cannotUseInnerHTML();
        this["var"] = block.getUniqueName('text');
        block.addDependencies(this.metadata.dependencies);
    };
    MustacheTag.prototype.build = function (block, parentNode, parentNodes) {
        var _this = this;
        var init = this.renameThisMethod(block, function (value) { return _this["var"] + ".data = " + value + ";"; }).init;
        block.addElement(this["var"], "@createText(" + init + ")", parentNodes && "@claimText(" + parentNodes + ", " + init + ")", parentNode);
    };
    MustacheTag.prototype.remount = function (name) {
        return "@appendNode(" + this["var"] + ", " + name + "._slotted" + (this.generator.legacy ? "[\"default\"]" : ".default") + ");";
    };
    return MustacheTag;
}(Tag));

var PendingBlock = /** @class */ (function (_super) {
    __extends(PendingBlock, _super);
    function PendingBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PendingBlock;
}(Node$1));

var RawMustacheTag = /** @class */ (function (_super) {
    __extends(RawMustacheTag, _super);
    function RawMustacheTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawMustacheTag.prototype.init = function (block) {
        this.cannotUseInnerHTML();
        this["var"] = block.getUniqueName('raw');
        block.addDependencies(this.metadata.dependencies);
    };
    RawMustacheTag.prototype.build = function (block, parentNode, parentNodes) {
        var name = this["var"];
        var needsAnchorBefore = this.prev ? this.prev.type !== 'Element' : !parentNode;
        var needsAnchorAfter = this.next ? this.next.type !== 'Element' : !parentNode;
        var anchorBefore = needsAnchorBefore
            ? block.getUniqueName(name + "_before")
            : (this.prev && this.prev["var"]) || 'null';
        var anchorAfter = needsAnchorAfter
            ? block.getUniqueName(name + "_after")
            : (this.next && this.next["var"]) || 'null';
        var detach;
        var insert;
        var useInnerHTML = false;
        if (anchorBefore === 'null' && anchorAfter === 'null') {
            useInnerHTML = true;
            detach = parentNode + ".innerHTML = '';";
            insert = function (content) { return parentNode + ".innerHTML = " + content + ";"; };
        }
        else if (anchorBefore === 'null') {
            detach = "@detachBefore(" + anchorAfter + ");";
            insert = function (content) { return anchorAfter + ".insertAdjacentHTML(\"beforebegin\", " + content + ");"; };
        }
        else if (anchorAfter === 'null') {
            detach = "@detachAfter(" + anchorBefore + ");";
            insert = function (content) { return anchorBefore + ".insertAdjacentHTML(\"afterend\", " + content + ");"; };
        }
        else {
            detach = "@detachBetween(" + anchorBefore + ", " + anchorAfter + ");";
            insert = function (content) { return anchorBefore + ".insertAdjacentHTML(\"afterend\", " + content + ");"; };
        }
        var init = this.renameThisMethod(block, function (content) { return deindent(templateObject_1$10 || (templateObject_1$10 = __makeTemplateObject(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"], ["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"])), !useInnerHTML && detach, insert(content)); }).init;
        // we would have used comments here, but the `insertAdjacentHTML` api only
        // exists for `Element`s.
        if (needsAnchorBefore) {
            block.addElement(anchorBefore, "@createElement('noscript')", parentNodes && "@createElement('noscript')", parentNode);
        }
        function addAnchorAfter() {
            block.addElement(anchorAfter, "@createElement('noscript')", parentNodes && "@createElement('noscript')", parentNode);
        }
        if (needsAnchorAfter && anchorBefore === 'null') {
            // anchorAfter needs to be in the DOM before we
            // insert the HTML...
            addAnchorAfter();
        }
        block.builders.mount.addLine(insert(init));
        block.builders.detachRaw.addBlock(detach);
        if (needsAnchorAfter && anchorBefore !== 'null') {
            // ...otherwise it should go afterwards
            addAnchorAfter();
        }
    };
    RawMustacheTag.prototype.remount = function (name) {
        return "@appendNode(" + this["var"] + ", " + name + "._slotted" + (this.generator.legacy ? "[\"default\"]" : ".default") + ");";
    };
    return RawMustacheTag;
}(Tag));
var templateObject_1$10;

var Ref = /** @class */ (function (_super) {
    __extends(Ref, _super);
    function Ref() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ref;
}(Node$1));

var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    function Slot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slot.prototype.init = function (block, stripWhitespace, nextSibling) {
        this.cannotUseInnerHTML();
        this["var"] = block.getUniqueName('slot');
        if (this.children.length) {
            this.initChildren(block, stripWhitespace, nextSibling);
        }
    };
    Slot.prototype.build = function (block, parentNode, parentNodes) {
        var generator = this.generator;
        var slotName = this.getStaticAttributeValue('name') || 'default';
        generator.slots.add(slotName);
        var content_name = block.getUniqueName("slot_content_" + slotName);
        var prop = !isValidIdentifier(slotName) || (generator.legacy && reservedNames.has(slotName)) ? "[\"" + slotName + "\"]" : "." + slotName;
        block.addVariable(content_name, "#component._slotted" + prop);
        var needsAnchorBefore = this.prev ? this.prev.type !== 'Element' : !parentNode;
        var needsAnchorAfter = this.next ? this.next.type !== 'Element' : !parentNode;
        var anchorBefore = needsAnchorBefore
            ? block.getUniqueName(content_name + "_before")
            : (this.prev && this.prev["var"]) || 'null';
        var anchorAfter = needsAnchorAfter
            ? block.getUniqueName(content_name + "_after")
            : (this.next && this.next["var"]) || 'null';
        if (needsAnchorBefore)
            block.addVariable(anchorBefore);
        if (needsAnchorAfter)
            block.addVariable(anchorAfter);
        var mountBefore = block.builders.mount.toString();
        var unmountBefore = block.builders.unmount.toString();
        block.builders.create.pushCondition("!" + content_name);
        block.builders.hydrate.pushCondition("!" + content_name);
        block.builders.mount.pushCondition("!" + content_name);
        block.builders.update.pushCondition("!" + content_name);
        block.builders.unmount.pushCondition("!" + content_name);
        block.builders.destroy.pushCondition("!" + content_name);
        this.children.forEach(function (child) {
            child.build(block, parentNode, parentNodes);
        });
        block.builders.create.popCondition();
        block.builders.hydrate.popCondition();
        block.builders.mount.popCondition();
        block.builders.update.popCondition();
        block.builders.unmount.popCondition();
        block.builders.destroy.popCondition();
        var mountLeadin = block.builders.mount.toString() !== mountBefore
            ? "else"
            : "if (" + content_name + ")";
        if (parentNode) {
            block.builders.mount.addBlock(deindent(templateObject_1$11 || (templateObject_1$11 = __makeTemplateObject(["\n\t\t\t\t", " {\n\t\t\t\t\t", "\n\t\t\t\t\t@appendNode(", ", ", ");\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t", " {\n\t\t\t\t\t", "\n\t\t\t\t\t@appendNode(", ", ", ");\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), mountLeadin, needsAnchorBefore && "@appendNode(" + anchorBefore + " || (" + anchorBefore + " = @createComment()), " + parentNode + ");", content_name, parentNode, needsAnchorAfter && "@appendNode(" + anchorAfter + " || (" + anchorAfter + " = @createComment()), " + parentNode + ");"));
        }
        else {
            block.builders.mount.addBlock(deindent(templateObject_2$10 || (templateObject_2$10 = __makeTemplateObject(["\n\t\t\t\t", " {\n\t\t\t\t\t", "\n\t\t\t\t\t@insertNode(", ", #target, anchor);\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t", " {\n\t\t\t\t\t", "\n\t\t\t\t\t@insertNode(", ", #target, anchor);\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), mountLeadin, needsAnchorBefore && "@insertNode(" + anchorBefore + " || (" + anchorBefore + " = @createComment()), #target, anchor);", content_name, needsAnchorAfter && "@insertNode(" + anchorAfter + " || (" + anchorAfter + " = @createComment()), #target, anchor);"));
        }
        // if the slot is unmounted, move nodes back into the document fragment,
        // so that it can be reinserted later
        // TODO so that this can work with public API, component._slotted should
        // be all fragments, derived from options.slots. Not === options.slots
        var unmountLeadin = block.builders.unmount.toString() !== unmountBefore
            ? "else"
            : "if (" + content_name + ")";
        if (anchorBefore === 'null' && anchorAfter === 'null') {
            block.builders.unmount.addBlock(deindent(templateObject_3$10 || (templateObject_3$10 = __makeTemplateObject(["\n\t\t\t\t", " {\n\t\t\t\t\t@reinsertChildren(", ", ", ");\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t", " {\n\t\t\t\t\t@reinsertChildren(", ", ", ");\n\t\t\t\t}\n\t\t\t"])), unmountLeadin, parentNode, content_name));
        }
        else if (anchorBefore === 'null') {
            block.builders.unmount.addBlock(deindent(templateObject_4$10 || (templateObject_4$10 = __makeTemplateObject(["\n\t\t\t\t", " {\n\t\t\t\t\t@reinsertBefore(", ", ", ");\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t", " {\n\t\t\t\t\t@reinsertBefore(", ", ", ");\n\t\t\t\t}\n\t\t\t"])), unmountLeadin, anchorAfter, content_name));
        }
        else if (anchorAfter === 'null') {
            block.builders.unmount.addBlock(deindent(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n\t\t\t\t", " {\n\t\t\t\t\t@reinsertAfter(", ", ", ");\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t", " {\n\t\t\t\t\t@reinsertAfter(", ", ", ");\n\t\t\t\t}\n\t\t\t"])), unmountLeadin, anchorBefore, content_name));
        }
        else {
            block.builders.unmount.addBlock(deindent(templateObject_6$8 || (templateObject_6$8 = __makeTemplateObject(["\n\t\t\t\t", " {\n\t\t\t\t\t@reinsertBetween(", ", ", ", ", ");\n\t\t\t\t\t@detachNode(", ");\n\t\t\t\t\t@detachNode(", ");\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t", " {\n\t\t\t\t\t@reinsertBetween(", ", ", ", ", ");\n\t\t\t\t\t@detachNode(", ");\n\t\t\t\t\t@detachNode(", ");\n\t\t\t\t}\n\t\t\t"])), unmountLeadin, anchorBefore, anchorAfter, content_name, anchorBefore, anchorAfter));
        }
    };
    Slot.prototype.getStaticAttributeValue = function (name) {
        var attribute = this.attributes.find(function (attr) { return attr.name.toLowerCase() === name; });
        if (!attribute)
            return null;
        if (attribute.value === true)
            return true;
        if (attribute.value.length === 0)
            return '';
        if (attribute.value.length === 1 && attribute.value[0].type === 'Text') {
            return attribute.value[0].data;
        }
        return null;
    };
    return Slot;
}(Element));
var templateObject_1$11;
var templateObject_2$10;
var templateObject_3$10;
var templateObject_4$10;
var templateObject_5$8;
var templateObject_6$8;

// Whitespace inside one of these elements will not result in
// a whitespace node being created in any circumstances. (This
// list is almost certainly very incomplete)
var elementsWithoutText = new Set([
    'audio',
    'datalist',
    'dl',
    'ol',
    'optgroup',
    'select',
    'ul',
    'video',
]);
function shouldSkip$1(node) {
    if (/\S/.test(node.data))
        return false;
    var parentElement = node.findNearest(/(?:Element|Component|Head)/);
    if (!parentElement)
        return false;
    if (parentElement.type === 'Head')
        return true;
    if (parentElement.type === 'Component')
        return parentElement.children.length === 1 && node === parentElement.children[0];
    return parentElement.namespace || elementsWithoutText.has(parentElement.name);
}
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.init = function (block) {
        var parentElement = this.findNearest(/(?:Element|Component)/);
        if (shouldSkip$1(this)) {
            this.shouldSkip = true;
            return;
        }
        this["var"] = block.getUniqueName("text");
    };
    Text.prototype.build = function (block, parentNode, parentNodes) {
        if (this.shouldSkip)
            return;
        block.addElement(this["var"], "@createText(" + stringify(this.data) + ")", parentNodes && "@claimText(" + parentNodes + ", " + stringify(this.data) + ")", parentNode);
    };
    Text.prototype.remount = function (name) {
        return "@appendNode(" + this["var"] + ", " + name + "._slotted" + (this.generator.legacy ? "[\"default\"]" : ".default") + ");";
    };
    return Text;
}(Node$1));

var ThenBlock = /** @class */ (function (_super) {
    __extends(ThenBlock, _super);
    function ThenBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ThenBlock;
}(Node$1));

var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Title.prototype.build = function (block, parentNode, parentNodes) {
        var isDynamic = !!this.children.find(function (node) { return node.type !== 'Text'; });
        if (isDynamic) {
            var value = void 0;
            var allDependencies_1 = new Set();
            var shouldCache = void 0;
            // TODO some of this code is repeated in Tag.ts — would be good to
            // DRY it out if that's possible without introducing crazy indirection
            if (this.children.length === 1) {
                // single {{tag}} — may be a non-string
                var expression = this.children[0].expression;
                var indexes = block.contextualise(expression).indexes;
                var _a = this.children[0].metadata, dependencies = _a.dependencies, snippet = _a.snippet;
                value = snippet;
                dependencies.forEach(function (d) {
                    allDependencies_1.add(d);
                });
                shouldCache = (expression.type !== 'Identifier' ||
                    block.contexts.has(expression.name));
            }
            else {
                // '{{foo}} {{bar}}' — treat as string concatenation
                value =
                    (this.children[0].type === 'Text' ? '' : "\"\" + ") +
                        this.children
                            .map(function (chunk) {
                            if (chunk.type === 'Text') {
                                return stringify(chunk.data);
                            }
                            else {
                                var indexes = block.contextualise(chunk.expression).indexes;
                                var _a = chunk.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
                                dependencies.forEach(function (d) {
                                    allDependencies_1.add(d);
                                });
                                return getExpressionPrecedence(chunk.expression) <= 13 ? "(" + snippet + ")" : snippet;
                            }
                        })
                            .join(' + ');
                shouldCache = true;
            }
            var last = shouldCache && block.getUniqueName("title_value");
            if (shouldCache)
                block.addVariable(last);
            var updater = void 0;
            var init = shouldCache ? last + " = " + value : value;
            block.builders.init.addLine("document.title = " + init + ";");
            updater = "document.title = " + (shouldCache ? last : value) + ";";
            if (allDependencies_1.size) {
                var dependencies = Array.from(allDependencies_1);
                var changedCheck = ((block.hasOutroMethod ? "#outroing || " : '') +
                    dependencies.map(function (dependency) { return "changed." + dependency; }).join(' || '));
                var updateCachedValue = last + " !== (" + last + " = " + value + ")";
                var condition = shouldCache ?
                    (dependencies.length ? "(" + changedCheck + ") && " + updateCachedValue : updateCachedValue) :
                    changedCheck;
                block.builders.update.addConditional(condition, updater);
            }
        }
        else {
            var value = stringify(this.children[0].data);
            block.builders.hydrate.addLine("document.title = " + value + ";");
        }
    };
    return Title;
}(Node$1));

var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Transition;
}(Node$1));

var associatedEvents = {
    innerWidth: 'resize',
    innerHeight: 'resize',
    outerWidth: 'resize',
    outerHeight: 'resize',
    scrollX: 'scroll',
    scrollY: 'scroll'
};
var properties = {
    scrollX: 'pageXOffset',
    scrollY: 'pageYOffset'
};
var readonly = new Set([
    'innerWidth',
    'innerHeight',
    'outerWidth',
    'outerHeight',
    'online',
]);
var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Window.prototype.build = function (block, parentNode, parentNodes) {
        var generator = this.generator;
        var events = {};
        var bindings = {};
        this.attributes.forEach(function (attribute) {
            if (attribute.type === 'EventHandler') {
                // TODO verify that it's a valid callee (i.e. built-in or declared method)
                generator.addSourcemapLocations(attribute.expression);
                var usesState_1 = false;
                attribute.expression.arguments.forEach(function (arg) {
                    block.contextualise(arg, null, true);
                    var dependencies = arg.metadata.dependencies;
                    if (dependencies.length)
                        usesState_1 = true;
                });
                var flattened = flatten(attribute.expression.callee);
                if (flattened.name !== 'event' && flattened.name !== 'this') {
                    // allow event.stopPropagation(), this.select() etc
                    generator.code.prependRight(attribute.expression.start, block.alias('component') + ".");
                }
                var handlerName = block.getUniqueName("onwindow" + attribute.name);
                var handlerBody = deindent(templateObject_1$12 || (templateObject_1$12 = __makeTemplateObject(["\n\t\t\t\t\t", "\n\t\t\t\t\t[\u2702", "-", "\u2702];\n\t\t\t\t"], ["\n\t\t\t\t\t", "\n\t\t\t\t\t[\u2702", "-", "\u2702];\n\t\t\t\t"])), usesState_1 && "var state = #component.get();", attribute.expression.start, attribute.expression.end);
                block.builders.init.addBlock(deindent(templateObject_2$11 || (templateObject_2$11 = __makeTemplateObject(["\n\t\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t\twindow.addEventListener(\"", "\", ", ");\n\t\t\t\t"], ["\n\t\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t\twindow.addEventListener(\"", "\", ", ");\n\t\t\t\t"])), handlerName, handlerBody, attribute.name, handlerName));
                block.builders.destroy.addBlock(deindent(templateObject_3$11 || (templateObject_3$11 = __makeTemplateObject(["\n\t\t\t\t\twindow.removeEventListener(\"", "\", ", ");\n\t\t\t\t"], ["\n\t\t\t\t\twindow.removeEventListener(\"", "\", ", ");\n\t\t\t\t"])), attribute.name, handlerName));
            }
            if (attribute.type === 'Binding') {
                // in dev mode, throw if read-only values are written to
                if (readonly.has(attribute.name)) {
                    generator.readonly.add(attribute.value.name);
                }
                bindings[attribute.name] = attribute.value.name;
                // bind:online is a special case, we need to listen for two separate events
                if (attribute.name === 'online')
                    return;
                var associatedEvent = associatedEvents[attribute.name];
                var property = properties[attribute.name] || attribute.name;
                if (!events[associatedEvent])
                    events[associatedEvent] = [];
                events[associatedEvent].push(attribute.value.name + ": this." + property);
                // add initial value
                generator.metaBindings.push("this._state." + attribute.value.name + " = window." + property + ";");
            }
        });
        var lock = block.getUniqueName("window_updating");
        var clear = block.getUniqueName("clear_window_updating");
        var timeout = block.getUniqueName("window_updating_timeout");
        Object.keys(events).forEach(function (event) {
            var handlerName = block.getUniqueName("onwindow" + event);
            var props = events[event].join(',\n');
            if (event === 'scroll') {
                // TODO other bidirectional bindings...
                block.addVariable(lock, 'false');
                block.addVariable(clear, "function() { " + lock + " = false; }");
                block.addVariable(timeout);
            }
            var handlerBody = deindent(templateObject_4$11 || (templateObject_4$11 = __makeTemplateObject(["\n\t\t\t\t", "\n\t\t\t\t", "\n\n\t\t\t\t#component.set({\n\t\t\t\t\t", "\n\t\t\t\t});\n\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"], ["\n\t\t\t\t",
                "\n\t\t\t\t", "\n\n\t\t\t\t#component.set({\n\t\t\t\t\t", "\n\t\t\t\t});\n\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"])), event === 'scroll' && deindent(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n\t\t\t\t\tif (", ") return;\n\t\t\t\t\t", " = true;\n\t\t\t\t"], ["\n\t\t\t\t\tif (", ") return;\n\t\t\t\t\t", " = true;\n\t\t\t\t"])), lock, lock), generator.options.dev && "component._updatingReadonlyProperty = true;", props, generator.options.dev && "component._updatingReadonlyProperty = false;", event === 'scroll' && lock + " = false;");
            block.builders.init.addBlock(deindent(templateObject_6$9 || (templateObject_6$9 = __makeTemplateObject(["\n\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t\twindow.addEventListener(\"", "\", ", ");\n\t\t\t"], ["\n\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t\twindow.addEventListener(\"", "\", ", ");\n\t\t\t"])), handlerName, handlerBody, event, handlerName));
            block.builders.destroy.addBlock(deindent(templateObject_7$7 || (templateObject_7$7 = __makeTemplateObject(["\n\t\t\t\twindow.removeEventListener(\"", "\", ", ");\n\t\t\t"], ["\n\t\t\t\twindow.removeEventListener(\"", "\", ", ");\n\t\t\t"])), event, handlerName));
        });
        // special case... might need to abstract this out if we add more special cases
        if (bindings.scrollX && bindings.scrollY) {
            var observerCallback = block.getUniqueName("scrollobserver");
            block.builders.init.addBlock(deindent(templateObject_8$7 || (templateObject_8$7 = __makeTemplateObject(["\n\t\t\t\tfunction ", "() {\n\t\t\t\t\t", " = true;\n\t\t\t\t\tclearTimeout(", ");\n\t\t\t\t\tvar x = ", ";\n\t\t\t\t\tvar y = ", ";\n\t\t\t\t\twindow.scrollTo(x, y);\n\t\t\t\t\t", " = setTimeout(", ", 100);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tfunction ", "() {\n\t\t\t\t\t", " = true;\n\t\t\t\t\tclearTimeout(", ");\n\t\t\t\t\tvar x = ",
                ";\n\t\t\t\t\tvar y = ",
                ";\n\t\t\t\t\twindow.scrollTo(x, y);\n\t\t\t\t\t", " = setTimeout(", ", 100);\n\t\t\t\t}\n\t\t\t"])), observerCallback, lock, timeout, bindings.scrollX
                ? "#component.get(\"" + bindings.scrollX + "\")"
                : "window.pageXOffset", bindings.scrollY
                ? "#component.get(\"" + bindings.scrollY + "\")"
                : "window.pageYOffset", timeout, clear));
            if (bindings.scrollX)
                block.builders.init.addLine("#component.observe(\"" + bindings.scrollX + "\", " + observerCallback + ");");
            if (bindings.scrollY)
                block.builders.init.addLine("#component.observe(\"" + bindings.scrollY + "\", " + observerCallback + ");");
        }
        else if (bindings.scrollX || bindings.scrollY) {
            var isX = !!bindings.scrollX;
            block.builders.init.addBlock(deindent(templateObject_9$7 || (templateObject_9$7 = __makeTemplateObject(["\n\t\t\t\t#component.observe(\"", "\", function(", ") {\n\t\t\t\t\t", " = true;\n\t\t\t\t\tclearTimeout(", ");\n\t\t\t\t\twindow.scrollTo(", ");\n\t\t\t\t\t", " = setTimeout(", ", 100);\n\t\t\t\t});\n\t\t\t"], ["\n\t\t\t\t#component.observe(\"", "\", function(", ") {\n\t\t\t\t\t", " = true;\n\t\t\t\t\tclearTimeout(", ");\n\t\t\t\t\twindow.scrollTo(", ");\n\t\t\t\t\t", " = setTimeout(", ", 100);\n\t\t\t\t});\n\t\t\t"])), bindings.scrollX || bindings.scrollY, isX ? 'x' : 'y', lock, timeout, isX ? 'x, window.pageYOffset' : 'window.pageXOffset, y', timeout, clear));
        }
        // another special case. (I'm starting to think these are all special cases.)
        if (bindings.online) {
            var handlerName = block.getUniqueName("onlinestatuschanged");
            block.builders.init.addBlock(deindent(templateObject_10$7 || (templateObject_10$7 = __makeTemplateObject(["\n\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t#component.set({ ", ": navigator.onLine });\n\t\t\t\t}\n\t\t\t\twindow.addEventListener(\"online\", ", ");\n\t\t\t\twindow.addEventListener(\"offline\", ", ");\n\t\t\t"], ["\n\t\t\t\tfunction ", "(event) {\n\t\t\t\t\t#component.set({ ", ": navigator.onLine });\n\t\t\t\t}\n\t\t\t\twindow.addEventListener(\"online\", ", ");\n\t\t\t\twindow.addEventListener(\"offline\", ", ");\n\t\t\t"])), handlerName, bindings.online, handlerName, handlerName));
            // add initial value
            generator.metaBindings.push("this._state." + bindings.online + " = navigator.onLine;");
            block.builders.destroy.addBlock(deindent(templateObject_11$7 || (templateObject_11$7 = __makeTemplateObject(["\n\t\t\t\twindow.removeEventListener(\"online\", ", ");\n\t\t\t\twindow.removeEventListener(\"offline\", ", ");\n\t\t\t"], ["\n\t\t\t\twindow.removeEventListener(\"online\", ", ");\n\t\t\t\twindow.removeEventListener(\"offline\", ", ");\n\t\t\t"])), handlerName, handlerName));
        }
    };
    return Window;
}(Node$1));
var templateObject_1$12;
var templateObject_2$11;
var templateObject_3$11;
var templateObject_5$9;
var templateObject_4$11;
var templateObject_6$9;
var templateObject_7$7;
var templateObject_8$7;
var templateObject_9$7;
var templateObject_10$7;
var templateObject_11$7;

var nodes = {
    Attribute: Attribute,
    AwaitBlock: AwaitBlock,
    Binding: Binding,
    CatchBlock: CatchBlock,
    Comment: Comment$2,
    Component: Component,
    EachBlock: EachBlock,
    Element: Element,
    ElseBlock: ElseBlock,
    EventHandler: EventHandler,
    Fragment: Fragment,
    Head: Head,
    IfBlock: IfBlock,
    MustacheTag: MustacheTag,
    PendingBlock: PendingBlock,
    RawMustacheTag: RawMustacheTag,
    Ref: Ref,
    Slot: Slot,
    Text: Text,
    ThenBlock: ThenBlock,
    Title: Title,
    Transition: Transition,
    Window: Window
};

function detectIndentation(str) {
    var pattern = /^[\t\s]{1,4}/gm;
    var match;
    while (match = pattern.exec(str)) {
        if (match[0][0] === '\t')
            return '\t';
        if (match[0].length === 2)
            return '  ';
    }
    return '    ';
}
function getIndentationLevel(str, b) {
    var a = b;
    while (a > 0 && str[a - 1] !== '\n')
        a -= 1;
    return /^\s*/.exec(str.slice(a, b))[0];
}
function getIndentExclusionRanges(node) {
    var ranges = [];
    walk(node, {
        enter: function (node) {
            if (node.type === 'TemplateElement')
                ranges.push(node);
        }
    });
    return ranges;
}
function removeIndentation(code, start, end, indentationLevel, ranges) {
    var str = code.original.slice(start, end);
    var pattern = new RegExp("^" + indentationLevel, 'gm');
    var match;
    while (match = pattern.exec(str)) {
        // TODO bail if we're inside an exclusion range
        code.remove(start + match.index, start + match.index + indentationLevel.length);
    }
}
// We need to tell estree-walker that it should always
// look for an `else` block, otherwise it might get
// the wrong idea about the shape of each/if blocks
childKeys.EachBlock = childKeys.IfBlock = ['children', 'else'];
childKeys.Attribute = ['value'];
var Generator = /** @class */ (function () {
    function Generator(parsed, source, name, stylesheet, options, dom) {
        this.ast = clone(parsed);
        this.parsed = parsed;
        this.source = source;
        this.options = options;
        this.imports = [];
        this.helpers = new Set();
        this.components = new Set();
        this.events = new Set();
        this.transitions = new Set();
        this.importedComponents = new Map();
        this.slots = new Set();
        this.bindingGroups = [];
        this.indirectDependencies = new Map();
        this.locate = getLocator(this.source);
        // track which properties are needed, so we can provide useful info
        // in dev mode
        this.expectedProperties = new Set();
        this.code = new MagicString$1(source);
        this.usesRefs = false;
        // styles
        this.stylesheet = stylesheet;
        // allow compiler to deconflict user's `import { get } from 'whatever'` and
        // Svelte's builtin `import { get, ... } from 'svelte/shared.ts'`;
        this.userVars = new Set();
        this.templateVars = new Map();
        this.aliases = new Map();
        this.usedNames = new Set();
        this.computations = [];
        this.templateProperties = {};
        this.walkJs(dom);
        this.name = this.alias(name);
        if (options.customElement === true) {
            this.customElement = {
                tag: this.tag,
                props: this.props
            };
        }
        else {
            this.customElement = options.customElement;
        }
        if (this.customElement && !this.customElement.tag) {
            throw new Error("No tag name specified"); // TODO better error
        }
        this.walkTemplate();
        if (!this.customElement)
            this.stylesheet.reify();
    }
    Generator.prototype.addSourcemapLocations = function (node) {
        var _this = this;
        walk(node, {
            enter: function (node) {
                _this.code.addSourcemapLocation(node.start);
                _this.code.addSourcemapLocation(node.end);
            }
        });
    };
    Generator.prototype.alias = function (name) {
        if (!this.aliases.has(name)) {
            this.aliases.set(name, this.getUniqueName(name));
        }
        return this.aliases.get(name);
    };
    Generator.prototype.contextualise = function (contexts, indexes, expression, context, isEventHandler) {
        // this.addSourcemapLocations(expression);
        var usedContexts = new Set();
        var usedIndexes = new Set();
        var _a = this, code = _a.code, helpers = _a.helpers;
        var scope;
        var lexicalDepth = 0;
        var self = this;
        walk(expression, {
            enter: function (node, parent, key) {
                if (/^Function/.test(node.type))
                    lexicalDepth += 1;
                if (node._scope) {
                    scope = node._scope;
                    return;
                }
                if (node.type === 'ThisExpression') {
                    if (lexicalDepth === 0 && context)
                        code.overwrite(node.start, node.end, context, {
                            storeName: true,
                            contentOnly: false
                        });
                }
                else if (isReference(node, parent)) {
                    var name = flatten(node).name;
                    if (scope && scope.has(name))
                        return;
                    if (name === 'event' && isEventHandler) {
                        // noop
                    }
                    else if (contexts.has(name)) {
                        var contextName = contexts.get(name);
                        if (contextName !== name) {
                            // this is true for 'reserved' names like `state` and `component`,
                            // also destructured contexts
                            code.overwrite(node.start, node.start + name.length, contextName, { storeName: true, contentOnly: false });
                            var destructuredName = contextName.replace(/\[\d+\]/, '');
                            if (destructuredName !== contextName) {
                                // so that hoisting the context works correctly
                                usedContexts.add(destructuredName);
                            }
                        }
                        usedContexts.add(name);
                    }
                    else if (helpers.has(name)) {
                        var object = node;
                        while (object.type === 'MemberExpression')
                            object = object.object;
                        var alias = self.templateVars.get("helpers-" + name);
                        if (alias !== name)
                            code.overwrite(object.start, object.end, alias);
                    }
                    else if (indexes.has(name)) {
                        var context_1 = indexes.get(name);
                        usedContexts.add(context_1); // TODO is this right?
                        usedIndexes.add(name);
                    }
                    else {
                        // handle shorthand properties
                        if (parent && parent.type === 'Property' && parent.shorthand) {
                            if (key === 'key') {
                                code.appendLeft(node.start, name + ": ");
                                return;
                            }
                        }
                        code.prependRight(node.start, "state.");
                        usedContexts.add('state');
                    }
                    this.skip();
                }
            },
            leave: function (node) {
                if (/^Function/.test(node.type))
                    lexicalDepth -= 1;
                if (node._scope)
                    scope = scope.parent;
            }
        });
        return {
            contexts: usedContexts,
            indexes: usedIndexes
        };
    };
    Generator.prototype.generate = function (result, options, _a) {
        var _this = this;
        var _b = _a.banner, banner = _b === void 0 ? '' : _b, sharedPath = _a.sharedPath, helpers = _a.helpers, name = _a.name, format = _a.format;
        var pattern = /\[✂(\d+)-(\d+)$/;
        var module = wrapModule(result, format, name, options, banner, sharedPath, helpers, this.imports, this.source);
        var parts = module.split('✂]');
        var finalChunk = parts.pop();
        var compiled = new Bundle({ separator: '' });
        function addString(str) {
            compiled.addSource({
                content: new MagicString$1(str)
            });
        }
        var filename = options.filename;
        // special case — the source file doesn't actually get used anywhere. we need
        // to add an empty file to populate map.sources and map.sourcesContent
        if (!parts.length) {
            compiled.addSource({
                filename: filename,
                content: new MagicString$1(this.source).remove(0, this.source.length)
            });
        }
        parts.forEach(function (str) {
            var chunk = str.replace(pattern, '');
            if (chunk)
                addString(chunk);
            var match = pattern.exec(str);
            var snippet = _this.code.snip(+match[1], +match[2]);
            compiled.addSource({
                filename: filename,
                content: snippet
            });
        });
        addString(finalChunk);
        var _c = this.customElement ?
            { css: null, cssMap: null } :
            this.stylesheet.render(options.cssOutputFilename, true), css = _c.css, cssMap = _c.cssMap;
        return {
            ast: this.ast,
            code: compiled.toString(),
            map: compiled.generateMap({
                includeContent: true,
                file: options.outputFilename
            }),
            css: css,
            cssMap: cssMap
        };
    };
    Generator.prototype.getUniqueName = function (name) {
        if (test)
            name = name + "$";
        var alias = name;
        for (var i = 1; reservedNames.has(alias) ||
            this.userVars.has(alias) ||
            this.usedNames.has(alias); alias = name + "_" + i++)
            ;
        this.usedNames.add(alias);
        return alias;
    };
    Generator.prototype.getUniqueNameMaker = function () {
        var _this = this;
        var localUsedNames = new Set();
        function add(name) {
            localUsedNames.add(name);
        }
        reservedNames.forEach(add);
        this.userVars.forEach(add);
        return function (name) {
            if (test)
                name = name + "$";
            var alias = name;
            for (var i = 1; _this.usedNames.has(alias) ||
                localUsedNames.has(alias); alias = name + "_" + i++)
                ;
            localUsedNames.add(alias);
            return alias;
        };
    };
    Generator.prototype.walkJs = function (dom) {
        var _this = this;
        var _a = this, code = _a.code, source = _a.source, computations = _a.computations, templateProperties = _a.templateProperties, imports = _a.imports;
        var js = this.parsed.js;
        var componentDefinition = new CodeBuilder();
        if (js) {
            this.addSourcemapLocations(js.content);
            var indentation = detectIndentation(source.slice(js.start, js.end));
            var indentationLevel = getIndentationLevel(source, js.content.body[0].start);
            var indentExclusionRanges_1 = getIndentExclusionRanges(js.content);
            var _b = annotateWithScopes(js.content), scope = _b.scope, globals = _b.globals;
            scope.declarations.forEach(function (name) {
                _this.userVars.add(name);
            });
            globals.forEach(function (name) {
                _this.userVars.add(name);
            });
            var body = js.content.body.slice(); // slice, because we're going to be mutating the original
            // imports need to be hoisted out of the IIFE
            for (var i = 0; i < body.length; i += 1) {
                var node = body[i];
                if (node.type === 'ImportDeclaration') {
                    removeNode(code, js.content, node);
                    imports.push(node);
                    node.specifiers.forEach(function (specifier) {
                        _this.userVars.add(specifier.local.name);
                    });
                }
            }
            var defaultExport = this.defaultExport = body.find(function (node) { return node.type === 'ExportDefaultDeclaration'; });
            if (defaultExport) {
                defaultExport.declaration.properties.forEach(function (prop) {
                    templateProperties[getMethodName(prop.key)] = prop;
                });
                ['helpers', 'events', 'components', 'transitions'].forEach(function (key) {
                    if (templateProperties[key]) {
                        templateProperties[key].value.properties.forEach(function (prop) {
                            _this[key].add(getMethodName(prop.key));
                        });
                    }
                });
                var addArrowFunctionExpression_1 = function (name, node) {
                    var body = node.body, params = node.params, async = node.async;
                    var fnKeyword = async ? 'async function' : 'function';
                    var paramString = params.length ?
                        "[\u2702" + params[0].start + "-" + params[params.length - 1].end + "\u2702]" :
                        "";
                    if (body.type === 'BlockStatement') {
                        componentDefinition.addBlock(deindent(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n\t\t\t\t\t\t\t", " ", "(", ") [\u2702", "-", "\u2702]\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\t", " ", "(", ") [\u2702", "-", "\u2702]\n\t\t\t\t\t\t"])), fnKeyword, name, paramString, body.start, body.end));
                    }
                    else {
                        componentDefinition.addBlock(deindent(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n\t\t\t\t\t\t\t", " ", "(", ") {\n\t\t\t\t\t\t\t\treturn [\u2702", "-", "\u2702];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\t", " ", "(", ") {\n\t\t\t\t\t\t\t\treturn [\u2702", "-", "\u2702];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t"])), fnKeyword, name, paramString, body.start, body.end));
                    }
                };
                var addFunctionExpression_1 = function (name, node) {
                    var async = node.async;
                    var fnKeyword = async ? 'async function' : 'function';
                    var c = node.start;
                    while (_this.source[c] !== '(')
                        c += 1;
                    componentDefinition.addBlock(deindent(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n\t\t\t\t\t\t", " ", "[\u2702", "-", "\u2702];\n\t\t\t\t\t"], ["\n\t\t\t\t\t\t", " ", "[\u2702", "-", "\u2702];\n\t\t\t\t\t"])), fnKeyword, name, c, node.end));
                };
                var addValue_1 = function (name, node) {
                    componentDefinition.addBlock(deindent(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n\t\t\t\t\t\tvar ", " = [\u2702", "-", "\u2702];\n\t\t\t\t\t"], ["\n\t\t\t\t\t\tvar ", " = [\u2702", "-", "\u2702];\n\t\t\t\t\t"])), name, node.start, node.end));
                };
                var addDeclaration_1 = function (key, node, disambiguator, conflicts) {
                    var qualified = disambiguator ? disambiguator + "-" + key : key;
                    if (node.type === 'Identifier' && node.name === key) {
                        _this.templateVars.set(qualified, key);
                        return;
                    }
                    var deconflicted = key;
                    if (conflicts)
                        while (deconflicted in conflicts)
                            deconflicted += '_';
                    var name = _this.getUniqueName(deconflicted);
                    _this.templateVars.set(qualified, name);
                    // deindent
                    var indentationLevel = getIndentationLevel(source, node.start);
                    if (indentationLevel) {
                        removeIndentation(code, node.start, node.end, indentationLevel, indentExclusionRanges_1);
                    }
                    if (node.type === 'ArrowFunctionExpression') {
                        addArrowFunctionExpression_1(name, node);
                    }
                    else if (node.type === 'FunctionExpression') {
                        addFunctionExpression_1(name, node);
                    }
                    else {
                        addValue_1(name, node);
                    }
                };
                if (templateProperties.components) {
                    templateProperties.components.value.properties.forEach(function (property) {
                        addDeclaration_1(getMethodName(property.key), property.value, 'components');
                    });
                }
                if (templateProperties.computed) {
                    var dependencies_1 = new Map();
                    templateProperties.computed.value.properties.forEach(function (prop) {
                        var key = getMethodName(prop.key);
                        var value = prop.value;
                        var deps = value.params.map(function (param) {
                            return param.type === 'AssignmentPattern' ? param.left.name : param.name;
                        });
                        deps.forEach(function (dep) {
                            _this.expectedProperties.add(dep);
                        });
                        dependencies_1.set(key, deps);
                    });
                    var visited_1 = new Set();
                    var visit_1 = function (key) {
                        if (!dependencies_1.has(key))
                            return; // not a computation
                        if (visited_1.has(key))
                            return;
                        visited_1.add(key);
                        var deps = dependencies_1.get(key);
                        deps.forEach(visit_1);
                        computations.push({ key: key, deps: deps });
                        var prop = templateProperties.computed.value.properties.find(function (prop) { return getMethodName(prop.key) === key; });
                        addDeclaration_1(key, prop.value, 'computed', {
                            state: true,
                            changed: true
                        });
                    };
                    templateProperties.computed.value.properties.forEach(function (prop) {
                        return visit_1(getMethodName(prop.key));
                    });
                }
                if (templateProperties.data) {
                    addDeclaration_1('data', templateProperties.data.value);
                }
                if (templateProperties.events && dom) {
                    templateProperties.events.value.properties.forEach(function (property) {
                        addDeclaration_1(getMethodName(property.key), property.value, 'events');
                    });
                }
                if (templateProperties.helpers) {
                    templateProperties.helpers.value.properties.forEach(function (property) {
                        addDeclaration_1(getMethodName(property.key), property.value, 'helpers');
                    });
                }
                if (templateProperties.methods && dom) {
                    addDeclaration_1('methods', templateProperties.methods.value);
                }
                if (templateProperties.namespace) {
                    var ns = templateProperties.namespace.value.value;
                    this.namespace = namespaces[ns] || ns;
                }
                if (templateProperties.onrender)
                    templateProperties.oncreate = templateProperties.onrender; // remove after v2
                if (templateProperties.oncreate && dom) {
                    addDeclaration_1('oncreate', templateProperties.oncreate.value);
                }
                if (templateProperties.onteardown)
                    templateProperties.ondestroy = templateProperties.onteardown; // remove after v2
                if (templateProperties.ondestroy && dom) {
                    addDeclaration_1('ondestroy', templateProperties.ondestroy.value);
                }
                if (templateProperties.preload) {
                    addDeclaration_1('preload', templateProperties.preload.value);
                }
                if (templateProperties.props) {
                    this.props = templateProperties.props.value.elements.map(function (element) { return element.value; });
                }
                if (templateProperties.setup) {
                    addDeclaration_1('setup', templateProperties.setup.value);
                }
                if (templateProperties.store) {
                    addDeclaration_1('store', templateProperties.store.value);
                }
                if (templateProperties.tag) {
                    this.tag = templateProperties.tag.value.value;
                }
                if (templateProperties.transitions) {
                    templateProperties.transitions.value.properties.forEach(function (property) {
                        addDeclaration_1(getMethodName(property.key), property.value, 'transitions');
                    });
                }
            }
            if (indentationLevel) {
                if (defaultExport) {
                    removeIndentation(code, js.content.start, defaultExport.start, indentationLevel, indentExclusionRanges_1);
                    removeIndentation(code, defaultExport.end, js.content.end, indentationLevel, indentExclusionRanges_1);
                }
                else {
                    removeIndentation(code, js.content.start, js.content.end, indentationLevel, indentExclusionRanges_1);
                }
            }
            var a = js.content.start;
            while (/\s/.test(source[a]))
                a += 1;
            var b = js.content.end;
            while (/\s/.test(source[b - 1]))
                b -= 1;
            if (defaultExport) {
                this.javascript = '';
                if (a !== defaultExport.start)
                    this.javascript += "[\u2702" + a + "-" + defaultExport.start + "\u2702]";
                if (!componentDefinition.isEmpty())
                    this.javascript += componentDefinition;
                if (defaultExport.end !== b)
                    this.javascript += "[\u2702" + defaultExport.end + "-" + b + "\u2702]";
            }
            else {
                this.javascript = a === b ? null : "[\u2702" + a + "-" + b + "\u2702]";
            }
        }
    };
    Generator.prototype.walkTemplate = function () {
        var _this = this;
        var generator = this;
        var _a = this, code = _a.code, expectedProperties = _a.expectedProperties, helpers = _a.helpers;
        var html$$1 = this.parsed.html;
        var contextualise = function (node, contextDependencies, indexes, isEventHandler) {
            _this.addSourcemapLocations(node); // TODO this involves an additional walk — can we roll it in somewhere else?
            var scope = annotateWithScopes(node).scope;
            var dependencies = new Set();
            walk(node, {
                enter: function (node, parent) {
                    code.addSourcemapLocation(node.start);
                    code.addSourcemapLocation(node.end);
                    if (node._scope) {
                        scope = node._scope;
                        return;
                    }
                    if (isReference(node, parent)) {
                        var name = flatten(node).name;
                        if (scope && scope.has(name) || helpers.has(name) || (name === 'event' && isEventHandler))
                            return;
                        if (contextDependencies.has(name)) {
                            contextDependencies.get(name).forEach(function (dependency) {
                                dependencies.add(dependency);
                            });
                        }
                        else if (!indexes.has(name)) {
                            dependencies.add(name);
                        }
                        this.skip();
                    }
                },
                leave: function (node, parent) {
                    if (node._scope)
                        scope = scope.parent;
                }
            });
            dependencies.forEach(function (dependency) {
                expectedProperties.add(dependency);
            });
            return {
                snippet: "[\u2702" + node.start + "-" + node.end + "\u2702]",
                dependencies: Array.from(dependencies)
            };
        };
        var contextDependencies = new Map();
        var contextDependenciesStack = [contextDependencies];
        var indexes = new Set();
        var indexesStack = [indexes];
        function parentIsHead(node) {
            if (!node)
                return false;
            if (node.type === 'Component' || node.type === 'Element')
                return false;
            if (node.type === 'Head')
                return true;
            return parentIsHead(node.parent);
        }
        walk(html$$1, {
            enter: function (node, parent, key) {
                // TODO this is hacky as hell
                if (key === 'parent')
                    return this.skip();
                node.parent = parent;
                node.generator = generator;
                if (node.type === 'Element' && (node.name === ':Component' || node.name === ':Self' || generator.components.has(node.name))) {
                    node.type = 'Component';
                    Object.setPrototypeOf(node, nodes.Component.prototype);
                }
                else if (node.type === 'Element' && node.name === 'title' && parentIsHead(parent)) {
                    node.type = 'Title';
                    Object.setPrototypeOf(node, nodes.Title.prototype);
                }
                else if (node.type === 'Element' && node.name === 'slot' && !generator.customElement) {
                    node.type = 'Slot';
                    Object.setPrototypeOf(node, nodes.Slot.prototype);
                }
                else if (node.type in nodes) {
                    Object.setPrototypeOf(node, nodes[node.type].prototype);
                }
                if (node.type === 'Element') {
                    generator.stylesheet.apply(node);
                }
                if (node.type === 'EachBlock') {
                    node.metadata = contextualise(node.expression, contextDependencies, indexes, false);
                    contextDependencies = new Map(contextDependencies);
                    contextDependencies.set(node.context, node.metadata.dependencies);
                    if (node.destructuredContexts) {
                        node.destructuredContexts.forEach(function (name) {
                            contextDependencies.set(name, node.metadata.dependencies);
                        });
                    }
                    contextDependenciesStack.push(contextDependencies);
                    if (node.index) {
                        indexes = new Set(indexes);
                        indexes.add(node.index);
                        indexesStack.push(indexes);
                    }
                }
                if (node.type === 'AwaitBlock') {
                    node.metadata = contextualise(node.expression, contextDependencies, indexes, false);
                    contextDependencies = new Map(contextDependencies);
                    contextDependencies.set(node.value, node.metadata.dependencies);
                    contextDependencies.set(node.error, node.metadata.dependencies);
                    contextDependenciesStack.push(contextDependencies);
                }
                if (node.type === 'IfBlock') {
                    node.metadata = contextualise(node.expression, contextDependencies, indexes, false);
                }
                if (node.type === 'MustacheTag' || node.type === 'RawMustacheTag' || node.type === 'AttributeShorthand') {
                    node.metadata = contextualise(node.expression, contextDependencies, indexes, false);
                    this.skip();
                }
                if (node.type === 'Binding') {
                    node.metadata = contextualise(node.value, contextDependencies, indexes, false);
                    this.skip();
                }
                if (node.type === 'EventHandler' && node.expression) {
                    node.expression.arguments.forEach(function (arg) {
                        arg.metadata = contextualise(arg, contextDependencies, indexes, true);
                    });
                    this.skip();
                }
                if (node.type === 'Transition' && node.expression) {
                    node.metadata = contextualise(node.expression, contextDependencies, indexes, false);
                    this.skip();
                }
                if (node.type === 'Component' && node.name === ':Component') {
                    node.metadata = contextualise(node.expression, contextDependencies, indexes, false);
                }
            },
            leave: function (node, parent) {
                if (node.type === 'EachBlock') {
                    contextDependenciesStack.pop();
                    contextDependencies = contextDependenciesStack[contextDependenciesStack.length - 1];
                    if (node.index) {
                        indexesStack.pop();
                        indexes = indexesStack[indexesStack.length - 1];
                    }
                }
                if (node.type === 'Element' && node.name === 'option') {
                    // Special case — treat these the same way:
                    //   <option>{{foo}}</option>
                    //   <option value='{{foo}}'>{{foo}}</option>
                    var valueAttribute = node.attributes.find(function (attribute) { return attribute.name === 'value'; });
                    if (!valueAttribute) {
                        node.attributes.push(new nodes.Attribute({
                            generator: generator,
                            name: 'value',
                            value: node.children,
                            parent: node
                        }));
                    }
                }
            }
        });
    };
    return Generator;
}());
var templateObject_1$1;
var templateObject_2$1;
var templateObject_3$1;
var templateObject_4$1;

var DomGenerator = /** @class */ (function (_super) {
    __extends(DomGenerator, _super);
    function DomGenerator(parsed, source, name, stylesheet, options) {
        var _this = _super.call(this, parsed, source, name, stylesheet, options, true) || this;
        _this.blocks = [];
        _this.readonly = new Set();
        _this.hydratable = options.hydratable;
        _this.legacy = options.legacy;
        _this.needsEncapsulateHelper = false;
        // initial values for e.g. window.innerWidth, if there's a <:Window> meta tag
        _this.metaBindings = [];
        return _this;
    }
    DomGenerator.prototype.getUniqueNameMaker = function () {
        var _this = this;
        var localUsedNames = new Set();
        function add(name) {
            localUsedNames.add(name);
        }
        reservedNames.forEach(add);
        this.userVars.forEach(add);
        for (var name in shared) {
            localUsedNames.add(test ? name + "$" : name);
        }
        return function (name) {
            if (test)
                name = name + "$";
            var alias = name;
            for (var i = 1; _this.usedNames.has(alias) ||
                localUsedNames.has(alias); alias = name + "_" + i++)
                ;
            localUsedNames.add(alias);
            return alias;
        };
    };
    return DomGenerator;
}(Generator));
function dom(parsed, source, stylesheet, options) {
    var format = options.format || 'es';
    var generator = new DomGenerator(parsed, source, options.name || 'SvelteComponent', stylesheet, options);
    var computations = generator.computations, name = generator.name, templateProperties = generator.templateProperties;
    parsed.html.build();
    var block = parsed.html.block;
    // prevent fragment being created twice (#1063)
    if (options.customElement)
        block.builders.create.addLine("this.c = @noop;");
    generator.stylesheet.warnOnUnusedSelectors(options.onwarn);
    var builder = new CodeBuilder();
    var computationBuilder = new CodeBuilder();
    var computationDeps = new Set();
    if (computations.length) {
        computations.forEach(function (_a) {
            var key = _a.key, deps = _a.deps;
            deps.forEach(function (dep) {
                computationDeps.add(dep);
            });
            if (generator.readonly.has(key)) {
                // <:Window> bindings
                throw new Error("Cannot have a computed value '" + key + "' that clashes with a read-only property");
            }
            generator.readonly.add(key);
            var condition = "" + deps.map(function (dep) { return "changed." + dep; }).join(' || ');
            var statement = "if (this._differs(state." + key + ", (state." + key + " = %computed-" + key + "(" + deps
                .map(function (dep) { return "state." + dep; })
                .join(', ') + ")))) changed." + key + " = true;";
            computationBuilder.addConditional(condition, statement);
        });
    }
    if (generator.javascript) {
        builder.addBlock(generator.javascript);
    }
    var _a = generator.stylesheet.render(options.filename, !generator.customElement), css = _a.css, cssMap = _a.cssMap;
    var styles = generator.stylesheet.hasStyles && stringify(options.dev ?
        css + "\n/*# sourceMappingURL=" + cssMap.toUrl() + " */" :
        css, { onlyEscapeAtSymbol: true });
    if (styles && generator.options.css !== false && !generator.customElement) {
        builder.addBlock(deindent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\tfunction @add_css() {\n\t\t\t\tvar style = @createElement(\"style\");\n\t\t\t\tstyle.id = '", "-style';\n\t\t\t\tstyle.textContent = ", ";\n\t\t\t\t@appendNode(style, document.head);\n\t\t\t}\n\t\t"], ["\n\t\t\tfunction @add_css() {\n\t\t\t\tvar style = @createElement(\"style\");\n\t\t\t\tstyle.id = '", "-style';\n\t\t\t\tstyle.textContent = ", ";\n\t\t\t\t@appendNode(style, document.head);\n\t\t\t}\n\t\t"])), generator.stylesheet.id, styles));
    }
    generator.blocks.forEach(function (block) {
        builder.addBlock(block.toString());
    });
    var sharedPath = options.shared === true
        ? 'svelte/shared.js'
        : options.shared || '';
    var prototypeBase = name + ".prototype" +
        (templateProperties.methods ? ", %methods" : '');
    var proto = sharedPath
        ? "@proto"
        : deindent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t{\n\t\t\t", "\n\t\t}"], ["\n\t\t{\n\t\t\t",
            "\n\t\t}"])), ['destroy', 'get', 'fire', 'observe', 'on', 'set', 'teardown', '_set', '_mount', '_unmount', '_differs']
            .map(function (n) { return n + ": @" + (n === 'teardown' ? 'destroy' : n); })
            .join(',\n'));
    var debugName = "<" + (generator.customElement ? generator.tag : name) + ">";
    // generate initial state object
    var expectedProperties = Array.from(generator.expectedProperties);
    var globals = expectedProperties.filter(function (prop) { return globalWhitelist.has(prop); });
    var storeProps = options.store || templateProperties.store ? expectedProperties.filter(function (prop) { return prop[0] === '$'; }) : [];
    var initialState = [];
    if (globals.length > 0) {
        initialState.push("{ " + globals.map(function (prop) { return prop + " : " + prop; }).join(', ') + " }");
    }
    if (storeProps.length > 0) {
        initialState.push("this.store._init([" + storeProps.map(function (prop) { return "\"" + prop.slice(1) + "\""; }) + "])");
    }
    if (templateProperties.data) {
        initialState.push("%data()");
    }
    else if (globals.length === 0 && storeProps.length === 0) {
        initialState.push('{}');
    }
    initialState.push("options.data");
    var constructorBody = deindent(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t", "\n\t\t", "\n\t\t@init(this, options);\n\t\t", "\n\t\t", "\n\t\tthis._state = @assign(", ");\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\n\t\tthis._fragment = @create_main_fragment(this, this._state);\n\n\t\t", "\n\n\t\t", "\n\t"], ["\n\t\t", "\n\t\t",
        "\n\t\t@init(this, options);\n\t\t", "\n\t\t", "\n\t\tthis._state = @assign(", ");\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t",
        "\n\t\t",
        "\n\n\t\t",
        "\n\n\t\t", "\n\n\t\t",
        "\n\n\t\t", "\n\n\t\t",
        "\n\n\t\t", "\n\n\t\tthis._fragment = @create_main_fragment(this, this._state);\n\n\t\t",
        "\n\n\t\t",
        "\n\t"])), options.dev && "this._debugName = '" + debugName + "';", options.dev && !generator.customElement &&
        "if (!options || (!options.target && !options.root)) throw new Error(\"'target' is a required option\");", templateProperties.store && "this.store = %store();", generator.usesRefs && "this.refs = {};", initialState.join(', '), storeProps.length > 0 && "this.store._add(this, [" + storeProps.map(function (prop) { return "\"" + prop.slice(1) + "\""; }) + "]);", generator.metaBindings, computations.length && "this._recompute({ " + Array.from(computationDeps).map(function (dep) { return dep + ": 1"; }).join(', ') + " }, this._state);", options.dev &&
        Array.from(generator.expectedProperties).map(function (prop) {
            if (globalWhitelist.has(prop))
                return;
            if (computations.find(function (c) { return c.key === prop; }))
                return;
            var message = generator.components.has(prop) ?
                debugName + " expected to find '" + prop + "' in `data`, but found it in `components` instead" :
                debugName + " was created without expected data property '" + prop + "'";
            var conditions = ["!('" + prop + "' in this._state)"];
            if (generator.customElement)
                conditions.push("!('" + prop + "' in this.attributes)");
            return "if (" + conditions.join(' && ') + ") console.warn(\"" + message + "\");";
        }), generator.bindingGroups.length &&
        "this._bindingGroups = [" + Array(generator.bindingGroups.length).fill('[]').join(', ') + "];", (templateProperties.ondestroy || storeProps.length) && ("this._handlers.destroy = [" + [templateProperties.ondestroy && "%ondestroy", storeProps.length && "@removeFromStore"].filter(Boolean).join(', ') + "];"), generator.slots.size && "this._slotted = options.slots || {};", generator.customElement ? deindent(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\t\t\tthis.attachShadow({ mode: 'open' });\n\t\t\t\t", "\n\t\t\t"], ["\n\t\t\t\tthis.attachShadow({ mode: 'open' });\n\t\t\t\t", "\n\t\t\t"])), css && "this.shadowRoot.innerHTML = `<style>" + escape(css, { onlyEscapeAtSymbol: true }).replace(/\\/g, '\\\\') + (options.dev ? "\n/*# sourceMappingURL=" + cssMap.toUrl() + " */" : '') + "</style>`;") :
        (generator.stylesheet.hasStyles && options.css !== false &&
            "if (!document.getElementById(\"" + generator.stylesheet.id + "-style\")) @add_css();"), templateProperties.oncreate && "var _oncreate = %oncreate.bind(this);", (templateProperties.oncreate || generator.hasComponents || generator.hasComplexBindings || generator.hasIntroTransitions) && deindent(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\tif (!options.root) {\n\t\t\t\tthis._oncreate = [];\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t}\n\t\t"], ["\n\t\t\tif (!options.root) {\n\t\t\t\tthis._oncreate = [];\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t}\n\t\t"])), (generator.hasComponents || generator.hasComplexBindings) && "this._beforecreate = [];", (generator.hasComponents || generator.hasIntroTransitions) && "this._aftercreate = [];"), generator.slots.size && "this.slots = {};", (templateProperties.oncreate) && deindent(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t\t\tthis.root._oncreate.push(_oncreate);\n\t\t"], ["\n\t\t\tthis.root._oncreate.push(_oncreate);\n\t\t"]))), generator.customElement ? deindent(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t\t\tthis._fragment.c();\n\t\t\tthis._fragment.", "(this.shadowRoot, null);\n\n\t\t\tif (options.target) this._mount(options.target, options.anchor);\n\t\t"], ["\n\t\t\tthis._fragment.c();\n\t\t\tthis._fragment.", "(this.shadowRoot, null);\n\n\t\t\tif (options.target) this._mount(options.target, options.anchor);\n\t\t"])), block.hasIntroMethod ? 'i' : 'm') : deindent(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t\t\tif (options.target) {\n\t\t\t\t", "\n\t\t\t\tthis._mount(options.target, options.anchor);\n\n\t\t\t\t", "\n\t\t\t}\n\t\t"], ["\n\t\t\tif (options.target) {\n\t\t\t\t",
        "\n\t\t\t\tthis._mount(options.target, options.anchor);\n\n\t\t\t\t",
        "\n\t\t\t}\n\t\t"])), generator.hydratable
        ? deindent(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\t\t\t\t\t\tvar nodes = @children(options.target);\n\t\t\t\t\t\toptions.hydrate ? this._fragment.l(nodes) : this._fragment.c();\n\t\t\t\t\t\tnodes.forEach(@detachNode);\n\t\t\t\t\t"], ["\n\t\t\t\t\t\tvar nodes = @children(options.target);\n\t\t\t\t\t\toptions.hydrate ? this._fragment.l(nodes) : this._fragment.c();\n\t\t\t\t\t\tnodes.forEach(@detachNode);\n\t\t\t\t\t"]))) : deindent(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\t\t\t\t\t\t", "\n\t\t\t\t\t\tthis._fragment.c();\n\t\t\t\t\t"], ["\n\t\t\t\t\t\t", "\n\t\t\t\t\t\tthis._fragment.c();\n\t\t\t\t\t"])), options.dev && "if (options.hydrate) throw new Error(\"options.hydrate only works if the component was compiled with the `hydratable: true` option\");"), (generator.hasComponents || generator.hasComplexBindings || templateProperties.oncreate || generator.hasIntroTransitions) && deindent(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t"], ["\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t\t", "\n\t\t\t\t"])), generator.hasComponents && "this._lock = true;", (generator.hasComponents || generator.hasComplexBindings) && "@callAll(this._beforecreate);", (generator.hasComponents || templateProperties.oncreate) && "@callAll(this._oncreate);", (generator.hasComponents || generator.hasIntroTransitions) && "@callAll(this._aftercreate);", generator.hasComponents && "this._lock = false;")));
    if (generator.customElement) {
        var props = generator.props || Array.from(generator.expectedProperties);
        builder.addBlock(deindent(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\t\t\tclass ", " extends HTMLElement {\n\t\t\t\tconstructor(options = {}) {\n\t\t\t\t\tsuper();\n\t\t\t\t\t", "\n\t\t\t\t}\n\n\t\t\t\tstatic get observedAttributes() {\n\t\t\t\t\treturn ", ";\n\t\t\t\t}\n\n\t\t\t\t", "\n\n\t\t\t\t", "\n\n\t\t\t\tattributeChangedCallback(attr, oldValue, newValue) {\n\t\t\t\t\tthis.set({ [attr]: newValue });\n\t\t\t\t}\n\n\t\t\t\t", "\n\t\t\t}\n\n\t\t\tcustomElements.define(\"", "\", ", ");\n\t\t\t@assign(", ", ", ", {\n\t\t\t\t_mount(target, anchor) {\n\t\t\t\t\ttarget.insertBefore(this, anchor);\n\t\t\t\t},\n\n\t\t\t\t_unmount() {\n\t\t\t\t\tthis.parentNode.removeChild(this);\n\t\t\t\t}\n\t\t\t});\n\t\t"], ["\n\t\t\tclass ", " extends HTMLElement {\n\t\t\t\tconstructor(options = {}) {\n\t\t\t\t\tsuper();\n\t\t\t\t\t", "\n\t\t\t\t}\n\n\t\t\t\tstatic get observedAttributes() {\n\t\t\t\t\treturn ", ";\n\t\t\t\t}\n\n\t\t\t\t",
            "\n\n\t\t\t\t",
            "\n\n\t\t\t\tattributeChangedCallback(attr, oldValue, newValue) {\n\t\t\t\t\tthis.set({ [attr]: newValue });\n\t\t\t\t}\n\n\t\t\t\t",
            "\n\t\t\t}\n\n\t\t\tcustomElements.define(\"", "\", ", ");\n\t\t\t@assign(", ", ", ", {\n\t\t\t\t_mount(target, anchor) {\n\t\t\t\t\ttarget.insertBefore(this, anchor);\n\t\t\t\t},\n\n\t\t\t\t_unmount() {\n\t\t\t\t\tthis.parentNode.removeChild(this);\n\t\t\t\t}\n\t\t\t});\n\t\t"])), name, constructorBody, JSON.stringify(props), props.map(function (prop) { return deindent(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\t\t\t\t\tget ", "() {\n\t\t\t\t\t\treturn this.get('", "');\n\t\t\t\t\t}\n\n\t\t\t\t\tset ", "(value) {\n\t\t\t\t\t\tthis.set({ ", ": value });\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tget ", "() {\n\t\t\t\t\t\treturn this.get('", "');\n\t\t\t\t\t}\n\n\t\t\t\t\tset ", "(value) {\n\t\t\t\t\t\tthis.set({ ", ": value });\n\t\t\t\t\t}\n\t\t\t\t"])), prop, prop, prop, prop); }).join('\n\n'), generator.slots.size && deindent(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\t\t\t\t\tconnectedCallback() {\n\t\t\t\t\t\tObject.keys(this._slotted).forEach(key => {\n\t\t\t\t\t\t\tthis.appendChild(this._slotted[key]);\n\t\t\t\t\t\t});\n\t\t\t\t\t}"], ["\n\t\t\t\t\tconnectedCallback() {\n\t\t\t\t\t\tObject.keys(this._slotted).forEach(key => {\n\t\t\t\t\t\t\tthis.appendChild(this._slotted[key]);\n\t\t\t\t\t\t});\n\t\t\t\t\t}"]))), (generator.hasComponents || generator.hasComplexBindings || templateProperties.oncreate || generator.hasIntroTransitions) && deindent(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\t\t\t\t\tconnectedCallback() {\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tconnectedCallback() {\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t", "\n\t\t\t\t\t}\n\t\t\t\t"])), generator.hasComponents && "this._lock = true;", (generator.hasComponents || generator.hasComplexBindings) && "@callAll(this._beforecreate);", (generator.hasComponents || templateProperties.oncreate) && "@callAll(this._oncreate);", (generator.hasComponents || generator.hasIntroTransitions) && "@callAll(this._aftercreate);", generator.hasComponents && "this._lock = false;"), generator.tag, name, prototypeBase, proto));
    }
    else {
        builder.addBlock(deindent(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\t\t\tfunction ", "(options) {\n\t\t\t\t", "\n\t\t\t}\n\n\t\t\t@assign(", ", ", ");\n\t\t"], ["\n\t\t\tfunction ", "(options) {\n\t\t\t\t", "\n\t\t\t}\n\n\t\t\t@assign(", ", ", ");\n\t\t"])), name, constructorBody, prototypeBase, proto));
    }
    var immutable = templateProperties.immutable ? templateProperties.immutable.value.value : options.immutable;
    builder.addBlock(deindent(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\t"], ["\n\t\t",
        "\n\n\t\t",
        "\n\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\t"])), options.dev && deindent(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n\t\t\t", ".prototype._checkReadOnly = function _checkReadOnly(newState) {\n\t\t\t\t", "\n\t\t\t};\n\t\t"], ["\n\t\t\t", ".prototype._checkReadOnly = function _checkReadOnly(newState) {\n\t\t\t\t",
        "\n\t\t\t};\n\t\t"])), name, Array.from(generator.readonly).map(function (prop) {
        return "if ('" + prop + "' in newState && !this._updatingReadonlyProperty) throw new Error(\"" + debugName + ": Cannot set read-only property '" + prop + "'\");";
    })), computations.length ? deindent(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n\t\t\t", ".prototype._recompute = function _recompute(changed, state) {\n\t\t\t\t", "\n\t\t\t}\n\t\t"], ["\n\t\t\t", ".prototype._recompute = function _recompute(changed, state) {\n\t\t\t\t", "\n\t\t\t}\n\t\t"])), name, computationBuilder) : (!sharedPath && name + ".prototype._recompute = @noop;"), templateProperties.setup && "%setup(" + name + ");", templateProperties.preload && name + ".preload = %preload;", immutable && name + ".prototype._differs = @_differsImmutable;"));
    var usedHelpers = new Set();
    var result = builder
        .toString()
        .replace(/(%+|@+)(\w*(?:-\w*)?)/g, function (match, sigil, name) {
        if (sigil === '@') {
            if (name in shared) {
                if (options.dev && name + "Dev" in shared)
                    name = name + "Dev";
                usedHelpers.add(name);
            }
            return generator.alias(name);
        }
        if (sigil === '%') {
            return generator.templateVars.get(name);
        }
        return sigil.slice(1) + name;
    });
    var helpers;
    if (sharedPath) {
        if (format !== 'es' && format !== 'cjs') {
            throw new Error("Components with shared helpers must be compiled with `format: 'es'` or `format: 'cjs'`");
        }
        var used = Array.from(usedHelpers).sort();
        helpers = used.map(function (name) {
            var alias = generator.alias(name);
            return { name: name, alias: alias };
        });
    }
    else {
        var inlineHelpers_1 = '';
        usedHelpers.forEach(function (key) {
            var str = shared[key];
            var code = new MagicString$1(str);
            var expression = parseExpressionAt(str, 0);
            var scope = annotateWithScopes(expression).scope;
            walk(expression, {
                enter: function (node, parent) {
                    if (node._scope)
                        scope = node._scope;
                    if (node.type === 'Identifier' &&
                        isReference(node, parent) &&
                        !scope.has(node.name)) {
                        if (node.name in shared) {
                            // this helper function depends on another one
                            var dependency = node.name;
                            usedHelpers.add(dependency);
                            var alias = generator.alias(dependency);
                            if (alias !== node.name)
                                code.overwrite(node.start, node.end, alias);
                        }
                    }
                },
                leave: function (node) {
                    if (node._scope)
                        scope = scope.parent;
                }
            });
            if (key === 'transitionManager') {
                // special case
                var global = "_svelteTransitionManager";
                inlineHelpers_1 += "\n\nvar " + generator.alias('transitionManager') + " = window." + global + " || (window." + global + " = " + code + ");\n\n";
            }
            else {
                var alias = generator.alias(expression.id.name);
                if (alias !== expression.id.name)
                    code.overwrite(expression.id.start, expression.id.end, alias);
                inlineHelpers_1 += "\n\n" + code;
            }
        });
        result += inlineHelpers_1;
    }
    var filename = options.filename && (typeof process !== 'undefined' ? options.filename.replace(process.cwd(), '').replace(/^[\/\\]/, '') : options.filename);
    return generator.generate(result, options, {
        banner: "/* " + (filename ? filename + " " : "") + "generated by Svelte v" + "1.58.0" + " */",
        sharedPath: sharedPath,
        helpers: helpers,
        name: name,
        format: format
    });
}
var templateObject_1;
var templateObject_2;
var templateObject_4;
var templateObject_5;
var templateObject_6;
var templateObject_7;
var templateObject_9;
var templateObject_10;
var templateObject_11;
var templateObject_8;
var templateObject_3;
var templateObject_13;
var templateObject_14;
var templateObject_15;
var templateObject_12;
var templateObject_16;
var templateObject_18;
var templateObject_19;
var templateObject_17;

var Block$3 = /** @class */ (function () {
    function Block(options) {
        Object.assign(this, options);
    }
    Block.prototype.addBinding = function (binding, name) {
        var conditions = ["!('" + binding.name + "' in state)"].concat(
        // TODO handle contextual bindings...
        this.conditions.map(function (c) { return "(" + c + ")"; }));
        var prop = getObject(binding.value).name;
        this.generator.bindings.push(deindent(templateObject_1$14 || (templateObject_1$14 = __makeTemplateObject(["\n\t\t\tif (", ") {\n\t\t\t\ttmp = ", ".data();\n\t\t\t\tif ('", "' in tmp) {\n\t\t\t\t\tstate.", " = tmp.", ";\n\t\t\t\t\tsettled = false;\n\t\t\t\t}\n\t\t\t}\n\t\t"], ["\n\t\t\tif (", ") {\n\t\t\t\ttmp = ", ".data();\n\t\t\t\tif ('", "' in tmp) {\n\t\t\t\t\tstate.", " = tmp.", ";\n\t\t\t\t\tsettled = false;\n\t\t\t\t}\n\t\t\t}\n\t\t"])), conditions.join('&&'), name, prop, binding.name, prop));
    };
    Block.prototype.child = function (options) {
        return new Block(Object.assign({}, this, options, { parent: this }));
    };
    Block.prototype.contextualise = function (expression, context, isEventHandler) {
        return this.generator.contextualise(this.contexts, this.indexes, expression, context, isEventHandler);
    };
    return Block;
}());
var templateObject_1$14;

function visitAwaitBlock(generator, block, node) {
    block.contextualise(node.expression);
    var _a = node.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
    // TODO should this be the generator's job? It's duplicated between
    // here and the equivalent DOM compiler visitor
    var contexts = new Map(block.contexts);
    contexts.set(node.value, '__value');
    var contextDependencies = new Map(block.contextDependencies);
    contextDependencies.set(node.value, dependencies);
    var childBlock = block.child({
        contextDependencies: contextDependencies,
        contexts: contexts
    });
    generator.append('${(function(__value) { if(__isPromise(__value)) return `');
    node.pending.children.forEach(function (child) {
        visit$1(generator, childBlock, child);
    });
    generator.append('`; return `');
    node.then.children.forEach(function (child) {
        visit$1(generator, childBlock, child);
    });
    generator.append("`;}(" + snippet + ")) }");
}

function visitComment() {
    // do nothing
}

function visitComponent(generator, block, node) {
    function stringifyAttribute(chunk) {
        if (chunk.type === 'Text') {
            return escapeTemplate(escape(chunk.data));
        }
        if (chunk.type === 'MustacheTag') {
            block.contextualise(chunk.expression);
            var snippet = chunk.metadata.snippet;
            return '${__escape( ' + snippet + ')}';
        }
    }
    var attributes = [];
    var bindings = [];
    node.attributes.forEach(function (attribute) {
        if (attribute.type === 'Attribute') {
            attributes.push(attribute);
        }
        else if (attribute.type === 'Binding') {
            bindings.push(attribute);
        }
    });
    var props = attributes
        .map(function (attribute) {
        var value;
        if (attribute.value === true) {
            value = "true";
        }
        else if (attribute.value.length === 0) {
            value = "''";
        }
        else if (attribute.value.length === 1) {
            var chunk = attribute.value[0];
            if (chunk.type === 'Text') {
                value = isNaN(chunk.data) ? stringify(chunk.data) : chunk.data;
            }
            else {
                block.contextualise(chunk.expression);
                var snippet = chunk.metadata.snippet;
                value = snippet;
            }
        }
        else {
            value = '`' + attribute.value.map(stringifyAttribute).join('') + '`';
        }
        return attribute.name + ": " + value;
    })
        .concat(bindings.map(function (binding) {
        var name = getObject(binding.value).name;
        var tail = binding.value.type === 'MemberExpression'
            ? getTailSnippet(binding.value)
            : '';
        var keypath = block.contexts.has(name)
            ? "" + name + tail
            : "state." + name + tail;
        return binding.name + ": " + keypath;
    }))
        .join(', ');
    var isDynamicComponent = node.name === ':Component';
    if (isDynamicComponent)
        block.contextualise(node.expression);
    var expression = (node.name === ':Self' ? generator.name :
        isDynamicComponent ? "((" + node.metadata.snippet + ") || __missingComponent)" :
            "%components-" + node.name);
    bindings.forEach(function (binding) {
        block.addBinding(binding, expression);
    });
    var open = "${" + expression + "._render(__result, {" + props + "}";
    var options = [];
    if (generator.options.store) {
        options.push("store: options.store");
    }
    if (node.children.length) {
        var appendTarget_1 = {
            slots: { "default": '' },
            slotStack: ['default']
        };
        generator.appendTargets.push(appendTarget_1);
        node.children.forEach(function (child) {
            visit$1(generator, block, child);
        });
        var slotted = Object.keys(appendTarget_1.slots)
            .map(function (name) { return name + ": () => `" + appendTarget_1.slots[name] + "`"; })
            .join(', ');
        options.push("slotted: { " + slotted + " }");
        generator.appendTargets.pop();
    }
    if (options.length) {
        open += ", { " + options.join(', ') + " }";
    }
    generator.append(open);
    generator.append(')}');
}

function visitEachBlock(generator, block, node) {
    block.contextualise(node.expression);
    var _a = node.metadata, dependencies = _a.dependencies, snippet = _a.snippet;
    var open = "${ " + (node["else"] ? snippet + ".length ? " : '') + snippet + ".map(" + (node.index ? "(" + node.context + ", " + node.index + ")" : "(" + node.context + ")") + " => `";
    generator.append(open);
    // TODO should this be the generator's job? It's duplicated between
    // here and the equivalent DOM compiler visitor
    var contexts = new Map(block.contexts);
    contexts.set(node.context, node.context);
    var indexes = new Map(block.indexes);
    if (node.index)
        indexes.set(node.index, node.context);
    var contextDependencies = new Map(block.contextDependencies);
    contextDependencies.set(node.context, dependencies);
    if (node.destructuredContexts) {
        for (var i = 0; i < node.destructuredContexts.length; i += 1) {
            contexts.set(node.destructuredContexts[i], node.context + "[" + i + "]");
            contextDependencies.set(node.destructuredContexts[i], dependencies);
        }
    }
    var childBlock = block.child({
        contexts: contexts,
        indexes: indexes,
        contextDependencies: contextDependencies
    });
    node.children.forEach(function (child) {
        visit$1(generator, childBlock, child);
    });
    var close = "`).join(\"\")";
    generator.append(close);
    if (node["else"]) {
        generator.append(" : `");
        node["else"].children.forEach(function (child) {
            visit$1(generator, block, child);
        });
        generator.append("`");
    }
    generator.append('}');
}

function visitSlot(generator, block, node) {
    var name = node.attributes.find(function (attribute) { return attribute.name; });
    var slotName = name && name.value[0].data || 'default';
    generator.append("${options && options.slotted && options.slotted." + slotName + " ? options.slotted." + slotName + "() : `");
    node.children.forEach(function (child) {
        visit$1(generator, block, child);
    });
    generator.append("`}");
}

function stringifyAttributeValue$1(block, chunks) {
    return chunks
        .map(function (chunk) {
        if (chunk.type === 'Text') {
            return escapeTemplate(escape(chunk.data).replace(/"/g, '&quot;'));
        }
        block.contextualise(chunk.expression);
        var snippet = chunk.metadata.snippet;
        return '${__escape(' + snippet + ')}';
    })
        .join('');
}

// source: https://gist.github.com/ArjanSchouten/0b8574a6ad7f5065a5e7
var booleanAttributes = new Set('async autocomplete autofocus autoplay border challenge checked compact contenteditable controls default defer disabled formnovalidate frameborder hidden indeterminate ismap loop multiple muted nohref noresize noshade novalidate nowrap open readonly required reversed scoped scrolling seamless selected sortable spellcheck translate'.split(' '));
function visitElement(generator, block, node) {
    if (node.name === 'slot') {
        visitSlot(generator, block, node);
        return;
    }
    var openingTag = "<" + node.name;
    var textareaContents; // awkward special case
    var slot = node.getStaticAttributeValue('slot');
    if (slot && node.hasAncestor('Component')) {
        var slot_1 = node.attributes.find(function (attribute) { return attribute.name === 'slot'; });
        var slotName = slot_1.value[0].data;
        var appendTarget = generator.appendTargets[generator.appendTargets.length - 1];
        appendTarget.slotStack.push(slotName);
        appendTarget.slots[slotName] = '';
    }
    node.attributes.forEach(function (attribute) {
        if (attribute.type !== 'Attribute')
            return;
        if (attribute.name === 'value' && node.name === 'textarea') {
            textareaContents = stringifyAttributeValue$1(block, attribute.value);
        }
        else if (attribute.value === true) {
            openingTag += " " + attribute.name;
        }
        else if (booleanAttributes.has(attribute.name) &&
            attribute.value.length === 1 &&
            attribute.value[0].type !== 'Text') {
            // a boolean attribute with one non-Text chunk
            block.contextualise(attribute.value[0].expression);
            openingTag += '${' + attribute.value[0].metadata.snippet + ' ? " ' + attribute.name + '" : "" }';
        }
        else {
            openingTag += " " + attribute.name + "=\"" + stringifyAttributeValue$1(block, attribute.value) + "\"";
        }
    });
    if (node._cssRefAttribute) {
        openingTag += " svelte-ref-" + node._cssRefAttribute;
    }
    openingTag += '>';
    generator.append(openingTag);
    if (node.name === 'textarea' && textareaContents !== undefined) {
        generator.append(textareaContents);
    }
    else {
        node.children.forEach(function (child) {
            visit$1(generator, block, child);
        });
    }
    if (!isVoidElementName(node.name)) {
        generator.append("</" + node.name + ">");
    }
}

function visitDocument(generator, block, node) {
    generator.append('${(__result.head += `');
    node.children.forEach(function (child) {
        visit$1(generator, block, child);
    });
    generator.append('`, "")}');
}

function visitIfBlock(generator, block, node) {
    block.contextualise(node.expression);
    var snippet = node.metadata.snippet;
    generator.append('${ ' + snippet + ' ? `');
    var childBlock = block.child({
        conditions: block.conditions.concat(snippet)
    });
    node.children.forEach(function (child) {
        visit$1(generator, childBlock, child);
    });
    generator.append('` : `');
    if (node["else"]) {
        node["else"].children.forEach(function (child) {
            visit$1(generator, childBlock, child);
        });
    }
    generator.append('` }');
}

function visitMustacheTag(generator, block, node) {
    block.contextualise(node.expression);
    var snippet = node.metadata.snippet;
    generator.append(node.parent &&
        node.parent.type === 'Element' &&
        node.parent.name === 'style'
        ? '${' + snippet + '}'
        : '${__escape(' + snippet + ')}');
}

function visitRawMustacheTag(generator, block, node) {
    block.contextualise(node.expression);
    var snippet = node.metadata.snippet;
    generator.append('${' + snippet + '}');
}

function visitText(generator, block, node) {
    var text = node.data;
    if (!node.parent ||
        node.parent.type !== 'Element' ||
        (node.parent.name !== 'script' && node.parent.name !== 'style')) {
        // unless this Text node is inside a <script> or <style> element, escape &,<,>
        text = escapeHTML(text);
    }
    generator.append(escape(escapeTemplate(text)));
}

function visitTitle(generator, block, node) {
    generator.append("<title>");
    node.children.forEach(function (child) {
        visit$1(generator, block, child);
    });
    generator.append("</title>");
}

function visitWindow() {
    // noop
}

var visitors = {
    AwaitBlock: visitAwaitBlock,
    Comment: visitComment,
    Component: visitComponent,
    EachBlock: visitEachBlock,
    Element: visitElement,
    Head: visitDocument,
    IfBlock: visitIfBlock,
    MustacheTag: visitMustacheTag,
    RawMustacheTag: visitRawMustacheTag,
    Slot: visitSlot,
    Text: visitText,
    Title: visitTitle,
    Window: visitWindow
};

function visit$1(generator, block, node) {
    var visitor = visitors[node.type];
    visitor(generator, block, node);
}

var SsrGenerator = /** @class */ (function (_super) {
    __extends(SsrGenerator, _super);
    function SsrGenerator(parsed, source, name, stylesheet, options) {
        var _this = _super.call(this, parsed, source, name, stylesheet, options, false) || this;
        _this.bindings = [];
        _this.renderCode = '';
        _this.appendTargets = [];
        _this.stylesheet.warnOnUnusedSelectors(options.onwarn);
        return _this;
    }
    SsrGenerator.prototype.append = function (code) {
        if (this.appendTargets.length) {
            var appendTarget = this.appendTargets[this.appendTargets.length - 1];
            var slotName = appendTarget.slotStack[appendTarget.slotStack.length - 1];
            appendTarget.slots[slotName] += code;
        }
        else {
            this.renderCode += code;
        }
    };
    return SsrGenerator;
}(Generator));
function ssr(parsed, source, stylesheet, options) {
    var format = options.format || 'cjs';
    var generator = new SsrGenerator(parsed, source, options.name || 'SvelteComponent', stylesheet, options);
    var computations = generator.computations, name = generator.name, templateProperties = generator.templateProperties;
    // create main render() function
    var mainBlock = new Block$3({
        generator: generator,
        contexts: new Map(),
        indexes: new Map(),
        conditions: []
    });
    trim(parsed.html.children).forEach(function (node) {
        visit$1(generator, mainBlock, node);
    });
    var _a = generator.customElement ?
        { css: null, cssMap: null } :
        generator.stylesheet.render(options.filename, true), css = _a.css, cssMap = _a.cssMap;
    // generate initial state object
    var expectedProperties = Array.from(generator.expectedProperties);
    var globals = expectedProperties.filter(function (prop) { return globalWhitelist.has(prop); });
    var storeProps = options.store || templateProperties.store ? expectedProperties.filter(function (prop) { return prop[0] === '$'; }) : [];
    var initialState = [];
    if (globals.length > 0) {
        initialState.push("{ " + globals.map(function (prop) { return prop + " : " + prop; }).join(', ') + " }");
    }
    if (storeProps.length > 0) {
        var initialize = "_init([" + storeProps.map(function (prop) { return "\"" + prop.slice(1) + "\""; }) + "])";
        if (options.store || templateProperties.store) {
            initialState.push("options.store." + initialize);
        }
    }
    if (templateProperties.data) {
        initialState.push("%data()");
    }
    else if (globals.length === 0 && storeProps.length === 0) {
        initialState.push('{}');
    }
    initialState.push('state');
    // TODO concatenate CSS maps
    var result = deindent(templateObject_1$13 || (templateObject_1$13 = __makeTemplateObject(["\n\t\t", "\n\n\t\tvar ", " = {};\n\n\t\t", ";\n\n\t\t", ".data = function() {\n\t\t\treturn ", ";\n\t\t};\n\n\t\t", ".render = function(state, options = {}) {\n\t\t\tvar components = new Set();\n\n\t\t\tfunction addComponent(component) {\n\t\t\t\tcomponents.add(component);\n\t\t\t}\n\n\t\t\tvar result = { head: '', addComponent };\n\t\t\tvar html = ", "._render(result, state, options);\n\n\t\t\tvar cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\\n');\n\n\t\t\treturn {\n\t\t\t\thtml,\n\t\t\t\thead: result.head,\n\t\t\t\tcss: { code: cssCode, map: null },\n\t\t\t\ttoString() {\n\t\t\t\t\treturn html;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\n\t\t", "._render = function(__result, state, options) {\n\t\t\t", "\n\t\t\t__result.addComponent(", ");\n\n\t\t\tstate = Object.assign(", ");\n\n\t\t\t", "\n\n\t\t\t", "\n\n\t\t\treturn `", "`;\n\t\t};\n\n\t\t", ".css = {\n\t\t\tcode: ", ",\n\t\t\tmap: ", "\n\t\t};\n\n\t\tvar warned = false;\n\t\t", ".renderCss = function() {\n\t\t\tif (!warned) {\n\t\t\t\tconsole.error('Component.renderCss(...) is deprecated and will be removed in v2 \u2014 use Component.render(...).css instead');\n\t\t\t\twarned = true;\n\t\t\t}\n\n\t\t\tvar components = [];\n\n\t\t\t", "\n\n\t\t\t", "\n\n\t\t\treturn {\n\t\t\t\tcss: components.map(x => x.css).join('\\n'),\n\t\t\t\tmap: null,\n\t\t\t\tcomponents\n\t\t\t};\n\t\t};\n\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\n\t\t", "\n\t"], ["\n\t\t", "\n\n\t\tvar ", " = {};\n\n\t\t", ";\n\n\t\t", ".data = function() {\n\t\t\treturn ", ";\n\t\t};\n\n\t\t", ".render = function(state, options = {}) {\n\t\t\tvar components = new Set();\n\n\t\t\tfunction addComponent(component) {\n\t\t\t\tcomponents.add(component);\n\t\t\t}\n\n\t\t\tvar result = { head: '', addComponent };\n\t\t\tvar html = ", "._render(result, state, options);\n\n\t\t\tvar cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\\\\n');\n\n\t\t\treturn {\n\t\t\t\thtml,\n\t\t\t\thead: result.head,\n\t\t\t\tcss: { code: cssCode, map: null },\n\t\t\t\ttoString() {\n\t\t\t\t\treturn html;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\n\t\t", "._render = function(__result, state, options) {\n\t\t\t", "\n\t\t\t__result.addComponent(", ");\n\n\t\t\tstate = Object.assign(", ");\n\n\t\t\t",
        "\n\n\t\t\t",
        "\n\n\t\t\treturn \\`", "\\`;\n\t\t};\n\n\t\t", ".css = {\n\t\t\tcode: ", ",\n\t\t\tmap: ", "\n\t\t};\n\n\t\tvar warned = false;\n\t\t", ".renderCss = function() {\n\t\t\tif (!warned) {\n\t\t\t\tconsole.error('Component.renderCss(...) is deprecated and will be removed in v2 \u2014 use Component.render(...).css instead');\n\t\t\t\twarned = true;\n\t\t\t}\n\n\t\t\tvar components = [];\n\n\t\t\t",
        "\n\n\t\t\t",
        "\n\n\t\t\treturn {\n\t\t\t\tcss: components.map(x => x.css).join('\\\\n'),\n\t\t\t\tmap: null,\n\t\t\t\tcomponents\n\t\t\t};\n\t\t};\n\n\t\t", "\n\n\t\t"
        // TODO this is a bit hacky
        ,
        "\n\n\t\t",
        "\n\n\t\t",
        "\n\t"])), generator.javascript, name, options.filename && name + ".filename = " + stringify(options.filename), name, templateProperties.data ? "%data()" : "{}", name, name, name, templateProperties.store && "options.store = %store();", name, initialState.join(', '), computations.map(function (_a) {
        var key = _a.key, deps = _a.deps;
        return "state." + key + " = %computed-" + key + "(" + deps.map(function (dep) { return "state." + dep; }).join(', ') + ");";
    }), generator.bindings.length && deindent(templateObject_2$12 || (templateObject_2$12 = __makeTemplateObject(["\n\t\t\t\tvar settled = false;\n\t\t\t\tvar tmp;\n\n\t\t\t\twhile (!settled) {\n\t\t\t\t\tsettled = true;\n\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tvar settled = false;\n\t\t\t\tvar tmp;\n\n\t\t\t\twhile (!settled) {\n\t\t\t\t\tsettled = true;\n\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), generator.bindings.join('\n\n')), generator.renderCode, name, css ? stringify(css) : "''", cssMap ? stringify(cssMap.toString()) : 'null', name, generator.stylesheet.hasStyles && deindent(templateObject_3$12 || (templateObject_3$12 = __makeTemplateObject(["\n\t\t\t\tcomponents.push({\n\t\t\t\t\tfilename: ", ".filename,\n\t\t\t\t\tcss: ", ".css && ", ".css.code,\n\t\t\t\t\tmap: ", ".css && ", ".css.map\n\t\t\t\t});\n\t\t\t"], ["\n\t\t\t\tcomponents.push({\n\t\t\t\t\tfilename: ", ".filename,\n\t\t\t\t\tcss: ", ".css && ", ".css.code,\n\t\t\t\t\tmap: ", ".css && ", ".css.map\n\t\t\t\t});\n\t\t\t"])), name, name, name, name, name), templateProperties.components && deindent(templateObject_4$12 || (templateObject_4$12 = __makeTemplateObject(["\n\t\t\t\tvar seen = {};\n\n\t\t\t\tfunction addComponent(component) {\n\t\t\t\t\tvar result = component.renderCss();\n\t\t\t\t\tresult.components.forEach(x => {\n\t\t\t\t\t\tif (seen[x.filename]) return;\n\t\t\t\t\t\tseen[x.filename] = true;\n\t\t\t\t\t\tcomponents.push(x);\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\t", "\n\t\t\t"], ["\n\t\t\t\tvar seen = {};\n\n\t\t\t\tfunction addComponent(component) {\n\t\t\t\t\tvar result = component.renderCss();\n\t\t\t\t\tresult.components.forEach(x => {\n\t\t\t\t\t\tif (seen[x.filename]) return;\n\t\t\t\t\t\tseen[x.filename] = true;\n\t\t\t\t\t\tcomponents.push(x);\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\t",
        "\n\t\t\t"])), templateProperties.components.value.properties.map(function (prop) {
        return "addComponent(%components-" + getMethodName(prop.key) + ");";
    })), templateProperties.preload && name + ".preload = %preload;", 
    // TODO this is a bit hacky
    /__escape/.test(generator.renderCode) && deindent(templateObject_5$10 || (templateObject_5$10 = __makeTemplateObject(["\n\t\t\t\tvar escaped = {\n\t\t\t\t\t'\"': '&quot;',\n\t\t\t\t\t\"'\": '&##39;',\n\t\t\t\t\t'&': '&amp;',\n\t\t\t\t\t'<': '&lt;',\n\t\t\t\t\t'>': '&gt;'\n\t\t\t\t};\n\n\t\t\t\tfunction __escape(html) {\n\t\t\t\t\treturn String(html).replace(/[\"'&<>]/g, match => escaped[match]);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tvar escaped = {\n\t\t\t\t\t'\"': '&quot;',\n\t\t\t\t\t\"'\": '&##39;',\n\t\t\t\t\t'&': '&amp;',\n\t\t\t\t\t'<': '&lt;',\n\t\t\t\t\t'>': '&gt;'\n\t\t\t\t};\n\n\t\t\t\tfunction __escape(html) {\n\t\t\t\t\treturn String(html).replace(/[\"'&<>]/g, match => escaped[match]);\n\t\t\t\t}\n\t\t\t"]))), /__isPromise/.test(generator.renderCode) && deindent(templateObject_6$10 || (templateObject_6$10 = __makeTemplateObject(["\n\t\t\t\tfunction __isPromise(value) {\n\t\t\t\t\treturn value && typeof value.then === 'function';\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tfunction __isPromise(value) {\n\t\t\t\t\treturn value && typeof value.then === 'function';\n\t\t\t\t}\n\t\t\t"]))), /__missingComponent/.test(generator.renderCode) && deindent(templateObject_7$8 || (templateObject_7$8 = __makeTemplateObject(["\n\t\t\t\tvar __missingComponent = {\n\t\t\t\t\t_render: () => ''\n\t\t\t\t};\n\t\t\t"], ["\n\t\t\t\tvar __missingComponent = {\n\t\t\t\t\t_render: () => ''\n\t\t\t\t};\n\t\t\t"])))).replace(/(@+|#+|%+)(\w*(?:-\w*)?)/g, function (match, sigil, name) {
        if (sigil === '@')
            return generator.alias(name);
        if (sigil === '%')
            return generator.templateVars.get(name);
        return sigil.slice(1) + name;
    });
    return generator.generate(result, options, { name: name, format: format });
}
function trim(nodes) {
    var start = 0;
    for (; start < nodes.length; start += 1) {
        var node = nodes[start];
        if (node.type !== 'Text')
            break;
        node.data = node.data.replace(/^\s+/, '');
        if (node.data)
            break;
    }
    var end = nodes.length;
    for (; end > start; end -= 1) {
        var node = nodes[end - 1];
        if (node.type !== 'Text')
            break;
        node.data = node.data.replace(/\s+$/, '');
        if (node.data)
            break;
    }
    return nodes.slice(start, end);
}
var templateObject_2$12;
var templateObject_3$12;
var templateObject_4$12;
var templateObject_5$10;
var templateObject_6$10;
var templateObject_7$8;
var templateObject_1$13;

function assign$1(target) {
	var k,
		source,
		i = 1,
		len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) target[k] = source[k];
	}

	return target;
}

// TODO is it possible to avoid mounting iterations that are
// already in the right place?

// https://github.com/darkskyapp/string-hash/blob/master/index.js

var UNKNOWN = {};
function gatherPossibleValues(node, set) {
    if (node.type === 'Literal') {
        set.add(node.value);
    }
    else if (node.type === 'ConditionalExpression') {
        gatherPossibleValues(node.consequent, set);
        gatherPossibleValues(node.alternate, set);
    }
    else {
        set.add(UNKNOWN);
    }
}

var Selector$2 = /** @class */ (function () {
    function Selector(node, stylesheet) {
        this.node = node;
        this.stylesheet = stylesheet;
        this.blocks = groupSelectors(node);
        // take trailing :global(...) selectors out of consideration
        var i = this.blocks.length;
        while (i > 0) {
            if (!this.blocks[i - 1].global)
                break;
            i -= 1;
        }
        this.localBlocks = this.blocks.slice(0, i);
        this.used = this.blocks[0].global;
    }
    Selector.prototype.apply = function (node, stack) {
        var _this = this;
        var toEncapsulate = [];
        applySelector(this.localBlocks.slice(), node, stack.slice(), toEncapsulate);
        if (toEncapsulate.length > 0) {
            toEncapsulate.filter(function (_, i) { return i === 0 || i === toEncapsulate.length - 1; }).forEach(function (_a) {
                var node = _a.node, block = _a.block;
                _this.stylesheet.nodesWithCssClass.add(node);
                block.shouldEncapsulate = true;
            });
            this.used = true;
        }
    };
    Selector.prototype.minify = function (code) {
        var c = null;
        this.blocks.forEach(function (block, i) {
            if (i > 0) {
                if (block.start - c > 1) {
                    code.overwrite(c, block.start, block.combinator.name || ' ');
                }
            }
            c = block.end;
        });
    };
    Selector.prototype.transform = function (code, attr) {
        function encapsulateBlock(block) {
            var i = block.selectors.length;
            while (i--) {
                var selector = block.selectors[i];
                if (selector.type === 'PseudoElementSelector' || selector.type === 'PseudoClassSelector')
                    continue;
                if (selector.type === 'TypeSelector' && selector.name === '*') {
                    code.overwrite(selector.start, selector.end, attr);
                }
                else {
                    code.appendLeft(selector.end, attr);
                }
                break;
            }
            i = block.selectors.length;
            while (i--) {
                var selector = block.selectors[i];
                if (selector.type === 'RefSelector') {
                    code.overwrite(selector.start, selector.end, "[svelte-ref-" + selector.name + "]", {
                        contentOnly: true,
                        storeName: false
                    });
                }
            }
        }
        this.blocks.forEach(function (block, i) {
            if (block.global) {
                var selector = block.selectors[0];
                var first = selector.children[0];
                var last = selector.children[selector.children.length - 1];
                code.remove(selector.start, first.start).remove(last.end, selector.end);
            }
            if (block.shouldEncapsulate)
                encapsulateBlock(block);
        });
    };
    Selector.prototype.validate = function (validator) {
        this.blocks.forEach(function (block) {
            var i = block.selectors.length;
            while (i-- > 1) {
                var selector = block.selectors[i];
                if (selector.type === 'PseudoClassSelector' && selector.name === 'global') {
                    validator.error(":global(...) must be the first element in a compound selector", selector);
                }
            }
        });
        var start = 0;
        var end = this.blocks.length;
        for (; start < end; start += 1) {
            if (!this.blocks[start].global)
                break;
        }
        for (; end > start; end -= 1) {
            if (!this.blocks[end - 1].global)
                break;
        }
        for (var i = start; i < end; i += 1) {
            if (this.blocks[i].global) {
                validator.error(":global(...) can be at the start or end of a selector sequence, but not in the middle", this.blocks[i].selectors[0]);
            }
        }
    };
    return Selector;
}());
function applySelector(blocks, node, stack, toEncapsulate) {
    var block = blocks.pop();
    if (!block)
        return false;
    if (!node) {
        return blocks.every(function (block) { return block.global; });
    }
    var i = block.selectors.length;
    var _loop_1 = function () {
        var selector = block.selectors[i];
        if (selector.type === 'PseudoClassSelector' && selector.name === 'global') {
            return { value: false };
        }
        if (selector.type === 'PseudoClassSelector' || selector.type === 'PseudoElementSelector') {
            return "continue";
        }
        if (selector.type === 'ClassSelector') {
            if (!attributeMatches(node, 'class', selector.name, '~=', false))
                return { value: false };
        }
        else if (selector.type === 'IdSelector') {
            if (!attributeMatches(node, 'id', selector.name, '=', false))
                return { value: false };
        }
        else if (selector.type === 'AttributeSelector') {
            if (!attributeMatches(node, selector.name.name, selector.value && unquote(selector.value), selector.matcher, selector.flags))
                return { value: false };
        }
        else if (selector.type === 'TypeSelector') {
            if (node.name !== selector.name && selector.name !== '*')
                return { value: false };
        }
        else if (selector.type === 'RefSelector') {
            if (node.attributes.some(function (attr) { return attr.type === 'Ref' && attr.name === selector.name; })) {
                node._cssRefAttribute = selector.name;
                toEncapsulate.push({ node: node, block: block });
                return { value: true };
            }
            return { value: void 0 };
        }
        else {
            // bail. TODO figure out what these could be
            toEncapsulate.push({ node: node, block: block });
            return { value: true };
        }
    };
    while (i--) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    if (block.combinator) {
        if (block.combinator.type === 'WhiteSpace') {
            while (stack.length) {
                if (applySelector(blocks.slice(), stack.pop(), stack, toEncapsulate)) {
                    toEncapsulate.push({ node: node, block: block });
                    return true;
                }
            }
            return false;
        }
        else if (block.combinator.name === '>') {
            if (applySelector(blocks, stack.pop(), stack, toEncapsulate)) {
                toEncapsulate.push({ node: node, block: block });
                return true;
            }
            return false;
        }
        // TODO other combinators
        toEncapsulate.push({ node: node, block: block });
        return true;
    }
    toEncapsulate.push({ node: node, block: block });
    return true;
}
var operators = {
    '=': function (value, flags) { return new RegExp("^" + value + "$", flags); },
    '~=': function (value, flags) { return new RegExp("\\b" + value + "\\b", flags); },
    '|=': function (value, flags) { return new RegExp("^" + value + "(-.+)?$", flags); },
    '^=': function (value, flags) { return new RegExp("^" + value, flags); },
    '$=': function (value, flags) { return new RegExp(value + "$", flags); },
    '*=': function (value, flags) { return new RegExp(value, flags); }
};
function attributeMatches(node, name, expectedValue, operator, caseInsensitive) {
    var attr = node.attributes.find(function (attr) { return attr.name === name; });
    if (!attr)
        return false;
    if (attr.value === true)
        return operator === null;
    if (attr.value.length > 1)
        return true;
    if (!expectedValue)
        return true;
    var pattern = operators[operator](expectedValue, caseInsensitive ? 'i' : '');
    var value = attr.value[0];
    if (!value)
        return false;
    if (value.type === 'Text')
        return pattern.test(value.data);
    var possibleValues = new Set();
    gatherPossibleValues(value.expression, possibleValues);
    if (possibleValues.has(UNKNOWN))
        return true;
    for (var _i = 0, _a = Array.from(possibleValues); _i < _a.length; _i++) {
        var x = _a[_i];
        if (pattern.test(x))
            return true;
    }
    return false;
}
function unquote(value) {
    if (value.type === 'Identifier')
        return value.name;
    var str = value.value;
    if (str[0] === str[str.length - 1] && str[0] === "'" || str[0] === '"') {
        return str.slice(1, str.length - 1);
    }
    return str;
}
var Block$4 = /** @class */ (function () {
    function Block(combinator) {
        this.combinator = combinator;
        this.global = false;
        this.selectors = [];
        this.start = null;
        this.end = null;
        this.shouldEncapsulate = false;
    }
    Block.prototype.add = function (selector) {
        if (this.selectors.length === 0) {
            this.start = selector.start;
            this.global = selector.type === 'PseudoClassSelector' && selector.name === 'global';
        }
        this.selectors.push(selector);
        this.end = selector.end;
    };
    return Block;
}());
function groupSelectors(selector) {
    var block = new Block$4(null);
    var blocks = [block];
    selector.children.forEach(function (child, i) {
        if (child.type === 'WhiteSpace' || child.type === 'Combinator') {
            block = new Block$4(child);
            blocks.push(block);
        }
        else {
            block.add(child);
        }
    });
    return blocks;
}

var Rule$2 = /** @class */ (function () {
    function Rule(node, stylesheet, parent) {
        this.node = node;
        this.parent = parent;
        this.selectors = node.selector.children.map(function (node) { return new Selector$2(node, stylesheet); });
        this.declarations = node.block.children.map(function (node) { return new Declaration$2(node); });
    }
    Rule.prototype.apply = function (node, stack) {
        this.selectors.forEach(function (selector) { return selector.apply(node, stack); }); // TODO move the logic in here?
    };
    Rule.prototype.isUsed = function (dev) {
        if (this.parent && this.parent.node.type === 'Atrule' && this.parent.node.name === 'keyframes')
            return true;
        if (this.declarations.length === 0)
            return dev;
        return this.selectors.some(function (s) { return s.used; });
    };
    Rule.prototype.minify = function (code, cascade, dev) {
        var c = this.node.start;
        var started = false;
        this.selectors.forEach(function (selector, i) {
            if (cascade || selector.used) {
                var separator = started ? ',' : '';
                if ((selector.node.start - c) > separator.length) {
                    code.overwrite(c, selector.node.start, separator);
                }
                if (!cascade)
                    selector.minify(code);
                c = selector.node.end;
                started = true;
            }
        });
        code.remove(c, this.node.block.start);
        c = this.node.block.start + 1;
        this.declarations.forEach(function (declaration, i) {
            var separator = i > 0 ? ';' : '';
            if ((declaration.node.start - c) > separator.length) {
                code.overwrite(c, declaration.node.start, separator);
            }
            declaration.minify(code);
            c = declaration.node.end;
        });
        code.remove(c, this.node.block.end - 1);
    };
    Rule.prototype.transform = function (code, id, keyframes, cascade) {
        if (this.parent && this.parent.node.type === 'Atrule' && this.parent.node.name === 'keyframes')
            return true;
        var attr = "." + id;
        if (cascade) {
            this.selectors.forEach(function (selector) {
                // TODO disable cascading (without :global(...)) in v2
                var _a = selector.node, start = _a.start, end = _a.end, children = _a.children;
                var css = code.original;
                var selectorString = css.slice(start, end);
                var firstToken = children[0];
                var transformed;
                if (firstToken.type === 'TypeSelector') {
                    var insert = firstToken.end;
                    var head = firstToken.name === '*' ? '' : css.slice(start, insert);
                    var tail = css.slice(insert, end);
                    transformed = "" + head + attr + tail + "," + attr + " " + selectorString;
                }
                else {
                    transformed = "" + attr + selectorString + "," + attr + " " + selectorString;
                }
                code.overwrite(start, end, transformed);
            });
        }
        else {
            this.selectors.forEach(function (selector) { return selector.transform(code, attr); });
        }
        this.declarations.forEach(function (declaration) { return declaration.transform(code, keyframes); });
    };
    Rule.prototype.validate = function (validator) {
        this.selectors.forEach(function (selector) {
            selector.validate(validator);
        });
    };
    Rule.prototype.warnOnUnusedSelector = function (handler) {
        this.selectors.forEach(function (selector) {
            if (!selector.used)
                handler(selector);
        });
    };
    return Rule;
}());
var Declaration$2 = /** @class */ (function () {
    function Declaration(node) {
        this.node = node;
    }
    Declaration.prototype.transform = function (code, keyframes) {
        var property = this.node.property && this.node.property.toLowerCase();
        if (property === 'animation' || property === 'animation-name') {
            this.node.value.children.forEach(function (block) {
                if (block.type === 'Identifier') {
                    var name = block.name;
                    if (keyframes.has(name)) {
                        code.overwrite(block.start, block.end, keyframes.get(name));
                    }
                }
            });
        }
    };
    Declaration.prototype.minify = function (code) {
        if (!this.node.property)
            return; // @apply, and possibly other weird cases?
        var c = this.node.start + this.node.property.length;
        var first = this.node.value.children ?
            this.node.value.children[0] :
            this.node.value;
        var start = first.start;
        while (/\s/.test(code.original[start]))
            start += 1;
        if (start - c > 1) {
            code.overwrite(c, start, ':');
        }
    };
    return Declaration;
}());
var Atrule$2 = /** @class */ (function () {
    function Atrule(node) {
        this.node = node;
        this.children = [];
    }
    Atrule.prototype.apply = function (node, stack) {
        if (this.node.name === 'media' || this.node.name === 'supports') {
            this.children.forEach(function (child) {
                child.apply(node, stack);
            });
        }
        else if (this.node.name === 'keyframes') {
            this.children.forEach(function (rule) {
                rule.selectors.forEach(function (selector) {
                    selector.used = true;
                });
            });
        }
    };
    Atrule.prototype.isUsed = function (dev) {
        return true; // TODO
    };
    Atrule.prototype.minify = function (code, cascade, dev) {
        if (this.node.name === 'media') {
            var expressionChar = code.original[this.node.expression.start];
            var c_1 = this.node.start + (expressionChar === '(' ? 6 : 7);
            if (this.node.expression.start > c_1)
                code.remove(c_1, this.node.expression.start);
            this.node.expression.children.forEach(function (query) {
                // TODO minify queries
                c_1 = query.end;
            });
            code.remove(c_1, this.node.block.start);
        }
        else if (this.node.name === 'keyframes') {
            var c = this.node.start + 10;
            if (this.node.expression.start - c > 1)
                code.overwrite(c, this.node.expression.start, ' ');
            c = this.node.expression.end;
            if (this.node.block.start - c > 0)
                code.remove(c, this.node.block.start);
        }
        else if (this.node.name === 'supports') {
            var c_2 = this.node.start + 9;
            if (this.node.expression.start - c_2 > 1)
                code.overwrite(c_2, this.node.expression.start, ' ');
            this.node.expression.children.forEach(function (query) {
                // TODO minify queries
                c_2 = query.end;
            });
            code.remove(c_2, this.node.block.start);
        }
        // TODO other atrules
        if (this.node.block) {
            var c_3 = this.node.block.start + 1;
            this.children.forEach(function (child) {
                if (cascade || child.isUsed(dev)) {
                    code.remove(c_3, child.node.start);
                    child.minify(code, cascade, dev);
                    c_3 = child.node.end;
                }
            });
            code.remove(c_3, this.node.block.end - 1);
        }
    };
    Atrule.prototype.transform = function (code, id, keyframes, cascade) {
        if (this.node.name === 'keyframes') {
            this.node.expression.children.forEach(function (_a) {
                var type = _a.type, name = _a.name, start = _a.start, end = _a.end;
                if (type === 'Identifier') {
                    if (name.startsWith('-global-')) {
                        code.remove(start, start + 8);
                    }
                    else {
                        code.overwrite(start, end, keyframes.get(name));
                    }
                }
            });
        }
        this.children.forEach(function (child) {
            child.transform(code, id, keyframes, cascade);
        });
    };
    Atrule.prototype.validate = function (validator) {
        this.children.forEach(function (child) {
            child.validate(validator);
        });
    };
    Atrule.prototype.warnOnUnusedSelector = function (handler) {
        if (this.node.name !== 'media')
            return;
        this.children.forEach(function (child) {
            child.warnOnUnusedSelector(handler);
        });
    };
    return Atrule;
}());
var Stylesheet = /** @class */ (function () {
    function Stylesheet(source, parsed, filename, cascade, dev) {
        var _this = this;
        this.source = source;
        this.parsed = parsed;
        this.cascade = cascade;
        this.filename = filename;
        this.dev = dev;
        this.children = [];
        this.keyframes = new Map();
        this.nodesWithCssClass = new Set();
        if (parsed.css && parsed.css.children.length) {
            this.id = "svelte-" + hash(parsed.css.content.styles);
            this.hasStyles = true;
            var stack_1 = [];
            var currentAtrule_1 = null;
            walk(this.parsed.css, {
                enter: function (node) {
                    if (node.type === 'Atrule') {
                        var last = stack_1[stack_1.length - 1];
                        var atrule = new Atrule$2(node);
                        stack_1.push(atrule);
                        // this is an awkward special case — @apply (and
                        // possibly other future constructs)
                        if (last && !(last instanceof Atrule$2))
                            return;
                        if (currentAtrule_1) {
                            currentAtrule_1.children.push(atrule);
                        }
                        else {
                            _this.children.push(atrule);
                        }
                        if (node.name === 'keyframes') {
                            node.expression.children.forEach(function (expression) {
                                if (expression.type === 'Identifier' && !expression.name.startsWith('-global-')) {
                                    _this.keyframes.set(expression.name, _this.id + "-" + expression.name);
                                }
                            });
                        }
                        currentAtrule_1 = atrule;
                    }
                    if (node.type === 'Rule') {
                        var rule = new Rule$2(node, _this, currentAtrule_1);
                        stack_1.push(rule);
                        if (currentAtrule_1) {
                            currentAtrule_1.children.push(rule);
                        }
                        else {
                            _this.children.push(rule);
                        }
                    }
                },
                leave: function (node) {
                    if (node.type === 'Rule' || node.type === 'Atrule')
                        stack_1.pop();
                    if (node.type === 'Atrule')
                        currentAtrule_1 = stack_1[stack_1.length - 1];
                }
            });
        }
        else {
            this.hasStyles = false;
        }
    }
    Stylesheet.prototype.apply = function (node) {
        if (!this.hasStyles)
            return;
        var stack = [];
        var parent = node;
        while (parent = parent.parent) {
            if (parent.type === 'Element')
                stack.unshift(parent);
        }
        if (this.cascade) {
            if (stack.length === 0)
                this.nodesWithCssClass.add(node);
            return;
        }
        for (var i = 0; i < this.children.length; i += 1) {
            var child = this.children[i];
            child.apply(node, stack);
        }
    };
    Stylesheet.prototype.reify = function () {
        this.nodesWithCssClass.forEach(function (node) {
            node.addCssClass();
        });
    };
    Stylesheet.prototype.render = function (cssOutputFilename, shouldTransformSelectors) {
        var _this = this;
        if (!this.hasStyles) {
            return { css: null, cssMap: null };
        }
        var code = new MagicString$1(this.source);
        walk(this.parsed.css, {
            enter: function (node) {
                code.addSourcemapLocation(node.start);
                code.addSourcemapLocation(node.end);
            }
        });
        if (shouldTransformSelectors) {
            this.children.forEach(function (child) {
                child.transform(code, _this.id, _this.keyframes, _this.cascade);
            });
        }
        var c = 0;
        this.children.forEach(function (child) {
            if (_this.cascade || child.isUsed(_this.dev)) {
                code.remove(c, child.node.start);
                child.minify(code, _this.cascade, _this.dev);
                c = child.node.end;
            }
        });
        code.remove(c, this.source.length);
        return {
            css: code.toString(),
            cssMap: code.generateMap({
                includeContent: true,
                source: this.filename,
                file: cssOutputFilename
            })
        };
    };
    Stylesheet.prototype.validate = function (validator) {
        this.children.forEach(function (child) {
            child.validate(validator);
        });
    };
    Stylesheet.prototype.warnOnUnusedSelectors = function (onwarn) {
        var _this = this;
        if (this.cascade)
            return;
        var locator;
        var handler = function (selector) {
            var pos = selector.node.start;
            if (!locator)
                locator = getLocator(_this.source);
            var _a = locator(pos), line = _a.line, column = _a.column;
            var frame = getCodeFrame(_this.source, line, column);
            var message = "Unused CSS selector";
            onwarn({
                message: message,
                frame: frame,
                loc: { line: line + 1, column: column },
                pos: pos,
                filename: _this.filename,
                toString: function () { return message + " (" + (line + 1) + ":" + column + ")\n" + frame; }
            });
        };
        this.children.forEach(function (child) {
            child.warnOnUnusedSelector(handler);
        });
    };
    return Stylesheet;
}());

var version = '1.58.0';
function normalizeOptions(options) {
    var normalizedOptions = assign$1({ generate: 'dom' }, options);
    var onwarn = normalizedOptions.onwarn, onerror = normalizedOptions.onerror;
    normalizedOptions.onwarn = onwarn
        ? function (warning) { return onwarn(warning, defaultOnwarn); }
        : defaultOnwarn;
    normalizedOptions.onerror = onerror
        ? function (error) { return onerror(error, defaultOnerror); }
        : defaultOnerror;
    return normalizedOptions;
}
function defaultOnwarn(warning) {
    if (warning.loc) {
        console.warn("(" + warning.loc.line + ":" + warning.loc.column + ") \u2013 " + warning.message); // eslint-disable-line no-console
    }
    else {
        console.warn(warning.message); // eslint-disable-line no-console
    }
}
function defaultOnerror(error) {
    throw error;
}
function parseAttributeValue(value) {
    return /^['"]/.test(value) ?
        value.slice(1, -1) :
        value;
}
function parseAttributes(str) {
    var attrs = {};
    str.split(/\s+/).filter(Boolean).forEach(function (attr) {
        var _a = attr.split('='), name = _a[0], value = _a[1];
        attrs[name] = value ? parseAttributeValue(value) : true;
    });
    return attrs;
}
function replaceTagContents(source, type, preprocessor, options) {
    return __awaiter(this, void 0, void 0, function () {
        var exp, match, attributes, content, processed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exp = new RegExp("<" + type + "([\\S\\s]*?)>([\\S\\s]*?)<\\/" + type + ">", 'ig');
                    match = exp.exec(source);
                    if (!match) return [3 /*break*/, 2];
                    attributes = parseAttributes(match[1]);
                    content = match[2];
                    return [4 /*yield*/, preprocessor({
                            content: content,
                            attributes: attributes,
                            filename: options.filename
                        })];
                case 1:
                    processed = _a.sent();
                    if (processed && processed.code) {
                        return [2 /*return*/, (source.slice(0, match.index) +
                                ("<" + type + ">" + processed.code + "</" + type + ">") +
                                source.slice(match.index + match[0].length))];
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/, source];
            }
        });
    });
}
function preprocess(source, options) {
    return __awaiter(this, void 0, void 0, function () {
        var markup, style, script, processed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    markup = options.markup, style = options.style, script = options.script;
                    if (!!!markup) return [3 /*break*/, 2];
                    return [4 /*yield*/, markup({
                            content: source,
                            filename: options.filename
                        })];
                case 1:
                    processed = _a.sent();
                    source = processed.code;
                    _a.label = 2;
                case 2:
                    if (!!!style) return [3 /*break*/, 4];
                    return [4 /*yield*/, replaceTagContents(source, 'style', style, options)];
                case 3:
                    source = _a.sent();
                    _a.label = 4;
                case 4:
                    if (!!!script) return [3 /*break*/, 6];
                    return [4 /*yield*/, replaceTagContents(source, 'script', script, options)];
                case 5:
                    source = _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/, {
                        // TODO return separated output, in future version where svelte.compile supports it:
                        // style: { code: styleCode, map: styleMap },
                        // script { code: scriptCode, map: scriptMap },
                        // markup { code: markupCode, map: markupMap },
                        toString: function () {
                            return source;
                        }
                    }];
            }
        });
    });
}
function compile(source, _options) {
    var options = normalizeOptions(_options);
    var parsed;
    try {
        parsed = parse(source, options);
    }
    catch (err) {
        options.onerror(err);
        return;
    }
    var stylesheet = new Stylesheet(source, parsed, options.filename, options.cascade !== false, options.dev);
    validate(parsed, source, stylesheet, options);
    var compiler = options.generate === 'ssr' ? ssr : dom;
    return compiler(parsed, source, stylesheet, options);
}

function create(source, _options) {
    if (_options === void 0) { _options = {}; }
    _options.format = 'eval';
    var compiled = compile(source, _options);
    if (!compiled || !compiled.code) {
        return;
    }
    try {
        return (0, eval)(compiled.code);
    }
    catch (err) {
        if (_options.onerror) {
            _options.onerror(err);
            return;
        }
        else {
            throw err;
        }
    }
}

exports.preprocess = preprocess;
exports.compile = compile;
exports.create = create;
exports.parse = parse;
exports.validate = validate;
exports.Stylesheet = Stylesheet;
exports.VERSION = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=svelte.js.map
