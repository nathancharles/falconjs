/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ApiActionV1
 */
export interface ApiActionV1 {
    /**
     *
     * @type {string}
     * @memberof ApiActionV1
     */
    id: string;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof ApiActionV1
     */
    platformsByType: { [key: string]: object };
    /**
     *
     * @type {Array<string>}
     * @memberof ApiActionV1
     */
    severities: Array<string>;
}

/**
 * Check if a given object implements the ApiActionV1 interface.
 */
export function instanceOfApiActionV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "platformsByType" in value;
    isInstance = isInstance && "severities" in value;

    return isInstance;
}

export function ApiActionV1FromJSON(json: any): ApiActionV1 {
    return ApiActionV1FromJSONTyped(json, false);
}

export function ApiActionV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiActionV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json["id"],
        platformsByType: json["platforms_by_type"],
        severities: json["severities"],
    };
}

export function ApiActionV1ToJSON(value?: ApiActionV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        platforms_by_type: value.platformsByType,
        severities: value.severities,
    };
}
