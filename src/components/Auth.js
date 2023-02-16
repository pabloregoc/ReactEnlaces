import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <p>
      estas conectado{" "}
      <Link to={`/usuarios/${user.user[0].id}`}>
        {user.user[0].nombreUsuario}
      </Link>
      <button onClick={() => logout()}> Cerrar sesión</button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to={"/register"}>Registro</Link>
      </li>
      <li>
        <Link to={"/login"}>Acceso</Link>
      </li>
    </ul>
  );
};
export default Auth;
//{user.user[0].nombreUsuario}
