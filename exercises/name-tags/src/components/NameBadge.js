import React from 'react'

const NameBadge = props => {
const {firstName, lastName, phone, birth, about, email, favFood} = props
    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <p>Phone: {phone}</p>
            <p>Birth: {birth}</p>
            <p>About: {about}</p>
            <p>Email: {email}</p>
            <p>Favorite Food: {favFood}</p>

        </div>
    )
}

export default NameBadge