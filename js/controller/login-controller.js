



function logar(){

    let usuario = $('#inputUsuario').val();
    let senha = $('#inputSenha').val();

    if(usuario == "admin@gmail.com" && senha == "senha"){
        window.location.href = 'menu.html'
    }else{
        alert('Usuario ou senha invalidos');
    }


}

$('.validate-form').on('submit',function(event){
    event.preventDefault();
    logar();
});