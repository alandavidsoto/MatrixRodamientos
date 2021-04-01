import {agregarProducto,Ids} from "./agregarProducto.js"
// Icono Menú

const contenedor = document.getElementById("contenedor")
const menu = document.querySelector(".menu-navegacion-mobile")
const opcionesMenu = document.querySelector(".semi-barranav")
menu.addEventListener("click",()=>{
    opcionesMenu.classList.toggle("active-semibarra")
    menu.classList.toggle("animacion",)
    
})

// Buscador
const body = document.body
const botonSearch = document.querySelector(".icon-buscador")
const contenedorBuscador = document.querySelector(".contenedor-buscador-mobile")
const buscador = document.querySelector(".buscador-mobile")

botonSearch.addEventListener("click",()=>{
    contenedorBuscador.classList.toggle("active-buscador")
    body.classList.toggle("body-overflow-hidden")
})
contenedorBuscador.addEventListener("click",(evt)=>{
    if (evt.target.className != "input-search"){
        contenedorBuscador.classList.toggle("active-buscador")
    }
})

//CARRITO 
const logoCarrito = document.querySelector(".logo-carrito")
const tabla = document.querySelector(".contenedor-tabla")

logoCarrito.addEventListener("click",()=>{
    tabla.classList.toggle("display")
})

if (localStorage.length > 0 ){
    let keys = Object.keys(localStorage)
    for (let key of keys){
        let producto= (JSON.parse(localStorage[key]))
        agregarProducto(producto.id,producto.cantidad,producto.imagen, producto.titulo,producto.precio)
    }

}
