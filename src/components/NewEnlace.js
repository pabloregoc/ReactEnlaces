import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendEnlaceService } from "../services";

export const NewEnlace = () => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const data = new FormData(e.target);
      const enlace = await sendEnlaceService({ data, token });
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };
  return (
    <form onSubmit={handleForm}>
      <h1>Agregar nuevo enlace</h1>
      <fieldstet>
        <label htmlFor="text">Titulo</label>
        <input type="text" id="Titulo" name="Titulo" required></input>
      </fieldstet>
      <fieldstet>
        <label htmlFor="text">Descripción</label>
        <input type="text" id="Descripcion" name="Descripcion" required></input>
      </fieldstet>
      <fieldstet>
        <label htmlFor="text">URL</label>
        <input type="text" id="URL" name="URL" required></input>
      </fieldstet>
      <fieldstet>
        <label htmlFor="image">Foto</label>
        <input type="file" id="imagen" name="imagen"></input>
      </fieldstet>
      <button>Publicar</button>
      {sending ? <p>Enlace enviado</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
