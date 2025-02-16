import { Button } from "@/components/ui/button"

function Profile() {
  return (
    <div className="flex-1 pl-6">
      <div>
          <h2 className="text-lg font-medium">Profile</h2>
          <p className="text-sm text-muted-foreground">This is how others will see you on the site.</p>
      </div>
      <div className="bg-border h-[1px] w-full shrink-0 my-6"></div>
      <form className="space-y-8">
          <div className="space-y-2">
              <label className="text-sm font-medium">
                  Username
              </label>
              <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" name="username"/>
              <p className="text-[0.8rem] text-muted-foreground">This is your public display name. It can be your real name or a  pseudonym. You can only change this once every 30 days.
              </p>
          </div>
      
          <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
          
          </div>
          <Button>Update profile</Button>
      </form>
    </div>
  )
}

export default Profile