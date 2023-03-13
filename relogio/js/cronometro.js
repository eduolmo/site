let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

let iniciar = document.querySelector('#iniciar')
let pausar = document.querySelector('#pausar')

var intervalo = function(){}

let iniciou = false
iniciar.addEventListener('click', () => {
    if(!iniciou){
        iniciou = !iniciou
        let s = parseInt(segundos.innerHTML)
        let m = parseInt(minutos.innerHTML)
        let h = parseInt(horas.innerHTML)
        if(m < 10){
            m = '0' + m
        }
        if(h < 10){
            h = '0' + h
        }

        intervalo = setInterval(() => {
            s++
            
            if(s == 60){
                s = 0
                m++
                if(m < 10){
                    m = '0' + m
                }
            }
            
            if(m == 60){
                m = 0
                h++
                if(m < 10){
                    m = '0' + m
                }
                if(h < 10){
                    h = '0' + h
                }
            }
            
            if(s < 10){
                s = '0' + s
            }
            segundos.innerHTML = s
            minutos.innerHTML = m
            horas.innerHTML = h

        },1000)
    }
})

pausar.addEventListener('click', () => {
    if (iniciou) {
        clearInterval(intervalo);
        iniciou = false;
    }
})



/*
function cronometrar() {
    if(!iniciou){
        iniciou = !iniciou
        let s = 0
        let m = 0
        let h = 0
        if(m < 10){
            m = '0' + m
        }
        if(h < 10){
            h = '0' + h
        }
        var intervalo = setInterval(() => {
            s++
            
            if(s == 60){
                s = 0
                m++
                if(m < 10){
                    m = '0' + m
                }
            }
            
            if(m == 60){
                m = 0
                h++
                if(m < 10){
                    m = '0' + m
                }
                if(h < 10){
                    h = '0' + h
                }
            }
            
            if(s < 10){
                s = '0' + s
            }
            segundos.innerHTML = s
            minutos.innerHTML = m
            horas.innerHTML = h

        },1000)
    }
}
*/


