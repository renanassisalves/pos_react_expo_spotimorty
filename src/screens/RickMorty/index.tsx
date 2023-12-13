import { StatusBar } from 'expo-status-bar';
import {Heading, NativeBaseProvider} from "native-base";
import { useState, useContext } from 'react';
import {ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery} from "@apollo/client";


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
    const { loading, error, data } = useQuery(INFO_PERSON);

    if (loading) return <Heading>Carregando</Heading>
    if (error) return <Heading>Carregando</Heading>;

    return data.characters.results.map(({ name, species, gender, image }) => (
        <Heading key={name} m={10}>
            Nome: {name}
            Especie: {species}
            Genero: {gender}
            Foto: {image}p
        </Heading>
    ));
}


export default function RickMorty() {
  return (
    <ApolloProvider client={client}>
            <RickMortyComponent/>
    </ApolloProvider>
  );

}
