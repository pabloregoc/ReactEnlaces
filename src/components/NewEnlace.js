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
      <h1 class="cabecera">Agregar nuevo enlace</h1>
      <fieldstet class="titulo">
        <label htmlFor="text" class="placeholder"></label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          class="placeholder"
          placeholder="Título"
          required
        ></input>
      </fieldstet>
      <fieldstet class="descripcion">
        <label htmlFor="textarea" id="textarea" class="placeholder"></label>
        <textarea
          type="text"
          id="descripcion"
          name="descripcion"
          class="placeholder"
          placeholder="Descripción"
          required
        ></textarea>
      </fieldstet>
      <fieldstet class="url">
        <label htmlFor="text" class="placeholder"></label>
        <input
          type="text"
          id="URL"
          name="URL"
          placeholder="URL"
          class="placeholder"
          required
        ></input>
      </fieldstet>
      <fieldstet class="image">
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
      <button class="bform">Publicar</button>
      {sending ? <p>Enlace enviado</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
