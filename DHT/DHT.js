export function crearContenidoVentilador(contenedor) {
  const humedad = document.createElement('p');
  humedad.textContent = 'Humedad';

  const linea1 = document.createElement('hr');

  const temperatura = document.createElement('p');
  temperatura.textContent = 'Temperatura °';

  const linea2 = document.createElement('hr');

  const imagen = document.createElement("img");
  imagen.src = "/home/macalderas/Descargas/ventilador.gif"

  contenedor.appendChild(humedad);
  contenedor.appendChild(linea1);
  contenedor.appendChild(temperatura);
  contenedor.appendChild(linea2);
  contenedor.appendChild(imagen);
}
