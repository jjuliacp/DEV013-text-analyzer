const analyzer = {
  getWordCount: (text) => { //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const textArray = text.trim().split(' '); // arreglo divide el texto usando el espacio como divisor
    let count = 0; //contador
    for (let i = 0; i < textArray.length; i++) {   // i = donde inicia la interacción para recorrer el array
      if (textArray[i] !== "") {                 // si elemento en la posicion i es diferente a vacio aumenta 1
        count++;
      }
    }
    return count; //retorna resultado
  },

  getCharacterCount: (text) => { //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {//TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //console.log(text.trim().replace(/\s+/g, '').length); NO CUENTA ESPACIOS SOLO CARACTERES
    //console.log(text.trim().replace(/[^\w\s]/g, '').replace(/\s+/g, '').split('').length);
    const characterExcluding = text.trim().replace(/[^\w\s]/g, '').replace(/\s+/g, '').split(''); //
    let count = 0;
    for (let i = 0; i < characterExcluding.length; i++) {
      if (characterExcluding[i]) {
        count++;
      }
    }
    return count;
  },

  getAverageWordLength: (text) => {  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    const averageWord = text.split(" ");
    for (let i = 0; i < averageWord.length; i++) {
      count += averageWord[i].length;
    }
    return parseFloat(count / averageWord.length).toFixed(2); //analiza un argumento (cadena si es necesario) y devuelve un número  
  },

  getNumberCount: (text) => {//TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.//encontrar los numeros y decimales // (/\b\d+\.?\d+\b/g)//  \b =numero de digitos que esten rodeados por caracteres diferentes (limite de palabra)// contar los numeros 
    const number = text.match(/\b\d+\.?\d*\b/g); //encuentra los numeros y los .decimales 
    if (number) {
      return number.length;
    }
    else {
      return 0;
    }
  },

  getNumberSum: (text) => {  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const number = text.match(/\b\d+\.?\d*\b/g); // encuentra los digitos de los numeros
    let suma = 0;
    if (number) {
      for (let i = 0; i < number.length; i++) { //recorre los elementos del texto
        if (number[i]) {
          suma += parseFloat(number[i]);// 
        }
      }
    }
    return suma;
  },
};

//console.log(analyzer.getNumberCount('This is not a number: 41u0003jot'));//0
//console.log(analyzer.getNumberCount('If I have 8 apples and I buy 2 more, how many apples do I have in total?'));//0
//console.log(analyzer.getNumberCount('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'));//0
//console.log(analyzer.getNumberSum('Calculate the sum of 1.65 plus 0.15 plus 1.10.'));//2.9

export default analyzer;
