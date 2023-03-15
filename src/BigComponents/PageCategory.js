import React from 'react';
import Header from '../Header/Header';
import Category from '../Content/Category';
import FooterContent from '../Footer/Footer';


const PageCategory = () => {
    return(
        <>
        <Header title="PageCategory"/>
        <Category
            items={[
                {title: 'Tytuł', category: 'Kategoria', created: '28-08-2022', author: 'Adam Nowak'},
                {title: 'Tytuł', category: 'Kategoria', created: '28-08-2022', author: 'Adam Nowak'},
                {title: 'Tytuł', category: 'Kategoria', created: '28-08-2022', author: 'Adam Nowak'}
            ]}
        />
        <FooterContent/>
        </>
    );
}

export default PageCategory;