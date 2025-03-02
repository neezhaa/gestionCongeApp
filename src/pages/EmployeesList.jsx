import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Employees() {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortedColumn, setSortedColumn] = useState("nom");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const [showOptions, setShowOptions] = useState(null); // To manage the display of options menu

  const fetchEmployees = async () => {
    try {
      const { data, status } = await axios.get("http://127.0.0.1:8000/api/employes");
      if (status === 200) {
        setEmployees(data);
      } else {
        console.error("Failed fetching employees");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSort = (column) => {
    setSortedColumn(column);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedEmployees = employees
    .filter((emp) => emp.nom.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      const comparison = a[sortedColumn].localeCompare(b[sortedColumn]);
      return sortOrder === "asc" ? comparison : -comparison;
    });

  const currentEmployees = sortedEmployees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleOptions = (index) => {
    setShowOptions((prevIndex) => (prevIndex === index ? null : index));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white h-full w-[99%] p-10 m-2 border-2 border-gray-200 rounded-xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Employees Management</h1>
          <p className="text-muted-foreground">Here's a list of your employees</p>
        </div>
      </div>
        <Input
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          class
        />

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 cursor-pointer flex items-center" onClick={() => handleSort("nom")}>
              Name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-arrow-${sortOrder === "asc" ? "up" : "down"}`}
                viewBox="0 0 16 16"
              >
                <path d={sortOrder === "asc" ? "M8 0l4 4H9v8H7V4H4l4-4z" : "M8 16l-4-4h3V4h2v8h3l-4 4z"} />
              </svg>
            </th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Hire Date</th>
            <th className="px-4 py-2">Leave Balance</th>
            <th className="px-4 py-2">Options</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((emp, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{emp.nom}</td>
              <td className="px-4 py-2">{emp.prenom}</td>
              <td className="px-4 py-2">{emp.poste}</td>
              <td className="px-4 py-2">{emp.date_embauche}</td>
              <td className="px-4 py-2">{emp.solde_conge}</td>
              <td className="px-4 py-2">
                <div className="relative">
                  <button className="p-2" onClick={() => toggleOptions(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                    </svg>
                  </button>
                  {showOptions === index && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                      <ul>
                        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => alert(`Edit ${emp.nom}`)}>
                          Edit
                        </li>
                        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => alert(`Delete ${emp.nom}`)}>
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <Button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
        <div>
          Page {currentPage} of {Math.ceil(sortedEmployees.length / itemsPerPage)}
        </div>
        <Button onClick={() => handlePagination(currentPage + 1)} disabled={currentPage === Math.ceil(sortedEmployees.length / itemsPerPage)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Employees;
