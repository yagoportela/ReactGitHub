import React from 'react';
import PropTypes from "prop-types";

const Informacoes = ({userInfo}) => {
    return (
        <div className="conteudo">
            <h2 className="title">Informações</h2>
            <div className="conteudoInfo">
                <div className="img">
                    <img src="https://avatars2.githubusercontent.com/u/18448247?v=4" alt="avatar"/>
                </div>
                <div className="info">
                <div className="nome componente">
                        <label>Nome:</label> {userInfo.nome}
                </div>
                <div className="id componente">
                    <label>Id:</label> {userInfo.id}
                </div>
                <div className="url componente">
                    <label>url:</label> {userInfo.url}
                </div>
                <div className="repositorioUrl componente">
                        <label>Repositorios:</label> {userInfo.repositorioUrl}
                </div>
                <div className="followers componente">
                    <label>Followers:</label> {userInfo.followers}
                </div>
                    <div className="following componente">
                    <label>Following:</label> {userInfo.following}
                </div>
                </div>
            </div>
        </div>
    )
}



Informacoes.propTypes = {
    userInfo: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        repositorioUrl: PropTypes.string.isRequired,
        followers: PropTypes.number,
        following: PropTypes.number
    })
}


export default Informacoes;