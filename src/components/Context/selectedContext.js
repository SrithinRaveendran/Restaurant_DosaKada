import { createContext,  useState } from "react";
import {v4 as uuidv4} from 'uuid'

const SelectedContext = createContext();




const Menu = [
  {
    name: "Normal Dosa",
    category: "Main-Item",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Plain%20Dosa%20from%20North%20India.jpg",
    price: 15,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Normal-Masala",
    category: "MASALA",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Masala%20Dosa%20with%20sambar.jpg",
    price: 15,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Full Set Masala Dosa",
    category: "Main-Item",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Masala%20dosa.jpg",
    price: 45,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Kutty Dosa 3pcs",
    category: "Main-Item",
    image_URL: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Set_Dosey.jpg",
    price: 45,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Idli 3pcs",
    category: "Main-Item",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Idli%20%28South%20Indian%20cuisine%29.jpg",
    price: 25,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Red chutney (Tomato)",
    category: "Side-Dish",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Tomato%20chutney.jpg",
    price: 5,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "White chutney (Coconut)",
    category: "Side-Dish",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Coconut%20Chutney.jpg",
    price: 5,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Medu Vada 3pcs",
    category: "Main-Item",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Medu%20Vada%20with%20chutnies.jpg",
    price: 20,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Vegetable Sambar (Bowl)",
    category: "Side-Dish",
    image_URL: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Sambar_Vegetables.JPG",
    price: 10,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Onion Dosa",
    category: "Main-Item",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Onion%20dosa.jpg",
    price: 22,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Cheese Onion Dosa",
    category: "Main-Item",
    image_URL: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cheese_Onion_Dosa_-Home_made-Chennai%2C_Tamil_Nadu%2C_19.47.39.jpg",
    price: 28,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Uthappam (Veg)",
    category: "Main-Item",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Uthappam.jpg",
    price: 30,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Venn Pongal",
    category: "Main-Item",
    image_URL: "https://upload.wikimedia.org/wikipedia/commons/2/21/Ven_pongal_with_sambar_and_chutney.jpg",
    price: 25,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Filter Coffee",
    category: "Beverage",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Foaming%20filter%20coffee.jpg",
    price: 10,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Masala Chai",
    category: "Beverage",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Chai%20in%20a%20Glass.jpg",
    price: 8,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Gulab Jamun (2pcs)",
    category: "Dessert",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Gulab%20jamun%20-%20Lavapies%20(Spain).JPG",
    price: 12,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Rava Kesari",
    category: "Dessert",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Rava%20Kesari.jpg",
    price: 18,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Mysore Pak",
    category: "Dessert",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Mysore%20pak.jpg",
    price: 15,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Palada Payasam",
    category: "Dessert",
    image_URL: "https://commons.wikimedia.org/wiki/Special:FilePath/Palada%20Payasam.jpg",
    price: 22,
    qty: 0,
    id: uuidv4()
  }
];







export function SelectedProvider({ children }) {
    const [selected, setSelected] = useState([]);
    const [MenuState, setMenu] = useState(Menu);
    const[originalMenu] = useState(Menu)

    return (
        <SelectedContext.Provider value={{ selected, setSelected,MenuState,setMenu,originalMenu}}>
            {children}
        </SelectedContext.Provider>
    );
}

export { SelectedContext };
