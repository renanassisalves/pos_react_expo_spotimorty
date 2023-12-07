import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import THEME from './src/theme';
import UserContext from './src/context/user';
import Wrapper from './src/screens/Wrapper';
import { useState, useContext } from 'react';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NativeBaseProvider theme={THEME}>
      <UserContext.Provider value={{user: user, setUser}}>
      <StatusBar style="auto" />
      <Wrapper/>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
