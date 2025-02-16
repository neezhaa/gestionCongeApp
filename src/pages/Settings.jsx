import { Link, Outlet } from "react-router-dom"

function Settings() {
  return (
    <div className="bg-white w-[99%] h-fit p-10 m-2 border-2 border-gray-200 rounded-xl">
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
        <div className="h-[1px] w-full my-6 bg-border "></div>
        <div className="flex space-y-8 ">
                <aside className="lg:w-1/5">
                    <nav className="flex lg:flex-col lg:space-y-1">
                        <Link className=" items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:text-accent-foreground h-9 
                        px-4 py-2 hover:bg-muted " to="/settings">Profile</Link>
                        <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:text-accent-foreground h-9 
                        px-4 py-2 hover:bg-muted"  to="/settings/account">Account</Link>
                        <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:text-accent-foreground h-9 
                        px-4 py-2 hover:bg-muted" to="/settings/appearence">Appearence</Link>
                        <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:text-accent-foreground h-9 
                        px-4 py-2  hover:bg-muted" to="/settings/notifications">Notifications</Link>
                        <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:text-accent-foreground h-9 
                        px-4 py-2 hover:bg-muted" to="/settings/display">Display</Link>
                    </nav>
                </aside>
            
                <Outlet/>
                    
        </div>
    </div>
  )
}

export default Settings