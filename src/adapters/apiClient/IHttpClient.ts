/* eslint-disable no-unused-vars */

export type HttpResponse<T> = {
  data: T;
};

export interface IHttpClient {
  get<T>(path: string): Promise<HttpResponse<T>>;
}
