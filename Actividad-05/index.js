const titulo="Actividad - 05";
let numeroT= 10;
var clicks=0;

console.log("Titulo : "+titulo);
console.log("numeroT : "+numeroT);
console.log("clicks : "+clicks);

let nombre_A = "Jesus";
let edad_A = 21;

console.log(`${nombre_A} tiene la edad de ${edad_A} años.`);

let numero_A = 10;
let numero_B = 2;

console.log(numero_A+" + "+numero_B+" da como resulado "+(numero_A+numero_B));

numero_A += 4;
numero_B += 6;

console.log("El valor de numero_A es : "+numero_A);
console.log("El valor de numero_B es : "+numero_B);

if(numero_A > numero_B){
	console.log("El numero_A ("+numero_A+") es mayor que el numero_B ("+numero_B+")");
}else{	
	console.log("El numero_A ("+numero_A+") es menor que el numero_B ("+numero_B+")");
}

// PROBLEMA 1:

// En la clase de hoy, solo vamos a tener permitidas 10 preguntas ya que el tiempo es un poco corto... Tendremos que decirle a JavaScript que ejecute un codigo para facilitarnos el trabajo y poder mostrar en pantalla y en consola los nombres de los 10 alumnos afortunados que podrán consultar

alert("Ejercicio 1");
console.log("Ejercicio 1 :");

for(let i = 1; i <= 10 ; i++ ){
	let nombre = prompt("Alumno "+i+" : ");
	alert("Alumno "+i+" es : "+nombre);
	console.log("Alumno "+i+" es : "+nombre);
}

// 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 2:

//Crear un sistema que pida un nombre al usuario. Una vez que se pide el nombre, saludar al usuario y avisarle que para salir debe escribir la palabra "SALIR".

alert("EJERCICIO 2");

let nombre_Usr="";

do{
	nombre_Usr=prompt("Ingrese nombre de usuario.");
	alert("Hola! "+nombre_Usr);
	nombre_Usr = prompt("Escribe SALIR para cerrar ventana.");
}while(nombre_Usr.toUpperCase()!= "SALIR");

// 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 3:

// Crear un sistema que pida AL MENOS una vez el nombre al usuario. El nombre del usuario, en un principio NO debe existir (osea su valor seria falso). Cuando es consultado, si el nombre continua sin existir se debe salir del ciclo y si el nombre del usuario EXISTE, se debe saludar y volver a preguntar por como se llama.

alert("EJERCICIO 3");

let nombreU = undefined;

do{
	nombreU = prompt("Ingresar nombre de Usuario : ");
	
	if(nombreU!=""){ 	
		alert("Hola! "+nombreU);
	}else{
		nombreU=undefined;
	}

}while(nombreU==undefined);

// 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎


// PROBLEMA 4:


// EJEMPLO RIFA PARA SORTEO:

// Voy a sortear entre las personas que estan presentes (20 personas) un 10 como calificación final del curso.
// De los numeros de la rifa (20), el numero 3 es mi favorito por lo que decidí reservarlo para mi y no lo puede comprar otra persona... Los demás números se van a ir asignando en orden (El primero va a recibir la rifa 1, el segundo la rifa 2, etc)

// *** Hacer un ciclo que nos facilite la entrega de los numeros de la rifa***
// *** Saltear el numero 3 que ya fue reservado ***
// *** Mostrar los resultados por consola***

console.log("EJERCICIO 4");
alert("EJERCICIO 4");

for(let i = 1; i <= 10; i++){
	if(i!=3){
		console.log("Se asigno la rifa "+i);
	}
}

// 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 5:

// Somos profesores de matematicas de primario y estamos teniendo un problema... A nuestros alumnitos les esta costando muchisimo aprenderse las tablas de multiplicar.
// Al mismo tiempo, notamos que a ellos les encantan las computadoras y se nos ocurre una brillante idea 💡💡 : ENSEÑARLES LAS TABLAS CON LA COMPUTADORA!!

//Para eso, vamos a necesitar crear un sistema que le pregunte a los chicos de que numero quieren conocer la tabla de multiplicar y hacer un ciclo que nos evite ir haciendo los calculos uno por uno. 

alert("EJERCICIO 5");
console.log("EJERCICIO 5");

let numero_M = 0;

numero_M = parseInt(prompt("Ingrese el numero para conocer su tabla de multiplicar."));

for(let i = 0; i <= 10; i++){
	alert(numero_M+" x "+i+" = "+(numero_M*i));
	console.log(numero_M+" x "+i+" = "+(numero_M*i));
}

//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 6 : 

//Crear un sistema que pregunte AL MENOS 1 VEZ al usuario para que ingrese su edad (numero)... Si el usuario en esa vez ingresa algo que no sea un numero, detener la ejecución.

alert("EJERCICIO 6");
console.log("EJERCICIO 6");

let edad_ = 0;

do{
	edad_=prompt("Ingrese su edad : ");
}while(parseInt(edad_));

//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎


//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎



// PROBLEMA 7 IMPOSIBLE 😬😬 
// Si lo lográs hacer, tenes un 10 en el curso y el equipo de Emtech se va a comunicar con Google para que te contraten 👨‍💻😎


// En este problema, queremos crear una "computadora" o sistema que nos permita pedirle algunos datos al usuario a partir de ciertas opciones y con esos datos, hacer algunas cosas.

// Las opciones que tiene el menu principal de nuestro sistema son:
// OPCION 1. Pedirle el nombre al usuario
// OPCION 2. Pedirle el apellido al usuario
// OPCION 3. Mostrar el nombre completo del usuario
// OPCION 4. Pedirle al usuario un numero y mostrar todas las potencias de ese numero HASTA 1000 (el 1000 no debe quedar incluido)
// OPCION 5. Pedir al usuario que ingrese un numero para mostrarle todos los numeros pares, desde el 1 hasta el numero que el decida. 

alert("EJERCICIO 7");
console.log("EJERCICIO 7");

let nombre = "";
let apellido = "";
let numero_usr = 0;
let op = "";

do{
	
	op = prompt("1. Ingresar nombre.\n2. Ingresar apellido.\n3. Mostrar nombre.\n4. Mostrar potencias de numero hasta 1000.\n5. Mostrar numeros pares hasta numero ingresado.\n Ingrese opcion deseada o ESC para salir : ");

	switch(op){
		case "1":
			nombre = prompt("Ingrese nombre : ");
		break;
		case "2":
			apellido = prompt("Ingrese apellido : ");
		break;
		case "3":
			alert("Nombre completo : "+nombre+" "+apellido);
			console.log("Nombre completo : "+nombre+" "+apellido);
		break;
		case "4":
			do{
				numero_usr = prompt("Ingrese un numero : ");
			}while(!parseInt(numero_usr));

			for(let i = 0; i < 1000; i++){
				alert(`${numero_usr} a la potencia ${i} es `+(numero_usr**i));
				console.log(numero_usr+" a la potencia "+i+" es "+(numero_usr**i));
			}	
		break;
		case "5":
			do{
				numero_usr = prompt("Ingrese un numero : ");
			}while(!parseInt(numero_usr));

			for(let i = 0; i <= numero_usr; i++){
				if(i % 2 == 0){
					alert("Numero par : "+i);
					console.log("Numero par : "+i);
				}
			}
		break;
		case "ESC":
		case "esc":
			alert("Hasta pronto...");
			console.log("Hasta pronto...");
		break;
		default:
			alert("Ingrese una opcion valida...");
			console.log("Ingrese una opcion valida...");
		break;
	}

}while(op.toUpperCase()!="ESC");



// El usuario solo podrá salir del ciclo solo si ingresa la palabra "ESC" (si lo hace, debemos despedirlo con un "Hasta pronto!" 😊) . En caso de ingresar cualquier otra cosa (espacio en blanco, un numero cualquiera que no sea 1 a 5, texto o lo que sea que no este dentro de las opciones), deberá aparecerle un mensaje alertandolo que su respuesta es invalida para el sistema y deben volver a aparecerles las 5 opciones del menu principal. 


