import { Enlace } from "./Enlace";
export const ListaEnlaces = ({ enlaces }) => {
  return enlaces.length ? (
    <ul>
      {enlaces.map((enlace) => (
        <li key={enlace.id}>
          <Enlace enlace={enlace} />
        </li>
      ))}
    </ul>
  ) : (
    <p>no existen enlaces</p>
  );
};
