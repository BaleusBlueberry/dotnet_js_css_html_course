import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserCheck() {
  const { setToken } = useContext(UserContext);
}

export default UserCheck;
