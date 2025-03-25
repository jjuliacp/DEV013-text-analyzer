const analyzer = {
    getWordCount: (text: string): number => { //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
        return text.trim().split(/\s+/).filter(Boolean).length; },
  
    getCharacterCount: (text:string) : number => { //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
      return text.length;
    },
  
    getCharacterCountExcludingSpaces: (text:string): number => {//TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
      return text.replace(/[^\w]/g, "").length; 
    },
  
    getAverageWordLength: (text: string) : number => {  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
      let count = 0;
      const averageWord = text.split(" ");
      for (let i = 0; i < averageWord.length; i++) {
        count += averageWord[i].length;
      }
      return parseFloat((count / averageWord.length).toFixed(2)); //analiza un argumento (cadena si es necesario) y devuelve un número  
    },
  
    getNumberCount: (text:string): number => {//TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.//encontrar los numeros y decimales // (/\b\d+\.?\d+\b/g)//  \b =numero de digitos que esten rodeados por caracteres diferentes (limite de palabra)// contar los numeros 
      const numbers = text.match(/\b\d+\.?\d*\b/g); //encuentra los numeros y los .decimales 
      return numbers ? numbers.length : 0;
    },
  
    getNumberSum: (text:string): number => {  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
      const numbers = text.match(/\b\d+\.?\d*\b/g); // encuentra los digitos de los numeros
      return numbers ? numbers.reduce((sum, num) => sum + parseFloat(num), 0) : 0;
    },
  };
  
  export default analyzer;
  