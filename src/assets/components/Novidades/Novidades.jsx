import React from "react";
import './Novidades.sass'
import imgLado from './img/img1.png'
import Button from "../Button/Button";

function Novidades () {
    return (
        <section className="novidades">
            <div className="novidades-texto">
                <h1>PREPARAÇÃO</h1>
                <h2>Níveis de torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <Button/>
            </div>

            <img src={imgLado}></img>
        </section>
    )
}

export default Novidades