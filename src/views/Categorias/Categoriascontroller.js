export const categoriaController = async function () {
  const datos = await fetch(`http://localhost:3000/api/categorias`);
  const { data } = await datos.json();
  console.log(data);
  
  let main = document.querySelector('.main');
  let contenedor = document.createElement('div');
  contenedor.classList.add('contenedor');
  
  let content_crear = document.createElement('div');
  content_crear.classList.add('container');

  let subtitulo = document.createElement('h2');
  subtitulo.textContent = "CREAR CATEGORIA";
  subtitulo.classList.add('subtitle');

  let boton_crear = document.createElement('a');
  boton_crear.setAttribute('href','#FormularioCategoria')
  boton_crear.textContent = "CREAR";
  boton_crear.classList.add('boton');

  let table = document.createElement('table');
  table.classList.add('tabla');
  let thead = document.createElement('thead');
  thead.classList.add('tabla__encabezado');

  let tbody = document.createElement('tbody');
  tbody.classList.add('tabla__cuerpo');
  
  let id = document.createElement('th');
  let nombre = document.createElement('th');
  let descripcion = document.createElement('th');
  let opciones = document.createElement('th');

  id.textContent = "ID";
  nombre.textContent = "NOMBRE";
  descripcion.textContent = "DESCRIPCION";
  opciones.textContent = "OPCIONES";

  id.classList.add('tabla__celda');
  nombre.classList.add('tabla__celda');
  descripcion.classList.add('tabla__celda');
  opciones.classList.add('tabla__celda');

  let tfila = document.createElement('tr');
  tfila.classList.add('tabla__fila');

  content_crear.append(subtitulo, boton_crear);
  thead.append(tfila);
  tfila.append(id, nombre, descripcion, opciones);

  data.forEach(category => {
    let contenedor_buttons = document.createElement('div');
    contenedor_buttons.classList.add('tabla__container-buttons');
    let boton_eliminar = document.createElement('button');
    boton_eliminar.textContent = "ELIMINAR";
    boton_eliminar.classList.add('boton');
    boton_eliminar.classList.add('boton--tamanio_agrandado');
    let boton_editar = document.createElement('button');
    boton_editar.textContent = "EDITAR";
    boton_editar.classList.add('boton');
    boton_editar.classList.add('boton--tamanio_agrandado');

    let fila = document.createElement("tr");
    fila.classList.add('tabla__fila');

    let tdId = document.createElement('td');
    let tdNombre = document.createElement('td');
    let tdDescripcion = document.createElement('td');
    let tdOpciones = document.createElement('td');
    
    
    tdId.classList.add('tabla__celda');
    tdNombre.classList.add('tabla__celda');
    tdDescripcion.classList.add('tabla__celda');
    tdOpciones.classList.add('tabla__celda');
    
    tdId.textContent = category.id;
    tdNombre.textContent = category.nombre;
    tdDescripcion.textContent = category.descripcion;

    contenedor_buttons.append(boton_editar, boton_eliminar)
    tdOpciones.append(contenedor_buttons);
    fila.append(tdId, tdNombre, tdDescripcion, tdOpciones);
    tbody.append(fila);
  })
  table.append(thead, tbody);
  main.append(contenedor);
  contenedor.append(content_crear, table);
} 