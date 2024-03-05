window.onload = function(){
   buts = document.querySelectorAll("nav button");
   for (let button of buts) {
    button.addEventListener("click", trocaTab);
   }  
   abrirTab(0);
}

function trocaTab(e){
    const botAcionado = e.target;
    const lidobot = botAcionado.parentNode;
    const nodes = Array.from(lidobot.parentNode.children);
    const i = nodes.indexOf(lidobot);
    abrirTab(i);
}
function abrirTab(a) {
    const tabAtivo = document.querySelector(".tabActive");
    if (tabAtivo !== null)
     tabAtivo.className = "";

    document.querySelectorAll(".tabs section")[a].className = "tabActive";
    document.querySelectorAll("nav button")[a].className = "buttonActive"; 
}  