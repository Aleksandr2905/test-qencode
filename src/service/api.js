import axios from "axios";

const BASE_URL = "https://auth-qa.qencode.com/v1/auth";
const $instance = axios.create({ baseURL: BASE_URL });

export const setToken = (token) => {
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const login = async (userData) => {
  const { data } = await $instance.post("/login", userData);
  setToken(data.access_token);
  return data;
};

export const resetPassword = async (email) => {
  const { data } = await $instance.post("/password-reset", email);
  return data;
};

export const forgotPassword = async (newPassword) => {
  const { data } = await $instance.post("/password-set", newPassword);
  return data;
};
