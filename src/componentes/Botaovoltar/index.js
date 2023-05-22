import React from "react";
import { Link } from "react-router-dom";

const Botaovoltar = () => (
    <div className="area-botao">
        <Link className="botao-voltar" to={'/'}>voltar</Link>
    </div>
);
export default Botaovoltar;