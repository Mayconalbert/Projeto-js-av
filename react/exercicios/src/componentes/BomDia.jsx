import React, {Fragment}from 'react'


export default props => [
    <h1 key="h1">Bom Dia {props.nome}</h1>,
    <h2 key="h2">Ate mais!</h2>
] // temo como chamar isso de array de elementos, e tem que colocar o key para cada elemento, para o react identificar cada um deles.

// export default props => 
//     <Fragment>
//     <h1>Bom dia {props.nome}!</h1>
//     <h2>Até mais!</h2>
//     </Fragment>