
const Account = ({ saving, balance }) => {
    console.log(saving, balance);

    return (
        <div className='account-content-wrapper'>
            <h3 className="account-title">Argent Bank Checking ({saving})</h3>
            <p className="account-amount">{balance}</p>
            <p className="account-amount-description">Available Balance</p>
        </div>
    );
};

export default Account;