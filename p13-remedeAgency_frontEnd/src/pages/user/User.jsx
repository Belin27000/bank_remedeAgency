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
    const [openEdit, setOpenEdit] = useState(false)

    // console.log(token);


    useEffect(() => {
        dispatch(getUserAccount()).then((result) => {
            SetFirstname(result.payload.body.firstName)
            SetLastname(result.payload.body.lastName)
        })

    }, [])

    const handleEditName = () => {
        if (openEdit) {
            console.log('je peux changer le nom');
            setOpenEdit(!openEdit)
        } else {
            console.log('je ne peux pas changer le nom');
            setOpenEdit(!openEdit)
        }
    }

    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back</h1>
                {!openEdit ? (
                    <div>
                        <h2>{firstName} {lastName}!</h2>
                        <button className="edit-button" onClick={handleEditName}>Edit Name</button>
                    </div>
                ) : (
                    <div className="header-edit">
                        <div className='header-edit-input'>
                            <input type="text" value={firstName} onChange={(e) => SetFirstname(e.target.value)} />
                            <input type="text" value={lastName} onChange={(e) => SetLastname(e.target.value)} />
                        </div>
                        <div className='header-edit-button'>
                            <button className="edit-button" onClick={handleEditName}>Save</button>
                            <button className="edit-button" onClick={handleEditName}>Cancel</button>
                        </div>
                    </div>
                )
                }
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