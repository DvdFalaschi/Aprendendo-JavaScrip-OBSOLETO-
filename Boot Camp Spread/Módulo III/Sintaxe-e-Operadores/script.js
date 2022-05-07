function compara(a,b){
  let ehIgual;
  let soma = a+b;
  let ehMaiorQueDez;
  let ehMaiorQuevinte;

  if(a===b){
  ehIgual = " são iguais" ;
  }else{
    ehIgual = " não são iguais";
  }
  if(soma > 20){
    ehMaiorQueDez = "maior";
    ehMaiorQuevinte = "maior";
  }else if(soma > 10){
    ehMaiorQueDez = "maior";
    ehMaiorQuevinte = "menor";
  }else{
    ehMaiorQueDez = "menor";
    ehMaiorQuevinte = "menor";
  }

  console.log("Os números " + a + " e " + b + ehIgual + ". Sua soma é " + soma + ", que é " + ehMaiorQueDez + " que 10 e é " + ehMaiorQuevinte + " que 20.");

  return  "Os números " + a + " e " + b + ehIgual + ". Sua soma é " + soma + ", que é " + ehMaiorQueDez + " que 10 e é " + ehMaiorQuevinte + " que 20.";
}

compara (11, 11)