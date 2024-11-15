import React from "react";
import './Header.sass'
import logo from './img/logo 1.png'

function Header () {
    return (
        <section className="header">
            <img src={logo}></img>

            <ul>
                <li>Home</li>
                <li>Novidades</li>
                <li>Sobre</li>
            </ul>
        </section>
    )
}

export default Header