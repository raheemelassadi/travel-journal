import React, { Component } from "react";
import Header from "./components/Header";
import './app.scss'
import Location from "./components/Location";
import data from "./data";

function App(){

    const locations = data.map(journey => {
      return <Location 
                key={journey.id}
                journey={journey}
            />
    })  


    return(
      <>
        <div>
          <Header /> 
        </div>
        <main className="locations-container">
          {locations}
        </main>
    </>
    )
  }

export default App
