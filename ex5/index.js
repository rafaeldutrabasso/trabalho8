window.onload = function(){

   const modal = document.querySelector(".modal");
   const buttonClose = modal.querySelector(".buttonClose");

   buttonClose.addEventListener("click", function(){
   modal.style.display = 'none'; //torna o elemento invisivel
   });

   const buttonOpenModal = document.getElementById("btnOpenModal");
   buttonOpenModal.addEventListener("click", function (){
   modal.style.display = 'block'; //qualquer valor diferente de none faz com que elemento seja visivel

   });
}