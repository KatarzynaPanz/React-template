import React from 'react';

const myStyles = {
    textAlign: 'justify',
    paddingRight: '30px',
    paddingBottom: '30px',
    paddingLeft: '30px'
}

const ContentMain = props => {
    const {text} = props;
    return (
        <p style ={myStyles}>{text}</p>
    )
}

export default ContentMain;