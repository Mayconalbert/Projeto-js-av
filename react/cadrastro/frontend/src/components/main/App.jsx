import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Footer from '../template/Footer'
import Routes from './Routes'   




function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                {/* O seu componente de rotas dinâmicas */}
                <Routes />
                <Footer />
            </div>
        </BrowserRouter> 
    )
}

export default App