import { Button } from "@/components/ui/button";
import { useState } from "react";

function AppearenceSett() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  }
  return (
    <div className="flex-1 pl-6">
      <div>
        <h2 className="text-lg font-medium">Appearance</h2>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <div className="bg-border h-[1px] w-full shrink-0 my-6"></div>
      <form className="space-y-8">
        {/* Font Selection */}
        <div className="space-y-2">
          <label className="text-base font-medium">Font</label>
          <div className="relative w-max">
            <select
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md 
              text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 
              [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0 border border-input 
              bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] 
              appearance-none font-normal"
              name="font"
              id="font-select"
            >
              <option value="inter">Inter</option>
              <option value="manrope">Manrope</option>
              <option value="system">System</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down absolute right-3 top-2.5 h-4 w-4 opacity-50"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
          <p className="text-[0.8rem] text-muted-foreground">
            Set the font you want to use in the dashboard.
          </p>
        </div>

        {/* Theme Selection */}
        <div className="space-y-2">
          <label className="text-base font-medium">Theme</label>
          <p className="text-[0.8rem] text-muted-foreground">
            Select the theme for the dashboard.
          </p>
          <div className="grid max-w-md grid-cols-2 gap-8 pt-2 outline-none">
            {/* Light Option */}
            <div className="space-y-2" onClick={toggleTheme}>
                <div className={`items-center rounded-md border-2 p-1 ${!isDarkMode ? 'border-black' : ''}`}>
                  <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                    <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                  </div>
                </div>
                <span className="block w-full p-2 text-center font-normal">
                  Light
                </span>
            </div>

            {/* Dark Option */}
            <div className="space-y-2" onClick={toggleTheme}>
                <div className={`items-center rounded-md border-2 p-1 ${isDarkMode ? 'border-black' : ''}`}>
                  <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                    <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                  </div>
                </div>
                <span className="block w-full p-2 text-center font-normal">
                  Dark
                </span>
            </div>
          </div>
        </div>

        <Button>Update notifications</Button>
      </form>
    </div>
  );
}

export default AppearenceSett;
