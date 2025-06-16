let area_tareas = document.getElementById('contenedorTareas');
let boton = document.getElementById('btnAgregar');
let color;
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
let color5 = document.getElementById('color5');
// Añadir un event listener para cambiar el color del fondo a una tarea al hacer clic en el color correspondiente
color1.addEventListener('click', () => {
    color = '#d17171';
    console.log('Color seleccionado: ' + color);
});
color2.addEventListener('click', () => {
    color = '#d1b171';
    console.log('Color seleccionado: ' + color);
});
color3.addEventListener('click', () => {
    color = '#415b6e';
    console.log('Color seleccionado: ' + color);
});
color4.addEventListener('click', () => {
    color = '#72aa60';
    console.log('Color seleccionado: ' + color);
});
color5.addEventListener('click', () => {
    color = '#d4ccba';
    console.log('Color seleccionado: ' + color);
});
boton.addEventListener('click',() => {
    let contaleatorio= Math.floor(Math.random() * 1000);
    console.log('Botón presionado');
    let tarea= document.createElement('p');
    console.log(tarea);
    tarea.classList.add('tarea');
    tarea.textContent = 'Nueva tarea' + contaleatorio; // Añadir un texto a la tarea
    tarea.style.backgroundColor = color; // Cambiar el color de fondo de la tarea
    //seleccionar el color a una tarea
    tarea.onclick = () => {
        tarea.style.backgroundColor = color;
        console.log('Color de la tarea cambiado a: ' + color);
    }
    //crea r botón de eliminar
    let btnEliminarTarea = document.createElement('button');
    btnEliminarTarea.textContent = 'X';
    btnEliminarTarea.classList.add('btn-eliminar');
    btnEliminarTarea.onclick = function() //event listener para eliminar la tarea
    {
        tarea.remove();
        console.log('Tarea eliminada');
    };

    tarea.appendChild(btnEliminarTarea); // Añadir el botón de eliminar a la tarea
    area_tareas.appendChild(tarea);
});


