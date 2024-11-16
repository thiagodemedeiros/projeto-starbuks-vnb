import React from "react";
import './Sobre.sass'
import imgLado from './img/img1.png'
import Button from "../Button/Button";

function Sobre () {
    return (
        <section className="sobre">
            <img src={imgLado}></img>
            
            <div className="sobre-texto">
                <h1>PREPARAÇÃO</h1>
                <h2>Níveis de torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <Button/>
            </div>
        </section>
    )
}

export default Sobre