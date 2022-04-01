import { NextApiRequest, NextApiResponse } from "next";
import { client } from "twitter";
import {
  GetUserReponse,
  TwitterErrorResponse,
} from "types/api/twitterApi/response";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.username === "undefined") {
    res.status(400).json({ status: 400, message: "Invalid Request" });
    return;
  }

  const username = req.query.username;
  const data = await client.get<GetUserReponse | TwitterErrorResponse>(
    `users/by/username/${username}?user.fields=profile_image_url`
  );
  if ((data as TwitterErrorResponse).errors) {
    res.status(400).json({
      status: 400,
      message: (data as TwitterErrorResponse).errors[0].detail,
    });
    return;
  }

  res.status(200).json(data as GetUserReponse);
};
