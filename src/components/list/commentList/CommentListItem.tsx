import { Avatar } from "components/avatar/Avatar";
import { Comment } from "models/Comment";
import { VFC } from "react";

type Props = Comment;

export const CommentListItem: VFC<Props> = ({ ...props }: Props) => {
  return (
    <div className="flex items-start gap-3 border-t py-4">
      <Avatar src={props.creator?.icon} className="w-11" />
      <div>
        <div className="font-bold">{props.creator?.name ?? "匿名"}</div>
        <div>{props.text}</div>
      </div>
    </div>
  );
};
