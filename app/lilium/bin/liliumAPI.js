const DEBUG = false;
export default class LiliumApi {
    imageBasePath = "http://localhost:3220/media";
    basePath = "http://localhost:3220";


    async get(endpoint, params = "", token = "") {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}${params && `?${params}`}`
            DEBUG && console.log("fetch (get): " + url);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                }
            });
        }).then(async (response) => {
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json()
            DEBUG && console.log(res);
            return res;
        }).catch((err) => {
            console.error(err);
            throw err;
        });
    }

    async post(endpoint, body, token = "") {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`;
            DEBUG && console.log("fetch (post): " + url);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify(body)
            });
        }).then(async (response) => {
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json()
            DEBUG && console.log(res);
            return res;
        }).catch((err) => {
            console.error(err);
            throw err;
        });
    }

    async put(endpoint, body, token = "") {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`
            DEBUG && console.log("fetch (put): " + url)
            return fetch(url, {
                method: 'PUT', body: JSON.stringify(body),
                "authorization": `Bearer ${token}`
            });
        }).then(async (response) => {
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json()
            DEBUG && console.log(res);
            return res;
        }).catch((err) => {
            console.error(err);
            throw err;
        });
    }

    async delete(endpoint, body, token = "") {
        return await Promise.resolve().then(() => {
            const url = `${this.basePath}${endpoint}`
            DEBUG && console.log("fetch (delete): " + url)
            return fetch(url, {
                method: 'DELETE', body: JSON.stringify(body),
                "authorization": `Bearer ${token}`
            });
        }).then(async (response) => {
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json()
            DEBUG && console.log(res);
            return res;
        }).catch((err) => {
            console.error(err);
            throw err;
        });
    }
}

