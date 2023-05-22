import React from "react";
import Botaovoltar from "../../Botaovoltar";
import './style.css';
import Card4 from './Card4/index';
import Card5 from './Card5/index';
import Card6 from './Card6/index';


export default function Dodge() {
    return(
        <div className="paiDodge">

            <div className="logo-d">
            <h1>Dodge</h1>
            </div>

            <div className="cards-d">
                <Card4 />
                <Card5 />
                <Card6 />
            </div>

            <div className="botao-voltar-2">
            <Botaovoltar />
            </div>
            
        </div>
        
    );
}