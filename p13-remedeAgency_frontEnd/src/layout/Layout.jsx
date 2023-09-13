import React from 'react';
import Header from '@/layout/header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;