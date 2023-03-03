import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Project } from "./typing";

type Data = {
  project: Project[];
};

export const projectQuery = groq`
*[_type == 'project']`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const project: Project[] = await sanityClient.fetch(projectQuery);

  res.status(200).json({ project });
}
