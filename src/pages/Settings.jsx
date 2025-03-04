import { NavLink, Outlet } from "react-router-dom";

function Settings() {
  
  return (
    <div className="bg-white w-[99%] h-fit p-10 m-2 border-2 border-gray-200 rounded-xl">
      <h1 className="text-2xl font-bold mb-2">Settings</h1>
      <p className="text-muted-foreground">
        Manage your account settings and set e-mail preferences.
      </p>
      <div className="h-[1px] w-full my-6 bg-border "></div>
      <div className="flex space-y-8">
        <aside className="lg:w-1/5">
          <nav className="flex lg:flex-col lg:space-y-1">
            {[
              { to: "/settings", label: "Profile" },
              { to: "settings/account", label: "Account" },
              { to: "settings/appearence", label: "Appearence" },
              { to: "settings/notifications", label: "Notifications" },
              { to: "settings/display", label: "Display" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 ${
                    isActive ? "bg-muted" : " hover:underline"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <Outlet />
      </div>
    </div>
  );
}

export default Settings;
