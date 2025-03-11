export default class WalmiApi {
    imageBasePath = "http://192.168.55.98:3220/media";
    basePath = "http://192.168.55.98:3220";


    async get(endpoint, params = "") {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}${params && `?${params}`}`
            console.log("fetch: " + url)
            return fetch(url, {method: 'GET'});
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Http error occurred in get Promise.resolve()! Http status: ${response.status}`);
            }
            return response.json();
        }).catch((err) => {
            console.error(err)
        })
    }

    async post(endpoint, body) {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`
            console.log("fetch: " + url)
            return fetch(url, { method: 'POST', body: JSON.stringify(body)});
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Http error occurred in post Promise.resolve()! Http status: ${response.status}`);
            }
            return response.json();
        }).catch((err) => {
            console.error(err)
        })
    }

    async put(endpoint, body) {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`
            console.log("fetch: " + url)
            return fetch(url, { method: 'PUT', body: JSON.stringify(body)});
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Http error occurred in put Promise.resolve()! Http status: ${response.status}`);
            }
            return response.json();
        }).catch((err) => {
            console.error(err)
        })
    }
    
    async delete(endpoint, body) {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`
            console.log("fetch: " + url)
            return fetch(url, { method: 'DELETE', body: JSON.stringify(body)});
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Http error occurred in delete Promise.resolve()! Http status: ${response.status}`);
            }
            return response.json();
        }).catch((err) => {
            console.error(err)
        })
    }
}

