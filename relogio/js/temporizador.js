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
        iniciou = !iniciou

        let mil = milesimos.value
        let s = segundos.value
        let m = minutos.value
        let h = horas.value

        if(mil == ''){
            mil = '00'
        }
        if(s == ''){
            s = '00'
        }
        if(m == ''){
            m = '00'
        }
        if(h == ''){
            h = '00'
        }
        
        if(s < 10 && s.length < 2){
            s = '0' + s
        }
        if(m < 10 && m.length < 2){
            m = '0' + m
        }
        if(h < 10 && h.length < 2){
            h = '0' + h
        }
        
        intervalo = setInterval(() => {
            mil = milesimos.value
            mil -= 5

            if(mil <= 0){
                if(s >= 1){
                    mil = '99'
                    s--
                    if(s < 10){
                        s = '0' + s
                    }
                }

                if(s == 0){
                    if(m >= 1){
                        s = 60
                        m--
                        if(m < 10){
                            m = '0' + m
                        }
                    }

                    if(m == 0){
                        if(h >= 1){
                            m = 60
                            h--
                            if(h < 10){
                                h = '0' + h
                            }
                        }
                    }
                }
            }

            milesimos.value = mil
            segundos.value = s
            minutos.value = m
            horas.value = h

            if(s <= 00 && mil <= 0){
                clearInterval(intervalo)
                milesimos.value = '00'
                iniciou = false
            }

        },50)
    }
})

pausar.addEventListener('click',() => {
    if (iniciou) {
        clearInterval(intervalo);
        iniciou = false;
    }
})


