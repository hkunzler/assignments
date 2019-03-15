import React from 'react';

const BountyForm = (props) => {
    const {
        handleSubmit,
        handleChange,
        firstName,
        lastName,
        bounty
} = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                First Name: <input type="text" name="firstName" value={firstName} onChange={handleChange} />
                <br/>
                Last Name: <input type="text" name="lastName" value={lastName} onChange={handleChange} />
                <br/>
                Living:
                <br/>
                True<input type='radio' name="living" value={true} onChange={handleChange} />
                False<input type='radio' name="living" value={false} onChange={handleChange} />
                <br/>
                Bounty: <input type='number' name="bounty" value={bounty} onChange={handleChange} />
                <br/>
                Type:
                <br/>
                Sith <input type='radio' name="type" value='Sith' onChange={handleChange} />     
                Jedi <input type='radio' name="type" value='Jedi' onChange={handleChange} />     
                <br/>
                <button>Add bountyList</button>
            </form>
        </div>
    );
};

export default BountyForm;