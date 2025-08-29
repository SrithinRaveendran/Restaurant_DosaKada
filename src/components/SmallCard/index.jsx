import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const SmallCard = (props) => {
    const { data, addItem, lessItem } = props
    console.log(data.image_URL)

    const add = () => (
        addItem(data)
    )

    const less = () => (
        lessItem(data)
    )
    return (
        <div className="smallCardcontainer" >
            <img className='item-image' src={data.image_URL} alt="items" />
            <div className='name-price-section'>
                <div className='name-price-container'>
                    <p>{data.name}</p>
                    <p>Price: {data.price}</p>

                </div>
                <div className='right-part'>
                    <div className='plus-minus-container'>
                        <button className='plus-minus-btn' onClick={add}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <button className='plus-minus-btn' onClick={less}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                    </div>
                    
                    <p>Qty: {data.qty}</p>
                    
                </div>
            </div>
        </div>
    )
}
export default SmallCard