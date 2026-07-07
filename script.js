const audio = document.getElementById("audio");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const boton = document.getElementById("entrar");
const login = document.querySelector(".login");
const carga = document.querySelector(".pantalla-carga");
const pagina = document.querySelector(".aniversario");
const mensaje = document.getElementById("mensaje");

audio.volume = 0.5;

audio.play();

boton.addEventListener("click", function(){

    console.log(usuario.value);
    console.log(contraseña.value);

    if(
        usuario.value === "Elly"
        &&
        contraseña.value === "6759"
    ){
        login.style.display = "none";

carga.style.display = "flex";

setTimeout(function(){

    carga.style.display = "none";

    pagina.classList.add("activo");

},1800);
    }

    else{

        mensaje.textContent = "Respuesta incorrecta ❤️";

    }

});
