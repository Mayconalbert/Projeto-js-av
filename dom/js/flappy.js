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

function Barreiras(altura, largura, abertura, espaso, nodificarPonto ){
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

            const meio =   largura / 2 
            const cruzouoMeio = par.getx() + deslocamento >= meio 
                && par.getx() < meio
        })
    }
}

const barreiras = new Barreiras(700, 1200, 200, 400)
const areDojogo = document.querySelector('[wm-flappy]')
barreiras.pares.forEach(par => areDojogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
}, 20)