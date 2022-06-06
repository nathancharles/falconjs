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
import {
    MsaEntityActionRequestV2,
    MsaEntityActionRequestV2FromJSON,
    MsaEntityActionRequestV2ToJSON,
    MsaErrorsOnly,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaQueryResponse,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    RequestsCreateFirewallPoliciesV1,
    RequestsCreateFirewallPoliciesV1FromJSON,
    RequestsCreateFirewallPoliciesV1ToJSON,
    RequestsSetPolicyPrecedenceReqV1,
    RequestsSetPolicyPrecedenceReqV1FromJSON,
    RequestsSetPolicyPrecedenceReqV1ToJSON,
    RequestsUpdateFirewallPoliciesV1,
    RequestsUpdateFirewallPoliciesV1FromJSON,
    RequestsUpdateFirewallPoliciesV1ToJSON,
    ResponsesFirewallPoliciesV1,
    ResponsesFirewallPoliciesV1FromJSON,
    ResponsesFirewallPoliciesV1ToJSON,
    ResponsesPolicyMembersRespV1,
    ResponsesPolicyMembersRespV1FromJSON,
    ResponsesPolicyMembersRespV1ToJSON,
} from "../models";

export interface CreateFirewallPoliciesRequest {
    body: RequestsCreateFirewallPoliciesV1;
    cloneId?: string;
}

export interface DeleteFirewallPoliciesRequest {
    ids: Array<string>;
}

export interface GetFirewallPoliciesRequest {
    ids: Array<string>;
}

export interface PerformFirewallPoliciesActionRequest {
    actionName: PerformFirewallPoliciesActionActionNameEnum;
    body: MsaEntityActionRequestV2;
}

export interface QueryCombinedFirewallPoliciesRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryCombinedFirewallPoliciesSortEnum;
}

export interface QueryCombinedFirewallPolicyMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface QueryFirewallPoliciesRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryFirewallPoliciesSortEnum;
}

export interface QueryFirewallPolicyMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface SetFirewallPoliciesPrecedenceRequest {
    body: RequestsSetPolicyPrecedenceReqV1;
}

export interface UpdateFirewallPoliciesRequest {
    body: RequestsUpdateFirewallPoliciesV1;
}

/**
 *
 */
export class FirewallPoliciesApi extends runtime.BaseAPI {
    /**
     * Create Firewall Policies by specifying details about the policy to create
     */
    async createFirewallPoliciesRaw(
        requestParameters: CreateFirewallPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesFirewallPoliciesV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createFirewallPolicies.");
        }

        const queryParameters: any = {};

        if (requestParameters.cloneId !== undefined) {
            queryParameters["clone_id"] = requestParameters.cloneId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/firewall/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsCreateFirewallPoliciesV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesFirewallPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Create Firewall Policies by specifying details about the policy to create
     */
    async createFirewallPolicies(body: RequestsCreateFirewallPoliciesV1, cloneId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesFirewallPoliciesV1> {
        const response = await this.createFirewallPoliciesRaw({ body: body, cloneId: cloneId }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a set of Firewall Policies by specifying their IDs
     */
    async deleteFirewallPoliciesRaw(requestParameters: DeleteFirewallPoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteFirewallPolicies.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/firewall/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete a set of Firewall Policies by specifying their IDs
     */
    async deleteFirewallPolicies(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.deleteFirewallPoliciesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a set of Firewall Policies by specifying their IDs
     */
    async getFirewallPoliciesRaw(requestParameters: GetFirewallPoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponsesFirewallPoliciesV1>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getFirewallPolicies.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/firewall/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesFirewallPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Retrieve a set of Firewall Policies by specifying their IDs
     */
    async getFirewallPolicies(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesFirewallPoliciesV1> {
        const response = await this.getFirewallPoliciesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Perform the specified action on the Firewall Policies specified in the request
     */
    async performFirewallPoliciesActionRaw(
        requestParameters: PerformFirewallPoliciesActionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesFirewallPoliciesV1>> {
        if (requestParameters.actionName === null || requestParameters.actionName === undefined) {
            throw new runtime.RequiredError("actionName", "Required parameter requestParameters.actionName was null or undefined when calling performFirewallPoliciesAction.");
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling performFirewallPoliciesAction.");
        }

        const queryParameters: any = {};

        if (requestParameters.actionName !== undefined) {
            queryParameters["action_name"] = requestParameters.actionName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/firewall-actions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaEntityActionRequestV2ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesFirewallPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Perform the specified action on the Firewall Policies specified in the request
     */
    async performFirewallPoliciesAction(
        actionName: PerformFirewallPoliciesActionActionNameEnum,
        body: MsaEntityActionRequestV2,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ResponsesFirewallPoliciesV1> {
        const response = await this.performFirewallPoliciesActionRaw({ actionName: actionName, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Firewall Policies in your environment by providing an FQL filter and paging details. Returns a set of Firewall Policies which match the filter criteria
     */
    async queryCombinedFirewallPoliciesRaw(
        requestParameters: QueryCombinedFirewallPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesFirewallPoliciesV1>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/combined/firewall/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesFirewallPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Search for Firewall Policies in your environment by providing an FQL filter and paging details. Returns a set of Firewall Policies which match the filter criteria
     */
    async queryCombinedFirewallPolicies(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryCombinedFirewallPoliciesSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ResponsesFirewallPoliciesV1> {
        const response = await this.queryCombinedFirewallPoliciesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Firewall Policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedFirewallPolicyMembersRaw(
        requestParameters: QueryCombinedFirewallPolicyMembersRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesPolicyMembersRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/combined/firewall-members/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesPolicyMembersRespV1FromJSON(jsonValue));
    }

    /**
     * Search for members of a Firewall Policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedFirewallPolicyMembers(
        id?: string,
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ResponsesPolicyMembersRespV1> {
        const response = await this.queryCombinedFirewallPolicyMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Firewall Policies in your environment by providing an FQL filter and paging details. Returns a set of Firewall Policy IDs which match the filter criteria
     */
    async queryFirewallPoliciesRaw(requestParameters: QueryFirewallPoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/queries/firewall/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for Firewall Policies in your environment by providing an FQL filter and paging details. Returns a set of Firewall Policy IDs which match the filter criteria
     */
    async queryFirewallPolicies(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryFirewallPoliciesSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<MsaQueryResponse> {
        const response = await this.queryFirewallPoliciesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Firewall Policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryFirewallPolicyMembersRaw(
        requestParameters: QueryFirewallPolicyMembersRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/queries/firewall-members/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for members of a Firewall Policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryFirewallPolicyMembers(
        id?: string,
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<MsaQueryResponse> {
        const response = await this.queryFirewallPolicyMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Sets the precedence of Firewall Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence
     */
    async setFirewallPoliciesPrecedenceRaw(
        requestParameters: SetFirewallPoliciesPrecedenceRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling setFirewallPoliciesPrecedence.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/firewall-precedence/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsSetPolicyPrecedenceReqV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Sets the precedence of Firewall Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence
     */
    async setFirewallPoliciesPrecedence(body: RequestsSetPolicyPrecedenceReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.setFirewallPoliciesPrecedenceRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Update Firewall Policies by specifying the ID of the policy and details to update
     */
    async updateFirewallPoliciesRaw(
        requestParameters: UpdateFirewallPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesFirewallPoliciesV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling updateFirewallPolicies.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["firewall-management:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/firewall/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsUpdateFirewallPoliciesV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesFirewallPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Update Firewall Policies by specifying the ID of the policy and details to update
     */
    async updateFirewallPolicies(body: RequestsUpdateFirewallPoliciesV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesFirewallPoliciesV1> {
        const response = await this.updateFirewallPoliciesRaw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const PerformFirewallPoliciesActionActionNameEnum = {
    AddHostGroup: "add-host-group",
    Disable: "disable",
    Enable: "enable",
    RemoveHostGroup: "remove-host-group",
} as const;
export type PerformFirewallPoliciesActionActionNameEnum = typeof PerformFirewallPoliciesActionActionNameEnum[keyof typeof PerformFirewallPoliciesActionActionNameEnum];
/**
 * @export
 */
export const QueryCombinedFirewallPoliciesSortEnum = {
    CreatedByAsc: "created_by.asc",
    CreatedByDesc: "created_by.desc",
    CreatedTimestampAsc: "created_timestamp.asc",
    CreatedTimestampDesc: "created_timestamp.desc",
    EnabledAsc: "enabled.asc",
    EnabledDesc: "enabled.desc",
    ModifiedByAsc: "modified_by.asc",
    ModifiedByDesc: "modified_by.desc",
    ModifiedTimestampAsc: "modified_timestamp.asc",
    ModifiedTimestampDesc: "modified_timestamp.desc",
    NameAsc: "name.asc",
    NameDesc: "name.desc",
    PlatformNameAsc: "platform_name.asc",
    PlatformNameDesc: "platform_name.desc",
    PrecedenceAsc: "precedence.asc",
    PrecedenceDesc: "precedence.desc",
} as const;
export type QueryCombinedFirewallPoliciesSortEnum = typeof QueryCombinedFirewallPoliciesSortEnum[keyof typeof QueryCombinedFirewallPoliciesSortEnum];
/**
 * @export
 */
export const QueryFirewallPoliciesSortEnum = {
    CreatedByAsc: "created_by.asc",
    CreatedByDesc: "created_by.desc",
    CreatedTimestampAsc: "created_timestamp.asc",
    CreatedTimestampDesc: "created_timestamp.desc",
    EnabledAsc: "enabled.asc",
    EnabledDesc: "enabled.desc",
    ModifiedByAsc: "modified_by.asc",
    ModifiedByDesc: "modified_by.desc",
    ModifiedTimestampAsc: "modified_timestamp.asc",
    ModifiedTimestampDesc: "modified_timestamp.desc",
    NameAsc: "name.asc",
    NameDesc: "name.desc",
    PlatformNameAsc: "platform_name.asc",
    PlatformNameDesc: "platform_name.desc",
    PrecedenceAsc: "precedence.asc",
    PrecedenceDesc: "precedence.desc",
} as const;
export type QueryFirewallPoliciesSortEnum = typeof QueryFirewallPoliciesSortEnum[keyof typeof QueryFirewallPoliciesSortEnum];
