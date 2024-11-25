import { useEffect, useState } from "react";
import "./App.css";
import { getRandomUsers } from "./helpers/getRandomUsers";
import UsersList from "./components/UsersList";

export interface Users {
  name: string;
  surname: string;
  picture: string;
}

function App() {
  const [randomUsers, setRandomUsers] = useState<Users[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getusers = async () => {
    setLoading(true);
    const res = await getRandomUsers(page, 10);
    if (!res) return setLoading(false);
    setRandomUsers((prevState) => [...prevState, ...res]);
    setPage((prevState) => prevState + 1);
    setLoading(false);
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <>
      <UsersList data={randomUsers} />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <button onClick={getusers}>Cargar mas</button>
      )}
    </>
  );
}

export default App;
