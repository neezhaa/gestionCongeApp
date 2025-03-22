import { useState } from "react";
import { toast } from "sonner";
import api from "@/services/api";
import { useNavigate } from "react-router-dom";

function AccountSettings() {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Validate passwords
      if (passwords.new !== passwords.confirm) {
        throw new Error("Les nouveaux mots de passe ne correspondent pas");
      }

      // Send update request
      await api.put(
        "/update-password",
        {
            current_password: passwords.current,
            new_password: passwords.new,
            new_password_confirmation: passwords.confirm,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      toast.success("Mot de passe mis à jour avec succès");
      setPasswords({ current: "", new: "", confirm: "" });

      navigate('/dashboard')

    } catch (error) {
      setError(error.response?.data?.message || error.message);
      toast.error("Échec de la mise à jour");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex-1 pl-6">
      <div>
        <h2 className="text-lg font-medium">Paramètres du compte</h2>
        <p className="text-sm text-muted-foreground">
          Mettez à jour votre mot de passe et vos préférences linguistiques
        </p>
      </div>

      <div className="bg-border h-[1px] w-full shrink-0 my-6" />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Password Update Section */}
        <div className="space-y-4">
          <h3 className="font-medium">Mot de passe</h3>

          {/* Current Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Mot de passe actuel</label>
            <div className="relative">
              <input
                type={showPassword.current ? "text" : "password"}
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                className="input-field"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, current: !prev.current }))
                }
                className="absolute right-3 top-2 text-sm text-muted-foreground"
              >
                {showPassword.current ? "Masquer" : "Afficher"}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Nouveau mot de passe</label>
            <div className="relative">
              <input
                type={showPassword.new ? "text" : "password"}
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                className="input-field"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                }
                className="absolute right-3 top-2 text-sm text-muted-foreground"
              >
                {showPassword.new ? "Masquer" : "Afficher"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Confirmer le mot de passe</label>
            <div className="relative">
              <input
                type={showPassword.confirm ? "text" : "password"}
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                className="input-field"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))
                }
                className="absolute right-3 top-2 text-sm text-muted-foreground"
              >
                {showPassword.confirm ? "Masquer" : "Afficher"}
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="font-bold text-sm text-destructive">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-button"
          disabled={submitting}
        >
          {submitting ? "Mise à jour en cours..." : "Mettre à jour les paramètres"}
        </button>
      </form>
    </div>
  );
}

export default AccountSettings;