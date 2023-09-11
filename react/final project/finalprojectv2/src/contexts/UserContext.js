import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { projectId } from "../OnlineServices/consts";

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenFromStorage = localStorage.getItem("token");
  const [token, setTokens] = useState(tokenFromStorage);
  const [readbleToken, setReadbleToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setReadbleToken(decoded);
      if (decoded.ProjectID !== projectId) {
        setToken(null);
      }
    }
  }, [token]);

  const setToken = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
      setUser(null);
      setReadbleToken(null);
    }
    setTokens(newToken);
  };

  return (
    <UserContext.Provider value={{ token, setToken, user, readbleToken }}>
      {children}
    </UserContext.Provider>
  );
};
