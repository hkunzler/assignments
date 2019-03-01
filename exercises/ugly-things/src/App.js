import React, { Component } from 'react'
import {withUglies} from './context/UglyProvider.js'

class App extends Component{
    componentDidMount() {
       this.props.getUglies()
    }
    render() {
        return (
            <div>
                <h1>UGLY THINGS</h1>
                {this.props.uglies.map(ugly => (
                    <div style={{ border: 'solid black', margin: 5 }}>
                        <h1>{ugly.title}</h1>
                        <h3>{ugly.description}</h3>
                        <div style={{backgroundImage: `url(${ugly.imgURL})`, backgroundSize: 'cover'}}></div>
                    </div>
                ))}
            </div>
        )
    }
}

export default withUglies(App)