import React from "react"

export default function Main(props) {
    return (
        <main>
            <div className="card">
                <div className="imageContainer">
                    <img className="image" src={props.tripData.image} />
                </div>
                <div className="details">
                    <div className="mapDetails">
                        <i class="fas fa-map-marker-alt"></i>
                        <p className="country">{props.tripData.country}</p>
                        <a className="mapsLink" href={props.tripData.mapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className="location">{props.tripData.location}</h2>
                    <div className="tripDetails">
                        <p className="tripDate">{props.tripData.date}</p>
                        <p className="tripSummary">{props.tripData.description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}