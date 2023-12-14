import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import THEME from "./src/theme";
import UserContext, { IUser } from "./src/context/user";
import Wrapper from "./src/screens/Wrapper";
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MMKV } from "react-native-mmkv";
import Cadastro from "./src/screens/Cadastro";
import Login from "./src/screens/Login";
import Home from "./src/screens/Musicas";
import Menu from "./src/screens/Menu";
import Musicas from "./src/screens/Musicas";
import RickMorty from "./src/screens/RickMorty";
import { iCharacter, CharacterContextProvider } from "./src/context/characters";


export const storage = new MMKV({
  id: "movieapp",
});

export default function App() {
  const [user, setUser] = useState<IUser | null>(null);


  useEffect(() => {
    if (user != null) {
      storage.set("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const userDb = storage.getString("user");
    if (userDb) {
      setUser(JSON.parse(userDb));
    }
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider theme={THEME}>
      <UserContext.Provider value={{ user: user, setUser }}>
        <CharacterContextProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Cadastrar" component={Cadastro} />
              <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen name="Musicas" component={Musicas} />
              <Stack.Screen name="RickMorty" component={RickMorty} />
            </Stack.Navigator>
          </NavigationContainer>
        </CharacterContextProvider>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
