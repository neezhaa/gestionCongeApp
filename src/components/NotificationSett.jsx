import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"



function NotificationSett() {

  const [selectedOption, setSelectedOption] = useState("all");
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/notifications", { type: selectedOption });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="flex-1 pl-6">
          <div>
              <h2 className="text-lg font-medium">Notifications</h2>
              <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
          </div>
          <div className="bg-border h-[1px] w-full shrink-0 my-6"></div>
          <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
            <div className="space-y-3">
              <label className="block font-medium text-sm">Notify me about...</label>
              <div className="flex flex-col space-y-1">
                <label className="flex items-center space-x-3">
                  <input
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary
                     shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring
                      disabled:cursor-not-allowed disabled:opacity-50"
                    type="radio"
                    name="type"
                    value="all"
                    checked={selectedOption === "all"}
                    onChange={handleChange}
                  />
                  <span className="font-normal text-sm">All new messages</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary
                     shadow focus:outline-none focus-visible:ring-1
                     focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    type="radio"
                    name="type"
                    value="mentions"
                    checked={selectedOption === "mentions"}
                    onChange={handleChange}
                  />
                  <span className="font-normal">Direct messages and mentions</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary
                     shadow focus:outline-none focus-visible:ring-1
                     focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    type="radio"
                    name="type"
                    value="none"
                    checked={selectedOption === "none"}
                    onChange={handleChange}
                  />
                  <span className="font-normal">Nothing</span>
                </label>
              </div>
            </div>
            <Button className="">Update notifications</Button>
        </form>
  </div>
  )
}

export default NotificationSett




