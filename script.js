const select = document.querySelector("#select-opcion");
const muestraOpciones = document.querySelector("#contenedor-opciones");
const usuarioIngresado = document.querySelector("#usuario");
const edadRegistrada = document.querySelector("#cantidad-años");


const PARRAFO_OPC_1 = "Camiseta de river plate temporada 2023";
const IMAGEN_OPC_1 = "https://th.bing.com/th/id/OIP.IXg6KaCiencL_aXvRjU-zAHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const LINK_OPC_1 = "https://millototal.mitiendanube.com/";

const TITULO_OPC_2 = "Knowhere collectibles";
const VIDEO_OPC_2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/DhMCWv6uzXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

function resultadoOpciones() {
    opcionSeleccionada = select.value;
    muestraOpciones.innerHTML = "";
    
    switch (opcionSeleccionada) {
        case "Opcion 1":
            muestraOpciones.innerHTML = `
            <p>${PARRAFO_OPC_1}</p>
            <img src=${IMAGEN_OPC_1} alt="">
            <a href=${LINK_OPC_1}>Enlace para comprar la camiseta</a>
            `;
            break;
        case "Opcion 2":
                muestraOpciones.innerHTML = `
                <h2>${TITULO_OPC_2}</h2>
                ${VIDEO_OPC_2}
            `;
            break;
        case "Opcion 3":
            muestraOpciones.innerHTML = `
            <label for="usuario">Nombre de Usuario :</label>
            <input id="usuario" type="text">
            <br><br>
            <label for="cantidad-años">Edad :</label>
            <input id="cantidad-años" type="number">
            <button onclick="datosIngresados()">Confirmar datos</button>
            `;      
        default:
            break;
    }
    
}

function datosIngresados() {
    let nombreRegistrado = document.querySelector("#usuario").value;
    let edadIngresada = document.querySelector("#cantidad-años").value;
    alert(`Nombre: ${nombreRegistrado}\nEdad: ${edadIngresada}`);
    
}
