import React, { useState } from 'react';
import CategoriesForm from './Catagories/CatagoriesForm';
import CategoriesTable from './Catagories/CatagoriesTable';
import './Catagories/Catagories.css';
import * as TiIcons from 'react-icons/ti';

const Categories = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false); // Added state for editMode
  const [categoryToEdit, setCategoryToEdit] = useState(null);

  const handleFormSubmit = (formData) => {
    if (editMode) {
      // Update data
      const updatedCategories = data.map((category) =>
        category.id === categoryToEdit.id ? { ...categoryToEdit, ...formData } : category
      );
      setData(updatedCategories);
    } else {
      // Add data
      const newCategory = { ...formData, id: Date.now() };
      setData([...data, newCategory]);
    }
    setCategoryToEdit(null);
    setEditMode(false);
    setShowForm(false);
  };
  
  // Handle delete
  const handleDelete = (categoryId) => {
    // Delete data
    const updatedCategories = data.filter((category) => category.id !== categoryId);
    setData(updatedCategories);
  };

  // Handle edit
  const handleEditClick = (categoryId) => {
    const categoryToEdit = data.find((item) => item.id === categoryId);
    if (categoryToEdit) {
      setCategoryToEdit(categoryToEdit);
      setEditMode(true);
      setShowForm(true);
    }
  };

  return (
    <div className='container-fluid home1'>
      <h1 className="head">
        Category
        {!showForm && (
          <button onClick={() => setShowForm(true)} className='adding'> <TiIcons.TiPlus/> </button>
        )}
      </h1>
      {showForm ? (
        <CategoriesForm
          onFormSubmit={handleFormSubmit}
          initialFormData={categoryToEdit}
          editMode={editMode}
        />
      ) : (
        <CategoriesTable data={data} onEdit={handleEditClick} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Categories;
