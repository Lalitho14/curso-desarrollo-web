//1. Crea un <h1>texto inicial</h1> en un archivo .html y cambia su texto con JavaScript.

const titulo = document.getElementById('titulo_id');

titulo.innerText = 'HOLA MEXICO';

//2. Crean una lista (<ul>, <li>) en tu HTML usando JavaScript.

const contenedor_list=document.getElementById('lista_id');

contenedor_list.innerHTML=`
    <ul>
        <li>Producto - A</li>
        <li>Producto - b</li>
        <li>Producto - A</li>
    </ul>
`

//3. Usando el arreglo de la imagen, inserta en tu HTML un elemento nuevo que contenga: marca, cantidad y precio, todo en color negro, y que el valor de cada llave (key) se vea en color rojo (plantilla literal).

let zapatos = [
    {marca: 'NIKE', stock: 8, precios: 150.30},
    {marca: 'PUMA', stock: 7, precios: 80.5},
    {marca: 'ADIDAS', stock: 6, precios: 70.41},
    {marca: 'CONVERSE', stock: 8, precios: 120.8}
];

const cont_productos = document.getElementById('pdts_id');

zapatos.forEach(element => {
    const productos = document.createElement('div');
    productos.classList.add('pdts_item');
    productos.innerHTML=`
        <h2>Marca : <span id="item_color">${element.marca}</span></h2>
        <p>Stock : <span id="item_color">${element.stock}</span></p>
        <p>Precio : <span id="item_color">${element.precios}</span></p>
    `

    cont_productos.append(productos);
});

//4. Crea un botón de mostrar productos y uno de ocultar productos en el HTML, que cuando hagas clic sobre él se muestren los productos o se oculten.  

const botonHide = document.getElementById('hide_id');

botonHide.addEventListener("click", ()=>{
    const contenedor = document.getElementById('pdts_id');

    contenedor.innerHTML='';
});

const botonShow = document.getElementById('show_id');

botonShow.addEventListener("click", ()=>{
    const cont_productos = document.getElementById('pdts_id');
    cont_productos.innerHTML='';
    zapatos.forEach(element => {
        const productos = document.createElement('div');
        productos.classList.add('pdts_item');
        productos.innerHTML = `
        <h2>Marca : <span id="item_color">${element.marca}</span></h2>
        <p>Stock : <span id="item_color">${element.stock}</span></p>
        <p>Precio : <span id="item_color">${element.precios}</span></p>
    `

        cont_productos.append(productos);
    });
});
