import { Oauth2Api } from "../apis";
import { Configuration, FetchAPI } from "../runtime";

type Token = {
    accessToken: string;
    expiresAt: number | null;
};

type OAuth2Options = {
    fetchApi?: FetchAPI;
    clientId: string;
    clientSecret: string;
};

export class OAuth2 {
    private token: Token | null = null;
    private activeRefresh: Promise<Token> | null = null;

    constructor(private options: OAuth2Options) {}

    async accessToken(name?: string, scopes?: string[]): Promise<string> {
        const token = await this.getToken();
        return "Bearer " + token.accessToken;
    }

    private async getToken(): Promise<Token> {
        if (this.token && (this.token.expiresAt === null || this.token.expiresAt > Date.now())) {
            return this.token;
        }

        return this.refreshToken();
    }

    private async refreshToken(): Promise<Token> {
        if (this.activeRefresh) {
            return this.activeRefresh;
        }

        this.activeRefresh = this.refreshTokenInternal();

        try {
            const token = await this.activeRefresh;
            this.token = token;
            return token;
        } finally {
            this.activeRefresh = null;
        }
    }

    private async refreshTokenInternal(): Promise<Token> {
        var config = new Configuration({
            fetchApi: this.options.fetchApi || fetch,
        });
        var api = new Oauth2Api(config);
        let response = await api.oauth2AccessToken(this.options.clientId, this.options.clientSecret);
        return {
            accessToken: response.accessToken,
            expiresAt: response.expiresIn ? Date.now() + response.expiresIn * 1000 : null,
        };
    }
}
