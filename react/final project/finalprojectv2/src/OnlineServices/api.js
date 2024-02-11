import { myApiLink, projectId } from "./consts";
import axios from "axios";

const api = axios.create({
  baseURL: myApiLink,
});

// makes the api call to login the user
export const loginUser = (email, password) => {
  return api
    .post(`/login/${projectId}`, {
      Email: email,
      Password: password,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// makes the api call to register the user
export const registerNewUser = (data) => {
  return new Promise((resolve) => {
    api
      .post("/user/", {
        ID: data.ID,
        ProjectID: projectId,
        Email: data.Email,
        Password: data.Password,
        Role: "Guest",
        Name: data.Name,
        IsBusines: data.IsBusines,

        // eslint-disable-next-line eqeqeq
        ...(data.IsBusiness == "true"
          ? {
              CompanyName: data.CompanyName,
              Phone: data.Phone,
              Country: data.Country,
              City: data.City,
              HouseNumber: data.HouseNumber,
              State: data.State,
              ZipCode: data.ZipCode,
            }
          : {}),
      })
      .then(async () => {
        try {
          loginUser(data.Email, data.Password)
            .then(async (_response) => {
              await createNewCard(_response.token, data, data.Email);
              resolve(_response);
            })
            .catch((err) => {
              throw err;
            });
        } catch (error) {
          throw error;
        }
      })
      .catch((error) => {
        throw error;
      });
  });
};

export const getUserData = async (email) => {
  return api
    .get(`/user/object/${projectId}/${email}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const createNewCard = async (token, data, CardCategory = "Cards") => {
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const postData = {
    Data: { ...data },
    Scope: "Public",
  };

  return api
    .post(`/item/${projectId}_${CardCategory}`, postData, config)
    .catch((error) => {
      throw error;
    });
};

export const getItems = (token, itemCategory = "Cards") => {
  const config = token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};

  return api
    .get(`/item/${projectId}_${itemCategory}`, config)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error getting items:", error);
      throw error;
    });
};

export const getItem = (token, itemCategory = "Cards", itemId) => {
  const config = token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};

  return api
    .get(`/item/${projectId}_${itemCategory}/${itemId}`, config)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error getting items:", error);
      throw error;
    });
};

export const updateItem = (token, itemCategory, itemId, data) => {
  return api
    .put(`/item/${projectId}_${itemCategory}/${itemId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating item:", error);
      throw error;
    });
};

export const deleteItem = (token, itemCategory, itemId) => {
  return api
    .delete(`/item/${projectId}_${itemCategory}/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error deleting item:", error);
      throw error;
    });
};
