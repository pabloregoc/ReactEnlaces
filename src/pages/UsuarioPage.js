import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUsuario from "../hooks/useUsuario";

export const UsuarioPage = () => {
  const { id } = useParams();
  const { usuario, loading, error } = useUsuario(id);

  if (loading) return <p>Cargando perfil de usuario</p>;
  if (error) return <ErrorMessage message={error} />;
  return <section>hola</section>;
};
