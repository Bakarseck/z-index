import { atom } from "recoil";

export const registerData = atom({
  key: "registerData",
  default: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  },
});

export const loginData = atom({
  key: "loginData",
  default: {
    email: "",
    password: "",
  },
});
