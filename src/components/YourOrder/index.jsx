import './index.css'; // ✅ separate CSS file
import { useContext } from 'react';
import Navbar from '../Navbar';
import { SelectedContext } from "../Context/selectedContext";

const YourOrder = () => {
  const { selected } = useContext(SelectedContext);

  // Calculate total
  const total = selected.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="yourorder-mainbackground">
      <Navbar />
      <div className="yourorder-mainPart">
        <h2 className="receipt-title">Receipt</h2>

        <div className="receipt-container">
          {selected.length === 0 ? (
            <p className="empty-msg">No items selected yet.</p>
          ) : (
            <>
              <table className="receipt-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.map((item, index) => (
                     
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.qty}</td>
                      <td>₹{item.price}</td>
                      <td>₹{item.price * item.qty}</td> 
                    </tr>
                
                  ))}
                </tbody>
              </table>

              <div className="receipt-footer">
                <h3>Total: ₹{total}</h3>
                <button
                  className="print-btn"
                  onClick={() => window.print()}
                >
                  Print Receipt
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
