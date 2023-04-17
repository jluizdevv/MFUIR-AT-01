import React from "react";
import Styles from "./Styles.module.css";
import Evento from "./eventos";

const CardG = () => {
  return (
    <div>
      <div className={Styles.headersMenus}>
        <p>
          Meus <strong>Eventos</strong>
        </p>
        <a href="#" className={Styles.linkHeader}>
          Veja Todos
        </a>
        </div>
       
        <div className={Styles.divEventos}>
        <Evento
          titulo="Ir ao dentista"
          descricao="ir ao dentista às 08:30."
          data="17/04/2023"
        />
        
        
        <Evento
          titulo="Estágio"
          descricao="Começar a produzir o app."
          data="19/04/2023"
        />
      </div>
      <div className={Styles.divEventos}>
        <Evento
          titulo="Jogar futebol"
          descricao="Ir para o futebol a noite."
          data="19/04/2023"
        />
        
        <Evento
          titulo="Ir ao dentista novamente"
          descricao="Retorno marcado ao dentista às 09:00."
          data="20/04/2023"
        />
        </div>
      </div>
  );
};

export default CardG;
