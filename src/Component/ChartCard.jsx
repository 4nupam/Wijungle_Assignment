import React from 'react';

const ChartCard = ({ dark, chart }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width: '100%',
        maxWidth: '600px', // Adjust max-width as needed
        margin: '0 auto',
        padding: '16px',
        border: dark ? '2px solid white' : '2px solid black',
        backgroundColor: "rgba(95, 92, 92, 0.1)",
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      {chart}
    </div>
  );
};

export default ChartCard;
