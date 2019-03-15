import React from 'react';

const BountyForm = (props) => {
    const {
        handleSubmit,
        handleChange,
        firstName,
        lastName,
        living,
        bounty,
        type
} = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" value={firstName} onChange={handleChange}/>
                <input type="text" name="lastName" value={lastName} onChange={handleChange} />
                <input type='radio' name="living" value={living} onChange={handleChange}/>
                <input type='number' name="bounty" value={bounty} onChange={handleChange}/>
                <input type='radio' name="type" value={type} onChange={handleChange}/>                
                <button>Add bountyList</button>
            </form>
        </div>
    );
};

export default BountyForm;