import { useQuery } from "react-query";
import { api } from "../api";

interface UserProps {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface GetUserResponseProps {
  totalCount: number;
  users: UserProps[];
}

export async function getUsers(page: number): Promise<GetUserResponseProps> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString("pt-br", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5,
  });
}
