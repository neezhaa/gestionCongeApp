import { useState } from 'react'
import './notifications.css'
import { useEffect } from 'react';
import axios from 'axios';
function Notifications({changeStateNotif}) {

    const [notifs, setNotifs] = useState([]);
    const [notifsVisibe, setNotifsVisible] = useState(true)

    useEffect(() => {

        axios.get('http://localhost:8000/api/notifications', 
            {
                headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
            }
        )
        .then(response => setNotifs(response.data))
        .catch(error => console.log(error))

    
    }, [])

    function handleCancel(){
        setNotifsVisible(false);
        changeStateNotif(false)
    }
    
    
  return (
    <>
    {
        notifsVisibe ?   <div className={`overlay ${notifsVisibe ? "smooth-enter-active" : ""}`}>
                                <div className="card">
                                    <div className="header">
                                        <p>Notifications({notifs.filter(notif => notif.type === 'nouvelle_demande').length})</p>
                                        <i className="fa-solid fa-xmark" onClick={handleCancel}></i>
                                    </div>
                                    <div className="today">
                                        <p>Today</p>
                                    </div>
                                    <div className="notifs">

                                        {
                                            notifs.map(notif => { if(notif.type === 'nouvelle_demande'){

                                                            return <div className='notif' key={notif.id}>
                                                                        <img className='img-profile' src="https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.269041590.1690740809&semt=ais_hybrid" alt="not found" />
                                                                        <div>
                                                                            <p>{notif.employe_id}</p>
                                                                            <p className='profession'>designer</p>
                                                                            <p className='message'>{notif.message}</p>
                                                                        </div>
                                                                    </div>
                                            }                   
                                            }                 
                                            )
                                        
                                        }
                                        
                                        
                                    </div>
                                </div>
                            </div> : ''
    }
      
    </>
  )

}

export default Notifications