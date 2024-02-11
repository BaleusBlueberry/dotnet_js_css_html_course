import { api } from "./apiCalls";

export const loginUser = (email, password) => {
  return api
    .post("/users/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      localStorage.setItem("token", response.data);
      return {
        success: true,
        message: "User logged in successfully",
      };
    })
    .catch((error) => {
      localStorage.setItem("token", null);
      console.log(error);
      return {
        success: false,
        message: error.response.data,
      };
    });
};
