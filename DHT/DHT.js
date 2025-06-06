export function crearContenidoVentilador(contenedor) {
  const humedad = document.createElement('p');
  humedad.textContent = 'Humedad';

  const linea1 = document.createElement('hr');

  const temperatura = document.createElement('p');
  temperatura.textContent = 'Temperatura °';

  const linea2 = document.createElement('hr');

  const imagen = document.createElement("img");
  imagen.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2w4bng5bjUybWZpMmUybm9wdmYyZGQ2Z2k4MDQ4aHp3Z2VpbmFzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Hy9UkBDsAd5XrgRXJv/giphy.gif"

  contenedor.appendChild(humedad);
  contenedor.appendChild(linea1);
  contenedor.appendChild(temperatura);
  contenedor.appendChild(linea2);
  contenedor.appendChild(imagen);
}
