import { spaceQueryParm } from "constants/twitterApi";
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "twitter";
import { NextErrorResponse } from "types/api/nextApi/response";
import {
  GetSpaceResponse,
  TwitterErrorResponse,
} from "types/api/twitterApi/response";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<GetSpaceResponse | NextErrorResponse>
) => {
  if (req.query.id === "undefined") {
    res.status(400).json({ status: 400, message: "Invalid Request" });
    return;
  }

  const spaceId = req.query.id;
  const data = await client.get<GetSpaceResponse | TwitterErrorResponse>(
    `spaces/${spaceId}?${spaceQueryParm}`
  );
  if ((data as TwitterErrorResponse).errors) {
    res.status(400).json({
      status: 400,
      message: (data as TwitterErrorResponse).errors[0].detail,
    });
    return;
  }

  res.status(200).json(data as GetSpaceResponse);
};
