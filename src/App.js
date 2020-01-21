import React from 'react';
import Boton1 from './componentes/Boton'

export default class App extends React.Component {
    render = () => {
      return(
      <div>
        Programa React con Javascript ES6 compilado. Se ejecuta sin problemas en Internet Explorer 11
        <br/>
        <Boton1/>
      </div>);
    }
  }