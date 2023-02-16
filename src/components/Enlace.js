import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { deleteEnlaceService } from "../services";

export const Enlace = ({ enlace, removeEnlace }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteEnlace = async (id) => {
    try {
      await deleteEnlaceService({ id, token });
      if (removeEnlace) {
        removeEnlace(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

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
        <Link to={`/usuarios/${enlace.idAutor}`}>
          {" "}
          {enlace.nombreUsuario}
        </Link>{" "}
        el {new Date(enlace.fecha).toLocaleString()}
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
