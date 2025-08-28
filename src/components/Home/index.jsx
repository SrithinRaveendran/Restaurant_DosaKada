import './index.css'
import { v4 as uuidv4 } from 'uuid'
import { useContext,useState} from 'react';


import Navbar from '../Navbar';
import SmallCard from '../SmallCard';

import { SelectedContext } from "../Context/selectedContext";

const Home = () => {
    const Menu = [
        {
            name: "Normal Dosa",
            category: "Main-Item",
            image_URL: "/traditplain-dosa.jpg",
            price: 15,
            qty: 0,
            id: uuidv4()
        },
        {
            name: "Normal-Masala",
            category: "MASALA",
            image_URL: '/bottom-view-dosa-masala-normal.jpg',
            price: 15,
            qty: 0,
            id: uuidv4()
        },
        {
            name: 'Full Set Masala Dosa',
            category: "Main-Item",
            image_URL: '/full-set-masala-dosa.jpg',
            price: 45,
            qty: 0,
            id: uuidv4()
        }, {
            name: 'Kutty Dosa 3pcs',
            category: "Main-Item",
            image_URL: '/kutty-dosa.jpg',
            price: 45,
            qty: 0,
            id: uuidv4()
        }, {
            name: 'idli 3pcs',
            category: "Main-Item",
            image_URL: '/idli.jpg',
            price: 25,
            qty: 0,
            id: uuidv4()
        }, {
            name: 'Red chutney',
            category: "Side-Dish",
            image_URL: '/Tomato Chutney.jpeg',
            price: 5,
            qty: 0,
            id: uuidv4()
        }, {
            name: 'white chutney',
            category: "Side-Dish",
            image_URL: '/white-chutney.jpeg',
            price: 5,
            qty: 0,
            id: uuidv4()
        }
    ];

    const [MenuState, setMenu] = useState(Menu)
    //const [selected, setselected] = useState([])
     const {selected, setSelected} = useContext(SelectedContext)
     //setMenu(Menu)

    const addItem = (data) => {

        setMenu((prev) => (
            prev.map(each => (data.id === each.id ? { ...each, qty: each.qty + 1 } : each))
        ))

        setSelected((prev) => {
            // check if item already exists in cart
            const exists = prev.find((item) => item.id === data.id);

            if (exists) {
                // update quantity
                return prev.map((item) =>
                    item.id === data.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                // add new item with qty = 1
                return [...prev, { ...data, qty: 1 }];
            }
        });
    };

    const lessItem = (data) => {
        setMenu((prev) => (
            prev.map(each => (data.id === each.id && each.qty > 0 ? { ...each, qty: each.qty - 1 } : each))
        ))

        setSelected((prev)=>
        prev.map(each=>(data.id === each.id && each.qty > 0 ? {...each,qty: each.qty-1}: {})))
    }

    let uniquCategory = []
    Menu.map(each =>
        uniquCategory.push(each.category)
    )
    uniquCategory = [...new Set(uniquCategory)]
    console.log(uniquCategory)

    const onChangecategory = (event) => {
        if (event.target.value !== "ALL") {
            const selectedcategory = Menu.filter(each =>
                each.category === event.target.value
            )
            setMenu(selectedcategory)
        } else {
            setMenu(Menu)
        }
    }


   console.log(selected)
    return (

        <div className="homemainbackground">
            <Navbar />
            <div className='mainPart'>
                <div className='item-container'>
                    <select className='selectelement' onChange={onChangecategory}>
                        <option value="ALL">All</option>
                        {uniquCategory.map(each =>
                            <option value={each}>{each}</option>
                        )}
                    </select>
                    <div className='small-card-container'>
                        {MenuState.map(each =>
                            <>
                                <SmallCard data={each} addItem={addItem} lessItem={lessItem} key={each.id} />
                            </>

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home