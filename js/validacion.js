function validarCorreo(correo){
    var expReg = /^[a-z0-9]*@unl.edu.ar/;
    var esValido = expReg.test(correo);
    if(!esValido){
        alert("El correo NO es válido!");
    }
}
