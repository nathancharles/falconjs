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
import type { ResponsesHostGroupV1 } from "./ResponsesHostGroupV1";
import { ResponsesHostGroupV1FromJSON, ResponsesHostGroupV1FromJSONTyped, ResponsesHostGroupV1ToJSON } from "./ResponsesHostGroupV1";
import type { ResponsesIOARuleGroupV1 } from "./ResponsesIOARuleGroupV1";
import { ResponsesIOARuleGroupV1FromJSON, ResponsesIOARuleGroupV1FromJSONTyped, ResponsesIOARuleGroupV1ToJSON } from "./ResponsesIOARuleGroupV1";
import type { ResponsesPreventionCategoryV1 } from "./ResponsesPreventionCategoryV1";
import { ResponsesPreventionCategoryV1FromJSON, ResponsesPreventionCategoryV1FromJSONTyped, ResponsesPreventionCategoryV1ToJSON } from "./ResponsesPreventionCategoryV1";

/**
 * A fully formed prevention policy
 * @export
 * @interface ResponsesPreventionPolicyV1
 */
export interface ResponsesPreventionPolicyV1 {
    /**
     * The customer id associated with the policy
     * @type {string}
     * @memberof ResponsesPreventionPolicyV1
     */
    cid: string;
    /**
     * The email of the user which created the policy
     * @type {string}
     * @memberof ResponsesPreventionPolicyV1
     */
    createdBy: string;
    /**
     * The time at which the policy was created
     * @type {Date}
     * @memberof ResponsesPreventionPolicyV1
     */
    createdTimestamp: Date;
    /**
     * The description of a policy. Use this field to provide a high level summary of what this policy enforces
     * @type {string}
     * @memberof ResponsesPreventionPolicyV1
     */
    description: string;
    /**
     * If a policy is enabled it will be used during the course of policy evaluation
     * @type {boolean}
     * @memberof ResponsesPreventionPolicyV1
     */
    enabled: boolean;
    /**
     * The groups that are currently attached to the policy
     * @type {Array<ResponsesHostGroupV1>}
     * @memberof ResponsesPreventionPolicyV1
     */
    groups: Array<ResponsesHostGroupV1>;
    /**
     * The unique id of the policy
     * @type {string}
     * @memberof ResponsesPreventionPolicyV1
     */
    id: string;
    /**
     * The IOA rule groups that are currently attached to the policy
     * @type {Array<ResponsesIOARuleGroupV1>}
     * @memberof ResponsesPreventionPolicyV1
     */
    ioaRuleGroups: Array<ResponsesIOARuleGroupV1>;
    /**
     * The email of the user which last modified the policy
     * @type {string}
     * @memberof ResponsesPreventionPolicyV1
     */
    modifiedBy: string;
    /**
     * The time at which the policy was last modified
     * @type {Date}
     * @memberof ResponsesPreventionPolicyV1
     */
    modifiedTimestamp: Date;
    /**
     * The human readable name of the policy
     * @type {string}
     * @memberof ResponsesPreventionPolicyV1
     */
    name: string;
    /**
     * The name of the platform
     * @type {string}
     * @memberof ResponsesPreventionPolicyV1
     */
    platformName: ResponsesPreventionPolicyV1PlatformNameEnum;
    /**
     * A category of settings in a prevention policy
     * @type {Array<ResponsesPreventionCategoryV1>}
     * @memberof ResponsesPreventionPolicyV1
     */
    preventionSettings: Array<ResponsesPreventionCategoryV1>;
}

/**
 * @export
 */
export const ResponsesPreventionPolicyV1PlatformNameEnum = {
    Windows: "Windows",
    Mac: "Mac",
    Linux: "Linux",
} as const;
export type ResponsesPreventionPolicyV1PlatformNameEnum = (typeof ResponsesPreventionPolicyV1PlatformNameEnum)[keyof typeof ResponsesPreventionPolicyV1PlatformNameEnum];

/**
 * Check if a given object implements the ResponsesPreventionPolicyV1 interface.
 */
export function instanceOfResponsesPreventionPolicyV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdTimestamp" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "groups" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ioaRuleGroups" in value;
    isInstance = isInstance && "modifiedBy" in value;
    isInstance = isInstance && "modifiedTimestamp" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "platformName" in value;
    isInstance = isInstance && "preventionSettings" in value;

    return isInstance;
}

export function ResponsesPreventionPolicyV1FromJSON(json: any): ResponsesPreventionPolicyV1 {
    return ResponsesPreventionPolicyV1FromJSONTyped(json, false);
}

export function ResponsesPreventionPolicyV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsesPreventionPolicyV1 {
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
        ioaRuleGroups: (json["ioa_rule_groups"] as Array<any>).map(ResponsesIOARuleGroupV1FromJSON),
        modifiedBy: json["modified_by"],
        modifiedTimestamp: new Date(json["modified_timestamp"]),
        name: json["name"],
        platformName: json["platform_name"],
        preventionSettings: (json["prevention_settings"] as Array<any>).map(ResponsesPreventionCategoryV1FromJSON),
    };
}

export function ResponsesPreventionPolicyV1ToJSON(value?: ResponsesPreventionPolicyV1 | null): any {
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
        ioa_rule_groups: (value.ioaRuleGroups as Array<any>).map(ResponsesIOARuleGroupV1ToJSON),
        modified_by: value.modifiedBy,
        modified_timestamp: value.modifiedTimestamp.toISOString(),
        name: value.name,
        platform_name: value.platformName,
        prevention_settings: (value.preventionSettings as Array<any>).map(ResponsesPreventionCategoryV1ToJSON),
    };
}
