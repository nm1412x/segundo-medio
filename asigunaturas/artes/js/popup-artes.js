document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MODAL
    ========================== */
    const modal = document.getElementById("miVentana");
    const botonAceptar = document.getElementById("btnAceptar");
    const clave = "visto_artes";

    if (modal) {
        if (sessionStorage.getItem(clave)) {
            modal.style.display = "none";
        } else {
            modal.style.display = "flex";
        }
    }

    if (botonAceptar) {
        botonAceptar.addEventListener("click", () => {
            modal.style.display = "none";
            sessionStorage.setItem(clave, "true");
        });
    }

    /* =========================
       MENÚ HAMBURGUESA
    ========================== */
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");

    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("open");
            sidebar.classList.toggle("active");
        });
    }

    /* =========================
       TOGGLE DARK MODE
    ========================== */
    const toggle = document.getElementById("toggle");
    const icon = document.getElementById("theme-icon");
    const body = document.body;

    if (toggle && icon) {
        // Cargar tema guardado
        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark");
            toggle.checked = true;
            icon.classList.replace("fa-moon", "fa-sun");
        }

        toggle.addEventListener("change", () => {
            if (toggle.checked) {
                body.classList.add("dark");
                icon.classList.replace("fa-moon", "fa-sun");
                localStorage.setItem("theme", "dark");
            } else {
                body.classList.remove("dark");
                icon.classList.replace("fa-sun", "fa-moon");
                localStorage.setItem("theme", "light");
            }
        });
    }
});
