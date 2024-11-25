import { Users } from "../App";

const API_LINK = `https://randomuser.me/api/`;

export const getRandomUsers = async (page: number, results: number) => {
  const res = await fetch(`${API_LINK}?page=${page}&results=${results}`);
  if (!res) return;
  const data = await res.json();

  const formattedRes: Users[] = data.results.map(({ name, picture }: any) => ({
    name: name.first,
    surname: name.last,
    picture: picture.medium,
  }));

  return formattedRes;
};
