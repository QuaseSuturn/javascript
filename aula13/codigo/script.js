function carregar(){
var titulo = document.getElementById("hora_do_dia")
var img = document.getElementById("img")
var data = new Date()
var hora = 18
    
if(hora >= 0 && hora < 12){
    titulo.innerText = (`Agora são ${hora} horas. Bom dia!`)
    document.body.style.background = 'rgb(255, 224, 138)' 
    img.src = 'estilo/foto-manha-m.png'
}else if(hora >= 12 && hora < 18){
    titulo.innerText = (`Agora são ${hora} horas. Boa tarde!`)
    document.body.style.background = 'rgb(247, 185, 92)'
    img.src = 'estilo/foto-tarde-m.png'
}else{
    titulo.innerText = (`Agora são ${hora} horas. Boa noite!`)
    document.body.style.background = 'rgb(34, 34, 34)'
    img.src = 'estilo/foto-noite-m.png'
}
}


