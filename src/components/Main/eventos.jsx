import React from 'react'
import Styles from './Styles.module.css'

const Evento = (props) => {
    return(
        <div className={Styles.containerEvento}>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
            <p>{props.data}</p>
        </div>
    )
}

export default Evento