import { useEffect, useState } from "react";
import { enlaceConcreto } from "../services";

const useEnlace = (id) => {
  const [enlace, setEnlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEnlace = async () => {
      try {
        setLoading(true);
        const data = await enlaceConcreto(id);
        setEnlace(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadEnlace();
  }, [id]);
  return { enlace, loading, error };
};

export default useEnlace;
