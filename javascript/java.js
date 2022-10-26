const cantidad = document.getElementById("cant")
const marca = document.getElementById("marca")
const resultado = document.getElementById("result")
function calculatePrice(){
    if (marca.value == 0 || cantidad.value == 0){
        mostrarMensajeErorr();
    }else{
        switch(marca.value){
            case "fiat":
                price = 5962316
                break;
            case "ford":
                price = 9875628
                break;
            case "volkswagen":
                price = 35987519
                break;
            case "honda":
                price = 65984954
                break;
    }
    var resultado = 0;
    resultado = price * cantidad.value;
    mostrarresultado(resultado);
}
}
function mostrarMensajeErorr() {
    result.innerHTML = ""
    result.style.display = "block"
    let P_error = document.createElement("p");
    let P_error_content = document.createTextNode("Error: Complete todos los campos");
    P_error.appendChild(P_error_content);
    result.appendChild(P_error);
    P_error.setAttribute("class", "error")
} 

function mostrarresultado(resultado){
    result.innerHTML = ""
    result.style.display = "block"
    let P_success = document.createElement("p")
    let P_success_content = document.createTextNode(`Cotización: $ ${resultado}.000`);
    P_success.appendChild(P_success_content);
    result.appendChild(P_success);
    P_success.setAttribute("class", "success");
}
