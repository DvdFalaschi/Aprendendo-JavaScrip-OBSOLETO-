function somaNums(arr) {
  const Soma = arr.reduce(function (prev, current) {
    return prev + current;
  });
  return Soma;
}

console.log(somaNums([1, 2, 3, 4, 5, 6, 7, 8, 9]));
