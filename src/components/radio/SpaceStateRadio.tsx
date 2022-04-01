import { SpaceState } from "models/Space";
import { ChangeEventHandler, VFC } from "react";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: SpaceState;
};

export const SpaceStateRadio: VFC<Props> = ({ value, onChange }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="live"
          checked={value === "live"}
          onChange={onChange}
        />
        <label
          className="form-check-label px-3 inline-block text-gray-800"
          htmlFor="flexRadioDefault1"
        >
          ライブ中
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="scheduled"
          checked={value === "scheduled"}
          onChange={onChange}
        />
        <label
          className="form-check-label inline-block px-3 text-gray-800"
          htmlFor="flexRadioDefault2"
        >
          予定
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          value="none"
          checked={value === undefined}
          onChange={onChange}
        />
        <label
          className="form-check-label inline-block px-3 text-gray-800"
          htmlFor="flexRadioDefault3"
        >
          指定なし
        </label>
      </div>
    </div>
  );
};
