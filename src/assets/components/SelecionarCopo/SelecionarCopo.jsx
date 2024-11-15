import React from "react";
import { useState } from 'react';
import './SelecionarCopo.sass';

function SelecionarCopo() {
    const [copo, setCopo] = useState(0);

    function copoEscolhido(copoSelecionado) {
        setCopo(copoSelecionado)
    }

    let backColorCopo = '#2600ff'
    let backColorFundo = '#00b7ff'

    if (copo == 0) {
        backColorCopo = '#2600ff'
        backColorFundo = '#00b7ff'
    }
    if (copo == 1) {
        backColorCopo = '#00ff6a'
        backColorFundo = '#a6ff00'
    }
    if (copo == 2) {
        backColorCopo = '#005180'
        backColorFundo = '#f70ea9'
    }

    const copoStyle = {
        backgroundColor: backColorCopo
    };

    const fundoStyle = {
        backgroundColor: backColorFundo
    };

    console.log(copo)

    return (
    <section>
        <div className="copo-fundo">
            <div className="copo" style={copoStyle}></div>
            <div className="fundo" style={fundoStyle}></div>
        </div>

        <div className="selecionarcopo-buttons">
            <button onClick={() => copoEscolhido(0)}>Copo 1</button>
            <button onClick={() => copoEscolhido(1)}>Copo 2</button>
            <button onClick={() => copoEscolhido(2)}>Copo 3</button>
        </div>
    </section>
    )
};

export default SelecionarCopo;