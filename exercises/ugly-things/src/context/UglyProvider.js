import React, { Component } from 'react'
import axios from 'axios'

const UglyContext = React.createContext()

class UglyProvider extends Component{
    constructor() {
        super()
        this.state = {
            uglies: [],
            title: '',
            description: '',
            imgURL: ''
        }
    }
    getUglies = () => {
        axios.get('https://api.vschool.io/kunzler-ugly-things/todo').then(response => {
            this.setState({
                uglies:response.data
            })
        }).catch(error => console.log(error))
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const { title, description, imgURL } = this.state
        const newUgly = { title, description, imgURL }
        axios.post('https://api.vschool.io/kunzler-ugly-things/todo', newUgly).then(response => {
            this.setState(prevState => {
                return {
                    uglies: [response.data, ...prevState.uglies],
                    title: '',
                    imgURL: ''
                }
            })
        }).catch(error => console.log(error))
    }
    handleDelete = _id => {
        axios.delete(`https://api.vschool.io/kunzler-ugly-things/todo/${_id}`).then(response => {
            this.setState(prevState => {
                return {
                    uglies: prevState.uglies.filter(ugly => ugly._id !== _id)
                }
            })
        }).catch(error => console.log(error))
    }
    render() {
        const props = {
            uglies: this.state.uglies,
            getUglies: this.getUglies
        }
        return (
            <div>
            <form onSubmit={this.state.handleSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={this.state.handleChange}
                    placeholder="Title" />
                <input
                    type="text"
                    name="description"
                    onChange={this.state.handleChange}
                    placeholder="Description" />
                <input
                    type="text"
                    name="imgURL"
                    onChange={this.state.handleChange}
                    placeholder="Image URL" />
                    <button onClick={() => this.handleDelete(_id)}>Add Ugly Item</button>
                                    <button onClick={() => this.handleDelete(_id)}>Add Ugly Item</button>

                </form>
                <button onClick={() => this.handleDelete(_id)}>Delete</button>
            <UglyContext.Provider value={props}>
                {this.props.children}
                </UglyContext.Provider>
            </div>
        )
    }
}

export const withUglies = C => props => (
    <UglyContext.Consumer>
        {value => <C {...props}{...value}/>}
    </UglyContext.Consumer>
)

export default UglyProvider