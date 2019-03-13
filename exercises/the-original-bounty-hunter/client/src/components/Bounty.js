import React from 'react';

const Bounty = (props) => {
    const { firstName, lastName, _id, handleDelete } = props
    console.log(firstName);
    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default Bounty;