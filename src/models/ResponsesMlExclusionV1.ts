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

/**
 *
 * @export
 * @interface ResponsesMlExclusionV1
 */
export interface ResponsesMlExclusionV1 {
    /**
     *
     * @type {boolean}
     * @memberof ResponsesMlExclusionV1
     */
    appliedGlobally: boolean;
    /**
     *
     * @type {string}
     * @memberof ResponsesMlExclusionV1
     */
    createdBy: string;
    /**
     *
     * @type {Date}
     * @memberof ResponsesMlExclusionV1
     */
    createdOn: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof ResponsesMlExclusionV1
     */
    excludedFrom?: Array<string>;
    /**
     *
     * @type {Array<ResponsesHostGroupV1>}
     * @memberof ResponsesMlExclusionV1
     */
    groups: Array<ResponsesHostGroupV1>;
    /**
     *
     * @type {string}
     * @memberof ResponsesMlExclusionV1
     */
    id: string;
    /**
     *
     * @type {Date}
     * @memberof ResponsesMlExclusionV1
     */
    lastModified: Date;
    /**
     *
     * @type {string}
     * @memberof ResponsesMlExclusionV1
     */
    modifiedBy: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesMlExclusionV1
     */
    regexpValue: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesMlExclusionV1
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesMlExclusionV1
     */
    valueHash: string;
}

/**
 * Check if a given object implements the ResponsesMlExclusionV1 interface.
 */
export function instanceOfResponsesMlExclusionV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appliedGlobally" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdOn" in value;
    isInstance = isInstance && "groups" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "lastModified" in value;
    isInstance = isInstance && "modifiedBy" in value;
    isInstance = isInstance && "regexpValue" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "valueHash" in value;

    return isInstance;
}

export function ResponsesMlExclusionV1FromJSON(json: any): ResponsesMlExclusionV1 {
    return ResponsesMlExclusionV1FromJSONTyped(json, false);
}

export function ResponsesMlExclusionV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsesMlExclusionV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appliedGlobally: json["applied_globally"],
        createdBy: json["created_by"],
        createdOn: new Date(json["created_on"]),
        excludedFrom: !exists(json, "excluded_from") ? undefined : json["excluded_from"],
        groups: (json["groups"] as Array<any>).map(ResponsesHostGroupV1FromJSON),
        id: json["id"],
        lastModified: new Date(json["last_modified"]),
        modifiedBy: json["modified_by"],
        regexpValue: json["regexp_value"],
        value: json["value"],
        valueHash: json["value_hash"],
    };
}

export function ResponsesMlExclusionV1ToJSON(value?: ResponsesMlExclusionV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        applied_globally: value.appliedGlobally,
        created_by: value.createdBy,
        created_on: value.createdOn.toISOString(),
        excluded_from: value.excludedFrom,
        groups: (value.groups as Array<any>).map(ResponsesHostGroupV1ToJSON),
        id: value.id,
        last_modified: value.lastModified.toISOString(),
        modified_by: value.modifiedBy,
        regexp_value: value.regexpValue,
        value: value.value,
        value_hash: value.valueHash,
    };
}
