function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprasTv50 = trabalho1 && trabalho2
    //const comprasTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    return { comprarSorvete, comprasTv50, manterSaudavel}

}
console.log(compras(true, true))