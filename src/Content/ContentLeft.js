import React from 'react';

const myStyles = {
    textAlign: 'justify',
    padding: '30px'
}

const ContentLeft = props => {
    const {text} = props;
    return (
    <p style={myStyles}>{text}</p>
    )
}

export default ContentLeft;