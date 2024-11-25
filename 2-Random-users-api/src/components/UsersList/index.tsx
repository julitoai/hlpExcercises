import { Users } from "../../App";
import UserCard from "../UserCard";

interface Props {
  data: Users[];
}

export default function UsersList({ data }: Props) {
  return (
    <>
      {data.map((user) => (
        <UserCard
          name={user.name}
          surname={user.surname}
          picture={user.picture}
        />
      ))}
    </>
  );
}
