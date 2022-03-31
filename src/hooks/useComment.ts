import { useAdapter } from "context/AdapterContext";
import { Comment } from "models/Comment";
import { ChangeEventHandler, useEffect, useState } from "react";

export const useComment = () => {
  const { commentsRepo } = useAdapter();
  const [text, setText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = () => {
    commentsRepo.loadComments({ displayComments: setComment });
  };

  const setComment = (comment: Comment) => {
    setComments((comments) => [...comments, comment]);
  };

  const sendComment = async () => {
    if (!text) return;

    setText("");
    await commentsRepo.sendComment({
      text,
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
