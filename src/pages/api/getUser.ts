import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { User } from "./typing";

type Data = {
  user: User[];
};

export const userQuery = groq`
*[_type =="user"] {
  ...,
  experience[]->{
    ...,technologies[]->
  },
    pageInfo[]->,
    project[]->,
    skill[]->,
    social[]->
    
}`;
export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user: User[] = await sanityClient.fetch(userQuery);

  res.status(200).json({ user });
}
