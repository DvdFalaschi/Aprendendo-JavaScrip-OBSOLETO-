const lista = [
  {
    name: "ração gato",
    preco: 24,
  },
  {
    name: "ração cachorroo",
    preco: 105,
  },
  {
    name: "escova de dente",
    preco: 12,
  },
  {
    name: "creme dental",
    preco: 7,
  },
];

function saldo(saldo, arr) {
  const Saldo = arr.reduce((prev, current) => prev - current.preco, saldo);
  return Saldo;
}

console.log(saldo(200, lista));
