import React from 'react';
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

const textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim';

const myStyles = {
    display: 'flex'
}

const ContentColumns = () => {
    return (
    <div style = {myStyles}><ContentLeft text={textContent}/><ContentRight text={textContent}/></div>
    )
}

export default ContentColumns;