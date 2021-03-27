// Code CoordinatesButton Component Here


import React, { Component } from 'react'


export default class CoordinatesButton extends Component {
  
    handleClickEvent = e => {
      const myArray = [e.clientX, e.clientY]
      this.props.onReceiveCoordinates(myArray)
    } 


  
  render() {
    return (
      <button onClick={this.handleClickEvent}>"Coord Button"</button>
    )
  }
}
