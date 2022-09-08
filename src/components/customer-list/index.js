import React, {useState} from "react";
import "./index.css";

function CustomerList() {
  const [customers, setCustomer] = useState([]);
  const [customerName, setCustomerName] = useState('');

  const handleChange = event => {
    setCustomerName(event.target.value);
  };

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" name='customer' onChange={handleChange} className="large" placeholder="Name" data-testid="app-input"/>
        <button type="submit" onClick={(e) => {
            setCustomer([...customers, customerName])

        }} className="ml-30" data-testid="submit-button">Add Customer</button>
      </section>
      <ul className="styled mt-50" data-testid="customer-list">

      {
        customers.map((data) => {
          return <li className="slide-up-fade-in" data-testid="list-item1" key="list-item1" >{data}</li>
        })
      }
      </ul>

      
      
    </div>
  );
}


export default CustomerList