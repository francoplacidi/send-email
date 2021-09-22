//Enabling submit.

function enable(){
    name = document.getElementById("names").value;
    mail = document.getElementById("mail").value;
    affair = document.getElementById("affair").value;
    msg = document.getElementById("message").value;
    val = 0;

    if(name == ""){
        val++;
    }
    if(mail == ""){
        val++;
    }
    if(affair == ""){
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

document.getElementById("names").addEventListener("keyup", enable);
document.getElementById("mail").addEventListener("keyup", enable);
document.getElementById("affair").addEventListener("keyup", enable);
document.getElementById("message").addEventListener("keyup", enable)
document.getElementById("btn").addEventListener("click", () => {
    console.log("The form has been completed !!");
});
