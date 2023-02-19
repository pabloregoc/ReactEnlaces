export const enlaceVotoNuevo = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/Enlaces/${id}/votos`,
    {
      method: "POST",
      headers: { Authorization: token },
    }
  );
  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const enlaceVotoElimina = async ({ valoracion, id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/Enlaces/${id}/votos`,
    {
      method: "DELETE",
      headers: { Authorization: token }
    }
  );
  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const listaEnlacesService = async (token) => {
  let options = {};
  if (token) {
    options = {
      headers: { Authorization: token },
    };
  }

  const response = await fetch(`${process.env.REACT_APP_BACKEND}/Enlaces`, options);
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

export const getUsuarioDataService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/usuarios`, {
    headers: { Authorization: token },
    body: id,
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getOwnUsuarioDataService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/usuarios/yo`, {
    headers: { Authorization: token }
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

export const deleteEnlaceService = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/Enlaces/${id}`,
    {
      method: "DELETE",
      headers: { Authorization: token },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
