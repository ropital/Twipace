import { VFC } from "react";

type Props = {
  className?: string;
};

export const SendIcon: VFC<Props> = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current text-white w-4 h-4 ${className}`}
    >
      <path d="M1.92609 20.125L22.0415 11.5L1.92609 2.875L1.9165 9.58333L16.2915 11.5L1.9165 13.4167L1.92609 20.125Z" />
    </svg>
  );
};
