import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from "../paginas/paginaInicial";
import PaginaDodge from "../paginas/paginaDodge";
import PaginaShelby from "../paginas/paginaShelby";

const Rotas = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <PaginaInicial /> } />
        <Route path='/Dodge' element={ <PaginaDodge /> } />
        <Route path='/Shelby' element={ <PaginaShelby /> } />
      </Routes>
    </BrowserRouter>  
);

export default Rotas;