import {
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  VFC,
} from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const SearchInput: VFC<Props> = ({
  onChange,
  onClick,
  ...props
}: Props) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="input-group relative flex items-stretch w-full mb-4">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
            {...props}
            onChange={onChange}
          />
          <button
            className="btn bg-white inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 hover:border-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            type="button"
            id="button-addon3"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
