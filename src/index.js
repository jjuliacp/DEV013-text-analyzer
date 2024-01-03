import analyzer from './analyzer.js';
const btnClear = document.getElementById("reset-button");
const boxText = document.querySelector("textarea[name='user-input']");

btnClear.addEventListener("click", () => {
  boxText.value = ""; // para resetear el box
  wordEvent(); // ejecutar funciones 
  characterEvent();
  characterExcludingEvent();
  averageEvent();
  numberCountEvent();
  numberSumEvent();
});

/* con arrow function = otra manera

boxText.addEventListener("input", () =>{
console.log(analyzer.getWordCount(boxText.value));
let wordCount=document.querySelector("li[data-testid='word-count'] span");
wordCount.textContent=analyzer.getWordCount(boxText.value);
});

*/

//palabras // en la declaracion de funcion ( )
function wordEvent() {
  const wordCount = document.querySelector("li[data-testid='word-count']");
  wordCount.textContent = "Palabras: " + analyzer.getWordCount(boxText.value); // la linea del contenido del texto va a ser "palabras: " + funcion en el contenido del boxTExt
}
boxText.addEventListener("input", wordEvent); //argumento ( )

// caracteres ---------
function characterEvent() {
  const characterCount = document.querySelector("li[data-testid='character-count']");
  characterCount.textContent = "Caracteres: " + analyzer.getCharacterCount(boxText.value);// cambio el valor 
}
boxText.addEventListener("input", characterEvent);  //

// Sin espacios ni signos---------
function characterExcludingEvent() {
  const charExcluding = document.querySelector("li[data-testid='character-no-spaces-count']");
  charExcluding.textContent = "Caracteres Sin Espacios o Signos: " + analyzer.getCharacterCountExcludingSpaces(boxText.value);
}
boxText.addEventListener("input", characterExcludingEvent);

// contador longitud
function averageEvent() {
  const averageWord = document.querySelector("li[data-testid='word-length-average']");
  averageWord.textContent = "Promedio longitud: " + analyzer.getAverageWordLength(boxText.value);
}
boxText.addEventListener("input", averageEvent);

//contar numeros
function numberCountEvent() {
  const numberCount = document.querySelector("li[data-testid='number-count']");
  numberCount.textContent = "Números: " + analyzer.getNumberCount(boxText.value);
}
boxText.addEventListener("input", numberCountEvent);

// suma
function numberSumEvent() {
  const numberSum = document.querySelector("li[data-testid='number-sum']");
  numberSum.textContent = "Suma de números: " + analyzer.getNumberSum(boxText.value);
}
boxText.addEventListener("input", numberSumEvent);

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`