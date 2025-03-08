import { Button } from "@/components/ui/button";
import { useState } from "react";

const options = ["Users", "Notifications", "Calendar"];

function DisplaySett() {
  const [checkedItems, setCheckedItems] = useState({
    Users: false,
    Notifications: false,
    Calendar: false,
  });

  const toggleCheckbox = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div className="flex-1 pl-6">
      <div>
        <h2 className="text-lg font-medium">Display</h2>
        <p className="text-sm text-muted-foreground">
          Turn items on or off to control what&apos;s displayed in the app.
        </p>
      </div>
      <div className="bg-border h-[1px] w-full shrink-0 my-6"></div>
      <form className="space-y-8">
        <div className="space-y-2">
          <label className="text-base font-medium">Sidebar</label>
          <p className="text-[0.8rem] text-muted-foreground">
            Select the items you want to display in the sidebar.
          </p>

          {options.map((option) => (
            <div key={option} className="flex flex-row items-center space-x-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  id={option}
                  type="checkbox"
                  checked={checkedItems[option]}
                  onChange={() => toggleCheckbox(option)}
                  className="sr-only peer"
                />
                <div
                  className={`h-4 w-4 border rounded-sm flex items-center justify-center transition-colors duration-200 ${
                    checkedItems[option] ? "bg-black border-black" : "border-black"
                  }`}
                >
                  {checkedItems[option] && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </label>
              <span className="select-none">{option}</span>
            </div>
          ))}
        </div>

        <Button>Update display</Button>
      </form>
    </div>
  );
}

export default DisplaySett;
