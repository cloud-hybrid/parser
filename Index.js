/***
 * @type {{Asyncronous: {Arguments: (function(): {Arguments: string[], Mapping: {}}|{Arguments?: string[], Mapping?: {}}), Serializer: (function(): {Reader: function(*=, *=): {JSON: any|null, String: string|string}, Constants: {JSON: any|null, String: string|string}}|{Reader?: function(*=, *=): {JSON: any|null, String: string|string}, Constants?: {JSON: any|null, String: string|string}})}, Arguments: (function(): Promise<{Arguments: string[], Mapping: {}}|{Arguments?: string[], Mapping?: {}}>), Serializer: (function(): Promise<{Reader: function(*=, *=): {JSON: any|null, String: string|string}, Constants: {JSON: any|null, String: string|string}}|{Reader?: function(*=, *=): {JSON: any|null, String: string|string}, Constants?: {JSON: any|null, String: string|string}}>)}}
***/

const Exports = new Map();

Exports.set("Arguments", require("./Arguments"));
Exports.set("Serializer", require("./Serializer"));

module.exports = Exports;
