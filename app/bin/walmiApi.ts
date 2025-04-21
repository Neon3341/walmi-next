const DEBUG = true;

interface ApiConfig {
  imageBasePath: string;
  basePath: string;
  defaultHeaders: HeadersInit;
}

interface RequestOptions {
  params?: Record<string, string>;
  body?: unknown;
}

export default class WalmiApi {
  private config: ApiConfig;

  constructor(config: Partial<ApiConfig> = {}) {
    this.config = {
      imageBasePath: "https://walmi.ru/media",
      basePath: "https://walmi.ru/api",
      defaultHeaders: { 'Content-Type': 'application/json' },
      ...config
    };
  }
  
  private async handleResponse(response: Response): Promise<any> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('API Error:', errorData);
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  }

  private createUrl(endpoint: string, params: Record<string, string> = {}): URL {
    const url = new URL(`${this.config.basePath}${endpoint}`);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    if (DEBUG) console.log('Fetching:', url.toString());
    return url;
  }

  private async request(
    method: string,
    endpoint: string,
    { params, body }: RequestOptions = {}
  ): Promise<any> {
    const url = this.createUrl(endpoint, params);
    const options: RequestInit = {
      method,
      headers: this.config.defaultHeaders,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options).then(this.handleResponse.bind(this));
  }

  public async get(endpoint: string, params?: Record<string, string>): Promise<any> {
    return this.request('GET', endpoint, { params });
  }

  public async post(
    endpoint: string,
    body?: object,
    params?: Record<string, string>
  ): Promise<any> {
    return this.request('POST', endpoint, { params, body });
  }

  public async put(
    endpoint: string,
    body?: object,
    params?: Record<string, string>
  ): Promise<any> {
    return this.request('PUT', endpoint, { params, body });
  }

  public async delete(
    endpoint: string,
    body?: object,
    params?: Record<string, string>
  ): Promise<any> {
    return this.request('DELETE', endpoint, { params, body });
  }
}