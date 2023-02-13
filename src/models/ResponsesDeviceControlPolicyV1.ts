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
import type { ResponsesDeviceControlSettingsV1 } from "./ResponsesDeviceControlSettingsV1";
import { ResponsesDeviceControlSettingsV1FromJSON, ResponsesDeviceControlSettingsV1FromJSONTyped, ResponsesDeviceControlSettingsV1ToJSON } from "./ResponsesDeviceControlSettingsV1";
import type { ResponsesHostGroupV1 } from "./ResponsesHostGroupV1";
import { ResponsesHostGroupV1FromJSON, ResponsesHostGroupV1FromJSONTyped, ResponsesHostGroupV1ToJSON } from "./ResponsesHostGroupV1";

/**
 *
 * @export
 * @interface ResponsesDeviceControlPolicyV1
 */
export interface ResponsesDeviceControlPolicyV1 {
    /**
     * The customer id associated with the policy
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    cid: string;
    /**
     * The email of the user which created the policy
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    createdBy: string;
    /**
     * The time at which the policy was created
     * @type {Date}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    createdTimestamp: Date;
    /**
     * The description of a policy. Use this field to provide a high level summary of what this policy enforces
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    description: string;
    /**
     * If a policy is enabled it will be used during the course of policy evaluation
     * @type {boolean}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    enabled: boolean;
    /**
     * The groups that are currently attached to the policy
     * @type {Array<ResponsesHostGroupV1>}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    groups: Array<ResponsesHostGroupV1>;
    /**
     * The unique id of the policy
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    id: string;
    /**
     * The email of the user which last modified the policy
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    modifiedBy: string;
    /**
     * The time at which the policy was last modified
     * @type {Date}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    modifiedTimestamp: Date;
    /**
     * The human readable name of the policy
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    name: string;
    /**
     * The name of the platform
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    platformName: ResponsesDeviceControlPolicyV1PlatformNameEnum;
    /**
     *
     * @type {ResponsesDeviceControlSettingsV1}
     * @memberof ResponsesDeviceControlPolicyV1
     */
    settings: ResponsesDeviceControlSettingsV1;
}

/**
 * @export
 */
export const ResponsesDeviceControlPolicyV1PlatformNameEnum = {
    Windows: "Windows",
    Mac: "Mac",
    Linux: "Linux",
} as const;
export type ResponsesDeviceControlPolicyV1PlatformNameEnum = (typeof ResponsesDeviceControlPolicyV1PlatformNameEnum)[keyof typeof ResponsesDeviceControlPolicyV1PlatformNameEnum];

/**
 * Check if a given object implements the ResponsesDeviceControlPolicyV1 interface.
 */
export function instanceOfResponsesDeviceControlPolicyV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdTimestamp" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "groups" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "modifiedBy" in value;
    isInstance = isInstance && "modifiedTimestamp" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "platformName" in value;
    isInstance = isInstance && "settings" in value;

    return isInstance;
}

export function ResponsesDeviceControlPolicyV1FromJSON(json: any): ResponsesDeviceControlPolicyV1 {
    return ResponsesDeviceControlPolicyV1FromJSONTyped(json, false);
}

export function ResponsesDeviceControlPolicyV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsesDeviceControlPolicyV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cid: json["cid"],
        createdBy: json["created_by"],
        createdTimestamp: new Date(json["created_timestamp"]),
        description: json["description"],
        enabled: json["enabled"],
        groups: (json["groups"] as Array<any>).map(ResponsesHostGroupV1FromJSON),
        id: json["id"],
        modifiedBy: json["modified_by"],
        modifiedTimestamp: new Date(json["modified_timestamp"]),
        name: json["name"],
        platformName: json["platform_name"],
        settings: ResponsesDeviceControlSettingsV1FromJSON(json["settings"]),
    };
}

export function ResponsesDeviceControlPolicyV1ToJSON(value?: ResponsesDeviceControlPolicyV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cid: value.cid,
        created_by: value.createdBy,
        created_timestamp: value.createdTimestamp.toISOString(),
        description: value.description,
        enabled: value.enabled,
        groups: (value.groups as Array<any>).map(ResponsesHostGroupV1ToJSON),
        id: value.id,
        modified_by: value.modifiedBy,
        modified_timestamp: value.modifiedTimestamp.toISOString(),
        name: value.name,
        platform_name: value.platformName,
        settings: ResponsesDeviceControlSettingsV1ToJSON(value.settings),
    };
}
