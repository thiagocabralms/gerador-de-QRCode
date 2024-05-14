function gerarQRCode(){
    var inputUsuario = document.getElementById('inputUsuario').value
    var mensagem = document.getElementById('mensagem')
    var GoogleAPI = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
    var conteudoQRcode = GoogleAPI + encodeURIComponent(inputUsuario)

    mensagem.textContent = 'Aguarde...✋'

    var imgQRCode = new Image()

    imgQRCode.onload = function(){
        mensagem.textContent = 'Seu QRCode⤴︎ foi carregado com sucesso!!!✅';
        document.getElementById('QRCodeImagem').src = conteudoQRcode
        document.querySelector('#QRCodeImagem').style.border = "20px solid white"
        document.querySelector('#QRCodeImagem').style.borderRadius = "10px"
    }
    imgQRCode.onerror = function(){
        mensagem.textContent = '❌Error! Seu QRCode não carregou. Verifique o campo e tente novamente!!';
    }


    imgQRCode.src = conteudoQRcode

}