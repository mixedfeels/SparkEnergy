const proximoBtn = document.getElementById("proximo-btn")

const inputTextTeste = document.getElementById("inputTextTeste")
const inputSelectTeste = document.getElementById("inputSelectTeste")

const alertNoText = document.getElementById("alert-noText")
const alertNoSelect = document.getElementById("alert-noSelect")

function checkInput() {
    if (inputTextTeste.value.trim() === '') {
        alertNoText.style.display = "block"
        inputTextTeste.style.borderColor = "red"
    }

    if (inputSelectTeste.value === '') {
        alertNoSelect.style.display = "block"
        inputSelectTeste.style.borderColor = "red"
    }
}