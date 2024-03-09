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
      return {
        success: false,
        message: error.response.data,
      };
    });
};
export const RegisterCardApi = (data) => {
  return api
    .post(`cards`, data)
    .then((response) => {
      return {
        success: true,
        message: response.data,
      };
    })
    .catch((error) => {
      return {
        success: false,
        message: error.response.data,
      };
    });
};
export const LikeCard = (id) => {
  return api
    .patch(`cards/${id}`)
    .then((response) => {
      return {
        success: true,
        message: response.data,
      };
    })
    .catch((error) => {
      return {
        success: false,
        message: error.response.data,
      };
    });
};
export const UpdateCard = (id, data) => {
  return api
    .put(`cards/${id}`, data)
    .then((response) => {
      return {
        success: true,
        message: response.data,
      };
    })
    .catch((error) => {
      return {
        success: false,
        message: error.response.data,
      };
    });
};
export const DeleateCard = (id, data) => {
  return api
    .delete(`cards/${id}`, data)
    .then((response) => {
      return {
        success: true,
        message: response.data,
      };
    })
    .catch((error) => {
      return {
        success: false,
        message: error.response.data,
      };
    });
};
