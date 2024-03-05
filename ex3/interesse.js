window.onload = function() {
 const inte = document.querySelector("#interesse");   
 inte.addEventListener("keyup", e => {
    if (e.key === "Enter")
    addInteresse();
 });

}

function addInteresse(){

   const inte = document.querySelector("#interesse");
   const lista = document.querySelector("ol");
   
   const novoLi = document.createElement("li");
   const novoSpan = document.createElement("span");
   const novoBotao = document.createElement("button");

   novoSpan.textContent = inte.value;
   novoBotao.textContent = 'X';

   novoLi.appendChild(novoSpan);
   novoLi.appendChild(novoBotao);
   lista.appendChild(novoLi);

   novoBotao.onclick = function() {
    lista.removeChild(novoLi)
   }
   inte.value = '';
}