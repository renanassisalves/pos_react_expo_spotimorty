import { Flex, Heading, Input, Text } from "native-base";
import Button from "../../components/Button";
import { Alert } from "react-native";
import { useContext } from 'react';
import UserContext from "../../context/user";

export default function Home() {
    const userData = useContext(UserContext);
    
    return (
        <Flex p={5} flex={1} justifyContent='center' alignItems='center'>
            <Heading>HOME</Heading>
            <Text>Bem Vindo {userData.user.name}</Text>
        </Flex>
    )
}