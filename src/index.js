import analyzer from './analyzer.js';
const btnClear=document.getElementById("reset-button");
const boxText=document.querySelector("textarea[name='user-input']");

btnClear.addEventListener("click",()=>{
boxText.value = "";
});

// boxText.addEventListener("input", () =>{
// //console.log(analyzer.getWordCount(boxText.value));
// let wordCount=document.querySelector("li[data-testid='word-count'] span");
// wordCount.textContent=analyzer.getWordCount(boxText.value);
// });


//palabras
function wordEvent(){
    let wordCount=document.querySelector("li[data-testid='word-count'] span");
    wordCount.textContent=analyzer.getWordCount(boxText.value);
     //analyzer.getWordCount("hola que tal");
}
boxText.addEventListener("input", wordEvent);

// caracteres ---------
function  characterEvent(){
    let characterCount=document.querySelector("li[data-testid='character-count'] span");
    characterCount.textContent=analyzer.getCharacterCount(boxText.value);
    //analyzer.getCharacterCount("hola , . 0")
}
boxText.addEventListener("input", characterEvent);

// Sin espacios ni signos---------
function characterExcludingEvent(){
    let characterExcluding=document.querySelector("li[data-testid='character-no-spaces-count'] span");
    characterExcluding.textContent=analyzer.getCharacterCountExcludingSpaces(boxText.value);
    //analyzer.getCharacterCountExcludingSpaces("h. a");
}
boxText.addEventListener("input",characterExcludingEvent);

//contar  numeros


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`