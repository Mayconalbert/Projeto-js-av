import React, {Component} from "react";
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadatros de usuário: Incluir, Lista, Alterar e Excluir'  
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadrátro de Usuário
            </Main>
        )   }

}