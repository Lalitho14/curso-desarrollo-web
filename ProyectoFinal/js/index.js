// PRODUCTOS MAIN
const productos = document.getElementById("productos");
let listaProductos = [];

fetch("./js/productos.json")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((producto) => {
      listaProductos.push(producto);
      ListarProductos(producto);
    })
  );

const ordenarPor = document.getElementById("ord_tipo");

var btn_ordenar = document.getElementById("btn_ordenar");

btn_ordenar.addEventListener("click", () => {
  switch (ordenarPor.value) {
    case "Precio Ascendente":
      productos.innerHTML = ``;
      listaProductos.sort((a, b) => {
        return a.precio - b.precio;
      });

      listaProductos.forEach((producto) => {
        ListarProductos(producto);
      });
      break;

    case "Precio Descendente":
      productos.innerHTML = ``;
      listaProductos.sort((a, b) => {
        return b.precio - a.precio;
      });

      listaProductos.forEach((producto) => {
        ListarProductos(producto);
      });
      break;

    case "A-Z":
      productos.innerHTML = ``;
      listaProductos.sort((a, b) => {
        if (a.nombre.toUpperCase() == b.nombre.toUpperCase()) return 0;
        if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) return -1;
        return 1;
      });

      listaProductos.forEach((producto) => {
        ListarProductos(producto);
      });
      break;

    case "Z-A":
      productos.innerHTML = ``;
      listaProductos.sort((a, b) => {
        if (a.nombre.toUpperCase() == b.nombre.toUpperCase()) return 0;
        if (b.nombre.toUpperCase() < a.nombre.toUpperCase()) return -1;
        return 1;
      });

      listaProductos.forEach((producto) => {
        ListarProductos(producto);
      });
      break;

    case "Relevancia":
      productos.innerHTML = ``;
      listaProductos=[];
      fetch("./js/productos.json")
        .then((res) => res.json())
        .then((data) =>
          data.forEach((producto) => {
            listaProductos.push(producto);
            ListarProductos(producto);
          })
        );
      break;

    default:
      break;
  }
});

const ListarProductos = (lp) => {
  const contenedorProductos = document.createElement("div");
  contenedorProductos.className = "producto_item";

  contenedorProductos.innerHTML = `
      <img  src="${lp.imagenes[1]}"></img>
      <h2>${lp.nombre}</h2>
      <p>$${lp.precio}</p>
      <button id="add_cart" class="add_cart">Agregar al Carrito</button>
      <button id="more">Ver Mas</button>
    `;

  productos.append(contenedorProductos);
};
