import axios, { type AxiosInstance } from "axios";

/**
 * Create a base axios instance for API calls.
 * Use getApiClient() from store actions (Nuxt context) so baseURL comes from runtimeConfig.
 */
export function createApiClient(): AxiosInstance {
  const config = useRuntimeConfig();
  return axios.create({
    baseURL: config.public.apiBase as string,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}
