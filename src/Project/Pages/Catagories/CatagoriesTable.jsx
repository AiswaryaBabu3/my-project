import React, { useState } from "react";
import * as AiIcons from 'react-icons/ai'


const CategoriesTable = ({ data, onEdit, selectedItems, onToggleSelect, onDeleteSelected }) => {
  const [sortBy, setSortBy] = useState("sno"); // Initial sorting by S.No
  const [sortOrder, setSortOrder] = useState("desc"); // Initial sorting order (descending)

  const handleSort = (column) => {
    if (column === sortBy) {
      // Toggle the sorting order if the same column is clicked
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Set a new column to sort and default to descending order
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortBy === "sno") {
      // Sort by S.No in descending order
      return sortOrder === "desc" ? b.id - a.id : a.id - b.id;
    } else if (sortBy === "name") {
      // Sort by 'name' in ascending order
      return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortBy === "price") {
      // Sort by 'price' in descending order
      return sortOrder === "desc" ? b.price - a.price : a.price - b.price;
    } else if (sortBy === "description") {
      // Sort by 'description' (you can adjust the sorting logic as needed)
      return sortOrder === "asc" ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description);
    } else {
      // Handle other cases if needed
      return 0;
    }
  });

  return (
    <div>
     <button onClick={() => onDeleteSelected(selectedItems)} className="del-btn"> <AiIcons.AiFillDelete/> </button>
      <table>
        <thead>
          <tr>
          <th>Select</th>
          <th onClick={() => handleSort("sno")}>S.No</th>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("price")}>Price</th>
            <th onClick={() => handleSort("description")}>Description</th>
            <th className="actions">Actions</th>
        </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => onToggleSelect(item.id)}
              />
            </td>
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
                  <AiIcons.AiFillEdit/>
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




