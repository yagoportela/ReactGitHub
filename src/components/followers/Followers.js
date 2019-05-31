import React from 'react';
import './Followers.scss'

const Followers = ({followers}) => {
    if (followers.length > 0){
        return (
            <div className="followers">
                <h2>Seguindores</h2>
                {followers.map((valor, index) => (
                    <div key={index} className="info">
                        <div className="img">
                            <img src={valor.avatar} alt="avatar follow" />
                        </div>
                        <ul>
                            <li className="nome">
                                <label>Nome:</label> {valor.nome}
                            </li>
                            <li className="id">
                                <label>Id:</label> {valor.id}
                            </li>
                            <li className="url">
                                <label>Url:</label> {valor.url}
                            </li>
                        </ul>
                    </div>
                ))}    
            </div>
        )
    }

    return null;
}

Followers.defaultProps = {
    followers: []
}

export default Followers;