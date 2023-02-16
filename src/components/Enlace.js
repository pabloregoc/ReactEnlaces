import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { deleteEnlaceService } from "../services";

export const Enlace = ({ enlace, removeEnlace }) => {
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteEnlace = async (id) => {
    try {
      await deleteEnlaceService({ id, token });
      removeEnlace(id);
    } catch (error) {
      setError(error.message);
    }
  };
  console.log(enlace);
  return (
    <article>
      <p>
        <h1>{enlace.titulo}</h1>
      </p>
      <p>{enlace.descripcion}</p>
      <p>{enlace.URL}</p>

      {enlace.foto ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/${enlace.foto}`}
          alt={enlace.titulo}
        />
      ) : null}
      <p>
        Creado por
        <Link to={`/Enlace/${enlace.id}`}> {enlace.nombreUsuario}</Link> el
        <Link to={`/Enlace/${enlace.id}`}>
          {new Date(enlace.fecha).toLocaleString()}
        </Link>
      </p>

      {user && user.user[0].id === enlace.idAutor ? (
        <button
          onClick={() => {
            if (window.confirm("¿Seguro que quieres borrar el enlace?"))
              deleteEnlace(enlace.id);
          }}
        >
          Borrar enlace
        </button>
      ) : null}
    </article>
  );
};
