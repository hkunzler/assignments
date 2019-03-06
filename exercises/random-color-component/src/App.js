import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            colors: []
        }
    }
    componentDidMount() {
        axios.get('http://www.colr.org/json/colors/random/7').then(response => {
            this.setState({
                colors: response.data.colors
            })
        }).catch(error => console.log(error))
    }
   
    render() {
        const mappedColors = this.state.colors.map((item) => {
            return (
                <div>
                    <h3>{item.hex}</h3>

                </div>
            )
        })
        document.body.style = `background: #${this.state.colors[0] && this.state.colors[0].hex}`

        console.log(this.state.colors)
            
        return (
            <div>
                
            </div>
        );
    }
}

export default App