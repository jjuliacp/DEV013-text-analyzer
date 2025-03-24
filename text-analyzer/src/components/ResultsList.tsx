import React from "react";
import analyzer from "../utils/analyzer";

interface ResultsListProps {
  text: string;
}

const ResultsList: React.FC<ResultsListProps> = ({ text }) => {
  return (
    <section>
      <ul className="list-disc pl-5">
        <li data-testid="word-count">Palabras: {analyzer.getWordCount(text)}</li>
        <li data-testid="character-count">Caracteres: {analyzer.getCharacterCount(text)}</li>
        <li data-testid="character-no-spaces-count">
          Caracteres Sin Espacios: {analyzer.getCharacterCountExcludingSpaces(text)}
        </li>
        <li data-testid="number-count">Números: {analyzer.getNumberCount(text)}</li>
        <li data-testid="number-sum">Suma de números: {analyzer.getNumberSum(text)}</li>
        <li data-testid="word-length-average">
          Promedio longitud: {analyzer.getAverageWordLength(text)}
        </li>
      </ul>
    </section>
  );
};

export default ResultsList;
