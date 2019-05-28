

import React from 'react';

const Repositorios = () => {
    return (
        <div className="repositorios">
            <h2>Repositórios</h2>

            <ul className="repositorio">
                <li className="nomeRepositorio"><label>Nome:</label></li>
                <li className="idRepositorios"><label>ID:</label></li>
                <li className="url"><label>URL:</label></li>
                <li className="criado"><label>Criado:</label></li>
            </ul>

            <ul className="repositorio">
                <li className="nomeRepositorio">Complexidade</li>
                <li className="idRepositorios">76039013</li>
                <li className="url">https://github.com/yagoportela/Complexidade</li>
                <li className="criado">2016-12-09T13:45:57Z</li>
            </ul>

            <ul className="repositorio">
                <li className="nomeRepositorio">NovembroAzul</li>
                <li className="idRepositorios">75482210</li>
                <li className="url">https://github.com/yagoportela/NovembroAzul</li>
                <li className="criado">2016-12-03T15:32:59Z</li>
            </ul>

        </div>
    )
}

export default Repositorios;