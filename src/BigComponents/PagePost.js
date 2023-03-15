import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import FooterContent from '../Footer/Footer';
import Post from '../Content/Post';

const post = {
    title: 'Hello React',
    body: 'Lorem ipsum....',
    author: 'Mirek Lorek',
    created: '2019-01-01 01:02:03'
}

const PagePost = () => {
    return (
        <>
            <Header title="Tytuł"/>
            <Content main={
                <Post {...post}/>
            }/>
            <FooterContent/>
        </>
    );
}


export default PagePost;