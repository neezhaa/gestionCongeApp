import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

function NotificationSettings() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("all");
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  return (
    <div className="flex-1 pl-6">
      <div>
        <h2 className="text-lg font-medium">{t('notificationSettings.title')}</h2>
        <p className="text-sm text-muted-foreground">
          {t('notificationSettings.description')}
        </p>
      </div>
      
      <div className="bg-border h-[1px] w-full shrink-0 my-6"></div>
      
      <form className="w-2/3 space-y-6">
        <div className="space-y-3">
          <label className="block font-medium text-sm">
            {t('notificationSettings.notifyMeAbout')}
          </label>
          <div className="flex flex-col space-y-1">
            {Object.entries(t('notificationSettings.options', { returnObjects: true })).map(([value, label]) => (
              <label key={value} className="flex items-center space-x-3">
                <input
                  className="aspect-square h-4 w-4 rounded-full border border-primary text-primary
                   shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring
                   disabled:cursor-not-allowed disabled:opacity-50"
                  type="radio"
                  name="type"
                  value={value}
                  checked={selectedOption === value}
                  onChange={handleChange}
                />
                <span className="font-normal">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <Button>{t('notificationSettings.updateButton')}</Button>
      </form>
    </div>
  )
}

export default NotificationSettings;

