import { User } from "./User";

export type SpaceState = "live" | "scheduled" | "ended";

type SpaceOptions = {
  id: string;
  title: string;
  lang: string;
  creator: User;
  participantCount: number;
  subscriberCount?: number;
  isTicketed?: boolean;
  state: SpaceState;
  hostIds: string[];
  speakerIds: string[];
  invitedUserIds?: string[];
  topicName?: string;
  scheduledStart?: Date;
  endedAt?: Date;
  startedAt?: Date;
  createdAt: Date;
};

export class Space {
  id: string;
  title: string;
  lang: string;
  creator: User;
  state: SpaceState;
  participantCount: number;
  subscriberCount?: number; // onlyOwner
  isTicketed?: boolean;
  hostIds: string[];
  speakerIds: string[];
  invitedUserIds?: string[];
  topicName?: string;
  scheduledStart?: Date;
  endedAt?: Date;
  startedAt?: Date;
  createdAt: Date;

  constructor(props: SpaceOptions) {
    this.id = props.id;
    this.title = props.title;
    this.lang = props.lang;
    this.creator = props.creator;
    this.state = props.state;
    this.participantCount = props.participantCount;
    this.subscriberCount = props.subscriberCount;
    this.isTicketed = props.isTicketed;
    this.hostIds = props.hostIds;
    this.speakerIds = props.speakerIds;
    this.invitedUserIds = props.invitedUserIds;
    this.topicName = props.topicName;
    this.scheduledStart = props.scheduledStart;
    this.endedAt = props.endedAt;
    this.startedAt = props.startedAt;
    this.createdAt = props.createdAt;
  }
}
