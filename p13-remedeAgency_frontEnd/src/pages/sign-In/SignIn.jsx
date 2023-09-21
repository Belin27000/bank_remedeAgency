import './signIn.scss'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Store/LoginSlice.jsx';
//back: npm run server
//front: npm run dev

const Login = () => {

    const [email, setEmail] = useState('tony@stark.com');
    const [password, setPassword] = useState('password123');


    const dispatch = useDispatch();
    const navigate = useNavigate()



    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredential = {
            email, password
        }
        dispatch(loginUser(userCredential)).then((result) => {
            if (result.payload) {
                // setEmail('');
                // setPassword('');
                navigate('/profile')
            }
        })
    }


    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FaUserCircle className='sign-in-icon' />
                <h1>Sign In</h1>
                <form onSubmit={handleLoginEvent} >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="email" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" >Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;