type QueryMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
type BasicTypes = string | number | boolean

type Prms = {
    [key: string]: BasicTypes
}

const constructPath = (
    endpoint: string,
    args?: Prms
) => {
    let path = `${window.location.protocol}//${window.location.host}/api/${endpoint}`;

    if (args)
        path +=
            "?" +
            Object.entries(args)
                .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
                .join("&");
    return path;
};


const queryApi = async (method: QueryMethod, endpoint: string, parameters?: Prms, body?: {} | File, headers?: HeadersInit) => {
    const path = constructPath(endpoint, parameters);
    const init: RequestInit = {
        method: method,
        headers: headers ?? {
            accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true",
        },
    };
    if (["POST", "PUT", "PATCH"].includes(method) && body) {
        if (body instanceof File) {
            init.body = body;
        } else {
            init.body = JSON.stringify(body);
        }
    }
    const response = await fetch(path, init);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json()
}

export {queryApi}