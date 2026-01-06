export const decodeToken = (token) => {
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
};

export const isTokenExpired = (token) => {
  const data = decodeToken(token);
  if (!data || !data.exp) return true;
  return Date.now() > data.exp;
};
