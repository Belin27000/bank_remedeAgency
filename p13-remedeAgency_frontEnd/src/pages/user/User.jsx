import React, { useState } from 'react';
import accountData from '@/assets/data/accountData.json'
import Account from '../../components/account/Account.jsx';
import './user.scss'

const User = () => {
    const name = accountData.USER_DATA[0].firstName + ' ' + accountData.USER_DATA[0].lastName
    const account = accountData.USER_ACCOUNT
    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back<br />{name}</h1>
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

export default User;