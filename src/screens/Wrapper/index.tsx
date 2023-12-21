import { useContext, useEffect } from "react";
import UserContext from "../../context/user";
import Login from "../Login";
import { Menu } from "native-base";

export default function Wrapper({navigation}) {
  const userData = useContext(UserContext);
  console.log(userData.user);
  useEffect(() => {
    userData.user != null ? 
    navigation.navigate("Menu")
    :
    navigation.navigate("Login");
  }, []);

  return userData.user != null ? 
  navigation.navigate("Menu")
  :
  navigation.navigate("Login");
}
