import React from "react"
import './App.css';
import Nav from "./Nav.js"
import Main from "./Main.js"
import data from "./data.js"

export default function App() {
  const mains = data.map(tripData => {
    return (
      <Main 
        key={tripData.id}
        tripData={tripData}
      />
    )
  })
  return (
    <>
      <Nav />
      {mains}
    </>
  );
}

