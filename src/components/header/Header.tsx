import { VFC } from "react";
import Link from "next/link";
import TwitterIcon from "../../assets/svg/twitter.svg";

type Props = {
  onClickTwitter: () => void;
};

export const Header: VFC<Props> = ({ onClickTwitter }: Props) => {
  return (
    <header>
      <div className="flex justify-between px-6 py-2 shadow-sm items-center">
        <div className="flex gap-2">
          <div className="text-xl font-bold">
            <Link href="/">
              <a>Twipace</a>
            </Link>
          </div>

          <nav>
            {/* <Link href="/home">
              <a>Home</a>
            </Link> */}
          </nav>
        </div>

        <div>
          <button
            className="btn bg-twitter-normal hover:bg-twitter-dark outline-none border-none gap-2"
            onClick={onClickTwitter}
          >
            <TwitterIcon />
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
