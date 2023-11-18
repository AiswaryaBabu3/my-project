/*import React, { useState } from 'react';

const CustomerForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleFormSubmit = () => {
    // Basic validation
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // No validation errors, submit the form
      onFormSubmit(formData);
      // Clear the form
      setFormData({ name: '', email: '', phone: '', password: '' });
      setErrors({});
    } else {
      // Update the error state
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // You can implement your own email validation logic here
    // This is a simple example
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    // You can implement your own phone number validation logic here
    // This is a simple example for a 10-digit US phone number
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <div>
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
          <label>Email: <span style={{ color: 'red' }}>*</span></label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <div style={{ color: 'red' }}>{errors.email}</div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone Number: <span style={{ color: 'red' }}>*</span></label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <div style={{ color: 'red' }}>{errors.phone}</div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: <span style={{ color: 'red' }}>*</span></label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <div style={{ color: 'red' }}>{errors.password}</div>
        </div>
        <button onClick={handleFormSubmit} style={{ color: 'white', padding: '5px 10px' }} className='btn-save'>
          Register
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;*/
