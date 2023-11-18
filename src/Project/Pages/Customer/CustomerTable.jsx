// CustomerTable.js

import React, { useState, useEffect } from 'react';
import * as AiIcons from 'react-icons/ai';

const CustomerTable = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
   
    // Fetch user registrations from the backend
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('http://localhost:9090/api/user-registrations');
          const data = await response.json();
          setRegistrations(data.registrations);
      } catch (error) {
        console.error('Error fetching user registrations:', error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>City</th>
            <th>Area</th>
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
              <td>{user.Area}</td>
              <td>
                <button
                  className="btn"
                  style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', marginRight: '5px' }}
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

export default CustomerTable;
