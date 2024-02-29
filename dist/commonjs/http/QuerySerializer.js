"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializePath = exports.serializeQuery = void 0;
const styleMethods = {
    simple: (value, explode) => {
        // Check if the value is an array
        if (Array.isArray(value)) {
            return explode ? value.join(',') : value.join();
        }
        // Check if the value is an object
        if (typeof value === 'object' && value !== null) {
            if (explode) {
                // Serialize object with exploded format: "key=value,key2=value2"
                return Object.entries(value)
                    .map(([parameterName, parameterValue]) => `${parameterName}=${parameterValue}`)
                    .join(',');
            }
            // Serialize object with non-exploded format: "key,value,key2,value2"
            return Object.entries(value)
                .flatMap(([parameterName, parameterValue]) => [parameterName, parameterValue])
                .join(',');
        }
        // For primitive values
        return String(value);
    },
    form: (parameterName, parameterValue, explode) => {
        // Check if the parameterValue is an array
        if (Array.isArray(parameterValue)) {
            return explode
                ? parameterValue.map((value) => `${parameterName}=${value}`).join('&')
                : `${parameterName}=${parameterValue.join(',')}`;
        }
        // Check if the parameterValue is an object
        if (typeof parameterValue === 'object' && parameterValue !== null) {
            if (explode) {
                // Serialize object with exploded format: "key1=value1&key2=value2"
                return Object.entries(parameterValue)
                    .map(([name, value]) => `${name}=${value}`)
                    .join('&');
            }
            // Serialize object with non-exploded format: "key=key1,value1,key2,value2"
            return `${parameterName}=${Object.entries(parameterValue)
                .flatMap(([name, value]) => [name, value])
                .join(',')}`;
        }
        // For primitive values
        return `${parameterName}=${parameterValue}`;
    },
};
function serializeQuery(style, explode, key, value) {
    const method = styleMethods[style];
    if (!method)
        return '';
    return method(key, value, explode);
}
exports.serializeQuery = serializeQuery;
function serializePath(style, explode, value, key) {
    const method = styleMethods[style];
    if (!method)
        return '';
    // The `simple` and `label` styles do not require a `key`
    if (!key) {
        return method(value, explode);
    }
    else {
        return method(key, value, explode);
    }
}
exports.serializePath = serializePath;
//# sourceMappingURL=QuerySerializer.js.map