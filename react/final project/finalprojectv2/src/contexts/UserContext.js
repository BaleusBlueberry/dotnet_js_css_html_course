import { createContext, useState, useEffect } from "react";
import { getItems, updateItem } from "../OnlineServices/api";
import { getAllCards } from "../OnlineServices/apiCards";

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [readbleToken, setReadbleToken] = useState(null);
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [favorateCards, setFavorateCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reloadCards, setReloadCards] = useState(null);

  useEffect(() => {
    async function inner() {
      const response = await getAllCards();
      console.log(response);
      setCards(response.message);
    }
    inner();
  }, []);

  const setFavorateCardsFunction = async (data, useMail) => {
    if (favorateCards) {
    } else {
      console.log("this is the user: " + data + " " + useMail);
      console.log(data.card.ItemID);

      let modefideData = data;
      modefideData.card.Data.Ownermail = "Animal@shelter.com";
    }
  };

  const Loggout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setReadbleToken(null);
  };

  useEffect(() => {
    setCards(JSON.parse(localStorage.getItem("Cards")));
    setFavorateCards();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        readbleToken,
        cards,
        loading,
        Loggout,
        setReloadCards,
        setFavorateCardsFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
