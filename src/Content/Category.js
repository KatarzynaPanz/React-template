import React from 'react';

const myStyles = {
    listStyleType: 'none'
}
const Category = props => {
    const categoryItems = props.items.map((item)=>
        <li>
            <ul style={myStyles}>
                <li>{item.title}</li>
                <li>{item.category}</li>
                <li>{item.created}</li>
                <li>{item.author}</li>
            </ul>
        </li>
    );
    return(
        <ul>{categoryItems}</ul>
    );
}

export default Category;

