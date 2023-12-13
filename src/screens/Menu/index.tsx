import { Flex, Heading, Input, Text, ColorMode, useColorMode, IconButton, Icon, MoonIcon, Pressable, SunIcon, Container } from "native-base";
import { Alert } from "react-native";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";


export default function Login({navigation}) {
  const userData = useContext(UserContext);

  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  return (
    <Flex p={5} flex={1} justifyContent="center" alignItems="center" backgroundColor={colorMode == 'dark' ? 'primary.100' : 'secondary.100'}>
      <Heading>Selecione uma api</Heading>
      <Flex width="100%" mt={10}>
        <Button content="API de Músicas" handleClick={() => {navigation.navigate("Musicas")}} colorMode={colorMode}/>
        <Button content="Rick e Morty (GraphQL)" handleClick={() => {navigation.navigate("RickMorty")}} colorMode={colorMode} />
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