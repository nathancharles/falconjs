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
 * @interface DomainFileV2
 */
export interface DomainFileV2 {
    /**
     *
     * @type {string}
     * @memberof DomainFileV2
     */
    cloudRequestId: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainFileV2
     */
    complete: boolean;
    /**
     *
     * @type {Date}
     * @memberof DomainFileV2
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof DomainFileV2
     */
    deletedAt: Date;
    /**
     *
     * @type {string}
     * @memberof DomainFileV2
     */
    errorMessage: string;
    /**
     *
     * @type {string}
     * @memberof DomainFileV2
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainFileV2
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof DomainFileV2
     */
    progress: number;
    /**
     *
     * @type {string}
     * @memberof DomainFileV2
     */
    sessionId: string;
    /**
     *
     * @type {string}
     * @memberof DomainFileV2
     */
    sha256: string;
    /**
     *
     * @type {number}
     * @memberof DomainFileV2
     */
    size: number;
    /**
     *
     * @type {string}
     * @memberof DomainFileV2
     */
    stage: string;
    /**
     *
     * @type {string}
     * @memberof DomainFileV2
     */
    status: string;
    /**
     *
     * @type {Date}
     * @memberof DomainFileV2
     */
    updatedAt: Date;
}

export function DomainFileV2FromJSON(json: any): DomainFileV2 {
    return DomainFileV2FromJSONTyped(json, false);
}

export function DomainFileV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainFileV2 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cloudRequestId: json["cloud_request_id"],
        complete: json["complete"],
        createdAt: new Date(json["created_at"]),
        deletedAt: new Date(json["deleted_at"]),
        errorMessage: json["error_message"],
        id: json["id"],
        name: json["name"],
        progress: json["progress"],
        sessionId: json["session_id"],
        sha256: json["sha256"],
        size: json["size"],
        stage: json["stage"],
        status: json["status"],
        updatedAt: new Date(json["updated_at"]),
    };
}

export function DomainFileV2ToJSON(value?: DomainFileV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cloud_request_id: value.cloudRequestId,
        complete: value.complete,
        created_at: value.createdAt.toISOString(),
        deleted_at: value.deletedAt.toISOString(),
        error_message: value.errorMessage,
        id: value.id,
        name: value.name,
        progress: value.progress,
        session_id: value.sessionId,
        sha256: value.sha256,
        size: value.size,
        stage: value.stage,
        status: value.status,
        updated_at: value.updatedAt.toISOString(),
    };
}
