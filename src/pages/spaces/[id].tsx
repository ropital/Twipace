import { SendInput } from "components/input/SendInput";
import { CommentList } from "components/list";
import { SpaceListItem } from "components/list/spaceList/SpaceListItem";
import { useAdapter } from "context/AdapterContext";
import { useComment } from "hooks/useComment";
import { Space } from "models/Space";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

export default function SpacePage() {
  const { spaceRepo } = useAdapter();
  const router = useRouter();
  const [space, setSpace] = useState<Space>();
  const spaceId =
    typeof router.query.id === "string" ? router.query.id : undefined;
  const { sendComment, onChangeText, text, comments } = useComment(spaceId);

  useEffect(() => {
    fetch();
  }, [spaceId]);

  const fetch = async () => {
    if (!spaceId) return;
    const space = await spaceRepo.get(spaceId);
    setSpace(space);
  };

  return (
    <div>
      {space && <SpaceListItem {...space} />}
      <div>
        <h2>コメント</h2>
        <div className="px-4 mt-4">
          <CommentList comments={comments} />

          <form className="mt-4" onSubmit={sendComment}>
            <SendInput
              onChange={onChangeText}
              onClick={sendComment}
              value={text}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
