const productos = [
    // tragos con alcohol
    {
        id: "coctel-01",
        titulo: "Gin-tonic",
        imagen: "./img/gin-tonic.jpg",
        categoria: {
            nombre: "alcohol",
            id: "trago-A",
        },
        precio: 1000
    },
    
     {
        id:"coctel-02",
        titulo: "Margarita",
        imagen: "./img/margarita.jpg",
        categoria: {
            nombre: "alcohol",
            id: "trago-A"
        },
        precio: 1000
    },
     
     {
        id: "coctel-03",
        titulo: "Mojito",
        imagen: "./img/mojitoclasic.jpg",
        categoria: {
            nombre: "alcohol",
            id: "trago-A"
        },
        precio: 1000
    },
     
     {
        id: "coctel-04",
        titulo: "Gin-tonic",
        imagen: "./img/molotov.jpg",
        categoria: {
            nombre: "alcohol",
            id: "trago-A"
        },
        precio: 1000
    },
    // Sin alcohol
    {
        id: "trago-1",
        titulo: "Fernet",
        imagen: "./img/fernet.jpg",
        categoria: {
            nombre: "sinAalcohol",
            id: "trago-B"
        },
        precio: 1000
    },
    {
        id: "trago-2",
        titulo: "Pantera-rosa",
        imagen: "./img/PANTERA-ROSA.jpg",
        categoria: {
            nombre: "sinAalcohol",
            id: "trago-B"
        },
        precio: 1000
    },
    {
        id: "trago-3",
        titulo: "Caipiroska",
        imagen: "./img/caipiroska.jpg",
        categoria: {
            nombre: "sinAalcohol",
            id: "trago-B"
        },
        precio: 1000
    },
    {
        id: "trago-4",
        titulo: "Shirley-Temple",
        imagen: "./img/shirley-temple.jpg",
        categoria: {
            nombre: "sinAalcohol",
            id: "trago-B"
        },
        precio: 1000
    },
  
];

const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategorias =document.querySelectorAll(".boton-categoria")

function cargarProductos (productoSeleccion) {
    
    contenedorProductos.innerHTML= "";

    productoSeleccion.forEach (producto =>{
      let div = document.createElement ("div");
      div.classList.add("productos");
      div.innerHTML =` 
       <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="producto-info">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="${producto.precio}">$ 1000</p>
          <button class="producto-agregar" id ="${producto.id}">Agregar</button>
      </div>
      `
      contenedorProductos.append(div);
    })
   
}
cargarProductos (productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
    botonesCategorias.forEach( boton => boton.classList.remove("active"));   
  e.currentTarget.classList.add("active");
   
  if(e.currentTarget.id!="TODOS"){
    const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
    cargarProductos(botonesCategorias);
}
    else{
     cargarProductos(productos);
    }
  
  

    })
})

