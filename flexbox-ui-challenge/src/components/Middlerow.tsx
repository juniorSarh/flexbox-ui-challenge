import React from 'react';

export default function Middlerow() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end', // aligns items to the right
        border: '1px solid black', // optional: for visual debugging
        padding: '10px' // optional padding
      }}
    >
      <div
        style={{
          width: '300px',
          height: '150px',
          backgroundColor: 'skyblue',
          padding: '10px',
          margin: '20px'
        }}
      ></div>

      <div
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: 'red',
          margin: '20px'
        }}
      ></div>

      <div
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: 'skyblue',
          margin: '20px'
        }}
      ></div>
    </div>
  );
}