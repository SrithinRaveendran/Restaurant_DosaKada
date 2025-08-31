import './index.css'

import { useContext,  useState } from 'react';


import Navbar from '../Navbar';
import FrontLoadingPage from '../FrontLoadingPage'
import SmallCard from '../SmallCard';

import { SelectedContext } from "../Context/selectedContext";

const Home = () => {
  const [loadingPage, setLoadingpage] = useState(true)

  const loadingPageRemove = () => (
    setLoadingpage(false)
  )

  const { selected, setSelected, MenuState, setMenu, originalMenu } = useContext(SelectedContext)

  console.log("menustate", MenuState)

  const addItem = (data) => {
    setMenu((prev) =>
      prev.map((each) =>
        data.id === each.id ? { ...each, qty: each.qty + 1 } : each
      )
    );

    setSelected((prev) => {
      const exists = prev.find((item) => item.id === data.id);
      if (exists) {
        return prev.map((item) =>
          item.id === data.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...data, qty: 1 }];
      }
    });
  };


  const lessItem = (data) => {
    setMenu((prev) =>
      prev.map((each) =>
        data.id === each.id && each.qty > 0
          ? { ...each, qty: each.qty - 1 }
          : each
      )
    );

    setSelected((prev) =>
      prev
        .map((item) =>
          data.id === item.id && item.qty > 0
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0) // remove empty items
    );
  };


  let uniquCategory = []
  originalMenu.map(each =>
    uniquCategory.push(each.category)
  )
  uniquCategory = [...new Set(uniquCategory)]
  console.log(uniquCategory)


  const onChangecategory = (event) => {
    if (event.target.value !== "ALL") {
      const selectedcategory = originalMenu.filter(each =>
        each.category === event.target.value
      )
      setMenu(selectedcategory)
    } else {
      setMenu(originalMenu)
    }
  }

  console.log(selected)
  return (
    loadingPage ? <FrontLoadingPage loadingPageRemove={loadingPageRemove} /> :
      (<div className="homemainbackground">
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
  )

}
export default Home