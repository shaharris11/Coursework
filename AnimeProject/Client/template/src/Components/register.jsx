import { useState } from "react";
import { newUser } from "../api/registerApi";


export default function Register({ setToken }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const register = await newUser(username, password);
        setToken(register.token);
        console.log(register);
        setUsername('');
        setPassword('');

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)} />
                <input placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}