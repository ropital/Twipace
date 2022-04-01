import { VFC } from "react";

type Props = {
  src?: string;
  className?: string;
};

export const Avatar: VFC<Props> = ({ src, className }: Props) => {
  return (
    <div className="avatar">
      <div className={`w-8 rounded-full ${className}`}>
        <img src={src ?? "/user-circle.svg"} />
      </div>
    </div>
  );
};
