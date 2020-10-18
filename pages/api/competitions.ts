import { isoDateFormat } from "../../lib/date-util";

const axios = require("axios").default;

export default async function handler(req, res) {
  const eRes = await axios.get("http://liveresultat.orientering.se/api.php?method=getcompetitions");
  const today = isoDateFormat(new Date());
  res.status(200).json(eRes.data.competitions.filter(c => c.date === today));
}
