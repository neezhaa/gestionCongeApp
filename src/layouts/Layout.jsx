import { Outlet} from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Layout() {
  return (
    <div className='app-container'>
        <Sidebar />
        <main className='flex-1'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout