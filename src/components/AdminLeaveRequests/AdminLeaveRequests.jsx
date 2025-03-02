// import { useEffect, useState } from 'react'
// import check from '../../assets/check.svg'
// import x from '../../assets/x.svg'
// import bell from '../../assets/bell.svg'
// import arrow from '../../assets/arrow-right-svgrepo-com.svg'
// import './AdminLeaveRequests.css'
// import axios from 'axios'
// import { toast } from 'sonner'

// function AdminLeaveRequests() {

//   const [conges, setConges] = useState([])
//   const [employes, setEmployes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const month = {
//     '01': "January",
//     '02': "February",
//     '03': "March",
//     '04': "April",
//     '05': "May",
//     '06': "June",
//     '07': "July",
//     '08': "August",
//     '09': "September",
//     '10': "October",
//     '11': "November",
//     '12': "December",
//   };

//   const getMonth = (num) => month[num];

//   async function getDemandeConges(){
//     try {

//       const resp = await axios.get("http://localhost:8000/api/conges",  {
//         headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
//     });
//       setConges(resp.data)
//       setLoading(false)
//       console.log(conges)
  
//     } catch (error) {
//       console.log(error.message);
//       setLoading(false)
//     }
//   }
//   async function getEmployes(){
//     const resp = await axios.get('http://127.0.0.1:8000/api/employes');
//     setEmployes(resp.data)
//     setLoading(false)
//     console.log('employes', employes)
//     console.log('token: ', localStorage.getItem('authToken'))
//   }

//   useEffect(() => {

//     getDemandeConges();
//     getEmployes();
//     console.log(conges)

//   }, [])

//   const rejectLeaveRequest = async (employeID, demandeCongeID) => {

//     try {
//     const token = localStorage.getItem('authToken'); 
//     console.log('token', token)
//       const response = await axios.post(
//         'http://127.0.0.1:8000/api/notifications',
//         {
//           employe_id: employeID,
//           type: 'reponse_demande',
//           message: 'Demande de congé rejetée',
//           demande_conge_id: demandeCongeID,

//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('authToken')}`,
//             'Content-Type': 'application/json',
//           },
//         })
//         toast.success("Demande de congé rejetée avec succès !");
//       console.log('Notification envoyée et demande rejetée:', response.data);
//     } catch (error) {

//       toast.error("Échec du rejet de la demande. Veuillez réessayer !")
//       console.error('Erreur lors du rejet de la demande:', error);
//     }
//   };

//   const acceptLeaveRequest = async (employeID, demandeCongeID) => {

//     try {
//     const token = localStorage.getItem('authToken'); 
//     console.log('token', token)
//       const response = await axios.post(
//         'http://127.0.0.1:8000/api/notifications',
//         {
//           employe_id: employeID,
//           type: 'reponse_demande',
//           message: 'Demande de congé acceptée',
//           demande_conge_id: demandeCongeID,

//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('authToken')}`,
//             'Content-Type': 'application/json',
//           },
//         })
//         toast.success("Demande de congé acceptée avec succès !");
//       console.log('Notification envoyée et demande acceptée:', response.data);
//     } catch (error) {
//       toast.error("Échec d'acceptation de la demande. Veuillez réessayer !")
//       console.error("Erreur lors de l'accepation  de la demande:", error);
//     }
//   };

  

  

//   if(loading) return (
//         <div className="w-[55rem] bg-white rounded-[16px] border border-[2px] border-gray-300 mt-[6px] ml-[6px]">
//           <div className="h-3 m-8 w-64 animate-pulse rounded-full bg-gray-200"></div>
//           <div className="flex animate-pulse space-x-6 px-8">
//             <div className="size-12 rounded-full bg-gray-200"></div>
//             <div className="flex-1 space-y-6 py-1">
//               <div className="h-3 rounded-full bg-gray-200"></div>
//               <div className="space-y-3">
//                 <div className="grid grid-cols-3 gap-4">
//                   <div className="col-span-2 h-3 rounded-full bg-gray-200"></div>
//                   <div className="col-span-1 h-3 rounded-full bg-gray-200"></div>
//                 </div>
//                 <div className="h-3 rounded-full bg-gray-200"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//   )


  
//   return (
    

//     <div className='bg-pannel'>
//       <p className='header'>En attente de validation</p>
      
//       {
//         conges.map((conge, index) =>  {
//           return  <div className='row' key={index}>
//                     <div className='profile' key={index}>
//                       {
//                         employes.map(emp =>{  if(emp.id == conge.employe_id){
//                           if(emp.genre == 'male')  {

//                             return <><img className='img-profile' src="https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.269041590.1690740809&semt=ais_hybrid" alt="not found" /></>
                          
//                           }else{

//                             return <><img className='img-profile' src="https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg?ga=GA1.1.241166601.1739396509&semt=ais_authors_boost" alt="" /></>
                          
//                           }}
//                         })
//                       }
//                         {
//                           employes.map((employe, index) => {

//                             if(conge.employe_id == employe.id){
                              
//                               return <div className='employe' key={index}>
//                                         <p className='name'>{employe.nom} {employe.prenom} </p>
//                                         <p className='profession'>{employe.poste}</p>
//                                     </div>       
//                             }
//                           })
//                         }
//                     </div>
//                     <div className='conge-info'>
//                       <img src={bell} alt="not found" className='conge-icon' />
//                       <div>
//                         <p className='conge-type'>{conge.motif_conge}</p>
//                         <p className='conge-duree'>{conge.nbr_jours_demandes} jours</p>
//                       </div>
//                     </div>
//                     <div className='duree-conge'>
//                       <div className='date'>
//                         <p className='one'>{conge.date_debut.split('-')[2]}</p>
//                         <p className='two'>{getMonth(conge.date_debut.split('-')[1]).substring(0,3)} {conge.date_debut.split('-')[2]}</p>
//                       </div>
//                       <img className='arrow' src={arrow} alt="not found"  />

//                       <div className='date'>
//                         <p className='one'>{conge.date_fin.split('-')[2]}</p>
//                         <p className='two'>{getMonth(conge.date_fin.split('-')[1]).substring(0,3)} {conge.date_fin.split('-')[2]}</p>

//                       </div>
//                     </div>
//                     <div className='check-reject'>
//                       <img src={x} alt="not found"  className='x-icon' onClick={() => rejectLeaveRequest(conge.employe_id, conge.id)}  />
//                       <img src={check} alt="not found" className='check-icon' onClick={() => acceptLeaveRequest(conge.employe_id, conge.id)} />

//                     </div>
//                 </div>
//                 })

          
//       }
      
//     </div>
//   )
// }

// export default AdminLeaveRequests;





import { format } from 'date-fns';
import { 
  BellAlertIcon,
  ArrowRightIcon,
  XMarkIcon,
  CheckIcon 
} from "@heroicons/react/24/outline";
import { useLeaveContext } from '../../context/LeaveContext';
import { Link } from 'react-router-dom';

const LeaveRequestsTable = ({ maxItems }) => {

    const { 
        leaveRequests, 
        handleAction, 
        exitingIds, 
        loading 
    } = useLeaveContext();

    // Tri et limitation stricte
    const sortedRequests = [...leaveRequests]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, maxItems || leaveRequests.length);

    const shouldShowLink = maxItems && leaveRequests.length > maxItems;
    
    
    if (loading) return (
    <div className="bg-white rounded-lg border shadow-lg mt-[6px] ml-[6px]">
        <div className="h-3 m-6 w-64 animate-pulse rounded-full bg-gray-200"></div>
        {[...Array(maxItems || 4)].map((_, i) => (
        <div key={i} className="flex animate-pulse space-x-6 px-8 py-2 border-t border-gray-200">
            <div className="size-12 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-2">
            <div className="h-4 rounded-full bg-gray-200 w-3/4"></div>
            <div className="h-3 rounded-full bg-gray-200 w-1/2"></div>
            </div>
        </div>
        ))}
    </div>
    );

  return (
    <div className="bg-white rounded-xl shadow-lg m-[6px_0px_0px_6px] relative">

        <div className="flex justify-between items-center px-5 py-2">
            <p className="font-semibold text-xl">En attente de validation</p>
            {shouldShowLink && (
            <Link 
                to="/all-requests" 
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
            >
                Voir toutes les demandes
                <ArrowRightIcon className="ml-1 w-4 h-4" />
            </Link>
            )}
        </div>

        <div className="overflow-y-auto max-h-[600px]">
            {sortedRequests.map((request) => (
                <div
                    key={request.id}
                    className={`border-t border-gray-100 flex justify-evenly items-center p-2 hover:bg-gray-50 transition-colors duration-500 ${
                        exitingIds.includes(request.id) 
                        ? 'opacity-0 translate-x-full' 
                        : 'opacity-100 translate-x-0'
                    }`}
                >
          

                {/* Employee Info */}
            <div className="flex items-center w-1/4">
                <img
                    className="h-9 mr-2.5"
                    src={request.employe.genre === 'male' 
                        ? "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg" 
                        : "https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg"}
                    alt="profile"
                />
                <div className="ml-2">
                    <p className="font-medium">{request.employe.nom} {request.employe.prenom}</p>
                    <p className="font-normal text-xs text-[#00000078] -mt-1">{request.employe.poste}</p>
                </div>
            </div>

            {/* Leave Type */}
            <div className="flex items-center w-1/4">
                <BellAlertIcon className="h-5 w-5 mr-2.5 text-gray-600" />
                <div>
                    <p className="font-medium text-sm capitalize">{request.motif_conge}</p>
                    <p className="text-xs text-[#00000094] -mt-1 font-medium">
                        {request.nbr_jours_demandes} jours
                    </p>
                </div>
            </div>

            {/* Dates */}
            <div className="flex items-center justify-center w-1/4">
                <div className="min-w-14 border-2 border-[#00000030] flex flex-col items-center rounded  py-1">
                    <p className="text-lg font-semibold">
                        {format(new Date(request.date_debut), 'dd')}
                    </p>
                    <p className="text-[10px] font-bold text-[#00000066] -mt-1">
                        {format(new Date(request.date_debut), 'MMM dd')}
                    </p>
                </div>
                <ArrowRightIcon className="h-5 w-5 mx-1 text-gray-500" />
                <div className="min-w-14 border-2 border-[#00000030] flex flex-col items-center rounded py-1">
                    <p className="text-lg font-semibold">
                        {format(new Date(request.date_fin), 'dd')}
                    </p>
                    <p className="text-[10px] font-bold text-[#00000066] -mt-1">
                        {format(new Date(request.date_fin), 'MMM dd')}
                    </p>
                </div>
            </div>


                
            <div className="flex w-fit space-x-2">
                <button 
                    onClick={() => handleAction(request.id, 'reject')}
                    className="flex justify-center items-center border-2 border-[#FF2626] p-2 rounded-full w-10 h-10 hover:scale-110 transition-transform cursor-pointer hover:shadow-md"
                >
                    <XMarkIcon className="w-7 h-7 stroke-[#FF2626] stroke-[2px]" />
                </button>
                <button 
                    onClick={() => handleAction(request.id, 'approve')}
                    className="border-2 border-[#4CFF67] p-2 rounded-full w-10 h-10 hover:scale-110 transition-transform cursor-pointer hover:shadow-md flex items-center justify-center"
                >
                    <CheckIcon className="w-7 h-6 stroke-[#4CFF67] stroke-[2px]" />
                </button>
            </div>
        </div>
        ))}
        {sortedRequests.length === 0 && !loading && (
            <div className="p-6 text-center text-gray-500">
                Aucune demande en attente
            </div>
        )}
    </div>
    </div>
  );
};

export default LeaveRequestsTable;