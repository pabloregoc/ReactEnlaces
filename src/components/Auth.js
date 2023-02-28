import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import avatarFoto from "../images/avatar.jpg";

const Auth = () => {
  const { user, logout, goToProfile } = useContext(AuthContext);

  return user ? (
    <p>
      {user.user.foto ? (
        <p class="avatar">
          <img
            src={`${process.env.REACT_APP_BACKEND}/${user.user.foto}`}
            alt="foto"
            class="ppic"
          ></img>
        </p>
      ) : (
        <p class="avatar">
          <img src={avatarFoto} alt="foto" class="ppic"></img>
        </p>
      )}{" "}
      <p id="conectado">Estás conectado {user.user.nombreUsuario} </p>
      <p class="botones">
        <button onClick={() => goToProfile()} class="boton">
          {" "}
          Ir a mi perfil
        </button>
        <button onClick={() => logout()} class="boton">
          {" "}
          Cerrar sesión
        </button>
      </p>{" "}
    </p>
  ) : (
    <ul class="nolog">
      <li class="nologli">
        <Link to={"/register"}>Registro</Link>
      </li>

      <li class="nologli">
        <Link to={"/login"}>Acceso</Link>
      </li>
    </ul>
  );
};
export default Auth;
//{user.user[0].nombreUsuario}
