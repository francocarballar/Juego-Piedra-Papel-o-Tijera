// Juego piedra, papel o tijera

const puntaje = document.getElementById('puntaje');
const title = document.getElementById('title');
const piedra = document.getElementById('piedra');
const piedraImg = document.getElementById('piedra-img');
const papel = document.getElementById('papel');
const papelImg = document.getElementById('papel-img');
const tijera = document.getElementById('tijera');
const tijeraImg = document.getElementById('tijera-img');
const jugar = document.querySelector('.button-play');
const ganaste = document.getElementById('ganaste');
const perdiste = document.getElementById('perdiste');
const empate = document.getElementById('empate');
const containerJugarOtraVez = document.querySelector('.container-jugar-otra-vez');
const containerResultado = document.querySelector('.container-resultado');
const resultadoUser = document.getElementById('resultado-user');
const resultadoPC = document.getElementById('resultado-pc');
let user;
let opciones = [piedra, papel, tijera];
function opcionAleatoria(opciones){
    let indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}
let pc = opcionAleatoria(opciones);
let puntos = 0;
piedra.addEventListener('click', (e)=>{
    const click = e.target;
    if(click == piedra || click == piedraImg){
        user = piedra;
    }
    piedra.style ="background-color: var(--primary-color); border: 2px solid var(--color-text);";
    papel.style ="background-color: var(--secondary-color); border: none;";
    tijera.style ="background-color: var(--secondary-color); border: none;";
});
papel.addEventListener('click', (e)=>{
    const click = e.target;
    if(click == papel || click == papelImg){
        user = papel;
    }
    papel.style ="background-color: var(--primary-color); border: 2px solid var(--color-text);";
    piedra.style ="background-color: var(--secondary-color); border: none;";
    tijera.style ="background-color: var(--secondary-color); border: none;";
});
tijera.addEventListener('click', (e)=>{
    const click = e.target;
    if(click == tijera || click == tijeraImg){
        user = tijera;
    }
    tijera.style ="background-color: var(--primary-color); border: 2px solid var(--color-text);";
    papel.style ="background-color: var(--secondary-color); border: none;";
    piedra.style ="background-color: var(--secondary-color); border: none;";
});
let puntosAlmacenados = localStorage.getItem('puntos');
jugar.addEventListener('click', (e)=>{
    const click = e.target;
    puntos = puntosAlmacenados;
    if(click === jugar && user === piedra || user === papel || user === tijera) {
            if (user === piedra && pc === tijera) {
                title.style = "opacity: 0;";
                containerResultado.style = "display: flex;";
                resultadoUser.innerHTML = user.id;
                resultadoPC.innerHTML = pc.id;
                containerJugarOtraVez.style = "display: flex;";
                ganaste.style = "display: flex;";
                puntos++;
                puntosAlmacenados++;
                puntaje.innerHTML = puntosAlmacenados;
            } else if (user === papel && pc === tijera) {
                title.style = "opacity: 0;";
                containerResultado.style = "display: flex;";
                resultadoUser.innerHTML = user.id;
                resultadoPC.innerHTML = pc.id;
                containerJugarOtraVez.style = "display: flex;";
                perdiste.style = "display: flex;";
                --puntos;
                --puntosAlmacenados;
                puntaje.innerHTML = puntosAlmacenados;
            } else if (user === papel && pc === piedra) {
                title.style = "opacity: 0;";
                containerResultado.style = "display: flex;";
                resultadoUser.innerHTML = user.id;
                resultadoPC.innerHTML = pc.id;
                containerJugarOtraVez.style = "display: flex;";
                ganaste.style = "display: flex;";
                puntos++;
                puntosAlmacenados++;
                puntaje.innerHTML = puntosAlmacenados;
            } else if (user === tijera && pc === piedra) {
                title.style = "opacity: 0;";
                containerResultado.style = "display: flex;";
                resultadoUser.innerHTML = user.id;
                resultadoPC.innerHTML = pc.id;
                containerJugarOtraVez.style = "display: flex;";
                perdiste.style = "display: flex;";
                --puntos;
                --puntosAlmacenados;
                puntaje.innerHTML = puntosAlmacenados;
            } else if (user === piedra && pc === papel) {
                title.style = "opacity: 0;";
                containerResultado.style = "display: flex;";
                resultadoUser.innerHTML = user.id;
                resultadoPC.innerHTML = pc.id;
                containerJugarOtraVez.style = "display: flex;";
                perdiste.style = "display: flex;";
                --puntos;
                --puntosAlmacenados;
                puntaje.innerHTML = puntosAlmacenados;
            } else if (user === tijera && pc === papel) {
                title.style = "opacity: 0;";
                containerResultado.style = "display: flex;";
                resultadoUser.innerHTML = user.id;
                resultadoPC.innerHTML = pc.id;
                containerJugarOtraVez.style = "display: flex;";
                ganaste.style = "display: flex;";
                puntos++;
                puntosAlmacenados++;
                puntaje.innerHTML = puntosAlmacenados;
            } else {
                title.style = "opacity: 0;";
                containerResultado.style = "display: flex;";
                resultadoUser.innerHTML = user.id;
                resultadoPC.innerHTML = pc.id;
                containerJugarOtraVez.style = "display: flex;";
                empate.style = "display: flex;";
                puntaje.innerHTML = puntosAlmacenados;
            }
            localStorage.setItem('puntos', puntos);
    }
});
puntaje.innerHTML = puntosAlmacenados;
function jugarOtraVez(){
    function nuevaOpcionAleatoria(opciones){
        let indiceAleatorio = Math.floor(Math.random() * opciones.length);
        return opciones[indiceAleatorio];
    }
    pc = nuevaOpcionAleatoria(opciones);
    title.style = "opacity: 1;";
    papel.style ="background-color: var(--secondary-color); border: none;";
    piedra.style ="background-color: var(--secondary-color); border: none;";
    tijera.style ="background-color: var(--secondary-color); border: none;";
    containerResultado.style = "display: none;";
    ganaste.style = "display: none;";
    perdiste.style = "display: none;";
    empate.style = "display: none;";
    containerJugarOtraVez.style = "display: none;";
}

// Modo oscuro 

const body = document.getElementById('body');
const theme = document.getElementById('theme');
theme.addEventListener('click', (e) => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("theme", "true");
    } else if (!body.classList.contains("dark")) {
        localStorage.setItem("theme", "false");
    }
});
if(localStorage.getItem("theme") === "true"){
    body.classList.add("dark");
} else if(localStorage.getItem("theme") === "false") {
    body.classList.remove("dark");
}
if(body.classList.contains("dark")){
    function jugarOtraVez(){
        function nuevaOpcionAleatoria(opciones){
            let indiceAleatorio = Math.floor(Math.random() * opciones.length);
            return opciones[indiceAleatorio];
        }
        pc = nuevaOpcionAleatoria(opciones);
        title.style = "opacity: 1;";
        papel.style ="background-color: var(--dark-secondary-color); border: none;";
        piedra.style ="background-color: var(--dark-secondary-color); border: none;";
        tijera.style ="background-color: var(--dark-secondary-color); border: none;";
        containerResultado.style = "display: none;";
        ganaste.style = "display: none;";
        perdiste.style = "display: none;";
        empate.style = "display: none;";
        containerJugarOtraVez.style = "display: none;";
    }
    piedra.addEventListener('click', (e)=>{
        const click = e.target;
        if(click == piedra || click == piedraImg){
            user = piedra;
        }
        piedra.style ="background-color: var(--dark-primary-color); border: 2px solid var(--dark-tertiary-color);";
        papel.style ="background-color: var(--dark-secondary-color); border: none;";
        tijera.style ="background-color: var(--dark-secondary-color); border: none);";
    });
    papel.addEventListener('click', (e)=>{
        const click = e.target;
        if(click == papel || click == papelImg){
            user = papel;
        }
        papel.style ="background-color: var(--dark-primary-color); border: 2px solid var(--dark-tertiary-color);";
        piedra.style ="background-color: var(--dark-secondary-color); border: none;";
        tijera.style ="background-color: var(--dark-secondary-color)); border: none);";
    });
    tijera.addEventListener('click', (e)=>{
        const click = e.target;
        if(click == tijera || click == tijeraImg){
            user = tijera;
        }
        tijera.style ="background-color: var(--dark-primary-color); border: 2px solid var(--dark-tertiary-color);";
        papel.style ="background-color: var(--dark-secondary-color); border: none;";
        piedra.style ="background-color: var(--dark-secondary-color); border: none);";
    });
}