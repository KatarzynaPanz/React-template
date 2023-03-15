import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import FooterContent from '../Footer/Footer';
import Gallery from '../Content/Gallery';

const PageGallery = () => {
    return(
        <>
        <Header title='Page Gallery'/>
        <Gallery 
            items = {[
                {url: 'www', created:'28-08-2022', author: 'Jan Kowalski'},
                {url: 'www', created:'28-08-2022', author: 'Jan Kowalski'},
                {url: 'www', created:'28-08-2022', author: 'Jan Kowalski'}
            ]}
            />
        <FooterContent/>
        </>
    );
}

export default PageGallery;