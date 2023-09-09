import { myApiLink, projectId } from "./consts";
import axios from "axios";

const api = axios.create({
  baseURL: myApiLink,
});

export const registerNewUser = async (data) => {
  try {
    const response = await api.post("/user/", {
      ID: data.ID,
      ProjectID: projectId,
      Email: data.Email,
      Password: data.Password,
      Role: "Guest",
      Name: data.Name,
      IsBusines: data.IsBusines,
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
    });
    return response.data;
  } catch (error) {}
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post(`/login/${projectId}`, {
      Email: email,
      Password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserData = async (email) => {
  try {
    const response = await api.get(`/user/object/${projectId}/${email}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
