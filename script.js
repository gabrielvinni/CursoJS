//   Botão abri e fecha das seções

let h2 = document.querySelectorAll("h2")
h2[0].addEventListener("click", abrirComandos)
h2[1].addEventListener("click", abrirVariaveis)

function abrirComandos() {
    let com = document.querySelector("#comandos-basicos")
    com.classList.toggle("abrir")
}

function abrirVariaveis() {
    let vari = document.querySelector("#variaveis")
    vari.classList.toggle("abrir")
}

// -------- Explos dos comandos --------------

function alerta() {
    window.alert("Esse é um alerta")
}
function confirmar() {
    window.confirm("Esse é o confirm, deseja continuar ?")
}
function escreva() {
    window.prompt("Escreva se nome:")
}