export default class ApiCore {
    domain = "https://example.com";
    basePath = "https://example.com/api/v1/";

    async get(endpoint, params = "") {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}${params && `?${params}`}`;
            console.log("fetch: " + url);
            return fetch(url);
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Http error occurred in Promise.resolve()! Http status: ${response.status}`);
            }
            return response.json();
        }).catch((err) => {
            console.error(err);
        });
    }

    async post(endpoint, params = "") {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`;
            console.log("fetch: " + url);
            const body = params ? JSON.stringify(params) : null;
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body,
            });
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Http error occurred in POST request! Http status: ${response.status}`);
            }
            return response.json();
        }).catch((err) => {
            console.error(err);
        });
    }
}
