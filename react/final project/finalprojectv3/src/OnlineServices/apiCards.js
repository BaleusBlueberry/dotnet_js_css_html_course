import { api } from "./apiCalls";

export const getAllCards = () => {
  return api
    .get("cards")
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
export const getCard = (id) => {
  return api
    .get(`cards/${id}`)
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
export const RegisterCardApi = (data) => {
  return api
    .post(`cards`, { data })
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
export const LikeCard = (data) => {
  return api
    .patch(`cards/${data}`)
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
