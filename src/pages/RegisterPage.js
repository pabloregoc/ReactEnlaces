import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUsuarioService } from "../services";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nombreUsuario, setNombre] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError();
    if (password1 !== password2) {
      setError("Las passwords no coinciden");
      return;
    }
    try {
      await registerUsuarioService({
        email,
        nombreUsuario,
        password: password1,
      });

      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
    }
  };
  return (
    <section>
      <h1>Registro</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="name"
            id="nombre"
            name="nombre"
            required
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="password1">password</label>
          <input
            type="password"
            id="password1"
            name="password1"
            required
            onChange={(e) => setPassword1(e.target.value)}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="password2">Repetir password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            required
            onChange={(e) => setPassword2(e.target.value)}
          ></input>
        </fieldset>
        <button>Resgistrarme</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
export default RegisterPage;
