// ======================
// ELEMENTOS
// ======================

const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");

const boton = document.getElementById("entrar");

const login = document.querySelector(".login");
const carga = document.querySelector(".pantalla-carga");
const pagina = document.querySelector(".aniversario");

const mensaje = document.getElementById("mensaje");

const audio = document.getElementById("audio");

const tarjetaMusica = document.querySelector(".musica");
const abrirMusica = document.getElementById("abrir-musica");
const cerrarMusica = document.getElementById("cerrar-musica");

const niveles = document.querySelectorAll(".nivel");


// ======================
// ESTADO INICIAL
// ======================

tarjetaMusica.style.display = "none";

audio.volume = 0.5;


// ======================
// LOGIN
// ======================

boton.addEventListener("click", function(){

    if(
        usuario.value === "Elly"
        &&
        contraseña.value === "6759"
    ){

        boton.style.transform = "scale(.93)";

        setTimeout(function(){

            login.style.display = "none";

            carga.style.display = "flex";

        },150);


        setTimeout(function(){

            carga.style.display = "none";

            pagina.classList.add("activo");

            tarjetaMusica.style.display = "block";

            audio.play();

        },2200);

    }

    else{

        mensaje.textContent = "Respuesta incorrecta ❤️";

    }

});


// ======================
// VOLUMEN
// ======================

niveles.forEach(function(nivel){

    nivel.addEventListener("click",function(){

        let cantidad = Number(this.dataset.vol);

        audio.volume = cantidad / 10;

        niveles.forEach(function(caja,index){

            if(index < cantidad){

                caja.classList.add("activo");

            }

            else{

                caja.classList.remove("activo");

            }

        });

    });

});


// ======================
// TARJETA DE MÚSICA
// ======================

cerrarMusica.addEventListener("click",function(){

    tarjetaMusica.classList.add("oculta");

});

abrirMusica.addEventListener("click",function(){

    tarjetaMusica.classList.remove("oculta");

});
