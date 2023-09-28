import { Link } from 'react-router-dom';
import ArgentBankLogo from '@/assets/img/argentBankLogo.png'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import './header.scss'
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../Store/LoginSlice.jsx';
import { useEffect, useState } from 'react';

const Header = () => {
    const [userName, SetUserName] = useState('')
    const [isLog, setIsLog] = useState(false)
    const [loading, setLoading] = useState(true)
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const userAccount = useSelector((state) => state.userAccount.userAccount)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        SetUserName('')
        dispatch(logOutUser())
    }
    useEffect(() => {
        const token = localStorage.getItem('user');
        console.log(isAuthenticated);
        if (isAuthenticated || token) {
            if (userAccount && userAccount.body && userAccount.body.firstName) {
                SetUserName(userAccount.body.firstName);
                console.log({ userName });
            }
            setIsLog(true)
            setLoading(false)
        } else {
            setIsLog(false)

        }
    }, [dispatch, isAuthenticated, userAccount, userName])

    if (loading && isLog) return (
        <h3>Chargement des données en cours...</h3>
    )

    return (
        <header className='Header'>
            <nav className="main-nav">
                <Link to="/Index" className="main-nav-logo">
                    <img src={ArgentBankLogo} className="main-nav-logo-image" alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {isLog ? (
                    <div className='main-nav-profil'>
                        <div>
                            <FaUserCircle />
                            {userName}
                        </div>
                        <Link to="/login" className="main-nav-item" onClick={handleSignOut}>
                            <FaSignOutAlt />
                            <p>Sign Out</p>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/login" className="main-nav-item">
                            <FaUserCircle />
                            <p>Sign In</p>
                        </Link>
                    </div>
                )
                }
            </nav>
        </header>
    );
};

export default Header;