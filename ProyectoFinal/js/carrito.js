//CARRITO
const carrito_btn = document.getElementById("carrito");

const contenedor = document.getElementById("productos");

let carrito = [];

contenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("add_cart")) {
    carritoMain.style.display = "none";
    const item = e.target.parentElement;
    const infItem = {
      cantidad: 1,
      nombre: item.querySelector("h2").innerText,
      precio: item.querySelector("p").innerText,
    };

    if (carrito.some((p) => p.nombre === infItem.nombre)) {
      const prItem = carrito.map((p) => {
        if (p.nombre === infItem.nombre) {
          p.cantidad++;
          return p;
        } else {
          return p;
        }
      });
      carrito = [...prItem];
    } else {
      carrito = [...carrito, infItem];
    }
  }
});

const carritoMain = document.getElementById("carritoMain");
carrito_btn.addEventListener("click", () => {
  document.getElementById("menu-btn").click();

  carritoMain.innerHTML = ``;
  const contenedorCarrito = document.createElement("div");
  contenedorCarrito.classList = "contedorCarrito";

  if (carrito.length != 0) {
    contenedorCarrito.innerHTML = `
    <h3 id='titulo'>Carrito</h3>
    <p id='btn_salir' class='btn_salir'>X</p>
    `;
    carrito.forEach((p) => {
      contenedorCarrito.innerHTML += `
        <h3 id='nombreC'>${p.nombre}</h3>
        <p id='cantdC'>${p.cantidad}</p>
        <p id='precioC'>${p.precio}</p>
      `;
    });

    contenedorCarrito.innerHTML += `
      <button id='comprar' class='comprar'>Comprar</button>
    `;
  } else {
    contenedorCarrito.innerHTML = `
      <h3 id='titulo'>Carrito</h3>
      <p id='btn_salir' class='btn_salir'>X</p>
      <p id='carritoVacio'>No hay elementos en el carrito.</p>
    `;
  }

  carritoMain.style.display = "flex";
  carritoMain.append(contenedorCarrito);
});

carritoMain.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn_salir")) {
    carritoMain.style.display = "none";
  }

  if(e.target.classList.contains("comprar")){
    carrito=[];
    carritoMain.innerHTML = ``;
    carritoMain.style.display = "none";
    alert('SE COMPLETO SU COMPRA');
  }
});
