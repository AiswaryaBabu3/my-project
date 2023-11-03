import React from "react";

const Producttable = ({ data, onEdit, onDelete }) => {

  return (
    <div>
    
      <table className="table">
      <thead>
<tr>
  <th>S.No</th>
  <th>Name</th>
  <th>Price</th>
  <th>Offer Price</th>
  <th>Quantity</th>
  <th>Image</th>
  <th>Actions</th>
</tr>
</thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.offerprice}</td>
              <td>{item.quantity} </td>
              <td>{item.image}</td>
              <td>
              <button
  className='btn'
  style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', marginRight: '5px' }}
  onClick={() => onEdit(item.id)}
>
  Edit
</button>
                <button
                  className='btn'
                  style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px' }}
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Producttable;






