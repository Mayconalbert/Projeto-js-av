import './Nav.css'
import React from 'react'
// Importamos o componente Link para fazer a mágica do React acontecer
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <aside className="menu-area">
            <nav className="menu">
                {/* Removido o '#' e trocado 'a href' por 'Link to' */}
                <Link to="/">
                    <i className="fa fa-home"></i> Início
                </Link>
                {/* Corrigido para '/user' (singular) para bater com suas rotas */}
                <Link to="/user">
                    <i className="fa fa-users"></i> Usuários
                </Link>
            </nav>
        </aside>
    )
}

export default Nav