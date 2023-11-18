import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";

const CategoriesTable = ({
  data,
  onEdit,
  selectedItems,
  onToggleSelect,
  onDeleteSelected,
  onSelectAll,
}) => {
  const [sortBy, setSortBy] = useState("sno");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortBy === "sno") {
      return sortOrder === "desc" ? b.id - a.id : a.id - b.id;
    } else if (sortBy === "name") {
      return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortBy === "price") {
      return sortOrder === "desc" ? b.price - a.price : a.price - b.price;
    } else if (sortBy === "description") {
      return sortOrder === "asc" ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description);
    } else {
      return 0;
    }
  });

  const handleSelectAll = () => {
    const allItemIds = data.map((item) => item.id);
    onSelectAll(allItemIds);
  };

  return (
    <div>
      <button onClick={() => onDeleteSelected(selectedItems)} className="del-btn">
        <AiIcons.AiFillDelete />
      </button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="radio"
                onChange={handleSelectAll}
                checked={selectedItems.length === data.length}
              />
            </th>
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
                  className="btn"
                  style={{ backgroundColor: "green", color: "white", padding: "5px 10px", marginRight: "5px" }}
                  onClick={() => onEdit(item.id)}
                >
                  <AiIcons.AiFillEdit />
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
