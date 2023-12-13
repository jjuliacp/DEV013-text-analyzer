import analyzer from './analyzer.js';
const btnClear=document.getElementById("reset-button");
const text=document.querySelector("textarea[name='user-input']");

btnClear.addEventListener("click",()=>{
text.value = "";
});


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`