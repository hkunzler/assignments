import React, { Component } from 'react';
import axios from 'axios'
import Bounty from './components/Bounty.js'


class App extends Component {
    constructor() {
        super()
        this.state = {
            bountyList: [],
            firstName: '',
            lastName: ''
        }
    }
    componentDidMount() {
        axios.get("/bounty").then(response => {
            this.setState({
                bountyList: response.data
            })
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newbountyList = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bounty: this.state.bounty,
            type: this.state.type
        }
        axios.post("/bounty", newbountyList).then(response => {
            this.setState(prevState => ({
                bountyList: [...prevState.bountyList, response.data],
                firstName: '',
                lastName: '',
                // living: '',
                // type: ''
            }))
        })
    }
    handleDelete = (_id) => {
        axios.delete(`/bounty/${_id}`).then(response => {
            this.setState(prevState => ({
                bountyList: prevState.bountyList.filter( bounty => bounty._id !== _id)
            }))
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    <button>Add bountyList</button>
                </form>
                {this.state.bountyList.map(bounty => <Bounty handleDelete={this.handleDelete} key={bounty._id}{...bounty}/>)}
            </div>
        );
    }
}

export default App;