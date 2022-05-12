function validaArr(arr, tamanho) {
  try {
    if (!arr || !tamanho) throw new ReferenceError("Falta um parâmetro");
    if (typeof arr !== "object") throw new TypeError("Objeto inválido");
    if (typeof tamanho !== "number")
      throw new TypeError("O valor digitado não é um número");
    if (arr.length !== tamanho)
      throw new RangeError(
        "O número de objetos não corresponde com o valor informado "
      );
      return console.log('\n Array validado com sucesso!'), arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError!");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um TypeError");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um RangeError");
      console.log(e.message);
    } else {
      console.log("Error inesperado:", e);
    }
  }
}
console.log(validaArr([1,2,3], 3));
