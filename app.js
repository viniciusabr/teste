function teste(){
    var nome = document.getElementById('txt-nome').value;
    var senha = document.getElementById('txt-pass').value;
    var erro = document.getElementById('js');
    if (nome == 'higor' && senha == '123'){
        window.location.assign("inicio.html")
    }else{
        erro.innerHTML = '<p>Usuário ou senha incorretos!</p>'
    }
}