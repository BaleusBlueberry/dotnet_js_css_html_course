import { myApiLink, projectId } from "./consts";
import axios from "axios";

const api = axios.create({
  baseURL: myApiLink,
});

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

export const registerNewUser = async (data) => {
  return api
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
    .then((response) => response.data)
    .catch((error) => {});
};

export const getUserData = async (email) => {
  return api
    .get(`/user/object/${projectId}/${email}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {});
};
