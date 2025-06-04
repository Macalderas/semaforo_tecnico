const FIREBASE_URL = "https://raspberry-pi-pico-w-5635e-default-rtdb.firebaseio.com/semaforo.json";

function enviarEstadoFirebase(estado) {
    fetch(FIREBASE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: estado })
    })
    .then(res => {
        if (!res.ok) console.error('Error al enviar estado:', res.statusText);
    })
    .catch(err => console.error('Error en fetch:', err));
}

function createButton(text, id, estado) {
    const button = document.createElement('button');
    button.textContent = text;
    button.id = id;
    button.classList.add('boton');
    button.addEventListener('click', () => enviarEstadoFirebase(estado));
    return button;
}

function createButtons() {
    const container = document.createElement('div');
    container.classList.add('botones-container');

    container.appendChild(createButton('Botón Rojo', 'boton-rojo', 'rojo'));
    container.appendChild(createButton('Parpadeo Amarillo', 'boton-amarillo', 'parpadeo'));
    container.appendChild(createButton('Botón Verde', 'boton-verde', 'verde'));
    container.appendChild(createButton('Reiniciar', 'boton-reiniciar', 'ciclo'));

    return container;
}

export default createButtons;
