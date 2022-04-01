import { SendIcon } from "components/icon/SendIcon";
import { InputHTMLAttributes, MouseEventHandler, VFC } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const SendInput: VFC<Props> = ({ onClick, ...props }: Props) => {
  return (
    <label className="relative h-fit">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full text-lg"
        {...props}
      />
      <button
        className="cursor-pointer w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3 flex justify-center items-center bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-500"
        onClick={onClick}
        type="submit"
        disabled={!props.value}
      >
        <SendIcon />
      </button>
    </label>
  );
};
