import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
import './Catagories.css'

const CategoriesForm = ({ onFormSubmit, initialFormData, editMode }) => {
  const [formData, setFormData] = useState(initialFormData || { name: '', description: '', price: '' });
  const [errors, setErrors] = useState({}); // Add this line

  const handleFormSubmit = () => {
    // Basic validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Price must be a positive number';
    }

    if (Object.keys(newErrors).length === 0) {
      // No validation errors, submit the form
      onFormSubmit(formData, editMode);
      // Clear the form
      setFormData({ name: '', description: '', price: '' });
      setErrors({});
    } else {
      // Update the error state
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <button onClick={handleFormSubmit} style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px' }} className='adding'>
          {editMode ? <GrIcons.GrUpdate/> : <AiIcons.AiOutlineSave/>}
        </button>
      <form className='form'>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: <span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <div style={{ color: 'red' }}>{errors.name}</div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Price: <span style={{ color: 'red' }}>*</span></label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
          <div style={{ color: 'red' }}>{errors.price}</div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
       
      </form>
    </div>
  );
};

export default CategoriesForm;
