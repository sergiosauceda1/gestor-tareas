function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (username === 'admin' && password === 'admin') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        document.getElementById('nombreUsuario').innerText = username;
        error.innerText = '';
    } else {
        error.innerText = 'Error de autenticación';
    }
}

function registrarTarea() {
    const codigo = document.getElementById('codigo').value;
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const cliente = document.getElementById('cliente').value;
    const idProyecto = document.getElementById('idProyecto').value;
    const comentarios = document.getElementById('comentarios').value;

    if (!codigo || !titulo || !descripcion || !fechaInicio || !cliente || !idProyecto || !comentarios) {
        alert('Por favor completa todos los campos.');
        return;
    }

    const tabla = document.getElementById('tablaTareas').getElementsByTagName('tbody')[0];
    const newRow = tabla.insertRow();
    newRow.innerHTML = `
        <td>${codigo}</td>
        <td>${titulo}</td>
        <td>${descripcion}</td>
        <td>${fechaInicio}</td>
        <td>${cliente}</td>
        <td>${idProyecto}</td>
        <td>${comentarios}</td>
        <td>Por hacer</td>
    `;

    limpiarCampos();
}

function limpiarCampos() {
    document.getElementById('codigo').value = '';
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('fechaInicio').value = '';
    document.getElementById('cliente').value = '';
    document.getElementById('idProyecto').value = '';
    document.getElementById('comentarios').value = '';
}

