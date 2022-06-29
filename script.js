let numero =0
function aumentar(){
numero = numero +1
console.log("aumentar")
 mostrarnatela()
}
function diminuir(){
    numero = numero -1
    mostrarnatela()
}
function zerar(){
    numero =0
    mostrarnatela()
}
function mostrarnatela(){
    const p = document.querySelector("#resultado")
    p.innerText=numero
}
mostrarnatela()