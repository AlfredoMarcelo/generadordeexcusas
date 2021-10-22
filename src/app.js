/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = nombrealeatorio();
  });
  console.log("Hello Rigo from the console!");
};

let nombrealeatorio = () => {
  let quien = ["Mi mamá", "Mi perro", "El vecino", "El gato", "El vendedor"];
  let accion = [
    "se cayó sobre",
    "tuvo un accidente en",
    "se desmayo en",
    "se fue hacia",
    "salió corriendo hacia"
  ];
  let cuando = [
    "el baño",
    "el segundo piso",
    "la bencinera",
    "la cocina",
    "el supermercado"
  ];

  let quienIndx = Math.floor(Math.random() * quien.length);
  let accionIndx = Math.floor(Math.random() * accion.length);
  let cuandoIndx = Math.floor(Math.random() * cuando.length);

  return quien[quienIndx] + " " + accion[accionIndx] + " " + cuando[cuandoIndx];
};
