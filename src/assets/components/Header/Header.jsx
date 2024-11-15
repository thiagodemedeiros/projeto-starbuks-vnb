import React from "react";
import './Header.sass'
import logo from './img/logo 1.png'

function Header () {
    return (
        <section className="header">
            <img src={logo}></img>
        </section>
    )
}

export default Header