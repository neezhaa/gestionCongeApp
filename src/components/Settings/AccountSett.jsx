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
        throw new Error("New passwords do not match");
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

      toast.success("Password updated successfully");
      setPasswords({ current: "", new: "", confirm: "" });

      navigate('/dashboard')

    } catch (error) {
      setError(error.response?.data?.message || error.message);
      toast.error("Update failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex-1 pl-6">
      <div>
        <h2 className="text-lg font-medium">Account Settings</h2>
        <p className="text-sm text-muted-foreground">
          Update your password and language preferences
        </p>
      </div>

      <div className="bg-border h-[1px] w-full shrink-0 my-6" />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Password Update Section */}
        <div className="space-y-4">
          <h3 className="font-medium">Password</h3>

          {/* Current Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Current Password</label>
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
                {showPassword.current ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium">New Password</label>
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
                {showPassword.new ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Confirm Password</label>
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
                {showPassword.confirm ? "Hide" : "Show"}
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
          {submitting ? "Updating..." : "Update Settings"}
        </button>
      </form>
    </div>
  );
}

export default AccountSettings;