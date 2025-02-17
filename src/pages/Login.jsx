import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

function Login() { 
    const [email, setEmail] = useState('yassine.noussair@example.com');
    const [password, setPassword] = useState('123456');
    const [loading, setLoading] = useState(false);
    const [clicked, setIsClicked] = useState(false);
    const { login } = useAuth();


    const handleClick = () => {
        setIsClicked(prev=>!prev)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://127.0.0.1:8000/api/login', {email, password});
            if (res.status === 200) {
                login(res.data.token);
                setLoading(true)

            } else {
                alert('Login failed');
            }

        }catch(error) {
            console.error('Login error:', error);
        }
    }
  return (
    <div className='bg-[#f0f5f9] w-screen h-screen flex flex-col items-center justify-between text-base font-normal'>
        <header className="h-auto pt-[20px] w-full">
            <div className="flex items-center justify-between mx-auto max-w-[590px] px-[5px] w-full">
                <Link className="link-b block text-[#1e385b] text-[16px] ml-[15px] relative no-underline border-b border-[#0099fa] transition-all duration-500" to="/">
                    <span className="absolute left-[-19px] top-[16px] 
                        bg-[url('https://pocketoption.com/themes/cabinet/images/login/icon-left.svg')] 
                        bg-center bg-no-repeat bg-contain  mt-[-11px]
                        h-[17px] w-[17px]">
                    </span>
                    To home page
                </Link>

                <div className="flex items-center">
                    <div onClick={handleClick} className='font-normal relative'>
                        <p className="flex items-center text-[#1e385b] cursor-pointer">
                            <svg className="mr-[10px] w-[20px]" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#a5152)">
                                    <path d="M12.5 24.919c-1.645 0-3.198-.315-4.658-.946a12.164 12.164 0 0 1-3.82-2.576 12.165 12.165 0 0 1-2.576-3.82A11.619 11.619 0 0 1 .5 12.919c0-1.658.315-3.214.946-4.668a12.197 12.197 0 0 1 2.576-3.81 12.166 12.166 0 0 1 3.82-2.576C9.302 1.235 10.855.92 12.5.92c1.658 0 3.214.315 4.668.946 1.453.63 2.723 1.49 3.81 2.576a12.197 12.197 0 0 1 2.576 3.81c.63 1.454.946 3.01.946 4.668a11.62 11.62 0 0 1-.946 4.658 12.166 12.166 0 0 1-2.576 3.82 12.195 12.195 0 0 1-3.81 2.576c-1.454.63-3.01.946-4.668.946Zm0-1.922a17.26 17.26 0 0 0 1.628-2.587c.44-.87.799-1.82 1.076-2.852H9.796c.293 1.064.656 2.031 1.089 2.901.432.87.97 1.716 1.615 2.538Zm-2.446-.347a13.7 13.7 0 0 1-1.305-2.37 15.497 15.497 0 0 1-.898-2.722H3.566a9.902 9.902 0 0 0 2.684 3.307 9.017 9.017 0 0 0 3.804 1.785Zm4.892 0a9.016 9.016 0 0 0 3.804-1.785 9.902 9.902 0 0 0 2.684-3.306H17.15a19.84 19.84 0 0 1-.96 2.734c-.385.885-.8 1.67-1.243 2.357ZM2.771 15.664h4.696c-.08-.47-.137-.93-.173-1.381a17.331 17.331 0 0 1 0-2.728c.036-.451.094-.911.173-1.38H2.771a10.133 10.133 0 0 0-.28 4.151c.066.463.159.909.28 1.338Zm6.59 0h6.278a15.966 15.966 0 0 0 .225-2.745 15.966 15.966 0 0 0-.226-2.745H9.362a15.977 15.977 0 0 0-.225 2.745 15.977 15.977 0 0 0 .226 2.745Zm8.172 0h4.696a10.14 10.14 0 0 0 .28-4.151 9.955 9.955 0 0 0-.28-1.339h-4.696c.08.47.137.93.173 1.381a17.32 17.32 0 0 1 0 2.728c-.036.451-.094.911-.173 1.38Zm-.384-7.385h4.285c-.675-1.328-1.564-2.43-2.666-3.306-1.102-.876-2.376-1.475-3.822-1.797.484.735.915 1.539 1.292 2.412.378.873.681 1.77.911 2.691Zm-7.353 0h5.408a16.254 16.254 0 0 0-1.107-2.918c-.444-.89-.977-1.73-1.597-2.52-.62.79-1.153 1.63-1.597 2.52-.445.89-.814 1.862-1.107 2.918Zm-6.23 0H7.85c.23-.921.533-1.818.91-2.691.378-.873.809-1.677 1.293-2.412-1.454.322-2.73.923-3.828 1.803-1.099.88-1.985 1.98-2.66 3.3Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="a5152">
                                        <path fill="currentColor" transform="translate(.5 .919)" d="M0 0h24v24H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="font-normal mt-px pr-[30px] relative">
                                English
                                <span className={`flex items-center justify-center 
                                    absolute right-0 top-[-0.05rem] 
                                    bg-[url('https://pocketoption.com/themes/2017-09/img/icon-drop-down.svg')] 
                                    bg-center bg-no-repeat bg-contain 
                                    h-[1.625rem] w-[1.625rem] 
                                    transition-transform duration-500 ${clicked? " rotate-180": ""}`}>
                                </span>
                            </span>
                        </p>
                        <div className={`bg-white rounded-[12px] 
                                shadow-[0_10px_70px_rgba(0,0,0,0.1)] 
                                flex flex-col justify-evenly items-start 
                                absolute right-0 mt-[1.1rem] p-[8px_10px] 
                                transition-transform transition-visibility duration-500 
                                z-[999] ${clicked? "opacity-100 scale-100  pointer-events-auto visible"
                                    :
                                 "opacity-0 invisible pointer-events-none scale-0"}`}>
                            <Link className="flex items-center rounded-[10px] text-[#1e385b] text-[14px] py-[0.313rem] px-[0.625rem] no-underline transition-all duration-500 w-[70px] hover:bg-[#f0f5f9]" href="/fr/login/">
                                Français
                            </Link>
                        
                            <Link className="flex items-center rounded-[10px] text-[#1e385b] text-[14px] py-[0.313rem] px-[0.625rem] no-underline transition-all duration-500 w-[70px] hover:bg-[#f0f5f9]" href="/ar/login/">
                                العربية 
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </header>
        <div className="bg-white flex flex-col items-center justify-center max-w-[600px] rounded-[10px] pt-[47px] pb-[20px] w-full h-auto mt-[45px] mb-[20px]">
            <h1 className='text-[32px] font-semibold tracking-[1px] leading-[1.1] m-0'>Sign In</h1>
            <div className='text-[#535c6d] py-[12px] px-[40px] text-center'>
                    <p className="inline-block mb-[27px] whitespace-nowrap text-[#535c6d] text-center">Not registered yet?<Link className='ml-[20px] link-b font-normal text-[#1e385b] pb-1 no-underline border-b border-[#0099fa] transition-all duration-500' to="">Registration</Link></p>

                    <form onSubmit={handleSubmit} className='mx-auto max-w-[420px]'>
                    <div className='mb-[20px]'>
                        <input 
                            type="text" 
                            value={email} 
                            placeholder='Email *' 
                            onChange={ e => setEmail(e.target.value)}
                            className='bg-transparent border-0 border-b border-gray-400 
                                shadow-none text-[#758b9d] 
                                text-base h-auto leading-[1.4285] outline-none 
                                py-[10px] pb-[7px] relative w-full mb-5 
                                focus:border-blue-500 focus:ring-0'
                        />
                        <input 
                            type="password" 
                            value={password} 
                            placeholder='Password *' 
                            onChange={ e => setPassword(e.target.value)}
                            className='bg-transparent border-0 border-b border-gray-400 
                                shadow-none text-[#758b9d] 
                                text-base h-auto leading-[1.4285] outline-none 
                                py-[10px] pb-[7px] relative w-full mb-5 
                                focus:border-blue-500 focus:ring-0'
                        />
                        <div className="flex items-center justify-between mb-[5px]">
                            <div className="block my-[10px] relative">
                                <p className="text-[#758b9d] text-[14px]">
                                    <input id='remember' className='absolute h-[15px] left-0 top-[3px] mt-[1px] width-[15px]' type="checkbox"/>
                                    <label htmlFor='remember' className='pl-[23px]'>Remember me</label>
                                </p>
                            </div>
                            <div>
                                <Link className='link-b border-b border-[#0099fa] text-[#1e385b] relative transition-all duration-500' to="/password_recovery">
                                <span className="absolute left-[-28px] top-[5px] 
                                    bg-[url('https://pocketoption.com/themes/2017-09/img/icon-refresh-blue.svg')] 
                                    bg-center bg-no-repeat bg-contain 
                                    h-[16px] w-[16px]">
                                </span>
                                Password recovery</Link>
                            </div>
                        </div>
                    </div>
                    <div className="submit-btn-wrap">
                    <button 
                        className="flex items-center justify-center bg-gradient-to-r from-[#0099fa] to-[#002ed9] 
                                    bg-[length:115%_auto] border-0 rounded-[10px] 
                                    text-white cursor-pointer text-[15px] font-semibold tracking-wide 
                                    max-w-[300px] overflow-hidden 
                                    pt-[16px] px-[20px] pb-[14px] 
                                    relative text-center uppercase 
                                    transition-all duration-500 w-full
                                    hover:brightness-110" 
                        type="submit">
                        
                        Sign In

                        {loading && (
                            <div className="flex items-center ml-2">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse mx-1" style={{ animationDelay: "0.2s" }}></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                            </div>
                        )}

                        </button>

                    </div>
                </form>
            </div>
        </div>
        <div className="flex items-center justify-center text-[#758b9d] text-[14px] bg-[#f0f5f9] pb-[40px] text-center">
            Copyright ©2025 CongeEase           
        </div>
    </div>
  )
}

export default Login

