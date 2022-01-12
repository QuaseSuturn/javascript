function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fyear = document.getElementById('txtano')
    var res = document.getElementById('res')
    if((fyear.value.length == 0) ||  (fyear.value > ano)){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var age = ano - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if(fsex[0].checked){
            gender = 'Homem'
            if(age >= 0 && age < 10){
                img.setAttribute('src', 'estilo/foto-bebe-m.png')
            }else if(age < 21){
                img.setAttribute('src', 'estilo/foto-jovem-m.png')
            }else if(age < 50){
                img.setAttribute('src', 'estilo/foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'estilo/foto-idoso-m.png')
            }
        }else if(fsex[1].checked){
            gender = 'Mulher'
            if(age >= 0 && age < 10){
                img.setAttribute('src', 'estilo/foto-bebe-f.png')
            }else if(age < 21){
                img.setAttribute('src', 'estilo/foto-jovem-f.png')
            }else if(age < 50){
                img.setAttribute('src', 'estilo/foto-adulto-f.png')
            }else{
                img.setAttribute('src', 'estilo/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
        res.appendChild(img)
    }
}