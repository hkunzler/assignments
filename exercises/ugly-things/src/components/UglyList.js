import React from 'react'
import Ugly from './Ugly.js'

const UglyList = (props) => {
    const mappedUglies = props.uglies.map(ugly => <Ugly
        {...ugly}
        handleDelete={props.handleDelete}
        handleEdit={props.handleEdit}
        key={ugly._id}
    />)
    return (
        < div className = 'grid-box' >
            {mappedUglies}
        </div>
    )
}

export default UglyList