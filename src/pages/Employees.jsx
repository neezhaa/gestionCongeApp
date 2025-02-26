import axios from "axios";
import { useEffect, useState } from "react";

function Employees() {
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);

    const getEmployees = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/employes');
            if (res.status === 200) {
                setEmployees(res.data);
            } else {
                console.error('Failed fetching employees');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getEmployees();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Employees Management</h2>
                    <p className="text-muted-foreground">Here&apos;s a list of your employees</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="border rounded-sm">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50">
                                    {['Nom', 'Prénom', 'Poste', 'Date d&apos;embauche', 'Solde congé'].map((header, index) => (
                                        <th key={index} className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
                                            <div>{header}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {employees.map(employee => (
                                    <tr key={employee.id} className="border-b transition-colors hover:bg-muted/50">
                                        <td className="p-2 align-middle">{employee.nom}</td>
                                        <td className="p-2 align-middle">{employee.prenom}</td>
                                        <td className="p-2 align-middle">{employee.poste}</td>
                                        <td className="p-2 align-middle">{employee.date_embauche}</td>
                                        <td className="p-2 align-middle">{employee.solde_conge}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employees;
