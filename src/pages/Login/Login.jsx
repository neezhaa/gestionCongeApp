// import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
// import useSignIn from 'react-auth-kit/hooks/useSignIn';
// import { resolveEnvPrefix } from 'vite';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const signIn = useSignIn();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // try{
        //     const res = await axios.post('api/login', {email, password});
        //     if (res.status === 200) {
        //       const { token, employe } = res.data;
        //         signIn({
        //           token,
        //           expiresIn: 3600,
        //           tokenType: 'Bearer',
        //           authState: { employe  },
        //         });
        //       } else {
        //         alert('Login failed');
        //       }

        // }catch(error) {
        //     console.error('Login error:', error);
        // }
    }
  return (
    <div className='content-site'>
        <div className="login-container">
            <h1>Sign In</h1>
            <div className='login-content'>
                    <p className="login-content__redirect">Not registered yet?<Link to="">Registration</Link></p>
                    {/* <div className="ajax-message js-message" style="display: block;"> */}
                        {/* <div class="message message-error">
                            The <b>Password</b> field must be at least <b>6</b> characters in length
                        </div> */}
                    {/* </div> */}
                    <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            value={email} 
                            placeholder='Email *' 
                            onChange={ e => setEmail(e.target.value)}
                            className='form-control'
                        />
                        <input 
                            type="password" 
                            value={password} 
                            placeholder='Password *' 
                            onChange={ e => setPassword(e.target.value)}
                            className='form-control'
                        />
                        <div className="form-bottom">
                            <div className="checkbox">
                                <p className="ruls">
                                    <input type="checkbox"/>
                                    <label>Remember me</label>
                                </p>
                            </div>
                            <div className="recovery-link">
                                <Link to="/password_recovery">Password recovery</Link>
                            </div>
                        </div>
                    </div>
                    <div className="submit-btn-wrap">
                        <button className="btn" type="submit">
                            Sign In                        
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login

