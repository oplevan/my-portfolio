import React, { useState } from 'react';

const FullPageLoader = () => {
  return (
    <div id='loader-wrapper'>
      <div id='loader'></div>

      <div className='loader-section section-left'></div>
      <div className='loader-section section-right'></div>
    </div>
  );
};

const useFullPageLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <FullPageLoader /> : null,
    () => setLoading(true), // Show loader
    () => setLoading(false), // Hide Loader
  ];
};

export default useFullPageLoader;
