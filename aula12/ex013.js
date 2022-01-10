var agora = new Date()
var dia_da_semana = agora.getDay()

switch(dia_da_semana){
    case 0:
        console.log('Dia da semana: Domingo.')
    break
    case 1:
        console.log('Dia da semana: Segunda.')
    break
    case 2:
        console.log('Dia da semana: Terça.')
    break
    case 3:
        console.log('Dia da semana: Quarta')
    break
    case 4:
        console.log('Dia da semana: Quinta')
    break
    case 5:
        console.log('Dia da semana: Sexta')
    break
    case 6:
        console.log('Dia da semana: Domingo')
    break
    default:
        console.log('ERRO: Dia inválido.')
    break
}