function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}
const PESSOA_1 = {
  nome: "Maria",
  idade: 30,
};
const PESSOA_2 = {
  nome: "Pedro",
  idade: 28,
};
const PESSOA_3 = {
  nome: "Marcia",
  idade: 56,
};
const ANIMAL = {
  nome: "Paçoca",
  idade: 3,
};

console.log(calculaIdade.call(ANIMAL, 10) + "   <-- Metodo call!");
console.log(calculaIdade.apply(PESSOA_3, [30]) + "   <-- Metodo apply!");
