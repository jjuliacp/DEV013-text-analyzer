import React from "react";
import analyzer from "../utils/analyzer";
import TextInput from "./TextInput";

interface ResultsListProps {
  text: string;
  setText: (text: string) => void; // Agregar setText en las props
  darkMode: boolean;
}

const ResultsList: React.FC<ResultsListProps> = ({ text, setText, darkMode }) => {

  const statsCards = [
    { title: "Palabras", value: analyzer.getWordCount(text) },
    { title: "Caracteres", value: analyzer.getCharacterCount(text) },

  ];

  const detailedStats = [
    { title: "Suma de números", value: analyzer.getNumberSum(text) },
    { title: "Promedio de longitud", value: analyzer.getAverageWordLength(text) },
    { title: "Caracteres sin espacios", value: analyzer.getCharacterCountExcludingSpaces(text) },
    { title: "Números", value: analyzer.getNumberCount(text) },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-colors duration-500 ease-in-out">
      {/* Stats cards */}
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {statsCards.map((stat, index) => (
          <div
            key={index}
            className={`rounded-md shadow-md p-6 flex flex-col items-center transition-colors duration-500 ease-in-out
              ${darkMode ? "bg-[#1f3a5f]" : "bg-[#2C73D2]"}`}
          >
            <p className="text-[#fffefb] text-[40px] font-bold text-center font-['Roboto',Helvetica]">
              {stat.value}
            </p>
            <p className="text-[#c0c7d6] text-2xl text-center font-['Roboto',Helvetica] mt-2">
              {stat.title}
            </p>
          </div>
        ))}
        <div className="md:col-span-2">

          <div className={`shadow-md rounded-md h-[442px] relative p-6 transition-colors duration-500 ease-in-out
          ${darkMode ? "bg-[#1F2B3E]" : "bg-[#E6EAF0]"}`}>
            <TextInput text={text} setText={setText} />
          </div>
        </div>
      </div>

      {/* Detailed stats card */}

      <div className={`rounded-md shadow-md p-6 h-full flex flex-col space-y-10 justify-around transition-colors duration-500 ease-in-out
              ${darkMode ? "bg-[#1f3a5f]" : "bg-[#2C73D2] "}`} >
        <div className="flex flex-col h-full flex-grow justify-between">
          {detailedStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-[#c0c7d6] text-xl text-center font-['Roboto',Helvetica]">
                {stat.title}
              </p>
              <p className="text-[#fffefb] text-[40px] font-normal text-center font-['Roboto',Helvetica]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsList;
