import { useEffect, useState } from "react";
import { getOwnUsuarioDataService } from "../services";

const useSelfUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsuario = async () => {
      try {
        setLoading(true);
        const data = await getOwnUsuarioDataService({
          token: localStorage.getItem("token"),
        })
        setUsuario(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUsuario();
  }, []);
  return { usuario, loading, error };
};

export default useSelfUsuario;
