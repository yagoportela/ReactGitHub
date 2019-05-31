import React from 'react';
import './Following.scss'

const Following = ({ following }) => {
    if (following.length > 0) {
        return (
            <div className="following">
                <h2>Seguindo</h2>
                {following.map((valor, index) => (
                    <div key={index} className="info">
                        <div className="img">
                            <img src={valor.avatar} alt="avatar follow" />
                        </div>
                        <ul className="dados">
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

Following.defaultProps = {
    following: []
}

export default Following;