import { IHttpClient } from "adapters/apiClient/IHttpClient";
import { User } from "models/User";
import { GetUserReponse, GetUsersReponse } from "types/api/twitterApi/response";

export class UsersRepo {
  private httpClient: IHttpClient;
  constructor(httpCliet: IHttpClient) {
    this.httpClient = httpCliet;
  }

  async get(id: string): Promise<User> {
    const res = await this.httpClient.get<GetUserReponse>(`/api/users/${id}`);
    return this.convert(res.data.data);
  }

  async getList(ids: string[]): Promise<User[]> {
    const idsStr = ids.join(",");
    const res = await this.httpClient.get<GetUsersReponse>(
      `/api/users?ids=${idsStr}`
    );

    if (!res.data.data) return [];

    const users = await Promise.all(
      res.data.data.map(async (data) => {
        return await this.convert(data);
      })
    );
    return users;
  }

  async getByUsername(username: string) {
    const res = await this.httpClient.get<GetUserReponse>(
      `/api/users/by/username/${username}`
    );
    return this.convert(res.data.data);
  }

  private convert(data: GetUserReponse["data"]): User {
    return new User({
      id: data.id,
      name: data.name,
      username: data.username,
      icon: data.profile_image_url,
    });
  }
}
