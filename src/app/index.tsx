
// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const HomePage = () => (
  <div className="container mx-auto p-4">
    <header className="text-center my-8">
      <h1 className="text-4xl font-bold">Seven Wonders of the World</h1>
      <p className="mt-4 text-lg">Discover the most amazing places on Earth.</p>
      <Link href="/wonders">
        <a className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded">Explore Wonders</a>
      </Link>
    </header>
  </div>
);

export default HomePage;

