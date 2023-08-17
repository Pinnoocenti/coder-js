body.style.backgroundColor = '#DFCFB7'
const main = d.createElement('main')
body.appendChild(main)

const productos = [

    new Producto("Espreso", 540),
    new Producto("Espreso doble", 600),
    new Producto("Flat white", 900),
    new Producto("Capuccino", 800),
    new Producto("Jugo de Naranja", 900),
    new Producto("Limonada", 850),
    new Producto("Pomelada", 800),
    new Producto("Croissant", 770),
    new Producto("Medialuna", 660),
    new Producto("Pan de chocolate y frambuesa", 880),
    new Producto("ostada Francesa", 1500),
    new Producto("Tostado de chipá", 1850),
    new Producto("Sandwich de Tapa de asado",2300),
    new Producto("Sandwich de Brie",2200),
    new Producto("Sandwich de Pollo",2360),
    new Producto("Sandwich Clasico",2270),
    new Producto("Cheesecake",2100),
    new Producto("Keylime pie",2100),
    new Producto("Carrot cake",1850),
    new Producto("Marquise franui",2300),
]

const section = d.createElement('section')
section.classList = "productos"
main.prepend(section)

productos.forEach(element => {
    const div = d.createElement('div')
    div.classList = "cadaProducto"
    let valor = 0
    const carrito = JSON.parse(localStorage.getItem('Carrito'))
    if(carrito){
        const prod = carrito[element.nombre]
        if(prod){
            valor = carrito[element.nombre].cantidad
        }
    }
    
    div.innerHTML += `<h3>${element.nombre}</h3>
                    <h5> Precio $${element.precio}</h5>
                    <a href="#" class="btn btn-secondary agregar" type="submit" data-nombre="${element.nombre}" data-precio="${element.precio}" >Agregar</a>
                    <a href="#" class="btn btn-secondary quitar" type="submit" data-nombre="${element.nombre}">Quitar</a>
                    <input type= "text" class= "btn cantidad" id="${element.nombre}" value= "${valor}">` 
    section.appendChild(div)
});

const total = d.createElement('div')
total.classList = "ticket"


const terminar = d.createElement('input')
terminar.value = 'TERMINAR'
terminar.classList = "btn btn-secondary terminar"
terminar.id = "botonTotal"

main.appendChild(total)
total.appendChild(terminar)