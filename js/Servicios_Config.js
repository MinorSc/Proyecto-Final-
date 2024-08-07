
export const ObtenerDatosConfiguracion = async () => {

    const url = "/js/Configuraciones.json"

    try {

        const response = await fetch(url);
        if (response.status == '200') {
            
        
        const data = await response.json();

        console.table(data);
    } else {
        console.log("Error consultar el API" +response.status)
    }
    } catch (error) {

        console.log(error);

    }

};