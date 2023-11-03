import React, { useState } from 'react';
import * as TiIcons from 'react-icons/ti';
import Producttable from './Products/Producttable';
import ProductForm from './Products/ProductForm';
import './Products/Prouct.css'

const Product = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (formData, editMode) => {
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
  
//handledelete
  const handleDelete = (categoryId) => {
    // Delete data
    const updatedCategories = data.filter((category) => category.id !== categoryId);
    setData(updatedCategories);
  };

  const [editMode, setEditMode] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  //handle edit
  const handleEditClick = (categoryId) => {
    const categoryToEdit = data.find((item) => item.id === categoryId);
    if (categoryToEdit) {
      setCategoryToEdit(categoryToEdit);
      setEditMode(true);
      setShowForm(true);
    }
  };
  

  return (
      <div className='product11'>
        <h1 className="head">
          Product
      {!showForm && (
            <button onClick={() => setShowForm(true)} className='adding'> <TiIcons.TiPlus/> </button>
          )}
        </h1>
        {showForm ? (
          <ProductForm
            onFormSubmit={handleFormSubmit}
            initialFormData={categoryToEdit} 
            editMode={editMode} 
            
          />
        ) : (
          <Producttable data={data} onEdit={handleEditClick} onDelete={handleDelete} />
        )}
      </div>
  
  );
};

export default Product;
