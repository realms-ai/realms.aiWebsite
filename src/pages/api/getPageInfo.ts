import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { PageInfo } from "./typing";

type Data = {
  pageinformation: PageInfo[];
};

export const pageInfoQuery = groq`
*[_type == 'pageInfo'] {
    ...,
    socials[]->
}`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageinformation: PageInfo[] = await sanityClient.fetch(pageInfoQuery);

  res.status(200).json({ pageinformation });
}
