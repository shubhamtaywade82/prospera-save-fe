import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError
} from "axios";

const apiEndpoint = process.env.REACT_APP_API_URL; // Assuming you have defined this in your .env file

console.log(apiEndpoint);
// Define any global configurations for your requests, like headers or authentication tokens.
const axiosInstance = axios.create({
  baseURL: apiEndpoint
  // Add headers or other configurations here if needed
});

// Request interceptor to add any headers, authentication, or logging.
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any common request logic here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses globally, such as logging or error handling.
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // Add any common response logic here
    return response;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  }
);

export const get = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return axiosInstance.get<T>(url, config).then((response) => response.data);
};

export const post = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance
    .post<T>(url, data, config);
  return response.data;
};

// Add other HTTP methods (e.g., put, delete) as needed
