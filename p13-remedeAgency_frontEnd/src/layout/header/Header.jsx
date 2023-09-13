import React from 'react';
import { Link } from 'react-router-dom';
import ArgentBankLogo from '@/assets/img/argentBankLogo.png'
import { FaUserCircle } from 'react-icons/fa'
import './header.scss'


const Header = () => {
    return (
        <header className='Header'>
            <nav className="main-nav">
                <Link to="/Index" className="main-nav-logo">
                    <img src={ArgentBankLogo} className="main-nav-logo-image" alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>


                <div>
                    <Link to="/SignIn" className="main-nav-item">
                        <FaUserCircle />
                        <p>Sign In</p>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;