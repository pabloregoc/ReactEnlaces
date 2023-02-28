import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import {
  deleteEnlaceService,
  enlaceVotoNuevo,
  enlaceVotoElimina,
} from "../services";

export const Enlace = ({ enlace, removeEnlace }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const [esVotado, setEsVotado] = useState(!!enlace.VotadosPorMi);

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

  const voto = async (enlace) => {
    const { id } = enlace;
    if (!user) return alert("Necesitas estar logueado para votar");
    try {
      await enlaceVotoNuevo({ id, token });
      setEsVotado(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const eliminaVoto = async (enlace) => {
    const { id } = enlace;
    try {
      await enlaceVotoElimina({ id, token });
      setEsVotado(false);
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

      {enlace.foto ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/${enlace.foto}`}
          alt={enlace.titulo}
        />
      ) : null}
      <br />
      <a href={enlace.URL}>{enlace.URL}</a>
      <p>
        Creado por {enlace.nombreUsuario} el{" "}
        {new Date(enlace.fecha).toLocaleString()}
      </p>
      <p>
        {!!esVotado ? (
          <button class="red" onClick={() => eliminaVoto(enlace)}>
            Ya no me gusta
          </button>
        ) : (
          <button class="bform" onClick={() => voto(enlace)}>
            👍
          </button>
        )}
      </p>

      {user && user.user.id === enlace.idAutor ? (
        <button
          class="red"
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
