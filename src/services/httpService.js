import axios from "axios";
// import token from "src/core/token";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}`,
  timeout: 500000,
  headers: {
    "Content-Type": "application/json",
  },
});

//Request interceptor
instance.interceptors.request.use(function (config) {
  let adminInfo;
  if (localStorage.getItem("adminInfo")) {
    adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
  }
  return {
    ...config,
    headers: {
      Authorization: adminInfo ? `Bearer ${adminInfo?.access?.token}` : null,
    },
  };
});

// //Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      token.clearToken();
    }
    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

const requests = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),

  post: (url, body) => instance.post(url, body).then(responseBody),

  put: (url, body, headers) =>
    instance.put(url, body, headers).then(responseBody),

  patch: (url, body) => instance.patch(url, body).then(responseBody),

  delete: (url) => instance.delete(url).then(responseBody),

  formPost: (url, body) =>
    instance
      .post(url, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(responseBody),
};

export default requests;
