import { useEffect, useState } from "react";
import { listaEnlacesService } from "../services";

const useEnlaces = () => {
  const [enlaces, setEnlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEnlaces = async () => {
      try {
        setLoading(true);
        const data = await listaEnlacesService();
        console.log(data);
        setEnlaces(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadEnlaces();
  }, []);
  return { enlaces, loading, error };
};

export default useEnlaces;
