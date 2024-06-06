import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();

  
  return (
    <div className='pl-5 py-8 bg-yellow-500 text-4xl sticky top-0 left-0 w-full z-50 '><button onClick={()=>{  navigate(`/`);}}>Blog Posts</button></div>
  )
}

export default Header