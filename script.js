document.addEventListener("DOMContentLoaded", function(){
//Corrige o ul da agenda caso a classe nao esteja certa
const secaAgenda = document.querySelector("#agenda");
 if(secaoAgenda) {
    const ulAgenda = secaoAgenda.querySelector("ul");
    if (ulAgenda) {
        ulAgenda.classList.add("agenda")
    }
 }

 const secaoContato = document.querySelector("#contato");
  if(secaoContato){
    secaoContato.classList.add(contato-box);
  }
});