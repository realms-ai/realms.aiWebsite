import { User } from "@/pages/api/typing";

export const fetchUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getUser`);
  const data = await res.json();
  const users: User[] = data.users;

  return users;
};
