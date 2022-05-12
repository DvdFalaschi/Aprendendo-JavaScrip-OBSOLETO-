function somaNums(arr) {
  const Soma = arr.reduce((prev, current) => prev + current);
  return Soma;
}

console.log(somaNums([1, 2, 3, 4, 5, 6, 7, 8, 9]));
