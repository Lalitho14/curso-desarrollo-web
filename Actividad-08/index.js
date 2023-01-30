let zapatos = [
  { marca: "NIKE", stock: 8, precios: 150.3 },
  { marca: "PUMA", stock: 7, precios: 80.5 },
  { marca: "ADIDAS", stock: 6, precios: 70.41 },
  { marca: "CONVERSE", stock: 8, precios: 120.8 },
];

//1. IMPRIMIR EN CONSOLA SOLO LAS MARCAS CON SUS STOCK.
console.log("EJERCICIO 1");
zapatos.forEach((modelo) => {
  console.log(`Marca: ${modelo.marca} Stock: ${modelo.stock}`);
});

//2. IMPRIMIR EN CONSOLA SOLO SI ALGUNO DE LOS PRODCUTOS CUESTA MAS DE 200.
console.log("EJERCICIO 2");
let valor = zapatos.filter((producto) => producto.precios > 200);
// console.log(valor);
const busqueda = zapatos.some((producto) => producto.precios > 200);
// console.log(valor);
const resultado = busqueda
  ? console.log(valor)
  : console.log("No hay resultados.");

//3.IMPRIME EN CONSOLA EL PRECIO PROMEDIO DE LOS PRODCUTOS.
console.log("EJERCICIO 3");

const precio = zapatos.map((item) => item.precios);

const suma = precio.reduce((i, j) => i + j, 0);

const promedio = suma / zapatos.length;

console.log(`El promedio de los precios de los productos es: ${promedio}`);

//4.IMPRIME EN CONSOLA ALFABETICAMENTE EL NOMBRE DE LOS PRODCUTOS.
console.log("EJERCICIO 4");

zapatos.sort((a, b) => {
  if (a.marca == b.marca) return 0;
  if (a.marca < b.marca) return -1;
  return 1;
});

console.log(zapatos);

//5.IMPRIME EN CONSOLA EL PRODCUTO MAS COSTOSO, Y REDONDEA A UN NUMERO ENTERO.
console.log("EJERCICIO 5");

let precioMAX = 0;

zapatos.forEach((item) => {
  precioMAX = Math.max(item.precios, precioMAX);
});

console.log(precioMAX);

const busquedaP = zapatos.find((elemento) => elemento.precios === precioMAX);

console.log(busquedaP);

console.log(Math.round(precioMAX));
