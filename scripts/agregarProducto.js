
export var Ids = [0]
var acumuladorDePreciosProductos = 0;
/* const logoCarrito = document.querySelector(".logo-carrito")
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

} */

// Lo que realiza Este modulo ese recibir Parametros y utilizarlos para agregar los productos a nuestra tabla
export function agregarProducto(ID, C,IMG, PR, P) {
    const productos = document.querySelector(".productos")
    const PrecioTotalProductos = document.querySelector(".total-precio")
    let idProducto = ID
    

    var copiaArray = Ids.slice()
    for (let i = 0; i < copiaArray.length; i++) {
        console.log("FOR principal:",Ids)
        if (Ids[0] == 0) {
            console.log("valiendo 0")
            creador("CarritoInit")
            
        } else {
            
            for (const id of copiaArray) {
                console.log("entre al if")
                if (id == idProducto) {
                    console.log("Ids: ",Ids)
                    console.log("copiarray: ", copiaArray)
                    console.log("id: ",id,"idProducto: ",idProducto)
                    console.log("que hice mal xd")
                    const productos = document.querySelector(".productos")
                    const producto = productos.querySelector(`[id="${idProducto}"]`)
                    let valornuevo = parseInt(document.querySelector(".cantidad-input").value)

                    acumuladorDePreciosProductos -= parseInt(producto.children[3].textContent)

                    producto.children[1].textContent = valornuevo
                    producto.children[3].textContent = parseInt(valornuevo*4500)

                    acumuladorDePreciosProductos += parseInt(producto.children[3].textContent)
                    PrecioTotalProductos.textContent = `$${acumuladorDePreciosProductos}`

                    addLocalStorage()

                } else if (Ids.indexOf(idProducto) == -1) {
                    console.log("entreee al else")
                    console.log("Ids del  Else:" ,Ids)
                    creador("CarritoProcess")
                }
            }
        }

    }

    function creador(valor) {
        let plantillaProducto = ` <div class="id"></div>
                            <div class="cant"></div>
                            <div class="prod"><div class="contenedor-imagen"><img class="imagen-producto-carrito"></div><span></span></div>
                            <div class="prec"></div>
                            <div class="trash Circle"><i class="fas fa-times-circle" ></i></div>`
        let producto = document.createElement("div")
        producto.classList.add("producto")
        producto.setAttribute("id", `${idProducto}`)
        producto.innerHTML = plantillaProducto
    
        producto.children[0].textContent = idProducto
        producto.children[1].textContent = C
        producto.children[2].children[0].children[0].setAttribute("src",`${IMG}`) 
        producto.children[2].children[1].textContent = PR
        producto.children[3].textContent = P
    
        productos.appendChild(producto)
        if (valor == "CarritoInit"){
            Ids[0] = idProducto
        } else {
            Ids.push(idProducto)
        }
        console.log("p: ",P)
        console.log("acumulador:",acumuladorDePreciosProductos)
        acumuladorDePreciosProductos += parseInt(P)
        console.log("acumulador Despues:",acumuladorDePreciosProductos)
        PrecioTotalProductos.textContent = `$${acumuladorDePreciosProductos}`

        addLocalStorage()
        indicadorCarrito()



        const eliminarProducto= producto.querySelector(".Circle")
        eliminarProducto.addEventListener("click",()=>{
            console.log("removido")
            producto.remove()
            let index= Ids.indexOf(idProducto)
            console.log(index)
            Ids.splice(index,1)
            console.log(Ids)

            if (Ids.length == 0){
                Ids[0] = 0
            }
            acumuladorDePreciosProductos -= parseInt(P)
            PrecioTotalProductos.textContent = `$${acumuladorDePreciosProductos}`

            localStorage.removeItem(`${idProducto}`)
            indicadorCarrito()
        })
        
        
    }
    function indicadorCarrito(){
        const indicadorCarrito = document.querySelector(".indicador")
        let productosChildren = productos.children.length
        indicadorCarrito.textContent = productosChildren
    }
    function addLocalStorage() {
        let detalles =  {
            id : idProducto,
            cantidad: C, 
            imagen: IMG,
            titulo: PR,
            precio: P,
        }
        localStorage.setItem(`${idProducto}`, JSON.stringify(detalles))
    }
}

