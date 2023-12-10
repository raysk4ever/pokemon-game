import axios from "axios";

export default class AxiosService {
  constructor() {
    this.api = axios;
    // Add a request interceptor
    this.api.interceptors.request.use(
      function (config) {
        config.baseURL = process.env.REACT_APP_BASE_URL;
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // // Add a response interceptor
    // axios.interceptors.response.use(
    //   function (response) {
    //     // Do something with response data
    //     return response;
    //   },
    //   function (error) {
    //     // Do something with response error
    //     return Promise.reject(error);
    //   }
    // );
  }
}
