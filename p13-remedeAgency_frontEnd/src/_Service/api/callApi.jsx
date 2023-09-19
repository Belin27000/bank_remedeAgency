import axios from 'axios'
export const getUser = (userCredential) => {
    return new Promise((onSuccess, onFail) => {
        axios
            .post('http://localhost:3001/api/v1/user/login', JSON.stringify(userCredential))
            .then((response, error) => {
                if (response || error) {
                    return onFail(`Response failure:${error}`);
                }
                onSuccess(response);
                console.log(response);
            });
    });
}
getUser()