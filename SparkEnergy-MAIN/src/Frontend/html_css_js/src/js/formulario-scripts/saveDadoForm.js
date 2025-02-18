

const saveData = JSON.parse(localStorage.getItem("userData"))

if (saveData) {
    for (const [key, value] of Object.entries(saveData)) {
        const mostrarElemento = document.querySelector(`p[data-display="${key}"]`);
        if (mostrarElemento) {
            mostrarElemento.textContent = value
        }

        if (value === "") {
            mostrarElemento.textContent = "--------------"
        }
    }
}





