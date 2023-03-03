import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Skill } from "./typing";

type Data = {
  skill: Skill[];
};

export const skillQuery = groq`
*[_type == 'skill']`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skill: Skill[] = await sanityClient.fetch(skillQuery);

  res.status(200).json({ skill });
}
