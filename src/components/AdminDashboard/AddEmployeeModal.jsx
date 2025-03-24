// import { useState } from 'react';
// import { Dialog } from '@headlessui/react';
// import {
//   UserIcon,
//   EnvelopeIcon,
//   LockClosedIcon,
//   BriefcaseIcon,
//   CalendarDaysIcon,
//   XMarkIcon,
//   InputGroup
// } from '@heroicons/react/24/outline';

// const AddEmployeeModal = ({ isOpen, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     nom: '',
//     prenom: '',
//     email: '',
//     password: '',
//     poste: '',
//     solde_conge: 0,
//     date_embauche: '',
//     is_admin: 'Non', // Par défaut, l'employé n'est pas admin
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData); // Soumettre les données
//     onClose(); // Fermer la modale
//   };

//   return (
//     <Dialog open={isOpen} onClose={onClose} className="relative z-50">
//       <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//       <div className="fixed inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6">
//           <div className="flex justify-between items-start mb-6">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-blue-100 rounded-full">
//                 <UserIcon className="w-6 h-6 text-blue-600" />
//               </div>
//               <Dialog.Title className="text-lg font-medium">Ajouter un employé</Dialog.Title>
//             </div>
//             <button
//               onClick={onClose}
//               className="p-1 hover:bg-gray-100 rounded-full"
//             >
//               <XMarkIcon className="w-6 h-6 text-gray-500" />
//             </button>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <InputGroup
//                 icon={<UserIcon className="w-5 h-5 text-gray-400" />}
//                 label="Nom"
//                 value={formData.nom}
//                 onChange={(v) => setFormData({ ...formData, nom: v })}
//               />

//               <InputGroup
//                 icon={<UserIcon className="w-5 h-5 text-gray-400" />}
//                 label="Prénom"
//                 value={formData.prenom}
//                 onChange={(v) => setFormData({ ...formData, prenom: v })}
//               />

//               <InputGroup
//                 icon={<EnvelopeIcon className="w-5 h-5 text-gray-400" />}
//                 label="Email"
//                 type="email"
//                 value={formData.email}
//                 onChange={(v) => setFormData({ ...formData, email: v })}
//               />

//               <InputGroup
//                 icon={<LockClosedIcon className="w-5 h-5 text-gray-400" />}
//                 label="Mot de passe"
//                 type="password"
//                 value={formData.password}
//                 onChange={(v) => setFormData({ ...formData, password: v })}
//               />

//               <InputGroup
//                 icon={<BriefcaseIcon className="w-5 h-5 text-gray-400" />}
//                 label="Poste"
//                 value={formData.poste}
//                 onChange={(v) => setFormData({ ...formData, poste: v })}
//               />

//               <InputGroup
//                 icon={<CalendarDaysIcon className="w-5 h-5 text-gray-400" />}
//                 label="Solde de congé"
//                 type="number"
//                 value={formData.solde_conge}
//                 onChange={(v) => setFormData({ ...formData, solde_conge: v })}
//               />

//               <InputGroup
//                 icon={<CalendarDaysIcon className="w-5 h-5 text-gray-400" />}
//                 label="Date d'embauche"
//                 type="date"
//                 value={formData.date_embauche}
//                 onChange={(v) => setFormData({ ...formData, date_embauche: v })}
//               />

//               <div className="space-y-1">
//                 <label className="block text-sm font-medium text-gray-700">Is Admin</label>
//                 <select
//                   value={formData.is_admin}
//                   onChange={(e) => setFormData({ ...formData, is_admin: e.target.value })}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="Oui">Oui</option>
//                   <option value="Non">Non</option>
//                 </select>
//               </div>

//               <div className="flex justify-end gap-4 mt-6">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
//                 >
//                   Annuler
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
//                 >
//                   Ajouter
//                 </button>
//               </div>
//             </div>
//           </form>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// };

// export default AddEmployeeModal;


import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { toast } from 'sonner';
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import api from '../../services/api';

const AddEmployeeModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    poste: '',
    solde_conge: 18,
    date_embauche: '',
    is_admin: 'Non', // Par défaut, l'employé n'est pas admin
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post('/employes', {
        prenom: formData.prenom,
        nom: formData.nom,
        email: formData.email,
        password: formData.password,
        poste: formData.poste,
        solde_conge: formData.solde_conge,
        date_embauche: formData.date_embauche,
        is_admin: formData.is_admin == 'Non' ? false : true 
      });

      toast.success('Employé ajouté avec succès');


    }catch(error){

      toast.error('Erreur de chargement des données');
      console.log(error);

    }



    onSubmit(formData); 
    onClose(); // Fermer la modale
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl rounded-lg bg-white p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <UserIcon className="w-6 h-6 text-blue-600" />
              </div>
              <Dialog.Title className="text-lg font-medium">Ajouter un employé</Dialog.Title>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              {/* Colonne de gauche */}
              <div className="space-y-4">
                <InputGroup
                  icon={<UserIcon className="w-5 h-5 text-gray-400" />}
                  label="Nom"
                  value={formData.nom}
                  onChange={(v) => setFormData({ ...formData, nom: v })}
                />

                <InputGroup
                  icon={<EnvelopeIcon className="w-5 h-5 text-gray-400" />}
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                />

                <InputGroup
                  icon={<BriefcaseIcon className="w-5 h-5 text-gray-400" />}
                  label="Poste"
                  value={formData.poste}
                  onChange={(v) => setFormData({ ...formData, poste: v })}
                />
                 <InputGroup
                  icon={<CalendarDaysIcon className="w-5 h-5 text-gray-400" />}
                  label="Solde de congé"
                  type="number"
                  value={formData.solde_conge}
                  onChange={(v) => setFormData({ ...formData, solde_conge: v })}
                />
              
              </div>

              {/* Colonne de droite */}
              <div className="space-y-4">
                <InputGroup
                  icon={<UserIcon className="w-5 h-5 text-gray-400" />}
                  label="Prénom"
                  value={formData.prenom}
                  onChange={(v) => setFormData({ ...formData, prenom: v })}
                />
                <InputGroup
                  icon={<LockClosedIcon className="w-5 h-5 text-gray-400" />}
                  label="Mot de passe"
                  type="password"
                  value={formData.password}
                  onChange={(v) => setFormData({ ...formData, password: v })}
                />

                <InputGroup
                  icon={<CalendarDaysIcon className="w-5 h-5 text-gray-400" />}
                  label="Date d'embauche"
                  type="date"
                  value={formData.date_embauche}
                  onChange={(v) => setFormData({ ...formData, date_embauche: v })}
                />

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Admin</label>
                  <select
                    value={formData.is_admin}
                    onChange={(e) => setFormData({ ...formData, is_admin: e.target.value })}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Ajouter
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

const InputGroup = ({ icon, label, type = 'text', value, onChange }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  </div>
);

export default AddEmployeeModal;