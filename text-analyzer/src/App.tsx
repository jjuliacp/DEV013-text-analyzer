import { useState } from "react";
import TextInput from "./components/TextInput";
import ResultsList from "./components/ResultsList";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="p-4 max-w-lg mx-auto">
      <header>
        <h1 className="text-xl font-bold mb-4">Analizador de Texto</h1>
      </header>

      <main>
        <TextInput text={text} setText={setText} />
        <ResultsList text={text} />
      </main>

      <footer className="mt-4">
        <p>By: Julia Cruz Pérez</p>
      </footer>
    </div>
  );
}
