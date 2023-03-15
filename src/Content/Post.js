import React from 'react';


const Post = props => {
    const {title, body, author, created} = props;
    return (
    <ul>
        <li>title: {title}</li>
        <li>body: {body}</li>
        <li>author: {author}</li>
        <li>created: {created}</li>
    </ul>
    )
}

export default Post;