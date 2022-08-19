import React from "react";



function Location(props){

        return(
            <div>
                <div>
                <img src={props.journey.imageUrl} alt={`${props.journey.title}`}/>
                </div>
                <span><img src='./location.png' alt='pin-point'/>{props.journey.location}</span><p><a href={props.journey.googleMapsUrl}>View on Google Maps</a></p>
                <h1>{props.journey.title}</h1>
            </div>
        )
}

export default Location