import accountData from '@/assets/data/accountData.json'
import Account from '../../components/account/Account.jsx';
import './user.scss'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserAccount } from '../../Store/userAccountSlice.jsx';

const Profile = () => {
    const [firstName, SetFirstname] = useState('')
    const [lastName, SetLastname] = useState('')
    const account = accountData.USER_ACCOUNT
    const dispatch = useDispatch()

    // console.log(token);


    useEffect(() => {
        dispatch(getUserAccount()).then((result) => {
            SetFirstname(result.payload.body.firstName)
            SetLastname(result.payload.body.lastName)
        })

    }, [])
    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <div>
                {
                    account.map((item, index) => {
                        return (
                            <section key={index} className='account' >
                                <Account saving={item.Saving} balance={item.Balance} />
                                <div className="account-content-wrapper cta">
                                    <button className="transaction-button">View transactions</button>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        </main>
    );
};

export default Profile;