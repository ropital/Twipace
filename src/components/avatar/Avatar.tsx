import { VFC } from "react";

type Props = {
  src?: string;
  className?: string;
};

export const Avatar: VFC<Props> = ({ src, className }: Props) => {
  return (
    <div className="avatar">
      <div className={`w-8 rounded-full ${className}`}>
        <img src={src ?? "https://api.lorem.space/image/face?hash=92310"} />
      </div>
    </div>
  );
};
