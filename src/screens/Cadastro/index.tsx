import { Flex, Heading, Input, Text, ColorMode, useColorMode, IconButton, Icon, MoonIcon, Pressable, SunIcon, Container } from "native-base";
import { Alert } from "react-native";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { login } from "../../services/auth";
import { register } from "../../services/register";

export default function CadastroScreen({navigation}) {
  const userData = useContext(UserContext);

  userData.user?.token;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  const handleRegister = () => {
    register({
      username: username,
      password: password,
    })
      .then(function (response) {
        if (response.data.message == "user created successfully") {
            console.log("Cadastrado com sucesso");
            Alert.alert("Sucesso", "Cadastrado com sucesso");
            handleLogin();
        } else {
            console.error("Erro, mensagem não mapeada", response.data.message);
            Alert.alert("Error", "mensagem não mapeada", response.data.message);
        }
      })
      .catch(function (error) {
        console.error("error", error);
        Alert.alert("Error", "usuário ou senha inválidos");
      });
  };

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
      <Heading>Cadastrar</Heading>
      <Input mt={2} onChangeText={(value) => setUsername(value)} />
      <Input mt={2} onChangeText={(value) => setPassword(value)} />
      {/* <Input mt={2} onChangeText={(value) => setEmail(value)} /> */}
      <Flex width="100%">
        <Button content="Cadastrar" handleClick={handleRegister} colorMode={colorMode}/>
        <Button content="Cancelar" handleClick={() => {navigation.navigate('Login')}} colorMode={colorMode}/>
      </Flex>
      <Pressable mt="20" onPress={toggleColorMode} marginLeft="auto">
        {colorMode === "light" ? (
          <MoonIcon color="coolGray.800" size="6" />
        ) : (
          <SunIcon color="coolGray.50" size="6" />
        )}
      </Pressable>
    </Flex>
  );
}
