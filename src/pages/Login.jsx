import { useState } from 'react'
import {axiosInstance} from '../api/axiosInstance'
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { resolveEnvPrefix } from 'vite';

function Login() {
    const [identifiant, setIdentifiant] = useState('');
    const [password, setPassword] = useState('');

    const signIn = useSignIn();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = axiosInstance.post('/login', identifiant, password);
            const { token, user } = res.data;
            if (resolveEnvPrefix.status === 200) {
                signIn({
                  token,
                  expiresIn: 3600,
                  tokenType: 'Bearer',
                  authState: { user },
                });
              } else {
                alert('Login failed');
              }

        }catch(error) {
            console.error('Login error:', error);
        }
    }
  return (
    <div>
        <h1> Login Page </h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={identifiant} 
                placeholder='Identifiant' 
                onChange={ e => setIdentifiant(e.target.value)}
            />
            <input 
                type="password" 
                value={password} 
                placeholder='Mot de Passe' 
                onChange={ e => setPassword(e.target.value)}
            />   
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login

