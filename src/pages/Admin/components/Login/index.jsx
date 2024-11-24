import { useState } from 'react';
import './style.scss';
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const credentials = { username, password };

        try {
            const response = await axios.post(import.meta.env.VITE_APP_BASE_URL + 'login', credentials);
            if (response.status === 200) {
                localStorage.setItem('login', 'true');
                window.location.reload();
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "'Invalid credentials. Please try again.'",
                showConfirmButton: true,
            });
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className="Login container"
            style={{
                height: window.innerHeight,
            }}
        >
            <h1>Log in</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' >Log in</button>
        </form>
    );
}

export default Login;
