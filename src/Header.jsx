import React from "react"
import globe_icon from "/globe_icon.svg"

export default function Header(){
    return (
        <header>
            <img src={globe_icon}/>
            <h1 className="header--title">my travel journal.</h1>
        </header>
        
    )
}