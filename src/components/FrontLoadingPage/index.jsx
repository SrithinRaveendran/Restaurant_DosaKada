import './index.css'
//import { useNavigate } from 'react-router-dom'
const FrontLoadingPage = (props) =>{
     const {loadingPageRemove} = props
     
    return(
    <div className='loadingpageMainBackground' onClick={()=>loadingPageRemove()}>
        <img className='logoimage' src="/dosalogo.png" alt="loadingpage"/>
    </div>
)}

export default FrontLoadingPage