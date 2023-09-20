import { Link } from 'react-router-dom';
import ArgentBankLogo from '@/assets/img/argentBankLogo.png'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import './header.scss'
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../Store/LoginSlice.jsx';

const Header = () => {

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const userAccount = useSelector((state) => state.userAccount.userAccount)
    const dispatch = useDispatch()
    const handleSignOut = () => {
        dispatch(logOutUser())
    }

    return (
        <header className='Header'>
            <nav className="main-nav">
                <Link to="/Index" className="main-nav-logo">
                    <img src={ArgentBankLogo} className="main-nav-logo-image" alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {!isAuthenticated ? (
                    <div>
                        <Link to="/login" className="main-nav-item">
                            <FaUserCircle />
                            <p>Sign In</p>
                        </Link>
                    </div>
                ) : (
                    <div className='main-nav-profil'>
                        <div>
                            <FaUserCircle />
                            {userAccount?.body.firstName}
                        </div>
                        <Link to="/login" className="main-nav-item" onClick={handleSignOut}>
                            <FaSignOutAlt />
                            <p>Sign Out</p>
                        </Link>
                    </div>
                )
                }
            </nav>
        </header>
    );
};

export default Header;