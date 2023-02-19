export const actualizaUsuarioService = async (data, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/usuarios/yo`,
    {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};