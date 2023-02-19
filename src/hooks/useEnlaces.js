import { useEffect, useState } from "react";
import { listaEnlacesService } from "../services";

const useEnlaces = (token) => {
  const [enlaces, setEnlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEnlaces = async () => {
      try {
        setLoading(true);
        const data = await listaEnlacesService(token);
        setEnlaces(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadEnlaces();
  }, []);
  //funcion para que aparezcan  y otra para que se borren los enlaces sin recargar la pagina
  const addEnlace = (enlace) => {

    setEnlaces([enlace, ...enlaces]);
  };
  const removeEnlace = (id) => {
    setEnlaces(enlaces.filter((enlace) => enlace.id !== id));
  };
  return { enlaces, loading, error, addEnlace, removeEnlace };
};

export default useEnlaces;
