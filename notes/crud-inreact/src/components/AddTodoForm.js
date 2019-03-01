import React from 'react'

const AddToDoForm = (props) => {
    const {title, description, price, handleChange, handleSubmit, imgUrl} = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={handleChange}
            placeholder="title" />
            <input 
            type="text" 
            name="description" 
            value={description} 
            onChange={handleChange}
            placeholder="description" />
            <input 
            type="text" 
            name="price" 
            value={price} 
            onChange={handleChange}
            placeholder="price" />
            <input
            type="text"
            name="imgUrl"
            value={imgUrl}
            onChange={handleChange}
            placeholder="Image Url" />
            <button>Add Todo</button>
        </form>
    )
}

export default AddToDoForm