import React from 'react';

/*const myStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none'
}*/

class Nav extends React.Component {
    render() {
        return (
            <ul style={ this.props.style }>
                <li>{this.props.item1}</li>
                <li>{this.props.item2}</li>
                <li>{this.props.item3}</li>
            </ul>
            )
    }
}

export default Nav;