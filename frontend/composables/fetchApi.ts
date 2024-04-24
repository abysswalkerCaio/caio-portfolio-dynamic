type TMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const fetchApi = {
  get: async (url: string, body?: object) => {
    return request("GET", url, body);
  },
  post: async (url: string, body: object) => {
    return request("POST", url, body);
  },
  put: async (url: string, body: object) => {
    return request("PUT", url, body);
  },
  patch: async (url: string, body: object) => {
    return request("PATCH", url, body);
  },
  delete: async (url: string) => {
    return request("DELETE", url);
  },
};

const request = (method: TMethod, url: string, body?: object) => {
  const config = useRuntimeConfig();
  const { baseUrl } = config.public;

  const reqOptions: any = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    server: false,
  };

  if (body) {
    reqOptions.body = JSON.stringify(body);
  }

  return $fetch(baseUrl + url, reqOptions);
};
