import './style.css';
import { categoriaController } from './views/Categorias/Categoriascontroller';
import { productoController } from './views/Productos/Productocontroller';

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

async function recorrer(hash) {
  const objetos = await rutas.find(objeto => objeto.nombre == hash);
  cargarVistas(objetos.path);
  objetos.controlador();
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
    controlador: categoriaController
  },
  {
    nombre: 'Productos',
    path: `src/views/Productos/index.html`,
    controlador: productoController
  },
  {
    nombre: 'FormularioCategoria',
    path: `src/views/Categorias/formCategory.html`,
    controlador: productoController
  }
];