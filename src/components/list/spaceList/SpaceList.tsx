import { Space } from "models/Space";
import { VFC } from "react";
import { SpaceListItemLink } from "./SpaceListItem";

type Props = {
  spaces: Space[];
};

export const SpaceList: VFC<Props> = ({ spaces }: Props) => {
  return (
    <div className="w-4/5 gap-y-4 flex flex-col md:w-1/3">
      {spaces.map((space) => {
        return <SpaceListItemLink key={space.id} {...space} />;
      })}
    </div>
  );
};
