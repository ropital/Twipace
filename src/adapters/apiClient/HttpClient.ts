import { NextErrorResponse } from "types/api/nextApi/response";
import { HttpResponse, IHttpClient } from "./IHttpClient";

export class HttpClient implements IHttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(path: string): Promise<HttpResponse<T>> {
    const res = await fetch(this.baseUrl + path);
    const data: NextErrorResponse | T = await res.json();
    if (res.status !== 200) {
      throw new Error((data as NextErrorResponse).message);
    }

    return { data: data as T };
  }
}
