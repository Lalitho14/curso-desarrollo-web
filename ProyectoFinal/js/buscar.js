const buscar = document.getElementById("btn_busqueda");
const itemBusqueda = document.getElementById("cuadro_busqueda");

buscar.addEventListener("click", () => {
  productos.innerHTML = ``;

  if(listaProductos.some((e) => e.nombre === itemBusqueda.value)){
    ListarProductos(listaProductos.find((e) => e.nombre === itemBusqueda.value));
  }
  else if(listaProductos.some((e) => e.marca === itemBusqueda.value)){

    let valor = listaProductos.filter((producto) => producto.marca === itemBusqueda.value);

    console.log(valor)

    valor.forEach((p)=>{
      ListarProductos(p)
    })

  }
  else{
    productos.innerHTML = `
      <p align='center' id='err_busqueda'>No se encontraron coincidencias.</p>
    `
  }

});
