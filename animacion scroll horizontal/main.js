const barra = document.querySelector(".barracolorida") // con este Nodo vamos a cambiar su Width a medida que Scrolleamos
const ventana = window; // asignamos el objeto window  a una variable. No Hacia falta.
let alturaTotalBody; // declaramos las dos variables pero no las inicializamos
let alturaActual;

ventana.addEventListener("scroll",()=>{
    let alturaTotalBody = ventana.scrollMaxY //nos devuelve el eje "Y" descontando el ScrollBar
    alturaActual = parseInt(ventana.scrollY) // nos devuelve la posision del eje "Y" en donde estamos situados
    barra.style.width = `${(alturaActual/alturaTotalBody)*100}%` // Cambiamos el width con la formula (alturaAtual/alturaTotalBody)*100 y lo pasamos como String 
})



































/* var acumuladore= 0;
window.addEventListener("scroll",()=>{
    
    valore= barra.style.width
    barra.style.width = acumulador(valore)
    

    
})

function acumulador(valore){
    acumuladore += 1
    if (acumuladore == 3) {
        valorantiguo= parseInt(valore.slice(0,-1))
        valorantiguo += 1
        acumuladore = 0
        return `${valorantiguo}%`
    } else {

    }
} */





