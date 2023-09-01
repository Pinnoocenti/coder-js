body.style.backgroundColor = '#DFCFB7'
const main = d.createElement('main')
body.appendChild(main)

const ticket = d.createElement('section')

const carrito = JSON.parse(localStorage.getItem('Carrito'))
    if(carrito){
        let compra = 0       
        for (const key in carrito) {
            const prod = d.createElement("div")
            prod.classList = "cadaProductoPedido"
            const element = carrito[key]    
            

            compra+=element.price*element.cantidad

            prod.innerHTML += `<h7 class= "negrita">${key}:</h7> 
            <h7>  Precio $${element.price}</h7>
            <a href="#" class="btn btn-secondary  agregarCarrito" type="submit" data-nombre="${key}" data-precio="${element.price}" >Agregar</a>
            <a href="#" class="btn btn-secondary  quitarCarrito" type="submit" data-nombre="${key}" data-precio="${element.price}">Quitar</a>
            <input type= "text" class= "btn cantidad" id="${key}" value= "${element.cantidad}">`
            
            ticket.appendChild(prod)
        }
        
        const total = d.createElement('h2')
        total.classList = "terminar"
        total.innerHTML = `Total: $ <h7 id="totalCompra">${compra}</h7>
        <a href="#" class="btn btn-secondary pagar" id="pagar" type="submit" >Terminar pedido</a>
        <a href="./pedido.html" class="btn btn-secondary seguirComprando" type="submit" ">Seguir comprando</a>`
        ticket.appendChild(total)

    }

main.prepend(ticket)

const terminar = d.getElementById('pagar')
terminar.addEventListener('click', async (e) => {
    e.preventDefault()
    const carrito = JSON.parse(localStorage.getItem('Carrito'))
    await Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Tu pedido ya está en marcha! Por favor, acercate a la caja para realizar el pago',
        showConfirmButton: true,
        timer: 6000
    })
    localStorage.setItem('Carrito', JSON.stringify({}))
    window.location.href = './' 
})



