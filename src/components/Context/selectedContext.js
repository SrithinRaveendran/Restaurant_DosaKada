import { createContext,  useState } from "react";
import {v4 as uuidv4} from 'uuid'

const SelectedContext = createContext();




const Menu = [
  {
    name: "Normal Dosa",
    category: "MAIN ITEM",
    image_URL: "/normal-dosa.png",
    price: 15,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Normal-Masala",
    category: "MASALA",
    image_URL: "/masalamix_of_masala .png",
    price: 15,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Full Set Masala Dosa",
    category: "MAIN ITEM",
    image_URL: "/Full_Set_Masala_Dosa.png",
    price: 45,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Kutty Dosa 3pcs",
    category: "MAIN ITEM",
    image_URL: "/kutty_dosa_3pcs.png",
    price: 45,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Idli 3pcs",
    category: "MAIN ITEM",
    image_URL: "/Idli_3pcs.png",
    price: 25,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Red chutney (Tomato)",
    category: "SIDE DISH",
    image_URL: "/red_chutney.png",
    price: 5,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "White chutney (Coconut)",
    category: "SIDE DISH",
    image_URL: "/white-chutney.png",
    price: 5,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Medu Vada 3pcs",
    category: "MAIN ITEM",
    image_URL: "/Medu_Vada_3pcs.png",
    price: 20,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Vegetable Sambar (Bowl)",
    category: "SIDE DISH",
    image_URL: "/Vegetable_Sambar.png",
    price: 10,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Onion Dosa",
    category: "MAIN ITEM",
    image_URL: "/Onion_Dosa.png",
    price: 22,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Cheese Onion Dosa",
    category: "MAIN ITEM",
    image_URL: "/Cheese_Onion_Dosa.png",
    price: 28,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Uthappam (Veg)",
    category: "MAIN ITEM",
    image_URL: "/Uthappam_(Veg).png",
    price: 30,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Venn Pongal",
    category: "MAIN ITEM",
    image_URL: "/venn_pongal.png",
    price: 25,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Filter Coffee",
    category: "BEVERAGE",
    image_URL: "/Filter_Coffee.png",
    price: 10,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Masala Chai",
    category: "BEVERAGE",
    image_URL: "/Masala_Chai.png",
    price: 8,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Gulab Jamun (2pcs)",
    category: "DESSERT",
    image_URL: "/Gulab_Jamun _2pcs).png",
    price: 12,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Rava Kesari",
    category: "DESSERT",
    image_URL: "/Rava_Kesari.png",
    price: 18,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Mysore Pak",
    category: "DESSERT",
    image_URL: "/Mysore_Pak.png",
    price: 15,
    qty: 0,
    id: uuidv4()
  },
  {
    name: "Palada Payasam",
    category: "DESSERT",
    image_URL: "/Palada_Payasam.png",
    price: 22,
    qty: 0,
    id: uuidv4()
  }
];







export function SelectedProvider({ children }) {
    const [selected, setSelected] = useState([]);
    const [MenuState, setMenu] = useState(Menu);
    const[originalMenu] = useState(Menu)
    const [loadingPage, setLoadingpage] = useState(true)

    return (
        <SelectedContext.Provider value={{ selected, setSelected,MenuState,setMenu,originalMenu,loadingPage, setLoadingpage}}>
            {children}
        </SelectedContext.Provider>
    );
}

export { SelectedContext };
