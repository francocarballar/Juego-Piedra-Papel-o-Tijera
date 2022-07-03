// Juego piedra, papel o tijera

const puntaje = document.getElementById('puntaje')
const title = document.getElementById('title')
const piedra = document.getElementById('piedra')
const piedraImg = document.getElementById('piedra-img')
const papel = document.getElementById('papel')
const papelImg = document.getElementById('papel-img')
const tijera = document.getElementById('tijera')
const tijeraImg = document.getElementById('tijera-img')
const jugar = document.querySelector('.button-play')
const ganaste = document.getElementById('ganaste')
const perdiste = document.getElementById('perdiste')
const empate = document.getElementById('empate')
const containerJugarOtraVez = document.querySelector(
  '.container-jugar-otra-vez'
)
const containerResultado = document.querySelector('.container-resultado')
const resultadoUser = document.getElementById('resultado-user')
const resultadoPC = document.getElementById('resultado-pc')

let puntos = 0
let user
let opciones = [piedra, papel, tijera] 
function opcionAleatoria (opciones) {
  let indiceAleatorio = Math.floor(Math.random() * opciones.length)
  return opciones[indiceAleatorio]
}
let pc =  opcionAleatoria (opciones)

// Reglas del juego

const clickEleccion = (op1, op2, op3) => {
  op1.style =
    'background-color: var(--primary-color); border: 2px solid var(--color-text);'
  op2.style = 'background-color: var(--secondary-color); border: none;'
  op3.style = 'background-color: var(--secondary-color); border: none;'
}

piedra.addEventListener('click', e => {
  const click = e.target
  if (click == piedra || click == piedraImg) {
    user = piedra
  }
  clickEleccion(piedra, papel, tijera)
})
papel.addEventListener('click', e => {
  const click = e.target
  if (click == papel || click == papelImg) {
    user = papel
  }
  clickEleccion(papel, piedra, tijera)
})
tijera.addEventListener('click', e => {
  const click = e.target
  if (click == tijera || click == tijeraImg) {
    user = tijera
  }
  clickEleccion(tijera, papel, piedra)
})

// Función jugar

let puntosAlmacenados = localStorage.getItem('puntos')

const styleJugar = resultado => {
  title.style = 'opacity: 0;'
  containerResultado.style = 'display: flex;'
  resultadoUser.innerHTML = user.id
  resultadoPC.innerHTML = pc.id
  containerJugarOtraVez.style = 'display: flex;'
  resultado.style = 'display: flex;'
}
const puntosGanaste = () => {
  puntos++
  puntosAlmacenados++
  puntaje.innerHTML = puntosAlmacenados
}
const puntosPerdiste = () => {
  --puntos
  --puntosAlmacenados
  puntaje.innerHTML = puntosAlmacenados
}

jugar.addEventListener('click', e => {
  const click = e.target
  puntos = puntosAlmacenados
  if (
    click === jugar && user === piedra ||
    user === papel ||
    user === tijera
  ) {
    if (user === piedra && pc === tijera) {
      styleJugar(ganaste)
      puntosGanaste()
    } else if (user === papel && pc === tijera) {
      styleJugar(perdiste)
      puntosPerdiste()
    } else if (user === papel && pc === piedra) {
      styleJugar(ganaste)
      puntosGanaste()
    } else if (user === tijera && pc === piedra) {
      styleJugar(perdiste)
      puntosPerdiste()
    } else if (user === piedra && pc === papel) {
      styleJugar(perdiste)
      puntosPerdiste()
    } else if (user === tijera && pc === papel) {
      styleJugar(ganaste)
      puntosGanaste()
    } else {
      styleJugar(empate)
    }
    localStorage.setItem('puntos', puntos)
  }
})
puntaje.innerHTML = puntosAlmacenados

// Función jugar otra vez

function jugarOtraVez () {
  function nuevaOpcionAleatoria (opciones) {
    let indiceAleatorio = Math.floor(Math.random() * opciones.length)
    return opciones[indiceAleatorio]
  }
  pc = nuevaOpcionAleatoria(opciones)
  user = 'ElegirOtraVez'
  title.style = 'opacity: 1;'
  papel.style = 'background-color: var(--secondary-color); border: none;'
  piedra.style = 'background-color: var(--secondary-color); border: none;'
  tijera.style = 'background-color: var(--secondary-color); border: none;'
  containerResultado.style = 'display: none;'
  ganaste.style = 'display: none;'
  perdiste.style = 'display: none;'
  empate.style = 'display: none;'
  containerJugarOtraVez.style = 'display: none;'
}

// Modo oscuro

const body = document.getElementById('body')
const theme = document.getElementById('theme')
theme.addEventListener('click', e => {
  body.classList.toggle('dark')
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'true')
    document.documentElement.setAttribute('data-theme', true) 
  } else if (!body.classList.contains('dark')) {
    localStorage.setItem('theme', 'false')
    document.documentElement.setAttribute('data-theme', false)
  }
})
if (localStorage.getItem('theme') === 'true') {
  body.classList.add('dark')
  document.documentElement.setAttribute('data-theme', true) 
} else if (localStorage.getItem('theme') === 'false') {
  body.classList.remove('dark')
  document.documentElement.setAttribute('data-theme', false)
}

