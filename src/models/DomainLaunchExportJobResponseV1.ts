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
import type { DomainExportJobV1 } from "./DomainExportJobV1";
import { DomainExportJobV1FromJSON, DomainExportJobV1FromJSONTyped, DomainExportJobV1ToJSON } from "./DomainExportJobV1";
import type { MsaMetaInfo } from "./MsaMetaInfo";
import { MsaMetaInfoFromJSON, MsaMetaInfoFromJSONTyped, MsaMetaInfoToJSON } from "./MsaMetaInfo";
import type { ReconmsaAPIError } from "./ReconmsaAPIError";
import { ReconmsaAPIErrorFromJSON, ReconmsaAPIErrorFromJSONTyped, ReconmsaAPIErrorToJSON } from "./ReconmsaAPIError";

/**
 *
 * @export
 * @interface DomainLaunchExportJobResponseV1
 */
export interface DomainLaunchExportJobResponseV1 {
    /**
     *
     * @type {Array<ReconmsaAPIError>}
     * @memberof DomainLaunchExportJobResponseV1
     */
    errors: Array<ReconmsaAPIError>;
    /**
     *
     * @type {MsaMetaInfo}
     * @memberof DomainLaunchExportJobResponseV1
     */
    meta: MsaMetaInfo;
    /**
     *
     * @type {Array<DomainExportJobV1>}
     * @memberof DomainLaunchExportJobResponseV1
     */
    resources: Array<DomainExportJobV1>;
}

/**
 * Check if a given object implements the DomainLaunchExportJobResponseV1 interface.
 */
export function instanceOfDomainLaunchExportJobResponseV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function DomainLaunchExportJobResponseV1FromJSON(json: any): DomainLaunchExportJobResponseV1 {
    return DomainLaunchExportJobResponseV1FromJSONTyped(json, false);
}

export function DomainLaunchExportJobResponseV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainLaunchExportJobResponseV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: (json["errors"] as Array<any>).map(ReconmsaAPIErrorFromJSON),
        meta: MsaMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(DomainExportJobV1FromJSON),
    };
}

export function DomainLaunchExportJobResponseV1ToJSON(value?: DomainLaunchExportJobResponseV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: (value.errors as Array<any>).map(ReconmsaAPIErrorToJSON),
        meta: MsaMetaInfoToJSON(value.meta),
        resources: (value.resources as Array<any>).map(DomainExportJobV1ToJSON),
    };
}
