import React from 'react';

const myStyles = {
    textAlign: 'center',
}

const Header = props => {
    return (
        <h1  style={ myStyles }>{ props.title }</h1>
        )
}


export default Header;