import { User } from "./User";

type CommentOption = {
  id?: string;
  text: string;
  creator?: User;
  createdAt?: Date;
};

export class Comment {
  id?: string;
  text: string;
  creator?: User;
  createdAt: Date;

  constructor(props: CommentOption) {
    this.id = props.id;
    this.text = props.text;
    this.creator = props.creator;
    this.createdAt = props.createdAt || new Date();
  }
}
