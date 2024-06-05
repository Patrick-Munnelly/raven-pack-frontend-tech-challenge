import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'



const MainLayout = ()=> {
  return (
    <div className="bg-gray-200 h-full w-full">
     <Header/>
       <Outlet />
<Footer/>
    </div>
  )
}

export default MainLayout