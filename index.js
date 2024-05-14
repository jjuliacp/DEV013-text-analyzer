import analyzer from './analyzer.js';
const btnClear = document.getElementById("reset-button");
const boxText = document.querySelector("textarea[name='user-input']");

btnClear.addEventListener("click", () => {
  boxText.value = ""; // para resetear el box
  wordEvent(); // ejecutar funciones 
});

/* con arrow function = otra manera

boxText.addEventListener("input", () =>{
console.log(analyzer.getWordCount(boxText.value));
let wordCount=document.querySelector("li[data-testid='word-count'] span");
wordCount.textContent=analyzer.getWordCount(boxText.value);
});

*/

const wordCount = document.querySelector("li[data-testid='word-count']");
const characterCount = document.querySelector("li[data-testid='character-count']");
const charExcluding = document.querySelector("li[data-testid='character-no-spaces-count']");
const averageWord = document.querySelector("li[data-testid='word-length-average']");
const numberCount = document.querySelector("li[data-testid='number-count']");
const numberSum = document.querySelector("li[data-testid='number-sum']");
//palabras // en la declaracion de funcion ( )
function wordEvent() {
  wordCount.textContent = "Palabras: " + analyzer.getWordCount(boxText.value); // la linea del contenido del texto va a ser "palabras: " + funcion en el contenido del boxTExt
  characterCount.textContent = "Caracteres: " + analyzer.getCharacterCount(boxText.value);// cambio el valor 
  charExcluding.textContent = "Caracteres Sin Espacios o Signos: " + analyzer.getCharacterCountExcludingSpaces(boxText.value);
  averageWord.textContent = "Promedio longitud: " + analyzer.getAverageWordLength(boxText.value);
  numberCount.textContent = "Números: " + analyzer.getNumberCount(boxText.value);
  numberSum.textContent = "Suma de números: " + analyzer.getNumberSum(boxText.value);
}
boxText.addEventListener("input", wordEvent); //argumento ( )
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`