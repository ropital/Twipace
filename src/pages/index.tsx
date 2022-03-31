import { SpaceStateRadio } from "components/radio/SpaceStateRadio";
import { Header } from "components/header";
import { SearchInput } from "components/input/SearchInput";
import { Spinner } from "components/loading/Spinner";
import { SpaceList } from "components/list/spaceList";
import { useAdapter } from "context/AdapterContext";
import { useSearchSpaces } from "hooks/useSearchSpaces";
import Head from "next/head";
import React from "react";

export default function Home() {
  const { auth } = useAdapter();
  const {
    spaces,
    spaceState,
    keywords,
    isLoading,
    searchSpaces,
    onChangeKeywords,
    onChangeState,
  } = useSearchSpaces();

  return (
    <div>
      <Head>
        <title>Twipace | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onClickTwitter={auth.signInWithTwitter} />
      <div className="mt-10">
        <form onSubmit={searchSpaces}>
          <SearchInput
            onClick={searchSpaces}
            value={keywords}
            onChange={onChangeKeywords}
          />
        </form>
      </div>

      <SpaceStateRadio value={spaceState} onChange={onChangeState} />
      <div className="flex justify-center mt-10">
        {isLoading ? <Spinner /> : <SpaceList spaces={spaces} />}
      </div>
    </div>
  );
}
