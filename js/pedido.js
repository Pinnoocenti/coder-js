body.style.backgroundColor = '#DFCFB7'
const main = d.createElement('main')
body.append(main)

class Producto{
    constructor(nombre, precio, imagen){
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }
    devolverNombre (){
        return this.nombre
    }
    devolverImagen (){
        return this.imagen
    }
    devolverPrecio(){
        return this.precio
    }
}

const productos = [

    new Producto("Espreso", 540, "../imagenes/comida/espreso.jpg"),
    new Producto("Filtrado", 700, "../imagenes/comida/filtrado.png"),
    new Producto("Flat white", 900, "../imagenes/comida/flatWhite.jpg"),
    new Producto("Capuccino", 800, "../imagenes/comida/capuccino.png"),
    new Producto("Croissant Crudo", 770, "../imagenes/comida/croisantCrudo.jpg"),
    new Producto("Cookie Vainilla", 660, "../imagenes/comida/cookieVainilla.jpg"),
    new Producto("Alfajor Toffee", 660, "../imagenes/comida/alfajorToffee.jpg"),
    new Producto("Tostón Pink Hummus", 880, "../imagenes/comida/tostonDePalta.jpg"),
    new Producto("Tostón de Palta", 880, "../imagenes/comida/pinkHummus.jpg"),
    new Producto("Tostada Francesa", 1500, "../imagenes/comida/tostadafrancesa.jpg"),
    new Producto("Tostado de chipá", 1850, "../imagenes/comida/tostadoDeChipa.jpg"),
    new Producto("Tostado de queso", 1850, "../imagenes/comida/tostadoDeQueso.jpg"),
    new Producto("Tostado Lomito", 1850, "../imagenes/comida/tostadoLomito.jpg"),
    new Producto("Sandwich de Tapa de asado",2300, "../imagenes/comida/sandwichTapaDeAsado.jpg"),
    new Producto("Sandwich de Brie",2200, "../imagenes/comida/sandwichDeBrie.jpg"),
    new Producto("Sandwich de Pollo",2360, "../imagenes/comida/sandwichDePollo.jpg"),
    new Producto("Sandwich Clasico",2270, "../imagenes/comida/sandwichClasico.jpg"),
    new Producto("Cheesecake",2100, "../imagenes/comida/cheesecake.jpg"),
    new Producto("Carrot cake",1850, "../imagenes/comida/carrotCake.jpg"),
    new Producto("Marquise franui",2300, "../imagenes/comida/marquiseFranui.jpg"),
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
        const prod = carrito[element.devolverNombre()]
        if(prod){
            valor = carrito[element.devolverNombre()].cantidad
        }
    }
    
    div.innerHTML += ` <img class="imagenPedido" src="${element.devolverImagen()}" alt="${element.devolverNombre()}">
                    <br>
                    <h4>${element.devolverNombre()}</h4>
                    <h6> Precio $${element.devolverPrecio()}</h6>
                    <a href="#" class="btn btn-secondary agregar" type="submit" data-nombre="${element.devolverNombre()}" data-precio="${element.devolverPrecio()}" >Agregar</a>
                    <a href="#" class="btn btn-secondary quitar" type="submit" data-nombre="${element.devolverNombre()}">Quitar</a>
                    <input type= "text" class= "btn cantidad" id="${element.devolverNombre()}" value= "${valor}">` 
    section.appendChild(div)
});

const irAlCarrito = d.createElement('div')
irAlCarrito.classList = "ticket"
irAlCarrito.innerHTML = `<a href="../pages/carrito.html" class="btn btn-secondary terminar" id= "botonTotal" >IR AL CARRITO</a>`


main.appendChild(irAlCarrito)
