// 17. join(): Combina los elementos del array en un string.
console.log(array.join("-")); // "40-0-0-40-50"
// 18. keys(): Iterador de índices.
for (const key of array.keys()) {
console.log(key); // 0, 1, 2, 3, 4
}
// 19. lastIndexOf(): Encuentra el último índice de un elemento.
console.log(array.lastIndexOf(40)); // 3
// 21. pop(): Elimina el último elemento.
console.log(array.pop()); // 50
console.log(array); // [40, 0, 0, 40]
// 22. push(): Agrega elementos al final.
array.push(60);
console.log(array); // [40, 0, 0, 40, 60]
// 23. reduce(): Reduce el array a un valor acumulado.
console.log(array.reduce((acc, n) => acc + n, 0)); // 140
// 24. reduceRight(): Igual que reduce, pero desde el final.
console.log(array.reduceRight((acc, n) => acc - n, 0)); // -140
// 25. reverse(): Invierte el orden del array.
console.log(array.reverse()); // [60, 40, 0, 0, 40]
// 26. shift(): Elimina el primer elemento.
console.log(array.shift()); // 60
console.log(array); // [40, 0, 0, 40]
// 27. slice(): Crea una copia parcial del array.
console.log(array.slice(1, 3)); // [0, 0]
// 28. some(): Verifica si algún elemento cumple una condición.
console.log(array.some(n => n > 30)); // true
// 29. sort(): Ordena los elementos del array.
array.sort((a, b) => b - a); // Descendente
console.log(array); // [40, 40, 0, 0]
// 30. splice(): Agrega, elimina o reemplaza elementos.
array.splice(1, 2, 100, 200); // Elimina 2 elementos desde el índice 1 y agrega 100, 200
console.log(array); // [40, 100, 200, 0]
// 31. [@@iterator](): Iterador de valores (implícito en bucles `for...of`).
for (const value of array) {
console.log(value); // 40, 100, 200, 0
}
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