//1. Declara una variable “let edad = Number”, luego crea un condicional “if” donde hagas una comparación, si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. De lo contrario “NO VÁLIDO”.

let edad = 21;

if (edad >= 18) {
  console.log("VALIDO.");
} else {
  console.log("NO VALIDO.");
}

//2. Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3 claves e imprime todo el array en consola con un bucle “for”.

const objeto1 = {
  nombre: "Cristiano Ronaldo",
  edad: 37,
  pais: "Portugal",
};

const objeto2 = {
  nombre: "Messi",
  edad: 36,
  pais: "Argentina",
};

const objeto3 = {
  nombre: "Pedro",
  edad: 20,
  pais: "Brasil",
};

const objeto4 = {
  nombre: "Eduardo",
  edad: 21,
  pais: "Mexico",
};

const arreglo = [objeto1, objeto2, objeto3, objeto4];

for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}

//3. Crear un bucle switch donde simula la venta de entradas al cine. Donde dependiendo de la edad el cliente recibe alguna promoción.

switch (edad) {
  case 21:
    console.log("Tienes un 15% de descuento en tu segundo boleto.");
    break;
  case 18:
    console.log("Tienes un 5% de descuento en dulceria.");
    break;
  case 5:
    console.log("Tienes un 2x1 en entradas.");
    break;
  default:
    console.log("No hay ninguna pormocion disponible.");
    break;
}
