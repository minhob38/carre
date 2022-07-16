// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ITrainApi } from "../../types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse<ITrainApi>) {
  res.status(200).json({ emoji: "🚂" });
}
