// Seleccionamos el botón y el menú por su ID
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

// Escuchamos el clic
menuBtn.addEventListener('click', () => {
    // toggle añade la clase si no la tiene, y la quita si ya la tiene
    menuBtn.classList.toggle('open');
    sidebar.classList.toggle('active');
});