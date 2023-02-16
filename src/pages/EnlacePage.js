import { useParams } from "react-router-dom";
import { Enlace } from "../components/Enlace";
import useEnlace from "../hooks/useEnlace";
import { ErrorMessage } from "../components/ErrorMessage";

const EnlacePage = () => {
  const { id } = useParams();

  const { enlace, loading, error } = useEnlace(id);

  if (loading) return <p> Cargando enlaces...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1> Nuevos enlace</h1>
      <Enlace enlace={enlace.Enlaces.id} />
    </section>
  );
};
export default EnlacePage;
