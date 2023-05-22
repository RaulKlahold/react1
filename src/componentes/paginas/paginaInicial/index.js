import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


const paginaInicial = () => (
<div className="Divpai">

<div className="secao-banner">

<h1>Os icônicos Americanos...</h1>
<p>De grande beleza e imponência, vira o sonho de muitos colecionadores!</p>


 </div>
 <div className="barrinha"></div>


   <div className="conteudo-opcao">
        <Link className="opcao-Dodge" to = {"/Dodge"}>Dodge</Link>
        <Link className="opcao-shelby" to = {"/Shelby"}>Shelby</Link>
    </div>
    
    <div className="footer">
        
    </div>

    </div>
    
   
);
export default paginaInicial;
    
