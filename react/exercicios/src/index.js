import React from 'react'
import ReactDOM from 'react-dom'

// import {BoaTarde, BoaNoite} from './componentes/Multiplos'


// ReactDOM.render(
//     <div>
//         <BoaTarde nome="joão"/>
//         <BoaNoite nome="maria"/>
//     </div>
//     ,document.getElementById('root')
// )
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(
    <div>
        <Pai nome="Maria" sobrenome="silva">
        <Filho nome="Pedro" />
        <Filho nome="Ana"  />
        <Filho nome="Maicon" />
    </Pai>

    </div>
    ,document.getElementById('root')
)