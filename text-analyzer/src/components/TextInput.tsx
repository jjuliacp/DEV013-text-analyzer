 
interface TextInputProps {
  text: string;
  setText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ text, setText }) => {
  return (
    <section className="mb-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        type="button"
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => setText("")}
      >
        Limpiar Texto
      </button>
    </section>
  );
};

export default TextInput;
