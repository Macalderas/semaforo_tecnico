//heade.js
export function crearHeader() {  
  const header = document.createElement('header');  
  header.classList.add('mi-header');
  
  const titulo = document.createElement('h2');  
  titulo.textContent = 'Semáforo';
  
  header.appendChild(titulo);  
  return header;}