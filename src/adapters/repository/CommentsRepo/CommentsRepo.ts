/* eslint-disable no-unused-vars */
import {
  addDoc,
  collection,
  Firestore,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { Comment } from "models/Comment";

type SendComment = {
  text: string;
  creatorId?: string;
  spaceId: string;
  createdAt: Date;
};

type LoadComments = {
  spaceId: string;
  displayComments: (comment: Comment) => void;
};

export class CommentsRepo {
  store: Firestore;

  constructor() {
    this.store = getFirestore();
  }

  async sendComment(comment: SendComment): Promise<void> {
    try {
      await addDoc(collection(this.store, "comments"), {
        text: comment.text,
        creatorId: comment.creatorId ?? null,
        spaceId: comment.spaceId,
        createdAt: Timestamp.fromDate(comment.createdAt),
      });
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
  }

  async loadComments(props: LoadComments) {
    const recentMessagesQuery = query(
      collection(this.store, "comments"),
      orderBy("createdAt", "asc"),
      where("spaceId", "==", props.spaceId),
      limit(12)
    );

    onSnapshot(recentMessagesQuery, function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type === "removed") {
          // deleteMessage(change.doc.id);
        } else {
          const comment = change.doc.data();
          props.displayComments(
            new Comment({
              id: change.doc.id,
              createdAt: (comment.createdAt as Timestamp).toDate(),
              creator: undefined,
              text: comment.text,
            })
          );
        }
      });
    });
  }
}
