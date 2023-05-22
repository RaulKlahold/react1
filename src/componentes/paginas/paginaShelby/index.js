import React from "react";
import './style.css'
import Botaovoltar from "../../Botaovoltar";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";


export default function Shelby() {
    return(
        <div className="shelby-pai">
           <div className="logo">
             <h1>Mustang Shelby</h1>
             </div>

            <div className="Cards">
            <Card1 />
            <Card2 />
            <Card3 />
            </div>
            
            <div className="botaovoltar">
                 <Botaovoltar />
            </div>
        </div>

    );
}