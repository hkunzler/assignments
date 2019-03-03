import React from 'react'

const AddUglyForm = (props) => {
    const { title, description, imgUrl, handleChange, handleSubmit, buttonText} = props
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                value={title}
                placeholder='Title'
                onChange={handleChange}
            />
            <input
                type='text'
                name='description'
                value={description}
                placeholder='Description'
                onChange={handleChange}
            />
            <input
                type='text'
                name='imgUrl'
                value={imgUrl}
                placeholder='Image URL'
                onChange={handleChange}
            />
            <button>{buttonText}</button>
        </form>
    )
}

export default AddUglyForm