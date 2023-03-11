let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

let iniciar = document.querySelector('#iniciar')
let pausar = document.querySelector('#pausar')

let iniciou = false
iniciar.addEventListener('click', cronometrar())

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
        setInterval(() => {
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



