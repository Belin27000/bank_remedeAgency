import './signIn.scss'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    let navigate = useNavigate()
    const userLogin = () => {
        navigate("/User")
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FaUserCircle className='sign-in-icon' />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label
                        >
                    </div>
                    <button className="sign-in-button" onClick={userLogin}>Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;