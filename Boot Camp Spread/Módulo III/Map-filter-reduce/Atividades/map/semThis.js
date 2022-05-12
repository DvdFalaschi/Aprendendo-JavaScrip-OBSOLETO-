const Array = [1, 2];
const Array2 = [3, 4, 5];

function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

console.log(mapSemThis(Array2), "<- array2 *2");
console.log(Array2, "<- array2");
console.log(mapSemThis(Array), "<- array *2");
console.log(Array, "<- array");
