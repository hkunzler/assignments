import React from 'react'
import data from './superHeroes.json'
import Superhero from './Superhero.js'
import './style.css'

class App extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        
        const mappedSuperHeroes = data.superHeroes.map((hero, i) => <Superhero
            key={i}
            name={hero.name}
            catchphrase={hero.catchPhrase}
            img={hero.imgURL}
        />)

        return (
            <div className="superheroes-container">
                {mappedSuperHeroes}
            </div>
        )
    }
}

export default App