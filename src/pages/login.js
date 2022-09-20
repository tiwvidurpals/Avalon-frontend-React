import { useState } from "react";
import axios from 'axios';

const Login = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const login = () => {
        axios.post('https://backend-construction.herokuapp.com/login', {
            username: username,
            password: password
        }).then((res) => {
            if (res.data.token) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', username)
                setMessage('Login Successful')
            }
        });
    }
    return (<>
        <input type="email" required value={username} onChange={(e) => setUserName(e.target.value)} />
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={login} >Login</button>
        <label value={message}>{message}</label>


    </>)
}
export default Login;
