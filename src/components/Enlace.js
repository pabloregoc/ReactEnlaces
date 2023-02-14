import { Link } from "react-router-dom";

export const Enlace = ({ enlace, user }) => {
  console.log(enlace);
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
      <p>
        Creado por
        <Link to={`/Enlace/${enlace.idAutor}`}>{enlace.idAutor}</Link> el
        <Link to={`/Enlace/${enlace.id}`}>
          {new Date(enlace.fecha).toLocaleString()}
        </Link>
      </p>
    </article>
  );
};
