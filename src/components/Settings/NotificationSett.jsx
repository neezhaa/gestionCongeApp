import { useState } from "react";
import { Button } from "@/components/ui/button"



function NotificationSett() {

  const [selectedOption, setSelectedOption] = useState("all");
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  return (
    <div className="flex-1 pl-6">
          <div>
              <h2 className="text-lg font-medium">Notifications</h2>
              <p className="text-sm text-muted-foreground">Configurez comment vous recevez les notifications.
              </p>
          </div>
          <div className="bg-border h-[1px] w-full shrink-0 my-6"></div>
          <form  className="w-2/3 space-y-6">
            <div className="space-y-3">
              <label className="block font-medium text-sm">M&apos;avertir à propos de...</label>
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
                  <span className="font-normal">Tous les nouveaux messages</span>
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
                  <span className="font-normal">Messages directs et mentions</span>
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
                  <span className="font-normal">Aucune notification</span>
                </label>
              </div>
            </div>
            <Button className="">Mettre à jour les notifications</Button>
        </form>
  </div>
  )
}

export default NotificationSett




