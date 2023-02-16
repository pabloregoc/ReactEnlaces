import { useEffect, useState } from "react";
import { getUsuarioDataService } from "../services";

const useUsuario = (id) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsuario = async () => {
      try {
        setLoading(true);
        const data = await getUsuarioDataService(id);

        setUsuario(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUsuario();
  }, [id]);
  return { usuario, loading, error };
};

export default useUsuario;
