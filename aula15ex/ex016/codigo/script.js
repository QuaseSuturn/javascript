function verificar(){
    var txtnumero = document.getElementById('numero')
    var numero = Number(txtnumero.value)
    var tab = document.getElementById('seltab')
    if(txtnumero.value.length == 0){
        window.alert('Digite um número!')
    }else{
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
     
}

    
