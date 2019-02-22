import React from 'react'
import Friend from './Friend.js'

const FriendList = (props) => {
    const mappedFriends = props.friends.map((person, i) => 
                            <Friend 
                                key={i} 
                                name={person.name} 
                                age={person.age} 
                                pets={person.pets}
        />)

    return (
        <div>
            {/* <h1>Name: {props.name}</h1> */}
            <ul>
                {mappedFriends}
            </ul>
        </div>
    ) 
}

export default FriendList
