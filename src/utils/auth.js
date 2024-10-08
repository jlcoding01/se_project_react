import { request } from "./api";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.showmyhomes.com"
    : "http://localhost:3001";

// function checkResponse(res) {
//   return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
// }

// function request(url, options) {
//   return fetch(url, options).then(checkResponse);
// }

export const register = (name, email, password, avatar) => {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, avatar }),
  });
};

export const authorize = (email, password) => {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const getUserInfo = (token) => {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserInfo = (name, avatar, token) => {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
};
