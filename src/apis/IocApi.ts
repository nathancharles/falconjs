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

import * as runtime from "../runtime";
import type {
    ApiActionRespV1,
    ApiIndicatorCreateReqsV1,
    ApiIndicatorQueryRespV1,
    ApiIndicatorQueryResponse,
    ApiIndicatorRespV1,
    ApiIndicatorUpdateReqsV1,
    ApiIndicatorsReportRequest,
    MsaAggregateQueryRequest,
    MsaAggregatesResponse,
    MsaEntitiesResponse,
    MsaReplyMetaOnly,
} from "../models";
import {
    ApiActionRespV1FromJSON,
    ApiActionRespV1ToJSON,
    ApiIndicatorCreateReqsV1FromJSON,
    ApiIndicatorCreateReqsV1ToJSON,
    ApiIndicatorQueryRespV1FromJSON,
    ApiIndicatorQueryRespV1ToJSON,
    ApiIndicatorQueryResponseFromJSON,
    ApiIndicatorQueryResponseToJSON,
    ApiIndicatorRespV1FromJSON,
    ApiIndicatorRespV1ToJSON,
    ApiIndicatorUpdateReqsV1FromJSON,
    ApiIndicatorUpdateReqsV1ToJSON,
    ApiIndicatorsReportRequestFromJSON,
    ApiIndicatorsReportRequestToJSON,
    MsaAggregateQueryRequestFromJSON,
    MsaAggregateQueryRequestToJSON,
    MsaAggregatesResponseFromJSON,
    MsaAggregatesResponseToJSON,
    MsaEntitiesResponseFromJSON,
    MsaEntitiesResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface ActionGetV1Request {
    ids?: Array<string>;
}

export interface ActionQueryV1Request {
    offset?: string;
    limit?: number;
}

export interface GetIndicatorsReportRequest {
    body: ApiIndicatorsReportRequest;
}

export interface IndicatorAggregateV1Request {
    body: MsaAggregateQueryRequest;
    filter?: string;
    fromParent?: boolean;
}

export interface IndicatorCombinedV1Request {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: IndicatorCombinedV1SortEnum;
    after?: string;
    fromParent?: boolean;
}

export interface IndicatorCreateV1Request {
    body: ApiIndicatorCreateReqsV1;
    retrodetects?: boolean;
    ignoreWarnings?: boolean;
}

export interface IndicatorDeleteV1Request {
    filter?: string;
    ids?: Array<string>;
    comment?: string;
}

export interface IndicatorGetV1Request {
    ids: Array<string>;
}

export interface IndicatorSearchV1Request {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: IndicatorSearchV1SortEnum;
    after?: string;
}

export interface IndicatorUpdateV1Request {
    body: ApiIndicatorUpdateReqsV1;
    retrodetects?: boolean;
    ignoreWarnings?: boolean;
}

export interface IocTypeQueryV1Request {
    offset?: string;
    limit?: number;
}

export interface PlatformQueryV1Request {
    offset?: string;
    limit?: number;
}

export interface SeverityQueryV1Request {
    offset?: string;
    limit?: number;
}

/**
 *
 */
export class IocApi extends runtime.BaseAPI {
    /**
     * Get Actions by ids.
     */
    async actionGetV1Raw(requestParameters: ActionGetV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiActionRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:read"]);
        }

        const response = await this.request(
            {
                path: `/iocs/entities/actions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiActionRespV1FromJSON(jsonValue));
    }

    /**
     * Get Actions by ids.
     */
    async actionGetV1(ids?: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiActionRespV1> {
        const response = await this.actionGetV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Query Actions.
     */
    async actionQueryV1Raw(requestParameters: ActionQueryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorQueryRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:read"]);
        }

        const response = await this.request(
            {
                path: `/iocs/queries/actions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorQueryRespV1FromJSON(jsonValue));
    }

    /**
     * Query Actions.
     */
    async actionQueryV1(offset?: string, limit?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiIndicatorQueryRespV1> {
        const response = await this.actionQueryV1Raw({ offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Launch an indicators report creation job
     */
    async getIndicatorsReportRaw(requestParameters: GetIndicatorsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaEntitiesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling getIndicatorsReport.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:write"]);
        }

        const response = await this.request(
            {
                path: `/iocs/entities/indicators-reports/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ApiIndicatorsReportRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Launch an indicators report creation job
     */
    async getIndicatorsReport(body: ApiIndicatorsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaEntitiesResponse> {
        const response = await this.getIndicatorsReportRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get Indicators aggregates as specified via json in the request body.
     */
    async indicatorAggregateV1Raw(requestParameters: IndicatorAggregateV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling indicatorAggregateV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.fromParent !== undefined) {
            queryParameters["from_parent"] = requestParameters.fromParent;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:write"]);
        }

        const response = await this.request(
            {
                path: `/iocs/aggregates/indicators/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaAggregateQueryRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Get Indicators aggregates as specified via json in the request body.
     */
    async indicatorAggregateV1(body: MsaAggregateQueryRequest, filter?: string, fromParent?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.indicatorAggregateV1Raw({ body: body, filter: filter, fromParent: fromParent }, initOverrides);
        return await response.value();
    }

    /**
     * Get Combined for Indicators.
     */
    async indicatorCombinedV1Raw(requestParameters: IndicatorCombinedV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        if (requestParameters.after !== undefined) {
            queryParameters["after"] = requestParameters.after;
        }

        if (requestParameters.fromParent !== undefined) {
            queryParameters["from_parent"] = requestParameters.fromParent;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:read"]);
        }

        const response = await this.request(
            {
                path: `/iocs/combined/indicator/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorRespV1FromJSON(jsonValue));
    }

    /**
     * Get Combined for Indicators.
     */
    async indicatorCombinedV1(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: IndicatorCombinedV1SortEnum,
        after?: string,
        fromParent?: boolean,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ApiIndicatorRespV1> {
        const response = await this.indicatorCombinedV1Raw({ filter: filter, offset: offset, limit: limit, sort: sort, after: after, fromParent: fromParent }, initOverrides);
        return await response.value();
    }

    /**
     * Create Indicators.
     */
    async indicatorCreateV1Raw(requestParameters: IndicatorCreateV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorRespV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling indicatorCreateV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.retrodetects !== undefined) {
            queryParameters["retrodetects"] = requestParameters.retrodetects;
        }

        if (requestParameters.ignoreWarnings !== undefined) {
            queryParameters["ignore_warnings"] = requestParameters.ignoreWarnings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:write"]);
        }

        const response = await this.request(
            {
                path: `/iocs/entities/indicators/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ApiIndicatorCreateReqsV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorRespV1FromJSON(jsonValue));
    }

    /**
     * Create Indicators.
     */
    async indicatorCreateV1(body: ApiIndicatorCreateReqsV1, retrodetects?: boolean, ignoreWarnings?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiIndicatorRespV1> {
        const response = await this.indicatorCreateV1Raw({ body: body, retrodetects: retrodetects, ignoreWarnings: ignoreWarnings }, initOverrides);
        return await response.value();
    }

    /**
     * Delete Indicators by ids.
     */
    async indicatorDeleteV1Raw(requestParameters: IndicatorDeleteV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.comment !== undefined) {
            queryParameters["comment"] = requestParameters.comment;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:write"]);
        }

        const response = await this.request(
            {
                path: `/iocs/entities/indicators/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete Indicators by ids.
     */
    async indicatorDeleteV1(filter?: string, ids?: Array<string>, comment?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiIndicatorQueryResponse> {
        const response = await this.indicatorDeleteV1Raw({ filter: filter, ids: ids, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Get Indicators by ids.
     */
    async indicatorGetV1Raw(requestParameters: IndicatorGetV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorRespV1>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling indicatorGetV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:read"]);
        }

        const response = await this.request(
            {
                path: `/iocs/entities/indicators/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorRespV1FromJSON(jsonValue));
    }

    /**
     * Get Indicators by ids.
     */
    async indicatorGetV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiIndicatorRespV1> {
        const response = await this.indicatorGetV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Indicators.
     */
    async indicatorSearchV1Raw(requestParameters: IndicatorSearchV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorQueryRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        if (requestParameters.after !== undefined) {
            queryParameters["after"] = requestParameters.after;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:read"]);
        }

        const response = await this.request(
            {
                path: `/iocs/queries/indicators/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorQueryRespV1FromJSON(jsonValue));
    }

    /**
     * Search for Indicators.
     */
    async indicatorSearchV1(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: IndicatorSearchV1SortEnum,
        after?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ApiIndicatorQueryRespV1> {
        const response = await this.indicatorSearchV1Raw({ filter: filter, offset: offset, limit: limit, sort: sort, after: after }, initOverrides);
        return await response.value();
    }

    /**
     * Update Indicators.
     */
    async indicatorUpdateV1Raw(requestParameters: IndicatorUpdateV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorRespV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling indicatorUpdateV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.retrodetects !== undefined) {
            queryParameters["retrodetects"] = requestParameters.retrodetects;
        }

        if (requestParameters.ignoreWarnings !== undefined) {
            queryParameters["ignore_warnings"] = requestParameters.ignoreWarnings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:write"]);
        }

        const response = await this.request(
            {
                path: `/iocs/entities/indicators/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: ApiIndicatorUpdateReqsV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorRespV1FromJSON(jsonValue));
    }

    /**
     * Update Indicators.
     */
    async indicatorUpdateV1(body: ApiIndicatorUpdateReqsV1, retrodetects?: boolean, ignoreWarnings?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiIndicatorRespV1> {
        const response = await this.indicatorUpdateV1Raw({ body: body, retrodetects: retrodetects, ignoreWarnings: ignoreWarnings }, initOverrides);
        return await response.value();
    }

    /**
     * Query IOC Types.
     */
    async iocTypeQueryV1Raw(requestParameters: IocTypeQueryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorQueryRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:read"]);
        }

        const response = await this.request(
            {
                path: `/iocs/queries/ioc-types/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorQueryRespV1FromJSON(jsonValue));
    }

    /**
     * Query IOC Types.
     */
    async iocTypeQueryV1(offset?: string, limit?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiIndicatorQueryRespV1> {
        const response = await this.iocTypeQueryV1Raw({ offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Query Platforms.
     */
    async platformQueryV1Raw(requestParameters: PlatformQueryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorQueryRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:read"]);
        }

        const response = await this.request(
            {
                path: `/iocs/queries/platforms/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorQueryRespV1FromJSON(jsonValue));
    }

    /**
     * Query Platforms.
     */
    async platformQueryV1(offset?: string, limit?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiIndicatorQueryRespV1> {
        const response = await this.platformQueryV1Raw({ offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Query Severities.
     */
    async severityQueryV1Raw(requestParameters: SeverityQueryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiIndicatorQueryRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["ioc:read"]);
        }

        const response = await this.request(
            {
                path: `/iocs/queries/severities/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiIndicatorQueryRespV1FromJSON(jsonValue));
    }

    /**
     * Query Severities.
     */
    async severityQueryV1(offset?: string, limit?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiIndicatorQueryRespV1> {
        const response = await this.severityQueryV1Raw({ offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const IndicatorCombinedV1SortEnum = {
    Action: "action",
    AppliedGlobally: "applied_globally",
    MetadataAvHits: "metadata.av_hits",
    MetadataCompanyNameRaw: "metadata.company_name.raw",
    CreatedBy: "created_by",
    CreatedOn: "created_on",
    Expiration: "expiration",
    Expired: "expired",
    MetadataFilenameRaw: "metadata.filename.raw",
    ModifiedBy: "modified_by",
    ModifiedOn: "modified_on",
    MetadataOriginalFilenameRaw: "metadata.original_filename.raw",
    MetadataProductNameRaw: "metadata.product_name.raw",
    MetadataProductVersion: "metadata.product_version",
    SeverityNumber: "severity_number",
    Source: "source",
    Type: "type",
    Value: "value",
} as const;
export type IndicatorCombinedV1SortEnum = typeof IndicatorCombinedV1SortEnum[keyof typeof IndicatorCombinedV1SortEnum];
/**
 * @export
 */
export const IndicatorSearchV1SortEnum = {
    Action: "action",
    AppliedGlobally: "applied_globally",
    MetadataAvHits: "metadata.av_hits",
    MetadataCompanyNameRaw: "metadata.company_name.raw",
    CreatedBy: "created_by",
    CreatedOn: "created_on",
    Expiration: "expiration",
    Expired: "expired",
    MetadataFilenameRaw: "metadata.filename.raw",
    ModifiedBy: "modified_by",
    ModifiedOn: "modified_on",
    MetadataOriginalFilenameRaw: "metadata.original_filename.raw",
    MetadataProductNameRaw: "metadata.product_name.raw",
    MetadataProductVersion: "metadata.product_version",
    SeverityNumber: "severity_number",
    Source: "source",
    Type: "type",
    Value: "value",
} as const;
export type IndicatorSearchV1SortEnum = typeof IndicatorSearchV1SortEnum[keyof typeof IndicatorSearchV1SortEnum];
