function ehPalindromo(string) {
  let palavra = string;
  let palavraArray = [];
  let palavraReverse = [];

  for (i = 0; i < palavra.length; i++) {
    if (palavra[i] != " ") {
      palavraArray.push(palavra[i]);
      palavraReverse.unshift(palavra[i]);
    }
  }

  if (palavraArray.toString() === palavraReverse.toString()) {
    return true;
  }
  return !true;
}

function ehPalindromoMesmo(string) {
  return string.split("").reverse().join("") === string;
}

function checkDuplo(string) {
  if(!string) return "Não é string!"
  let palavra = string;
  if (ehPalindromo(palavra) === true && ehPalindromoMesmo(palavra) === true) {
    console.log(palavra + ", é um palindromo");
  } else {
    console.log(palavra + ", não é um palindromo");
  }
}

console.log(checkDuplo())
