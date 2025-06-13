import './style.css';

let main = document.querySelector('.main');

window.addEventListener('hashchange', async () => {
  const hash = location.hash.slice(1);
  recorrer(hash);
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.slice(1);
  if (hash) {
    recorrer(hash);
  }
});

async function cargarVistas(path) {
  try {
    const vistaCategoria = await fetch(path);
    const vista = await vistaCategoria.text();
    main.innerHTML = vista;
  } catch (error) {
    main.innerHTML = `<p>Error cargando la vista: ${hash}</p>`;
    console.error(error);
  }
}

function recorrer(hash) {
  const objetos = rutas.find(objeto => objeto.nombre == hash);
  cargarVistas(objetos.path);
}
const rutas = [
  {
    nombre: 'Inicio',
    path: `src/views/Categorias/index.html`,
    controlador: 'main.js',
  },
  {
    nombre: 'Categorias',
    path: `src/views/Categorias/index.html`,
    controlador: 'src/views/Categorias/Categoriascontroller.js'
  },
  {
    nombre: 'Productos',
    path: `src/views/Productos/index.html`,
    controlador: 'src/views/Productos/Productocontroller.js'
  }
];