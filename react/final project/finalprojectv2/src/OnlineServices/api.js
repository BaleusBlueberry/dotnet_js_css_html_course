import { myApiLink, projectId } from "./consts";
import axios from "axios";

const api = axios.create({
  baseURL: myApiLink,
});

export const loginUser = async (email, password) => {
  const response = await api
    .post(`/login/${projectId}`, {
      Email: email,
      Password: password,
    })
    .then(() => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const registerNewUser = async (data) => {
  const response = await api
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
    .then(() => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getUserData = async (email) => {
  const response = await api
    .get(`/user/object/${projectId}/${email}`)
    .then(() => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
