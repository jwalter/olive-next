import { NextApiRequest, NextApiResponse } from "next";

const axios = require("axios").default;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;
  const eRes = await axios.get(
    `http://liveresultat.orientering.se/api.php?method=getclasses&comp=${id}`
  );
  res.status(200).json(eRes.data.classes);
}
