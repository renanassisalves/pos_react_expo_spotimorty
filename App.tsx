import { NativeBaseProvider } from "native-base";
import THEME from "./src/theme";
import UserContext, { IUser } from "./src/context/user";
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MMKV } from "react-native-mmkv";
import CadastroScreen from "./src/screens/Cadastro";
import LoginScreen from "./src/screens/Login";
import MenuScreen from "./src/screens/Menu";
import MusicasScreen from "./src/screens/Musicas";
import RickMortyScreen from "./src/screens/RickMorty";
import { CharacterContextProvider } from "./src/context/characters";
import NotificationScreen from "./src/screens/Notifications";
import Wrapper from "./src/screens/Wrapper";


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
            <Stack.Navigator initialRouteName="Wrapper">
              <Stack.Screen name="Wrapper" component={Wrapper}/>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Cadastrar" component={CadastroScreen} />
              <Stack.Screen name="Menu" component={MenuScreen} />
              <Stack.Screen name="Musicas" component={MusicasScreen} />
              <Stack.Screen name="RickMorty" component={RickMortyScreen} />
              <Stack.Screen name="Notificacoes" component={NotificationScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
        </CharacterContextProvider>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}