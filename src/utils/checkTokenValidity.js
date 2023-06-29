import jwtDecode from "jwt-decode";

export function checkTokenValidity(token) {
  if (!token) {
    return false;
  }

  const decodedToken = jwtDecode(token);
  const expirationTime = decodedToken.exp * 1000;
  const isExpired = Date.now() > expirationTime;

  return !isExpired;
}