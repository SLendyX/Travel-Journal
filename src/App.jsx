import React from "react"
import Place from "./Place.jsx"
import Header from "./Header.jsx"
import data from "./data.js"

export default function App(){
  const places = data.map((place, index) =>
    <Place 
      key={index}
      item={place}
    />
  )

  return (
    <>
      <Header />
      {places}
    </>
  )
}