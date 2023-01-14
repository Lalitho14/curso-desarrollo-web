//ACTIVIDAD 6

//1. Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log().

function suma(a,b,c){
	console.log(a+b+c);
}

suma(10,2,23);

//2. Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log().

function comparacion(a,b){
	if(a>b){
		console.log(`El numero ${a} es mayor que ${b} y son diferentes.`);
	}else if(a<b){
		console.log(`El numero ${a} es menor que ${b} y son diferentes.`);
	}else{
		console.log(`El numero ${a} es igual a ${b}.`);
	}
}

comparacion(26,14);
comparacion(2,10);
comparacion(1,1);

//3. Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log().

const suma_ = (a,b,c)=>console.log(a+b+c);

suma_(22,10,16);

const comparacion_ = (a,b)=>{
	if(a>b){
		console.log(`El numero ${a} es mayor que ${b} y son diferentes.`);
	}else if(a<b){
		console.log(`El numero ${a} es menor que ${b} y son diferentes.`);
	}else{
		console.log(`El numero ${a} es igual a ${b}.`);
	}
}

comparacion_(26,14);
comparacion_(2,10);
comparacion_(1,1);

//4. Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

const objetoJugador = {
	nombre: "Cristiano Ronaldo",
	edad: 37,
	pais: "Portugal",
	champions: 5,
	marcarGol: ()=> console.log(`Se anoto un gol.`)
}

const datos = ({nombre, edad, pais})=>{
	console.log(`Su nombre es ${nombre}, tiene ${edad} anios de edad y nacio en el pais de ${pais}`);
}

datos(objetoJugador);

//5. Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

const array = ["String de Strings", 14, 26, ["Nombre", "Edad"]];

const [p0, p1, p3] = array;

console.log(`${p0} ${p1} ${p3}`);