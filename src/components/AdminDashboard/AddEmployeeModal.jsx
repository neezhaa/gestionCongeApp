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
import { useTranslation } from 'react-i18next';

const AddEmployeeModal = ({ isOpen, onClose, onSubmit }) => {
const { t } = useTranslation();
const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    poste: '',
    solde_conge: 18,
    date_embauche: '',
    is_admin: t('employeeModal.adminOptions.no'),
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
        is_admin: formData.is_admin === t('employeeModal.adminOptions.yes')
    });

    toast.success("Employee added successfully");
    onSubmit(formData);
    onClose();
    } catch(error) {
    toast.error("Error loading data");
    console.log(error);
    }
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
            <Dialog.Title className="text-lg font-medium">
                {t('employeeModal.title')}
            </Dialog.Title>
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
            {/* Left Column */}
            <div className="space-y-4">
                <InputGroup
                icon={<UserIcon className="w-5 h-5 text-gray-400" />}
                label={t('employeeModal.fields.lastName')}
                value={formData.nom}
                onChange={(v) => setFormData({ ...formData, nom: v })}
                />

                <InputGroup
                icon={<EnvelopeIcon className="w-5 h-5 text-gray-400" />}
                label={t('employeeModal.fields.email')}
                type="email"
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
                />

                <InputGroup
                icon={<BriefcaseIcon className="w-5 h-5 text-gray-400" />}
                label={t('employeeModal.fields.position')}
                value={formData.poste}
                onChange={(v) => setFormData({ ...formData, poste: v })}
                />
                
                <InputGroup
                icon={<CalendarDaysIcon className="w-5 h-5 text-gray-400" />}
                label={t('employeeModal.fields.leaveBalance')}
                type="number"
                value={formData.solde_conge}
                onChange={(v) => setFormData({ ...formData, solde_conge: v })}
                />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
                <InputGroup
                icon={<UserIcon className="w-5 h-5 text-gray-400" />}
                label={t('employeeModal.fields.firstName')}
                value={formData.prenom}
                onChange={(v) => setFormData({ ...formData, prenom: v })}
                />
                
                <InputGroup
                icon={<LockClosedIcon className="w-5 h-5 text-gray-400" />}
                label={t('employeeModal.fields.password')}
                type="password"
                value={formData.password}
                onChange={(v) => setFormData({ ...formData, password: v })}
                />

                <InputGroup
                icon={<CalendarDaysIcon className="w-5 h-5 text-gray-400" />}
                label={t('employeeModal.fields.hireDate')}
                type="date"
                value={formData.date_embauche}
                onChange={(v) => setFormData({ ...formData, date_embauche: v })}
                />

                <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                    {t('employeeModal.fields.admin')}
                </label>
                <select
                    value={formData.is_admin}
                    onChange={(e) => setFormData({ ...formData, is_admin: e.target.value })}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value={t('employeeModal.adminOptions.yes')}>
                    {t('employeeModal.adminOptions.yes')}
                    </option>
                    <option value={t('employeeModal.adminOptions.no')}>
                    {t('employeeModal.adminOptions.no')}
                    </option>
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
                {t('employeeModal.buttons.cancel')}
            </button>
            <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
                {t('employeeModal.buttons.add')}
            </button>
            </div>
        </form>
        </Dialog.Panel>
    </div>
    </Dialog>
);
};

const InputGroup = ({ icon, label, type = 'text', value, onChange }) => {
const { i18n } = useTranslation();

return (
    <div className="space-y-1">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="relative rounded-md shadow-sm">
        <div className={`absolute inset-y-0 ${i18n.dir() === 'rtl' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
        {icon}
        </div>
        <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`block w-full ${i18n.dir() === 'rtl' ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
        required
        dir={i18n.dir()}
        
        />
    </div>
    </div>
);
};

export default AddEmployeeModal;