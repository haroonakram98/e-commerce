import React from 'react';

import Footer from '../../Shared/Footer/Footer'
import Headers from '../../Shared/Headers/Headers';
import NewsLetter from '../../Shared/NewsLetter/NewsLetter';
import Hero from '../../Shared/Hero/Hero';


const MainLayout = (props) => {
    return (
        <>
            <Headers />
            <Hero /> 
            {props.children}
            <NewsLetter />
            <Footer />
        </>
    );
};

export default MainLayout;