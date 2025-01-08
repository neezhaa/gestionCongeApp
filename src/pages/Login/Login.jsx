// import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
// import useSignIn from 'react-auth-kit/hooks/useSignIn';
// import { resolveEnvPrefix } from 'vite';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [clicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prev=>!prev)
    }

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
        <header className="site-header">
            <div className="login-header">
                <Link className="link-back" to="/">To home page</Link>

                <div className="site-header_end">
                    <div onClick={handleClick} className={`languages ${clicked? "opened": ""}`}>
                        <p className="languages_title">
                            <svg className="language-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#a5152)">
                                    <path d="M12.5 24.919c-1.645 0-3.198-.315-4.658-.946a12.164 12.164 0 0 1-3.82-2.576 12.165 12.165 0 0 1-2.576-3.82A11.619 11.619 0 0 1 .5 12.919c0-1.658.315-3.214.946-4.668a12.197 12.197 0 0 1 2.576-3.81 12.166 12.166 0 0 1 3.82-2.576C9.302 1.235 10.855.92 12.5.92c1.658 0 3.214.315 4.668.946 1.453.63 2.723 1.49 3.81 2.576a12.197 12.197 0 0 1 2.576 3.81c.63 1.454.946 3.01.946 4.668a11.62 11.62 0 0 1-.946 4.658 12.166 12.166 0 0 1-2.576 3.82 12.195 12.195 0 0 1-3.81 2.576c-1.454.63-3.01.946-4.668.946Zm0-1.922a17.26 17.26 0 0 0 1.628-2.587c.44-.87.799-1.82 1.076-2.852H9.796c.293 1.064.656 2.031 1.089 2.901.432.87.97 1.716 1.615 2.538Zm-2.446-.347a13.7 13.7 0 0 1-1.305-2.37 15.497 15.497 0 0 1-.898-2.722H3.566a9.902 9.902 0 0 0 2.684 3.307 9.017 9.017 0 0 0 3.804 1.785Zm4.892 0a9.016 9.016 0 0 0 3.804-1.785 9.902 9.902 0 0 0 2.684-3.306H17.15a19.84 19.84 0 0 1-.96 2.734c-.385.885-.8 1.67-1.243 2.357ZM2.771 15.664h4.696c-.08-.47-.137-.93-.173-1.381a17.331 17.331 0 0 1 0-2.728c.036-.451.094-.911.173-1.38H2.771a10.133 10.133 0 0 0-.28 4.151c.066.463.159.909.28 1.338Zm6.59 0h6.278a15.966 15.966 0 0 0 .225-2.745 15.966 15.966 0 0 0-.226-2.745H9.362a15.977 15.977 0 0 0-.225 2.745 15.977 15.977 0 0 0 .226 2.745Zm8.172 0h4.696a10.14 10.14 0 0 0 .28-4.151 9.955 9.955 0 0 0-.28-1.339h-4.696c.08.47.137.93.173 1.381a17.32 17.32 0 0 1 0 2.728c-.036.451-.094.911-.173 1.38Zm-.384-7.385h4.285c-.675-1.328-1.564-2.43-2.666-3.306-1.102-.876-2.376-1.475-3.822-1.797.484.735.915 1.539 1.292 2.412.378.873.681 1.77.911 2.691Zm-7.353 0h5.408a16.254 16.254 0 0 0-1.107-2.918c-.444-.89-.977-1.73-1.597-2.52-.62.79-1.153 1.63-1.597 2.52-.445.89-.814 1.862-1.107 2.918Zm-6.23 0H7.85c.23-.921.533-1.818.91-2.691.378-.873.809-1.677 1.293-2.412-1.454.322-2.73.923-3.828 1.803-1.099.88-1.985 1.98-2.66 3.3Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="a5152">
                                        <path fill="currentColor" transform="translate(.5 .919)" d="M0 0h24v24H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="languages_title-text">
                                English
                            </span>
                        </p>
                        <ul className="languages_list">
                            <li className="languages_item">
                                <Link className="languages_link" href="/fr/login/">
                                    Français
                                </Link>
                            </li>
                            <li className="languages_item">
                                <Link className="languages_link" href="/ar/login/">
                                    العربية 
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
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
        <div className="login-socket">
            Copyright ©2025 Leave Management           
        </div>
    </div>
  )
}

export default Login

