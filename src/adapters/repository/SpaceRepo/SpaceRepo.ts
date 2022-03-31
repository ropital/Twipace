import { IHttpClient } from "adapters/apiClient/IHttpClient";
import { Space, SpaceState } from "models/Space";
import { User } from "models/User";
import {
  GetSpaceListResponse,
  GetSpaceResponse,
} from "types/api/twitterApi/response";
import { UsersRepo } from "../UsersRepo/UsersRepo";

export class SpaceRepo {
  private httpClient: IHttpClient;
  private usersRepo: UsersRepo;

  constructor(httpClient: IHttpClient, usersRepo: UsersRepo) {
    this.httpClient = httpClient;
    this.usersRepo = usersRepo;
  }

  async get(id: string): Promise<Space> {
    const res = await this.httpClient.get<GetSpaceResponse>(
      `/api/spaces/${id}`
    );

    const creator = await this.usersRepo.get(res.data.data.creator_id);
    return this.convert(res.data.data, creator);
  }

  async getListByCreatorIds(creatorIds: string[]): Promise<Space[]> {
    const creatorIdsStr = creatorIds.join(",");
    const res = await this.httpClient.get<GetSpaceListResponse>(
      `/api/spaces/by/creatorIds/${creatorIdsStr}`
    );

    if (!res.data.data) return [];

    const spaces = await this.convertMany(res.data.data);
    return spaces ?? [];
  }

  async getListByKeywords(
    keyowrds: string[],
    state?: SpaceState
  ): Promise<Space[]> {
    const keywordsStr = keyowrds.join(",");
    const res = await this.httpClient.get<GetSpaceListResponse>(
      `/api/spaces/by/keywords/${keywordsStr}?state=${state}`
    );

    if (!res.data.data) return [];
    if (res.data.data.length > 100) {
      const data = res.data.data.slice(0, 100);
      const spaces = await this.convertMany(data);
      return spaces ?? [];
    }

    const spaces = await this.convertMany(res.data.data);
    return spaces ?? [];
  }

  private async convertMany(
    data: GetSpaceListResponse["data"]
  ): Promise<Space[] | undefined> {
    if (!data) return undefined;

    const creatorIds = data.map((space) => space.creator_id);
    const creators = await this.usersRepo.getList(creatorIds);

    const spaces = data.map((space) => {
      const creator = creators.find(
        (creator) => creator.id === space.creator_id
      );
      if (!creator) throw new Error("Creator is not found");
      return this.convert(space, creator);
    });
    return spaces;
  }

  private convert(data: GetSpaceResponse["data"], creator: User): Space {
    const space = new Space({
      id: data.id,
      hostIds: data.host_ids,
      title: data.title,
      createdAt: new Date(data.created_at),
      creator: creator,
      endedAt: data.ended_at ? new Date(data.ended_at) : undefined,
      isTicketed: data.is_ticketed,
      lang: data.lang,
      participantCount: data.participant_count,
      scheduledStart: data.scheduled_start
        ? new Date(data.scheduled_start)
        : undefined,
      speakerIds: data.speaker_ids,
      startedAt: data.started_at ? new Date(data.started_at) : undefined,
      state: data.state,
      invitedUserIds: data.invited_user_ids,
    });
    return space;
  }
}
