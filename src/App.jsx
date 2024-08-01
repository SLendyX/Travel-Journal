import React from "react"
import Place from "./Place.jsx"
import Header from "./Header.jsx"
import data from "./data.js"

export default function App(){
  return (
    <>
    <Header />
      <Place 
        key="1"
        item = {data[0]}
      />
    </>
  )
}