import Twitter from "twitter-v2";

export const client = new Twitter({
  bearer_token: process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN || "",
});
