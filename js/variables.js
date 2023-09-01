
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
        page: 'contacto',
        link: 'CONTACTO',
        href: 'contacto.html'
    },
    {
        page: 'ubicación',
        link: 'UBICACION',
        href: 'ubicacion.html'
    },
]

const currentLocation = window.location.href.split('/')
const currentPage = currentLocation[currentLocation.length - 1]

uls.innerHTML = `
    <li class="nav-item">
        <a class="nav-link text-light" href="${currentPage === 'index.html' || currentPage === ''? './index.html' : '../index.html'}">NOSOTROS</a>
    </li>
    `

link.forEach((nombre) => {
    uls.innerHTML += `
                    <li class="nav-item">
                        <a class="nav-link text-light" href="${currentPage === 'index.html' || currentPage === '' ? './pages/' + nombre.href  :'./' + nombre.href }">${nombre.link}</a>
                    </li>
    `
})


logoTueste.classList = "navbar-brand"
imgLogo.src= (currentPage === 'index.html'? "." :  "..") + "/imagenes/Tueste-Isologo-02.png"
imgLogo.classList = "logo"
uls.classList = "navbar-nav mx-auto menu-header"



body.prepend(header)
header.prepend(navBar)
navBar.appendChild(containerNav)
containerNav.appendChild(logoTueste)
containerNav.appendChild(links)
links.appendChild(uls)
logoTueste.appendChild(imgLogo)




