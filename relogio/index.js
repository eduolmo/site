let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

setInterval(() => {
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    if(hora < 10){
        hora = '0' + hora
    }
    if(minuto < 10){
        minuto = '0' + minuto
    }
    if(segundo < 10){
        segundo = '0' + segundo
    }

    horas.innerHTML = hora
    minutos.innerHTML = minuto
    segundos.innerHTML = segundo

})


