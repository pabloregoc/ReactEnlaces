export const listaEnlacesService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/Enlaces`);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data.enlaces;
};

export const enlaceConcreto = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/Enlaces/${id}`
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const registerUsuarioService = async ({
  email,
  nombreUsuario,
  password,
}) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, nombreUsuario, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
export const loginUsuarioService = async ({ email, password }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/usuarios/login/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getUsuarioService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/usuarios`, {
    headers: { Authorization: token },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const sendEnlaceService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/Enlaces`, {
    method: "POST",
    headers: { Authorization: token },
    body: data,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
