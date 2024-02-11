import { api } from "./apiCalls";

// function that posts to the api the login data
export const loginUser = (email, password) => {
  return (
    api
      .post("/users/login", {
        email: email,
        password: password,
      })
      // returns a tocken on success and saves it in local storage
      .then((response) => {
        localStorage.setItem("token", response.data);
        return {
          // retuns a successful login and a message
          success: true,
          message: "User logged in successfully",
        };
      })
      // when can't login removes the token from local storage
      .catch((error) => {
        localStorage.setItem("token", null);
        console.log(error);
        return {
          // returns a false login and the response message from the api
          success: false,
          message: error.response.data,
        };
      })
  );
};

// register function that posts to the api an object with all the user info
export const registerUser = (userObj) => {
  return api
    .post("users", userObj)
    .then((response) => {
      return {
        success: true,
        message: response.data,
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        success: false,
        message: error.response.data,
      };
    });
};
