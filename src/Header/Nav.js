import React from 'react';

/*const myStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none'
}*/

const Nav = (props) => {
    const {item1, item2, item3, item4} = props;
    return (
    <ul style={ props.style }>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
        <li>{item4}</li>
    </ul>
    )
}

export default Nav;