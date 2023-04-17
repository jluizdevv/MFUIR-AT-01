import React from "react"
import Styles from './Styles.module.css'

const Atividades = (props) => {
    return(
    <div className={Styles.containerCardM}>
            <div className={Styles.imgCard}>{props.numero}</div>
            <div className={Styles.textos}>
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
            </div>
        </div>
    )
}

export default Atividades