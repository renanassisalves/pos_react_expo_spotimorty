import { Flex, Heading, Input } from "native-base";
import Button from "../../components/Button";
import { Alert } from "react-native";
import UserContext from "../../context/user";
import { useContext } from 'react';

export default function Login() {
    const userData = useContext(UserContext)
    return (
        <Flex p={5} flex={1} justifyContent='center' alignItems='center'>
            <Heading>Tela de login</Heading>
            <Input mt={2} />
            <Input mt={2} />
            <Flex width='100%'>
                <Button 
                    content="Sign in" 
                    variation="primary" 
                    handleClick={() => { userData.setUser({name: "Teste", email:"teste@gmail.com"}) }} 
                />
            </Flex>
        </Flex>
    )
}