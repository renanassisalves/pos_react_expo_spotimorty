import { Text } from "native-base";

interface Props {
  text: string;
  color: string;
}

export default function Selected({ text, color }: Props) {
  return <Text color={color} fontSize={"2xl"} textAlign={"center"}>{text}</Text>;
}
