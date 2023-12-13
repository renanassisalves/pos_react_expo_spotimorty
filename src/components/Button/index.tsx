import { ColorMode, Button as NativeButton } from "native-base";

interface Props {
  content: string;
  colorMode: ColorMode;
  handleClick: () => void;
}

export default function Button({
  content,
  colorMode,
  handleClick,
}: Props) {
  return (
    <NativeButton 
    bg={colorMode == 'light' ? 'primary.100' : 'secondary.100'} 
    _text={colorMode == 'dark' ? {color: 'primary.100'} : {color: 'secondary.100'}}
    mt={3}
    onPress={handleClick}>
      {content}
    </NativeButton>
  );
}
