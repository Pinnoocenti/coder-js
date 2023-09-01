
function agregarAlCarrito(carrito,nombre,precio){
    if(!carrito){
        carrito = {}
    }
    
    if(carrito[nombre] == null){
        carrito[nombre] = {price: precio, cantidad: 1}
        
    } else {
        carrito[nombre].cantidad++
        
    }

    localStorage.setItem('Carrito', JSON.stringify(carrito)) 
    const elemento = d.getElementById(nombre) 
    let cantidadReal = parseInt(elemento.value)
    cantidadReal++
    elemento.value = cantidadReal
}

function quitarDelCarrito(nombre, carrito){
    if(!carrito){
        return 
    }
    const elemento = d.getElementById(nombre) 
    let cantidadReal = parseInt(elemento.value)
    if(carrito[nombre] != null){
        if(carrito[nombre].cantidad == 1){
            delete carrito[nombre]
            cantidadReal = 0
            elemento.value = cantidadReal
        } else if (carrito[nombre].cantidad > 1){
            carrito[nombre].cantidad--
            cantidadReal--
            elemento.value = cantidadReal
        }
    } 
    localStorage.setItem('Carrito', JSON.stringify(carrito))
}

const agregar = d.getElementsByClassName('agregar')
Array.from(agregar).forEach(element =>{
    element.addEventListener('click', agregarDesdePedido)
})
const quitar = d.getElementsByClassName('quitar')
Array.from(quitar).forEach(element => {
    element.addEventListener('click', quitarDesdePedido)
})

function agregarDesdePedido (e){
    e.preventDefault()
    const nombreProducto = e.target.dataset.nombre
    let carrito = JSON.parse(localStorage.getItem('Carrito')) 
    const price = e.target.dataset.precio
    agregarAlCarrito(carrito, nombreProducto, price)
    
}

function quitarDesdePedido (e){
    e.preventDefault()
    const nombreProducto = e.target.dataset.nombre
    let carrito = JSON.parse(localStorage.getItem('Carrito'))
    quitarDelCarrito(nombreProducto,carrito)
}

const agregar2 = d.getElementsByClassName('agregarCarrito')
for (let i = 0; i < agregar2.length;i++) {
    agregar2[i].addEventListener('click', agregarDesdeCarrito)
}


const quitar2 = d.getElementsByClassName('quitarCarrito')
for (let i = 0; i < quitar2.length;i++) {
    quitar2[i].addEventListener('click', quitarDesdeCarrito)
}

function agregarDesdeCarrito(e){
    
    e.preventDefault()
    let carrito = JSON.parse(localStorage.getItem('Carrito'))
    const nombre = e.target.dataset.nombre
    const precio = parseInt(e.target.dataset.precio)
    const total = d.getElementById('totalCompra')
    agregarAlCarrito(carrito, nombre, precio)
    let totalParseado = parseInt(total.innerHTML) 
    totalParseado += precio
    total.innerHTML = totalParseado
}

function quitarDesdeCarrito(e){
    e.preventDefault()
    let carrito = JSON.parse(localStorage.getItem('Carrito'))
    const nombre = e.target.dataset.nombre

    if (!carrito[nombre]) {
        return;
    }

    const precio = parseInt(e.target.dataset.precio)
    const total = d.getElementById('totalCompra')
    quitarDelCarrito(nombre,carrito)
    let totalParseado = parseInt(total.innerHTML) 
    totalParseado -= precio
    total.innerHTML = totalParseado

}

