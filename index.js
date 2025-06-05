import { primerColor } from "./contenedor/amarrillo/amarillo.js";
import { segundoColor } from "./contenedor/rojo/rojo.js";
import { tercerColor } from "./contenedor/verde/verde.js";
import { crearHeader } from "./header/header.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Configuración Firebase con tus datos reales
const firebaseConfig = {
  apiKey: "AIzaSyDZTRFG7yBzizPSJJImWddGwbyQiWQKGH8",
  authDomain: "raspberry-pi-pico-w-5635e.firebaseapp.com",
  databaseURL: "https://raspberry-pi-pico-w-5635e-default-rtdb.firebaseio.com",
  projectId: "raspberry-pi-pico-w-5635e",
  storageBucket: "raspberry-pi-pico-w-5635e.appspot.com",
  messagingSenderId: "5310962444",
  appId: "1:5310962444:web:ac110a2284b6e138694729"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Construcción del DOM semáforo
function inicialDom() {
  const root = document.getElementById('root');

  const contenedorSemaforo = document.createElement('div');
  contenedorSemaforo.classList.add('contenedor-semaforo');

  root.appendChild(crearHeader());
  root.appendChild(contenedorSemaforo);

  const luzAmarilla = primerColor(); // Elemento amarillo
  const luzRoja = segundoColor();    // Elemento rojo
  const luzVerde = tercerColor();    // Elemento verde

  contenedorSemaforo.appendChild(luzRoja);
  contenedorSemaforo.appendChild(luzAmarilla);
  contenedorSemaforo.appendChild(luzVerde);

  // Crear y conectar los botones
  const botonesContainer = document.createElement('div');
  botonesContainer.classList.add('botones-container');

  const estadoRef = ref(database, 'semaforo/estado');

  function createButton(text, id, value) {
    const button = document.createElement('button');
    button.textContent = text;
    button.id = id;
    button.classList.add('boton');
    button.addEventListener('click', () => {
      set(estadoRef, value); // Envía el estado a Firebase
    });
    return button;
  }

  const buttonRojo = createButton('Botón Rojo', 'boton-rojo', 'rojo');
  const buttonAmarillo = createButton('Parpadeo Amarillo', 'boton-amarillo', 'amarillo');
  const buttonVerde = createButton('Botón Verde', 'boton-verde', 'verde');
  const buttonReiniciar = createButton('Reiniciar', 'boton-reiniciar', 'reiniciar');

  botonesContainer.appendChild(buttonRojo);
  botonesContainer.appendChild(buttonAmarillo);
  botonesContainer.appendChild(buttonVerde);
  botonesContainer.appendChild(buttonReiniciar);

  root.appendChild(botonesContainer); // Coloca los botones debajo del semáforo
}
inicialDom();

// Escuchar cambios en la base de datos Firebase en la ruta 'semaforo/estado'
const estadoRef = ref(database, 'semaforo/estado');

onValue(estadoRef, (snapshot) => {
  const estado = snapshot.val();

  // Limpiar todos los colores activos
  luzRoja.classList.remove('activo');
  luzAmarilla.classList.remove('activo');
  luzVerde.classList.remove('activo');

  if (estado === 'rojo') {
    luzRoja.classList.add('activo');
  } else if (estado === 'amarillo') {
    luzAmarilla.classList.add('activo');
  } else if (estado === 'verde') {
    luzVerde.classList.add('activo');
  }
});