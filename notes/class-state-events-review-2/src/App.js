import React, {Component} from 'react'

class App extends Component{
    constructor() {
        super()
        this.state={
            nameInput: "",
            ageInput: "",
            names: []
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // alert(this.state.nameInput)
        this.setState(prevState =>{
            return {
                nameInput: "",
                ageInput: "",
                names: [...prevState.names, this.state.nameInput]
           }
        })
}
    render() {
        // this.state.names.map()
        return (
            <div>
                <h1>{this.state.nameInput}</h1>
                <h1>{this.state.ageInput}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleChange} placeholder="Name"/>
                    <input type="text" name="ageInput" value={this.state.ageInput} onChange={this.handleChange} placeholder="age"/>
                    <button>Submit</button>
                </form>
                <div>
                    {this.state.names.map((name, i)=> <h1 key={i}>{name}</h1>)}
                </div>
            </div>
        )
    }
}

export default App