import React from 'react';

const StudentCard = ({ name, house, image }) => (
  <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px', width: '200px' }}>
    <img src={image} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
    <h3>{name}</h3>
    <p>House: {house}</p>
  </div>
);

export default StudentCard;