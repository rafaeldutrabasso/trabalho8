document.forms.cadastro.onsubmit = valida;
function valida(e) {
    let form = e.target;
    let formValido = true;

    const spanUsuario = form.usuario.nextElementSibling;
    const spanSenha = form.senha.nextElementSibling;
    const spanEmail = form.email.nextElementSibling;

    spanUsuario.textContent = "";
    spanSenha.textContent = "";
    spanEmail.textContent = "";

    if(form.usuario.value === "") {
     
        spanUsuario.textContent = 'Usuário deve ser preencido';
        formValido = false;
    }
    if(form.senha.value === "") {
     
        spanSenha.textContent = 'A senha deve ser preencido';
        formValido = false;
    }
    if(form.email.value === "") {
     
        spanEmail.textContent = 'O email deve ser preencido';
        formValido = false;
    }

    if(!formValido)
    e.preventDefault();

}