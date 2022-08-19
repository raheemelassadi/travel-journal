import React, { Component } from "react";
import Header from "./components/Header";
import './app.scss'

class App extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        <Header /> 
      </div>
    )
  }
}

export default App
