import { useState, useEffect } from 'react';
import { useLeaveContext } from "../context/LeaveContext";
import { ChevronUpIcon, ChevronDownIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
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
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (editedEmployee) {
      setFormData(editedEmployee);
    }
  }, [editedEmployee]);

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

  const handleEditClick = (employee) => {
    setEditedEmployee(employee);
    setIsEditModalOpen(true);
    setActiveMenu(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await handleEditEmployee(editedEmployee.id, formData);
    if (success) {
      setIsEditModalOpen(false);
      setEditedEmployee(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mx-6 mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-xl font-bold">Employees Directory</h2>
        <div className="flex gap-4 w-full sm:w-96">
          <input
            type="text"
            placeholder="Search employees..."
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
                { key: 'prenom', label: 'Name' },
                { key: 'email', label: 'Email' },
                { key: 'poste', label: 'Position' },
                { key: 'solde_conge', label: 'Leave Balance' },
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
                    {employee.solde_conge} days
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
                                onClick={() => handleEditClick(employee)}
                                className={`${
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                } block w-full px-4 py-2 text-sm text-left`}
                              >
                                Edit
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={async () => {
                                  setActiveMenu(null);
                                  if (window.confirm('Are you sure you want to delete this employee?')) {
                                    await handleDeleteEmployee(employee.id);
                                  }
                                }}
                                className={`${
                                  active ? 'bg-gray-100 text-red-600' : 'text-red-600'
                                } block w-full px-4 py-2 text-sm text-left`}
                              >
                                Delete
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

      {/* Edit Modal */}
      <Dialog open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-4">Edit Employee</Dialog.Title>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    value={formData.prenom || ''}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    value={formData.nom || ''}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Position</label>
                  <input
                    type="text"
                    value={formData.poste || ''}
                    onChange={(e) => setFormData({ ...formData, poste: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Leave Balance</label>
                  <input
                    type="number"
                    value={formData.solde_conge || 0}
                    onChange={(e) => setFormData({ ...formData, solde_conge: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedEmployees.length)} of {sortedEmployees.length} results
          </span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border rounded-md px-2 py-1 text-sm"
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size} per page
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
            Previous
          </button>
          <span className="px-3 py-1 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      {currentItems.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No employees found matching your criteria
        </div>
      )}
    </div>
  );
};

export default EmployeesTable;