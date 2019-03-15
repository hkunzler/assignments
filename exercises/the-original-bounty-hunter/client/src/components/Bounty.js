import React from 'react';

const Bounty = (props) => {
    const { firstName, lastName, living, bounty, type, _id, handleDelete } = props
    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <p>Living: {living.toString()} <br></br> Bounty: {bounty} <br></br> Type: {type}</p>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default Bounty;