import { ErrorMessage } from "../components/ErrorMessage";
import { ListaEnlaces } from "../components/ListaEnlaces";
import useEnlaces from "../hooks/useEnlaces";

const HomePage = () => {
  const { enlaces, loading, error } = useEnlaces();

  if (loading) return <p> Cargando enlaces...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1> Nuevos enlaces</h1>

      <ListaEnlaces enlaces={enlaces} />
    </section>
  );
};
export default HomePage;
