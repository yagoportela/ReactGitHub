import React from 'react';
import PropTypes from "prop-types";

const BarraPesquisa = ({handleEvent}) => {
    return (
        <div className="barraPesquisa">
            <input type="text" placeholder="Pesquisa" onKeyUp={handleEvent}/>
        </div>
    )
}

BarraPesquisa.protoTypes = {
    handleEvent: PropTypes.func.isRequired
}

export default BarraPesquisa;