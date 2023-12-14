import { StatusBar } from 'expo-status-bar';
import { Flex, Heading, Spinner, Text, ColorMode, useColorMode, ScrollView, MoonIcon, Pressable, SunIcon, Image, Container } from "native-base";
import { useState, useContext, useEffect } from 'react';
import {ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery} from "@apollo/client";
import CardPersonagem from '../../components/CardPersonagem';
import { iCharacter, useCharacterContextValue } from '../../context/characters';



const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
});


const INFO_PERSON = gql`
  query {
    characters {
      results {
        name
        species
        gender
        image
      }
    }
  }
`;

function RickMortyComponent() {
  const characterData = useCharacterContextValue();
  const { loading, error, data } = useQuery(INFO_PERSON, {
    skip: characterData.characters.length > 0,
  });

  if (loading) return <Spinner size={'lg'} />;
  if (error) return <Heading>Erro: {error.message}</Heading>;

  if (data) {
    data.characters.results.forEach((character : iCharacter) => {
      characterData.addCharacter(character);
    });
  }

  return (
    <>
      {characterData.characters?.map(({ name, species, gender, image }) => (
        <CardPersonagem key={name} name={name} species={species} gender={gender} image={image} />
      ))}
    </>
  );
}

export default function RickMorty() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ApolloProvider client={client}>
      <Flex backgroundColor={colorMode == 'dark' ? 'primary.100' : 'secondary.100'}>
        <Pressable m="5" onPress={toggleColorMode} marginRight="auto">
          {colorMode === 'light' ? (
            <MoonIcon color="coolGray.800" size="6" />
          ) : (
            <SunIcon color="coolGray.50" size="6" />
          )}
        </Pressable>

        <Image
          m={2}
          source={{
            uri: 'https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png',
          }}
          alt='Rick Morty logo'
          width={400}
          height={120}
        />

        <ScrollView mb={200}>
          <RickMortyComponent />
        </ScrollView>
      </Flex>
    </ApolloProvider>
  );
}