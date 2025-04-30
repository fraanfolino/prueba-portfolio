function formEnviado() {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre !== "" && email !== "" && mensaje !== "") {
        alert("FORMULARIO ENVIADO CON ÉXITO"); 
    } else {
        alert("ERROR ⚠️, RELLENE TODOS LOS CAMPOS CORRECTAMENTE"); 
    }
}