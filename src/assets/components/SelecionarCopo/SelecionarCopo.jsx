import React from "react";
import { useState } from 'react';
import './SelecionarCopo.sass';
import copo0 from './img/c0.png'
import fundo0 from './img/f0.png'
import copo1 from './img/c1.png'
import fundo1 from './img/f1.png'
import copo2 from './img/c2.png'
import fundo2 from './img/f2.png'
import Button from "../Button/Button";

function SelecionarCopo() {
    const [copo, setCopo] = useState(0);

    function copoEscolhido(copoSelecionado) {
        setCopo(copoSelecionado)
    }

    const imagemCopo = [copo0,copo1,copo2]
    const imagemFundo = [fundo0,fundo1,fundo2]

    console.log(copo)

    return (
    <section className="selecionarcopo">
        <div className="selecionarcopo-texto">
            <h2>Mais que Café</h2>
            <h3>Isso é <span>Starbucks</span></h3>
            <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
            <Button/>
        </div>

        <div className="selecionarcopo-itens">
            <div className="selecionarcopo-buttons">
                <button onClick={() => copoEscolhido(0)}><img src={copo0}></img></button>
                <button onClick={() => copoEscolhido(1)}><img src={copo1}></img></button>
                <button onClick={() => copoEscolhido(2)}><img src={copo2}></img></button>
            </div>

            <div className="copoefundo">
                <img className="copoefundo-copo" src={imagemCopo[copo]}></img>
                <img className="copoefundo-fundo" src={imagemFundo[copo]}></img>
                {/* <div className="copoefundo-fundo-mobile"></div> */}
            </div>
        </div>
    </section>
    )
};

export default SelecionarCopo;