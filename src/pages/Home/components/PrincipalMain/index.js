import React from "react";
import { Link } from "react-router-dom";

import api from '../../../../services/api';
import { useState, useEffect } from 'react';

import './style.css';
import Position from "rsuite/esm/Overlay/Position";

function PrincipalMain ({listaProdutos, listaImagens}) {

   
    return (
        <>
            <div className="main__Container">

                
                <div className="sugestaoBusca">
                    {/* <h2>Busca por tipo de carro</h2> */}
                    <p>Encontre os melhores carros para você!</p>



                    {listaProdutos.slice(0, 4).map(({ id, nome, categoria }) => {
                        return (
                            <div className="card">
                                {listaImagens.filter(iLista => iLista.produto.id === id).slice(0, 1).map(({ url }) => {
                                    return (
                                        <Link to={`/produto/detalhes/${id}`}>
                                            <img src={ url } alt={`Imagem de carro ${categoria.titulo}`} />
                                        </Link>
                                    )
                                })}
    
                                <div className="legenda">
                                    <p>{ nome }</p>
                                </div>

                            </div>
                        )
                    })}


                    
                </div>

                <div className="blocoLista">

                    <h2>
                        Recomendações
                    </h2>

                    {listaProdutos.slice(0, 8).map(({ id, nome, descricao, cidade, categoria }) => {
                        return (
                            <div className="cartao" key={id}>
                                {
                                    localStorage.getItem('@SESSION') === 'null' ? '' : <span className="heart"></span>
                                }

                                <span className="nota">8.0</span>

                                <div className="cartaoImg">
                                    {listaImagens.filter(iLista => iLista.produto.id === id).slice(0, 1).map(({ id, url }) => {
                                        return (<img src={url} key={id} alt="" />)
                                    })}
                                </div>

                                <div className="cartaoDados">
                                    <span>{categoria.titulo}</span>
                                    <h4>{nome}</h4>
                                    <p>{cidade.nome}</p>
                                    <p>{ descricao.length > 57 ? descricao.slice(0, 57) + "..." : descricao } </p>
                                    <Link to={`/produto/detalhes/${id}`}>
                                        <button >Ver descrição</button>
                                    </Link>
                                </div>

                            </div>
                        )
                    })}
                    
                </div>
                                
            </div>
        </>
    )
}

export default PrincipalMain;

