import React, { Component } from 'react'
import AddUglyForm from './AddUglyForm.js'

class Ugly extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggled: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl
        }
    }
    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()
    }
    render() {
        const { title, description, imgUrl, handleDelete, _id } = this.props
        return (
            < div  >
                {!this.state.isToggled ?
                    <div style={{ border: '1px solid black', margin: 5, textAlign: 'center'}}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', height: 200, backgroundPosition: 'center'}}></div>
                        <button onClick={() => handleDelete(_id)}>DELETE</button>
                        <button onClick={this.toggler}>Edit</button>
                    </div>
                    :
                    <div>
                        <AddUglyForm
                            {...this.state}
                            buttonText="Submit Edit"
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                        <button onClick={this.toggler}>Close</button>
                    </div>
                }
            </div>
        )
    }
}

export default Ugly