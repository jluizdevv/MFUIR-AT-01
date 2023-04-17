import React from "react"
import Styles from './Styles.module.css'
import Atividades from "./atividades"

const CardM = () => {
    return(
      <div>
       <div className={Styles.headersMenus}>
        <p>
          <strong>Funções</strong>
        </p>
        </div>
        <div className={Styles.containerCardsMedium}>
      <Atividades
      numero='1'
      titulo='Adicionar arquivo'
      descricao='Criar novo arquivo' />
      <Atividades
      numero='2'
      titulo='Novo Evento'
      descricao='Criar novo evento' />
      <Atividades
      numero='3'
      titulo='Caixa de email'
      descricao='Verificar emails' />
      <Atividades
      numero='4'
      titulo='Enviar arquivos ou receber'
      descricao='Verificar os arquivos' />
      </div>
      </div>
    )
}

export default CardM