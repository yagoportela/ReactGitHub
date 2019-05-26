import React from 'react';

const Informacoes = () => {
    return (
        <div class="conteudo">
            <h2 class="title">Informações</h2>
            <div class="conteudoInfo">
                <div class="img">
                    <img src="https://avatars2.githubusercontent.com/u/18448247?v=4" alt="avatar"/>
                </div>
                <div class="info">
                <div class="nome componente">
                    <label>Nome:</label> yagoportela
                </div>
                <div class="id componente">
                    <label>Id:</label> 18448247
                </div>
                <div class="url componente">
                    <label>Url:</label> https://api.github.com/users/yagoportela
                </div>
                <div class="repositorioUrl componente">
                    <label>Repositorios:</label> https://api.github.com/users/yagoportela/repos
                </div>
                <div class="followers componente">
                    <label>Followers:</label> 3
                </div>
                <div class="following componente">
                    <label>Following:</label> 4
                </div>
                </div>
            </div>
        </div>
    )
}

export default Informacoes;