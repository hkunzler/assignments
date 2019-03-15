import React, { Component } from 'react';
import axios from 'axios'
// import Bounty from '../components/Bounty';

const BountyContext = React.createContext()

class BountyProvider extends Component {
    constructor() {
        super()
        this.state = {
            bounty: []
        }
    }

    getBounty = () => {
        
        axios.get("/bounty").then(response => {
            this.setState({
                bounty: response.data
            })
        })
    }

    addBounty = (newBountyList) => {
        axios.post("/bounty", newBountyList).then(response => {
            this.setState(prevState => ({
                bountyList: [...prevState.bounty, response.data],
                firstName: '',
                lastName: '',
                living: false,
                type: ''
            }))
        })
    }

    handleDelete = (_id) => {
        axios.delete(`/bounty/${_id}`).then(response => {
            this.setState(prevState => ({
                bounty: prevState.bounty.filter(bounty => bounty._id !== _id)
            }))
        })
    }

    render() {
        return (
            <BountyContext.Provider
                value={{
                    bounty: this.state.bounty,
                    getBounty: this.getBounty,
                    addBounty: this.addBounty,
                    handleDelete: this.handleDelete
                }}
            >
                {this.props.children}
            </BountyContext.Provider>
        );
    }
}

export default BountyProvider;

export const withBounty = C => props => (
    <BountyContext.Consumer>
        {value => <C {...props}{...value}/>}
    </BountyContext.Consumer>
)