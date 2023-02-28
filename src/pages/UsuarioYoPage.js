import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useSelfUsuario from "../hooks/useSelfUsuario";
import { actualizaUsuarioService } from "../services/usuariosService";
import "../pages/UsuarioYoPage.css";

export const UsuarioYoPage = () => {
  const { usuario, loading, error } = useSelfUsuario();
  const { user } = usuario || { user: {} };
  const navigate = useNavigate();

  const errorFormulario = useRef();
  const [image, setImage] = useState();

  const handleFormActualizaUsuario = async (e) => {
    e.preventDefault();
    const { password1, password2 } = e.target.elements;

    if (password1.value !== password2.value) {
      errorFormulario.current = "Las passwords no coinciden";
      return;
    }

    const data = new FormData(e.target);
    try {
      await actualizaUsuarioService(data, localStorage.getItem("token"));
      // Actualizar el usuario en el contexto
      window.location.reload();
    } catch (error) {
      console.error(error);
      errorFormulario.current = error.message;
    }

    // TODO Enviar datos al servidor
  };

  if (loading) return <p>Cargando perfil de usuario</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <form onSubmit={handleFormActualizaUsuario}>
        <fieldset class="registrop">
          <label htmlFor="nombreUsuario">Nombre de usuario</label>
          <input
            type="text"
            id="nombreUsuario"
            name="nombreUsuario"
            required
            defaultValue={user.nombreUsuario}
          ></input>
        </fieldset>
        <fieldset class="registrop">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            defaultValue={user.email}
          ></input>
        </fieldset>
        <fieldset class="registrop">
          <label htmlFor="password1">password</label>
          <input type="password" id="password1" name="password1"></input>
        </fieldset>
        <fieldset class="registrop">
          <label htmlFor="password2">Repetir password</label>
          <input type="password" id="password2" name="password2"></input>
        </fieldset>
        <fieldset class="registrop">
          <input
            type="file"
            id="foto"
            name="foto"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                style={{ width: `200px` }}
              ></img>
            </figure>
          ) : null}
        </fieldset>
        <button class="bform">Actualizar</button>
        {/* {errorFormulario ? <p>{errorFormulario}</p> : null} */}
      </form>
      <h1>Perfil de usuario</h1>
      <p>Nombre de usuario: {user.nombreUsuario}</p>
      <p>Email: {user.email}</p>
    </section>
  );
};
