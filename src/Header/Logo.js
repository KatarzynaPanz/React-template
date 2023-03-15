import React from 'react';

class Logo extends React.Component {
    render() {
        return <p style={this.props.style}>{ this.props.logo }</p>
        }
}

export default Logo;