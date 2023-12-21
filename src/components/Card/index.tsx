import { Container, Image } from "native-base";
import { TouchableOpacity } from "react-native";

interface Props {
  album: string;
  img: string;
  setSelectedAlbum: (album: string) => void;
  setSelectedAlbumImage: (img: string) => void;
}

export default function Card({ img, album, setSelectedAlbum, setSelectedAlbumImage }: Props) {
  return (
    <TouchableOpacity onPress={() => {
      setSelectedAlbum(album)
      setSelectedAlbumImage(img)
      }}>
      <Image
        m={2}
        source={{
          uri: img,
        }}
        alt="Alternate Text"
        size="xl"
      />
    </TouchableOpacity>
  );
}
