import React from 'react';
import { useParams } from 'react-router-dom';

const BuySessions = () => {
  const { id } = useParams(); // You can use this ID to fetch coach-specific pricing if needed

  return (
    <div className="buy-sessions-container">
      {/* Render your pricing options similar to the photo */}
      {/* Include functionality to handle the purchase */}
    </div>
  );
};

export default BuySessions;
