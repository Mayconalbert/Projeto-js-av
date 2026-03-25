function novoelemento (tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoelemento('div', 'barreira')

    const borda = novoelemento('div', 'borda')
    const corpo = novoelemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

const pardebarreiras = function(altura, abertura, x){
    this.elemento = novoelemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturasuperior = Math.random() * (altura - abertura)
        const alturainfeiror = altura - abertura - alturasuperior
        this.superior.setAltura(alturasuperior)
        this.inferior.setAltura(alturainfeiror)

    }
    this.getx = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setx = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setx(x)

}
// const b = new pardebarreiras(700, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaso, notificarPonto ){
    this.pares = [
        new pardebarreiras(altura, abertura, largura),
        new pardebarreiras(altura, abertura, largura + espaso),
        new pardebarreiras(altura, abertura, largura + espaso * 2),
        new pardebarreiras(altura, abertura, largura + espaso * 3)
    ]
    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setx(par.getx() - deslocamento)
            if (par.getx() < -par.getLargura()){
                par.setx(par.getx() + espaso * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2 
            const cruzouoMeio = par.getx() + deslocamento >= meio 
                && par.getx() < meio
                if (cruzouoMeio) {
                    notificarPonto()
                }
        })
    }
}

function Passaro(alturaJogo){
    let voando = false 
    this.elemento = novoelemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.gety = () => parseInt(this.elemento.style.bottom.split('px')[0]) || 0
    this.sety = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false 

    this.animar = () => {
        const novoY = this.gety() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight    
        if (novoY <= 0){
            this.sety(0)
        }else if (novoY >= alturaMaxima){
            this.sety(alturaMaxima)

        }else{
            this.sety(novoY)
        }
    }
    this.sety(alturaJogo / 2)
}

function Progresso() {
    this.elemento = novoelemento('span', 'progreso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos 
    } 

    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areDojogo = document.querySelector('[wm-flappy]')

// areDojogo.appendChild(passaro.elemento)
// areDojogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areDojogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobreposto(elementoA, elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
    && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
    && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidir(passaro, barreiras){
    let colidir = false
    barreiras.pares.forEach(pardebarreiras => {
        if (!colidir) {
            const superior = pardebarreiras.superior.elemento
            const inferior = pardebarreiras.inferior.elemento
            colidir = estaoSobreposto(passaro.elemento, superior)
            || estaoSobreposto(passaro.elemento, inferior)
        }
    })

    return colidir

}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
        const passaro = new Passaro(altura)

        areaDoJogo.appendChild(progresso.elemento)
        areaDoJogo.appendChild(passaro.elemento)
        barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

        this.start = () => {
            // loop do jogo 
            const temporizador = setInterval(() =>{
                barreiras.animar()
                passaro.animar()
                
                if (colidir(passaro, barreiras)) {
                    clearInterval(temporizador)
                }

            }, 20)
        }


    
}

new FlappyBird().start()