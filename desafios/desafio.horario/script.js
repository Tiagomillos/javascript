function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'imagens/dia.png'
    document.body.style.background = '#966b0fff'  
    }
else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#5a1e07dc'
    }
else {
    //BOA NOITE!
    img.src = 'imagens/noite.png'
    document.body.style.background = '#0d0122ff'
    }
}