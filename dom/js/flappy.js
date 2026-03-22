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
const b = new pardebarreiras(700, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)