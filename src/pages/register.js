import axios from "axios";
import { useState } from "react";

const Register = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const register = () => {
        if (password === confirmPassword) {
            axios.post('https://backend-construction.herokuapp.com/register', {
                username: username,
                password: password
            }).then((res) => {
                setMessage(res.data.title);
            })
        } else {
            setMessage("Password not matching")
        }
    }
    return <>
        <input type="email" placeholder="Email" onChange={(e) => setUserName(e.target.value)} required value={username} /><br />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required value={password} /><br />
        <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required value={confirmPassword} /><br />
        <button type="submit" onClick={register}>Register</button><br />
        <label>{message}</label>



    </>
}
export default Register;
