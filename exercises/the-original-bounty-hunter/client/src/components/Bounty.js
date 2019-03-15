import React, { Component } from 'react';

class Bounty extends Component {
    constructor() {
        super()
        this.state = {
            editToggle: false
        }
    }
    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }
    render() {
        const { firstName, lastName, living, bounty, type, _id, handleDelete } = props
    console.log(handleDelete);
    return (
        <div>
            {this.state.editToggle ?
                <>
                <h1>{firstName} {lastName}</h1>
                <p>Living: {living.toString()} <br></br> Bounty: {bounty} <br></br> Type: {type}</p>
                <button onClick={() => handleDelete(_id)}>Delete</button>
            }
        </div>
    );
    }
}

export default Bounty;