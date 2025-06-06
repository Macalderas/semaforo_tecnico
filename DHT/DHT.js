export function crearContenidoVentilador(contenedor) {
  const humedad = document.createElement('p');
  humedad.id = 'valorHumedad';
  humedad.textContent = 'Humedad: --%';

  const linea1 = document.createElement('hr');

  const temperatura = document.createElement('p');
  temperatura.id = 'valorTemperatura';
  temperatura.textContent = 'Temperatura: --°C';

  const linea2 = document.createElement('hr');

  const imagen = document.createElement("img");
  imagen.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2w4bng5bjUybWZpMmUybm9wdmYyZGQ2Z2k4MDQ4aHp3Z2VpbmFzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Hy9UkBDsAd5XrgRXJv/giphy.gif";
  imagen.style.width = "100px";

  contenedor.appendChild(humedad);
  contenedor.appendChild(linea1);
  contenedor.appendChild(temperatura);
  contenedor.appendChild(linea2);
  contenedor.appendChild(imagen);

  obtenerDatosDHT();
}

function obtenerDatosDHT() {
  const url = 'https://raspberry-pi-pico-w-5635e-default-rtdb.firebaseio.com/dht11.json';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        const temp = data.temperatura;
        const hum = data.humedad;

        document.getElementById('valorTemperatura').textContent = `Temperatura: ${temp}°C`;
        document.getElementById('valorHumedad').textContent = `Humedad: ${hum}%`;
      }
    })
    .catch(error => {
      console.error('Error al obtener datos DHT11:', error);
    });

  setTimeout(obtenerDatosDHT, 5000);
}