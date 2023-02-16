import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendEnlaceService } from "../services";

export const NewEnlace = ({ addEnlace }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [image, setImage] = useState();
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const data = new FormData(e.target);
      const enlace = await sendEnlaceService({ data, token });
      addEnlace(enlace);
      e.target.reset();
      setImage(null);
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
        <input type="text" id="titulo" name="titulo" required></input>
      </fieldstet>
      <fieldstet>
        <label htmlFor="text">Descripción</label>
        <input type="text" id="descripcion" name="descripcion" required></input>
      </fieldstet>
      <fieldstet>
        <label htmlFor="text">URL</label>
        <input type="text" id="URL" name="URL" required></input>
      </fieldstet>
      <fieldstet>
        <label htmlFor="image">Foto</label>
        <input
          type="file"
          id="image"
          name="image"
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
      </fieldstet>
      <button>Publicar</button>
      {sending ? <p>Enlace enviado</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
