function filtraPares(arr) {
  const filtrado = arr.filter((item) => item % 2 === 0);
  return filtrado;
}
let Array = [1, 2, 3, 4];
console.log(filtraPares(Array));
console.log(filtraPares([5, 6, 7, 8]));
