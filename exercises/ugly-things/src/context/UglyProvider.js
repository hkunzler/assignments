import React, { Component } from 'react'
import axios from 'axios'

const UglyContext = React.createContext()

class UglyProvider extends Component {
    constructor() {
        super()
        this.state = {
            uglies: []
        }
    }

    getUglies = () => {
        axios.get('https://api.vschool.io/kunzler-ugly-things/todo').then(response => {
            this.setState({
                uglies: response.data
            })
        }).catch(error => console.log(error))
    }
    addUgly = (inputs) => {
        const { title, description, imgUrl } = inputs
        const newUgly = {
            title,
            description,
            imgUrl
        }
        axios.post('https://api.vschool.io/kunzler-ugly-things/todo', newUgly).then(response => {
            this.setState(prevState => {
                return {
                    uglies: [response.data, ...prevState.uglies]
                }
            })
        }).catch(error => console.log(error))
    }
    handleDelete = (_id) => {
        axios.delete(`https://api.vschool.io/kunzler-ugly-things/todo/${ _id }`).then(response => {
            this.setState(prevState => {
                return {
                    uglies: prevState.uglies.filter(ugly => ugly._id !== _id)
                }
            })
        }).catch(error => console.log(error))
    }
    handleEdit = (_id, updates) => {
        axios.put(`https://api.vschool.io/kunzler-ugly-things/todo/${_id}`, updates).then(response => {
            const updatedUgly = response.data
            this.setState(prevState => {
                return {
                    uglies: prevState.uglies.map(ugly => ugly._id === _id ? updatedUgly : ugly)
                }
            })
        }).catch(error => console.log(error))
    }
    render() {
        return (
            <UglyContext.Provider
                value={{
                    uglies: this.state.uglies,
                    getUglies: this.getUglies,
                    addUgly: this.addUgly,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit
                }}
            >
                {this.props.children}
                </UglyContext.Provider>
        )
    }
}

export const withUglies = C => props => (
    <UglyContext.Consumer>
        {value => <C {...props}{...value}/>}
    </UglyContext.Consumer>
)


export default UglyProvider