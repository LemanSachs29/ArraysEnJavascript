// 32. toLocaleString(): Convierte los elementos a cadena con formato regional.
console.log(array.toLocaleString()); // "40,100,200,0"
// 33. toReversed(): Devuelve una copia del array invertida (sin modificar el original).
console.log(array.toReversed()); // [0, 200, 100, 40]
console.log(array); // [40, 100, 200, 0]
// 34. toSorted(): Devuelve una copia ordenada.
console.log(array.toSorted()); // [0, 40, 100, 200]
// 35. toSpliced(): Devuelve una copia con elementos eliminados y reemplazados.
console.log(array.toSpliced(1, 1, 300)); // [40, 300, 200, 0]
// 36. toString(): Convierte el array en una cadena.
console.log(array.toString()); // "40,100,200,0"
// 37. unshift(): Agrega elementos al inicio.
array.unshift(10);
console.log(array); // [10, 40, 100, 200, 0]
// 38. values(): Iterador de valores.
for (const value of array.values()) {
console.log(value); // 10, 40, 100, 200, 0
}
// 39. with(): Devuelve una copia modificada en un índice.
console.log(array.with(2, 500)); // [10, 40, 500, 200, 0]
console.log(array); // [10, 40, 100, 200, 0] (sin modificar)