var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha = window.document.getElementById("Samantha")
var SD = window.document.getElementById("setad")
var SE = window.document.getElementById("setae")
 
//Função Rolar para direita//
function RD() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    SD.style = "display:none"
    SE.style = "display:flex"

}
//Função rola para Esquerda//
function RE(){
    Bruna.style = "display:flex"
    Samantha.style = "display:none"
    SD.style = "display:flex"
    SE.style = "display:none"

}