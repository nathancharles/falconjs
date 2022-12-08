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
 * @interface ApiExposedDataRecordLocationV1
 */
export interface ApiExposedDataRecordLocationV1 {
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    countryCode?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    federalAdminRegion?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    federalDistrict?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    postalCode?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    state?: string;
}

/**
 * Check if a given object implements the ApiExposedDataRecordLocationV1 interface.
 */
export function instanceOfApiExposedDataRecordLocationV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiExposedDataRecordLocationV1FromJSON(json: any): ApiExposedDataRecordLocationV1 {
    return ApiExposedDataRecordLocationV1FromJSONTyped(json, false);
}

export function ApiExposedDataRecordLocationV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiExposedDataRecordLocationV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        city: !exists(json, "city") ? undefined : json["city"],
        countryCode: !exists(json, "country_code") ? undefined : json["country_code"],
        federalAdminRegion: !exists(json, "federal_admin_region") ? undefined : json["federal_admin_region"],
        federalDistrict: !exists(json, "federal_district") ? undefined : json["federal_district"],
        postalCode: !exists(json, "postal_code") ? undefined : json["postal_code"],
        state: !exists(json, "state") ? undefined : json["state"],
    };
}

export function ApiExposedDataRecordLocationV1ToJSON(value?: ApiExposedDataRecordLocationV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        city: value.city,
        country_code: value.countryCode,
        federal_admin_region: value.federalAdminRegion,
        federal_district: value.federalDistrict,
        postal_code: value.postalCode,
        state: value.state,
    };
}
