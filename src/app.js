import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Nav from './Header/Nav';
import Logo from './Header/Logo';
import Content from './Content/Content';
import FooterContent from './Footer/Footer';
import PagePost from './BigComponents/PagePost';
import PageGallery from './BigComponents/PageGallery';
import PageCategory from './BigComponents/PageCategory';



//const App = () => <h1>Hello World</h1>;

const App = () => 
    <div>
        <Logo style={{color: 'red'}} logo="logo"/>
        <Header title="Ptaki w Polsce"/>
        <Nav style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', listStyleType: 'none'}} item1="gatunki" item2="głosy" item3="zdjęcia" item4="filmy"/>
        <Content/>
        <FooterContent/>
    </div>

//const App = () => <><PagePost/></>

//const App = () => <><PageGallery/></>

//const App = () => <><PageCategory/></>

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
