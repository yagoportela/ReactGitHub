

import React from 'react';

const Repositorios = () => {
    return (
        <div class="repositorios">
            <h2>Repositórios</h2>

            <ul class="repositorio">
                <li class="nomeRepositorio"><label>Nome:</label></li>
                <li class="idRepositorios"><label>ID:</label></li>
                <li class="url"><label>URL:</label></li>
                <li class="criado"><label>Criado:</label></li>
            </ul>

            <ul class="repositorio">
                <li class="nomeRepositorio">Complexidade</li>
                <li class="idRepositorios">76039013</li>
                <li class="url">https://github.com/yagoportela/Complexidade</li>
                <li class="criado">2016-12-09T13:45:57Z</li>
            </ul>

            <ul class="repositorio">
                <li class="nomeRepositorio">NovembroAzul</li>
                <li class="idRepositorios">75482210</li>
                <li class="url">https://github.com/yagoportela/NovembroAzul</li>
                <li class="criado">2016-12-03T15:32:59Z</li>
            </ul>

        </div>
    )
}

export default Repositorios;