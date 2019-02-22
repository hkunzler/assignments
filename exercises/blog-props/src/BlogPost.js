import React from 'react'

const BlogPost = props => {
    return (
        <div className='post-style'>
            <a href='#'>{props.title}</a>
            <p><a href='#'>{props.subtitle}</a></p>
            <p>Posted by <a href='#'>{props.author}</a> on {props.date}</p>
        </div>
    )
}

export default BlogPost