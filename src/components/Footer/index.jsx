import React from "react";

const Styles = {
  divFooter: {
    border: '1px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }
}

const Footer = () => {
  return (
    <div style={Styles.divFooter}>
      <p>Meu dashboard</p>
    </div>
  );
};

export default Footer;
