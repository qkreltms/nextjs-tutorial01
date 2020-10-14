import { NextApiRequest, NextApiResponse } from "next";
/**
 * Do Not Fetch an API Route from getStaticProps or getStaticPaths
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};
