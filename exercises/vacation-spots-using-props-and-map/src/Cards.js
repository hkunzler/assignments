import React from 'react'
import Details from './Details.js'

const Cards = props => {
    const vacationSpots = props.cards.map((vacation, i) =>
        <Details
            key={i}
            place={vacation.place}
            price={vacation.price}
            timeToGo={vacation.timeToGo}
        />
    ) 
    return (
        <div>
            <h1>Vacation Spots</h1>
            <ul>{vacationSpots}</ul>
        </div>
    )
}

export default Cards