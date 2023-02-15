import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewEnlace } from "../components/NewEnlace";
import { ListaEnlaces } from "../components/ListaEnlaces";
import { AuthContext } from "../context/AuthContext";
import useEnlaces from "../hooks/useEnlaces";

const HomePage = () => {
  const { enlaces, loading, error } = useEnlaces();
  const { user } = useContext(AuthContext);

  if (loading) return <p> Cargando enlaces...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1> Nuevos enlaces</h1>
      {user ? <NewEnlace /> : null}

      <ListaEnlaces enlaces={enlaces} />
    </section>
  );
};
export default HomePage;
