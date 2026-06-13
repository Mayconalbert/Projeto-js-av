import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Logo from './Logo'
import Nav from './Nav'
import Home from '../home/Home'
import Footer from './Footer'

export default (props) => (
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>
)