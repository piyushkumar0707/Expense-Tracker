export const decodeToken = (token) => {
  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));
    // Convert exp from seconds to milliseconds
    if (decoded.exp) {
      decoded.exp = decoded.exp * 1000;
    }
    return decoded;
  } catch {
    return null;
  }
};

export const isTokenExpired = (token) => {
  const data = decodeToken(token);
  if (!data || !data.exp) return true;
  return Date.now() > data.exp;
};
