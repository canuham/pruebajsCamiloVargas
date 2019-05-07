import React, { Component } from 'react';
import './App.scss';

// Componente que renderiza cada celda de la tabla

class Cell extends Component {
  state = {
    editable: false,
    valor: ""
  }

  // Funcion a realizar cuando se detecta un dobleclick en una celda
  _handleDoubleClick = (e) => {
    return (
      this.props.titulo === undefined 
        ? this.setState({ editable: true })
        : console.log("No se puede editar"),
      console.log(" Vacio"+this.state.valor)
      )
  }

  // Funcion que guarda el valor del input al presionar la tecla "Enter"
  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.setState ({ valor: e.target.value, editable: false })
    }
  }

  render (){
    return(
      
      <div 
      className="cell" 
      onDoubleClick={this._handleDoubleClick} 
      style={{ backgroundColor : this.props.color }}>

        {// Condicional para renderizar el titulo o un valor que viene del api o de los cambios del usuario
        }
        {this.props.titulo !== undefined ? this.props.titulo : this.state.valor}

        {// Condicional para renderizar el input
        }
        {this.state.editable === true && <input onKeyDown={this._handleKeyDown}></input> }

      </div>
      
    )
  }
}

// Componente que renderiza una fila

class Row extends Component { 
  render() {
    return(
      <div className="row">
        <Cell titulo = {this.props.titulo} color={this.props.color}/>
        <Cell />
        <Cell />
        <Cell/>
      </div>
    )
  }
}

// Componente principal donde se renderiza la tabla completa 

class App extends Component {
  state = {
    titulos: [ "Nro Apartamentos", "Area mt2" , "Valor mt2" ],
  }
  render () {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Apartamentos</h1>
      {this.state.titulos.map((x,i) => 
        <Row titulo={x} color="lightskyblue" key={i}/>
        )}
    </div>
  )}
}

export default App;
