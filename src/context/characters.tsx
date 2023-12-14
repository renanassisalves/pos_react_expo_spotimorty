import { createContext, useState, useContext } from "react";

export type iCharacter = {
  name: string;
  species: string;
  gender: string;
  image: string | null;
};

type ICharacterContext = {
  characters: Array<iCharacter> | null;
  addCharacter: (characterData: iCharacter) => void;
};

const CharacterContext = createContext<ICharacterContext>({
  characters: [],
  addCharacter: () => {},
});

export const useCharacterContext = () => {
  const [characters, setCharacters] = useState<Array<iCharacter> | null>([]);

  const addCharacter = (characterData: iCharacter) => {
    setCharacters((prevCharacters) => [...(prevCharacters || []), characterData]);
  };

  const contextValue: ICharacterContext = {
    characters,
    addCharacter,
  };

  return contextValue;
};

export const CharacterContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const contextValue = useCharacterContext();

  return (
    <CharacterContext.Provider value={contextValue}>{children}</CharacterContext.Provider>
  );
};

export const useCharacterContextValue = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacterContextValue deve ser utilizado dentro de um CharacterContextProvider");
  }
  return context;
};
