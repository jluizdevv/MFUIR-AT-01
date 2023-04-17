import React from "react";
import './index.css'
import MenuIcon from '@mui/icons-material/Menu';
import Datas from './datas'

const Header = (props) => {
  return (
    <div className="container">
      <div className="divInput">
        <MenuIcon  className="menuIcon"/>
      <input type="text" placeholder="Procurar" className="input"/>
    </div>
    <h1 className="h1header"> {props.nome}</h1>
    <div className="datasDiv">
      <Datas 
      data='17'
      evento='Ir ao dentista'/>
      <hr />
      <Datas 
      data='19'
      evento='Estágio'/>
      <hr />
      <Datas 
      data='19'
      evento='Futebol'/>
      </div>
    </div>
  );
};

export default Header;
