import React from "react";
import './Header.sass'
import { Link } from 'react-router-dom';
import logo from './img/logo 1.png'

function Header () {
    return (
        <section className="header">
            <img src={logo}></img>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Novidades'>Novidades</Link></li>
                <li><Link to='/Sobre'>Sobre</Link></li>
            </ul>
        </section>
    )
}

export default Header