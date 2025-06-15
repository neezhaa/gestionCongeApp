import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

function Login() { 
    const [email, setEmail] = useState('yassine.noussair@example.com');
    const [password, setPassword] = useState('123456789');
    const [loading, setLoading] = useState(false);
    const [clicked, setIsClicked] = useState(false);
    const { login } = useAuth();
    const { t, i18n } = useTranslation();



    const handleClick = () => {
        setIsClicked(prev=>!prev)
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsClicked(false);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        try{
            const res = await axios.post('http://127.0.0.1:8000/api/login', {email, password});
            if (res.status === 200) {
                login(res.data.token, res.data.employe);
            } else {
                alert('Login failed');
            }

        } catch(error) {
            console.error('Login error:', error);
            alert('An error occurred. Please try again.');

        } finally { 
            setLoading(false); 
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
                    {t('login.home_page')}
                </Link>

                <div className="flex items-center">
                    <div onClick={handleClick} className='font-normal relative group'>
                        <p className="flex items-center text-[#1e385b] cursor-pointer">
                            <GlobeAltIcon className="h-5 w-5 mr-2" />
                            <span className="font-normal mt-px pr-[30px] relative">
                                {i18n.language === 'fr' ? 'Français' : i18n.language === 'en' ? 'English' : 'العربية'}
                                <span className={`flex items-center justify-center 
                                    absolute right-0 top-[-0.05rem] 
                                    bg-[url('https://pocketoption.com/themes/2017-09/img/icon-drop-down.svg')] 
                                    bg-center bg-no-repeat bg-contain 
                                    h-[1.625rem] w-[1.625rem] 
                                    transition-transform duration-500 ${clicked? " rotate-180": ""}`}>
                                </span>
                            </span>
                        </p>
                        <div className={`absolute bg-white rounded-md
                                shadow-lg right-0 mt-2 py-1
                                transition-transform transition-visibility duration-500 
                                z-[999] ${clicked? "opacity-100 scale-100  pointer-events-auto visible"
                                    :
                                 "opacity-0 invisible pointer-events-none scale-0"}`}>
                            <button 
                                onClick={() => changeLanguage('fr')}
                                className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'fr' ? 'bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                Français
                            </button>

                            <button 
                                onClick={() => changeLanguage('en')}
                                className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                English
                            </button>
                        
                            <button 
                                onClick={() => changeLanguage('ar')}
                                className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'ar' ? 'bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                العربية 
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </header>
        <div className="bg-white flex flex-col items-center justify-center max-w-[600px] rounded-[10px] pt-[47px] pb-[20px] w-full h-auto mt-[45px] mb-[20px]">
            <h1 className='text-[32px] font-semibold tracking-[1px] leading-[1.1] m-0'>{t('login.title')}</h1>
            <div className='text-[#535c6d] py-[12px] px-[40px] text-center'>
                    <p className="inline-block mb-[27px] whitespace-nowrap text-[#535c6d] text-center">
                        {t('login.no_account')}
                        <Link className='ml-[20px] link-b font-normal text-[#1e385b] pb-1 no-underline border-b border-[#0099fa] transition-all duration-500' to="">
                            {t('login.signup')}
                        </Link>
                    </p>

                    <form onSubmit={handleSubmit} className='mx-auto max-w-[420px]'>
                    <div className='mb-[20px]'>
                        <input 
                            type="text" 
                            value={email} 
                            placeholder={`${t('login.email')} *`} 
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
                            placeholder={`${t('login.password')} *`} 
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
                                    <label htmlFor='remember' className='pl-[23px]'>{t('login.remember')}</label>
                                </p>
                            </div>
                            <div>
                                <Link className='link-b border-b border-[#0099fa] text-[#1e385b] relative transition-all duration-500' to="/password_recovery">
                                <span className="absolute left-[-28px] top-[5px] 
                                    bg-[url('https://pocketoption.com/themes/2017-09/img/icon-refresh-blue.svg')] 
                                    bg-center bg-no-repeat bg-contain 
                                    h-[16px] w-[16px]">
                                </span>
                                {t('login.forgot_password')}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="submit-btn-wrap flex items-center justify-center">
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
                        
                        {t('login.submit')}

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
            {t('login.copyright')}                    
        </div>
    </div>
  )
}

export default Login

