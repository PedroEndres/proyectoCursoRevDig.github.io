//----------------- IMPORTANDO INFORMACION DE LOS MENU ------------------------
import data from "./data.js";

//----------------- DECLARACION DE VARIABLES ------------------------

let sectionMenu = document.getElementById("menu");
let btnTodos = document.getElementById("todos"); //cambiar Nombres
let btnSandwich = document.getElementById("sandwich");
let btnHamburguesa = document.getElementById("hamburguesa");
let btnWok = document.getElementById("wok");
let btnRisotto = document.getElementById("risotto");
let btnPizza = document.getElementById("pizza");
let btnWrap = document.getElementById("wrap");

//----------------- AGREGANDO EVENTOS ------------------------

btnTodos.addEventListener("click", () => Validar("todos"));
btnSandwich.addEventListener("click", () => Validar("sandwich"));
btnHamburguesa.addEventListener("click", () => Validar("hamburguesa"));
btnWok.addEventListener("click", () => Validar("wok"));
btnRisotto.addEventListener("click", () => Validar("risotto"));
btnPizza.addEventListener("click", () => Validar("pizza"));
btnWrap.addEventListener("click", () => Validar("wrap"));

//----------------- FUNCIONES de Bienvenida, Localidad y una FUNCION que importa los menu ------------------------

function bienvenida() {
  let edad = prompt("ingresar edad: ");
  if (edad >= 18) {
    alert("bienvenid@!");
  } else {
    alert("Usted ingresa bajo su reponsabilidad al ser menor");
  }
}

function localidad() {
  let distancia = confirm("¿Vive a menos de 40km de San Nicolas?");
  if (distancia == true) {
    alert("Su envio será gratis!");
  } else {
    alert("Su envio tendrá un costo adicional");
  }
}

function Validar(filtro) {
  let menu = data;
  sectionMenu.innerHTML = "";
  console.log(filtro);
  if (filtro == "sandwich") {
    menu = data.filter((element) => element.type == "sandwich");
  } else if (filtro == "hamburguesa") {
    menu = data.filter((element) => element.type == "hamburguesa");
  } else if (filtro == "wok") {
    menu = data.filter((element) => element.type == "wok");
  } else if (filtro == "risotto") {
    menu = data.filter((element) => element.type == "risotto");
  } else if (filtro == "pizza") {
    menu = data.filter((element) => element.type == "pizza");
  } else if (filtro == "wrap") {
    menu = data.filter((element) => element.type == "wrap");
  }
  menu.map((element) => {
    sectionMenu.innerHTML += `<article class="article-menu">
      <img
        src=${element.img}
        alt=${element.alt}
        class="img-menu"
      />
      <span class="tag">${element.type}</span>
      <div class="info-menu">
        <h2>${element.title}</h2>
        <p>
         ${element.description}
        </p>
      </div>
      </article>`;
  });
}

//----------------- Ejecución de las FUNCIONES ------------------------

bienvenida();
localidad();
Validar("todos");
