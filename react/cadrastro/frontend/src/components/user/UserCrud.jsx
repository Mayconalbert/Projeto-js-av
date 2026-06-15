import React, {component} from "react";
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadatros de usuário: Incluir, Lista, Alterar e Excluir'  
}

export default class UserCrud extends component {
    render() {
        return (
            <Main {...headerProps}>
                Cadrátro de Usuário
            </Main>
        )   }

}