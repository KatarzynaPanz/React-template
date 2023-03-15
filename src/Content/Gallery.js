import React from 'react';

const myStyles = {
    listStyleType: 'none'
}

const Gallery = props => {
    const galleryItems = props.items.map((item)=>
        <li>
            <ul style={myStyles}>
                <li><a href={item.url}>www</a></li>
                <li>{item.created}</li>
                <li>{item.author}</li>
            </ul>
        </li>
    );
    return(
        <ul>{galleryItems}</ul>
    );
}


export default Gallery;