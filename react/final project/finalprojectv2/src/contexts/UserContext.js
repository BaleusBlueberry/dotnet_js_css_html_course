import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { projectId } from "../OnlineServices/consts";
import { getItems } from "../OnlineServices/api";

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenFromStorage = localStorage.getItem("token");
  const [token, setTokens] = useState(tokenFromStorage);
  const [readbleToken, setReadbleToken] = useState(null);
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [favorateCards, setFavorateCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setReadbleToken(decoded);
      getItems(token)
        .then((response) => {
          setCards(response);
          GetUserCards(response, decoded.Email);
        })
        .catch((err) => {
          throw err;
        })
        .finally(() => {
          setLoading(false);
        });
      if (decoded.ProjectID !== projectId) {
        setToken(null);
      }
    }
  }, [token]);

  const Loggout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setReadbleToken(null);
  };

  const GetUserCards = (cards, userEmail) => {
    const userCardsFiltered = cards.filter(
      (card) => card.Data.Ownermail === userEmail
    );
    setUserCards(userCardsFiltered);
    console.log(cards);
  };

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
    <UserContext.Provider
      value={{
        token,
        setToken,
        user,
        readbleToken,
        cards,
        loading,
        userCards,
        Loggout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
