import { Space } from "models/Space";
import { VFC } from "react";
import Link from "next/link";
import { formatScheduledStart } from "utils/formatScheduledStart";
import { Avatar } from "components/avatar/Avatar";

type Props = Space & {
  className?: string;
};

export const SpaceListItem: VFC<Props> = ({ className, ...props }: Props) => {
  return (
    <div
      className={`shadow-md rounded-md min-h-16 px-5 py-4 text-white ${className}`}
      style={{
        background:
          "linear-gradient(16deg, rgba(64,72,255,1) 0%, rgba(149,96,251,1) 100%)",
      }}
    >
      <div className="flex items-center gap-4">
        <div>{formatScheduledStart(props.scheduledStart)}</div>
      </div>
      <div className="text-lg font-bold">{props.title}</div>
      <div>{props.state}</div>

      <div className="flex items-center gap-2">
        <Avatar src={props.creator.icon} />
        <div>{props.creator.name}</div>
      </div>
    </div>
  );
};

export const SpaceListItemLink: VFC<Props> = ({ ...props }: Props) => {
  return (
    <Link href={`/spaces/${props.id}`}>
      <a className="cursor-pointer">
        <SpaceListItem
          {...props}
          className="hover:shadow-xl hover:opacity-95"
        />
      </a>
    </Link>
  );
};
