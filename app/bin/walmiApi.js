export default class WalmiApi {
    imageBasePath = "https://walmi.ru/media";
    basePath = "https://walmi.ru/api";


    async get(endpoint, params = "") {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}${params && `?${params}`}`
            console.log("fetch: " + url)
            return fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
        }).then((response) => {
            if (!response.ok) {
                response.json().then(console.error);
                throw new Error(`Http error occurred in post Promise.resolve()! Http status: ${response.status}`);
            }
            return response.json();
        })
    }

    async post(endpoint, body) {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`
            console.log("fetch: " + url)
            return fetch(url, {
                method: 'POST', body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            });
        }).then((response) => {
            if (!response.ok) {
                response.json().then(console.error);
                throw new Error(`Http error occurred in post Promise.resolve()! Http status: ${response.status}`);
            }
            return response.json();
        })
    }

    async put(endpoint, body) {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`
            console.log("fetch: " + url)
            return fetch(url, {
                method: 'PUT', body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            });
        }).then((response) => {
            if (!response.ok) {
                response.json().then(console.error);
                throw new Error(`Http error occurred in post Promise.resolve()! Http status: ${response.status}`);
            }
            return response.json();
        })
    }

    async delete(endpoint, body) {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`
            console.log("fetch: " + url)
            return fetch(url, {
                method: 'DELETE', body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            });
        }).then((response) => {
            if (!response.ok) {
                response.json().then(console.error);
                throw new Error(`Http error occurred in post Promise.resolve()! Http status: ${response.status}`);
            }
            return response.json();
        })
    }
}

