import { useState, useEffect } from 'react';
import { useLeaveContext } from "../context/LeaveContext";
import { 
  ChevronUpIcon, 
  ChevronDownIcon, 
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
  UserIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { Menu, Transition, Dialog } from '@headlessui/react';

const EmployeesTable = () => {
  const { employees, handleDeleteEmployee, handleEditEmployee } = useLeaveContext();
  const [filterQuery, setFilterQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  // Filtering logic
  const filteredEmployees = employees.filter(employee =>
    Object.values(employee).some(value =>
      String(value).toLowerCase().includes(filterQuery.toLowerCase())
  ));

  // Sorting logic
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedEmployees.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedEmployees.length / itemsPerPage);

  // Sort handler
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Leave balance status indicator
  const getLeaveStatus = (balance) => {
    if (balance >= 15) return 'bg-green-100 text-green-800';
    if (balance >= 10) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 rounded-full">
              <TrashIcon className="w-6 h-6 text-red-600" />
            </div>
            <Dialog.Title className="text-lg font-medium">Confirmer la suppression</Dialog.Title>
          </div>
          
          <p className="text-gray-600 mb-6">
            Êtes-vous sûr de vouloir supprimer cet employé ? Cette action est irréversible.
          </p>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
            >
              Confirmer
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );

  const EditEmployeeModal = ({ isOpen, onClose, employee, onSubmit }) => {
    const [formData, setFormData] = useState(employee || {});

    useEffect(() => {
      setFormData(employee || {});
    }, [employee]);

    return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <PencilIcon className="w-6 h-6 text-blue-600" />
                </div>
                <Dialog.Title className="text-lg font-medium">Modifier l&apos;employé</Dialog.Title>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
              <div className="space-y-4">
                <InputGroup
                  icon={<UserIcon className="w-5 h-5 text-gray-400" />}
                  label="Prénom"
                  value={formData.prenom || ''}
                  onChange={(v) => setFormData({ ...formData, prenom: v })}
                />

                <InputGroup
                  icon={<UserIcon className="w-5 h-5 text-gray-400" />}
                  label="Nom"
                  value={formData.nom || ''}
                  onChange={(v) => setFormData({ ...formData, nom: v })}
                />

                <InputGroup
                  icon={<EnvelopeIcon className="w-5 h-5 text-gray-400" />}
                  label="Email"
                  type="email"
                  value={formData.email || ''}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                />

                <InputGroup
                  icon={<BriefcaseIcon className="w-5 h-5 text-gray-400" />}
                  label="Poste"
                  value={formData.poste || ''}
                  onChange={(v) => setFormData({ ...formData, poste: v })}
                />

                <InputGroup
                  icon={<CalendarDaysIcon className="w-5 h-5 text-gray-400" />}
                  label="Solde de congé"
                  type="number"
                  value={formData.solde_conge || 0}
                  onChange={(v) => setFormData({ ...formData, solde_conge: v })}
                />

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
                    Enregistrer
                  </button>
                </div>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    );
  };

  return (
    <div className="bg-white ml-[5.5rem] p-6 rounded-lg shadow-lg mr-6 mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-xl font-bold">Tous les employés</h2>
        <div className="flex gap-4 w-full sm:w-96">
          <input
            type="text"
            placeholder="Rechercher des employés..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                { key: 'prenom', label: 'Nom' },
                { key: 'email', label: 'Email' },
                { key: 'poste', label: 'Poste' },
                { key: 'solde_conge', label: 'Solde congé' },
              ].map((header) => (
                <th
                  key={header.key}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort(header.key)}
                >
                  <div className="flex items-center gap-1">
                    {header.label}
                    {sortConfig.key === header.key && (
                      sortConfig.direction === 'asc' ? (
                        <ChevronUpIcon className="w-4 h-4" />
                      ) : (
                        <ChevronDownIcon className="w-4 h-4" />
                      )
                    )}
                  </div>
                </th>
              ))}
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="inline-block h-8 w-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3">
                      {employee.prenom[0]}
                    </span>
                    {employee.prenom} {employee.nom}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.poste}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getLeaveStatus(employee.solde_conge)}`}>
                    {employee.solde_conge} jours
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                  <Menu as="div" className="inline-block text-left">
                    <Menu.Button
                      onClick={() => setActiveMenu(activeMenu === employee.id ? null : employee.id)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      <EllipsisVerticalIcon className="h-5 w-5" />
                    </Menu.Button>
                    <Transition
                      show={activeMenu === employee.id}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  setEditedEmployee(employee);
                                  setIsEditModalOpen(true);
                                  setActiveMenu(null);
                                }}
                                className={`${
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                } block w-full px-4 py-2 text-sm text-left`}
                              >
                                Modifier
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  setActiveMenu(null);
                                  setEmployeeToDelete(employee);
                                }}
                                className={`${
                                  active ? 'bg-gray-100 text-red-600' : 'text-red-600'
                                } block w-full px-4 py-2 text-sm text-left`}
                              >
                                Supprimer
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteConfirmationModal
        isOpen={!!employeeToDelete}
        onClose={() => setEmployeeToDelete(null)}
        onConfirm={async () => {
          if (employeeToDelete) {
            await handleDeleteEmployee(employeeToDelete.id);
            setEmployeeToDelete(null);
          }
        }}
      />

      <EditEmployeeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        employee={editedEmployee}
        onSubmit={async (formData) => {
          const success = await handleEditEmployee(editedEmployee.id, formData);
          if (success) {
            setIsEditModalOpen(false);
            setEditedEmployee(null);
          }
        }}
      />

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">
            Affichage de {indexOfFirstItem + 1} à {Math.min(indexOfLastItem, sortedEmployees.length)} sur {sortedEmployees.length} résultats
          </span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border rounded-md px-2 py-1 text-sm"
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size} par page
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Précédent
          </button>
          <span className="px-3 py-1 text-sm">
            Page {currentPage} sur {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>

      {currentItems.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun employé trouvé
        </div>
      )}
    </div>
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

export default EmployeesTable;