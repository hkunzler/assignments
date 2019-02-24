import React from 'react'

const BlogPost = props => {
    return (
        <div className='post-style'>
            <div className="blue">
            <a className='title' href='#'>{props.title}</a>
                <p className='subtitle'><a href='#'>{props.subtitle}</a></p>
                </div>
            <p className='author'>Posted by <a href='#'>{props.author}</a> on {props.date}</p>
        </div>
    )
}

export default BlogPost