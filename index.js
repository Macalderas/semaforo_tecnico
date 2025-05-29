import { primerColor } from "./contenedor/amarrillo/amarillo.js"
import { segundoColor } from "./contenedor/rojo/rojo.js";
import { tercerColor } from "./contenedor/verde/verde.js";

const root = document.getElementById('root');

const contenedorSemaforo = document.createElement('div');
contenedorSemaforo.classList.add('contenedor-semaforo');

root.appendChild(contenedorSemaforo);

contenedorSemaforo.appendChild(primerColor());
contenedorSemaforo.appendChild(segundoColor());
contenedorSemaforo.appendChild(tercerColor());

