import axios from 'axios';

const app = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

//  Manage refresh token when access token is not available
app.interceptors.response.use(
  (response) => response,
  async (error) => {
    const orginalConfig = error.config;
    if (error.response.status === 401 && !orginalConfig._retry) {
      orginalConfig._retry = true;
      try {
        const { data } = await axios.get('/user/refresh-token', {
          baseURL: process.env.NEXT_PUBLIC_API_URL,
          withCredentials: true,
        });

        if (data) return app(orginalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const http = {
  get: app.get,
  post: app.post,
  patch: app.patch,
  put: app.put,
  delete: app.delete,
  head: app.head,
};

export { http };
