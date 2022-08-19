import React from "react";



function Location(props){

        return(
            <>
            <div className='location-individual'>
                <div>
                <img src={props.journey.imageUrl} alt={`${props.journey.title}`}/>
                </div>
                <div className="location-info">
                    <img src='./images/location.png' alt='pin-point' className="pin-point"/><p className="location">{props.journey.location}</p>
                    <p><a href={props.journey.googleMapsUrl}target='_blank' rel="noreferrer">View on Google Maps</a></p>
                    <h1>{props.journey.title}</h1>
                    <p>{props.journey.description}</p>
                </div>
            </div>
            <hr />
            </>
        )
}

export default Location