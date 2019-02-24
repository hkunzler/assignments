import React from 'react'
import data from './superHeroes.json'

class App extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        
        const mappedSuperHeroes = data.superHeroes.map((hero, i) =>
            < div style = {
                    {
                        backgroundImage: `url(${hero.imgURL})`,
                        backgroundSize: "cover",
                        height: 500 
                        }} >
                <h1>Name: {hero.name}</h1>
                <p>Catchphrase: {hero.catchPhrase}</p>
            </div>)
        return (
            <div className="superheroes-container">
                {mappedSuperHeroes}
            </div>
        )
    }
}

export default App