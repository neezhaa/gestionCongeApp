// import React from 'react'
import './Profile.css'
import eyeOff from '../../assets/eye-off.svg'
import profilePicture from '../../assets/profilePicture.svg'
import eye from '../../assets/eye.svg'
import { useState } from 'react'


function Profile({active}) {
    const [clicked, setClicked] = useState(false);
    // const [profilePicture, setProfilePicture] = useState({profilePicture});


    const toggleVisibility = () => {
        setClicked(prev => !prev);
    }
  return (
    <div className={`drop-down ${active? "active": ""}`}>
        <div className="user-info">
            <div className='avatar'>
                <img src={profilePicture} alt=""/>
            </div>
            <div className="data">
                <div className='name'>Nezha BENABDELMALEK</div>
                <div className="data_id">
                    <div className='js-hd'>id 6541589</div>
                    <img onClick={toggleVisibility} src={clicked ? eye : eyeOff} alt="Toggle Visibility"/>
                </div>
                <div className="data_email">
                    <div className='js-hd'>john.doe@example.com</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile