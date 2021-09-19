function validarCorreo(correo){
    var expReg = /^[a-z0-9]*@unl.edu.ar/;
    var esValido = expReg.test(correo);
    if(!esValido){
        alert("El correo NO es válido!");
    }
}

function habilitar(){
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    asunto = document.getElementById("asunto").value;
    msg = document.getElementById("msg").value;
    val = 0;

    if(nombre == ""){
        val++;
    }
    if(correo == ""){
        val++;
    }
    if(asunto == ""){
        val++;
    }
    if(msg == ""){
        val++;
    }
    if(val == 0){
        document.getElementById("btn").disabled = false;
    }
    else{
        document.getElementById("btn").disabled = true;
    }
}

document.getElementById("nombre").addEventListener("keyup", habilitar);
document.getElementById("correo").addEventListener("keyup", habilitar);
document.getElementById("asunto").addEventListener("keyup", habilitar);
document.getElementById("msg").addEventListener("keyup", habilitar)
document.getElementById("btn").addEventListener("click", () => {
    console.log("Se ha completado y enviado el formulario !!");
});
