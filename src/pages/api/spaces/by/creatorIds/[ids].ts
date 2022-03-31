import { spaceQueryParm } from "constants/twitterApi";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "twitter";
import { NextErrorResponse } from "types/api/nextApi/response";
import {
  GetSpaceListResponse,
  TwitterErrorResponse,
} from "types/api/twitterApi/response";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<GetSpaceListResponse | NextErrorResponse>
) => {
  if (req.query.ids === "undefined") {
    res.status(400).json({ status: 400, message: "Invalid Request" });
    return;
  }

  const creatorIds = req.query.ids;
  const data = await client.get<GetSpaceListResponse | TwitterErrorResponse>(
    `spaces/by/creator_ids?user_ids=${creatorIds}&${spaceQueryParm}`
  );

  if ((data as TwitterErrorResponse).errors) {
    res.status(400).json({
      status: 400,
      message: (data as TwitterErrorResponse).errors[0].detail,
    });
    return;
  }

  res.status(200).json(data as GetSpaceListResponse);
};
