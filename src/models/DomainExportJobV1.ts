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
 * @interface DomainExportJobV1
 */
export interface DomainExportJobV1 {
    /**
     *
     * @type {string}
     * @memberof DomainExportJobV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainExportJobV1
     */
    status: string;
}

/**
 * Check if a given object implements the DomainExportJobV1 interface.
 */
export function instanceOfDomainExportJobV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function DomainExportJobV1FromJSON(json: any): DomainExportJobV1 {
    return DomainExportJobV1FromJSONTyped(json, false);
}

export function DomainExportJobV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExportJobV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json["id"],
        status: json["status"],
    };
}

export function DomainExportJobV1ToJSON(value?: DomainExportJobV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        status: value.status,
    };
}
