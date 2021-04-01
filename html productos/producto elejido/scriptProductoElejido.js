//importamos AGREGARPRODUCTO() para colocar el producto al carrito
import {agregarProducto,Ids} from "../../scripts/./agregarProducto.js"
console.log("putamadre")

const agregarAhora = document.querySelector(".opcion-agregar")

agregarAhora.addEventListener("click",()=>{
    let ID = id
    let C = input.value
    let IMG = imagen.attributes.src.textContent
    let PR = nombre.textContent
    let P = precio.textContent
    agregarProducto(ID,C,IMG,PR,P)
})

const comprarAhora = document.querySelector(".opcion-comprar")
const contenedorModal = document.querySelector(".contenedor-modal")
const cerrarModal = document.querySelector(".X-modal")

comprarAhora.addEventListener("click",()=>{
    contenedorModal.style.display = "flex"
})
cerrarModal.addEventListener("click",()=>{
    contenedorModal.style.display = "none"
})




const id =  parseInt(document.querySelector(".contenedor-pagina-producto").attributes.dataId.value)
const imagen = document.querySelector(".imagen-producto")
const nombre = document.querySelector(".nombre-producto")
const precio = document.querySelector(".precio")

const input = document.querySelector(".cantidad-input")
var precioBase = 0;
let cantidad = parseInt(input.value);

input.addEventListener("input",(e)=>{
    cantidad = parseInt(e.target.value)
    precio.textContent = precioBase*cantidad
})

document.addEventListener("DOMContentLoaded",()=>{
    obtenerFetch()
})

const obtenerFetch = async () =>{
    await fetch("../productos.json").then(res => res.json()).then(res=> {recorredor(res)})
    
}

const recorredor = async (res) => {
    const arrayobjeto = res
    arrayobjeto.forEach(objeto => {
        if (objeto.id == id){
            imagen.setAttribute("src",`../${objeto.imageUrl}`)
            nombre.textContent = objeto.title
            precio.textContent = parseInt(objeto.precio)*cantidad
            precioBase = parseInt(objeto.precio)
            
        }
    });
}

//Aca vamos a realizar la funcionalidad del boton "AGREGAR AL CARRITO"

