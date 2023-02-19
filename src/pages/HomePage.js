import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewEnlace } from "../components/NewEnlace";
import { ListaEnlaces } from "../components/ListaEnlaces";
import { AuthContext } from "../context/AuthContext";
import useEnlaces from "../hooks/useEnlaces";

const HomePage = () => {
  const { user, token } = useContext(AuthContext);
  const { enlaces, loading, error, addEnlace, removeEnlace } = useEnlaces(token);

  if (loading) return <p> Cargando enlaces...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {user ? <NewEnlace addEnlace={addEnlace} /> : null}
      <h1> Nuevos enlaces</h1>
      <ListaEnlaces enlaces={enlaces} removeEnlace={removeEnlace} />
    </section>
  );
};
export default HomePage;
