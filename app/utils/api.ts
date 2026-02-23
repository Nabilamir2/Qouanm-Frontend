import axios, { type AxiosInstance } from "axios";

/**
 * Create a base axios instance for API calls.
 * Use getApiClient() from store actions (Nuxt context) so baseURL comes from runtimeConfig.
 */
export function createApiClient(baseURL: string): AxiosInstance {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}
