import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';

export const createErrorResponse = (err: Error): Uptimerobot.ErrorResponse => ({
  stat: 'fail',
  error: {
    type: 'invalid_parameter',
    parameter_name: 'Unhandled',
    message: err.message,
  },
});

export class Client {
  static DEFAULT_HOST = 'api.uptimerobot.com';
  static DEFAULT_BASE_PATH = 'v2';
  static DEFAULT_VERSION = 2;

  /** a valid UptimeRobot api key - can be account or read-only */
  private apiKey: string;
  /** the axios instance */
  private client: AxiosInstance | null = null;

  constructor(apiKey: string, axiosConfig?: AxiosRequestConfig) {
    this.apiKey = apiKey;
    this.client = this.createClient(this.apiKey, axiosConfig);
  }

  /** Returns a configured axios client */
  private createClient = (apiKey: string, axiosConfig?: AxiosRequestConfig) =>
    axios.create({
      baseURL: `https://${Client.DEFAULT_HOST}/${Client.DEFAULT_BASE_PATH}`,
      timeout: 1e3,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      transformRequest: [data => qs.stringify({ ...data, api_key: apiKey })],
      ...(axiosConfig || null),
    });

  /**
   * Creates a post request.
   * Note: api failed/badRequest requests are returned as 200. Here we have
   * intercept logic which looks to the Stat value of "fail" then force a
   * reject on the promise.
   */
  post = async <T, R extends { stat: 'ok' | 'fail' }>(
    endpoint: string,
    params?: T
  ) => {
    try {
      const response = await this.client?.post<R>(endpoint, params);
      if (response?.data.stat === 'fail') {
        throw response?.data;
      }
      return response?.data;
    } catch (e) {
      throw !e?.stat ? createErrorResponse(e) : e;
    }
  };
}
