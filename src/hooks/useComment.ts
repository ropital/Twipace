import { useAdapter } from "context/AdapterContext";
import { Comment } from "models/Comment";
import { ChangeEventHandler, useEffect, useState } from "react";

export const useComment = (spaceId?: string) => {
  const { commentsRepo } = useAdapter();
  const [text, setText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    loadComments();
  }, [spaceId]);

  const loadComments = () => {
    if (!spaceId) return;
    commentsRepo.loadComments({ displayComments: setComment, spaceId });
  };

  const setComment = (comment: Comment) => {
    setComments((comments) => [...comments, comment]);
  };

  const sendComment = async () => {
    if (!text || !spaceId) return;

    setText("");
    await commentsRepo.sendComment({
      text,
      spaceId,
      createdAt: new Date(),
    });
  };

  const onChangeText: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  return {
    text,
    comments,
    onChangeText,
    sendComment,
  };
};
