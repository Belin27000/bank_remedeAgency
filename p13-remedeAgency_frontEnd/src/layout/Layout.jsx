import Header from '@/layout/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer.jsx';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <Outlet />
            <Footer />
        </div >
    );
};

export default Layout;