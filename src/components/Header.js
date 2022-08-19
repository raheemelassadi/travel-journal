import React, { Component } from "react"
import '../header.scss'



class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="header-div">
                <img src="./images/globe.png" alt="earth logo"/><h1>my travel journal.</h1>
            </div>
        )
    }
}

export default Header
