import React, { Component } from 'react'

// 1. Create a class Component
// 2. Use componentDid Mount and componentWillMount to add a window keydown event listener
// 3, Use styling changes on key events by setting state

class App extends Component {
    constructor() {
        super()
        this.setState({
            bgColor: "blue",
            fontSize: 20
        })
    }

    componentDidMount() {
        // axios request
        // save response data in state
        window.addEventListener("keydown", (e) => {
            if (e.which === 71) {
                this.setState({
                    bgColor: "green",
                    fontSize: 50
                })
            }
        })
    }
    componentWillUnmount() {
        window.removeEventListener("keydown")
    }
    render() {
        return (
            <div style={{ backgroundColor: this.state.bgColor,  fontSize: this.state.fontSize}}>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default App