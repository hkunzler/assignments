import React, { Component } from 'react';
import BountyForm from './components/BountyForm'
import BountyList from './components/BountyList'
import {withBounty} from './context/BountyProvider'

class App extends Component {
    constructor() {
        super()
        this.state = {
            bountyList: [],
            firstName: '',
            lastName: '',
            living: false,
            bounty: '',
            type: ''
        }
    }
    componentDidMount(){
        this.props.getBounty()
    }
    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newBountyList = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bounty: this.state.bounty,
            type: this.state.type,
        }
        this.props.addBounty(newBountyList)
        this.setState({
            firstName: '',
            lastName: '',
            living: false,
            bounty: '',
            type: ''
        })
    }
    
    render() {
        return (
            <div>
                <BountyForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state} />
                {/* <BountyForm/> */}
                <BountyList handleDelete={this.props.handleDelete}/>
            </div>
        );
    }
}

export default withBounty(App)