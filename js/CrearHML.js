// Modularizar Exportar e Importar



//0-





// Main -Section de noticias

const  CrearParrafo=() => {
    let html = `<p> </p>`

    return html;
}



// Creación de los Banner
const CrearBanner1=() => {
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


const CrearBanner2=() => {
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



const CrearTabla=() => {
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