// Modularizar Exportar e Importar



//0-

export function MostrarHtml() {
    let Navbar = document.getElementById("Navbar").innerHTML = CrearNavbar ();
    let Footer = document.getElementById("Footer").innerHTML = CrearFooter ();
    let Noticias = document.getElementById("Noticias").innerHTML = CrearTarjetaNoticias ();
    let Banner1 = document.getElementById("Banner__1").innerHTML = CrearBanner1 ();
    let Banner2 = document.getElementById("Banner__2").innerHTML = CrearBanner2 ();
    let MostrarTablaDatos = document.getElementById("Tabla").innerHTML = CrearTabla ();

}

// NavBar
function CrearNavbar() {
    let html = `
    <a class="navbar-brand" href="#">
                <img src="img/1-Logo.png" alt="Logo NoticiasTecnológicas" class="navegacion-principal__marca">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="ListaNavbar">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#Noticias">Noticias</a></li>
                    <li class="nav-item"><a class="nav-link" href="#Banner1">Banner1</a></li>
                    <li class="nav-item"><a class="nav-link" href="#Banner2">Banner2</a></li>
                    <li class="nav-item"><a class="nav-link" href="#Footer">Contacto</a></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-search"></i></a></li>
                </ul>
            </div>
    `

    return html
}

// Footer
function CrearFooter() {
    let html = `
    <h3>Derechos de Autor de NoticiasTecnológicas</h3>
            <p>Sigue a NoticiasTecnológicas</p>
            <ul class="list-inline enlaces-pie" id="ListaFooter">
                <!-- Aquí se insertarán los elementos del pie de página <li>términos condiciones</li> -->
                <a href="https://facebook.com" class="mx-2"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" class="mx-2"><i class="fab fa-twitter"></i></a>
                <a href="https://linkedin.com" class="mx-2"><i class="fab fa-linkedin"></i></a>
            </ul>

    `

    return html
}


// Main -Section de noticias
function CrearTarjetaNoticias() {
    let html = `
    <section class=" banner  col-lg-4 ">
                    <div class="card h-100">
                        <img src="img/1-Noticia.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Lorem ipsum dolor.</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#" class="btn btn-primary">Más información <i
                                    class="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </section>
    `

    return html
}

function  CrearParrafo() {
    let html = `<p> </p>`

    return html;
}



// Creación de los Banner
function CrearBanner1() {
    let htmlBanner1 = `
         <section class="banner banner-tarjetas-uno " id="Banner1">
                    <div class="container">
                        <h2>Lorem ipsum dolor.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni
                            accusantium,
                            veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit
                            facilis qui
                            inventore
                            consequatur fugit.</p>
                        <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
                </section>
    `

    return htmlBanner1
}


function CrearBanner2() {
    let htmlBanner2 = `
          <section class="banner banner-tarjetas-dos " id="Banner2">
                    <div class="container">
                        <h2>Lorem ipsum dolor.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni
                            accusantium,
                            veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit
                            facilis qui
                            inventore
                            consequatur fugit.</p>
                        <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
                </section>
    `

    return htmlBanner2
}



function CrearTabla() {
    let ID = "".value
    let Nombre = "".value
    let Apellido = "".value

    let TablaDatos = `
                    <thead class="thead-inverse">
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${ID}</td>
                    <td>${Nombre}</td>
                    <td>${Apellido}</td>

                </tr>

            </tbody>
    `
    return TablaDatos
}