import { useState } from 'react';
import { XMarkIcon, CalendarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { useLeaveContext } from '../../context/LeaveContext';

const LeaveForm = ({ isOpen, onClose, employeeId }) => {
  const [formData, setFormData] = useState({
    nbr_jours_demandes: '',
    motif_conge: 'vacances',
    date_debut: '',
    date_fin: '',
  });

  const { handleCreateRequest } = useLeaveContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const success = await handleCreateRequest(employeeId, formData);
    
    if (success) {
      onClose();
      setFormData({
        nbr_jours_demandes: '',
        motif_conge: 'vacances',
        date_debut: '',
        date_fin: '',
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl w-full max-w-md relative">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <DocumentTextIcon className="w-6 h-6 mr-2 text-blue-600" />
              Nouvelle demande
            </h2>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg"
            >
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre de jours</label>
                <div className="relative">
                  <input
                    type="number"
                    name="nbr_jours_demandes"
                    value={formData.nbr_jours_demandes}
                    onChange={(e) => setFormData({...formData, nbr_jours_demandes: e.target.value})}
                    className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    min="1"
                  />
                  <CalendarIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Motif</label>
                <div className="relative">
                  <select
                    name="motif_conge"
                    value={formData.motif_conge}
                    onChange={(e) => setFormData({...formData, motif_conge: e.target.value})}
                    className="w-full p-2 pl-10 border rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="vacances">Vacances</option>
                    <option value="maladie">Maladie</option>
                    <option value="congé maternité">Congé maternité</option>
                    <option value="congé paternité">Congé paternité</option>
                    <option value="congé évènement familial">Congé évènement familial</option>
                    <option value="congé naissance enfant">Congé naissance enfant</option>
                    <option value="congé formation">Congé formation</option>
                    <option value="congé personnel">Congé personnel</option>
                    <option value="congé voyage affaires">Congé voyage affaires</option>
                    <option value="congé fin année">Congé fin année</option>
                    <option value="congé déménagement">Congé déménagement</option>
                    <option value="congé marriage">Congé marriage</option>
                    <option value="congé adoption">Congé adoption</option>
                    <option value="congé études">Congé études</option>
                    <option value="congé sans solde">Congé sans solde</option>
                    <option value="congé deuil">Congé deuil</option>
                    <option value="congé solidarité familiale">Congé solidarité familiale</option>
                    <option value="congé religieux">Congé religieux</option>
                  </select>
                  <DocumentTextIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date de début</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date_debut"
                      value={formData.date_debut}
                      onChange={(e) => setFormData({...formData, date_debut: e.target.value})}
                      className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <CalendarIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Date de fin</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date_fin"
                      value={formData.date_fin}
                      onChange={(e) => setFormData({...formData, date_fin: e.target.value})}
                      className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <CalendarIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Soumettre
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;