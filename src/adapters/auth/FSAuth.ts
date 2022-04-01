import { signInWithPopup } from "firebase/auth";
import { IAuth } from "./IAuth";
import "../../firebase";
import { auth, twitterProvider } from "../../firebase";

export class FSAuth implements IAuth {
  constructor() {}

  async signInWithTwitter(): Promise<void> {
    await signInWithPopup(auth, twitterProvider);
  }
}
