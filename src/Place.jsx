import React from "react"
import map_icon from "../public/map_icon.svg"

export default function Place(props){
    props = props.item
    console.log(props)
    return (
        <div className="card">
            <img className="card--image" src={props.imageUrl} alt={props.title}/>
            <div className="card--text-container">

                <span className="card--location">
                    <img className="map-icon" src={map_icon} alt="map icon"/>
                    <span className="location-name">{props.location}</span>
                    <a className="location-link" 
                    href={props.googleMapsUrl}
                    target="_blank"
                    >
                    View on Google Maps
                    </a>
                </span>

                <h2 className="card--title">{props.title}</h2>

                <time className="visit-period">
                    {props.startDate} - {props.endDate}
                </time>

                <p className="card--description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}