import { Flex, Heading, Input, Text, ColorMode, useColorMode, IconButton, Icon, MoonIcon, Pressable, SunIcon, Container } from "native-base";
import { Alert } from "react-native";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { login } from "../../services/auth";


export default function Login({navigation}) {
  const userData = useContext(UserContext);

  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  userData.user?.token;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    login({
      username: username,
      password: password,
    })
      .then(function (response) {
        userData.setUser({
          name: "Gabriel",
          email: "gabrielgs1408@gmail.com",
          token: response.data.token,
        });
        navigation.navigate('Menu');
      })
      .catch(function (error) {
        console.error("error", error);
        Alert.alert("Error", "usuário ou senha inválidos");
      });
  };

  return (
    <Flex p={5} flex={1} justifyContent="center" alignItems="center" backgroundColor={colorMode == 'dark' ? 'primary.100' : 'secondary.100'}>
      <Heading>Tela de login</Heading>
      <Text mt={5}>Nome de usuário</Text>
      <Input mt={2} onChangeText={(value) => setUsername(value)} />
      <Text mt={2}>Senha</Text>
      <Input mt={2} onChangeText={(value) => setPassword(value)} type="password" />
      <Flex width="100%" mt={10}>
        <Button content="Logar" handleClick={handleLogin} colorMode={colorMode}/>
        <Button content="Cadastrar" handleClick={() => {navigation.navigate('Cadastrar')}} colorMode={colorMode} />
      </Flex>
      <Pressable mt="10" onPress={toggleColorMode} marginLeft="auto">
        {colorMode === "light" ? (
          <MoonIcon color="coolGray.800" size="6" />
        ) : (
          <SunIcon color="coolGray.50" size="6" />
        )}
      </Pressable>
    </Flex>
    
  );
}