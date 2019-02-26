import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            nameInput: "",
            nameList: []
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                nameList: [...prevState.nameList, this.state.nameInput],
                nameInput: " "
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.nameInput}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="nameInput" value={this.state.inputName} onChange={this.handleChange} placeholder="Name" />
                    <button>Submit</button>
                </form>
                <ol>
                    {this.state.nameList.map((name, i) => <li key={i}>{name}</li>)}
                </ol>
            </div>
        )
    }
}

export default App