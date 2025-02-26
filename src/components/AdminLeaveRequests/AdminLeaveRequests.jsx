import { useEffect, useState } from 'react'
import check from '../../assets/check.svg'
import x from '../../assets/x.svg'
import bell from '../../assets/bell.svg'
import arrow from '../../assets/arrow-right-svgrepo-com.svg'
import './AdminLeaveRequests.css'
import axios from 'axios'
import { toast } from 'sonner'

function AdminLeaveRequests() {

  const [conges, setConges] = useState([])
  const [employes, setEmployes] = useState([]);
  const [loading, setLoading] = useState(true);

  const month = {
    '01': "January",
    '02': "February",
    '03': "March",
    '04': "April",
    '05': "May",
    '06': "June",
    '07': "July",
    '08': "August",
    '09': "September",
    '10': "October",
    '11': "November",
    '12': "December",
  };

  const getMonth = (num) => month[num];

  async function getDemandeConges(){
    try {

      const resp = await axios.get("http://localhost:8000/api/conges",  {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
    });
      setConges(resp.data)
      setLoading(false)
      console.log(conges)
  
    } catch (error) {
      console.log(error.message);
      setLoading(false)
    }
  }
  async function getEmployes(){
    const resp = await axios.get('http://127.0.0.1:8000/api/employes');
    setEmployes(resp.data)
    setLoading(false)
    console.log('employes', employes)
    console.log('token: ', localStorage.getItem('authToken'))
  }

  useEffect(() => {

    getDemandeConges();
    getEmployes();
    console.log(conges)

  }, [])

  const rejectLeaveRequest = async (employeID, demandeCongeID) => {

    try {
    const token = localStorage.getItem('authToken'); 
    console.log('token', token)
      const response = await axios.post(
        'http://127.0.0.1:8000/api/notifications',
        {
          employe_id: employeID,
          type: 'reponse_demande',
          message: 'Demande de congé rejetée',
          demande_conge_id: demandeCongeID,

        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json',
          },
        })
        toast.success("Demande de congé rejetée avec succès !");
      console.log('Notification envoyée et demande rejetée:', response.data);
    } catch (error) {

      toast.error("Échec du rejet de la demande. Veuillez réessayer !")
      console.error('Erreur lors du rejet de la demande:', error);
    }
  };

  const acceptLeaveRequest = async (employeID, demandeCongeID) => {

    try {
    const token = localStorage.getItem('authToken'); 
    console.log('token', token)
      const response = await axios.post(
        'http://127.0.0.1:8000/api/notifications',
        {
          employe_id: employeID,
          type: 'reponse_demande',
          message: 'Demande de congé acceptée',
          demande_conge_id: demandeCongeID,

        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json',
          },
        })
        toast.success("Demande de congé acceptée avec succès !");
      console.log('Notification envoyée et demande acceptée:', response.data);
    } catch (error) {
      toast.error("Échec d'acceptation de la demande. Veuillez réessayer !")
      console.error("Erreur lors de l'accepation  de la demande:", error);
    }
  };

  

  

  if(loading) return (
        <div className="w-[55rem] bg-white rounded-[16px] border border-[2px] border-gray-300 mt-[6px] ml-[6px]">
          <div className="h-3 m-8 w-64 animate-pulse rounded-full bg-gray-200"></div>
          <div className="flex animate-pulse space-x-6 px-8">
            <div className="size-12 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-3 rounded-full bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-3 rounded-full bg-gray-200"></div>
                  <div className="col-span-1 h-3 rounded-full bg-gray-200"></div>
                </div>
                <div className="h-3 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
  )


  
  return (
    

    <div className='bg-pannel'>
      <p className='header'>En attente de validation</p>
      
      {
        conges.map((conge, index) =>  {
          return  <div className='row' key={index}>
                    <div className='profile' key={index}>
                      {
                        employes.map(emp =>{  if(emp.id == conge.employe_id){
                          if(emp.genre == 'male')  {

                            return <><img className='img-profile' src="https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.269041590.1690740809&semt=ais_hybrid" alt="not found" /></>
                          
                          }else{

                            return <><img className='img-profile' src="https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg?ga=GA1.1.241166601.1739396509&semt=ais_authors_boost" alt="" /></>
                          
                          }}
                        })
                      }
                        {
                          employes.map((employe, index) => {

                            if(conge.employe_id == employe.id){
                              
                              return <div className='employe' key={index}>
                                        <p className='name'>{employe.nom} {employe.prenom} </p>
                                        <p className='profession'>{employe.poste}</p>
                                    </div>       
                            }
                          })
                        }
                    </div>
                    <div className='conge-info'>
                      <img src={bell} alt="not found" className='conge-icon' />
                      <div>
                        <p className='conge-type'>{conge.motif_conge}</p>
                        <p className='conge-duree'>{conge.nbr_jours_demandes} jours</p>
                      </div>
                    </div>
                    <div className='duree-conge'>
                      <div className='date'>
                        <p className='one'>{conge.date_debut.split('-')[2]}</p>
                        <p className='two'>{getMonth(conge.date_debut.split('-')[1]).substring(0,3)} {conge.date_debut.split('-')[2]}</p>
                      </div>
                      <img className='arrow' src={arrow} alt="not found"  />

                      <div className='date'>
                        <p className='one'>{conge.date_fin.split('-')[2]}</p>
                        <p className='two'>{getMonth(conge.date_fin.split('-')[1]).substring(0,3)} {conge.date_fin.split('-')[2]}</p>

                      </div>
                    </div>
                    <div className='check-reject'>
                      <img src={x} alt="not found"  className='x-icon' onClick={() => rejectLeaveRequest(conge.employe_id, conge.id)}  />
                      <img src={check} alt="not found" className='check-icon' onClick={() => acceptLeaveRequest(conge.employe_id, conge.id)} />

                    </div>
                </div>
                })

          
      }
      
    </div>
  )
}

export default AdminLeaveRequests;
