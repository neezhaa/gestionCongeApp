import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button"

function Profile() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 pl-6">
      <div>
          <h2 className="text-lg font-medium">{t('settings.nav.profile')}</h2>
          <p className="text-sm text-muted-foreground">
            {t('profile.description')}
          </p>
      </div>
      <div className="bg-border h-[1px] w-full shrink-0 my-6"></div>
      <form className="space-y-8">
          <div className="space-y-2">
              <label className="text-sm font-medium">
                {t('profile.username.label')}
              </label>
              <input 
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" 
                name="username"
                placeholder={t('profile.username.placeholder')}
              />
              <p className="text-[0.8rem] text-muted-foreground">
                {t('profile.username.description')}
              </p>
          </div>
      
          <div className="space-y-2">
              <label className="text-sm font-medium">
                {t('login.email')}
              </label>
          </div>
          <Button>{t('profile.updateButton')}</Button>
      </form>
    </div>
  )
}

export default Profile