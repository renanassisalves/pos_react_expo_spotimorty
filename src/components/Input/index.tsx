import { Input as NativeInput } from "native-base";

interface Props {
    content: string;
    variation: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Button({content, variation, setText}:Props) {
    return (
        <NativeInput bg={`${variation}.100`} mt={3} onChange={(event) => { setText(event.nativeEvent.text ) }}>
                {content}
        </NativeInput>
    )
}