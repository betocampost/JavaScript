alert("Recuerda que el usuario debe iniciar con una letra, NO un simbolo y NO un numero")


const username = document.getElementById('Usuario')
const password = document.getElementById('Contraseña')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        Usuario: username.value,
        Contraseña: password.value
    }

    console.log(data)
})


let campoUsuario=document.getElementById("usuario");
let campoContraseña=document.getElementById("contraseña");

campoUsuario.oninput=()=>{
    if(isNaN(campoUsuario.value)){
    campoUsuario.style.color="black";

    }else{
    campoUsuario.style.color="red";
    }
}

function capturarUsuario(e) {
    if(e.which==13 || e.keycode==13){
    alert("Ingresaste Usuario");
    }
}


