function wordRank(str) {
    /*  Objetivo da função é 
      1- Receber uma string e transformar em um array de palavras (stringAsArray) 
      2- A pontuação (de acordo com o desafio) de todas as palavras registradas desse Array são atribuidas a um novo array na mesma ordem
         utilizando de loops for
      3- Por fim a função busca pelo maior valor no array das pontuacoes e como as posições de ambos os arrays são as mesmas basta chamar 
         o array da frase com o index do maior valor do array com as pontuações
    */

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let points = []
 
    alphabet.split('').forEach((element, index) => {
        points.push(index + 1)
    });

    let stringAsArray = str.replace(/[^a-zA-Z ]/g, '').split(' ')

    let sumOfWords = []
        for (var i in stringAsArray) {
            let sumOfLetters = []
            for (var x in stringAsArray[i]) {
                sumOfLetters
                    .push(points[alphabet.indexOf(stringAsArray[i][x].toLowerCase())]);
            }
            sumOfWords
                .push(sumOfLetters.reduce((a, b) => a + b, 0))
        }

    return stringAsArray[sumOfWords.indexOf(Math.max(...sumOfWords))]
}

console.log(
    wordRank("The clock within this blog and the clock on my laptop are 1 hour different from each other.")
);
