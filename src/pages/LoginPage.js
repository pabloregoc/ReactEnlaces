import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUsuarioService } from "../services/index";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await loginUsuarioService({ email, password });
      login(data.token);
      navigate("/");
      // window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1>Acceso</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="password"> Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </fieldset>
        <button> Accede </button>
        {error ? <p> {error}</p> : null}
      </form>
    </section>
  );
};
export default LoginPage;
