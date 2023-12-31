// CustomerTable.js

import React, { useState, useEffect } from 'react';
import * as AiIcons from 'react-icons/ai';
import './Customer.css';

const Customer = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('http://localhost:9090/api/user-registrations');
        const data = await response.json();

        // Ensure that the registrations array exists and has at least one element
        if (data.registrations && data.registrations.length > 0) {
          // Create a new array and reverse it to ensure the latest data appears first
          const reversedRegistrations = [...data.registrations].reverse();

          setRegistrations(reversedRegistrations);
        }
      } catch (error) {
        console.error('Error fetching user registrations:', error);
      }
    };

    fetchRegistrations();
  }, []); // Dependency array is empty to ensure the effect runs only once

  return (
    <div className='customer'>
     <h1 className='customer-head'> CUSTOMER</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>City</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((user) => (
            <tr key={user._id}>
              <td>{user.Fullname}</td>
              <td>{user.EmailID}</td>
              <td>{user.ContactNumber}</td>
              <td>{user.City}</td>
              <td>{user.Password ? user.Password.replace(/./g, '*') : ''}</td>
              <td>
                <button
                  className='btn'
                  style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', marginRight: '5px' }}
                >
                  <AiIcons.AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
