import React from 'react'
import Pet from './Pet.js'

const Friend = (props) => {
    const mappedPets = props.pets.map((pets, i) => <Pet name={pets.name} breed={pets.breed} key={i}/>);
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            <h3>These are my Pets:</h3>
            <div>{mappedPets}</div>
        </div>
    )
}

export default Friend

