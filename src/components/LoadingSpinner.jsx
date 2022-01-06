import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center space-x-2">
  <div className="spinner-border animate-spin inline-block w-32 h-32 border-4 rounded-full" role="status">
    <span className="bg-white text-transparent">Loading...</span>
  </div>
  </div>
  );
};

export default LoadingSpinner;
