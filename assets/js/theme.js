document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const icon = document.getElementById("theme-icon");
    const body = document.body;

    // Aplicar tema guardado
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        body.classList.add("dark");
        if (toggle) toggle.checked = true;
        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }

    // Cambio de tema
    if (toggle) {
        toggle.addEventListener("change", () => {
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                if (icon) {
                    icon.classList.replace("fa-moon", "fa-sun");
                }
            } else {
                localStorage.setItem("theme", "light");
                if (icon) {
                    icon.classList.replace("fa-sun", "fa-moon");
                }
            }
        });
    }
});
