import React from "react";

const CategoriesTable = ({ data, onEdit, onDelete }) => {

  return (
    <div>
    
      <table>
      <thead>
<tr>
  <th>S.No</th>
  <th>Name</th>
  <th>Price</th>
  <th>Description</th>
  <th>Actions</th>
</tr>
</thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
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

export default CategoriesTable;






