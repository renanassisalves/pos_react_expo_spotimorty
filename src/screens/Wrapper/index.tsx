import React, { useContext } from "react";
import UserContext from "../../context/user";

import MenuScreen from "../Menu";
import LoginScreen from "../Login";

export default function Wrapper({navigation}) {
  const userData = useContext(UserContext);
  console.log(userData.user);

  return userData.user != null ? (
    <MenuScreen navigation={navigation} /> // Render Menu directly
  ) : (
    <LoginScreen navigation={navigation} /> // Render Login directly
  );
}