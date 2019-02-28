import React from 'react'

const UserForm = props => {
    const { firstName, lastName, phone, birth, about, email, favFood, handleChange, handleSubmit } = this.state
    return (
        <form>
                < input type="text" onChange name={handleChange} name ='firstName' value={firstName} required/>
                < input type="text" onChange name={handleChange} name ='lastName' value={lastName}/>
                < input type="text" onChange name={handleChange} name ='email' value={email}/>
                < input type="text" onChange name={handleChange} name ='birth' value={birth}/>
                < input type="text" onChange name={handleChange} name ='favFood' value={favFood}/>
                < input type="text" onChange name={handleChange} name ='phone' value={phone}/>
                {/* < input type="text" onChange name={this.handleChange} name ='about' value={this.state.about} /> */}
            <textarea onChange={handleChange} name="about" value={about} />
            <button>Submit</button>
                </form>
    )
}

export default UserForm