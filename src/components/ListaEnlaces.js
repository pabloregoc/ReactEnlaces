import { Enlace } from "./Enlace";
export const ListaEnlaces = ({ enlaces, removeEnlace }) => {
  return enlaces.length ? (
    <ul>
      {enlaces.map((enlace) => (
        <li key={enlace.id}>
          <Enlace enlace={enlace} removeEnlace={removeEnlace} />
        </li>
      ))}
    </ul>
  ) : (
    <p>no existen enlaces</p>
  );
};
