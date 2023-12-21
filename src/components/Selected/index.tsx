import { Text } from "native-base";

interface Props {
  text: string;
}

export default function Selected({ text }: Props) {
  return <Text color="secondary.100" fontSize={"4xl"} textAlign={"center"}>{text}</Text>;
}
