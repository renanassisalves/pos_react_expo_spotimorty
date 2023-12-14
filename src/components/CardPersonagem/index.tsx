import { Container, Image, Flex, Text, Center } from "native-base";
import { TouchableOpacity, _Text } from "react-native";

interface Props {
  name: string;
  species: string;
  gender: string;
  image: string;
}

export default function Card({ name, species, gender, image }: Props) {
  return (
    <Flex alignItems={"center"}>
      <Container
      _dark={{backgroundColor: "secondary.100"}}
      _light={{backgroundColor: "primary.100"}}
      borderRadius={10}
      alignItems={"center"}
      width={220}
      margin={5}
      paddingTop={2}
      paddingBottom={2}>
      <Text fontSize={"3xl"} textAlign={"center"} 
      _dark={{color: "primary.100",}}
      _light={{color: "secondary.100", backgroundColor: "primary.100"}}

      >{name}</Text>
      <Image
        m={2}
        source={{
          uri: image,
        }}
        alt="Rick morty character"
        size="xl"
      />
    <Text 
    fontSize={"md"}
    textAlign={"center"}
    _dark={{color: "primary.100",}}
    _light={{color: "secondary.100", backgroundColor: "primary.100"}}
    >
      Espécie: {species}
      </Text>
    <Text
    fontSize={"md"}
    textAlign={"center"}
    _dark={{color: "primary.100",}}
    _light={{color: "secondary.100", backgroundColor: "primary.100"}}
    >Gênero: {gender}</Text>
    </Container>
    </Flex>
  );
}
