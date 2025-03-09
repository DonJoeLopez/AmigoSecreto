// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para los nombres ingresados
let amigosIngresados = [];

// Función para agregar un nombre al array
function agregarAmigo() {
    // Toma el valor del input
    const inputName = document.querySelector('#amigo');
    const nombre = inputName.value.trim();

    // Verifica si el input está vacío
    if (nombre.length === 0) {
        alert('Por favor, ingresa un nombre.');
    } else if (amigosIngresados.includes(nombre)) {
        // Verifica si el nombre ya está en el array
        alert('Este nombre ya ha sido ingresado.');
    } else {
        // Agrega el nombre al array
        amigosIngresados.push(nombre);

        // Limpia el input
        inputName.value = '';

        // Agrega el nombre a la lista
        const nameList = document.querySelector('#listaAmigos');
        const listItem = document.createElement('li');
        listItem.textContent = nombre;

        // Crea el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.style.display = 'none';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation(); 
            // Evita que el evento se pase por la lista
            confirmarEliminacion(nombre, listItem);
        });

        // Añade el botón al elemento de la lista
        listItem.appendChild(deleteButton);
        nameList.appendChild(listItem);

        // Añade evento para mostrar el botón de eliminar al hacer clic en la listga
        listItem.addEventListener('click', () => {
            deleteButton.style.display = 'inline';
        });

        // Muestra la alerta de confirmaación
        alert(`Se agregó ${nombre} con éxito.`);

        // Imprime el array en la consola
        console.log(amigosIngresados);
    }
}

// Función que confirma la eliminación de un nombre
function confirmarEliminacion(nombre, listItem) {
    if (confirm(`¿Estás seguro de que deseas eliminar ${nombre}?`)) {
        eliminarAmigo(nombre, listItem);
    }
}

// Función para eliminar un nombre del array y de la lista
function eliminarAmigo(nombre, listItem) {
    // Elimina el nombre del array
    amigosIngresados = amigosIngresados.filter(amigo => amigo !== nombre);

    // Elimina el nombre de la lista HTML
    listItem.remove();

    // Muestra la alerta de eliminación
    alert(`Se eliminó ${nombre} con éxito.`);

    // Imprime el array actualizado en la consola 
    console.log(amigosIngresados);
}

// Función para emparejar aleatoriamente los nombres y mostrarlos en una lista
function sortearAmigo() {
    // Crea una copia del array de nombres
    const nombresParaEmparejar = [...amigosIngresados];

    // Crea la mezcla aleatoria del array
    for (let i = nombresParaEmparejar.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nombresParaEmparejar[i], nombresParaEmparejar[j]] = [nombresParaEmparejar[j], nombresParaEmparejar[i]];
    }

    // Crea la lista de emparejamientos
    const pairList = document.querySelector('#resultado');
    pairList.innerHTML = '';
    
    // Limpia la lista anterior
    for (let i = 0; i < nombresParaEmparejar.length; i += 2) {
        const pairItem = document.createElement('li');
        if (i + 1 < nombresParaEmparejar.length) {
            pairItem.textContent = `${nombresParaEmparejar[i]} - ${nombresParaEmparejar[i + 1]}`;
        } else {
            pairItem.textContent = `${nombresParaEmparejar[i]} - Sin emparejar`;
        }
        pairList.appendChild(pairItem);
    }
}

//Crear una alerta para que los intengrantes sean pares para emparejar.