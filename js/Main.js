// importar Crear HTMl para tener un código mas limpio
import { ObtenerDatosConfiguracion } from "/js/Servicios_Config.js"
import { MostrarHtml } from "/js/Global.js"


//Componentes
document.addEventListener("DOMContentLoaded", ev => {
    MostrarHtml()
    ObtenerDatosConfiguracion()
})



