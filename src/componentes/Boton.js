import React from 'react'

export default class Boton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    myClick = () => {
        window.alert("La fecha de hoy es: " + this.state.date);
    }
    render = () => {
        return(
            <button onClick={this.myClick}>Hola mundo</button>
        )
    }
}