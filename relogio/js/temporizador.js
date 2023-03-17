let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')
let milesimos = document.querySelector('#milesimos')

let iniciar = document.querySelector('#iniciar')
let pausar = document.querySelector('#pausar')

var intervalo = function(){}

let iniciou = false
iniciar.addEventListener('click',() => {
    if(!iniciou){
        console.log("entrou")
        console.log(segundos)
        iniciou = !iniciou
        let mil = parseInt(milesimos.innerHTML)
        let s = parseInt(segundos.innerHTML)
        let m = parseInt(minutos.innerHTML)
        let h = parseInt(horas.innerHTML)
        console.log(mil)
        console.log(s)
        if(s < 10){
            s = '0' + s
        }
        if(m < 10){
            m = '0' + m
        }
        if(h < 10){
            h = '0' + h
        }

        intervalo = setInterval(() => {
            mil = parseInt(milesimos.innerHTML)
            mil -= 5

            if(mil <= 0){
                s--
                mil = '99'
                if(s < 10){
                    s = '0' + s
                }
            }

            if(s == 0){
                s = 60
                m--
                if(s < 10){
                    s = '0' + s
                }
                if(m < 10){
                    m = '0' + m
                }
            }
            
            if(m == 0){
                m = 60
                h--
                if(m < 10){
                    m = '0' + m
                }
                if(h < 10){
                    h = '0' + h
                }
            }
            
            milesimos.innerHTML = mil
            segundos.innerHTML = s
            minutos.innerHTML = m
            horas.innerHTML = h

        },50)


    }
})