let com = document.querySelector("#comandos-basicos")
com.addEventListener("click", abrirComandos)

function abrirComandos() {
    com.classList.toggle("ativo")
}
// -------------------------------------------------------
let vari = document.querySelector("#variaveis")
vari.addEventListener("click", abrirVariaveis)

function abrirVariaveis() {
    vari.classList.toggle("ativo")
}
// -------------------------------------------------------
function alerta() {
    window.alert("Esse é um alerta")
}

function confirmar() {
    window.confirm("Esse é o confirm, deseja continuar ?")
}

function escreva() {
    window.prompt("Escreva se nome:")
}