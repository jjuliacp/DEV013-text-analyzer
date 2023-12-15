const analyzer = {  
  getWordCount: (text) => {  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
   // console.log(text.split(' '));
   let textArray = text.trim().split(' '); // arreglo que cuenta 
   let count = 0; //contador
  for (let i=0;i<textArray.length;i++){
    if(textArray[i]!=""){
      count++;
    }
  }
   return count; //retorna resultado
  },

  getCharacterCount: (text) => {  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //console.log(text.length);
    let textArray = text;
    let count =0;
    for (let i=0;i<textArray.length;i++){
    if(textArray[i])count++;
   }
   return count;
  },

  getCharacterCountExcludingSpaces: (text) => { //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //console.log(text.trim().replace(/\s+/g, '').length); NO CUENTA ESPACIOS SOLO CARACTERES
    //console.log(text.trim().replace(/[^\w\s]/g, '').replace(/\s+/g, '').split('').length);
    let textArray =text;
    let count =0;
    for (let i=0;i<textArray.trim().replace(/[^\w\s]/g, '').replace(/\s+/g, '').split('').length;i++){
      if(textArray[i]){
        count++;}
    }
    return count;

  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
