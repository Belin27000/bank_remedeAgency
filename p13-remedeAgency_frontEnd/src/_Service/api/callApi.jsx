import axios from 'axios'
import { loginUser } from '@/Store/userSlice.jsx';
export default async function loginUser(userCredential) {
    console.log(userCredential);
    const request = await axios.post('http://localhost:3001/api/v1/user/login/', userCredential);
    const response = await request.data.body.token;
    // console.log(response);
    localStorage.setItem('user', JSON.stringify(response));
    return response;
}

//si jamais tu veux utiliser le call api de manière séparé, importe cette function dans userSlice

console.log(loginUser);