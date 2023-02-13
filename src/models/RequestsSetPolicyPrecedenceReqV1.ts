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
 * Sets the precedence order for policies of a given platform
 * @export
 * @interface RequestsSetPolicyPrecedenceReqV1
 */
export interface RequestsSetPolicyPrecedenceReqV1 {
    /**
     * The ids of all current prevention policies for the platform specified. The precedence will be set in the order the ids are specified
     * @type {Array<string>}
     * @memberof RequestsSetPolicyPrecedenceReqV1
     */
    ids: Array<string>;
    /**
     * The name of the platform for which to set precedence
     * @type {string}
     * @memberof RequestsSetPolicyPrecedenceReqV1
     */
    platformName: RequestsSetPolicyPrecedenceReqV1PlatformNameEnum;
}

/**
 * @export
 */
export const RequestsSetPolicyPrecedenceReqV1PlatformNameEnum = {
    Windows: "Windows",
    Mac: "Mac",
    Linux: "Linux",
} as const;
export type RequestsSetPolicyPrecedenceReqV1PlatformNameEnum = (typeof RequestsSetPolicyPrecedenceReqV1PlatformNameEnum)[keyof typeof RequestsSetPolicyPrecedenceReqV1PlatformNameEnum];

/**
 * Check if a given object implements the RequestsSetPolicyPrecedenceReqV1 interface.
 */
export function instanceOfRequestsSetPolicyPrecedenceReqV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ids" in value;
    isInstance = isInstance && "platformName" in value;

    return isInstance;
}

export function RequestsSetPolicyPrecedenceReqV1FromJSON(json: any): RequestsSetPolicyPrecedenceReqV1 {
    return RequestsSetPolicyPrecedenceReqV1FromJSONTyped(json, false);
}

export function RequestsSetPolicyPrecedenceReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestsSetPolicyPrecedenceReqV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        ids: json["ids"],
        platformName: json["platform_name"],
    };
}

export function RequestsSetPolicyPrecedenceReqV1ToJSON(value?: RequestsSetPolicyPrecedenceReqV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ids: value.ids,
        platform_name: value.platformName,
    };
}
