import React, { useState } from 'react';
import './EditService.css';
import { FaTrashAlt } from 'react-icons/fa';

const EditService = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Website Hosting', price: '₹2,500' },
    { id: 2, title: 'Domain Registration', price: '₹800' },
    { id: 3, title: 'SEO Optimization', price: '₹1,200' },
  ]);

  const handleDelete = (id) => {
    const updated = products.filter((item) => item.id !== id);
    setProducts(updated);
  };

  return (
    <div className="Edit-Service-Container">
      <h2 className="Edit-Service-Title">Edit Service Listings</h2>
      <div className="Edit-Service-TableWrapper">
        <table className="Edit-Service-Table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Product Title</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)} className="Edit-Service-DeleteBtn">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="Edit-Service-NoDataText">
                  No services available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditService;
