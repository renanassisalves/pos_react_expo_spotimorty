import { Flex, Heading, Text, Image, Progress, MoonIcon, Pressable, SunIcon, useColorMode } from "native-base";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/user";
import { FlatList, Alert } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import { getAlbums } from "../../services/albums";

export default function MusicasScreen() {
  const userData = useContext(UserContext);
  const [selectedAlbum, setSelectedAlbum] = useState("Nenhum álbum selecionado");
  const [selectedAlbumImage, setSelectedAlbumImage] = useState("https://img.freepik.com/vetores-premium/mock-up-da-capa-do-disco-de-vinil-em-cores-neon-retro-modelo-de-album-de-musica-antigo_257312-2356.jpg");
  const [albums, setAlbums] = useState([]);
  
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  useEffect(() => {
    getAlbums(userData.user?.token)
      .then((response) => setAlbums(response.data))
      .catch((e) => console.log("erro", e));
  }, []);

  return (
    <Flex
      flex={1}
      p={5}
      justifyContent="center"
      alignItems="center"
      bg={ colorMode === "light" ? "primary.100" : "secondary.100"}
    >
       <Pressable mt="1" onPress={toggleColorMode} marginLeft="auto">
        {colorMode === "light" ? (
          <MoonIcon color="secondary.100" size="6" />
        ) : (
          <SunIcon color="primary.100" size="6" />
        )}
      </Pressable>
      <Heading color={colorMode === "light" ? "secondary.100" : "primary.100" } fontSize="4xl">
        Welcome back {userData.user.name}
      </Heading>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            img={item.img}
            album={item.album}
            setSelectedAlbum={setSelectedAlbum}
            setSelectedAlbumImage={setSelectedAlbumImage}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      
<Selected text={selectedAlbum} color={colorMode === "light" ? "secondary.100" : "primary.100"} />
      <Image
        m={2}
        source={{
          uri: selectedAlbumImage,
        }}
        alt="Capa do álbum selecionado"
        size="2xl"
      />
      
    </Flex>
  );
}
