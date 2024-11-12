// pages/wonders.tsx
import React from 'react';

const wonders = [
  { name: 'Great Wall of China', description: 'A series of fortifications...', image: '/images/great-wall.jpg' },
  { name: 'Petra', description: 'A historical and archaeological city...', image: '/images/petra.jpg' },
  // Add more wonders
];

const WondersPage = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-3xl font-bold mb-4">The Seven Wonders</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {wonders.map((wonder) => (
        <div key={wonder.name} className="bg-white p-4 rounded shadow">
          <img src={wonder.image} alt={wonder.name} className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-bold mt-2">{wonder.name}</h3>
          <p>{wonder.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WondersPage;
