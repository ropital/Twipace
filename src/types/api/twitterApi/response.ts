export type SpaceReponse = {
  host_ids: string[];
  id: string;
  state: "live" | "scheduled" | "ended";
  speaker_ids: string[];
  scheduled_start: string;
  started_at: string;
  creator_id: string;
  created_at: string;
  ended_at?: string;
  participant_count: number;
  title: string;
  updated_at: string;
  lang: string;
  is_ticketed: boolean;
  invited_user_ids?: string[];
};

export type GetSpaceResponse = {
  data: SpaceReponse;
};

export type GetSpaceListResponse = {
  data?: SpaceReponse[];
};

export type UserResponse = {
  id: string;
  name: string;
  username: string;
  profile_image_url: string;
};

export type GetUserReponse = {
  data: UserResponse;
};

export type GetUsersReponse = {
  data: UserResponse[];
};

export type TwitterErrorResponse = {
  errors: {
    detail: string;
    title: string;
    value: string;
  }[];
};
