import React from 'react';
import './Repositorios.scss'

const Repositorios = ({ repositorios }) => {
   
    if (repositorios.length > 0)
        return (
            <div className="repositorios">
                <h2>Repositórios</h2>

                <ul className="repositorio">
                    <li className="nomeRepositorio"><label>Nome:</label></li>
                    <li className="idRepositorios"><label>ID:</label></li>
                    <li className="url"><label>URL:</label></li>
                    <li className="criado"><label>Criado:</label></li>
                </ul>
                
                {repositorios.map((valor, index) => (
                    <ul key={index} className="repositorio">
                        <li className="nomeRepositorio">{valor.nomeRepositorio}</li>
                        <li className="idRepositorios">{valor.idRepositorios}</li>
                        <li className="url">{valor.url}</li>
                        <li className="criado">{valor.criado}</li>
                    </ul>

                ))}
            </div>
        )
    

    return null;
}

Repositorios.defaultProps = {
    repositorios: []
}

export default Repositorios;