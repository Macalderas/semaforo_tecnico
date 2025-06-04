export function crearBotones() {
  const contenedor = document.createElement('div');
  contenedor.classList.add('botonera');

  const colores = ['rojo', 'amarillo', 'verde'];
  const nombres = ['Rojo', 'Amarillo', 'Verde', 'Reiniciar'];

  const botones = nombres.map((nombre, index) => {
    
    const btn = document.createElement('button');
    btn.textContent = nombre;
    btn.classList.add('boton');

    if (index < 3) {
      btn.classList.add(colores[index]);
    } else {
      btn.classList.add('rojo');
    }

    contenedor.appendChild(btn);
    return btn;
  });

  botones[3].addEventListener('click', () => {
    botones[0].classList.add('rojo');
    botones[1].classList.remove('amarillo');
    botones[2].classList.remove('verde');
  });

  return contenedor;
}
