
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import avatarFoto from "../images/avatar.jpg";

const Auth = () => {
  const { user, logout, goToProfile } = useContext(AuthContext);
  
  return user ? (
    <p>
      Estás conectado{" "}
      
        {user.user.nombreUsuario}
        {" "}
      
      {user.user.foto ? (<img 
        src={`${process.env.REACT_APP_BACKEND}/${user.user.foto}`}
        alt="foto"
        style={{ width: `50px` }}
      ></img>) : (<img 
        src={avatarFoto}
        alt="foto"
        style={{ width: `50px` }}
      ></img>)}
      {" "}
      <button onClick={() => goToProfile()}> Ir a mi perfil</button>
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
