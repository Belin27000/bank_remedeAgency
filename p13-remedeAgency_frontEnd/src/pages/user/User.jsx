import accountData from '@/assets/data/accountData.json'
import Account from '@/components/account/Account.jsx';
import './user.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profilUpdate } from '@/Store/profilUpdateSlice.jsx';
import { getUserAccount } from '@/Store/userAccountSlice.jsx'


const Profile = () => {
    const userAccount = useSelector((state) => state.userAccount.userAccount)
    const [firstName, SetFirstname] = useState('')
    const [lastName, SetLastname] = useState('')
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, SetNewLastName] = useState('')
    const account = accountData.USER_ACCOUNT
    const [openEdit, setOpenEdit] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        // Dispatch l'action pour récupérer le profil de l'utilisateur
        dispatch(getUserAccount());
    }, [dispatch]);

    useEffect(() => {
        if (userAccount) {
            SetFirstname(userAccount.body.firstName)
            SetLastname(userAccount.body.lastName)
            setNewFirstName(userAccount.body.firstName)
            SetNewLastName(userAccount.body.lastName)
        }
    }, [userAccount])

    const onSubmit = async (event) => {
        event.preventDefault();
        SetFirstname(newFirstName);
        SetLastname(newLastName)
        const updatedUserData = {
            firstName: newFirstName,
            lastName: newLastName,

        }

        dispatch(profilUpdate(updatedUserData))
        setOpenEdit(false)

    }
    const handleNewName = () => {
        setOpenEdit(true)

    }

    const handleCancel = () => {
        setNewFirstName(firstName)
        SetNewLastName(lastName)
        setOpenEdit(false)

    }

    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back</h1>
                {!openEdit ? (
                    <div>
                        <h2>{firstName} {lastName}!</h2>
                        <button className="edit-button" onClick={handleNewName}>Edit Name</button>
                    </div>
                ) : (
                    <form className="header-edit" onSubmit={onSubmit}>
                        <div className='header-edit-input' >
                            <input type="text" id="firstName" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} />
                            <input type="text" id="lastName" value={newLastName} onChange={(e) => SetNewLastName(e.target.value)} />
                        </div>
                        <div className='header-edit-button'>
                            <button className="edit-button" type='submit'>Save</button>
                            <button className="edit-button" onClick={handleCancel} >Cancel</button>
                        </div>
                    </form>
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