import React from 'react'
import Cards from './Cards.js'

const App = () => {
    let vacationSpots = [
        {
            place: "Meridian, Idaho",
            price: "40",
            timeToGo: "Spring"
        }, {
            place: "Cancun",
            price: 900,
            timeToGo: "Winter"
        }, {
            place: "China",
            price: 1200,
            timeToGo: "Fall"
        }, {
            place: "Russia",
            price: 1100,
            timeToGo: "Summer"
        }, {
            place: "Lebanon",
            price: 400,
            timeToGo: "Spring"
        }
    ]
    return (
        <div>
            <Cards cards={vacationSpots}/>
        </div>
    )
}

export default App