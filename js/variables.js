//VARIABLES 
const d = document
const body = d.body
const head = d.head

const header = d.createElement('header')
const footer = d.createElement('footer')
const navBar = d.createElement('nav')
const containerNav = d.createElement('div')
const links = d.createElement('div')
const uls = d.createElement('ul')
const logoTueste = d.createElement('a')
const imgLogo = d.createElement('img')
const hamburguesa = d.createElement('button')


header.classList = "tueste"
navBar.classList = "navbar navbar-expand-lg bg-body-primary"
containerNav.classList = "container-fluid"

const link = [
    
    {
        page: 'pedido',
        link: 'PEDIDO',
        href: 'pedido.html'
    },
    {
        page: 'reservas',
        link: 'RESERVAS',
        href: 'reservas.html'
    },
    {
        page: 'ubicación',
        link: 'UBICACION',
        href: 'ubicacion.html'
    },
    {
        page: 'menu',
        link: 'MENÚ',
        href: 'menu.html'
    }
]

const currentLocation = window.location.href.split('/')
const currentPage = currentLocation[currentLocation.length - 1]

uls.innerHTML = `
    <li class="nav-item">
        <a class="nav-link text-light" href="${currentPage === 'index.html'? './index.html' : '../index.html'}">NOSOTROS</a>
    </li>
    `

link.forEach((nombre) => {
    uls.innerHTML += `
                    <li class="nav-item">
                        <a class="nav-link text-light" href="${currentPage === 'index.html' ? './pages/' + nombre.href  :'./' + nombre.href }">${nombre.link}</a>
                    </li>
    `
})


logoTueste.classList = "navbar-brand"
imgLogo.src= (currentPage === 'index.html'? "." :  "..") + "/IMAGENES/Tueste-Isologo-02.png"
hamburguesa.classList = "navbar-toggler navbar-light navbar-toggler-icon navbar-light"
hamburguesa.ariaExpanded = "false"
hamburguesa.ariaLabel = "Toggle navigation"
//hamburguesa.ariaControls = 'navbarSupportedContent'  NO FUNCIONA 
hamburguesa.setAttribute('data-bs-target', "#navbarSupportedContent")
hamburguesa.setAttribute('data-bs-toggle', 'collapse')
imgLogo.classList = "logo"
uls.classList = "navbar-nav mx-auto mb-2 mb-lg-0"

body.prepend(header)
header.prepend(navBar)
navBar.appendChild(containerNav)
containerNav.appendChild(logoTueste)
containerNav.appendChild(links)
links.appendChild(uls)
containerNav.appendChild(hamburguesa)
logoTueste.appendChild(imgLogo)

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

