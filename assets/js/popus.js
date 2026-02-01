document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("miVentana");
    const botonAceptar = document.getElementById("btnAceptar");
    const clave = "visto_artes";

    if (sessionStorage.getItem(clave)) {
        if (modal) modal.style.display = "none";
    } else {
        if (modal) modal.style.display = "flex";
    }

    if (botonAceptar) {
        botonAceptar.addEventListener("click", () => {
            modal.style.display = "none";
            sessionStorage.setItem(clave, "true");
        });
    }
});
