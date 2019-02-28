import React, {Component} from 'react'
import axios from 'axios'

// Client => Server => API => Database => API => Server => Client

class App extends Component {
    constructor() {
        super()
        this.state = {
            rickAndMortyCharacters: []
        }
    }

    componentDidMount() {
        axios.get("https://rickandmortyapi.com/api/character").then(response => {
            this.setState({
                rickAndMortyCharacters: response.data.results
            })
        }).catch(error => console.log(error))
    }

    render() {
        // console.log(this.state);
        const mappedCharacters = this.state.rickAndMortyCharacters.map((item) => {
            return (
                <div key={item.id} style = {{backgroundImage: `url(${item.image})`, height: 200, backgroundSize: 'cover'}}>
                    <h1>{item.name}</h1>
                </div>
            )
        })
        return (

            <div>
                {mappedCharacters}
            </div>
        )
    }
}

export default App