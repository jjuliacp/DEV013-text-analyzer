import Button from "./Button";


interface TextInputProps {
  text: string;
  setText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ text, setText }) => {
  return (
    <section className="col-span-2 col-start-1 " >
      < textarea
        className="w-full h-[90%] bg-transparent border-none text-gray-400 resize-none focus:outline-none placeholder-gray-400 "
        placeholder="Escribe o pega tu texto aquí..."
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea >
      <Button onClick={() => setText("")} />
    </section >
  );
};

export default TextInput;
