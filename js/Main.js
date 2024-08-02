// importar Crear HTMl para tener un código mas limpio
import { MostrarHtml } from "/js/CrearHML.js"

//Componentes
document.addEventListener("DOMContentLoaded", ev => {
    MostrarHtml()
    MostrarDatosConfiguracion()
})

function MostrarDatosConfiguracion() {
    //Truco !Fetch
let url ;

    fetch(url)
    
        .then(response => response.json())
    
        .then(data => console.log(data));
    

}