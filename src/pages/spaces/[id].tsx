import { SendInput } from "components/input/SendInput";
import { CommentList } from "components/list";
import { SpaceListItem } from "components/list/spaceList/SpaceListItem";
import { useAdapter } from "context/AdapterContext";
import { useComment } from "hooks/useComment";
import { Space } from "models/Space";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "components/icon/LeftArrowIcon";
import { useAtom } from "jotai";
import { keywordsAtom, spaceStateAtom } from "store";

export default function SpacePage() {
  const { spaceRepo } = useAdapter();
  const router = useRouter();
  const [keywords] = useAtom(keywordsAtom);
  const [spaceState] = useAtom(spaceStateAtom);
  const [space, setSpace] = useState<Space>();
  const spaceId =
    typeof router.query.id === "string" ? router.query.id : undefined;
  const { sendComment, onChangeText, text, comments } = useComment(spaceId);

  useEffect(() => {
    if (!router.isReady) return;
    fetch();
  }, [router]);

  const fetch = async () => {
    if (!spaceId) return;
    const space = await spaceRepo.get(spaceId);
    setSpace(space);
  };

  const onClickBack = () => {
    if (keywords || spaceState) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      {space && <SpaceListItem {...space} />}
      <div className="px-4 mt-4 pb-20">
        <button
          onClick={onClickBack}
          className=" inline-flex items-center text-blue-600 fill-current"
        >
          <ArrowLeftIcon />
          <div>検索画面へ</div>
        </button>
        <h2 className="my-3">コメント</h2>
        <div>
          <CommentList comments={comments} />
        </div>
      </div>
      <form className="mt-4 fixed bottom-8 w-full px-4" onSubmit={sendComment}>
        <SendInput onChange={onChangeText} onClick={sendComment} value={text} />
      </form>
    </div>
  );
}
