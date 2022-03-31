import { Comment } from "models/Comment";
import { VFC } from "react";
import { CommentListItem } from "./CommentListItem";

type Props = {
  comments: Comment[];
};

export const CommentList: VFC<Props> = ({ comments }: Props) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} {...comment} />
      ))}
    </div>
  );
};
