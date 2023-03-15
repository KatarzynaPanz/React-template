import React from 'react';

const myStyles = {
    textAlign: 'justify',
    padding: '30px'
}

const ContentRight = props => {
    const {text} = props;
    return (
    <p style={myStyles}>{text}</p>
    )
}

export default ContentRight;