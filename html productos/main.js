// este "BLOQUE" de codigo realiza el conteo de productos que se agregaron al carrito, se tuvo 
// en cuenta las cantidades de cada producto que el usuario pudiera elejir y su resolucion para su proxima aplicacion

/* document.addEventListener("DOMContentLoaded",()=>{
    
}) */
document.addEventListener("DOMContentLoaded", async () => {
    obtenerFetch()

})

const obtenerFetch = async () => {
    const res = await fetch("productos.JSON")
    const data = await res.json()
    creadorCards(data)
}
const creadorCards = (data) => {
    let fragment = document.createDocumentFragment()
    let precio;
    data.forEach(objeto => {
        if (typeof objeto.precio == "string") {
            precio = objeto.precio
            }
        else {
            precio = `$${objeto.precio}`
        }
        let plantillacard = `
            <div class="contenedor-imagen"> 
                <img src="${objeto.imageUrl}">
            </div>
            <div class="descripcion">
                <h5 class="titulo">${objeto.title}</h5>
                <span class="precio">${precio}</span>
                <span class="verinfo">Ver Producto</span>
            </div>`

        let a = document.createElement("a")
/*         let div1 = document.createElement("div")
        let img = document.createElement("img")
        let div2 = document.createElement("div")
        let h5 = document.createElement("h5")
        let span = document.createElement("span") */

        // a.setAttribute("href",`#`/* producto elejido/${objeto.id}.html */)
        a.setAttribute("class", "producto")
        a.setAttribute("id", objeto.id)

        a.innerHTML = plantillacard
/*         div1.setAttribute("class", "contenedor-imagen")
        img.setAttribute("src", objeto.imageUrl)

        div2.setAttribute("class", "descripcion")
        h5.setAttribute("class", "titulo")
        h5.textContent = objeto.title
        span.setAttribute("class", "precio")


        div1.appendChild(img)

        div2.appendChild(h5)
        div2.appendChild(span)

        a.appendChild(div1)
        a.appendChild(div2) */

        fragment.appendChild(a)
    });
    const articulos = document.querySelector(".contenedor-productos")
    articulos.appendChild(fragment)
    colocadorEventos(data)
}

const colocadorEventos = (data) => {
    const arrayobjecto = data
    /* const titulo = document.getElementsByClassName("titulo") */
    const producto = document.getElementsByClassName("verinfo")
    var carrito = {};  //  En este array asociativo se va añadir {ID/POSISION: [CANTIDAD,PRODUCTO,PRECIO]}
    var cantidad = []; // En este array se colocaN las repeticiones de cada producto. Se añaden de forma ordenada en concoordancia con el ID/posicion de los productos
    /*  console.log(producto.length + 1) */
    for (let i = 0; i < arrayobjecto.length; i++) {
        const id = arrayobjecto[i].id
        producto[i].addEventListener("click", () => {
            let pagina = {
                imagen: arrayobjecto[i].imageUrl,
                nombre: arrayobjecto[i].title,
                precio: arrayobjecto[i].precio
            }
            let ventana = window.open(`producto elejido/${id}.html`,"_self")

            /*const contenedor = setTimeout(()=>{
                const l= ventana.document.querySelector(".contenedor-pagina-producto")
                console.log(l)
            },1000) */
            
            

            /*          ventana.addEventListener("load",()=>{
            const imagen = ventana.document.querySelector(".imagen-producto")
            const nombre = ventana.document.querySelector(".nombre-producto")
            const precio = ventana.document.querySelector(".precio")
            imagen.setAttribute("src",`../${pagina.imagen}`)
            nombre.textContent = pagina.nombre
            precio.textContent = pagina.precio 
            })







             if (cantidad[i] == undefined) { cantidad[i] = 1 }
            else { cantidad[i] = cantidad[i] + 1 }   // En este IF validamos que cantidad sea "undefined" para poder comenzar el conteo, De acuerdo a la posicion de cada producto, se colocara su cantidad
            let precio = parseInt(producto[i].textContent.slice(1)) // pasamos el String a Entero para hacer calculos
            carrito[i] = [cantidad[i], titulo[i].textContent, precio]

            contenedorModal.style.display = "flex"
            agregar.innerHTML = `${cantidad[i]} ${titulo[i].textContent} $${precio} U.` */
        }) 
        
    }
}



const contenedorModal = document.querySelector(".contenedor-modal") // Este elemento lo utilizamos para mostrar el modal cuando se seleccione un producto
const modal = document.querySelector(".modal") // Con este elemento accedemos a sus nodos hijos y lo manipulamos
const agregar = document.querySelector(".producto-agregado") //el modal muestra el producto que agregamos
const cerrarModal = document.querySelector(".X-modal") // Elemento para cerrar el modal
const pagarProductos = document.querySelector(".boton-pagar") //Boton para ver todo lo que hay en el carrito para Pagar

cerrarModal.addEventListener("click", () => {
    contenedorModal.style.display = "none"
})

pagarProductos.addEventListener("click", () => {
    let documentofragmentado = document.createDocumentFragment()
    for (x in carrito) {
        let contenidoProducto = document.createElement("h2")
        contenidoProducto.innerHTML = `${carrito[x][0]}  ${carrito[x][1]}  $${carrito[x][2]} <b style="color:green">$${carrito[x][2] * carrito[x][0]}</b>`
        documentofragmentado.appendChild(contenidoProducto)
    }

    contenedorModal.style.display = "flex"
    modal.children[2].innerHTML = "Resumen del Carrito: ";
    modal.children[3].innerHTML = "Cantidad  Producto  Precio Unitario  Precio Final"
    modal.appendChild(documentofragmentado)
})
