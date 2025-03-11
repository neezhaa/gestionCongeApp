// src/components/EmployeeDashboard/EmployeeLeaveRequestForm.jsx
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";

function EmployeeLeaveRequestForm() {
  const { auth } = useAuth(); // Récupérer les informations de l'employé connecté
  const [formData, setFormData] = useState({
    date_debut: "",
    date_fin: "",
    motif_conge: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ajouter l'ID de l'employé à la demande
      const requestData = {
        ...formData,
        employe_id: auth.user.id, // Assurez-vous que `auth.user.id` contient l'ID de l'employé
      };

      const response = await axios.post(
        "http://localhost:8000/api/conges",
        requestData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      if (response.status === 201) {
        toast.success("Demande de congé soumise avec succès !");
        setFormData({ date_debut: "", date_fin: "", motif_conge: "" });
      } else {
        toast.error("Erreur lors de la soumission de la demande.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur lors de la soumission de la demande.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Faire une demande de congé</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Date de début</label>
          <input
            type="date"
            value={formData.date_debut}
            onChange={(e) =>
              setFormData({ ...formData, date_debut: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date de fin</label>
          <input
            type="date"
            value={formData.date_fin}
            onChange={(e) =>
              setFormData({ ...formData, date_fin: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Motif</label>
          <input
            type="text"
            value={formData.motif_conge}
            onChange={(e) =>
              setFormData({ ...formData, motif_conge: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            placeholder="Motif du congé"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
}

export default EmployeeLeaveRequestForm;