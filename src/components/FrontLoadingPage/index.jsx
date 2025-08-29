import './index.css'
import { useNavigate } from 'react-router-dom'
const FrontLoadingPage = () =>{
    const navigate = useNavigate()
    return(
    <div className='loadingpageMainBackground' onClick={()=>navigate("/home")}>
        <img src="/dosalogo.png" alt="loadingpage"/>
    </div>
)}

export default FrontLoadingPage