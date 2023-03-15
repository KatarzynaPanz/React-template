import React from 'react';
import Copyrights from './Copyrights';
import Nav from './Nav';


const FooterContent = () => {
    return (
        <div>
            <Copyrights text="Copyrights"/>
            <Nav style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', listStyleType: 'none'}} item1="itemOne" item2="itemTwo" item3="itemThree"/>
        </div>
    )
}

export default FooterContent;
