const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const boton = document.getElementById("entrar");
const login = document.querySelector(".login");
const pagina = document.querySelector(".aniversario");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function(){

    console.log(usuario.value);
    console.log(contraseña.value);

    if(
        usuario.value === "Ejemplo"
        &&
        contraseña.value === "1234"
    ){
        alert("Entró correctamente");

        login.style.display = "none";

        pagina.classList.add("activo");
    }

    else{

        mensaje.textContent = "Respuesta incorrecta ❤️";

    }

});