// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black opacity-90 mt-10">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-700">Loading...</h2>
        <p className="text-gray-500">Please wait a moment.</p>
      </div>
    </div>
  );
};

export default Loader;
