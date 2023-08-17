const agregar = d.getElementsByClassName('agregar')
Array.from(agregar).forEach(element =>{
    element.addEventListener('click', agregarAlCarrito)
})
const quitar = d.getElementsByClassName('quitar')
Array.from(quitar).forEach(element => {
    element.addEventListener('click', quitarDelCarrito)
})



function agregarAlCarrito (e){
    
    const nombreProducto = e.target.dataset.nombre
    const carrito = JSON.parse(localStorage.getItem('Carrito')) 
    
    if(!carrito){
        carrito = {}
    }
    
    if(carrito[nombreProducto] == null){
        carrito[nombreProducto] = {price: e.target.dataset.precio, cantidad: 1 }
        
    } else {
        carrito[nombreProducto].cantidad++
        
    }

    localStorage.setItem('Carrito', JSON.stringify(carrito)) 
    const elemento = d.getElementById(nombreProducto) 
    let cantidadReal = parseInt(elemento.value)
    cantidadReal++
    elemento.value = cantidadReal
}

function quitarDelCarrito (e){
    
    const nombreProducto = e.target.dataset.nombre
    const carrito = JSON.parse(localStorage.getItem('Carrito'))

    if(!carrito){
        return 
    }
    const elemento = d.getElementById(nombreProducto) 
    let cantidadReal = parseInt(elemento.value)
    if(carrito[nombreProducto] != null){
        if(carrito[nombreProducto].cantidad == 1){
            delete carrito[nombreProducto]
            cantidadReal = 0
            elemento.value = cantidadReal
        } else if (carrito[nombreProducto].cantidad > 1){
            carrito[nombreProducto].cantidad--
            cantidadReal--
            elemento.value = cantidadReal
        }
    } 
    localStorage.setItem('Carrito', JSON.stringify(carrito))    
}

const botonTotal = d.getElementById('botonTotal')
botonTotal.addEventListener('click',hacerTicket)

function hacerTicket(e){
    const carrito = JSON.parse(localStorage.getItem('Carrito'))
    if(carrito){
        let compra = 0
        for (const key in carrito) {
            const ticket = d.createElement("div")
            ticket.classList = "cadaProductoPedido"
            const element = carrito[key]

            compra+=element.price*element.cantidad

            ticket.innerHTML += `<h6>Producto: ${key} - Precio unitario: $ ${element.price} - Cantidad: ${element.cantidad} </h6>`
            
            total.appendChild(ticket)
        }
        const h3 = d.createElement("h3")
        h3.textContent = `$${compra}`
        total.appendChild(h3)
        
    }

    

}