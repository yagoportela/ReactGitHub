import React from 'react';
import PropTypes from "prop-types";
import './Informacoes.scss'

const Informacoes = ({userInfo}) => {
    if (userInfo.nome.length > 0 || userInfo.id > 0){
        return (
            <div className="conteudo">
                <h2 className="title">Informações</h2>
                <div className="conteudoInfo">
                    <div className="img">
                        <img src={userInfo.avatar} alt="avatar"/>
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
    return null
}

Informacoes.defaultProps = {
    userInfo: {
        nome: '',
        avatar: '',
        id: 0,
        url: '',
        repositorioUrl: '',
        followers: 0,
        following: ''
    }
}

Informacoes.propTypes = {
    userInfo: PropTypes.shape({
        nome: PropTypes.string,
        id: PropTypes.number,
        url: PropTypes.string,
        repositorioUrl: PropTypes.string,
        followers: PropTypes.number,
        following: PropTypes.number
    })
}


export default Informacoes;