import './index.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () =>{
    
    const navigate = useNavigate()
    
    const onHomeclick=()=>{
           navigate('/')  
    }

    const onYourorderClick = () =>{
        navigate('/Your-Order')
    }
    
    return(
        <div className='navbar'>
                <div className='logo-container'>
                    <p className='logofirstpart'>DOSA<span className='logosecondpart'>KADA</span></p>
                    <p className='logosecondpart'>DOSA<span className='logofirstpart'>KADA</span></p>
                </div>
                <div className='yourorder-container'>
                    <button className='yourorder-btn' onClick={onYourorderClick}>Your Order</button>
                    <button className='yourorder-btn' onClick={onHomeclick}>Home</button>
                </div>
            </div>
    )
}

export default Navbar