import { useState } from "react";

import ResultsList from "./components/ResultsList";
import { Sun, Moon } from "lucide-react";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState(""); // Agrega este estado aquí

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark"); // Agrega o quita la clase "dark" en el <html>
  };

  return (
    <div
      className={`${darkMode ? "bg-[#0f1c2e]" : "bg-[#F9FAFC]"
        } flex flex-row justify-center w-full min-h-screen`}
    >
      <div className=" w-full max-w-[1440px] relative px-4 py-16 flex flex-col  ">
        {/* Botón para cambiar el tema */}
        <button
          onClick={toggleDarkMode}
          className={`absolute top-4 right-4 p-2 transition-all duration-500 ease-in-out ${darkMode ? "bg-[#1f3a5f]" : "bg-[#E6EAF0]"
            } dark:bg-gray-800 rounded-full transition-all`}
        >
          {darkMode ? (
            <Moon className="w-6 h-6  text-[#FFFEFB] transition-colors duration-500" />
          ) : (
            <Sun className="w-6 h-6 text-374357-400 " />
          )}
        </button>
        <header
          className={`text-5xl font-semibold mx-auto mb-10 ${darkMode ? "text-[#FFFEFB]" : "text-[#374357]"
            }`}
        >
          <h1 className="text-5xl">Text Analyzer</h1>
        </header>

        <p
          className={`${darkMode ? "text-[#FFFEFB]" : "text-[#374357]"
            } text-xl text-center font-['Roboto',Helvetica] mb-12 max-w-[1128px] mx-auto`}
        >
          ✨ ¿Quieres conocer mejor tu texto? Descubre cuáles palabras usas más,
          qué tan legible es y mucho más.
        </p>


        <ResultsList text={text} setText={setText} darkMode={darkMode} />

      </div>
    </div>
  );
}
