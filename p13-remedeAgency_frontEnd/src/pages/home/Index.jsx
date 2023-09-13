import React from 'react';
import './index.scss'
import Banner from '../../components/banner/Banner.jsx';
import Feature from '../../components/feature-item/Feature.jsx';

const Index = () => {
    return (
        <main className='Index'>
            <Banner />
            <Feature />
        </main>
    );
};

export default Index;