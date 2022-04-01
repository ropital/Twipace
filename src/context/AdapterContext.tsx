import { HttpClient } from "adapters/apiClient/HttpClient";
import { CommentsRepo } from "adapters/repository/CommentsRepo/CommentsRepo";
import { SpaceRepo } from "adapters/repository/SpaceRepo/SpaceRepo";
import { UsersRepo } from "adapters/repository/UsersRepo/UsersRepo";
import React, { ReactNode, VFC } from "react";
import { createContext, useContext } from "react";
import { FSAuth } from "../adapters/auth/FSAuth";
import { IAuth } from "../adapters/auth/IAuth";
import "../firebase";

type AdapterContextType = {
  auth: IAuth;
  spaceRepo: SpaceRepo;
  usersRepo: UsersRepo;
  commentsRepo: CommentsRepo;
};

const httpClient = new HttpClient("");
const usersRepo = new UsersRepo(httpClient);
const spaceRepo = new SpaceRepo(httpClient, usersRepo);
const commentsRepo = new CommentsRepo();

const AdapterContext = createContext<AdapterContextType>({
  auth: new FSAuth(),
  spaceRepo,
  usersRepo,
  commentsRepo,
});

export const useAdapter = () => useContext(AdapterContext);

type Props = {
  children: ReactNode;
};

export const AdapterContextProvider: VFC<Props> = ({ children }: Props) => {
  return (
    <AdapterContext.Provider
      value={{
        auth: new FSAuth(),
        spaceRepo,
        usersRepo,
        commentsRepo,
      }}
    >
      {children}
    </AdapterContext.Provider>
  );
};
