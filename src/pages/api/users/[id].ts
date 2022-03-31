import { NextApiRequest, NextApiResponse } from "next";
import { client } from "twitter";
import {
  GetUserReponse,
  TwitterErrorResponse,
} from "types/api/twitterApi/response";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.id === "undefined") {
    res.status(400).json({ status: 400, message: "Invalid Request" });
    return;
  }

  const userId = req.query.id;
  const data = await client.get<GetUserReponse | TwitterErrorResponse>(
    `users/${userId}?user.fields=profile_image_url`
  );
  console.log(data);
  if ((data as TwitterErrorResponse).errors) {
    res.status(400).json({
      status: 400,
      message: (data as TwitterErrorResponse).errors[0].detail,
    });
    return;
  }

  res.status(200).json(data as GetUserReponse);
};
