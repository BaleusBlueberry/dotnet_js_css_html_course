import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { projectId } from "../OnlineServices/consts";

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenFromStorage = localStorage.getItem("token");
  const [token, setTokens] = useState(tokenFromStorage);
  const [readbleToken, setReadbleToken] = useState(null);
  const [popupShow, setpopupShow] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setReadbleToken(decoded);

      if (decoded.ProjectID !== projectId) {
        setToken(null);
        return (
          <Modal
            size="sm"
            show={popupShow}
            onHide={() => setpopupShow(false)}
            aria-labelledby="modal-pop"
          >
            <Modal.Header closeButton>
              <Modal.Title id="modal-pop">Invalid project ID</Modal.Title>
            </Modal.Header>
            <Modal.Body>Logging out</Modal.Body>
          </Modal>
        );
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
