import jwtDecode from 'jwt-decode';

const JWT = 'jwt';
const USER = 'user';

interface MyToken {
  name: string;
  exp: number;
}

export function storeJwt(jwt: string) {
  localStorage.setItem(JWT, jwt);
}

export function getJwt() {
  return localStorage.getItem(JWT);
}

export function removeJwt() {
  return localStorage.removeItem(JWT);
}

export function storeUser(user: any) {
  localStorage.setItem(USER, JSON.stringify(user));
}

export function getUser() {
  const rawUser = localStorage.getItem(USER);
  return rawUser && JSON.parse(rawUser);
}

export function removeUser() {
  localStorage.removeItem(USER);
}

export function isExpiredToken() {
  const jwt = getJwt();
  if (!jwt) {
    return true;
  }
  const decodedJwt = jwtDecode<MyToken>(jwt);
  const currentTime = Date.now() / 1000;
  return decodedJwt.exp < currentTime;
}
