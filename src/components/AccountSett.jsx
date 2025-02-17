import { useState } from "react"

function AccountSett() {
    const [showOptions, setShowOptions] = useState(false)
  return (
    <div className="flex-1 pl-6">
        <div>
            <h2 className="text-lg font-medium">Account</h2>
            <p className="text-sm text-muted-foreground">Update your account settings. Set your preferred language and timezone.</p>
        </div>
        <div className="bg-border h-[1px] w-full shrink-0 my-6"></div>
        <form className="space-y-8">
            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Name
                </label>
                <input placeholder="Your name" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" name="username"/>
                <p className="text-[0.8rem] text-muted-foreground">This is the name that will be displayed on your profile and in emails.</p>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Email
                </label>
                <input type="email" placeholder="Your Email" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" name="email"/>
                <p className="text-[0.8rem] text-muted-foreground">This is the name that will be displayed on your profile and in emails.</p>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Date of birth
                </label>
                <input type="date" placeholder="Pick a date" className="flex h-9 w-64 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" name="date"/>
                <p className="text-[0.8rem] text-muted-foreground">Your date of birth is used to calculate your age.</p>
            </div>
            <div className="space-y-2 flex flex-col">
                <label className="text-sm font-medium">
                    Language
                </label>
                <button onClick={ () => setShowOptions(!showOptions) } className="relative inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] justify-between" type="button">
                    Français
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down opacity-50"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path>
                    </svg>
                </button> 
                {showOptions && (
                    <div className="w-52 bg-teal-400 border-black ">
                        <div className="border-gray-200 rounded overflow-hidden p-1 text-foreground [&amp;_[cmdk-group-heading]]:px-2 [&amp;_[cmdk-group-heading]]:py-1.5 [&amp;_[cmdk-group-heading]]:text-xs [&amp;_[cmdk-group-heading]]:font-medium [&amp;_[cmdk-group-heading]]:text-muted-foreground">
                            <div className="absolue">
                                <div className="hover:bg-gray-100 flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 opacity-0"><path d="M20 6 9 17l-5-5"></path></svg>
                                    Englais
                                </div>
                                <div className="hover:bg-gray-100 absolue flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 opacity-0"><path d="M20 6 9 17l-5-5"></path></svg>
                                    Arabe
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <p className="text-[0.8rem] text-muted-foreground">This is the language that will be used in the dashboard.</p>
            </div>
        </form>
        
    </div>
  )
}

export default AccountSett