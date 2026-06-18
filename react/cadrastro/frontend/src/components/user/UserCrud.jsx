import React, {Component} from "react";
import axios from 'axios'
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadatros de usuário: Incluir, Lista, Alterar e Excluir'  
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {
    state = { ...initialState }

    clear() {
        this.setState({user: initialState.user})
    }
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post' // put altera e o post incluir
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method] (url, user)
         .then(resp => {
            const list = this.getUpadatedList(resp.data)
            this.setState({user: initialState.user, list })
         }) 

    }

    getUpadatedList(user){
        const list = this.state.list.filter(u = u.id !== user.id)
        list.unshift(user)
        return list
    }
    
    render() {
        return (
            <Main {...headerProps}>
                Cadrátro de Usuário
            </Main>
        )   }

}